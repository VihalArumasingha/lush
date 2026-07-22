import { mochiy } from "../layout";
import { quicksand } from "../layout";
import { useState } from "react";


export default function SideBar({category,setCategory,cuisine,setCuisine,dietary,setDietary}) {


    function handleCategory(e) {

        if (e.target.checked == true) {

            let newCategory = [...category];

            newCategory.push(e.target.name);

            setCategory(newCategory);

        }

        else {

            let newCategory = [];

            for (let i = 0; i < category.length; i++) {

                if (category[i] != e.target.name) {

                    newCategory.push(category[i]);

                }

            }

            setCategory(newCategory);

        }

    }

    function handleCuisine(e) {

    if (e.target.checked) {

        let newCuisine = [...cuisine]

        newCuisine.push(e.target.name)

        setCuisine(newCuisine)

    }

    else {

        let newCuisine = []

        for (let i = 0; i < cuisine.length; i++) {

            if (cuisine[i] != e.target.name) {

                newCuisine.push(cuisine[i])

            }

        }

        setCuisine(newCuisine)

    }

}

function handleDietary(e) {

    if (e.target.checked) {

        let newDietary = [...dietary]

        newDietary.push(e.target.name)

        setDietary(newDietary)

    }

    else {

        let newDietary = []

        for (let i = 0; i < dietary.length; i++) {

            if (dietary[i] != e.target.name) {

                newDietary.push(dietary[i])

            }

        }

        setDietary(newDietary)

    }

}

    return (
        <div className="w-[442px] h-[1100px] px-[30px] border-black border mt-[50px] rounded-[50px]">
            <form>
                <h3 className={`${mochiy.className} mb-[20px] text-[20px] text-bold mt-[30px]`}>Category</h3>

                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="sushi-rolls" onChange={handleCategory}></input>
                        <label htmlFor="sushi">Sushi Rolls</label><br />
                    </div>

                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="pizza" onChange={handleCategory}></input>
                        <label htmlFor="pizza">Pizza</label><br />
                    </div>


                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="nigiri" onChange={handleCategory}></input>
                        <label htmlFor="nigiri">Nigiri</label><br />
                    </div>

                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="main" onChange={handleCategory}></input>
                        <label htmlFor="main">Main Course</label><br />
                    </div>


                    <div className="flex gap-[15px] mb-[50px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="appetizers" onChange={handleCategory}></input>
                        <label htmlFor="appetizers">Appetizers</label><br />
                    </div>
                </div>




                <h3 className={`${mochiy.className} mb-[20px] text-[20px] text-bold mt-[30px]`}>Cuisine Style</h3>

                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="japanese" onChange={handleCuisine}></input>
                        <label htmlFor="japanese">Japanese</label><br />
                    </div>

                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="italian" onChange={handleCuisine}></input>
                        <label htmlFor="italian">Italian</label><br />
                    </div>


                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="asian" onChange={handleCuisine}></input>
                        <label htmlFor="asian">Asian</label><br />
                    </div>

                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="seafood" onChange={handleCuisine}></input>
                        <label htmlFor="seafood">Seafood</label><br />
                    </div>


                    <div className="flex gap-[15px] mb-[50px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="signature" onChange={handleCuisine}></input>
                        <label htmlFor="signature">Signature</label><br />
                    </div>
                </div>




                <h3 className={`${mochiy.className} mb-[20px] text-[20px] text-bold mt-[30px]`}>Dietary Preferences</h3>

                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="vegetarian" onChange={handleDietary}></input>
                        <label htmlFor="vegetarian">Vegetarian</label><br />
                    </div>

                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="vegan" onChange={handleDietary}></input>
                        <label htmlFor="vegan">Vegan</label><br />
                    </div>


                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="non-vegan" onChange={handleDietary}></input>
                        <label htmlFor="non-vegan">Non-vegan</label><br />
                    </div>

                    <div className="flex gap-[15px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="spicy" onChange={handleDietary}></input>
                        <label htmlFor="spicy">Spicy</label><br />
                    </div>


                    <div className="flex gap-[15px] mb-[50px]">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="non-spicy" onChange={handleDietary}></input>
                        <label htmlFor="non-spicy">Non-spicy</label><br />
                    </div>

                    <button type="submit" className="w-[200px] h-[50px] bg-black text-white rounded-[50px] mb-[30px]">Filter</button>
                </div>

            </form>
        </div>
    )
}