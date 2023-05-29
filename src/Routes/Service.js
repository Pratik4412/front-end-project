import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/3.jpg"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip"
import Hotels from "../Components/Hotels"
function Service (){
  return(
    <>
    <Navbar />
   <Hero
   cName="hero-mid" 
   heroImg={AboutImg}
   title="Service"
   btnClass="hide"
   />
   <Trip/>
    <Hotels/>
    <Footer/>
   </>
  )
}


export default Service;