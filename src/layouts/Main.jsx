import { Route, Routes } from "react-router-dom";
import { Dashboard, Education, Report, Result } from "../pages";
import { Sidebar } from "../components";
import Article from "../pages/Article";
import NotFound from "../pages/NotFound";

const Main = () => {
  return (
    <main id='main'>
      <div className='flex w-full '>
        <Sidebar />
        <div className='content w-full mx-10'>
          <Routes>
            <Route index exact path='/' element={<Dashboard />} />
            <Route path='/education' element={<Education />} />
            <Route path='/education/article/:id' element={<Article />} />
            <Route path='/report' element={<Report />} />
            <Route path='/result' element={<Result />} />
            <Route path='/result' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Main;
