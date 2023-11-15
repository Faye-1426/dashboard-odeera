import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar h-screen bg-neutral-100 sticky top-0 w-max'>
      <ul className='navlist'>
        <Link to='/dashboard'>Dasboard</Link>
        <Link to='/education'>Education</Link>
        <Link to='/report'>Report</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
