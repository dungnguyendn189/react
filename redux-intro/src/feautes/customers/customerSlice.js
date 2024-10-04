import { createSlice } from "@reduxjs/toolkit";

const initialStateCustumers = {
  fullName: "",
  nationID: "",
  createAt: "",
};

const customerReducer = createSlice({
  name: 'customer',
  initialState: initialStateCustumers,
  reducers: {

    createCustomer: {
      prepare(fullName, nationalId) {
        return { payload: { fullName, nationalId, createAt: new Date().toISOString() } }
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationID = action.payload.nationID;
        state.createAt = action.payload.createAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    }
  }
});

console.log(initialStateCustumers.nationID)

export const { createCustomer, updateName } = customerReducer.actions;

export default customerReducer.reducer;

// export default function customerReducer(state = initialStateCustumers, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationID: action.payload.nationID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
