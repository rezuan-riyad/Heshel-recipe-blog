export default function MakingProcess({ description }) {
  let stepsArr = []
  
  const renderSteps = (arr) => {
    try {
      arr.forEach(item => {
        if (item.value) {
          stepsArr.push(item.value)
        }
        if (item.content){
          renderSteps(item.content)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  renderSteps(description.content)

  return (
    <ul>
      { stepsArr.map( (item, i) => {
          return <li key={i}><p>{item}</p></li>
      }) }
    </ul>
  )
}