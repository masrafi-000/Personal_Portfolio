import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import ContactInfoCard from "../components/ContactInfoCard";
import { ABOUT_ME } from "../utils/data";

const ContactMe = () => {
  const API_URI = "https://personal-portfolio-server-s5i9.onrender.com/api/send-email";


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
  


    try {
      const res = await fetch(API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
        console.log(res);
        
      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsSuccess(false);
        setStatusMessage(
          data.message || "There was an error sending your message."
        );
      }
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatusMessage(""), 10000);
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full md:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>
          <p className="text-sm font-medium text-center mt-4 leading-6">
            {`Have a project in mind, a question, or just want to connect? Feel
            free to reach out! I'm always open to discussing new ideas,
            collaborations, and opportunities.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard
              icon={<IoMdMail />}
              text={ABOUT_ME.email.mail}
              link={ABOUT_ME.email.to}
            />
            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={ABOUT_ME.phone.number}
              link={ABOUT_ME.phone.link}
            />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="input-box"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="input-box"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows={3}
                className="input-box"
              />

              <button
                type="submit"
                disabled={isLoading}
                className={`action-btn btn-scale-anim ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {statusMessage && (
              <p
                className={`mt-4 text-center text-sm ${
                  isSuccess ? "text-green-500" : "text-red-500"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
