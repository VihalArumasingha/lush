import Image from "next/image";
import { mochiy } from "../layout"

export default function services() {
    return (
        <div>
            <h1 className={`${mochiy.className} text-5xl text-center mt-[50px]`}>Our Services</h1>
            <hr className="w-[200px] mx-auto my-4 mt-[30px]" />
            <p className="text-center px-[300px] mt-[40px]">Dining at LUSH was an experience beyond my expectations. From the moment I walked in, I was welcomed by a beautiful atmosphere, elegant interior, and a team that truly understands the meaning of great hospitality.</p>


            <div className="grid grid-cols-3 gap-15 w-fit mx-auto mt-[60px]">
                <div className="w-[390px] bg-[#FFE1CC] rounded-[35px] shadow-md">


                    <div className="flex-column">
                        <div className="w-full h-[300px] overflow-hidden rounded-[30px]">

                            <img
                                src="/online-order.avif"
                                alt=""
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-4">
                            <div className="text-center">

                                <h2 className="text-center text-xl font-bold">
                                    Online Ordering
                                </h2>

                            </div>


                            <p className="text-center text-gray-700 text-sm mt-6 px-2 leading-5 mb-[30px]">

                                Enjoy the flavors of LUSH from the comfort of your home. Browse our premium menu, select your favorite dishes, and place your order with just a few clicks.

                            </p>

                        </div>
                    </div>






                </div>

                <div className="w-[390px] bg-[#FFE1CC] rounded-[35px] shadow-md">


                    <div className="flex-column">
                        <div className="w-full h-[300px] overflow-hidden rounded-[30px]">

                            <img
                                src="/reserve-service.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-4">
                            <div className="text-center">

                                <h2 className="text-center text-xl font-bold">
                                    Table Reservations
                                </h2>

                            </div>


                            <p className="text-center text-gray-700 text-sm mt-6 px-2 leading-5 mb-[30px]">

                                Planning a special dinner or a casual evening with friends? Reserve your table in advance and let us prepare the perfect dining experience for you.
                            </p>

                        </div>
                    </div>






                </div>

                <div className="w-[390px] bg-[#FFE1CC] rounded-[35px] shadow-md">


                    <div className="flex-column">
                        <div className="w-full h-[300px] overflow-hidden rounded-[30px]">

                            <img
                                src="/private.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-4">
                            <div className="text-center">

                                <h2 className="text-center text-xl font-bold">
                                    Private Dining & Events
                                </h2>

                            </div>


                            <p className="text-center text-gray-700 text-sm mt-6 px-2 leading-5 mb-[30px]">

                                Celebrate your special moments in an elegant atmosphere designed for unforgettable gatherings. From intimate dinners to private celebrations, our team creates personalized experiences tailored to your needs.                            </p>

                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}