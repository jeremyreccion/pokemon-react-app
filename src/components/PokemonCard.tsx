import { FC } from 'react';
import { Pokemon } from '../context/PokemonType';

import './PokemonCard.css';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={pokemon.image} className="image" alt={pokemon.name} />
      </div>
      <div className="desc-container">
        <dl>
          <dt>#{pokemon.number}</dt>
          <dt><strong>{pokemon.name}</strong></dt>
          <dt>Classification: {pokemon.classification}</dt>
          <dt>Types: {pokemon.types.join(", ")}</dt>
          <dt>Height: {pokemon.height.minimum} - {pokemon.height.maximum}</dt>
          <dt>Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}</dt>
        </dl>
      </div>
    </div>
  );
}

export default PokemonCard;