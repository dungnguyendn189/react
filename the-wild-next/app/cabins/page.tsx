import Counter from "../components/couter";

const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();

interface User {
  id: number;
  name: string;
}

const Page: React.FC = () => {
  return (
    <div>
      <h1>This Cabins</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}

        <Counter data={data} />
      </ul>
    </div>
  );
};

export default Page;
