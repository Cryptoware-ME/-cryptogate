declare const config: {
    DappConfig: {
        readOnlyUrls: {
            1: string;
            4: string;
            80001: string;
            137: string;
            56: string;
            43114: string;
        };
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: any[];
        notifications: {
            checkInterval: number;
            expirationPeriod: number;
        };
        autoConnect: boolean;
    };
    SolConfig: {
        config: {
            env: string;
            autoConnect: boolean;
            lamportsPerSol: number;
        };
    };
};
export default config;
