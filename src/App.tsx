import { FC } from 'react';

import { PokedexProvider } from './context/PokedexProvider';
import { PokedexContent } from './pages/PokedexContent';

import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <header className="header">PokeDex</header>
      <main className="main">
        <PokedexProvider>
          <PokedexContent />
        </PokedexProvider>
      </main>
      <footer className="footer">BreederDAO Frontend Exam</footer>
    </div>
  );
}

export default App;
