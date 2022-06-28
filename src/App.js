import { Nav, Header, Footer } from "./Components";
import { ChatBot, About, Contact } from "./pages";

const App = () => {
  return (
    <main>
      <Nav />
      <Header />
      <ChatBot />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
