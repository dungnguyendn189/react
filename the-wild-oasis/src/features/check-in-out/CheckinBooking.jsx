import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { useBooking } from "../bookings/useBooking";
import Snipper from "../../ui/Spinner";
import { useEffect, useState } from "react";
import CheckBox from "../../ui/Checkbox";

const Box = styled.div`
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setComfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();

  useEffect(() => setComfirmPaid(booking?.isPaid || false), [booking]);

  const moveBack = useMoveBack();
  if (isLoading) return <Snipper />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const handleCheckin = () => {};
  return (
    <>
      <Row type="horizontal">
        <Heading type="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <BookingDataBox booking={booking} />
      <Box>
        <CheckBox
          checked={confirmPaid}
          onChange={() => setComfirmPaid((comfirm) => comfirm)}
          disabled={confirmPaid}
          id="comfirm"
        >
          {" "}
          I confirm that {guests.fullName} has paid the total amount
        </CheckBox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin}>Checkin #Booking</Button>
        <Button onClick={moveBack} variation="secondary">
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
