import { FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contact" className="my-12 py-24">
    <form className="flex flex-col items-center border border-primary rounded-lg p-6 max-w-lg mx-auto text-white">
      <h5 className="text-xl font-bold mb-4">Let&apos;s Connect</h5>
      <p className="text-[#E0E7FF] mb-8 text-center">
        I&apos;m currently seeking new opportunities in software development to apply my diverse skills and experience.
        With a background in coding, problem-solving, and collaboration, I bring a passion for innovation and a proven track record of delivering high-quality solutions.
        Excited to connect and explore possibilities.
      </p>
      <div className="mb-4">
        <p className="text-purple-400 font-bold">
          Email:{" "}
          <a href="mailto:jleo56291@gmail.com" className="hover:underline">
            jleo56291@gmail.com
          </a>
        </p>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row sm:gap-4 gap-2 items-center">
        <a
          href="https://www.linkedin.com/in/james-kinyanjui02/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-medium flex items-center gap-1"
        >
          <FaLinkedin className="social-icon" style={{ fontSize: '20px', color: '#0077b5' }} />
          LinkedIn
        </a>
        
        <a href="tel:254714178292" className="text-white text-sm font-medium flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <FaWhatsapp className="social-icon" style={{ fontSize: '20px', color: '#25d366' }} /> 
          <FaPhone className="social-icon" style={{ fontSize: '20px', color: '#00df9a' }} />
          <span className="text-sm sm:text-base">+254 714 178292</span>
        </a>
      </div>
      
      <p className="text-white text-lg font-bold mt-2">Thank you!</p>
    </form>
  </section>
);

export default ContactSection;
