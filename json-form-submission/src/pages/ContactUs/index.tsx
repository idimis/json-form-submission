import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from '../../components/Header';
import './styles.css';
import heroImg from '../../assets/hero-img.png'; 

const Index: FC = () => { 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      subject: Yup.string().required('Required'),
      message: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:3000/submissions', values);
        alert("Submission successful!");
        // Reset form values
        formik.resetForm();
      } catch (error) {
        console.error("There was an error!", error);
      }
    },
  });

  return (
    <div className="contact-us">
      <Header />
      <div className="contact-page">
        <div className="contact-details">
          <div className="profile-photo-container">
            <img src={heroImg} alt="Hero" className="hero-img" />
          </div>
          <div className="contact-info">
            <h3>Contact details:</h3>
            <p>adimas.barnwal@brightscout.com</p>
            <p>+918651447521</p>
            <h3>Social:</h3>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Webflow</p>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="message-form">
          <h2>Let's build something cool together</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="error">{formik.errors.subject}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <p>Build with 💖 by Brightscout & Ayush</p>
        </div>
        <div className="footer-right">
          <div className="social-media">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Webflow</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
