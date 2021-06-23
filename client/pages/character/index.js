import { useEffect, useState } from "react";
import {ApolloClient,InMemoryCache,gql} from "@apollo/client"
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import Character from '../../component/Character';
import Link from 'next/link'
import store from '../../redux/store';

var pagenum=1;

import { decrementPage, incrementPage } from "../../redux";

const CharacterContainer=styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;

align-items:center;
width:100%;
`
const Button=styled.button`
width:90px;
height:30px;
font-weight:600;
border:1px solid #ddd;
border-radius:10px;
background-color:white;
cursor:pointer;
`
const ButtonContainer=styled.div`
width:200px;
display:flex;
justify-content:space-between;
`

export default function Home(results) {


// const state=store.getState();
// console.log(state.number);
const PageNumber=useSelector(state=>state.number);
//console.log(PageNumber);

const dispatch=useDispatch();
 

  const initialState=results;


  //console.log(initialState);
  const[character,setCharacter]=useState(initialState.characters)

  
  const handlePrevious=async(event)=>
  {
     event.preventDefault();
    if(pagenum>1)
    { 
      pagenum-=1;
      dispatch(decrementPage());
      
      // var pagenum=PageNumber;
      const results = await fetch("/api/previous", {
        method: "post",
        body: pagenum,
      });
      const { characters, error } = await results.json();
      if(character)
      {
        await setCharacter(characters);
        
        
      }
    }
     
    //useState(character);
    //console.log(PageNumber)
    
   //console.log(PageNumber)
  }
  const handleNext = async(event)=>
{
   
   event.preventDefault();
  
   dispatch(incrementPage())
   pagenum+=1
   console.log(store.getState())
   const results = await fetch("/api/next", {
    method: "post",
    body: pagenum,
  });
  const { characters, error } = await results.json();
  if(character)
  {
    setCharacter(characters);
   
  }
   //useState(character);
   //console.log(PageNumber)
   //const state=store.getState();
  

}
  console.log(character);
  return (
    <CharacterContainer>
      <ButtonContainer>
      <Button onClick={(event)=>handlePrevious(event)}>Previous</Button>
      <Button onClick={(event)=>handleNext(event)}>Next</Button>
      </ButtonContainer>
      <Character character={character}/>
    </CharacterContainer>
  )
}
export async function getStaticProps() {
  
 

  //const PageNumber=useSelector(state=>state.number)
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
    query {
      characters(page:${pagenum}) {
        info {
          count
          pages
        }
        results {
          id
          name
          status
          species
          gender
          image
          type
          location {
            id
            name
            type
            dimension
            created
          }
        }
      }
    }
   `
    })
      return {
        props:{
          characters:data.characters.results
        },
      }
  

}
