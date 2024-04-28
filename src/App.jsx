
import "./App.css";
import Highlight from "./components/Highlight";
import Popular from "./components/Popular";
import { CartProvider } from "./context";
import { ShowCartProvider} from "./context"
import { Featured, Footer, Header, Sales } from "./components";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
    
      <ShowCartProvider>
      <Header />
      <ToastContainer className="toast"
            transition={Flip}
            position="bottom-right"
            autoClose={2000}
          />
      <Popular />
      <Highlight />
      <Sales />
      <Featured />
      <Footer />
      </ShowCartProvider>

    </CartProvider>
  );
}

export default App;
