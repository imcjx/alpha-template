import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteAuth from "./router/RouteAuth";
import RouterConfig from './router/RouterConfig';
import MainTabBar from './layout/MainTabBar'
import './App.css'


const App = (props) => {
    const { pathname } = window.location;

    return (
        <Router>
            <Switch>
                <RouteAuth routerConfig={RouterConfig} />
            </Switch>
            { pathname.indexOf('main') === -1 ? '' : <MainTabBar />}
        </Router>
    )
}

export default App;
