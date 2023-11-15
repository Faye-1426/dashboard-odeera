import { Route, Routes } from "react-router-dom";
import { Dashboard, Education, Report, Result } from "../pages";
import { Sidebar } from "../components";

const Main = () => {
  return (
    <main id='main'>
      <div className='flex w-full'>
        <Sidebar />
        <div className='content w-full mx-10'>
          <Routes>
            <Route path='/dashboard' index element={<Dashboard />} />
            <Route path='/education' element={<Education />} />
            <Route path='/report' element={<Report />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Main;
