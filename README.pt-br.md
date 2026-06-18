# 🌐 API Consumer Data App

[🇺🇸 English](./README.md) | [🇧🇷 Português](./README.pt-br.md)

Uma aplicação web responsiva desenvolvida com **React** e **TypeScript** para demonstrar integração com APIs REST, consumo assíncrono de dados, gerenciamento de estado e desenvolvimento de interfaces responsivas. A aplicação consome dados de uma API pública e os apresenta de forma organizada e intuitiva.

## 📸 Demonstração

<p align="center">
  <img src="./src/assets/demo.png" alt="Demonstração do projeto" width="800">
</p>

---

## ✨ Funcionalidades

* 🌐 Consumo de uma API REST pública.
* ⚡ Requisições assíncronas utilizando `async/await`.
* 🔄 Indicadores de carregamento durante as consultas.
* ❌ Tratamento de erros com mensagens amigáveis ao usuário.
* 🔍 Busca dinâmica de dados.
* 📱 Interface totalmente responsiva.
* 🔄 Atualização automática da interface com os dados retornados pela API.

---

## 🛠️ Tecnologias

* React 19
* TypeScript
* Fetch API
* Vite

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/
├── components/
│   └── PokemonCard.tsx
├── interfaces/
│   └── Pokemon.ts
├── services/
│   └── api.ts
├── App.tsx
└── main.tsx
```

---

## 💡 Conceitos Aplicados

Este projeto foi desenvolvido para aplicar boas práticas no consumo de APIs REST utilizando React.

### Gerenciamento de Estado e Ações de Formulário (React 19)

A aplicação utiliza recursos modernos do **React 19**, especialmente o hook `useActionState`, eliminando a necessidade de utilizar `useState` e `useEffect` para realizar requisições à API.

```tsx
const [state, formAction, isPending] = useActionState(
  async (_prevState: SearchState, formData: FormData) => {
    const query = formData.get("searchQuery") as string;
    // Lógica para consumir a API...
  },
  initialState
);
```

Essa abordagem torna o código mais simples, previsível e alinhado às práticas recomendadas do React 19.

### Tipagem com TypeScript

Todas as respostas da API são representadas por interfaces TypeScript, proporcionando maior segurança durante o desenvolvimento e reduzindo erros em tempo de execução.

```ts
interface Data {
  id: number;
  name: string;
  sprites: {
    front_Default: string;
  };
  types: PokemonType[];
}
```

### Consumo da API

A comunicação com a API é realizada utilizando a **Fetch API** nativa do navegador, aproveitando recursos modernos do JavaScript para realizar requisições HTTP.

---

## 🎨 Interface Responsiva

A interface foi desenvolvida seguindo a abordagem **mobile-first**, garantindo uma boa experiência de uso em computadores, tablets e smartphones.

---

## 🚀 Como executar

### Clone o repositório

```bash
git clone https://github.com/paullo-ps/consome-api-publica.git
```

### Entre na pasta do projeto

```bash
cd consome_api_publica
```

### Instale as dependências

**Com npm**

```bash
npm install
```

**Com Yarn**

```bash
yarn
```

### Execute o servidor de desenvolvimento

**Com npm**

```bash
npm run dev
```

**Com Yarn**

```bash
yarn dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

---

## 📚 Aprendizados

Este projeto contribuiu para consolidar conhecimentos em:

* Integração com APIs REST
* JavaScript assíncrono
* React 19
* TypeScript
* Gerenciamento de estado
* Tratamento de erros
* Estados de carregamento (Loading States)
* Componentização
* Design responsivo
* Boas práticas de desenvolvimento Front-end

---

## 🔮 Melhorias Futuras

* Paginação.
* Scroll infinito.
* Cache das requisições.
* Sistema de autenticação.
* Tema escuro (Dark Mode).
* Testes unitários com Vitest e React Testing Library.
* Busca com debounce.
* Cancelamento de requisições utilizando `AbortController`.
* Configuração da API por variáveis de ambiente.

---

## 👨‍💻 Autor

**Paulo Sérgio Mendes dos Santos**

* GitHub: https://github.com/paullo-ps
* LinkedIn: https://www.linkedin.com/in/paulo-s%C3%A9rgio-mendes-dos-santos-914a29200/
