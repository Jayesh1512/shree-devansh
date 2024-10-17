  import About from '../components/About/About'
  import Category from '../components/category/Category'
  import Landing1 from '../components/Landing/Landing1'
  import Idea from '../components/Newsletter/Newsletter'
  import Marquee from '../components/InfiCarousal/InfiniteMarquee'
  import Landing_small from '../components/Landing/Landing_small'
import CopperAdvantages from '../components/Advantages/Advantage'
  const Home = () => {
    return (
      <div>
        <Landing_small/>
        <Landing1 />
        <About />
        <CopperAdvantages />
        <Category />
        <Marquee />
        <Idea />
      </div>
    )
  }

  export default Home
