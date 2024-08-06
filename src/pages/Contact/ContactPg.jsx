import { Hotel } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';


function ContactPg() {
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

    <section id="contact-form" class="py-3">
      <div class="container">
        <div class="l-heading"><span class="text-primary">Contact</span>Us</div>
        <p>Please fill out the form below to contact us</p>
        <form action="process.php">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>
    </section>

    <section id="contact-info" class="bg-dark">
      <div class="container">
        <div class="box">
        <Hotel size={50} />
          <h3>Location</h3>
          <p>Bangalore, Kernataka</p>
        </div>
        <div class="box">
          <Phone size={50} />
          <h3>Phone Number</h3>
          <p>+91-8168435501</p>
        </div>
        <div class="box">
          <Mail size={50} />
          <h3>Email Address</h3>
          <p>Frontdesk@hotelbt.com</p>
        </div>  
      </div>
    </section>

    <footer id="main-footer">
      <p>Hotel BT &copy; 2021, All Rights Reserved</p>
    </footer>
    </>
  );
}

export default ContactPg;