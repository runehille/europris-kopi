import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html, body, #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
`