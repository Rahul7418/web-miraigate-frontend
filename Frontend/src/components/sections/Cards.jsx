import Card from "../common/Card";
import cards from "../../data/cards.json"

const Cards = () => {
    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards