import { Button } from "@mui/material";
import "./contentpage.css";
import { Skslider } from "../components/skills-slider/skslider";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export const Contentpage = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `CV_WalterGuevara.pdf`;
    link.href = "/CV_WalterGuevara.pdf";
    link.click();
  };

  return (
    <div className="pcontenido">
      <h3 className="sectiontitles">SOBRE MI</h3>
      <hr className="divisores"></hr>
      <div className="textos">
        <p style={{ hyphens: "auto" }}>
          FullStack developer y estudiante de Ciencias de la Computación en
          busca de nuevos desafíos y experiencias laborales. Trato siempre de
          enfocarme y esforzarme en buscar soluciones creativas y eficientes
          cuando se presentan problemas de difícil resolución, enfrentando cada
          desafío con determinación y una mente abierta con el objetivo de
          mejorar y adquirir nuevos conocimientos.
        </p>
      </div>
      <Button variant="contained" onClick={onDownload}>
        Mi CV
      </Button>
      <div id="sectionhabilidades" />
      <div className="sections">
        <h3 className="sectiontitles">HABILIDADES</h3>
        <hr className="divisores"></hr>
        <div id="slidertext">
          <Skslider />
        </div>
      </div>
      <div id="sectioneducacion" />
      <div className="sections">
        <h3 className="sectiontitles">EDUCACION</h3>
        <hr className="divisores"></hr>
        <div className="textos">
          <h2 className="educationtitle">Universidad Nacional de Sanjuan</h2>
          <p style={{ hyphens: "auto" }}>
            {
              "Estudiante de la Carrera Licenciatura en Ciencias de la Computación, de la Facultad de Ciencias Exactas Físicas y Naturales (FCEFyN) de la Universidad Nacional de San Juan (UNSJ). 3º Tercer Año en Curso."
            }
          </p>
        </div>
      </div>
      <div id="sectionexp" />
      <div className="sections">
        <h3 className="sectiontitles">EXPERIENCIA</h3>
        <hr className="divisores"></hr>
        <div id="middleblock">
          <div id="leftblock">
            <h3 className="edtitles">Fullstack Developer</h3>
            <p>
              {
                "6 Meses de Desarrollo de proyecto para Carmar Trabajando como fullstack developer, utilizando React y Java, Springboot, hibernate y hql."
              }
            </p>
          </div>
          <div id="blockdivisor">
            <div className="balldiv"></div>
          </div>
          <div id="rightblock">
            <h3 className="edtitles" style={{ margin: "5px" }}>
              Front-end Developer
            </h3>
            <h5 style={{ margin: "5px" }}>Agosto 2023 - Actualidad</h5>
            {
              "Desarrollo de proyectos Para Destored Trabajando como Front-end developer, utilizando React, y librerias como talwind, MUI Material, React Query, y otras tecnologias como Insomnia, Git y Github"
            }
          </div>
        </div>
      </div>
      <div className="contactsection">
        <h3 className="sectiontitles">CONTACTO</h3>
        <hr className="divisores"></hr>
        <div className="textos" id="contactamee">
          {"Contactame!"}
        </div>
        <div className="contactcard">
          <div className="contactline">
            <HomeRoundedIcon
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: "white",
                opacity: 0.7,
                borderRadius: "2vw",
                borderStyle: "solid",
                borderWidth: "0.5vw",
                height: "2vw",
                width: "2vw",
              }}
            />
            <h4 style={{ marginLeft: "1.5vw" }} className="textos">
              Argentina Sanjuan
            </h4>
          </div>
          <div className="contactline">
            <LocalPhoneIcon
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: "white",
                opacity: 0.7,
                borderRadius: "2vw",
                borderStyle: "solid",
                borderWidth: "0.5vw",
                height: "2vw",
                width: "2vw",
              }}
            />
            <h4 style={{ marginLeft: "1.5vw" }} className="textos">
              <a className="textos" href="https://wa.link/yj88z5">
                {"+54 (264) 486 0479"}
              </a>
            </h4>
          </div>
          <div className="contactline">
            <EmailIcon
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: "white",
                opacity: 0.7,
                borderRadius: "2vw",
                borderStyle: "solid",
                borderWidth: "0.5vw",
                height: "2vw",
                width: "2vw",
              }}
            />
            <h4 style={{ marginLeft: "1.5vw" }} className="textos">
              <a
                className="textos"
                href="https://mail.google.com/mail/u/0/?fs=1&to=martinguevara109@gmail.com&su=Desarrollo%20Web&body=Escriba%20su%20mensaje%20aqu%C3%AD&tf=cm"
              >
                {"martinguevara109@gmail.com"}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
