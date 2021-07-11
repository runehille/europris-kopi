import React, { useEffect, useState } from "react"
import { default as Carousel } from "../components/carousel"
import Main from "../components/main"

export default function MainContainer({children}) {
    const [product, setProduct] = useState('')
    const [index, setIndex] = useState(0)
        
    const products = [
        {
            image: "/Kvikk-Lunsj.jpg",
            title: "Kvikk Lunsj 6-pk",
            caption: "282g",
            priceLarge: "39",
            priceSmall: "90",
            status: "\u2713 På nettlager",
        },
        
        {
            image: "/termokanne.png",
            title: "Termokanne",
            caption: "1 l",
            priceLarge: "100",
            priceSmall: "",
            status: "\u2713 På nettlager",
        },
        
        {
            image: "/Bestikksett.jpg",
            title: "Bestikksett",
            caption: "1 l16 deler stål/sort",
            priceLarge: "50",
            priceSmall: "",
            status: "\u2713 På nettlager",
        }
    ]
    
    useEffect(() => {
        setProduct(products[index])
    }, [index]) 

    function rightSlide() {
        if (index >= products.length - 1) {
            setIndex(0)
        }
        else {
            setIndex((index + 1))
        }
    }

    function leftSlide() {
        if (index <= 0) {
            setIndex(products.length - 1)
        }
        else {
            setIndex((index - 1))
        }
    }

    return (
        <>
        <Main>
            <Main.ImageContainer src={'/tilbud.png'}/>
            <Carousel>
                <Carousel.ControlBtn onClick={() => leftSlide()}>{'<'}</Carousel.ControlBtn>
                <Carousel.Item>
                    <Carousel.Image src={product.image}/>
                    <Carousel.Title>{product.title}</Carousel.Title>
                    <Carousel.Caption>{product.caption}</Carousel.Caption>
                    <Carousel.Price>
                        {product.priceLarge}<sup>{product.priceSmall}</sup>
                    </Carousel.Price>
                    <Carousel.Status>{product.status}</Carousel.Status>
                    <Carousel.BuyButton>Kjøp</Carousel.BuyButton>
                    <Carousel.Heart/>
                </Carousel.Item>
                <Carousel.ControlBtn onClick={() => rightSlide()}>{'>'}</Carousel.ControlBtn>
            </Carousel>
        </Main>
        </>
    )
}