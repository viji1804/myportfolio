function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vijayalakshmi. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/viji1804"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/vijayalakshmi-s-535666299"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
