import React from "react";
import { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/template/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/users'><UserCrud></UserCrud></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>
