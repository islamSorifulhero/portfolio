// import { Suspense, use, useState } from 'react';
// import './App.css'
// import { ToastContainer } from 'react-toastify';
// import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
// import Navbar from './components/Navbar/Navbar';
// import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';



// const fetchPlayers = async () => {
//   const res = await fetch("/players.json")
//   return res.json()
// }

// const playersPromise = fetchPlayers();

// function App() {
//   const [toggle, setToggle] = useState(true);
//   const [availableBalance, setAvailableBalance] = useState(200000000);
//   const [purchesedPlayers, setPurchesedPlayers] = useState([])

//   const removePlayer = (p) => {
//     const fillteredData = purchesedPlayers.filter(ply => ply.player_name !== p.player_name)
//     setPurchesedPlayers(fillteredData)
//     setAvailableBalance(availableBalance + parseInt(p.price.split("BDT").join("").split(",").join("")))
//   }

//   return (
//     <>
//       <Navbar availableBalance={availableBalance}></Navbar>

//       <div className='font-bold flex justify-between items-center max-w-[1200px] mx-auto my-4'>
//         <h1>{
//           toggle === true ? "Available Players" : `Selected Players(${purchesedPlayers.length}/6)`
//         }</h1>


//         <div className='font-bold'>
//           <button onClick={() => setToggle(true)} className={`border py-3 px-4 border-r-0 rounded-l-2xl ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
//           <button onClick={() => setToggle(false)} className={`border py-3 px-4 border-l-0 rounded-r-2xl ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected({purchesedPlayers.length})</button>
//         </div>
//       </div>

//       {
//         toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
//           <AvailablePlayers purchesedPlayers={purchesedPlayers} setPurchesedPlayers={setPurchesedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
//         </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchesedPlayers={purchesedPlayers}></SelectedPlayers>
//       }


//       <ToastContainer />
//     </>
//   )
// }

// export default App



// import Home from "./pages/Home";

import Home from "./components/pages/Home";

function App() {
  return <Home />;
}

export default App;

