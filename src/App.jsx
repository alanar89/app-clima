import { Container, Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Clima from "./components/Clima";
import Footer from "./components/Footer";
const API_WEATHER = `https://api.weatherapi.com/v1/forecast.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

export default function App() {
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState([]);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);
    try {
      if (!ciudad.trim()) throw { message: "El campo ciudad es obligatorio" };
      const res = await fetch(API_WEATHER + ciudad + "&days=4");
      const data = await res.json();
      if (data.error) {
        throw { message: data.error.message };
      }
      setClima(data);
    } catch (error) {
      setError({
        error: true,
        message:
          error.message == "No matching location found."
            ? "Ciudad no encontrada"
            : error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        El tiempo en tu Ciudad
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            mb: 2,
            gap: 2,
          }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmitHandler}
        >
          <TextField
            id="city"
            label="Buscar Ciudad"
            variant="outlined"
            required
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            error={error.error}
            helperText={error.message}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Buscando..."
          >
            Buscar
          </LoadingButton>
        </Box>
      </Box>
      {clima != "" && <Clima clima={clima} />}
      <Footer />
    </Container>
  );
}
