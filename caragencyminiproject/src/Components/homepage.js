import React from 'react';
import Sectionsecond from "../Components/Sectionsecond";
import Sectionfirst from "../Components/Sectionefirst";
import Footer from "../Components/footer";
import '../CSS/homepage.css';
import About from '../Components/about.js';

export default function homepage() {
  return (

    <>
      <div class="main">
        <div id="dream">
          <span id="finddream">Find Your Dream Car</span>
          <br></br> <span id="thousand">We Have a more then Thousands Cars for you to choose</span>
        </div>
        <div>
          <br></br>
          <br></br>
          <div id="aboutcontent">
            Quick Auto Lease is India's leading Auto Portal and receives millions of car buyers and researchers every month. Quick Auto Lease is the most preferred online shopping destination for cars in India, with a presence across all major cities and towns in the country. Quick Auto Lease is also the most preferred online shopping destination for new cars and used cars in India. Quick Auto Lease is the most preferred online shopping destination for cars in India, with a presence across all major cities and towns in the country. Quick Auto Lease is also the most preferred online shopping destination for new cars and used cars in India.
          </div>
          <br></br>
          <div id="buttondiv"><a href="/about" id="buttonread">Read More</a></div><br></br> <br></br>
          <marquee id="discount" behavior="" direction="">Get 5% Discount On Pre Booking;</marquee>
        </div>
        <div />
      </div>
      <br></br>
      <Sectionfirst />
      <Sectionsecond />
    </>


  );
}
