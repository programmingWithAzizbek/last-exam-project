const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-x-7">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Company</h5>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Contact</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Follow Us</h5>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 mx-auto max-w-7xl w-full">
          <h5 className="text-lg font-bold">Subscribe to our Newsletter</h5>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-l"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
