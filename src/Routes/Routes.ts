import { Router } from 'express';
import CarRegisterController from '../Controllers/CarRegisterController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarRegisterController(req, res, next).create(),
);

export default routes;