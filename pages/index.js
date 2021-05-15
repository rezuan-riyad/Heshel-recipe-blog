import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Backdrop from '../components/home/Backdrop'
import Carousel from '../components/home/Carousel'
import FeedbackQuote from '../components/home/FeedbackQoute'

export default function Home() {
  const recipes = [
    {
      id: 1,
      title: "Eggless Red Velvet Pancakes",
      subtitle: "Soft, fluffy Red Velvet Pancakes made with basic ingredients found in pantry. These pancakes take just 20 mins from start to finish and drizzled with a fluffy cream cheese icing, these are perfect anytime",
      img: "pancake.jpg"
    },
    {
      id: 2,
      title: "Chocklete Banana Muffins",
      subtitle: "These Vegan Chocolate Banana Muffins are super moist, packed with chocolate and so delicious that even pickiest eater won’t mind eating these!! Perfect breakfast or any time treat!",
      img: "banana-muffin.jpg"
    },
    {
      id: 3,
      title: "Crispy Fried Chicken",
      subtitle: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquincididunt ut labore et dolore magna aliqu ",
      img: "crispy-chicken.jpg"
    }
  ]
  
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
        <Carousel recipes={recipes}/>
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
