import { mochiy } from "./layout";
import { quicksand } from "./layout";
import FoodCard from "../components/FoodCard";

export default function Home() {

  return (
    <div>
      <div className="flex">
        <div className="flex-[50%]">
          <h2 className={`${mochiy.className} text-[85px]`}>
            Enjoy healthy and delicious foods
          </h2>
          <div className="mt-[40px] mb-[40px]">
            <button className="w-[224px] h-[50px] rounded-full border border-solid border-black mr-[40px]">
              View Menu
            </button>
            <button className="w-[224px] h-[50px] rounded-full border border-solid border-black">
              About Us
            </button>
          </div>
          <hr className="w-[300px]" />
          <p className="border-box pr-[100px] mt-[40px]">Dining at LUSH was an experience beyond my expectations. From the moment I walked in, I was welcomed by a beautiful atmosphere, elegant interior, and a team that truly understands the meaning of great hospitality.</p>
          <p className="border-box pr-[100px] mt-[15px] font-bold">-- John De Silva </p>

        </div>

        <div>
          <img className="w-[700px]" src="image-of-a-sushi-roll-held-by-chopsticks-on-a-transparent-background-free-png.webp" alt="sushi image" />
        </div>

      </div>

      <div className="flex justify-center gap-10">

        <FoodCard

          image="/360_F_279764101_ai492SXhESzs6f3eQa1YgGTQerKazSlQ.jpg"

          name="Cheese Burger"

          price="3400"

          description="A cheeseburger is a hamburger with melted cheese on top of the meat patty"

        />

      </div>

    </div>

  )

}