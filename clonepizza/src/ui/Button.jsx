import { Link } from "react-router-dom";

function Button({ children, type, to, onClick, disabled }) {
  const base =
    "druation-300 text-sm bg-amber-500 inline-block rounded-full bg-or font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const style = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-1 text-sm",
    secondary:
      "hover:text-stone-800 text-sm md:px-6 md:py-3.5 px-4 py-2.5 druation-300 text-stone-400 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <button className={style[type]}>{children}</button>;
}

export default Button;
