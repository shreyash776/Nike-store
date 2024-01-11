
import "./App.css";
import Highlight from "./components/Highlight";
import Popular from "./components/Popular";
import { CartProvider } from "./context";
import { Featured, Footer, Header, Sales } from "./components";

function App() {
  return (
    <CartProvider>
      <Header />
      <Popular />
      <Highlight />
      <Sales />
      <Featured />
      <Footer />
    </CartProvider>
  );
}

export default App;
