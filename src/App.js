import { Nav, Header } from "./Components";
import { ChatBot, About, Contact } from "./pages";

const App = () => {
  return (
    <main>
      <Nav />
      <Header />
      <ChatBot />
      <About />
      <Contact />
    </main>
  );
};

export default App;
