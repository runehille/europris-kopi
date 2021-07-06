import {
    Carousel, Item, Image, Title, Caption,
    Price, Status, BuyButton, Heart, ControlBtn
} from "./styles/carousel"

export default function CompleteCarousel({children}) {
    return (
        <Carousel>{children}</Carousel> 
    )
}

CompleteCarousel.Item = function({children}) {
    return (
        <Item>{children}</Item>
    )
}

CompleteCarousel.Image = function({children}) {
    return (
        <Image/>
    )
}

CompleteCarousel.Title = function({children}) {
    return (
        <Title>{children}</Title>
    )
}

CompleteCarousel.Caption = function({children}) {
    return (
        <Caption>{children}</Caption>
    )
}

CompleteCarousel.Price = function({children}) {
    return (
        <Price>{children}</Price>
    )
}

CompleteCarousel.Status = function({children}) {
    return (
        <Status>{children}</Status>
    )
}

CompleteCarousel.BuyButton = function({children}) {
    return (
        <BuyButton>{children}</BuyButton>
    )
}

CompleteCarousel.Heart = function({children}) {
    return (
        <Heart>{children}</Heart>
    )
}

CompleteCarousel.ControlBtn = function({children}) {
    return (
        <ControlBtn>{children}</ControlBtn>
    )
}