export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 text-[#0c1354] lg:w-5/12 sm:px-8 xl:pr-16">
          <p className="text-lg">We are</p>
          <p className="text-lg">Patio</p>
          <h1 className="text-4xl tracking-tight font-extrabold text-[#0c1354] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="top-block rounded-md xl:inline text-lg text-white bg-[#0c1354] pr-2 mr-2">
              <svg
                className="inline mt-4"
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H31L0 32V0Z" fill="#0C1354" />
              </svg>
              and we
            </span>
            <br />
            <span className="block text-[#0c1354] xl:inline">
              are technical cooperatives from all over the world
            </span>
          </h1>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-2 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#6e24b0] hover:bg-[#14aded] md:py-4 md:text-lg md:px-2"
              >
                Become a member
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-2 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#14ADED] hover:bg-[#6e24b0] md:py-4 md:text-lg md:px-2"
              >
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero.png"
          alt=""
        />
      </div>
    </div>
  )
}
