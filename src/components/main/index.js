import { Container, ImageContainer } from "./styles/main"

export default function Main({children}) {
    return (
        <Container>{children}</Container>
    )
}

Main.ImageContainer = function MainImageContainer({children}) {
    return (
        <ImageContainer>{children}</ImageContainer>
    )
}

