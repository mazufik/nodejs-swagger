import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Mazufik Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['./routes/*.js']
  apis: ["src/main.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// routes
/**
 * @swagger
 * /customers:
 *  get:
 *     tags: [customer]
 *     description: Use to request all customers
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get("/customers", (req, res, next) => {
  try {
    res.status(200).send("Customer results");
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * /customer:
 *  put:
 *     tags: [customer]
 *     description: Use to update customer
 *     responses:
 *       '201':
 *         description: A successful response
 */
app.put("/customer", (req, res, next) => {
  try {
    res.status(201).send("Successfuly update customer");
  } catch (e) {
    next(e);
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
