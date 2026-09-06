import Header from "./components/Header/Header"
import { Icon } from "./components/Icon/Icon"

function App() {

  return (
    <>
    <Header />
      <Icon name="facebook" fill="red" />
      <Icon name="instagram" />
      <Icon name="linkedin" />
      <Icon name="yelp" />
      <Icon name="location" fill="none" stroke="blue" />
      <Icon name="phone" fill="none" stroke="blue" />
      <Icon name="clock" fill="none" stroke="red" />
    </>
  )
}

export default App
