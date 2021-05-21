import { createClient } from 'contentful'
import RecipeCard from '../../../components/RecipeCard'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import recipeStyles from '../../../styles/Recipes.module.css'

const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_KEY,
})

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'recipeBlogPost' })
  const paths = res.items.map(item => {
    return {
      params: { category: item.fields.category }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: 'recipeBlogPost',
    'fields.category': params.category
  })
  return {
    props: { recipes: res.items },
    revalidate: 10
  }
}

export default function Category({ recipes }) {
  const router = useRouter()
  const renderItem = recipes.map(recipe => {
    return <RecipeCard recipe={recipe} key={recipe.sys.id} />
  })

  return (
    <Layout>
      <div className="container">
        <p>recipes | <span>{router.query.category}</span></p>
        <h1>{router.query.category}</h1>
        <hr />
        <div className={recipeStyles.gridContainer}>
          {renderItem}
        </div>
      </div>
    </Layout>
  )
}