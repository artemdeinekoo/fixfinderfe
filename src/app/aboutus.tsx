import Image from "next/image";
import aboutus1 from "@/assets/images/aboutus1.jpg";
import aboutus2 from "@/assets/images/aboutus2.jpg";
import aboutus3 from "@/assets/images/aboutus3.jpg";
import aboutus4 from "@/assets/images/aboutus4.jpg";
import aboutus5 from "@/assets/images/aboutus5.jpg";
import aboutus6 from "@/assets/images/aboutus6.jpg";
import aboutus7 from "@/assets/images/aboutus7.jpg";
import aboutus8 from "@/assets/images/aboutus8.jpg";
import aboutus9 from "@/assets/images/aboutus9.jpg";

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
            className="h-1 flex-shrink-0 mb-12 rounded-xl bg-teal-400"
            style={{
                width: "270px",
            }}
            ></p>
        </div>

        {/* Додати зелені точки */}

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

        <div className="flex flex-row justify-center align-center h-12 ">
            <h2 className="text-gray-600 text-4xl not-italic font-black uppercase" style={{fontFamily: "Poppins", lineHeight: "138%"}} >
                МИ знаємо як
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
        <div className="text-center">
            <button className="w-40 h-16 flex-shrink-0  bg-teal-400 rounded-xl text-center text-2xl not-italic font-black mt-16 mb-12" 
                style={{
                    boxShadow:"0px 20px 20px -12px rgba(61, 218, 190, 0.40)",
                    fontFamily:"Poppins",
                    color:"#FFF",
                    }}
                >
                Послуги
            </button>
        </div>


                    {/* ДОДАТИ ЗЕЛЕНУ ХУЙНЮ НА ФОН*/}
         
        <div>
            <div className="flex text-center justify-center items-center flex-col">
                <h1 className="text-4xl not-italic font-black uppercase pt-12" style={{color: "#333",fontFamily: "Poppins",lineHeight: "138%",}}>
                Про<span className="text-teal-400"> нас</span>
                </h1>
                <p className="h-1 w-16 flex-shrink-0 mb-10 rounded-xl bg-teal-400"></p>
            </div>
            <div className="flex flex-row flex-shrink-0 justify-between"> 
                <div className="pl-48">
                    <p className="h-48 flex-shrink-0 text-base not-italic font-semibold" 
                    style={{width: "495px", 
                            color: "var(--Gray-1, #333)",
                            fontFamily: "Poppins",
                            lineHeight: "151.5%",
                        }}>
                        Наш проект - це інноваційний веб-сайт, де ви, як клієнт, 
                        зможете легко та швидко знайти майстрів та вибрати послуги, 
                        які вам потрібні, все на одному сайті. Ми знаємо, як спростити процес пошуку та надати 
                        вам доступ до кваліфікованих фахівців для будь-яких потреб у сфері ремонту та дизайну. 
                        Наша мета - зробити ваше життя легшим та допомогти вам знайти найкращі рішення для вашого будинку.
                    </p>

                    <button className="w-50 h-16 flex-shrink-0  bg-teal-400 rounded-xl text-center text-xl not-italic font-black mt-6 pl-2 pr-2" 
                    style={{
                        boxShadow:"0px 20px 20px -12px rgba(61, 218, 190, 0.40)",
                        fontFamily:"Poppins",
                        color:"#FFF",
                        }}
                        >
                        Дізнатись більше
                    </button>
                </div>
                <div className="pr-40">
                    <Image className="pb-12" src={aboutus9} alt="" style={{width:"500px", height:"278"}}></Image>
                </div>
            </div>
             
        </div>
    </div>
  );
}
