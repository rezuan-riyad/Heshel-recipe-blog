import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }){
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
}