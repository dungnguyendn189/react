import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setRatingMovie] = useState(0);
//   return (
//     <p>
//       <StarRating color="blue" maxRating={10} onSetRating={setRatingMovie} />
//       <p>This movie was rated {movieRating} starts</p>
//     </p>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <Test /> */}
  </React.StrictMode>
);
