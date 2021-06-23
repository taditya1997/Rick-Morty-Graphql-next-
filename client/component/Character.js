import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'



const Characters=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
padding:10px;
margin:10px;
align-items:center;


`
const Single=styled.div`
margin:10px;
width:300px;
height:100%;
padding:5px;
border:1px soild red;
box-shadow:1px 1px 5px rgba(0,0,0,0.25);
border-radius:10px;
display:flex;
flex-direction:row;
cursor:pointer;
`
const ImageContainer=styled.img`
margin:20px;
background-color:pink;
width:100px;
height:100px;
border-radius:50%;
dipslay:flex;
flex-direction:column;
justify-content:center;
`
export const ImageandDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:right:10px;
border-right:2px solid #ddd;
`
const Details=styled.div`
 display:flex;
 flex-direction:column;
 font-weight:600;
 margin-left:5px;
`
const Character = ({ character }) => {

const handleClick=(event)=>
{   event.preventDefault();
    alert(event.target.key)
    console.log(event.target.key)
}

    console.log(character);
    return (

        <Characters>
            {
                character.map((element) => (
                    <Link  href={`/character/${element.id}`} key={element.id}>
                   <Single>
                   <ImageandDiv>
                   <ImageContainer src={element.image}/>
                   <h3>{element.name}</h3>
                   </ImageandDiv>
                   <Details>
                   
                   <p>{element.gender}</p>
                   
                   <p>{element.species}</p>
                   <p>{element.status}</p>
                   
                    {`Located At ${element.location.name}`}
                   
                   </Details>
                  </Single>
                   </Link>
                
                ))
            }

        </Characters>
    );
};

export default Character;