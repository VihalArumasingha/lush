import { mochiy } from "../app/layout";
import { quicksand } from "../app/layout";

export default function Header() {
  return (
    <nav className="z-1000 border-b border-solid border-black">
      <ul className="flex gap-30 items-center h-10 mb-10">
        <li><h1 className={`${mochiy.className} text-2xl`}>LUSH</h1></li>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      
      
    </nav>
  );
}