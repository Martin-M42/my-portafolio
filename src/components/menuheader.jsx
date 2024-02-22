import { CSSTransition } from "react-transition-group";
import "./menuheader.css";
import { Drawer, IconButton } from "@mui/material";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useState } from "react";

export const Menuheader = () => {
  const [dopen, setDopen] = useState(false);

  const handleClick = () => {
    if (dopen) {
      setDopen(false);
    } else {
      setDopen(true);
    }
  };

  const handleOnclose = () => {
    setDopen(false);
  };

  return (
    <CSSTransition in={true} appear={true} timeout={2000} classNames="mhappear">
      <div className="principalheader">
        <IconButton style={{ color: "white" }} onClick={handleClick}>
          <ClearAllIcon />
        </IconButton>
        <Drawer
          anchor="top"
          PaperProps={{
            sx: {
              maxWidth: "min-content",
              maxHeight: "min-content",
              borderRadius: "1px 30px 30px",
              boxShadow: "10px 10px 5px gray",
            },
          }}
          open={dopen}
          onClose={handleOnclose}
        >
          <div className="burgermenux">
            <h3 style={{ margin: "0px", marginTop: "1vw", color: "white" }}>
              MENU
            </h3>
            <hr id="burguerdivisor"></hr>
            <a href="#pssection" className="referencias">
              Inicio
            </a>
            <hr className="burguerdivisores"></hr>
            <a href="#fsdeveloper" className="referencias">
              Sobre mi
            </a>
            <hr className="burguerdivisores"></hr>
            <a href="#sectionhabilidades" className="referencias">
              Habilidades
            </a>
            <hr className="burguerdivisores"></hr>
            <a href="#sectioneducacion" className="referencias">
              Educacion
            </a>
            <hr className="burguerdivisores"></hr>
            <a href="#sectionexp" className="referencias">
              Experiencia
            </a>
            <hr className="burguerdivisores"></hr>
            <a href="#contactamee" className="referencias">
              Contacto
            </a>
          </div>
        </Drawer>
      </div>
    </CSSTransition>
  );
};
