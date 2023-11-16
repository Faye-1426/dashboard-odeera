import { Button, Header } from "../components";
import CardEdu from "../components/CardEdu";

const Education = () => {
  return (
    <section className='pt-5'>
      <Header title='Education' subtitle='Beberapa varian artikel untuk edukasi mengenai kasus-kasus yang ada!' heading='Education Page'></Header>
      <div className='lower mt-6'>
        <ul className='flex gap-x-2 text-white items-center'>
          <Button text='Semua' active='bg-[#5200FF]' />
          <Button text='Trending' />
          <Button text='Mengikuti' />
          <Button text='Kategori' />
        </ul>
      </div>

      <CardEdu />
    </section>
  );
};

export default Education;
