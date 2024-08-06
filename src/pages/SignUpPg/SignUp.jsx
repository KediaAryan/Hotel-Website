function SignUp() {
  function validateForm() {
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validation 1: Check if any field is empty
    if (
      !fullName ||
      !dob ||
      !gender ||
      !email ||
      !phone ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return false;
    }

    // Validation 2: Full Name should not contain numbers or special characters
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
      alert("Full Name should only contain letters and spaces.");
      return false;
    }

    // Validation 3: Date of Birth format - dd/mm/yyyy
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
      alert("Date of Birth should be in the format dd/mm/yyyy.");
      return false;
    }

    // Validation 4: Email format and length
    if (!email.includes("@") || !email.includes(".") || email.length > 50) {
      alert("Invalid email format or length.");
      return false;
    }

    // Validation 5: Phone number format and length
    if (!/^[6789]\d{9}$/.test(phone)) {
      alert("Invalid phone number format or length.");
      return false;
    }

    // Validation 6: Password requirements
    if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z\d\s])(?=.*\d.*\d).{10,}/.test(
        password
      )
    ) {
      alert(
        "Password must have at least one uppercase letter, one lowercase letter, two special characters, and a minimum length of 10 characters."
      );
      return false;
    }

    // Validation 7: Username format and length
    if (!/^[a-zA-Z0-9]{1,15}$/.test(username)) {
      alert(
        "Username must contain a combination of only letters and numbers. Length must be less than 15 characters."
      );
      return false;
    }

    // Validation 8: Confirm Password matches Password
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return false;
    }
    // If all validations pass, you can submit the form
    alert("Form submitted successfully!");
    return true;
  }

  return (
    <>
      <form id="registrationForm" onsubmit="validateForm(); return false;">
        <h1>Sign Up</h1>

        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required />

        <label for="dob">Date of Birth (dd/mm/yyyy):</label>
        <input
          type="text"
          id="dob"
          name="dob"
          placeholder="dd/mm/yyyy"
          required
        />

        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" required />
        <label for="female">Female</label>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[7896]{1}[0-9]{9}"
          required
        />

        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          pattern="[a-zA-Z0-9]{1,15}"
          required
        />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label for="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default SignUp;
