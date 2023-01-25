import React from 'react';
export declare const ErrorsBagContext: React.Context<{
    errors: string[];
    addError: (_: any) => void;
    clearErrors: () => void;
}>;
export declare function useErrorsBag(): {
    errors: string[];
    addError: (_: any) => void;
    clearErrors: () => void;
};
