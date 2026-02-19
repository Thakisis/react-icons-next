import { Icons } from "@/global/icons";
import Card from "../card/cardItem";

console.log(Icons);
export default function IconList() {
  return Icons.map((icon) => (
    <Card iconSize={24} isFolder={false} {...icon} key={icon.name} />
  ));
}
