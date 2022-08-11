import TopSection from './components/top-section/TopSection';
import Main from './components/main/Main';
import BottomSection from './components/bottom-section/BottomSection';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <TopSection />
      <Main />
      <BottomSection />
    </div>
  );
}

export default App;