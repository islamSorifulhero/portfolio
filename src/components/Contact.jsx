const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            <p className="text-gray-700 text-lg">
              Have a project idea or want to work together?  
              Feel free to contact me anytime.
            </p>

            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:yourmail@gmail.com"
                className="text-green-600"
              >
                yourmail@gmail.com
              </a>
            </p>

            <p>
              📞 <strong>Phone:</strong> +8801XXXXXXXXX
            </p>

            <p>
              💬 <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                className="text-green-600"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
