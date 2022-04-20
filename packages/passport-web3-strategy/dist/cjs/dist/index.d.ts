import { Strategy } from 'passport';
export declare class Web3Strategy extends Strategy {
    private onAuth;
    name: string;
    constructor(_onAuth: (data: {
        address: string;
        msg: string;
        signed: string;
        chain: string;
        isevm: boolean;
        done: (err: Error | null, user: any, info: any) => void;
        req: any;
    }) => void | undefined);
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
    /**
     * sets the onAuth listener
     */
    setOnAuth(fnOnAuth: (data: {
        address: string;
        msg: string;
        signed: string;
        chain: string;
        isevm: boolean;
        done: (err: Error | null, user: any, info: any) => void;
        req: any;
    }) => void): Promise<void>;
}
