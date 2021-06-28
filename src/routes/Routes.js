import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import CreateRoom from '../pages/CreateRoom'
import Room from '../pages/Room'
import AdminRoom from '../pages/AdminRoom'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={SignIn} exact/>
      <Route path='/rooms/new' component={CreateRoom} exact/>
      <Route path='/rooms/:id' component={Room} exact/>
      <Route path='/admin/rooms/:id' component={AdminRoom} exact/>
    </Switch>
  )
}
