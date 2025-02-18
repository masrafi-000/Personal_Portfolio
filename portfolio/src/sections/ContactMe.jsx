import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import ContactInfoCard from "../components/ContactInfoCard";
import { ABOUT_ME } from "../utils/data";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatusMessage("Message sent succesfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("There was an error sending your message.");
      }
    } catch (error) {
      console.log(error);

      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full md:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm font-medium text-center mt-4 leading-6">
            Have a project in mind, a question, or just want to connect? Feel
            free to reach out! I'm always open to discussing new ideas,
            collaborations, and opportunities. Let’s build something amazing
            together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16 ">
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
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-box"
                autoComplete="off"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-box"
                autoComplete="off"
                placeholder="Email"
              />
              <textarea
                type="text"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="input-box"
                autoComplete="off"
                placeholder="Message"
              />

              <button type="submit" className="action-btn btn-scale-anim">
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-red-500">
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
