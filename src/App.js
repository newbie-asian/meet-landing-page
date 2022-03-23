import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Pagination pageNum="01" />
      <Features />
      <Pagination pageNum="02" sample="pageBottom" />
      <Footer />
    </>
  );
}

export default App;
