import { useLoaderData } from "react-router-dom";
import { getMenuRes } from "../../services/apirestaurant";
import MenuItem from "./MenuItem";

function MenuList() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((menu) => (
        <MenuItem menu={menu} key={menu.id} />
      ))}
    </ul>
  );
}
export default MenuList;

export async function loader() {
  const menu = await getMenuRes();
  return menu;
}
