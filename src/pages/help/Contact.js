// This is a function named "Contact". It's defined using the "export default" syntax,
// which means it can be imported and used in other parts of the code !!
function Contact() {

  // The function returns a JSX element, which represents the structure and content of the component !!
  return (
      <div className="contact">

          {/* Inside the component, there's a heading with the text "Support." */}
          <h3>Support.</h3>

          {/* This is a form element. */}
          <form>

              {/* The first input field for the user's email address. */}
              <label>
                  <span>Your email:</span>
                  <input type="email" name="email" required />
              </label>

              {/* The textarea field for the user's message. */}
              <label>
                  <span>Your message:</span>
                  <textarea name="message" required></textarea>
              </label>

              {/* A button that users can click to submit the form. */}
              <button>Submit</button>
          </form>
      </div>
  )
}

// The "Contact" component is being exported so that it can be used in other parts of the application !!
export default Contact;
