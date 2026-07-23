import Link from "next/link";

export default function FoodCard({
    id,
    image,
    name,
    price,
    description
}) {

    return (
        <Link href={`/products/${id}`}>


            <div className="w-[390px] bg-[#FFE1CC] rounded-[35px] shadow-md">


                <div className="flex-column">
                    <div className="w-full h-[300px] overflow-hidden rounded-[30px]">

                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                        />

                    </div>

                    <div className="p-4">
                        <div className="flex justify-between items-center mt-5 px-2">

                            <h2 className="text-xl font-bold">
                                {name}
                            </h2>

                            <p className="text-xl font-bold">
                                ${price}
                            </p>

                        </div>


                        <p className="text-gray-700 text-sm mt-6 px-2 leading-5">

                            {description}

                        </p>

                        <button
                            className="
                            w-full
                            mt-8
                            bg-[#FF9B52]
                            text-white
                            py-3
                            rounded-full
                            text-lg
                            hover:bg-[#ff8840]
                            transition
                            "
                        >

                            Order Now

                        </button>
                    </div>
                </div>






            </div>
        </Link>


    );
}