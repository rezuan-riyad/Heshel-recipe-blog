import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Backdrop from '../components/home/Backdrop'
import CardGroup from '../components/home/CardGroup'
import FeedbackQuote from '../components/home/FeedbackQoute'

import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CF_SPACE_ID ,
    accessToken: process.env.CF_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'recipeBlogPost'})

  return {
    props: {
      recipes: res.items
    }
  }
}

export default function Home({ recipes }) {
  let editorPick = []
  for(let i=0; i < 3; i++){
    editorPick.push(recipes[i])
  }
  return (
    <Layout title="Home">
      <Head>

      </Head>
      <Backdrop url="../images/background.jpg">
        <div className={styles.container}>
          <div className={styles.showcase}>
            <h1>Heshel's Delicious Recipes</h1>
            <section></section>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
            incididunt ut labore et dolore magna aliqu</h3>
            <div className={styles.btnGroup}>
              <button className={styles.filledBtn}>Make Recipe</button>
              <button className={styles.outlineBtn}>Explore Recipes</button>
            </div>
          </div>
        </div>
      </Backdrop>

      <div className={styles.containerLg}>
        <h1 className="heading">Editor's Pick</h1>
        <hr />
        <CardGroup recipes={editorPick}/>
      </div>

      <div className={styles.containerLg}>
        <div className="rowFlex">
          <Image
            src="/images/chef.svg"
            width={400}
            height={500}
          />
          <section className={styles.beChef}>
            <h1>Learn Cooking, Be Master Chef</h1>
            <span></span>
            <p>Take a course in our Heshel's Chefing Programme. You will have an oppurtunity to meet high profile chefs from all round the world.</p>
            <button>Explore Courses</button>
          </section>
        </div>
      </div>

      <FeedbackQuote />
    </Layout>
  )
}
