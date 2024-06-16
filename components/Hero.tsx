export function Hero({ count }: { count: number }) {
  return (
    <section className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
              Long headline to turn your visitors into users
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-100">
              Free and Premium themes, UI Kits, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
              <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                {" "}
                Count: {count}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
