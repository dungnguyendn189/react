import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabins } from "../../services/apiCabin";
import toast from "react-hot-toast";

export default function useEditCabin() {
    const queryClient = useQueryClient()
    const { mutate: editCabin, isLoading: isEditting } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabins(newCabinData, id),
        onSuccess: () => {
            toast.success("New Edit successfully created");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { isEditting, editCabin }
}