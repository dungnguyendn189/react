import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  const base =
    "druation-300 text-sm bg-amber-500 inline-block rounded-full bg-or font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const style = { primary: base + " px-4 py-3 sm:px-6 sm-py4" };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  return <button className={style[type]}>{children}</button>;
}

export default Button;
