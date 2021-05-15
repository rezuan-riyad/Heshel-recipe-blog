import Head from 'next/head'
import Layout from '../components/layout'
import RecipeMaker from '../components/about/RecipeMaker'
import aboutStyles from '../styles/About.module.css'

export default function About() {
  return (
    <Layout title="Home">
      <Head>
        
      </Head>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.showcase}>
          <div className={aboutStyles.img}>
            <img src="/images/chef.jpg" />
          </div>
          <div className={aboutStyles.aboutHeshel}>
            <h3>About Heshel</h3>
            <p>With more than three years of experience our master chef, John Doe is currently serving
              in heshel's as recipe maker. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliquincididunt ut labore et dolore magna aliqu 
            </p>
          </div>
        </div>

        <div className={aboutStyles.aboutChefs}>
          <h3>Meet Our Recipe Makers</h3>
            <RecipeMaker />
            <RecipeMaker />
        </div>

        <div className={aboutStyles.writeUs}>
          <div><h1>What else?</h1></div>
          <div>
            <p>We appreciate your own cooking process and we also love to know your home made food recipes.
              Spread your traditional food ideas with others. It would be helpful for heshel community to get 
              to know your recipes and publish in our site. 
            </p>
            <button>Share Your Recipe</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
