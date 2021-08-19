import React from 'react';
import './App.css';
import Header from "../src/components/Header";
import MainContents from "../src/components/MainContents";
import { useMediaQuery } from "react-responsive";


function App() {

  const isPc = useMediaQuery({
    query: "(min-width:1600px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1599px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      <Header />
      <MainContents />
    </>
  );
}

export default App;
