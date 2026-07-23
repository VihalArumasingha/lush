import Image from "next/image";
import { mochiy } from "./layout";
import { quicksand } from "./layout";
import FoodCard from "../components/FoodCard";
import products from "../JSON/products.json"
export default function Home() {

  return (
    <div>
      <div className="main-div relative isolate flex">
        <div className="absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2">
          <Image
            className="object-cover"
            src="/homebg.jpg"
            alt=""
            fill
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex-[50%]">
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

        <div className="relative z-10">
          <img className="w-[700px]" src="image-of-a-sushi-roll-held-by-chopsticks-on-a-transparent-background-free-png.webp" alt="sushi image" />
        </div>

      </div>

      <div className={`${mochiy.className} text-2xl text-center mt-[104px]`}>Our Popular Foods</div>

      <div className="grid grid-cols-3 gap-15 w-fit mx-auto mt-[60px]">
        {products.slice(0, 3).map(product => (

          <FoodCard

            key={product.id}
            
            id={product.id}

            image={product.img}

            name={product.name}

            price={product.price}

            description={product.shortDescription}

          />

        ))}
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center text-white bg-black mt-[60px] w-[300px] h-[50px] rounded-[100px] cursor-pointer">
          Show All &rarr;
        </div>
      </div>

      <div className="w-[100%] bg-black text-white rounded-[100px] mt-[104px] p-[30px] pr-[100px]">
        <h3 className={`${mochiy.className} text-2xl text-center mb-[50px]`}>Meet The Chef</h3>
        <div className="flex w-full gap-15">
          <div className="flex-1">
            <img className="rounded-[100px] w-[700px] h-[500px] object-cover" src="/chef.png" alt="" />
          </div>
          <div className="flex-1">
            <p className="text-xl mt-[20px]">At LUSH, Chef Marco brings together the warmth of Italian hospitality and the elegance of Japanese culinary traditions to create a truly unique dining experience. Every dish is thoughtfully prepared using premium ingredients, balancing authentic flavors with modern presentation. His philosophy is simple: exceptional food begins with passion, quality, and attention to every detail.
              Whether you're enjoying handcrafted sushi, signature seafood, or one of his exclusive creations, every plate reflects Chef Marco's dedication to delivering memorable moments through food. His commitment to excellence is what makes every visit to LUSH an experience worth savoring.</p>
            <button className="text-black bg-white rounded-[100px] w-[300px] h-[50px] mt-[80px]">About Us</button>
          </div>
        </div>
      </div>


      <div className={`${mochiy.className} text-2xl text-center mt-[104px]`}>Signature Foods</div>

      <div className="grid grid-cols-3 gap-15 w-fit mx-auto mt-[60px]">
        {products.slice(4, 10).map(product => (

          <FoodCard

            key={product.id}

            id={product.id}

            image={product.img}

            name={product.name}

            price={product.price}

            description={product.shortDescription}

          />

        ))}
      </div>


      <div className="w-[100%] bg-black text-white rounded-[100px] mt-[104px] p-[30px] pr-[100px]">
        <h3 className={`${mochiy.className} text-2xl text-center mb-[50px]`}>Reserve Your Table</h3>
        <div className="flex w-full gap-15">

          <div className="flex-1">
            <p className="text-xl mt-[20px]">At LUSH, every dining experience is designed to be unforgettable. Whether you're celebrating a special occasion, enjoying a romantic evening, or simply looking to indulge in exceptional cuisine, our team is ready to welcome you into an atmosphere of elegance and comfort.
              Reserve your table today and experience the perfect harmony of exquisite flavors, handcrafted dishes, and warm hospitality. From our carefully selected ingredients to our beautifully presented creations, every detail is prepared to make your visit truly special.
              Join us at LUSH and create memorable moments around extraordinary food, refined ambiance, and a dining experience crafted just for you.</p>
            <button className="text-black bg-white rounded-[100px] w-[300px] h-[50px] mt-[80px]">Contact Us</button>
          </div>
          <div className="flex-1">
            <img className="rounded-[100px] w-[700px] h-[500px] object-cover" src="/reserve.avif" alt="" />
          </div>
        </div>
      </div>



      <div className={`${mochiy.className} text-2xl text-center mt-[104px]`}>Dishes</div>

      <div className="grid grid-cols-3 gap-15 w-fit mx-auto mt-[60px]">
        {
          products
            .filter(product => product.category.includes("main")).slice(0, 3)
            .map(product => (
              <FoodCard
                key={product.id}
                id={product.id}
                image={product.img}
                name={product.name}
                price={product.price}
                description={product.shortDescription}
              />
            ))
        }
      </div>


    </div>



  )

}
