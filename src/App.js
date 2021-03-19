import logo from './logo.svg';
import './App.css';

// CUSTOM COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PgGenerator from './components/PgGenerator/PgGenerator';

// THEME CONFIGURATION
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/_root.config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />

        <main>
          <PgGenerator />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
