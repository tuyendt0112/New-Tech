import "../styles/App.scss";
import ListBlog from "../components/ListBlog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPost from "../components/DetailPost";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>JEZZTOM BLOG</h1>

          <Switch>
            <Route path="/" exact>
              <ListBlog />
            </Route>
            <Route path="/post/detail/:id">
              <DetailPost />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
