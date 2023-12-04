import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function IconsComp() {
  return (
    <div className="flex mt-7 justify-center space-x-4">
      <a
        href="https://linkedin.com/in/YuriSantiag"
        className="hover:scale-125 hover:text-blue-500"
        target="_blank"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/YuriSantiag"
        className="hover:scale-125"
        target="_blank"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:yurisantiagx2@gmail.com"
        className="hover:scale-125 hover:text-white"
        target="_blank"
      >
        <MdEmail size={24} />
      </a>
    </div>
  );
}
