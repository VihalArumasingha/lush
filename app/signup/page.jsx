import Image from "next/image";
import { mochiy } from "../layout"

export default function Signup(){
    return(
        <section className="relative isolate -mx-[30px] -my-[20px] overflow-hidden">
            <Image
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src="/loginbg.jpg"
                alt=""
                fill
                aria-hidden="true"
            />
            <div className="relative z-10 flex">
                <div className="flex-[1.5] mt-[30px] pl-[50px]">
                    <h1 className={`${mochiy.className} text-white text-7xl mt-[50px]`}>Create your account</h1>
                    
                    <form  className="mt-[60px]" action="">
                        <label className="pl-[20px] text-white" htmlFor="username">UserName</label><br />
                        <input className="pl-[20px] w-[400px] h-[40px] mt-[20px] mb-[10px] rounded-[100px] border-white border-[1px] text-white" type="text" name="username" placeholder="vihal@gmail.com"/><br/><br/>

                        <label className="pl-[20px] text-white" htmlFor="password ">Password</label><br />
                        <input className="pl-[20px] w-[400px] h-[40px] mt-[20px] rounded-[100px] border-white border-[1px] text-white" type="password" name="password" placeholder="************"/><br/><br/>

                        <label className="pl-[20px] text-white" htmlFor="cpassword ">Confirm Password</label><br />
                        <input className="pl-[20px] w-[400px] h-[40px] mt-[20px] rounded-[100px] border-white border-[1px] text-white" type="password" name="cpassword" placeholder="************"/><br/><br/>

                        <button className="w-[400px] h-[50px] bg-white text-black rounded-[100px] mt-[40px]">Login In</button>
                        <p className="text-white mt-[20px]">Already have an account ? <a href="../login/">Signin</a></p>
                    </form>
                </div>
                <div className="flex-1">
                    <Image
                        className="h-[700px] w-[700px] object-cover"
                        src="/login-image.png"
                        alt=""
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </section>
    )
}
