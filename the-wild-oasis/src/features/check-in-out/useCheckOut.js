import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
    const queryClient = useQueryClient();
    const { mutate: checkout, isloading: isCheckOut } = useMutation({
        mutationFn: (bookingId) =>
            updateBooking(bookingId, {
                status: "checked-out",
            }),
        onSuccess: (data) => {
            toast.success(`Booking $${data.id} successfully checked Out`);
            queryClient.invalidateQueries({ active: true });
        },
        onError: () => toast.error("There was an error while checking Out"),
    });
    return { checkout, isCheckOut };
}
