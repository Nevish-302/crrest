
import Footer from "../Footer"
import Header from "./Header"


const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="home-background-animation-1"></div>
      <div className="home-background-animation-2"></div>
      <div className="template_cards">
        <div className="first_row">
          <div className="card one">one</div>
          <div className="card two">two</div>
          <div className="card three">three</div>
        </div>
        <div className="second_row">
          <div className="card four">four</div>
          <div className="card five">five</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
