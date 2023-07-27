import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    error,
    isLoading,
    data: booking,
  } = useQuery({
    queryKey: ["Booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // by default, React Query will try to fetch data three times in case that it fails in the beginning
  });

  return {
    error,
    isLoading,
    booking,
  };
}
