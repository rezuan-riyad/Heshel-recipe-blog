import Image from 'next/image'
import recipeStyles from '../../styles/Recipes.module.css'

export default function MediaCard({ recipe }){
  const imgSrc = "/images/" + recipe.img
  const subtitle = recipe.subtitle.substring(0,100) + "... "
  return(
    <>
      <div className={recipeStyles.image}>
        <img src={imgSrc}></img>
      </div>
      <div className={recipeStyles.title}>
        <h3>{ recipe.title }</h3>
      </div>
      <div className={recipeStyles.subtitle}>
        <p>{ subtitle }<a> See More</a></p>
      </div>
    </>
  )
}