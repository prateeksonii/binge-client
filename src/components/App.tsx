import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import Movie from "../pages/Movie";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/movie/:id' component={Movie} />
        <Route path='/' exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
