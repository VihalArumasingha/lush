import { quicksand } from "../app/layout";

export default function Footer() {
  return (
    <footer
      className={`footer ${quicksand.className} -mx-[30px] -mb-[20px] mt-[104px] bg-black text-white border-2 border-[#0094ff] px-[45px] pt-[22px] pb-[78px]`}
    >
      <div>
        <h2 className="text-[20px] font-bold">LUSH</h2>
        <p className="mt-[28px] max-w-[600px] text-[15px] font-bold leading-[1.35]">
          Where Luxury Meets Flavor&nbsp; Experience exquisite cuisine crafted with
          passion, tradition, and elegance.
        </p>
      </div>

      <div className="mt-[64px] grid grid-cols-3 items-start">
        <div>
          <h3 className="text-[22px] font-bold">Quick Links</h3>
          <ul className="mt-[6px] space-y-[7px] text-[16px] font-semibold">
            <li>Menu</li>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-[22px] font-bold">Contact</h3>
          <div className="mt-[10px] space-y-[7px] text-[16px] font-bold">
            <p>+94 234 567 890</p>
            <p>hello@lush.com</p>
            <p>123 Gourmet Street</p>
          </div>
        </div>

        <div className="text-right">
          <h3 className="text-[22px] font-bold">Follow Us</h3>
          <ul className="mt-[10px] space-y-[7px] text-[16px] font-bold">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X || Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
