import { useActionState } from 'react';
import { getPokemon } from './services/api';
import type { Pokemon } from './types/pokemon';
import './App.css';

// 1. Definimos o formato do estado retornado pela nossa Action
interface SearchState {
  data: Pokemon | null;
  error: string | null;
}

// 2. Estado inicial limpo
const initialState: SearchState = {
  data: null,
  error: null,
};

export const App =()=> {
  // 3. A mágica do React 19: useActionState gerencia o estado, a ação e o loading (isPending)
  const [state, formAction, isPending] = useActionState(
    async (_prevState: SearchState, formData: FormData): Promise<SearchState> => {
      // Pegamos o valor diretamente do atributo 'name' do input
      const pokemonName = formData.get('pokemonName') as string;

      if (!pokemonName || !pokemonName.trim()) {
        return { data: null, error: 'Por favor, digite o nome de um Pokémon.' };
      }

      try {
        const data = await getPokemon(pokemonName.trim());
        return { data, error: null };
      } catch (err: any) {
        return { data: null, error: err.message };
      }
    },
    initialState
  );

  return (
    <div className="container">
      <h1>Pokédex do Portfólio</h1>
      
      {/* 4. Passamos a formAction direto para o atributo 'action' */}
      <form action={formAction} className="search-form">
        <input
          name="pokemonName" /* O name é obrigatório para o FormData capturar o valor */
          type="text"
          placeholder="Digite o nome de um Pokémon..."
          required
        />
        {/* isPending bloqueia o botão automaticamente durante a requisição */}
        <button type="submit" disabled={isPending}>
          {isPending ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {/* Exibição de Erro baseada no estado da Action */}
      {state.error && <p className="error-message">{state.error}</p>}

      {/* Exibição de Sucesso baseada no estado da Action */}
      {state.data && !isPending && (
        <div className="pokemon-card">
          <img 
            src={state.data.sprites.front_default} 
            alt={`Sprite do ${state.data.name}`} 
          />
          <h2>
            #{state.data.id} - {state.data.name.toUpperCase()}
          </h2>
          <div className="types-container">
            {state.data.types.map((t) => (
              <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
