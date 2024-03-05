import FirstScreen from "@/components/FirstScreen/FirstScreen";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/Services/Services";
import Reviews from "@/components/Reviews/Reviews";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function Home() {
  return (
    <div>
      <FirstScreen/>
      <HowWeWork/>
      <AboutUs/>
      <Services/>
      <Reviews/>
      <ContactUs/>
    </div>
  );
}
