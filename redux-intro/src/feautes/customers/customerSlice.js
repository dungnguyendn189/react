const initialStateCustumers = {
  fullName: "",
  nationID: "",
  createAt: "",
};

export default function customerReducer(state = initialStateCustumers, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationID: action.payload.nationID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
