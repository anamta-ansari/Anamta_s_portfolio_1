import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <>


{/* Contact Section */}
<div className="w-full bg-black">
        <div className="container mx-auto px-4 py-8 2xl:w-[1500px]">
        <h1 className="text-[#A78546] text-4xl text-center py-[3rem] mb-6">Get in touch with us</h1>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
          
            {/* Contact Info Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
              <h2 className="text-2xl font-semibold mb-4 text-[#A78546]">Contact Information</h2>
              
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-xl mr-2 text-[#A78546]" />
                <p className="text-lg text-white">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center mb-4">
                <FaEnvelope className="text-xl mr-2 text-[#A78546]" />
                <p className="text-lg text-white">contact@example.com</p>
              </div>

              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-xl mr-2 text-[#A78546]" />
                <p className="text-lg text-white">123 Example St, City, Country</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-[#A78546]">Send Us a Message</h2>
              
              <form className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="text-lg mb-2 text-white">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="text-lg mb-2 text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="text-lg mb-2 text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={4}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#A78546] text-white p-3 rounded-md mt-4 hover:bg-[#A1A1A1]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}
