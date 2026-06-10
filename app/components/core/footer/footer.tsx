import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="pt-20">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src="/logo.png" className="h-12 w-auto lg:h-16" alt="Logo" />
          <p>
            <br />
            The information on this website is for general information purposes
            only. Nothing on this site should be taken as legal advice for any
            individual case or situation. This information is not intended to
            create, and receipt or viewing does not constitute an
            attorney-client relationship.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Important Links</h6>
          <a className="link link-hover">
            <Link to="/about-us">About</Link>
          </a>
          <a className="link link-hover"><Link to="/contact-us">Contact Us</Link></a>
          <a className="link link-hover">Testimonials</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover"> 141 S. McCormick St #101</a>
          <a className="link link-hover">Prescott AZ 86303</a>
          <a className="link link-hover">
            <a
              href="tel:+19284453334"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary text-white"
            >
              (928) 445-3534
            </a>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>

          <div className="grid grid-flow-col gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/willisonlawpc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/prescottfamilylaw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/stephanie-willison-23a68b70"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm8 0h4.79v2.19h.07C13.53 8.8 15.57 8 18.07 8 23.2 8 24 11.37 24 15.75V24h-5v-7.29c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24H8V8z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCbMDHGqcUf_4ISswuZAcbug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
