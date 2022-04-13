const passport = require("passport-strategy");

const { verifyEthSig, verifySolSig } = require("./verifySignatures");

class Web3Strategy extends passport.Strategy {
  constructor(onAuth) {
    if (!onAuth) {
      throw new TypeError("Web3Strategy requires an onAuth callback");
    }
    super();
    this._onAuth = onAuth;
    this.name = "web3";
  }

  /**
   * Authenticate request based on the contents of a form submission.
   *
   * @param {Object} req
   * @api protected
   */
  async authenticate(req, options) {
    const credentials = this.getCredentials(req);

    if (!credentials) {
      const err = {
        message: options.unauthorized || "Missing credentials",
      };
      return this.fail(err, 401);
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

    const done = (err, user, info) => {
      if (err) {
        return this.error(err);
      }
      if (!user) {
        return this.fail(info);
      }
      this.success(user, info);
    };

    try {
      this._onAuth(address, chain, done, req);
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
  getCredentials(req) {
    const has = (obj, key) =>
      Object.prototype.hasOwnProperty.call(obj, key);
    const hasAll = (obj, keys) =>
      obj && keys.every((k) => has(obj, k));

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
}

/**
 * Expose `Web3Strategy`.
 */
export default Web3Strategy;
