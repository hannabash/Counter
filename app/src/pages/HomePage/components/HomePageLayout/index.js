import React from 'react'
import { Link } from 'react-router-dom';

import {ROUTES} from '../../../../Routes/routeNames';

const HomePageLayout = () => {
   return (
      <div>
         {Object.entries(ROUTES).map(([routeName, path]) => (
            <Link to={path} key={path}>
               <button>{routeName}</button>
            </Link>
         ))}
      </div>
   );
};


export default HomePageLayout;