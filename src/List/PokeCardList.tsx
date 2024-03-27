import styled from "@emotion/styled";
import { useEffect, useState} from "react";
import { fetchPokemons, PokemonListResponse } from "../Service/pokemonService";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
    const [pokemons, setPokemons] = useState<PokemonListResponse>({
        count: 0,
        next: '',
        results: []
      })
    
    
    useEffect(() => {
        (async () => {
          const pokemons = await fetchPokemons()
          setPokemons(pokemons);
        })()
      }, [])
    return (
        <List>
        {
          pokemons.results.map((pokemon, idx) => (
            <PokeCard key={`${pokemon.name}_${idx}`} name={pokemon.name}/ >
          ))
        }
      </List>
    );
};


const List = styled.ul`
    list-style: none;
    padding: 0;
    margin 0 0 32px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export default PokeCardList;