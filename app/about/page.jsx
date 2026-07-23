import { mochiy } from "../layout"

export default function about() {
    return (
        <div>
            <div>
                <div className="flex">
                    <div className="flex-1" >
                        <h1 className={`${mochiy.className} text-5xl mt-[50px]`}>About us</h1>
                        <hr className="w-[200px] mt-[50px]" />
                        <h1 className={`${mochiy.className} text-2xl mt-[50px]`}>Who we are</h1>

                        <p className="mb-[30px] mt-[40px] pr-[50px]">At LUSH, we believe that dining is more than just a meal — it is an experience that brings people together through unforgettable flavors, creativity, and passion. Founded with a vision to create a refined yet welcoming dining destination, LUSH combines traditional culinary techniques with modern innovation to deliver exceptional dishes crafted with care.</p>
                        <p className="mb-[30px] pr-[50px]">
                            Our journey began with a simple idea: to bring together the finest ingredients, skilled craftsmanship, and a love for creating memorable moments. Every dish served at LUSH reflects our commitment to quality, from carefully selected ingredients to the artistic presentation on every plate.
                            Inspired by the elegance of Japanese cuisine and the warmth of international culinary traditions, we create a unique dining experience where every guest can enjoy extraordinary flavors in a sophisticated atmosphere.
                        </p>

                    </div>
                    <div className="flex flex-1 items-center justify-center mt-[50px]">
                        <img className="rounded-[100px] h-[600px] w-[600px] " src="/hotel.jpg" alt="" />
                    </div>
                </div>


                <div className="flex">
                    <div className="flex flex-1 items-center justify-center mt-[50px]">
                        <img className="rounded-[100px] h-[600px] w-[600px] " src="/chef.png" alt="" />
                    </div>

                    <div className="flex-1 mt-[50px]" >
                        <hr className="w-[200px] mt-[50px] ml-auto mr-[50px]" />
                        <h1 className={`${mochiy.className} text-2xl mt-[50px] text-right pr-[50px]`}>About the master chef</h1>

                        <p className="mb-[30px] mt-[40px] pr-[50px] text-right">Born in Florence, Italy, Chef Marco Bellini has dedicated his life to exploring the art of fine cuisine. Growing up surrounded by Italy's rich culinary heritage, he developed a deep appreciation for authentic flavors, fresh ingredients, and the importance of food as a way of bringing people together.</p>
                        <p className="mb-[30px] pr-[50px] text-right">
                            After completing his culinary education in Italy, Chef Marco expanded his expertise by working in renowned restaurants across Europe and Asia. His journey introduced him to different cultures, techniques, and flavors, eventually inspiring him to create his own unique style that blends Italian passion with Japanese precision.

                        </p>
                        <p className="mb-[30px] pr-[50px] text-right">
                            At LUSH, Chef Marco leads our kitchen with creativity, discipline, and a commitment to excellence. Every dish is carefully designed to balance flavors, textures, and presentation, transforming simple ingredients into remarkable culinary experiences.
                        </p>

                    </div>

                </div>


            </div>
        </div>
    )
}
