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
      <a
        href="#carouselExampleCaptionsFull"
        className="flex items-center justify-center fixed bottom-8 right-8 left-auto z-[999] p-2 w-10 h-10 bg-blue-600 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <span>
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </a>
    </main>
  );
};

export default App;
