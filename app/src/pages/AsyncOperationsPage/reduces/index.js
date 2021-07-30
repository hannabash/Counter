import {handleActions} from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
   pokeList: [],
   isLoading: false,
   errors:null
}

const pokemonsPageReducer = handleActions({
   [actions.GET_POKEMONS_REQUEST]: (state) => ({
      ...state,
      isLoading: true
   }),
   [actions.GET_POKEMONS_SUCCESS]:(state, {payload}) => ({
      ...state,
      isLoading: false,
      pokeList: payload
   }),
   [actions.GET_POKEMONS_FAIL]:(state, {payload}) => ({
      ...state,
      isLoading: false,
      errors: payload
   }),
}, defaultState)

export default pokemonsPageReducer;