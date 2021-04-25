import React from "react";
import { Route, Redirect } from "react-router-dom";
import RouterConfig from "./RouterConfig";

const RouteAuth = (props) => {
    const pathname = props.location.pathname;
    const targetRouter = RouterConfig.find((item) => {
        return item.path === pathname;
    });
    const token = localStorage.getItem("token") || '';
    if (pathname === "/") {
        return <Redirect to="login"></Redirect>;
    }
    if (pathname === "/main") {
        return <Redirect to="/main/notice"></Redirect>;
    }
    if (!targetRouter) {
        return <Redirect to="/notfound" />;
    }

    if (token.length > 0) {
        if (pathname === "/login") {
            return <Redirect to="/main/notice"></Redirect>;
        } else {
            return (
                <Route exact path={pathname} component={targetRouter.component} />
            );
        }
    } else {
        if (targetRouter.auth) {
            console.log("请先登录");
            return <Redirect exact to="/login" />;
        } else {
            return (
                <Route exact path={pathname} component={targetRouter.component} />
            );
        }
    }
}

export default RouteAuth;