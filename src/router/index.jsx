import Route from "./Route";
import BrowserRouter from "./BrowserRouter";

function App() {
  return (
    <BrowserRouter>
      <button
        onClick={() => {
          history.pushState({ first: "first" }, "page 2", "/about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          history.pushState({ first: "first" }, "page 2", "/home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          history.pushState({ first: "first" }, "page 2", "/friend");
        }}
      >
        friend
      </button>
      <button
        onClick={() => {
          history.pushState({ first: "first" }, "page 2", "/music");
        }}
      >
        music
      </button>
      <button
        onClick={() => {
          history.pushState({ first: "first" }, "page 2", "/book");
        }}
      >
        book
      </button>
      <Route path="/home" component={() => <div>Home</div>} />
      <Route path="/about" component={() => <div>About</div>} />
      <Route path="/friend" component={() => <div>friend</div>} />
      <Route path="/music" component={() => <div>music</div>} />
      <Route path="/book" component={() => <div>book</div>} />
    </BrowserRouter>
  );
}

export default App;
