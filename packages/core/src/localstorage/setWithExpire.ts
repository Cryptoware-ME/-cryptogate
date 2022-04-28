export const setWithExpiry = (key: any, value: any, ttl: any) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
