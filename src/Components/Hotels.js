import "./Hotel.css";
import HotelsData from "./HotelsData";
import Hotel1 from "../assets/hotel-1.jpg";
import Hotel2 from "../assets/hotel-2.jpg";
import Hotel3 from "../assets/hotel-3.jpg";
import Hotel4 from "../assets/hotel-4.jpg";
import Hotel5 from "../assets/hotel-5.jpg";
import Hotel6 from "../assets/hotel-6.jpg";

function Hotels() {
  return (
    <>
      <div className="hotels">
        <h1>Hotel Survice</h1>
        <p>Cuntries Best Hotels</p>

        <div className="hotelscard">
          <HotelsData
            image={Hotel1}
            heading="Mayfair Hotel"
            text="The Taj Mahal Palace opened in Mumbai, maharashtra
            then Bombay, in 1903, giving birth to the country's
            first hatbour fandmark. the recently trademarked flagship
            hotel overlooks."
            buttonText="Travel Plan"
            btnName="show"
            url="https://www.pexels.com/search/taj%20hotel%20mumbai/"
          />
          <HotelsData
            image={Hotel2}
            heading="R.P InterNationals"
            text="The Taj Mahal Palace opened in Mumbai, maharashtra
            then Bombay, in 1903, giving birth to the country's
            first hatbour fandmark. the recently trademarked flagship
            hotel overlooks."
            buttonText="Travel Plan"
            btnName="show"
            url="https://www.pexels.com/search/taj%20hotel%20mumbai/"
          />
          <HotelsData
            image={Hotel3}
            heading="RITZ's"
            text="The Taj Mahal Palace opened in Mumbai, maharashtra
            then Bombay, in 1903, giving birth to the country's
            first hatbour fandmark. the recently trademarked flagship
            hotel overlooks."
            buttonText="Travel Plan"
            btnName="show"
            url="https://www.pexels.com/search/taj%20hotel%20mumbai/"
          />
        </div>

        <div className="hotelscard">
          <HotelsData
            image={Hotel4}
            heading="Unicorn House"
            text="The Taj Mahal Palace opened in Mumbai, maharashtra
            then Bombay, in 1903, giving birth to the country's
            first hatbour fandmark. the recently trademarked flagship
            hotel overlooks."
            buttonText="Travel Plan"
            btnName="show"
            url="https://www.pexels.com/search/taj%20hotel%20mumbai/"
          />
          <HotelsData
            image={Hotel5}
            heading="JW Mariot"
            text="The Taj Mahal Palace opened in Mumbai, maharashtra
            then Bombay, in 1903, giving birth to the country's
            first hatbour fandmark. the recently trademarked flagship
            hotel overlooks."
            buttonText="Travel Plan"
            btnName="show"
            url="https://www.pexels.com/search/taj%20hotel%20mumbai/"
          />
          <HotelsData
            image={Hotel6}
            heading="Taj Palace"
            text="The Taj Mahal Palace opened in Mumbai, maharashtra
                              then Bombay, in 1903, giving birth to the country's
                              first hatbour fandmark. the recently trademarked flagship
                              hotel overlooks."
            buttonText="Travel Plan"
            btnName="show"
            url="https://www.pexels.com/search/taj%20hotel%20mumbai/"
          />
        </div>
      </div>
    </>
  );
}

export default Hotels;
