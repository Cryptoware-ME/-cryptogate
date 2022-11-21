import React from 'react';
export declare const ErrorsBagContext: React.Context<{
    errors: string[];
    addError: (error: any) => void;
}>;
export declare function useErrorsBag(): {
    errors: string[];
    addError: (error: any) => void;
};
