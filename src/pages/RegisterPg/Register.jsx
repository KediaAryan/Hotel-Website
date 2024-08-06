function Register() {
  return (
    <>
      <div id="container">
        <div class="form-wrap">
          <h1>Sign In</h1>
          <p>Welcome to Hotel BT</p>
          <form>
            <div class="form-group">
              <label for="email">Email / Regiestered Number</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit" class="btn">
              Sign In
            </button>
            <p class="bottom-text">
              By clicking the Sign In button, you agree to our
              <a href="#">Terms & Conditions</a> and
              <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
        <footer>
          <p>
            Forget password? <a href="#">Reset Here</a>
          </p>
        </footer>
      </div>
      ;
    </>
  );
}

export default Register;
