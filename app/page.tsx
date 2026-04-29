export default function Home() {
  return (
    <main>
      <header>
        <div className="w-full h-[350px]">
          <img src="/hero.png" alt="image of front of kohi cafe" className="w-full h-full object-cover" />
        </div>
      </header>
      <section className="mt-[88px] mx-10 text-center mb-20">
        <h2 className="text-3xl mb-5">your everyday <br></br>coffee and pastry</h2>
        <p>Fuel yourself for the day or take a break you deserve with our coffee and freshly made pastries.</p>
      </section>
      <section className="my-20">
        <div className=" flex flex-col">
          <div className="w-9/10 p-4 rounded-lg shadow-md shadow-taupe-200 mb-5 self-start">
            <img src="/coffee.png" alt="image of coffee" className="rounded-lg" />
          </div>
          <div className="w-9/10 p-4 rounded-lg shadow-md shadow-taupe-200 mb-5 self-end">
            <img src="/croissant.png" alt="image of croissant" className="rounded-lg" />
          </div>
        </div>
        <button type="button" className="block mx-auto bg-yellow-700 text-white py-3 px-4 rounded-lg my-2">View menu</button>
      </section>
      <section className="bg-lime-900 p-15 text-white my-20 text-center">
        <h2 className="text-3xl mb-5">Opening Hours</h2>
        <p className="mb-3">Mon - Fri 6:00AM - 2:30PM</p>
        <p>Sat - Sun 6:30AM - 3:00PM</p>
      </section>
      <section className="my-10 flex flex-col items-center mx-5">
        <h2 className="text-3xl mb-5">Location</h2>
        <p className="mb-5">123 Street, Melbourne, VIC 3000</p>
        <img src="/mapPlaceholder.png" alt="" />
      </section>
      <section className="mx-5 flex">
        <div>
          <img src="/logo_transparent.png" alt="logo of cafe kohi" className="w-1/2 rounded-md" />
          <p>TEL: 0000 000 000</p>
        </div>
        <div className="flex flex-row h-1/3 self-end">
          <div className="border px-3 rounded-2xl">i</div>
          <div className="border px-3 rounded-2xl">f</div>
        </div>
      </section>
    </main>
  );
}
