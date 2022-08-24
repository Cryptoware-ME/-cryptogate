import { Strategy } from 'passport';

declare class Web3Strategy extends Strategy {
    private _verify;
    name: string;
    constructor(options: any, verify: (req: any, address: string, msg: string, signed: string, chain: string, isevm: boolean, done: (err: Error | null, user: any, info: any) => void) => void | undefined);
    /**
     * Authenticate request based on the contents of a form submission.
     *
     * @param {Object} req
     * @api protected
     */
    authenticate(req: any): Promise<void>;
    /**
     * Get the required auth params from request body, or fallback to query if
     * not provided in body, but provided in query
     * @param {Object} req
     * @return {Object}
     */
    getCredentials(req: any): any;
}

export { Web3Strategy };
