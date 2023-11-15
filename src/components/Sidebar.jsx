import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className='sidebar h-screen bg-neutral-100 sticky top-0 w-max p-5'>
      <ul className='navlist'>
        <Link to='/dashboard'>Dasboard</Link>
        <Link to='/education'>Education</Link>
        <Link to='/report'>Report</Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
