import sent from "../assets/img/sent.svg";
import { Button } from "../components";
import Delayed from "../components/Delayed";

const Result = () => {
  return (
    <section className='w-full flex items-center justify-center h-screen'>
      <Delayed type='bubbles' color='#5200FF'>
        <div className='flex items-center flex-col'>
          <div className='paths text-slate-400'>
            <img src={sent} alt='sent' className='w-96' title='Source : Freepik' />
          </div>
          <div className='text-center'>
            <h2 className='text-4xl font-bold mt-5'>Terimakasih Telah Melaporkan!</h2>
            <p className='text-neutral-500 pt-2'>Jangan lupa jaga kesehatan dan keselamatan yaa!</p>
            <Button link='/' text='Kembali ke Dashboard' className='mt-5 bg-black hover:bg-slate-800 text-white inline-block' />
          </div>
        </div>
      </Delayed>
    </section>
  );
};

export default Result;
