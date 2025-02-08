import Link from "next/link";
import Navigation from "./components/Navigate";

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis. Welcome to paradise</h1>
      <Link href="/cabins">Expolorer luxury cabins</Link>
    </div>
  );
};

export default Home;
