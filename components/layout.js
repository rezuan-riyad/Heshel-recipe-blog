import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
            </Head>
            <Navbar />
            <div className="body-content">
                {children}
            </div>
            <Footer />
        </>
    )
}