import CompleteCarousel from "../components/carousel"
import Main from "../components/main"

export default function MainContainer({children}) {
    return (
        <>
        <Main>
            <Main.ImageContainer src={'/tilbud.png'}/>
            <CompleteCarousel>
                <CompleteCarousel.ControlBtn>{'<'}</CompleteCarousel.ControlBtn>
                <CompleteCarousel.Item>
                    <CompleteCarousel.Image/>
                    <CompleteCarousel.Title>Kvikk Lunsj 6-pk</CompleteCarousel.Title>
                    <CompleteCarousel.Caption>282 g</CompleteCarousel.Caption>
                    <CompleteCarousel.Price>39<sup>90</sup></CompleteCarousel.Price>
                    <CompleteCarousel.Status> {'\u2713'} På nettlager</CompleteCarousel.Status>
                    <CompleteCarousel.BuyButton>Kjøp</CompleteCarousel.BuyButton>
                    <CompleteCarousel.Heart/>
                </CompleteCarousel.Item>
                <CompleteCarousel.ControlBtn>{'>'}</CompleteCarousel.ControlBtn>
            </CompleteCarousel>
        </Main>
        </>
    )
}