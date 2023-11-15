import grafik from "../assets/img/grafik.png";

const Chart = () => {
  return (
    <section>
      <div className='border border-neutral-200 p-8 rounded-xl mt-5'>
        <h2 className='text-xl font-bold'>Chart Title</h2>
        <p className='text-neutral-600 text-sm pt-2'>Sedikit keterangan mengenai chart</p>
        <img src={grafik} alt='image-name' className='bg-slate-100 rounded-lg my-4 p-5 w-full' />
      </div>
    </section>
  );
};

export default Chart;
