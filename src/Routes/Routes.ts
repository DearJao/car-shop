import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getCars(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getCarsById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCarsById(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default routes;