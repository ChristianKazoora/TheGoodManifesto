import { useState } from "react";
import logo from "/logo.png";
import "./App.css";
import Stars from "./components/Stars";
function App() {
  return (
    <div className="relative h-screen flex flex-col">
      {/* White background */}
      <div className="flex-1 bg-white">
        <div className="mt-[-5%] flex flex-row items-center justify-center h-full">
          <img
            className="h-[35vh] mt-[5rem] mediumPhone:h-[25vh]  fablet:ml-[-2rem] xs:ml-[-2rem] xs:h-[25vh]"
            src={logo}
            alt=""
          />
          <div className="flex mt-[8rem] gap-0 flex-col ">
            <div className="flex flex-col  fablet:ml-[-1rem] xs:ml-[-1rem]">
              <h1 className="font-theGoodTitle  xs:text-[4vh] text-[5vh] font-extrabold text-black mb-[1rem]">
                THE GOOD
              </h1>
              <h1 className="font-manifestoTitle mediumPhone:pt-[5px] mediumPhone:text-[5vh] PhoneLand:pt-[15px] text-[8vh] mt-[-3rem] xs:mt-[-2.5rem] xs:text-[6vh] font-bold text-black mb-[1rem]">
                PROJXCT
              </h1>
            </div>

            <h2 className="text-[4vh] mediumPhone:text-[3vh] font-theGoodTitle ml-[8rem] xs:text-[4vh] fablet:ml-[4rem] font-bold text-black">
              presents
            </h2>
          </div>
        </div>
      </div>

      {/* Black background */}
      <div className="flex flex-1 bg-black ">
        <Stars />
        <div className="ml-[50%] text-center mt-[4rem] left-1/2 transform -translate-x-1/2 text-white">
          <div className="font-manifestoTitle text-[8vh]  font-extrabold xs:text-[4vh] space-x-[10px]  fablet:text-[6vh] flex flex-row">
            <h1 className="text-[#F69650] mediumPhone:text-[5vh]">The</h1>
            <h1 className="text-[#FFE4D7] mediumPhone:text-[5vh]">Gøod</h1>
            <h1 className="text-[#F69650] mediumPhone:text-[5vh]">Manifesto</h1>
          </div>
          <p className="text-[5vh] mediumPhone:text-[4vh] xs:text-[3vh] fablet:text-[3vh] mt-[4rem]">
            Coming 9.18.24
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import logo from "/logo.png";
// import "./App.css";
// import Stars from "./components/Stars";
// function App() {
//   return (
//     <div className="  relative h-screen flex flex-col">
//       {/* White background */}
//       <div className=" flex-1 bg-white">
//         <div className=" mt-[-5%] flex flex-row items-center justify-center h-full">
//           <img
//             className="h-[35vh] mt-[5rem] max-fablet:ml-[-2rem] max-xs:ml-[-2rem] max-xs:h-[25vh]"
//             src={logo}
//             alt=""
//           />
//           <div className="flex mt-[8rem] gap-0 flex-col ">
//             <div className=" flex flex-col max-fablet:ml-[-1rem] max-xs:ml-[-1rem]  ">
//               <h1 className=" font-theGoodTitle max-xs:text-[4vh] text-[5vh]  font-extrabold text-black ">
//                 THE GOOD
//               </h1>
//               <h1 className="font-manifestoTitle text-[8vh]  max-xs:text-[6vh] font-bold text-black">
//                 PROJXCT
//               </h1>
//             </div>

//             <h2 className="text-[4vh] font-theGoodTitle ml-[8rem] max-xs:text-[4vh] max-fablet:ml-[4rem]  font-bold text-black">
//               presents
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Black background */}
//       <div className="  flex flex-1 bg-black ">
//         <Stars />
//         <div className="ml-[50%] text-center mt-[4rem]  left-1/2 transform -translate-x-1/2 text-white">
//           <div className="font-manifestoTitle font-extrabold  max-xs:text-[4vh] space-x-[10px] text-[8vh]  max-fablet:text-[6vh] flex flex-row">
//             <h1 className="text-[#F69650] ">The</h1>
//             <h1 className="text-[#FFE4D7] ">Gøod</h1>
//             <h1 className="text-[#F69650]">Manifesto</h1>
//           </div>
//           <p className="text-[5vh] max-xs:text-[3vh] max-fablet:text-[4vh] mt-[4rem]">
//             Coming 9.18.24
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import logo from "/logo.png";
// import "./App.css";

// function App() {
//   return (
//     <div className="relative h-screen flex flex-col">
//       {/* White background */}
//       <div className="overflow-auto flex-1 bg-white">
//         <div className=" text- flex flex-row items-center justify-center h-full">
//           <img className="h-[45vh]" src={logo} alt="" />
//           <div className="flex flex-col">
//             <h1 className="text-[5vh] sm:text-[6vh] lg:text-[7vh] font-bold text-black mt-[2rem]">
//               THE GOOD
//             </h1>
//             <h1 className="text-[8vh] sm:text-[9vh] lg:text-[10vh] font-bold text-black">
//               PROJXCT
//             </h1>
//             <h2 className="text-[8vh] sm:text-[9vh] lg:text-[10vh] font-bold text-black">
//               presents
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Black background */}
//       <div className=" flex overflow-auto flex-1 bg-black ">
//         <div className=" text-center fixed bottom-[5vh]   left-1/2 transform -translate-x-1/2 text-white">
//           <div className=" flex-row">
//             <h1 className="text-[6vh] max-sm:text-[3.5vh]   sm:text-[4.4vh] lg:text-[6.5vh] font-bold text-white">
//               The Gøod Manifesto
//             </h1>
//           </div>
//           <p className="text-[4vh] max-sm:text-[3vh] sm:text-[3vh] lg:text-[4vh] pt-[5vh]">
//             Coming 9.18.24
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import logo from "/logo.png";
// import "./App.css";

// function App() {
//   return (
//     <div className="relative h-screen flex flex-col">
//       {/* White background */}
//       <div className="overflow-auto flex-1 bg-white">
//         <div className=" text- flex flex-row items-center justify-center h-full">
//           <img className="h-[45vh]" src={logo} alt="" />
//           <div className="flex flex-col">
//             <h1 className="text-[5vh] font-bold text-black mt-[2rem]">
//               THE GOOD
//             </h1>
//             <h1 className="text-[8vh] font-bold text-black">PROJXCT</h1>
//             <h2 className="text-[8vh] font-bold text-black">presents</h2>
//           </div>
//         </div>
//       </div>

//       {/* Black background */}
//       <div className=" flex overflow-auto flex-1 bg-black ">
//         <div className=" text-center fixed bottom-[5vh]   left-1/2 transform -translate-x-1/2 text-white">
//           <div className=" flex-row">
//             <h1 className="text-[8vh] font-bold text-white">
//               The Gøod Manifesto
//             </h1>
//           </div>
//           <p className="text-[4vh] pt-[5vh]">Coming 9.18.24</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
