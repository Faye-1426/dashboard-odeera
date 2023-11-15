import { Chart } from "../components";
import { Container } from "../layouts";

const Dashboard = () => {
  return (
    <Container className='h-[200vh]'>
      <div>/path</div>
      <h1>Judul Visualisasi</h1>
      <section>
        <Chart />
      </section>
    </Container>
  );
};

export default Dashboard;
