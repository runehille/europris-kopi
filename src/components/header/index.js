import { Container, Logo } from "./styles/header"

export default function Header({children}) {
    return (
        <Container>{children}</Container>
    )
}

Header.Logo = function HeaderLogo({children}) {
    return (
    <Logo>{children}</Logo>
    )
}