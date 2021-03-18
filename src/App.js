import logo from './logo.svg';
import './App.css';

// CUSTOM COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PgGenerator from './components/PgGenerator/PgGenerator';

function App() {
  return (
    <div>
      <Header />

      <main>
        <PgGenerator />
      </main>

      <Footer />
    </div>
  );
}

export default App;
