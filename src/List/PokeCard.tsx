import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { fetchPokemonDetail, PokemonDetailType } from "../Service/pokemonService";
const TempImgUrl = 'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800'

interface PokeCardProps{
    name: string
}

const PokeCard = (props:PokeCardProps) =>{
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null)

    useEffect(() => {
        // if(!isVisible || pokemon?.id) {
        //   return;
        // }
    
        (async () => {
          const result = await fetchPokemonDetail(props.name)
          setPokemon(result)
        })()
    
      }, [props.name, pokemon?.id])

      if(!pokemon){
        return null;   //화면이 로딩중일때 표시
    }

      
    const handleClick = () =>{
        navigate(`/pokemon/${props.name}`);
    }

 

    return(
        <Item onClick={handleClick}>
            <Header>
                <PokeNameChip name={pokemon.name} id={pokemon.id}/>
            </Header>
            <Body>
                <Image src={pokemon.images.dreamWorldFront} alt={pokemon.koreanName}/>
            </Body>
            <Footer>
                <PokeMarkChip/>
            </Footer>
        </Item>
    )
}

const Item = styled.li` 
    display: flex;
    flex-direction: column;

    padding: 8px;
    border: 1px solid #c0c0c0;
    width: 250px;
    height: 300px;

    box-shadow: 1px 1px 3px 1px #c0c0c0;

    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform :scale(1.1)
    }

    &:active{
        background-color : yellow;
        opacity: 0.8;
        transition: background-color 0s;
    }
`

const Header = styled.section`
    display: flex;
    flex-direction: row;
    margin: 8px 0;
` 

const Body = styled.section`
    display: flex; 
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
`
const Image = styled.img`
    width: 180px;
    height: 180px;
`
const Footer = styled.section`
    display: flex;
    flex-direction: row;
    margin: 8px 0;
`

export default PokeCard;