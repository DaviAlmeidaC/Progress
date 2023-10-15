import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home";

function MenuBasico() {
  return (
    <>
      <h1>Telas feitas</h1>
      <div>
        <Link to='home'>Home - Escola</Link>
      </div>
      <div>
        <Link to='chat'>Chat - Escola</Link>
      </div>
    </>
  )
}

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuBasico />} />
          <Route path="home" element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
