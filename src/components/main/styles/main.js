import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: auto;
`

export const ImageContainer = styled.div`
    border: 1px solid black;
    background-image: url('/tilbud.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 1em;
    height: 20em;
    width: auto;
`