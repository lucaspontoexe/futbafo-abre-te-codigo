import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import VocêSabia from "./pages/VoceSabia";
import Album from "pages/Album";
import Tutorial from "pages/Tutorial";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/vocesabia" component={VocêSabia}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/game" component={Game} />
        <Route path="/album" component={Album} />
        <Route path="/tutorial" component={Tutorial} />
      </Switch>
    </BrowserRouter>
  );
}
