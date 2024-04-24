import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Project from '../components/Project';
import Navbar from '../components/Navbar';
import BlogEdu from '../components/BlogEdu';

function Home() {
  return (
    <div className="Home">
      <>
        <Navbar />
        <Header />
        <Project />
        <Form />
        <BlogEdu />
        <Footer />
      </>
    </div>
  );
}

export default Home;
