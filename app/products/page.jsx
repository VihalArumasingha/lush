"use client";

import { useState } from "react";
import products from "../../JSON/products.json";
import FoodCard from "../../components/FoodCard";
import SideBar from "./SideBar";

export default function Products() {

    const [category, setCategory] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [dietary, setDietary] = useState([])

    let filteredProducts = []

    for (let i = 0; i < products.length; i++) {

        let element = products[i]

        let cat = category.length == 0

        if (category.length >= 1) {

            for (let x = 0; x < category.length; x++) {

                for (let y = 0; y < element.category.length; y++) {

                    if (element.category[y] == category[x]) {

                        cat = true

                    }

                }

            }

        }


        let cui = cuisine.length == 0

        if (cuisine.length >= 1) {

            for (let x = 0; x < cuisine.length; x++) {

                for (let y = 0; y < element.cuisineStyle.length; y++) {

                    if (element.cuisineStyle[y] == cuisine[x]) {

                        cui = true

                    }

                }

            }

        }


        let diet = dietary.length == 0

        if (dietary.length >= 1) {

            for (let x = 0; x < dietary.length; x++) {

                for (let y = 0; y < element.dietaryPreferences.length; y++) {

                    if (element.dietaryPreferences[y] == dietary[x]) {

                        diet = true

                    }

                }

            }

        }


        if (cat && cui && diet) {

            filteredProducts.push(element)

        }

    }

    return (

        <div className="flex gap-10">

            <SideBar

                category={category}
                setCategory={setCategory}

                cuisine={cuisine}
                setCuisine={setCuisine}

                dietary={dietary}
                setDietary={setDietary}

            />



            <div className="grid grid-cols-2 gap-10 mt-[50px]">

                {

                    filteredProducts.map(product => (

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

    );

}