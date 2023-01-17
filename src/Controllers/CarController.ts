/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import ErrorMap from '../Utils/ErrorMap';

class CarRegisterController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const register: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newRegister = await this.service.register(register);
      return this.res.status(201).json(newRegister);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCars() {
    try {
      const carList = await this.service.getCars();
      return this.res.status(200).json(carList);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarsById() {
    const { id } = this.req.params;

    if (id.length !== 24) {
      return this.res.status(ErrorMap.INVALID_FORMAT).json({ message: 'Invalid mongo id' });
    }

    try {
      const car = await this.service.getCarsById(id);
      if (!car) {
        return this.res.status(ErrorMap.NOT_FOUND).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarsById() {
    const { id } = this.req.params;

    const changes: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    if (id.length !== 24) {
      return this.res.status(ErrorMap.INVALID_FORMAT).json({ message: 'Invalid mongo id' });
    }

    try {
      const car = await this.service.updateCarsById(id, changes);
      if (!car) {
        return this.res.status(ErrorMap.NOT_FOUND).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarRegisterController;