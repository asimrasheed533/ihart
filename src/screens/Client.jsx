import Bannermain from "../components/Bannermain";
import cl1 from "../assets/cl1.png";
import cl10 from "../assets/cl10.png";
import cl11 from "../assets/cl11.png";
import cl12 from "../assets/cl12.png";
import cl13 from "../assets/cl13.png";
import cl14 from "../assets/cl14.png";
import cl15 from "../assets/cl15.png";
import cl2 from "../assets/cl2.png";
import cl3 from "../assets/cl3.png";
import cl4 from "../assets/cl4.png";
import cl5 from "../assets/cl5.png";
import cl6 from "../assets/cl6.png";
import cl7 from "../assets/cl7.png";
import cl8 from "../assets/cl8.png";
import cl9 from "../assets/cl9.png";
import client from "../assets/client.png";
import { Head } from "../../modules";
import Fade from "react-reveal/Fade";

export default function Client() {
  return (
    <>
      <Head title="Client | I-HART" />
      <Bannermain
        banner={client}
        heading="Our Clients"
        subheading="Providing Innovative Healthcare Solutions for Safer, Better Care of all Patients."
      />
      <div className="client__content__wraper">
        <Fade bottom>
          <div className="client__content__wraper__heading">Our Clients</div>
        </Fade>
        <Fade bottom>
          <div className="client__content__wraper__sub__heading">
            We have provided consultative services, shared solutions or
            developed programs for various organizations across the globe. A few
            organizations who we have provided consultations, advised or worked
            with, are listed below.
          </div>
        </Fade>
      </div>
      <div className="client__img__container">
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl1} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl2} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl3} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl4} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl5} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl6} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl7} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl8} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl9} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl10} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl11} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl12} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl13} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl14} alt="clients" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="client__img__container__img">
            <img src={cl15} alt="clients" />
          </div>
        </Fade>
      </div>
    </>
  );
}
