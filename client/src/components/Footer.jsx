import React from 'react'
import { Link } from 'react-router-dom'
import { MdPhone, MdWhatsapp,MdMail, MdLinkedCamera, MdFacebook, MdPhoneAndroid, MdLocationCity, MdMyLocation, MdHome} from 'react-icons/md'
import { FaAddressBook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  const gradientBg = {
    background: 'linear-gradient(to right, #2c64fc, #b927fc)',
  };
  
  return (
    <footer className=" text-white py-8 rounded-t-lg" style={gradientBg}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* About Us */}
          <div className="mb-6">
            <Link to={'/'}>
            <h3 className="text-xl font-bold mb-4">  IndiaLib.in</h3>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat vero quas, debitis sunt nisi delectus voluptas maxime velit quibusdam eos dolor unde vitae, nobis dolorum quam ipsum, a molestias consequatur.</p>
          </div>
          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            

                <Link to={'/'}>
                <p>Home</p>
                </Link>
                <Link to={'/'}>
                <p>About Us </p>
                </Link>
                <Link to={'/partner'}>
                <p>Become Partner</p>
                </Link>
                <Link to={'/'}>
                <p>Hot Offers</p>
                </Link>

                <Link to={'/'}>
                <p>Privacy Policy</p>
                </Link>

            
          </div>
          {/* Contact Us */}
          <div className="mb-6">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <ul className="text-white">
        <li className="flex items-center mb-2">
          <MdMail className="mr-2" />
          <span>info@indialib.in</span>
        </li>
        <li className="flex items-center mb-2">
          <MdPhoneAndroid className="mr-2" />
          <span>+91 123 456 7890</span>
        </li>
        <li className="flex items-center">
          <MdLocationCity className="mr-2" />
          <span>123 Library Street, City, Country</span>
        </li>
      </ul>
    </div>
          {/* Social Media */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Our Community</h3>
            <ul>
              <li><Link to="/community">Join Our Community</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
            </ul>
            <div className="flex space-x-4 mt-4">
                      <Link to={'/'}>
                <MdFacebook  size={22} />
                </Link>
                <Link to={'/'}>
                <MdWhatsapp size={22}/>
                </Link>
                <Link to={'/'}>
                <MdMail size={22}/>
                </Link>
                <Link to={'/'}>
                <FaInstagram size={22}/>
                </Link>
                <Link to={'/'}>
                <FaLinkedin size={22}/>
                </Link>
                    
      
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} IndiaLib.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;