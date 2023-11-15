import { Link } from "react-router-dom";

const Button = ({ className, text, active, base, link, href, ...props }) => {
  return (
    <div
      className={`${
        active ? "bg-[#5200FF] hover:bg-[#5c25d4]" : "bg-[#5100ff1e] text-[#5200FF] hover:bg-[#9e6eff59] border-[#5100ff2f] border"
      } py-2 px-5 rounded-[25px] cursor-pointer text-center text-sm transition-all ${className}`}>
      {link ? (
        <Link to={link} onClick={() => window.scrollTo(0, 0)}>
          {text}
        </Link>
      ) : (
        <a href={href}>{text}</a>
      )}
    </div>
  );
};

export default Button;
