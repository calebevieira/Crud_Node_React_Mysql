import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());

// Configuração para permitir solicitações CORS do frontend
app.use(
  cors({
    origin: "https://frontend-virid-three-17.vercel.app",
  })
);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando corretamente!");
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
