import { Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { FiBookOpen, FiFilePlus } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className='sidebar h-screen bg-white sticky top-0 w-max px-5 border-r-neutral-300 border'>
      <div className='w-full py-4 mb-6 border-b'>
        <Link to='/dashboard' className='text-2xl font-bold text-[#5200FF]'>
          Odeera
        </Link>
      </div>

      <p className='text-sm text-slate-400'>Main Menu</p>
      <ul className='navlist w-52'>
        <Link to='/dashboard'>
          <li className='hover:bg-slate-100 px-3 py-2 rounded-md text text-base flex items-center gap-3'>
            <RiHome6Line />
            Dashboard
          </li>
        </Link>
        <Link to='/education'>
          <li className='hover:bg-slate-100 px-3 py-2 rounded-md text text-base flex items-center gap-3'>
            <FiBookOpen />
            Education
          </li>
        </Link>
        <Link to='/report'>
          <li className='hover:bg-slate-100 px-3 py-2 rounded-md text text-base flex items-center gap-3'>
            <FiFilePlus />
            Report
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
