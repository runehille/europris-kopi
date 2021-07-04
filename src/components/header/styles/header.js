import styled from 'styled-components'

export const Container = styled.div` 
    display: grid;
    grid-template-areas:
    'logo placeholderBtn likeBtn userBtn cartBtn'
    'searchbar searchbar searchbar searchbar .';
    grid-gap: 1px;
    border: none;
    height: 6em;
    box-shadow: 0px 0px 3px 3px lightgrey;
    margin: 0;
    padding: 0;
`

export const Logo = styled.div`
    grid-area: logo;
    background-image: url('/europris_logo.svg');
    background-repeat: no-repeat;
    cursor: pointer;
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 4em;
    height: 2em;
    width: 6em;
`

export const Searchbar = styled.input`
    grid-area: searchbar;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    margin-left: 1em;
    margin-bottom: .5em;
    height: 2em;
    width: 22em;

    &:focus {
        box-shadow: 1px 1px 2px 2px lightblue;
    }
`

export const LinkButton = styled.div`
    grid-area: ${props => props.grid};
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    cursor: pointer;
    height: 1.5em;
    width: 1.5em;
    margin-right: 1em;
    margin-top: 1.5em;
`

