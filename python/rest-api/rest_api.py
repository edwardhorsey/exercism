import json
from operator import itemgetter

class RestAPI:
    def __init__(self, database=None):
        self.database = database or {"users": []}

    def default(self, name):
        return { "name": name, "owes": {}, "owed_by": {}, "balance": 0.0 } 

    def clean_user(self, user):
        owes, owed = {}, {}

        for key in user['owes']:
            if user['owes'][key] < 0:
                owed[key] = -(user['owes'][key])
            elif user['owes'][key] > 0:
                owes[key] = user['owes'][key]

        for key in user['owed_by']:
            if user['owed_by'][key] < 0:
                owes[key] = -(user['owed_by'][key])
            elif user['owed_by'][key] > 0:
                owed[key] = user['owed_by'][key]
                
        user['owes'] = owes
        user['owed_by'] = owed
        return user

    def get(self, url, payload=None):
        if url == "/users":
            if payload:
                names = json.loads(payload)['users']
                users = list(filter(lambda user: user["name"] in names , self.database["users"]))
                response = { "users": users }
                return json.dumps(response)
            else:
                return json.dumps(self.database)

    def post(self, url, payload=None):
        if url == "/add":
            name = json.loads(payload)['user']
            default = self.default(name)
            self.database['users'].append(default)
            return json.dumps(default)

        elif url == "/iou":
            lender, borrower, amount = itemgetter('lender', 'borrower', 'amount')(json.loads(payload))
            for user in self.database["users"]:
                if user['name'] == lender:
                    if borrower in user["owes"].keys():
                        user["owes"][borrower] -= amount
                    elif borrower in user["owed_by"].keys():
                        user["owed_by"][borrower] += amount
                    else:
                        user["owed_by"][borrower] = amount

                    user["balance"] += amount

                if user['name'] == borrower:
                    if lender in user["owes"].keys():
                        user["owes"][lender] += amount
                    elif lender in user["owed_by"].keys():
                        user["owed_by"][lender] -= amount
                    else:
                        user["owes"][lender] = amount

                    user["balance"] -= amount

                user = self.clean_user(user)
            
            users = list(filter(lambda user: user["name"] in [lender, borrower] , self.database["users"]))
            response = { "users": users }
            return json.dumps(response)