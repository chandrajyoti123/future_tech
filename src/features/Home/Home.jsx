import React from 'react'
import Footer from '../../layout/Footer'
import TechRevolution from './TechRevolution'
import Review from './Review'
import DepthInformation from './DepthInformation'
import TechHubs from './TechHubs'
import FutureFeature from './FutureFeature'
import HeroSection from './HeroSection'
import TechResources from './TechResources'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <DepthInformation subheading={"Unlock the Power of"} heading={"FutureTech Features"}/>
      <FutureFeature/>
      <DepthInformation subheading={"A Knowledge Treasure Trove"} heading={"Explore FutureTech's In-Depth Blog Posts"}/>
      <TechHubs/>
      <DepthInformation subheading={"A Knowledge Treasure Trove"} heading={"Explore FutureTech's In-Depth Blog Posts"}/>
<TechResources/>
      <DepthInformation subheading={"What Our Readers Say"} heading={"Real Words from Real Readers"} />
      <Review />
      <TechRevolution />
      <Footer />
    </div>
  )
}

export default Home
