import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

const Blackdot = () => {
  return <FiberManualRecordIcon />;
};

const Whitedot = () => {
  return <FiberManualRecordOutlinedIcon />;
};

export const Boxdots = ({ size, actual }) => {
  let i = 0;
  let lista = [];
  for (i = 0; i < size; i++) {
    lista.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {lista.map((objeto, key) =>
        objeto === actual ? <Blackdot key={key} /> : <Whitedot key={key} />
      )}
    </div>
  );
};
