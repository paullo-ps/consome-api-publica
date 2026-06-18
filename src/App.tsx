// src/App.tsx

import { useActionState } from 'react';
import { api } from './services/api';
import { PokemonCard } from './components/PokemonCard';
import type { Pokemon } from './interfaces/Pokemon';
import './App.css';

interface SearchState {
  data: Pokemon | null;
  error: string | null;
}

const initialState: SearchState = {
  data: null,
  error: null,
};

export const App = () => {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: SearchState, formData: FormData): Promise<SearchState> => {
      const query = formData.get('searchQuery') as string;

      if (!query || !query.trim()) {
        return { data: null, error: 'Por favor, digite o nome de um Pokémon.' };
      }

      try {
        const data = await api.getPokemon(query.toLowerCase().trim());
        return { data, error: null };
      } catch (err) {
        return { 
          data: null, 
          error: err instanceof Error ? err.message : 'Erro ao buscar o Pokémon.' 
        };
      }
    },
    initialState
  );

  return (
    <div className="container">
      <h1>Pokédex</h1>
      
      <form action={formAction} className="search-form">
        <input 
          name="searchQuery" 
          type="text" 
          placeholder="Digite o nome de um Pokémon..."
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {isPending && <p style={{ fontWeight: 'bold' }}>Carregando...</p>}
      
      {state.error && !isPending && <p className="error-message">{state.error}</p>}
      
      {state.data && !isPending && !state.error && (
        <PokemonCard pokemon={state.data} />
      )}
    </div>
  );
};