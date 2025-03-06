export interface Cabin {
    name: string;
    image: string;
}

export interface Booking {
    id: number;
    guestId: number;
    startDate: string;
    endDate: string;
    numNights: number;
    totalPrice: number;
    numGuests: number; // Đổi từ guests thành numGuests để đúng với dữ liệu của bạn
    status: string;
    created_at: string;
    cabins: Cabin; // cabins là một object chứa name & image
}