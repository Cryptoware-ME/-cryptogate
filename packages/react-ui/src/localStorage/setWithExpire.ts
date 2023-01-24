/**
 * 
 * @param key - The key to store the value under in local storage.
 * @param value - The key to store the value under in local storage.
 * @param ttl - The time to live (in milliseconds) for the stored value.
 * @description - This function sets a key-value pair in local storage with a specified time to live (TTL).
 */

export const setWithExpiry = (key: any, value: any, ttl: any) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
