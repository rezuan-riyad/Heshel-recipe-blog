import { createClient } from 'contentful'
import Layout from '../../../components/layout'
import recipeStyles from '../../../styles/Recipes.module.css'
import Image from 'next/image'


const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_KEY,
})

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'recipeBlogPost' })
  const paths = res.items.map(item => {
    return {
      params: { category: item.fields.category, slug: item.fields.slug }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log("params", params)
  const res = await client.getEntries({
    content_type: 'recipeBlogPost',
    'fields.slug': params.slug
  })

  return {
    props: { recipe: res.items[0] }
  }
}
export default function DynamicRoute({ recipe }) {
  const { title, subtitle, slug, image, ingradients, description, category } = recipe.fields
  const imgSrc = "https:" + image.fields.file.url
  console.log(ingradients)

  const renderIngradients = ingradients.map( (item,i) => {
    return (<li key={i}><h4>{item}</h4></li>)
  })
  console.log(description)
  return (
    <Layout>
      <div className="container">
        <p>recipes | {category} | {slug}</p>
        <h1 className={recipeStyles.heading}>{title}</h1>
        <p>{subtitle}</p>
        <div className={recipeStyles.imgContainer}>
          <Image
            src={imgSrc}
            width={300}
            height={150}
            layout="responsive" />
        </div>
        <h2>Ingrdients</h2>
        <ul className={recipeStyles.ingradients}>
        { renderIngradients }
        </ul>
        <h2>Making Process</h2>
        <ul>

        </ul>
      </div>
    </Layout>
  )
}