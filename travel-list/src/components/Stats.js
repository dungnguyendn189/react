export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding some items to your packing list 🦬</em>
      </p>
    );

  const numItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentaget = Math.round((numberPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentaget === 100
          ? "👜 You got everything ! Ready to Go 🛩️ "
          : `You have ${numItems} items on your list , and you already packed 
        ${numberPacked} (${percentaget})`}
      </em>
    </footer>
  );
}
