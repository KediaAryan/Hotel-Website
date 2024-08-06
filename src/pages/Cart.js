import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

export const Cart = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const name = searchParams.get("hname");
  const price = searchParams.get("hprice");
const priceValue = parseFloat(price.replace('$', ''));
let taxAmount = priceValue * 0.1;
taxAmount = taxAmount.toFixed(2);
const total = priceValue + parseFloat(taxAmount);


  return (
    <>
      <header>
        <nav id="navbar">
          <div class="container">
            <h1 class="logo">
              <a href="index.html">HBT</a>
            </h1>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <h1 class="carth1">Hotel BT</h1>

      <h2 class="carth2">Your Booking</h2>

      <div class="yourcart">
        <div>
          <h3>Room Selected</h3>
          <h4>{name}</h4>
        </div>
        <div>
          <h3>Net price</h3>
          <h4>{price} </h4>
        </div>

        <div>
          <h3>Tax</h3>
          <h4> {taxAmount} </h4>
        </div>

        <div>
          <h3>Total</h3>
          <h4>{total} </h4>
        </div>
      </div>

      <div class="total">
        <h2>Your Total</h2>
        <h3>{total} </h3>
      </div>

      <div class="bill_container">
        <div class="coupon">
        <h4>Discount Coupon</h4>
          <p>Enter your coupon here</p>
          <input type="text" />
          <button>APPLY</button>
        </div>

        <div class="returning">
          <h4>Returning Customer?</h4>
          <p>Please enter your PIN Code</p>
          <input type="text" />
          <button>APPLY</button>
        </div>
      </div>

      <div id="billing">
        <h2>Bill Information</h2>
        <form action="#">
          <div class="formgrp">
            <label for="firstName">First Name:</label>
            <br />
            <input type="text" id="firstName" name="firstName" required />
            <br />
            <br />
          </div>

          <div class="formgrp">
            <label for="lastName">Last Name:</label>
            <br />
            <input type="text" id="lastName" name="lastName" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="phone">Phone Number:</label>
            <br />
            <input type="tel" id="phone" name="phone" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="address">Address:</label>
            <br />
            <input type="text" id="address" name="address" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="zipcode">Zipcode:</label>
            <br />
            <input type="text" id="zipcode" name="zipcode" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="city">City:</label>
            <br />
            <input type="text" id="city" name="city" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="country">Country:</label>
            <br />
            <input type="text" id="country" name="country" required />
            <br />
            <br />
          </div>
          <div class="formgrp">
            <label for="specialRequests">Special Requests:</label>
            <br />
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="4"
              cols="50"
            ></textarea>
            <br />
            <br />
          </div>
          <div >
            <input type="checkbox" id="terms" name="terms" required />
            <label for="terms">*I agree to all terms and conditions</label>
            <br />
            <br />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>

      <div id="payment" class="yourpayment">
        <h2>Payment Method</h2>
        <div class="radio-container">
          <div class="radio-option">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
            />
            <label for="creditCard">Credit Card</label>
          </div>
          <div class="radio-option">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
            />
            <label for="paypal">PayPal</label>
          </div>
          <div class="radio-option">
            <input
              type="radio"
              id="bankTransfer"
              name="paymentMethod"
              value="bankTransfer"
            />
            <label for="bankTransfer">Bank Transfer</label>
          </div>
        </div>
      </div>

      <div class="button-container">
        <Link class="kbtn" to="/" >Back</Link>

        <button class="kbtn" onClick={() => {alert("Thank you for your booking!")}}>Confirm Booking</button>
      </div>
      <footer id="main-footer">
        <p>Hotel BT &copy; 2021, All Rights Reserved</p>
      </footer>
    </>
  );
};
