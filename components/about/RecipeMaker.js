import aboutStyles from '../../styles/About.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function RecipeMaker() {
  return (
    <>
      <section>
        <div className={aboutStyles.proPic}><img src="/images/propic.jpg" /></div>
        <div className={aboutStyles.proData}>
          <h3>John Doe</h3>
          <p>Designation</p>
          <p>Some details about John Doe. John Doe is currently serving
              in heshel's as recipe maker</p>
          <div>
            <Link href="https://www.facebook.com">
              <a><FontAwesomeIcon icon={faFacebook} /></a>
            </Link>
            <Link href="https://www.twitter.com/">
              <a><FontAwesomeIcon icon={faTwitter} /></a>
            </Link>
            <Link href="https://www.instagram.com">
              <a><FontAwesomeIcon icon={faInstagram} /></a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}