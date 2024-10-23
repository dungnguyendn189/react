import { useLoaderData } from "react-router-dom";
import { getMenuRes } from "../../services/apirestaurant";

function MenuList() {
  const menu = useLoaderData();
  console.log(menu);
  return <div>MenuList</div>;
}
export default MenuList;

export async function loader() {
  const menu = await getMenuRes();
  console.log(menu);
  return menu;
}
