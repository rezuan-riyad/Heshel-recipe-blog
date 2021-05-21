import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import homeStyles from '../../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import Slideshow from '../../components/recipes/Slideshow'
import CardGroup from '../../components/home/CardGroup'

import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'recipeBlogPost' })

  return {
    props: {
      recipes: res.items,
      revalidate: 1
    }
  }
}

export default function Recipes({ recipes }) {

  const fastFoodRecipes = recipes.filter(recipe => {
    return recipe.fields.category == 'fastfood'
  })

  const vegRecipes = recipes.filter(recipe => {
    return recipe.fields.category == 'vegdine'
  })

  return (
    <Layout title="Home">
      <Head>

      </Head>
      <Slideshow recipesArr={vegRecipes} />
      <div className={homeStyles.containerLg}>
        <h1>Dessert Recipes</h1>
        <hr />
        <CardGroup recipes={fastFoodRecipes} />
        <section>
          <button className="btn">
            <Link href={`/recipes/fastfood`}><a>See More</a></Link>
          </button>
        </section>

        <h1>Vegetarian Dining</h1>
        <hr />
        <CardGroup recipes={vegRecipes} />
        <section>
          <button className="btn">
            <Link href={`/recipes/vegdine`}><a>See More</a></Link>
          </button>
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