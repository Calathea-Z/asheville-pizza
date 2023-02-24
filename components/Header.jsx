import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Logo from '../public/assets/avllogo.png'

function Header() {
  return (
    <div className="sticky top-0 bg-[#f0c724]/90 items-start p-5 flex justify-between space-x-5 mx-auto z-20">
        <div className='self-center'>
        <Image src={Logo} className='w-28 sm:w-52 justify-self-center' />
        </div>
      <div className=' flex justify-self-end w-44 items-end sm:w-52 sm:mt-9 space-x-2'>
        <SocialIcon
          url="https://twitter.com/AshevilleBrewin"
          fgColor="#f0c724"
          bgColor="#920c07"
          className="hover:opacity-80"
        />
        <SocialIcon
          url="https://www.instagram.com/ashevillebrewingco/?hl=en"
          fgColor="#f0c724"
          bgColor="#920c07"
          className="hover:opacity-80"
        />
        <SocialIcon
          url="https://www.facebook.com/asheville.brewing"
          fgColor="#f0c724"
          bgColor="#920c07"
          className="hover:opacity-80"
        />
        <SocialIcon
          url="https://www.pinterest.com/apbc/"
          fgColor="#f0c724"
          bgColor="#920c07"
          className="hover:opacity-80"
        />
      </div>
    </div>
  );
}

export default Header;
