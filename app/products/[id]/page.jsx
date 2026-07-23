import products from "../../../JSON/products.json"
import { mochiy } from "../../layout";
import { quicksand } from "../../layout";

export default async function ProductPage({ params }) {


    const { id } = await params;


    const product = products.find(
        item => item.id == id
    );

    return (


        <div className="px-[50px] py-[50px]">
            <div className="flex w-[100%]">
                <div className="flex-1">
                    <h1 className={`${mochiy.className} text-5xl`}>{product.name}</h1>
                    <h3 className={`${mochiy.className} text-2xl mt-[40px]`}>$ {product.price}</h3>
                    <hr className="w-[100px] mt-[40px]" />
                    <p className="mt-[24px] pr-[71px]">{product.longDescription}</p>
                    <div className="flex mt-[50px] gap-[30px]">
                        <div className="w-[200px] h-[50px] border border-black text-center rounded-[100px] flex items-center justify-center">{product.features[0]}</div>
                        <div className="w-[200px] h-[50px] border border-black text-center rounded-[100px] flex items-center justify-center">{product.features[1]}</div>
                    </div>
                    <div className="flex mt-[50px] gap-[30px]">
                        <div className="w-[200px] h-[50px] border border-black text-center rounded-[100px] flex items-center justify-center">{product.features[2]}</div>
                        <div className="w-[200px] h-[50px] border border-black text-center rounded-[100px] flex items-center justify-center">{product.features[3]}</div>
                    </div>
                    <button className="w-[400px] h-[50px] text-white bg-black rounded-[100px] mt-[50px]">Order Now</button>
                </div>
                <div className="flex-1">
                    <img src={product.img} className="w-[600px] h-[600px] object-cover rounded-[100px]"></img>
                </div>
            </div>
        </div>

    )

}