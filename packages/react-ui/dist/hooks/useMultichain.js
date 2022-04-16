"use strict";
exports.__esModule = true;
exports.useMultichain = void 0;
var core_1 = require("@usedapp/core");
var useEthereum_1 = require("./useEthereum");
var useSolana_1 = require("./useSolana");
var useMultichain = function () {
    return {
        network: (0, core_1.useNetwork)() || 'Solana',
        ethereum: (0, useEthereum_1.useEthereum)(),
        solana: (0, useSolana_1.useSolana)()
    };
};
exports.useMultichain = useMultichain;
//# sourceMappingURL=useMultichain.js.map