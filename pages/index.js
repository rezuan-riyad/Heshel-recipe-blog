import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Backdrop from '../components/Backdrop'

export default function Home() {
  return (
    <Layout title="Home">
      <Head>

      </Head>
      <Backdrop url="../images/background.jpg">
        <div className="container">
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
    </Layout>
  )
}
