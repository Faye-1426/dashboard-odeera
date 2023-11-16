/* eslint-disable react/jsx-key */
import { articleData } from '../constants/article/articleAll';
import { useParams } from 'react-router-dom';

const Article = () => {
	const { id } = useParams();

	function filterById(item) {
		return item.id == id;
	}

	let result = articleData.filter(filterById);

	return (
		<section className='pb-10'>
			<div className='wrapper pt-5'>
				<div className='content'>
					{result.map((data) => (
						<div>
							<h3>{data.date}</h3>
							<h1 className='font-interSb text-3xl mt-8'>{data.title}</h1>
							<h2 className='mt-3 text-sm max-w-[832px] text-[#33333380] mb-10'>
								{data.sub_title}
							</h2>
							{data.content.map((content) => (
								<div className='paragraph'>
									{console.log(content)}
									<p className='text my-3'>{content.text}</p>
									<img src={content.img} alt='' className='max-w-[450px]' />
									<p className='text-[12px] text-[#33333380] mt-2 max-w-[720px]'>{content.img_desc}</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Article;
