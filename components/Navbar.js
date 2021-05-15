import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <section>
          <Image
            src="/logo.svg"
            alt="Picture of a triangle"
            width={50}
            height={50}
          />
        </section>
        <h1>Heshel</h1>
      </div>
      <div className="navLink">
        <div className="mediaLink">
          <h1>Heshel</h1>
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
        <div className="navRoutes">
          <Link href="/"><a>Home</a></Link> |
          <Link href="/recipes"><a>Recipes</a></Link> |
          <Link href="/about"><a>About</a></Link> |
          <Link href="/contact"><a>Mail us</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar