import { Button, Header, Input } from "../components";

const Report = () => {
  return (
    <section className='py-5 w-1/2'>
      <Header title='Report' subtitle='Kamu dapat melaporkan kasus-kasus yang ada disekitar!' heading='Report Page' />
      <form className='flex items-center'>
        <label htmlFor='simple-search' className='sr-only'>
          Search
        </label>
        <div className='gap-3 mt-5 w-full'>
          <div className='input-component w-full mt-3'>
            <label className='text-sm text-slate-500 mb-2'>Nama Pelaku</label>
            <Input placeholder='Contoh : Grizzle' />
          </div>
          <div className='input-component w-full mt-3'>
            <label className='text-sm text-slate-500 mb-2'>Keterangan Laporan</label>
            <div className='flex gap-3'>
              <input
                type='date'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
              <Input placeholder='Contoh : Jl. Jalan sama dia kapan?' />
            </div>
          </div>
          <div className='input-component w-full mt-3'>
            <label className='text-sm text-slate-500 mb-2'>Foto Pelaku</label>
            <div className='flex items-center justify-center w-full'>
              <label
                htmlFor='dropzone-file'
                className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <svg
                    className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'>
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>Click to upload</span> or drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id='dropzone-file' type='file' className='hidden' />
              </label>
            </div>
          </div>
          <div className='input-component w-full mt-3'>
            <label className='text-sm text-slate-500 mb-2'>Deskripsi Laporan</label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Contoh : Barang saya dicuri...'></textarea>
          </div>
          <div className='input-component w-full mt-3'>
            <Button text='Laporkan!' active='bg-[#5200FF]' className='text-white py-3' link='/result' />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Report;
