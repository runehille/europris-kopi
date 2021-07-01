import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html, body, #root {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
}

#root {
    display: flex;
    flex-direction: column;
}
`