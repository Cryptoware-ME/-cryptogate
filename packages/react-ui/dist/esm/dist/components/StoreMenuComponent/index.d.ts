declare const index: ({ onDisconnect, Store, }: {
    onDisconnect: any;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
}) => JSX.Element;
export default index;
