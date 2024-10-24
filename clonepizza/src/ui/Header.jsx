import { Link } from "react-router-dom";
import Search from "../feauter/order/Search";
import UserName from "../feauter/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-stone-200 bg-amber-500 px-4 py-3 font-bold text">
      <Link to="/" className="tracking-widest">
        Dũng Pizza
      </Link>
      <Search />
      <UserName />
    </header>
  );
}

export default Header;
