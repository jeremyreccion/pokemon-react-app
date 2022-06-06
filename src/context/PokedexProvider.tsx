import { createContext, FC } from "react";
import { getPokemon } from "../utils/requests";
import { Pokemon } from "./PokemonType";

interface Props {
  children: any;
}

interface PokedexContext {
  getPokemons: (...pokemons: string[]) => Promise<Pokemon[]>;
}

export const Context = createContext<PokedexContext>({} as PokedexContext);

export const PokedexProvider: FC<Props> = ({ children }) => {
  const getPokemons = async (...pokemons: string[]) => {
    const requests = pokemons.map((name) => getPokemon(name));
    const list = await Promise.all(requests);

    // if invalid name, response is null
    return list.filter((item) => item !== null);
  };

  return (
    <Context.Provider value={{ getPokemons }}>
      {children}
    </Context.Provider>
  );
};