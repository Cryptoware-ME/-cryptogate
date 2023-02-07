import { useEthereum } from "./ethereum"
import { useSolana } from "./solana"

export const useMultichain = () => {
    const ethereum = useEthereum()
    const solana = useSolana()

    return {
        ...ethereum, ...solana
    }
}