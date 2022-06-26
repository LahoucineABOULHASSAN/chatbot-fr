import { Nav, Header } from "./Components";
import { ChatBot, About, Contact } from "./pages";

const App = () => {
  return (
    <div className="bg-indigo-500">
      <Nav />
      <Header />
      <ChatBot />
      <About />
      <Contact />
    </div>
  );
};

export default App;
