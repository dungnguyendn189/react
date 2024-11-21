import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabins } from "../../services/apiCabin";

export default function useCreateCabin() {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabins,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { createCabin, isCreating }
}