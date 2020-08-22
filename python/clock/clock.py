class Clock:
    def __init__(self, hour, minute):
        self.minutes = hour * 60 + minute
        self.hour = str(self.minutes // 60 % 24).zfill(2)
        self.minute = str(self.minutes % 60).zfill(2)

    def __str__(self):
        return f'{self.hour}:{self.minute}'

    def __eq__(self, other):
        return str(self) == str(other)

    def __add__(self, minutes):
        total_minutes = self.minutes + minutes
        return Clock(total_minutes // 60, total_minutes % 60)

    def __sub__(self, minutes):
        total_minutes = self.minutes - minutes
        return Clock(total_minutes // 60, total_minutes % 60)
