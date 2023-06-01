import BigNumber from "bignumber.js";

/**

Converts a number from token units to decimal units based on the token's decimal precision.
@param {Object} options - The options for conversion.
@param {any} options.number - The number to be converted.
@param {number} [options.precision=0] - The number of decimal places to round the result to.
@param {number} [options.tokenDecimals=0] - The decimal precision of the token.
@returns {number} The converted number.
@example
// Example usage
const number = "0x1234";
const precision = 2;
const tokenDecimals = 18;
const result = toDecimals({ number, precision, tokenDecimals });
*/

export const toDecimals = ({
  number,
  precision = 0,
  tokenDecimals = 0,
}: {
  number?: any;
  precision?: any;
  tokenDecimals?: any;
}) => {
  if (number._hex == "0x00") return 0;
  const decimals = new BigNumber(10).exponentiatedBy(tokenDecimals);
  if (precision === 0)
    return new BigNumber(number._hex).dividedBy(decimals).toNumber();
  const res = new BigNumber(number._hex)
    .dividedBy(decimals)
    .toString()
    .split(".");
  if (res[1]) return Number(res[0] + "." + res[1].slice(0, precision));
  return Number(res[0]);
};

/**

Converts the result array to a readable format by converting undefined values to 0.
@param {any[]} result - The result array to be converted.
@returns {any[]} The converted result array.
@example
// Example usage
const result = [undefined, "123", undefined];
const readableResult = convertResultToReadableFormat(result);
*/

export const convertResultToReadableFormat = (result: any) => {
  return result.map((e: any) => {
    return e ? e.toString() : 0;
  });
};

/**

Checks if a URI is an IPFS URI.
@param {any} uri - The URI to be checked.
@returns {boolean} True if the URI is an IPFS URI, false otherwise.
@example
// Example usage
const uri = "ipfs:Qm123456";
const isIPFS = isUriIPFS(uri);
*/

export const isUriIPFS = (uri: any) => {
  const uriSplit = uri.split(":");
  return uriSplit[0] === "ipfs" ? uriSplit[1].slice(2) : false;
};

/**

Returns the image URI for an IPFS URI.
@param {any} uri - The IPFS URI.
@returns {string} The image URI.
@example
// Example usage
const uri = "ipfs:Qm123456";
const imageUri = imageURI(uri);
*/

export const imageURI = (uri: any) => {
  const uriSplit = uri.split(":");
  return uriSplit[0] === "ipfs"
    ? `https://gateway.ipfs.io/ipfs/${uriSplit[1].slice(2)}`
    : uri;
};

/**

Checks if all elements in an array are valid (not undefined or null).
@param {any[]} arr - The array to be checked.
@returns {boolean} True if all elements are valid, false otherwise.
@example
// Example usage
const arr = [1, "abc", null];
const isValid = areAllElementsValid(arr);
*/

export const areAllElementsValid = (arr: any) => {
  return arr.every((element: any) => element !== undefined && element !== null);
};
