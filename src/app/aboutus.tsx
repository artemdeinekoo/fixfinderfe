import Image from "next/image";
import aboutus1 from "@/assets/images/aboutus1.jpg";
import aboutus2 from "@/assets/images/aboutus2.jpg";
import aboutus3 from "@/assets/images/aboutus3.jpg";
import aboutus4 from "@/assets/images/aboutus4.jpg";
import aboutus5 from "@/assets/images/aboutus5.jpg";
import aboutus6 from "@/assets/images/aboutus6.jpg";
import aboutus7 from "@/assets/images/aboutus7.jpg";
import aboutus8 from "@/assets/images/aboutus8.jpg";

export default function Aboutus() {
  return (
    <div className="mt-12">
        <div className="flex text-center justify-center items-center flex-col">
            <h1
            className="text-4xl not-italic font-black uppercase "
            style={{
                color: "#333",
                fontFamily: "Poppins",
                lineHeight: "138%",
            }}
            >
            Як ми{" "}
            <span className="text-teal-400">
                працюємо?
            </span>
            </h1>

            <p
            className="h-1 flex-shrink-0 mt-3 mb-12 rounded-xl"
            style={{
                background: "#3DDABE",
                width: "270px",
            }}
            ></p>
        </div>

        {/* Додати зедені точки */}

        <div className="flex flex-row items-center text-center justify-center">
            <Image className="w20 mb-1 mr-1 ml-1" src={aboutus1} alt="" style={{width:"279px", height:"205"}}></Image>
            <Image className="w20 mb-1 mr-1 ml-1" src={aboutus2} alt="" style={{width:"279px", height:"205"}}></Image>
            <Image className="w20 mb-1 mr-1 ml-1" src={aboutus3} alt="" style={{width:"279px", height:"205"}}></Image>
            <Image className="w20 mb-1 mr-1 ml-1" src={aboutus4} alt="" style={{width:"279px", height:"205"}}></Image>
        </div>
        <div className="flex flex-row items-center text-center justify-center mb-5">
            <Image className="w20 mt-1 mr-1 ml-1" src={aboutus5} alt="" style={{width:"279px", height:"205"}}></Image>
            <Image className="w20 mt-1 mr-1 ml-1" src={aboutus6} alt="" style={{width:"279px", height:"205"}}></Image>
            <Image className="w20 mt-1 mr-1 ml-1" src={aboutus7} alt="" style={{width:"279px", height:"205"}}></Image>
            <Image className="w20 mt-1 mr-1 ml-1" src={aboutus8} alt="" style={{width:"279px", height:"205"}}></Image>
        </div>

        <div className="flex flex-row justify-center align-center h-12 mb-64">
            <h2 className="text-gray-600 text-4xl not-italic font-black uppercase" style={{fontFamily: "Poppins", lineHeight: "138%"}} >
                МИ знаємо ,як
            </h2>

            <p className="h-12 w-1 flex-shrink-0 rounded-xl ml-1 mr-2"
                style={{background: "#3DDABE"}} ></p> 

            <p className="text-teal-400 text-xs not-italic font-bold text-start"
                style={{width:"827px",}} > 
                допомогти вам реалізувати ваші ідеї щодо ремонту та дизайну, створюючи 
                функціональні та естетичні житлові простори, які відповідають вашим потребам та бюджету. 
                Наша команда досвідчених фахівців працює для вас, щоб забезпечити якість та задоволення з кожного проекту
            </p>
        </div>
    </div>
  );
}
