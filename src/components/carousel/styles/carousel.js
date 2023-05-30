import styled from "styled-components"

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.75);
    height: 15em;
    width: 18em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    margin-bottom: 1em;
`

export const Item = styled.div`
    display: grid;
    margin: 0;
    height: 14em;
    padding-top: 1em;
    grid-template-areas:
    'img    title   heart'
    'img    caption .'
    '.      price   .'
    '.      button  .'
    'status status  status';
`

export const Image = styled.div`
    grid-area: img;
    cursor: pointer;
    // border: 1px solid red;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 5em;
    width: 5em;
    margin-right: -10px;
`

export const Title = styled.p`
    grid-area: title;
    cursor: pointer;
    // border: 1px solid blue;
    font-weight: bold;
    height: 1.5em;
    width: fit-content;
    margin: 0;
`

export const Caption = styled.p`
    grid-area: caption;
    // border: 1px solid green;
    justify-self: left;
    height: 1.5em;
    margin: 0;
`

export const Price = styled.p`
    color: red;
    font-weight: 900;
    font-size: 20px;
    grid-area: price;
    // border: 1px solid green;
    justify-self: left;
    height: 2em;
    margin: 0;
`

export const Status = styled.p`
    background-color: lightgrey;
    grid-area: status;
    // border: 0px solid indigo;
    text-align: center;
    line-height: 2.5em;
    margin-top: auto;
    margin-bottom: 0;
    height: 2.5em;
    width: 18em;
`

export const BuyButton = styled.div`
    color: white;
    cursor: pointer;
    grid-area: button;
    border-radius: 40px;
    background-color: teal;
    text-align: center;
    line-height: 2.5em;
    height: 2.5em;
    width: 8em;
`
export const Heart = styled.div`
    grid-area: heart;
    background-image: url('/like.svg');
    height: 1em;
    width: 1em;
    cursor: pointer;
`

export const ControlBtn = styled.button`
    border: none;
    cursor: pointer;
    font-size: 30px;
    width: 3em;
    height: 1em;
    line-height: 1em;
    background-color: transparent;
`