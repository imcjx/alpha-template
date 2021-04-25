import React from "react";
import { Route, Redirect } from "react-router-dom";
import RouterConfig from "./RouterConfig";

class FrontendAuth extends React.Component {
  render() {
    const pathname = this.props.location.pathname;
    const targetRouter = RouterConfig.find(function(item) {
      return item.path === pathname;
    });
    const isLogin = localStorage.getItem("token") || '';
    if (pathname === "/") {
      return <Redirect to="login"></Redirect>;
    }
    if (pathname === "/main") {
      return <Redirect to="/main/notice"></Redirect>;
    }
    if (!targetRouter) {
      return <Redirect to="notfound" />;
    }

    if (isLogin.length > 0) {
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
}

export default FrontendAuth;