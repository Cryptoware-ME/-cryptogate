import BigNumber from "bignumber.js";

export const toDecimals = ({
  number,
  precision = 0,
  tokenDecimals = 0,
}: {
  number?: any;
  precision?: any;
  tokenDecimals?: any;
}) => {
  const decimals = new BigNumber(10).exponentiatedBy(tokenDecimals);
  if (precision === 0) {
    return new BigNumber(number._hex).dividedBy(decimals).toNumber();
  }
  return new BigNumber(number._hex).dividedBy(decimals).toPrecision(precision);
};

export const convertResultToReadableFormat = (result: any) => {
  return result.map((e: any) => {
    return e
      ? toDecimals({
          number: e[0],
        })
      : 0;
  });
};

export const isUriIPFS = (uri: any) => {
  const uriSplit = uri.split(":");
  return uriSplit[0] === "ipfs" ? uriSplit[1].slice(2) : false;
};

export const imageURI = (uri: any) => {
  const uriSplit = uri.split(":");
  return uriSplit[0] === "ipfs"
    ? `https://gateway.ipfs.io/ipfs/${uriSplit[1].slice(2)}`
    : uri;
};

export const areAllElementsValid = (arr: any) => {
  return arr.every((element: any) => element !== undefined && element !== null);
};
