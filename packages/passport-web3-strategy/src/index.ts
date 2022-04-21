import { Strategy } from "passport";
import { verifyEthSig, verifySolSig } from "@cryptogate/core";

export class Web3Strategy extends Strategy {
  private onAuth: (data: {
    address: string;
    msg: string;
    signed: string;
    chain: string;
    isevm: boolean;
    done: (err: Error | null, user: any, info: any) => void;
    req: any;
  }) => void;
  public name: string;

  constructor(
    _onAuth: (data: {
      address: string;
      msg: string;
      signed: string;
      chain: string;
      isevm: boolean;
      done: (err: Error | null, user: any, info: any) => void;
      req: any;
    }) => void | undefined
  ) {
    super();
    if (_onAuth) {
      this.onAuth = _onAuth;
    } else {
      this.onAuth = (data: {
        address: string;
        msg: string;
        signed: string;
        chain: string;
        isevm: boolean;
        done: (err: Error | null, user: any, info: any) => void;
        req: any;
      }) => {
        data.done(
          null,
          {
            address: data.address,
            msg: data.msg,
            signed: data.signed,
            chain: data.chain,
            isevm: data.isevm,
          },
          ""
        );
      };
    }
    this.name = "web3";
  }

  /**
   * Authenticate request based on the contents of a form submission.
   *
   * @param {Object} req
   * @api protected
   */
  async authenticate(req: any) {
    const credentials = this.getCredentials(req);

    if (!credentials) {
      return this.fail("Missing credentials", 401);
    }

    const { address, msg, signed, chain, isevm } = credentials;

    if (isevm) {
      await verifyEthSig(address, {
        data: msg,
        signature: signed,
      }).catch((e) => {
        this.fail(e, 401);
      });
    } else {
      await verifySolSig(address, {
        data: msg,
        signature: signed,
      }).catch((e) => {
        this.fail(e, 401);
      });
    }

    const done = (err: Error | null, user: any, info: any) => {
      if (err) {
        return this.error(err);
      }
      if (!user) {
        return this.fail(info);
      }
      this.success(user, info);
    };

    try {
      this.onAuth({ address, msg, signed, chain, isevm, done, req });
    } catch (ex) {
      return this.error(ex);
    }
  }

  /**
   * Get the required auth params from request body, or fallback to query if
   * not provided in body, but provided in query
   * @param {Object} req
   * @return {Object}
   */
  getCredentials(req: any) {
    const has = (obj: any, key: any) =>
      Object.prototype.hasOwnProperty.call(obj, key);
    const hasAll = (obj: any, keys: any) =>
      obj && keys.every((k: any) => has(obj, k));

    const { body, query, headers } = req;
    const paramKeys = ["address", "msg", "signed", "chain", "isevm"];
    const headerParamKeys = [
      "x-web3-auth-address",
      "x-web3-auth-msg",
      "x-web3-auth-signed",
      "x-web3-auth-chain",
      "x-web3-auth-isevm",
    ];

    if (hasAll(body, paramKeys)) {
      return body;
    } else if (hasAll(query, paramKeys)) {
      return query;
    } else if (hasAll(headers, headerParamKeys)) {
      return {
        address: headers["x-web3-auth-address"],
        msg: headers["x-web3-auth-msg"],
        signed: headers["x-web3-auth-signed"],
        chain: headers["x-web3-auth-chain"],
        isevm: headers["x-web3-auth-isevm"],
      };
    }

    return null;
  }

  /**
   * sets the onAuth listener
   */
  async setOnAuth(
    fnOnAuth: (data: {
      address: string;
      msg: string;
      signed: string;
      chain: string;
      isevm: boolean;
      done: (err: Error | null, user: any, info: any) => void;
      req: any;
    }) => void
  ) {
    this.onAuth = fnOnAuth;
  }
}
