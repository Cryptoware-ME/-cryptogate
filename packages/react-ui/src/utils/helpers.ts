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
  if (number._hex == "0x00") return 0
  const decimals = new BigNumber(10).exponentiatedBy(tokenDecimals);
  if (precision === 0)
    return new BigNumber(number._hex).dividedBy(decimals).toNumber();
  const res = new BigNumber(number._hex).dividedBy(decimals).toString().split(".")
  if (res[1])
    return Number(res[0] + "." + res[1].slice(0, precision))
  return Number(res[0])
};

export const convertResultToReadableFormat = (result: any) => {
  return result.map((e: any) => {
    return e
      ? e.toString()
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
