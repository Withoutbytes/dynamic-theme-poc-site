# POC para definição de tema dinâmico no Tailwind

## Como funciona

Básicamente ele funciona fazendo uma requisição do servidor e definindo váriaveis de css dinâmicamente, na config do tailwind é utilizado de forma simples uma váriavel css.

## Exemplo

Definindo a cor primária para amarelo no javascript

```js
documentStyle.setProperty("--tw-color-primary", "#fff000");
```

Config tailwind

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--tw-color-primary)",
            },
        },
    },
    plugins: [],
};
```

No react

```js
const Home = () => {
 return (
    <div>
        <h1 className="text-2xl text-primary">Texto primário</h1>
    </div>
 );
};

export default Home;
```

## Exemplo definindo cor para azul no react, com requisição no servidor

```js
import { useEffect } from "react";

const Home = () => {
 useEffect(() => {
  fetch("/api/theme").then((res) => res.json()).then(theme => {
   documentStyle.setProperty("--tw-color-primary", theme.primary);      
  });
 }, []);

 return (
    <div>
        <h1 className="text-2xl text-primary">Texto primário</h1>
    </div>
 );
};

export default Home;
```

Resposta do servidor

```json
{
    "primary": "#0000ff"
}
```
