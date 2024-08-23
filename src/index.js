import React from 'react';
import  ReactDOM from 'react-dom/client';

import AppsList from './AppsList';
import { ProtfolioIndex } from './portfolio';
import { IndexOfPorto } from './porto/indexx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <IndexOfPorto/>
 </React.StrictMode>
);


