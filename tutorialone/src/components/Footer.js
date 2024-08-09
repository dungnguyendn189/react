export default function Footer({ items }) {
  let countKill;
  let countDontKill;

  if (items) countDontKill = items.filter((item) => item.killMe === false);

  return (
    <footer className="footer">
      <h3>
        {items.length !== 0
          ? `🔪🔪🔪🔪🔪🩻🩻🩻 ${countDontKill.length} đối tượng chua bị giết trong số ${items.length} đối tượng huhu !! 🥴🥴🥴🥴`
          : "Mình vẫn vô đối hiiii !!! 🥴🥴🥴🥴🥴"}
      </h3>
    </footer>
  );
}
