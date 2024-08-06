import Person1 from "../../assets/person-1.jpg"
import Person2 from "../../assets/person-2.jpg"
import Photo from "../../assets/photo-2.jpg"
import { NavLink } from "react-router-dom";

function AboutPg() {
  return (
    <>
 <header>
 <nav id="navbar">
        <div class="container">
          <h1 class="logo"><a href="index.html">HBT</a></h1>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>

    <section id="about-info" class="bg-light py-3">
      <div class="container">
        <div class="info-left">
          <h1 class="l-heading">
            <span class="text-primary">About</span>Hotel BT
          </h1>
          <p>
          With a focus on quality accommodations, personalized experiences, and seamless booking, our platform is dedicated to ensuring that every traveler embarks on their dream holiday with confidence and excitement.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            officiis! Commodi cupiditate officiis id, velit eaque dolore culpa
            iste quidem?
          </p>
        </div>
        <div class="info-right">
          <img src={Photo} alt="hotel" />
        </div>
      </div>
    </section>

    <div class="clr"></div>

    <section id="testimonials" class="py-3">
      <div class="container">
        <h2 class="l-heading">What Our Guests Say</h2>
        <div class="testimonial bg-primary">
          <img src={Person1} alt="Samantha" />
          <p>
          "Friendly and personal service The staff were all very friendly and helpful and no request for assistance was a problem for them. The hotel is well situated, being close to shopping, transport, and the tourist sites. We would definitely stay there again. "
          </p>
        </div>
        <div class="testimonial bg-primary">
          <img src={Person2} alt="Jen" />
          <p>
          "Super nice hotel! Great hotel. Everything was nice. Me and my colleagues would surely choose it again next time we visit Hotel BT. Great location, great service, friendly staff. Good value for the money. Breakfast was delicious. Very comfortable. Would definitely recommend Thank you!"
          </p>
        </div>
      </div>
    </section>

    <footer id="main-footer">
      <p>Hotel BT &copy; 2021, All Rights Reserved</p>
    </footer>

    </>
  );
}

export default AboutPg;