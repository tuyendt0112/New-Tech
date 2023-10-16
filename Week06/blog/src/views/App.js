import "../styles/App.scss";
import ListBlog from "../components/ListBlog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPost from "../components/DetailPost";
import EditPost from "../components/EditPost";
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
            <Route path="/post/edit/:id">
              <EditPost />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
