import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./style.css";

import {Header} from "./composants/Header.jsx";
import {Footer} from "./composants/Footer.jsx";
import {Annonce} from "./composants/Annonce.jsx";
import {Middle} from "./composants/Middle.jsx";
import {InscriptionRecruteur} from "./composants/Inscription_recruteur.jsx";

import {Acceuil} from "./pages/Acceuil.jsx";

// import {Login} from "./login.jsx";
// import {InscriptionCandidat} from "./inscription-candidat.jsx";

//   {
//     path: '/login',
//     element: (
//       <>
//         <body>
//           <header>
//             <Header connected = {true} affSearch = {false}/>
//           </header>
//           <Login/>
//           <footer>
//             <Footer/>
//           </footer>
//         </body>
//       </>
//     )
//   },
//   {
//     path: '/inscription_candidat',
//     element: (
//       <>
//         <body>
//           <header>
//             <Header connected = {true} affSearch = {false}/>
//           </header>
//           <InscriptionCandidat/>
//           <footer>
//             <Footer/>
//           </footer>
//         </body>
//       </>
//     )
//   }
// ])


export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Acceuil/>}/>
        <Route path = "/annonce/:id" element = {<Annonce/>}/>
        <Route path = "/middle" element = {<Middle/>}/>
        <Route path = "/inscription_recruteur" element = {<InscriptionRecruteur/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;