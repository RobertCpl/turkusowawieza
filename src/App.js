import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header";
import PostsList from "./components/Posts/PostsList";

function App() {
   return (
      <div className="container">
         <Navigation />
         <Header></Header>
         <PostsList />
      </div>
   );
}

export default App;
