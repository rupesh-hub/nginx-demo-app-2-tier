import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Credentials",
  ],
};

app.use(cors(corsOptions));

dotenv.config();
const PORT = process.env.PORT || 3001;

app.get("/blogs", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        title: "CI/CD Pipeline",
        content:
          "Learn how Continuous Integration and Deployment streamline software delivery.",
      },
      {
        id: 2,
        title: "Cloud & Automation",
        content: "Discover how cloud platforms enhance DevOps automation.",
      },
      {
        id: 3,
        title: "Infrastructure as Code",
        content:
          "Explore tools like Terraform and Ansible for managing infrastructure.",
      },
    ],
  });
});

app.get("/status", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
