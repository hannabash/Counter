import {useState, useEffect} from 'react';
import AsyncOperationsPageLayout from '../components/AsyncLayout';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {GET_POKEMONS_REQUEST} from '../actions'

const AsyncOperationsPageContainer = () => {
   const dispatch = useDispatch();

   useEffect (() => {
      dispatch(GET_POKEMONS_REQUEST())
   }, [dispatch])

//   useEffect (() => {
//      fetch(baseURL)
//      .then((response)=> response.json())
//      .then((data)=> setPokemons({...pokeData, pokeList: data.results}))
//      .catch((error) => setPokemons({...pokeData, errors:error.message}))
//   }, [])


   

   return <AsyncOperationsPageLayout
   pokemons={[]}/>
}

export default AsyncOperationsPageContainer;