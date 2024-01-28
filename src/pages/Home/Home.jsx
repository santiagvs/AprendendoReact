import { useState } from 'react';
import Timer from "../../components/Timer/Timer";
import "./Home.css";


function Home() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {showTimer && <Timer />}
      <button onClick={(() => setShowTimer(!showTimer))}>
        Mostrar/Esconder
      </button>
    </>
  )
}

export default Home;
