import Layout from '../../components/layout'
import Head from 'next/head'
import homeStyles from '../../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import Slideshow from '../../components/recipes/Slideshow'
import Carousel from '../../components/home/Carousel'

export default function Recipes() {
  const data = [
    {
      id: 1,
      title: "Eggless Red Velvet Pancakes",
      subtitle: "Soft, fluffy Red Velvet Pancakes made with basic ingredients found in pantry. These pancakes take just 20 mins from start to finish and drizzled with a fluffy cream cheese icing, these are perfect anytime",
      img: "pancake.jpg"
    },
    {
      id: 2,
      title: "Chocklete Banana Muffins",
      subtitle: "These Vegan Chocolate Banana Muffins are super moist, packed with chocolate and so delicious that even pickiest eater won’t mind eating these!! Perfect breakfast or any time treat!",
      img: "banana-muffin.jpg"
    },
    {
      id: 3,
      title: "Crispy Fried Chicken",
      subtitle: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquincididunt ut labore et dolore magna aliqu ",
      img: "crispy-chicken.jpg"
    }
  ]
  const vegData = [
    {
      id: 1,
      title: "Broccoli Quinoa Cakes",
      subtitle: "These Broccoli Quinoa Cakes can be made in 30 minutes & are a delicious healthy vegetarian meal that your whole family will love!",
      img: "veg1.jpg"
    },
    {
      id: 2,
      title: "Eggplant Lassanga",
      subtitle: "These Vegan Chocolate Banana Muffins are super moist, packed with chocolate and so delicious that even pickiest eater won’t mind eating these!! Perfect breakfast or any time treat!",
      img: "eggplant.jpg"
    },
    {
      id: 3,
      title: "Roasted Cauliflower Pasta",
      subtitle: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquincididunt ut labore et dolore magna aliqu ",
      img: "veg-3.jpg"
    }
  ]
  return (
    <Layout title="Home">
      <Head>

      </Head>
      <Slideshow recipesArr={data}/>
      <div className={homeStyles.containerLg}>
        <h1>Dessert Recipes</h1>
        <hr />
        <Carousel recipes={data}/>
        <section>
          <button className="btn">See More</button>
        </section>

        <h1>Vegetarian Dining</h1>
        <hr />
        <Carousel recipes={vegData}/>
        <section>
          <button className="btn">See More</button>
        </section>

      </div>
      <style jsx>
        {`
        section{
          text-align: center;
        }
        .btn{
          border: 1px solid lightgray;
        }
        h1{
          margin-top: 50px;
        }
        `}
      </style>
    </Layout>
  )
}