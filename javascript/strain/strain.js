export const keep = (items, callback) => items.filter(callback);

export const discard = (items, callback) => {
  const keeping = keep(items, callback);
  return items.filter((item) => !keeping.includes(item));
};
