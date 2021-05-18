import styles from '../../styles/Home.module.css'

function FeedbackQuote() {
  const quotes = [
    {
      text: "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart.",
      name: "John Doe",
      id: 1
    },
    {
      text: "Heshel has a great collections of recipes. Most of them are really great. I endeavoured a lot of them and had great experiences.",
      name: "Jane Doe",
      id: 2
    }
  ]
  const renderedQuotes = quotes.map(quote => {
    return (
      <div key={quote.id}>
        <section>
          <h4><q>{quote.text}</q></h4>
          <p>Quoted by {quote.name}</p>
        </section>
        <style jsx>
          {`
            section{
              background-image: linear-gradient(to bottom right, #455a64 , #263238);
              height: auto;
              padding: 10px 40px;
              margin-top: 20px;
              margin-bottom: 50px;
              border-top-left-radius: 40px;
              border-bottom-right-radius: 40px;
              transform: rotate(-2deg);
            }
            h4, p{
              color: #eee;
            }
          `}
        </style>
      </div>
    )
  })
  return (
    <>
      <div className={styles.container}>
        {renderedQuotes}
      </div>
    </>
  )
}

export default FeedbackQuote