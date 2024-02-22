import logo from "../../logo.svg";
import { IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./skslider.css";
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Boxdots } from "./box-dots/box-dots";

const Lenguajes = () => {
  return (
    <div className="slideritems" id="lenguajesitems">
      <h2 className="skilltitle">LENGUAJES</h2>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/cicon.png" alt="c" />
        <h4 className="skilldata">C</h4>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/pyicon.png" alt="python" />
        <h4 className="skilldata">PYTHON</h4>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/javaicon.png" alt="java" />
        <h4 className="skilldata">JAVA</h4>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/jvscript.png" alt="jvscript" />
        <h4 className="skilldata">JAVASCRIPT</h4>
      </div>
    </div>
  );
};

const Frontend = () => {
  return (
    <div className="slideritems" id="frontenditems">
      <h1 className="skilltitle">FRONT-END</h1>
      <div id="reacttech">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="skilltitle" id="reacttech">
          REACT JS
        </h2>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/figma.png" alt="java" />
        <h4 className="skilldata">Diseño con Figma</h4>
      </div>
    </div>
  );
};

const Backend = () => {
  return (
    <div className="slideritems" id="backenditems">
      <h2 className="skilltitle">BACK-END</h2>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/javaicon.png" alt="java" />
        <h4 className="skilldata">JAVA:</h4>
      </div>
      <div className="languagecontainer">
        <h5 className="langsubitem">Springboot</h5>
      </div>
      <div className="languagecontainer">
        <h5 className="langsubitem">Hibernate</h5>
      </div>
      <div className="languagecontainer">
        <h5 className="langsubitem">Hql</h5>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/pyicon.png" alt="python" />
        <h4 className="skilldata">PYTHON:</h4>
      </div>
      <div className="languagecontainer">
        <h5 className="langsubitem">Flask</h5>
      </div>
      <div className="languagecontainer">
        <h5 className="langsubitem">Sql Alchemy</h5>
      </div>
    </div>
  );
};

const Herramientas = () => {
  return (
    <div className="slideritems" id="herramientasitems">
      <h2 className="skilltitle">HERRAMIENTAS</h2>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/giticon.png" alt="git" />
        <h4 className="skilldata">GIT</h4>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/githubicon.png" alt="github" />
        <h4 className="skilldata">GITHUB</h4>
      </div>
      <div className="languagecontainer">
        <img className="langicon" src="/iconos/insomico.png" alt="insomnia" />
        <h4 className="skilldata">INSOMNIA</h4>
      </div>
    </div>
  );
};

export const Skslider = () => {
  const [indexdl, setIndexdl] = useState(0);
  const [slider, setSlider] = useState("slider-right");

  const handleRightclick = () => {
    if (indexdl < 3) {
      setIndexdl(indexdl + 1);
      setSlider("slider-right");
    } else {
      setIndexdl(0);
      setSlider("slider-right");
    }
  };

  const handleLeftclick = () => {
    if (indexdl > 0) {
      setIndexdl(indexdl - 1);
      setSlider("slider-left");
    } else {
      setIndexdl(3);
      setSlider("slider-left");
    }
  };

  const childFactory = (slider) => (child) =>
    React.cloneElement(child, { classNames: slider });

  return (
    <div>
      <div id="skcontainer">
        <IconButton
          onClick={handleLeftclick}
          className="skbutton"
          sx={{
            backgroundColor: "dodgerblue",
            ":hover": {
              backgroundColor: "azure",
              transitionDuration: "500ms",
            },
          }}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
        <div className="skbox">
          <div className="sliderwrapper">
            <TransitionGroup childFactory={childFactory(slider)}>
              <CSSTransition key={indexdl} timeout={1000} classNames={slider}>
                {indexdl === 0 ? (
                  <Lenguajes />
                ) : indexdl === 1 ? (
                  <Frontend />
                ) : indexdl === 2 ? (
                  <Backend />
                ) : (
                  <Herramientas />
                )}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <IconButton
          onClick={handleRightclick}
          className="skbutton"
          sx={{
            backgroundColor: "dodgerblue",
            ":hover": { backgroundColor: "azure", transitionDuration: "500ms" },
          }}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </div>
      <Boxdots actual={indexdl} size={4} />
    </div>
  );
};
