export default function NavBar() {
  return (
    <nav className="bg-white">
      <div className=" w-full flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center ml-64">
          <span className=" flex w-40 h-10 flex-col justify-center flex-shrink-0 text-teal-700 text-center text-4xl not-italic font-light uppercase ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="187"
              height="41"
              viewBox="0 0 187 41"
              fill="none"
            >
              <path
                d="M13.608 15.8365V17.9245H2.52V27.3205H11.88V29.4085H2.52V41.0005H0V15.8365H13.608Z"
                fill="#3DDABE"
              />
              <path
                d="M20.2739 15.8365V41.0005H17.7539V15.8365H20.2739Z"
                fill="#3DDABE"
              />
              <path
                d="M35.0525 28.4365L42.6845 41.0005H39.8765L33.4685 30.4885L27.3845 41.0005H24.5765L32.1725 28.3285L24.5765 15.8365H27.3845L33.7565 26.3125L39.9125 15.8365H42.7205L35.0525 28.4365Z"
                fill="#3DDABE"
              />
              <path
                d="M60.6471 15.8365V17.9245H49.5591V27.3205H58.9191V29.4085H49.5591V41.0005H47.0391V15.8365H60.6471Z"
                fill="#3DDABE"
              />
              <path
                d="M67.313 15.8365V41.0005H64.793V15.8365H67.313Z"
                fill="#3DDABE"
              />
              <path
                d="M91.9915 41.0005H89.4715L75.5395 19.8325V41.0005H73.0195V15.8365H75.5395L89.4715 36.9685V15.8365H91.9915V41.0005Z"
                fill="#3DDABE"
              />
              <path
                d="M105.151 15.8365C107.935 15.8365 110.323 16.3405 112.315 17.3485C114.307 18.3565 115.831 19.8085 116.887 21.7045C117.943 23.6005 118.471 25.8565 118.471 28.4725C118.471 31.0645 117.943 33.3085 116.887 35.2045C115.831 37.0765 114.307 38.5165 112.315 39.5245C110.323 40.5085 107.935 41.0005 105.151 41.0005H97.6992V15.8365H105.151ZM105.151 38.9125C108.655 38.9125 111.319 38.0005 113.143 36.1765C114.991 34.3285 115.915 31.7605 115.915 28.4725C115.915 25.1605 114.991 22.5805 113.143 20.7325C111.319 18.8605 108.655 17.9245 105.151 17.9245H100.219V38.9125H105.151Z"
                fill="#3DDABE"
              />
              <path
                d="M125.637 17.8885V27.2845H164.796V29.3725L125.637 29.3725V38.9125L165.876 38.9125V41.0005L123.117 41.0005V15.8005L165.876 15.8365V17.8885L125.637 17.8885Z"
                fill="#3DDABE"
              />
              <path
                d="M183.688 41L177.46 30.4881H172.816V41H170.296V15.836H177.856C180.664 15.836 182.788 16.508 184.228 17.8521C185.692 19.1961 186.424 20.9601 186.424 23.1441C186.424 24.9681 185.896 26.5281 184.84 27.8241C183.808 29.0961 182.272 29.9241 180.232 30.3081L186.712 41H183.688ZM172.816 28.4361H177.892C179.86 28.4361 181.336 27.9561 182.32 26.996C183.328 26.036 183.832 24.7521 183.832 23.1441C183.832 21.4881 183.352 20.216 182.392 19.328C181.432 18.416 179.92 17.96 177.856 17.96H172.816V28.4361Z"
                fill="#3DDABE"
              />
              <path
                d="M144.661 1.24091L165.783 17L122.884 17L144.661 1.24091Z"
                fill="white"
                stroke="#3DDABE"
                stroke-width="2"
              />
            </svg>
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto pr-32">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="text-black text-sm not-italic font-medium leading-5"
              >
                Блок 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm not-italic font-medium leading-5"
              >
                Блок 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm not-italic font-medium leading-5 mr-auto*"
              >
                Блок 3
              </a>
            </li>

            {/* Побавитись з анімацією треба ще
                padding
                hover:bg-teal-500 hover:text-white hover:border-teal-500 
                style={{"borderRadius":"50%"}}
            */}

            <button className="rounded-lg border-2 border-teal-400 flex flex-row pt-1 pb-1 pl-10 pr-5 items-center text-teal-500 ">
              <a
                href="#"
                className=" text-center text-sm not-italic font-bold leading-5 mr-3 "
              >
                Увійти
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="16"
                viewBox="0 0 37 16"
                fill="none"
              >
                <path
                  d="M36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM0 9H36V7H0V9Z"
                  fill="#2AC0A5"
                />
              </svg>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
