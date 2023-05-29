import "./Booking.css";

function Booking() {
  return (
    <>
      <div className="book">
        <div className="second-img">
          <img
            src="https://files.jotform.com/jufs/ugurg/form_files/hotel-banner.63885da4032201.67905415.png?md5=jScKQbkxcUHJeYXbK3dbbw&expires=1682964241 w-100"
            alt="/"
          />
        </div>
        <div className="book-container">
          <h1>Booking Your Travel Time</h1>
          <p>Experience something new every moment</p>

          <div className="book-form">
            <form className="book-king">
              <label>Name :- </label>
              <input type="text" placeholder="frist name" id="name" className="first"/>
              <input type="text" placeholder="last name" id="name" className="second"/>
              <br />
              <br />

              <label>email :- </label>
              <input type="email" placeholder="emain2@gmail.com" id="email" className="email"/>
              <br />
              <br />

              <label>Room Type :- </label>
              <select name="Please Select" id="select" className="rooms">
                <option value="standerd-room">Select Hotel Type</option>
                <option value="standerd-room">Standerd Room</option>
                <option value="family-room">Family Room</option>
                <option value="private-room">Private Room</option>
                <option value="mix-dorm-room">Mix Dorm Room</option>
                <option value="female-dorm-room">Female Dorm Room</option>
                <option value="male-dorm-room">Male Dorm Room</option>
              </select>
              <br />
              <br />

              <label>Arrival Date & Time :- </label>
              <input type="date" id="date" />
              <br />
              <br />

              <label>Departure Date :- </label>
              <select name="Please Select" id="month">
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              {/* <label>Month</label> */}
              <select name="Please Select" id="month">
                <option value="">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
              {/* <label>Day</label> */}
              <select name="Please Select" id="month">
                <option value="">Year</option>
                <option value="">2010</option>
                <option value="">2011</option>
                <option value="">2012</option>
                <option value="">2013</option>
                <option value="">2014</option>
                <option value="">2015</option>
                <option value="">2016</option>
                <option value="">2017</option>
                <option value="">2018</option>
                <option value="">2019</option>
                <option value="">2020</option>
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="">2023</option>
              </select>
              {/* <label>Your</label> */}
              <br />
              <br />
              {/* checkbox start */}
              <label>Free PickUp :- </label>
              <br />
              <input type="radio" name="yes" id="check" />
              <label htmlFor="checkbox" className='checkbox'>
                Yes Please! - Pick me up on arrival
              </label>
              <br />

              <input type="radio" name="yes" id="check" />
              <label htmlFor="checkbox" className='checkbox'>
                No Thanks - I'll make my own way there
              </label>
              <br />
              <br />

              <label htmlFor="Special Requests">Special Requests :- </label>
              <textarea
                name="massege"
                id="massege"
                cols="40"
                placeholder='massege'
                rows="5"
              ></textarea>
              <br />
              
              <button className="btnplus">
                book now trip
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
