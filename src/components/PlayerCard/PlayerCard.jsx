// import React, { useState } from 'react';
// import groupImg from "../../assets/Group.png";
// import flagImg from "../../assets/Flag.png"
// import { toast } from 'react-toastify';

// const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchesedPlayers, purchesedPlayers }) => {
//     const [isSelected, setIsSelected] = useState(false);
//     const handleSelected = (playerData) => {
//         const playerPrice = parseInt(playerData.price.split("BDT").join("").split(",").join(""))
//         if (availableBalance < playerPrice) {
//             toast("Not enough coin!!")
//             return;
//         }
//         if (purchesedPlayers.length === 6) {
//             toast("6 players already selected!")
//             return;
//         }
//         setIsSelected(true)
//         setAvailableBalance(availableBalance - playerPrice);
//         setPurchesedPlayers([...purchesedPlayers, playerData])
//         toast("Player purchased!")
//     }
//     return (
//         <div className="card bg-base-100 shadow-sm p-4">
//             <figure>
//                 <img className='w-full h-[300px] rounded-xl'
//                     src={player.player_image} alt="Shoes" />
//             </figure>
//             <div className="my-4">
//                 <div className='flex gap-2'>
//                     <img src={groupImg} alt="" /><h2 className="card-title">{player.player_name}</h2>
//                 </div>
//                 <div className='flex justify-between my-4 items-center border-b-1 border-gray-400 pb-2'>
//                     <div className='flex gap-2 items-center'>
//                         <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
//                         <p>{player.player_country}</p>
//                     </div>
//                     <button className='btn bg-gray-100 '>{player.playing_role}</button>
//                 </div>
//                 <h1 className='font-bold'>{player.rating}</h1>
//                 <div className='flex justify-between my-3 items-center'>
//                     <h2 className='font-bold'>{player.bating_style}</h2>
//                     <p className='text-gray-400'>{player.bowling_style}</p>
//                 </div>
//                 <div className='flex justify-between items-center'>
//                     <h1 className='font-bold'>Price: <span>{player.price}</span></h1>
//                     <button disabled={isSelected} onClick={() => { handleSelected(player) }} className='btn'>{isSelected === true ? "Selected" : "Choose Player"}</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlayerCard;