import React, { useState, useEffect } from 'react';
// import { Routes, Route, Outlet, Link } from "react-router-dom";
import './css/styles.css';

// import logo from './logo/Soccerball.svg';

// import FixedButton from './FixedButton';
// import Test from './Test';
// import Fa from './Fa';
// import Qrscan from './Qrscan';
// import PriceTag from './PriceTag';
import EWallet from './components/EWallet';
// import QrReader from './QrReader';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// import { DATA } from './constants';

const tele = window.Telgram.WebApp

export default function App() {
  useEffect(() => {
    tele.ready();
  });

  return (
    <div>
      <h1>My EWallet</h1>
      <EWallet/>
    </div>
  )
}