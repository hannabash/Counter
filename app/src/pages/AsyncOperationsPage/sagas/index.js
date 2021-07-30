import {put, takeEvery, call} from 'redux-saga/effects';

import {getPokemons} from '../api'

import {GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS,GET_POKEMONS_FAIL} from '../actions';

function* getPokemonsWorker (action) {
   try{
      const response = yield call(getPokemons);
      yield put(GET_POKEMONS_SUCCESS(response.data.results))
   }catch(error){
      yield put(GET_POKEMONS_FAIL(error.message))
   }
}

function* getPokemonsWatcher() {
   yield takeEvery(GET_POKEMONS_REQUEST, getPokemonsWorker);
}

export default getPokemonsWatcher;