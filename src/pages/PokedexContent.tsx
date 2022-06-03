import { FC, useContext } from "react";

import { Context } from "../context/PokedexProvider";

import PokemonCard from "../components/PokemonCard";

import "./PokedexContent.css";

export const PokedexContent: FC = () => {
  const { pokemonList } = useContext(Context);

  return (
    <div className="content">
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.number} />
      ))}
    </div>
  );
};