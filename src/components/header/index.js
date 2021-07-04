import { Container, Logo, Searchbar, LinkButton } from "./styles/header"

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

Header.Searchbar = function HeaderSearchbar({children}) {
    return (
        <Searchbar placeholder="Søk...">{children}</Searchbar>
    )
}


Header.LinkButton = function HeaderLinkButton({children, ...props}) {
    return (
        <LinkButton {...props}></LinkButton>
    )
}