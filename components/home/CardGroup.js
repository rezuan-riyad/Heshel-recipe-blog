import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function CardGroup({ recipes }) {

  let _recipes = []
  for(let i=0; i<3; i++){
    _recipes.push(recipes[i])
  }
  const renderedRecipes = _recipes.map(recipe => {
    const { title, slug, subtitle, category, image } = recipe.fields
    const { id } = recipe.sys
    const imgSrc = "https:" + image.fields.file.url
    const _subtitle = subtitle.substring(0,100) + "... "
    return (
      <div className={styles.media} key={id}>
        <Image
          src={imgSrc}
          width={300}
          height={200}
          layout="responsive"
        />
        <section>
          <h3>{title}</h3>
          <p>
            {_subtitle}
            <span>
              <Link href={"/recipes/" + category+ "/" + slug}><a>See Detail</a></Link>
            </span>
          </p>
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

export default CardGroup