import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import PostDetails from "../Pages/PostDetails";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/post_details/:postId" component={PostDetails} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
