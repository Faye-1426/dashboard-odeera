import { Link } from "react-router-dom";
import { articleData } from "../constants/article/articleAll";

const CardEdu = () => {
  return (
    <div className="wrapper">
      <div className="content grid grid-cols-4 gap-x-4 mt-6">
        {articleData.map((data) => (
          <div
            className="card bg-white px-[18px] py-4 border border-neutral-200 rounded-xl"
            key={data.id}
          >
            <Link>
              <div className="flex justify-between items-center mb-4">
                <h3 className="mr-1 text-lg">{data.source}</h3>
                <p className="text-[#33333380] text-xs">{data.date}</p>
              </div>
              <h2>{data.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardEdu;
