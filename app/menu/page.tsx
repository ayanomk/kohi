import Card from "../components/Card";

export default function MenuPage() {
    return (
        <main className="mt-16">
            <header>
                <div className="relative h-80 w-full">
                    <img src="/menu.png" alt="image of freshly baked pastries" className="h-full w-full object-cover"/>
                    <div className="absolute bg-gray-700/70 inset-0"></div>
                    <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl">our menu</h2>
                </div>
            </header>
            <section>
                <div className="bg-accent p-5 text-center text-white">Food</div>
                <div className="mt-5 mb-15 mx-5">
                    <Card imgUrl="/croissant.png" imgAlt="image of croissant" cardText="Croissant"/>
                    <Card imgUrl="/almond-croissant.png" imgAlt="image of almond croissant" cardText="Almond Croissant"/>
                    <Card imgUrl="/cinnamon-roll.png" imgAlt="image of cinnamon roll" cardText="Cinnamon Roll"/>
                    <Card imgUrl="/canele.png" imgAlt="image of canele" cardText="Canele"/>
                    <Card imgUrl="/banana-bread.png" imgAlt="image of banana bread" cardText="Banana Bread"/>
                </div>
            </section>
            <section>
                <div className="bg-accent p-5 text-center text-white">Drink</div>
                <div className="mt-5 mb-15 mx-5">
                    <Card imgUrl="/coffee.png" imgAlt="image of coffee" cardText="Flat White, Latte, Cappuccino"/>
                    <Card imgUrl="/hot-chocolate.png" imgAlt="image of hot chocolate" cardText="Hot Chocolate"/>
                    <Card imgUrl="/tea.png" imgAlt="image of tea" cardText="Tea"/>
                </div>
            </section>
        </main>
    );
}