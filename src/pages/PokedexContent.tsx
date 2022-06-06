import { FC, useCallback, useContext, useEffect, useState } from "react";

import { Context } from "../context/PokedexProvider";
import { Pokemon } from "../context/PokemonType";

import PokemonCard from "../components/PokemonCard";

import "./PokedexContent.css";

export const PokedexContent: FC = () => {
  const { getPokemons } = useContext(Context);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const init = useCallback(async () => {
    try {
      setIsLoading(true);

      const list = await getPokemons("Charizard", "Venusaur");
      
      setPokemonList(list);
    } catch (err) {
      console.error('Error getting pokemons: ', err);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [getPokemons]);

  useEffect(() => {
    init();
  }, [init]);

  let template = <></>;

  if (isLoading) {
    template = <div className="message">Loading...</div>;
  } else if (hasError) {
    template = 
      <div className="message error" onClick={init}>
        Error getting list! Click to retry
      </div>;
  } else {
    template = 
      <>
        {pokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.number} />
        ))}
      </>;
  }

  return (
    <div className="content">
      {template}
    </div>
  );
};