import { personLogo } from "../assets/img";

const Education = () => {
  return (
    <section className="pt-5">
      <header className="">
        <div className="upper flex justify-between">
          <h2 className="text-3xl">Artikel Berita</h2>
        </div>
        <div className="lower mt-6  ">
          <ul className="flex gap-x-2 text-white items-center">
            <li>
              <a href="#" className="bg-[#5200FF] py-2 px-5 rounded-[25px]">
                Semua
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#5200ff1f] py-2 text-[#5200FFB5] px-5 rounded-[25px]"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#5200ff1f] py-2 text-[#5200FFB5] px-5 rounded-[25px]"
              >
                Mengikuti
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#5200ff1f] py-2 text-[#5200FFB5] px-5 rounded-[25px]"
              >
                Kategori
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Education;
