import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabin";

export default function useCabin() {
    const {
        isLoading,
        data: cabins,
        error,
    } = useQuery({ queryKey: ["cabin"], queryFn: getCabins });

    return { isLoading, cabins, error }
} 