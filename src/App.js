import { Nav, Header } from "./Components";
import { About, Contact } from "./pages";

const App = () => {
  return (
    <div className="bg-indigo-500">
      <Nav />
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
