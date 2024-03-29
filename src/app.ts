import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './Routes/Routes';
import swaggerDocs from './swagger.json';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

export default app;