import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deletBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient()
    const { isloading: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deletBookingAPI,
        onSuccess: () => {
            toast.success("Cabin successfully deleted")
            queryClient.invalidateQueries({ queryKey: ["bookings"] });
        },
        onError: (err) => toast.error(err.message)
    })
    return { isDeleting, deleteBooking }
}