import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import Experience from "./Experience";
import FAQ from "./FAQ";
import Nav from "./Nav";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
   return (
      <div>
         <Nav/>
         <Banner/>
         <Services/>
         <Experience/>
         <Contact/>
         <Appointment/>
         <Team/>
         <FAQ/>
      </div>
   );
};

export default Home;