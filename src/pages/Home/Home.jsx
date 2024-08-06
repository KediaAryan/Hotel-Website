import room1 from "../../assets/room-1.jpg"
import room2 from "../../assets/room-2.jpg"
import room3 from "../../assets/room-3.jpg"
import room4 from "../../assets/room-4.jpg"
import room5 from "../../assets/room-5.jpg"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { CalendarDays } from 'lucide-react';
import { Users } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Map } from 'lucide-react';


function Home() {
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

      <div id="showcase">
        <div class="container">
          <div class="showcase-content">
            <h1><span class="text-primary">Enjoy</span> Your Stay</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, a
              commodi harum similique fugiat esse.
            </p>
            <a class="btn" href="about.html">About Our Hotel</a>
          </div>
        </div>
      </div>
    </header>

    <section class="section__container booking__container">
      <form action="/" class="booking__form">
        <div class="input__group">
          <CalendarDays size={30} />
          <div>
            <label for="check-in">CHECK-IN</label>
            <input type="date" placeholder="Check In" />
          </div>
        </div>
        <div class="input__group">
          <CalendarDays size={30} />
          <div>
            <label for="check-out">CHECK-OUT</label>
            <input type="date" placeholder="Check Out" />
          </div>
        </div>
        <div class="input__group">
          <Users size={30} />
          <div>
            <label for="guest">GUEST</label>
            <input type="number" placeholder="Number of guest" />
          </div>
        </div>
        <div class="input__group input__btn">
          <a href="#rooms"><button class="btn">CHECK OUT</button></a>
        </div>
      </form>
    </section>

    <section id="rooms" class="section__container room__container">
      <p class="section__subheader">
        <span class="text-primary">Our</span> Rooms
      </p>
      <h2 class="section__header">The Most Memorable Rest Time Starts Here.</h2>
      <div class="room__grid">
        <div class="room__card">
          <div class="room__card__image">
            <img src={room1} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Deluxe Ocean View</h4>
            <p>
              Bask in luxury with breathtaking ocean views from your private
              suite.
            </p>
            <h5>Starting from <span class="text-second">$299/night</span></h5>
            <Link to="/cart?hname=Deluxe Ocean View&hprice=$299" class="btn">Book Now</Link>
            <button class="abtn" onClick={()=>{
              let con = document.getElementById('view');
              con.classList.remove('hide');
              console.log('check')
            }}>Click here</button>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={room2} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Executive Cityscape Room</h4>
            <p>
              Experience urban elegance and modern comfort in the heart of the
              city.
            </p>
            <h5>Starting from <span class="text-second">$199/night</span></h5>
            <Link to="/cart?hname=Executive Cityscape Room&hprice=$199" class="btn">Book Now</Link>
            <button class="abtn" onClick={()=>{
              let con = document.getElementById('view');
              con.classList.remove('hide');
              console.log('check')
            }}>Click here</button>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={room3} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Family Garden Retreat</h4>
            <p>
              Spacious and inviting, perfect for creating cherished memories
              with loved ones.
            </p>
            <h5>Starting from <span class="text-second">$249/night</span></h5>
            <Link to="/cart?hname=Family Garden Retreat&hprice=$249" class="btn">Book Now</Link>
            <button class="abtn" onClick={()=>{
              let con = document.getElementById('view');
              con.classList.remove('hide');
              console.log('check')
            }}>Click here</button>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={room4} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Couple Grand Retreat</h4>
            <p>
              Spacious and inviting, perfect for creating cherished memories
              with loved ones.
            </p>
            <h5>Starting from <span class="text-second">$339/night</span></h5>
            <Link to="/cart?hname=Couple Grand Retreat&hprice=$339" class="btn">Book Now</Link>
            <button class="abtn" onClick={()=>{
              let con = document.getElementById('view');
              con.classList.remove('hide');
              console.log('check')
            }}>Click here</button>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={room5} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Single Person Room</h4>
            <p>
              Spacious and inviting, perfect for creating cherished memories
              with loved ones.
            </p>
            <h5>Starting from <span class="text-second">$129/night</span></h5>
            <Link to="/cart?hname=Single Person Room&hprice=$129" class="btn">Book Now</Link>
            <button class="abtn" onClick={()=>{
              let con = document.getElementById('view');
              con.classList.remove('hide');
              console.log('check')
            }}>Click here</button>
          </div>
        </div>
      </div>
    </section>

    <section  id="view"class=" threedview hide">
    
    <div  class="image-container">
        <iframe
          width="100%"
          height="500px"
          frameborder="0"
          src="https://momento360.com/e/u/41322987869e40fa81a43096902fbbfc?utm_campaign=embed&utm_source=other&heading=-18.72&pitch=1.36&field-of-view=75&size=medium&display-plan=true"
        ></iframe>
      </div>
      <button id="rem-button" onClick={()=>{
              let con = document.getElementById('view');
              con.classList.add('hide');
              console.log('check')
            }
              }> Close </button>

    </section>

    <section class="service" id="service">
      <div class="service__container">
        <div class="service__content">
          <p class="section__subheader">SERVICES</p>
          <h2 class="section__header">Strive Only For The Best.</h2>
          <ul class="service__list">
            <li>
              <ShieldCheck size={20} />
              High Class Security
            </li>
            <li>
             <CalendarClock size={20} />
              24 Hours Room Service
            </li>
            <li>
              <Headset size={20} />
              Conference Room
            </li>
            <li>
              <Map size={20} />
              Tourist Guide Support
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="clr"></div>

    <footer id="main-footer">
      <p>Hotel BT &copy; 2021, All Rights Reserved</p>
    </footer>
    </>

  );
}

export default Home;