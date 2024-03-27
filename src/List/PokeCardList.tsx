import styled from "@emotion/styled";
import { useEffect, useState} from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { fetchPokemons, PokemonListResponse } from "../Service/pokemonService";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
    const [pokemons, setPokemons] = useState<PokemonListResponse>({
        count: 0,
        next: '',
        results: []
      })
      const [infiniteRef] = useInfiniteScroll({
        loading: false,
        hasNextPage: true,
        onLoadMore: async () => {
          const result = await fetchPokemons(pokemons.next)
          setPokemons({
            ...result,
            results: [...pokemons.results, ...result.results]
          })
        },
        // When there is an error, we stop infinite loading.
        // It can be reactivated by setting "error" state as undefined.
        disabled: false,
        // `rootMargin` is passed to `IntersectionObserver`.
        // We can use it to trigger 'onLoadMore' when the sentry comes near to become
        // visible, instead of becoming fully visible on the screen.
        rootMargin: '0px 0px 100px 0px',
      });
    
    
    useEffect(() => {
        (async () => {
          const pokemons = await fetchPokemons()
          setPokemons(pokemons);
        })()
      }, [])
    return (
        <>
        <List>
        {
          pokemons.results.map((pokemon, idx) => (
            <PokeCard key={`${pokemon.name}_${idx}`} name={pokemon.name}/ >
          ))
        }
      </List>
      <Loading ref = {infiniteRef}>
            Loading...
      </Loading>
      </>
    );
};

const Loading = styled.div`
    display:flex;
    justify-content: center;
`

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