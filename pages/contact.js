import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/layout'
import Form from '../components/contact/Form'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <Layout title="Home">
      <Head>
        
      </Head>
      <div className={styles.content}>
        <div className={styles.leftBar}>
          <h3>Write us your recipes..</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <Form />
      </div>
    </Layout>
  )
}
