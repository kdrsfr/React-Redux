import './App.css';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
