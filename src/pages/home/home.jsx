import './home.scss'
import Header from "../../components/header/header";
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer';

// Component
const Home = () => (
    <div className='Home'>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
  
  export default Home;