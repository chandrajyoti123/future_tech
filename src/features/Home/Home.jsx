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
      <HeroSection />
      <DepthInformation subheading={"Unlock the Power of"} heading={"FutureTech Features"} isButton={false} />
      <FutureFeature />
      <DepthInformation subheading={"A Knowledge Treasure Trove"} heading={"Explore FutureTech's In-Depth Blog Posts"} name={"Blog"} isButton={true} />
      <TechHubs />
      <DepthInformation subheading={"Your Gateway to In-Depth Information"} heading={"Unlock Valuable Knowledge with FutureTech's Resources"} name={"Resources"} isButton={true} />
      <TechResources />
      <DepthInformation subheading={"What Our Readers Say"} heading={"Real Words from Real Readers"} name={"Testimonial"} isButton={true} />
      <Review />
      <TechRevolution />
      <Footer />
    </div>
  )
}

export default Home
