import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Página Inicial</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
