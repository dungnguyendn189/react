
import { createSlice } from "@reduxjs/toolkit";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialStateAccount,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } }
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    }
  },
});




export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currentcy) {
  if (currentcy === "USD") return { type: "account/deposit", payload: amount };
  return async function (dispatch) {
    dispatch({ type: 'account/convertingCurrency' })
    const host = "api.frankfurter.app";
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currentcy}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD

    dispatch({ type: "account/deposit", payload: converted })
  };
}

export default accountSlice.reducer;


// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload,isLoading:false };
//     case "account/withdraw":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       //Later
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//       case "account/convertingCurrency" :
//       return {...state,isLoading:true}
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currentcy) {
//   if (currentcy === "USD") return { type: "account/deposit", payload: amount };
//   return async function (dispatch, getState) {
//     dispatch({type:'account/convertingCurrency'})
//     const host = "api.frankfurter.app";
//     const res = await fetch(
//       `https://${host}/latest?amount=${amount}&from=${currentcy}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD

//     dispatch ({ type:"account/deposit" , payload:converted})
//   };
// }
// export function withdraw(withdraw) {
//   return { type: "account/withdraw", payload: withdraw };
// }
// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: amount, purpose: purpose },
//   };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }
