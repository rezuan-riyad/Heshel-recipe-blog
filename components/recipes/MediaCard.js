import Image from 'next/image'
import Link from 'next/link'
import recipeStyles from '../../styles/Recipes.module.css'

export default function MediaCard({ recipe }){
  const { title, slug, subtitle, category, image } = recipe.fields
  const _subtitle = subtitle.substring(0,100) + "... "
  const imgSrc = "https:" + image.fields.file.url
  return(
    <>
      <div className={recipeStyles.image}>
        <img src={imgSrc}></img>
      </div>
      <div className={recipeStyles.title}>
        <h3>{ title }</h3>
      </div>
      <div className={recipeStyles.subtitle}>
        <p>{ _subtitle }<Link href={"/recipes/" + category+ "/" + slug}><a> See More</a></Link></p>
      </div>
    </>
  )
}