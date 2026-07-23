import Image from "next/image";
import { mochiy } from "../layout"

export default function Login(){
    return(
        <section
            className="relative isolate -mx-[30px] -my-[20px] overflow-hidden"
            style={{
                height: "85vh",
                backgroundImage: "url('/loginbg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative z-10 flex">
                <div className="flex-[1.5] mt-[30px] pl-[50px]">
                    <h1 className={`${mochiy.className} text-white text-7xl mt-[50px]`}>Welcome Back</h1>
                    
                    <form  className="mt-[60px]" action="">
                        <label className="pl-[20px] text-white" htmlFor="username">UserName</label><br />
                        <input className="pl-[20px] w-[400px] h-[40px] mt-[20px] mb-[10px] rounded-[100px] border-white border-[1px] text-white" type="text" name="username" placeholder="vihal@gmail.com"/><br/><br/>

                        <label className="pl-[20px] text-white" htmlFor="password ">Password</label><br />
                        <input className="pl-[20px] w-[400px] h-[40px] mt-[20px] rounded-[100px] border-white border-[1px] text-white" type="password" name="password" placeholder="************"/><br/><br/>
                        <button className="w-[400px] h-[50px] bg-white text-black rounded-[100px] mt-[40px]">Login In</button>
                        <p className="text-white mt-[20px]">Don’t have an account ? <a href="../signup/">Signup</a></p>
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
