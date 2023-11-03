import { Box, Typography } from "@mui/material";
import ClimaExtendido from "./ClimaExtendido";
import { FaWind, FaEye, FaWater, FaThermometerHalf } from "react-icons/fa";
export default function Clima({ clima }) {
  const viento = {
    N: "Norte",
    S: "Sur",
    E: "Este",
    O: "Oeste",
    NE: "Noreste",
    SE: "Sureste",
    SW: "Suroeste",
    NW: "Noroeste",
    NNE: "Nornoreste",
    ENE: "Estenoreste",
    ESE: "Estesureste",
    SSE: "Sursureste",
    SSW: "Sursuroeste",
    WSW: "Oestesuroeste",
    WNW: "Oestenoroeste",
    NNW: "Nornoroeste",
  };
  const direccion = Object.entries(viento);
  return (
    <>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          display: "grid",
          gap: 2,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h2">
          {clima.location.name}, {clima.location.country}
        </Typography>
        <Box
          component="img"
          alt={clima.current.condition.text}
          src={clima.current.condition.icon}
          sx={{ margin: "0 auto" }}
        />
        <Typography variant="h4" component="h3">
          {clima.current.temp_c} °C
        </Typography>
        <Typography variant="h6" component="h4">
          {clima.current.condition.text}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          display: "grid",
          gap: 1,
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <Typography>
          {" "}
          <FaThermometerHalf />
          Sensación Térmica: {clima.current.feelslike_c} °C
        </Typography>
        <Typography>
          {" "}
          <FaWater /> Humedad: {clima.current.humidity} %
        </Typography>
        <Typography>
          <FaWind /> Viento:{" "}
          {direccion.map(([key, value]) => {
            if (key === clima.current.wind_dir) {
              return value;
            }
          })}{" "}
          a {clima.current.wind_kph} Km/h
        </Typography>{" "}
        <Typography>
          {" "}
          <FaEye /> Visibilidad: {clima.current.vis_km} Km
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: 4,
          justifyContent: "center",
        }}
      >
        {" "}
        <ClimaExtendido clima={clima.forecast} />
      </Box>
    </>
  );
}
