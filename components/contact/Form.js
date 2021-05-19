import { useState } from 'react'
import styles from '../../styles/Contact.module.css'

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <form className={styles.form}>
      <input
        type="text"
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)} />
      <input
        type="email"
        value={email}
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)} />
      <textarea
        type="text"
        value={message}
        placeholder="Write your message..."
        onChange={(e) => setMessage(e.target.value)} />
      <button>Send</button>
    </form>
  )
}
