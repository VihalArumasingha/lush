import Image from "next/image";
import { mochiy } from "../layout"


export default function contact() {
    return (
        <div>
            <div className="flex">
                <div className="flex-1" >
                    <h1 className={`${mochiy.className} text-5xl mt-[50px]`}>Contact us</h1>
                    <hr className="w-[200px] mt-[50px]" />
                    <p className="mt-[40px] pr-[50px]">Have questions, special requests, or want to reserve your next dining experience? Our team is always ready to assist you. Reach out to us and let us make your visit to LUSH truly unforgettable.</p>

                    <form action="" className="mt-[50px]">
                        <label className=" pl-[20px]" htmlFor="">Your Full Name</label><br /><br />
                        <input type="text" placeholder="Your name" className="pl-[20px] w-[400px] h-[50px] rounded-[100px] border" /><br /><br />

                        <label className=" pl-[20px]" htmlFor="">Your Contact number</label><br /><br />
                        <input type="tel" placeholder="Your number" className="pl-[20px] w-[400px] h-[50px] rounded-[100px] border" /><br /><br />

                        <label className=" pl-[20px]" htmlFor="">Message</label><br /><br />
                        <textarea placeholder="Enter your message here" className="pl-[20px] pt-[20px] border rounded-[100px]" id="message" name="message" rows="4" cols="50"></textarea><br /><br />

                        <button className="ml-[100px] w-[200px] h-[50px] bg-black text-white rounded-[100px]">Submit</button>
                    </form>
                </div>
                <div className="flex-1 mt-[50px]">
                    <img className="rounded-[100px] h-[700px] w-[700px] " src="/hotel.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}