import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import homeStyles from '../../styles/Home.module.css'
import recipeStyles from '../../styles/Recipes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

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
  console.log(index)
  const renderItem = setRenderItem(recipesArr, index)

  return (
    <>
      <div className={homeStyles.containerLg}>
        <h1>Top Rated Recipes</h1>
        <hr />
        <div className={recipeStyles.showcase}>
          <button onClick={handleClick} id="prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className={recipeStyles.mediaSection}>
            {renderItem}
          </div>
          <button onClick={handleClick} id="next">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  )
}

function setRenderItem(recipesArr, index) {
  const newArr = recipesArr.filter((item, i) => i == index).map(item => {
    return (
      <div key={item.id}>
        <MediaCard recipe={item} />
      </div>
    )
  })
  return newArr
}