import Image from "next/image";
import rabotiaha from "@/assets/images/rabotiaha.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-top justify-between pt-3 pl-40 pr-48">
      <div
        className="text-black rounded-3xl pt-12 pr-12 pl-12 pb-10 flex-shrink-0"
        style={{
          borderRadius: "40px",
          width: "500px",
          height: "597px",
          boxShadow: "0px 20px 50px -15px rgba(29, 117, 101, 0.30)",
        }}
      >
        <h1
          className=" not-italic font-black uppercase text-3xl mb-0"
          style={{ fontFamily: "Poppins", lineHeight: "138%", width: "405px" }}
        >
          Місце, де власники та майстри - на
          <span style={{ color: "#2ACCAF" }}> одній</span> хвилі
        </h1>

        <svg
          className="mt-0 mb-10"
          xmlns="http://www.w3.org/2000/svg"
          width="420"
          height="32"
          viewBox="0 0 420 32"
          fill="none"
        >
          <g filter="url(#filter0_d_58_1677)">
            <path
              d="M415.75 0.5L12.6377 23.9484C12.0475 23.9827 11.4554 23.9547 10.8712 23.8648L10.7781 23.8505C9.28908 23.6214 7.89383 22.9804 6.75 22C3.13381 18.7454 5.33471 12.7439 10.1976 12.5988L415.75 0.5Z"
              fill="#3DDABE"
              fill-opacity="0.81"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_58_1677"
              x="0.954834"
              y="0.5"
              width="418.795"
              height="31.4626"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.112674 0 0 0 0 0.458333 0 0 0 0 0.396115 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_58_1677"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_58_1677"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <h2
          className="text-xl not-italic font-semibold uppercase"
          style={{ fontFamily: "Poppins", lineHeight: "151,5%" }}
        >
          наш сайт - це платформа для власників нерухомості та майстрів, де
          спільна гармонія та співпраця перетворюють ідеї в реальність.
        </h2>

        <div
          className="text-center flex-shrink-0 text-base not-italic font-black"
          style={{
            color: "#FFF",
            lineHeight: "151,5%",
          }}
        >

          {/* задати href кнопкам */}
          <button
            className=" rounded-xl h-12 mb-6 mt-8"
            style={{
              width: "389px",
              background: "#3DDABE",
            }}
          >
            Я власник
          </button>
          <button
            className=" rounded-xl h-12 text-center"
            style={{
              width: "170px",
              background: "rgba(61, 218, 190, 0.50)",
            }}
          >
            Я майстер
          </button>
        </div>
      </div>

          {/* додати хуйню справа зелену */}
      <div className="flex-shrink-0">
        <Image
          src={rabotiaha}
          alt=""
          style={{
            width: "538px",
            height: "775px",
          }}
        ></Image>
      </div>
    </main>
  );
}
