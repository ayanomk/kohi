import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <header>
        <div className="w-full h-[350px] md:h-[500px] lg:h-[700px]">
          <img src="/hero.png" alt="image of front of kohi cafe" className="w-full h-full object-cover object-[50%_25%]" />
        </div>
      </header>
      <section className="mt-[88px] mx-10 text-center mb-20 lg:mx-auto lg:mt-34 lg:mb-32">
        <h2 className="text-3xl mb-5 lg:text-4xl lg:mb-8">your everyday <br></br>coffee and pastry</h2>
        <p className="lg:text-lg">Fuel yourself for the day or take a break you deserve with our coffee and freshly made pastries.</p>
      </section>
      <section className="my-20 md:my-30">
        <div className=" flex flex-col md:flex-row md:mx-5 lg:mx-auto lg:max-w-6xl">
          <div className="w-11/12 self-start md:w-1/2 md:mx-5 mb-5">
            <Card imgUrl="/coffee.png" imgAlt="image of coffee" />
          </div>
          <div className="w-11/12 self-end md:w-1/2 md:mx-5">
            <Card imgUrl="/croissant.png" imgAlt="image of croissant" />
          </div>
        </div>
        <button type="button" className="block mx-auto bg-secondary py-3 px-4 rounded-lg my-2 md:my-10">View menu</button>
      </section>
      <section className="bg-accent p-16 text-white my-20 text-center md:p-24">
        <h2 className="text-3xl mb-5 md:mb-10 lg:text-4xl">Opening Hours</h2>
        <p className="mb-3 md:mb-5 lg:text-lg">Mon - Fri 6:00AM - 2:30PM</p>
        <p className="lg:text-lg">Sat - Sun 6:30AM - 3:00PM</p>
      </section>
      <section className="my-10 flex flex-col items-center mx-5">
        <h2 className="text-3xl mb-5 lg:text-4xl">Location</h2>
        <p className="mb-5 lg:text-lg">123 Street, Melbourne, VIC 3000</p>
        <img src="/mapPlaceholder.png" alt="" />
      </section>
    </main>
  );
}
