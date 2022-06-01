declare const index: ({ onClose, Store, }: {
    onClose: any;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
}) => JSX.Element;
export default index;
