
import Booking from "../Components/Booking";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Hotels from "../Components/Hotels";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import assetsImg from "../assets/12.jpg" 

function Home (){
    return( 
      <>
       <Navbar />
      <Hero
      cName="hero" 
      heroImg={assetsImg}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      btnClass="show"
      url="https://www.makemytrip.com/promos/mayfair-26042023.html?detail_image=no"
      
      />
      <Destination/>
      <Trip/>
      <Hotels/>
      <Booking/>
      <Footer/>
      </>
    )
  }
  
  
  export default Home;