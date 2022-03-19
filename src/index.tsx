import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';
import { ContextProvider } from './context/context';
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<ContextProvider><App /></ContextProvider> , mountNode);
