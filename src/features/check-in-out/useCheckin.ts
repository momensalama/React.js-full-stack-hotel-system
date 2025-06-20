// @ts-nocheck
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navgiate = useNavigate();
  const { mutate: checkin, isLoading: isChecking } = useMutation({
    mutationFn: ({
      bookingId,
      breakfast,
    }: {
      bookingId: string;
      breakfast: { breakfast: boolean };
    }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navgiate("/");
    },
    onError: () => toast.error("there was an error while checking in"),
  });
  return { checkin, isChecking };
}
