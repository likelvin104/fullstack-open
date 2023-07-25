const Hello = (props) => {
  console.log(props.name)
  console.log(props.age)
  return (
    <div>
      <p>Hello {props.name} of age {props.age}!</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const now = Date();
  
  return (
    <div>
      <p>The current time is {now.toString()}</p>
      <Hello name='Kelvin' age='7' />
      <Hello name='Calvin' age={5+2} />
      <Hello name='Kevin' age={6} />
      <Footer />
    </div>
  )
}

export default App