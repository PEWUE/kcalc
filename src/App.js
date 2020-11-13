import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "typeface-luckiest-guy";
import "typeface-lato";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './scss/App.scss';
import Header from "./Header";
import Ingredients from "./Ingredients";

function App() {


  return (
    <>
      <Header/>
      <Ingredients/>
    </>
  );
}

export default App;
