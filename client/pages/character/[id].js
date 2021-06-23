import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styled from 'styled-components';


// export const  getStaticPaths = async()=> {
//   const state=store.getState();
//   //console.log(state.number);
//   const pageNumber=state.number;

//   const client = new ApolloClient({
//     uri: "https://rickandmortyapi.com/graphql/",
//     cache: new InMemoryCache(),
//   })

//   const { data } = await client.query({
//     query: gql`
//     query {
//       characters(page:${pageNumber}){

//         results {
//           id
//           episode{
//             name
//             air_date
//             episode
//             characters{
//               name
//               image
//             }
//           }
//         }
//       }
//     }

//    `
//     })

//     const paths=data.characters.results.map(cartoons=>{
//       return{
//         params:{id:cartoons.id.toString()}
//       }
//     })
//     return {
//       paths,
//       fallback: false
//     }

// }
// export const getStaticProps = async (context) => {
//   //console.log(context);
//   const id = context.params.id;
// +
// }

export async function getServerSideProps(context) {
  const { id } = context.query;

  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  })
  const { data } = await client.query({
    query: gql`
    query {
      character(id:${id}) {
        name
        status
        image
        species
        type
        origin{
          name
        }
        episode{
          name
          air_date
          episode
          characters{
            name
            image
            
          }
          created
        }
      }
    }
    
   `
  })

  return {
    props: { character: data.character }
  }
}


const CharacterComponent = styled.div`
display:flex;
flex-direction: column;
box-shadow:1px 1px 5px rgba(0,0,0,0.25);
flex-wrap:wrap;
align-items:center;
width:100%;
margin:10px;
`
const ImageContainer = styled.div`

display:flex;
flex-direction: column;
align-items:center;
width:90%;
margin:1%;
border-bottom:1.5px solid #ddd;

`
const Profile=styled.img`
dipslay:flex;
flex-direction:column;
width:300px;
border-radius:50%;
`
const EpisodeContainer=styled.div`

display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin:1%;
`
const Episode=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;

`
const EpisodeDetails=styled.div`
display:flex;
flex-direction:column;
box-shadow:1px 1px 5px rgba(0,0,0,0.25);
font-weight:700;
margin:1%;
border-radius:10px;
padding:1%;
cursor:pointer;

`
const Details = ({ character }) => {
  const episode = character.episode.map((element) => {
    if (element != "characters") {
      return {
        element
      }
    }


  })
  console.log(episode);
  //console.log(character)
  return (
    <CharacterComponent>
      <ImageContainer>

        
          <Profile src={character.image}/>
        
        <h1>{character.name}</h1>
      </ImageContainer>
      <EpisodeContainer>
        
          <h1>{`${character.name} got featured in`}</h1>
          <Episode>
            {
              episode.map((cartoon) => {
                return (
                  <EpisodeDetails>
                    <p>{`Episode Name: ${cartoon.element.name}`}</p>
                    <p>{`Episode Air_date: ${cartoon.element.air_date}`}</p>
                    <p>{`Episode : ${cartoon.element.episode}`}</p>
                  </EpisodeDetails>
                )
              })
            }
          </Episode>

        
      </EpisodeContainer>
    </CharacterComponent>
  );
}

export default Details;