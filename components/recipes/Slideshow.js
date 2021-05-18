import React, { useEffect, useState } from 'react'
import homeStyles from '../../styles/Home.module.css'
import recipeStyles from '../../styles/Recipes.module.css'
import CardGroup from '../../components/home/CardGroup'

import MediaCard from './MediaCard'

export default function Slideshow({ recipesArr }) {
  const [index, setIndex] = useState(1)

  const handleClick = (e) => {
    if (e.target.id === "prev" && index != 0) {
      setIndex(index - 1)
    } else if (e.target.id === "next" && index < recipesArr.length - 1) {
      setIndex(index + 1)
    }
  }

  const renderItem = setRenderItem(recipesArr, index)

  return (
    <>
      <div className={homeStyles.containerLg}>
        <h1>Top Rated Recipes</h1>
        <hr />

        <div className={recipeStyles.smScreenShow}>
          <CardGroup recipes={recipesArr} />
        </div>

        <div className={recipeStyles.showcase}>
          <button onClick={handleClick} id="prev" disabled={index === 0}>
            Prev
          </button>
          <div className={recipeStyles.mediaSection}>
            {renderItem}
          </div>
          <button onClick={handleClick} id="next" disabled={index === 2}>
            next
          </button>
        </div>
      </div>
    </>
  )
}

function setRenderItem(recipesArr, index) {
  const newArr = recipesArr.filter((item, i) => i == index).map(item => {
    const { id } = item.sys
    return (
      <div key={id}>
        <MediaCard recipe={item} />
      </div>
    )
  })
  return newArr
}