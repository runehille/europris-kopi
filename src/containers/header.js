import Header from '../components/header'

export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Logo/>
            <Header.LinkButton
                background = {'placeholder.svg'}
                grid = {'placeholderBtn'}/>
            <Header.LinkButton
                background = {'like.svg'}
                grid = {'likeBtn'}/>
            <Header.LinkButton
                background = {'shopping-cart.svg'}
                grid = {'cartBtn'}/>
            <Header.LinkButton
                background = {'user.svg'}
                grid = {'userBtn'}/>        
            <Header.Searchbar/>
        </Header>
    )
}