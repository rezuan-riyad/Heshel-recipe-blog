import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function Carousel({ recipes }) {

  const renderedRecipes = recipes.map(recipe => {
    const imgSrc = "/images/" + recipe.img
    const subtitle = recipe.subtitle.substring(0, 100) + "... "
    return (
      <div className={styles.media} key={recipe.id}>
        <Image
          src={imgSrc}
          width={300}
          height={200}
          layout="responsive"
        />
        <section>
          <h3>{recipe.title}</h3>
          <p>{subtitle}<span><a>See Detail</a></span></p>
        </section>
        <style jsx>
          {`
            a{
              color: green;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    )
  })
  return (
    <>
      <div className="content">
        {renderedRecipes}
      </div>
      <style jsx>
        {`
        .content{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
          .content{
            display: flex;
            flex-direction: column;
          }
        }
        `}
      </style>
    </>
  )
}

export default Carousel