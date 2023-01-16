import { Router } from 'express';
import CarRegisterController from '../Controllers/CarRegisterController';
import GetCarsController from '../Controllers/GetCarsController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarRegisterController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new GetCarsController(req, res, next).getCars(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new GetCarsController(req, res, next).getCarsById(),
);

export default routes;