import { useLocation } from 'react-router-dom';
import { Chart, Header } from '../components';
import { Container } from '../layouts';
import Delayed from '../components/Delayed';

const Dashboard = () => {
	return (
		<Container className='flex justify-center items-center'>
			<Delayed type='bubbles' color={'#5200ff'}>
				<div>
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
				</div>
			</Delayed>
		</Container>
	);
};

export default Dashboard;
