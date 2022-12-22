import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer,{initialState} from './components/functionality/reducer';
import { StateProvider } from './components/functionality/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StateProvider reducer={reducer} initialState={initialState}>
<App />
</StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
