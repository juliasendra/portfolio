import { useForm, ValidationError } from '@formspree/react';
import "../App.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgwbnn");

  if (state.succeeded) {
    return (
      <div className="alert alert-success" role="alert">
        Thanks for your message! I will get back to you as soon as possible.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
          className="form-control"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-danger"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-danger"
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
