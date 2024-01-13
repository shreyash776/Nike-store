
import "./App.css";
import Highlight from "./components/Highlight";
import Popular from "./components/Popular";
import { CartProvider } from "./context";
import { ShowCartProvider} from "./context"
import { Featured, Footer, Header, Sales } from "./components";

function App() {
  return (
    <CartProvider>
    
      <ShowCartProvider>
      <Header />
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
