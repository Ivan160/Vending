import React from 'react';
import './App.scss';
import Display from "./components/Display/Display";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
   return (
      <div className="app">
         <Display/>
         <Dashboard/>
      </div>
   );
}

export default App;
