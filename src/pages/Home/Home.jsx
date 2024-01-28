import { useState } from 'react';
import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import "./Home.css";


function Home() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <Header />
      {showTimer && <Timer />}
      <button onClick={(() => setShowTimer(!showTimer))}>
        Mostrar/Esconder
      </button>
    </>
  )
}

export default Home;
