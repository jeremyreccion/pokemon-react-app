import { createContext, FC, useEffect, useState } from "react";
import { getPokemon } from "../utils/requests";
import { Pokemon } from "./PokemonType";

interface PokedexContext {
  pokemonList: Pokemon[];
}

interface Props {
  children: any;
}

export const Context = createContext<PokedexContext>({} as PokedexContext);

export const PokedexProvider: FC<Props> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async (...pokemons: string[]) => {
      const requests = pokemons.map(name => getPokemon(name));
      const _pokemonList = await Promise.all(requests);

      // if invalid name, response is null
      setPokemonList(_pokemonList.filter((item) => item !== null));
    };

    getPokemons("Charizard", "Venusaur");
  }, []);

  return (
    <Context.Provider value={{ pokemonList }}>
      {children}
    </Context.Provider>
  );
};