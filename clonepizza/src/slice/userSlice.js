import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddress } from "../services/apiGetPosition";

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export const fetchAddress = createAsyncThunk(
    'user/fetchAddress',
    async function () {

        const positionObj = await getPosition();
        const position = {
            latitude: positionObj.coords.latitude,
            longitude: positionObj.coords.longitude
        };

        const addressObj = await getAddress(position);
        const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

        // 3) Then we return an object with the data that we are interested in
        return { position, address };
    }
);
const initialState = {
    userName: '',
    status: 'idle',
    position: {},
    address: '',
    error: ''
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.userName = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAddress.pending, (state) => { state.state = 'loading' }).
            addCase(fetchAddress.fulfilled, (state, action) => {
                state.address = action.payload.address;
                state.position = action.payload.position;
                state.status = 'idle';
            }).addCase(fetchAddress.rejected, (state) => {
                state.error = "Get Failed Positions";
                state.status = 'error';
            });

    }
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer; 