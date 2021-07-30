import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid'; 

const AsyncOperationsPageLayout = ({pokemons}) => {
   return (
      <div>
         {pokemons.map(pokemon => <div key={uuid()}>{pokemon.name}</div>)}
      </div>
   );
};

AsyncOperationsPageLayout.propTypes = {

};

export default AsyncOperationsPageLayout;