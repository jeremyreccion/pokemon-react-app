import { Pokemon } from "../context/PokemonType";

const ENDPOINT = 'https://graphql-pokemon2.vercel.app';
const REQUEST_CONFIG = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const getSinglePokemonQuery = (name: string): string => {
  return `
    query {
      pokemon(name: "${name}"){
        number
        name
        weight{
          minimum
          maximum
        }
        height{
          minimum
          maximum
        }
        classification
        types
        image
      }
    }
  `;
};

export const getPokemon = (name: string): Promise<Pokemon> => {
  return fetch(ENDPOINT, {
    ...REQUEST_CONFIG,
    body: JSON.stringify({ query: getSinglePokemonQuery(name) }),
  })
  .then(response => response.json())
  .then(data => data.data.pokemon);
};