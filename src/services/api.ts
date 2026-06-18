import type { Pokemon } from "../types/pokemon";

export const getPokemon = async (pokemonName: string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

    if (!response.ok) throw new Error('Pokemon não encontrado!');
    const data = await response.json();
    return data;
}