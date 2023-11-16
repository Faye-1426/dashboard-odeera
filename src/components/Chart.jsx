/* eslint-disable react/jsx-key */
import { chartAll } from '../constants/chart/chartAll';
const Chart = () => {
	return (
		// <section>
		//   <div className='border border-neutral-200 p-8 rounded-xl mt-5'>
		//     <h2 className='text-xl font-bold'>Chart Title</h2>
		//     <p className='text-neutral-600 text-sm pt-2'>Sedikit keterangan mengenai chart</p>
		//     <img src={grafik} alt='image-name' className='bg-slate-100 rounded-lg my-4 p-5 w-full' />
		//   </div>
		// </section>

		<section>
			{chartAll.map((data) => (
				<div className='mainChart border border-neutral-200 p-8 rounded-xl mt-5'>
					<h2 className='text-xl font-bold'>{data.title}</h2>
					<p className='text-neutral-600 text-sm pt-2'>{data.sub_title}</p>
					<img
						src={data.img}
						alt='image-name'
						className='bg-slate-100 rounded-lg my-4 p-5 w-full'
					/>

					{data.children.map((childrenData) => (
						<div className='childrenChart mt-10'>
							<img src={childrenData.img} alt='' />
							<p className='mt-5'>{childrenData.text}</p>
						</div>
					))}
				</div>
			))}
		</section>
	);
};

export default Chart;
