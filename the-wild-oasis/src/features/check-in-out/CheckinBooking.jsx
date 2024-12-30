import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";

const Box = styled.div`
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const booking = {};

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
      {/* <BookingDataBox booking={booking} /> */}
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
