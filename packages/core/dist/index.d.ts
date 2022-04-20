declare const _default$1: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare namespace ethSignatures_d {
  export {
    _default$1 as default,
  };
}

declare const _default: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare namespace solSignatures_d {
  export {
    _default as default,
  };
}

export { ethSignatures_d as verifyEthSig, solSignatures_d as verifySolSig };
