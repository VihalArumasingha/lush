import { mochiy } from "../app/layout";
import { quicksand } from "../app/layout";

export default function Header() {
  return (
    <nav className="z-1000 border-b border-solid border-black">
      <ul className="flex gap-30 items-center h-10 mb-10">
        <a href="./"><li><h1 className={`${mochiy.className} text-2xl`}>LUSH</h1></li></a>
        <a href="../"><li>Home</li></a>
        <a href="../products"><li>Menu</li></a>
        <a href="../contact"><li>Contact</li></a>
        <a href="../services"><li>Services</li></a>

      </ul>
      
      
    </nav>
  );
}