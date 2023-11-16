import { useLocation } from 'react-router-dom';
import { Chart, Header } from '../components';
import { Container } from '../layouts';

const Dashboard = () => {
	return (
		<Container className='h-[200vh]'>
			<section className='pt-5'>
				<Header
					title='Dashboard'
					subtitle='Hasil visualisasi dan analisis dari kasus yang kami angkat!'
					heading='Dashboard Page'
				/>
			</section>
			<section>
				<Chart />
			</section>
		</Container>
	);
};

export default Dashboard;
