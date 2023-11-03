import { Box, Typography, Paper } from "@mui/material";
const ClimaExtendido = ({ clima }) => {
  return clima.forecastday.map((item) => (
    <Paper
      elevation={4}
      key={item.date}
      sx={{
        //border: 2,
        //borderRadius: "16px",
        // bg: "primary.main",

        width: 250,
        height: 300,
        textAlign: "center",
        mb: 4,
        m: 1,
      }}
    >
      <Box>
        <Typography variant="h5" component="h4" mb={3} mt={2}>
          {new Date(item.date).toLocaleDateString("es-AR", {
            day: "numeric",
            weekday: "long",
            month: "long",
            timeZone: "UTC",
          })}
        </Typography>
        <Box
          component="img"
          alt={item.day.condition.text}
          src={item.day.condition.icon}
          sx={{ margin: "0 auto" }}
        />
        <Typography variant="h5" component="h3" mt={3} mb={2}>
          {item.day.mintemp_c} - {item.day.maxtemp_c} °C
        </Typography>
        <Typography variant="h6" component="h4" mt={2}>
          {item.day.condition.text}
        </Typography>
      </Box>
    </Paper>
  ));
};
export default ClimaExtendido;
