import './App.css';
import './components/css/MediaQuery.css';
import SearchSection from './components/SearchSection';

function App() {
  // using BEM conventions
  return (
    <>
      <div className="bgGradient">
        <SearchSection />
      </div>
    </>
  );
}

export default App;
