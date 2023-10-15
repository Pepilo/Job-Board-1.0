import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./style.css";
import {Header} from "./header.jsx";
import {Login} from "./login.jsx";
import {Footer} from "./footer.jsx";
import {Inscription} from "./inscription.jsx";
import { Header_alt } from "./header_alt";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <body>
          <header>
            <Header/>
          </header>
          <footer>
            <Footer/>
          </footer>
        </body>
      </>
    )
  },
  {
    path: '/login',
    element: (
      <>
        <body>
          <header>
            <Header_alt/>
          </header>
          <Login/>
          <footer>
            <Footer/>
          </footer>
        </body>
      </>
    )
  },
  {
    path: '/inscription',
    element: (
      <>
        <body>
          <header>
            <Header_alt/>
          </header>
          <Inscription/>
          <footer>
            <Footer/>
          </footer>
        </body>
      </>
    )
  }
])

function App() {
  return <RouterProvider router = {router}/>
}

export default App;
