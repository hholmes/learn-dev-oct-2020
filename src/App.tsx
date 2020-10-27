import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Users } from "./Users";
import { Dashboard } from "./Dashboard";

export default function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex items-center bg-indigo-100">
        <div className="flex-1 max-w-6xl mx-auto p-10">
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
