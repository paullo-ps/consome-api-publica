// src/components/PokemonCard.tsx

import type { Pokemon } from '../interfaces/Pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <img 
        src={pokemon.sprites.front_default} 
        alt={`Sprite do ${pokemon.name}`} 
      />
      <h2>
        #{pokemon.id} - {pokemon.name.toUpperCase()}
      </h2>
      
      <div className="types-container">
        {pokemon.types.map((item) => (
          <span 
            key={item.type.name} 
            className="type-badge"
          >
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};
