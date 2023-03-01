import './App.css';
import Container from './components/layout/Container/Container';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="App__wrapper">
        <Container />
      </div>
    </div>
  );
}

export default App;
