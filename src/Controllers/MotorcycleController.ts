/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import ErrorMap from '../Utils/ErrorMap';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const register: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newRegister = await this.service.register(register);
      return this.res.status(201).json(newRegister);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotorcycles() {
    try {
      const result = await this.service.getMotorcycle();
      return this.res.status(200).json(result);
    } catch (error) {
      return this.next(error);
    }
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;

    if (id.length !== 24) {
      return this.res.status(ErrorMap.INVALID_FORMAT).json({ message: 'Invalid mongo id' });
    }

    try {
      const motorcycle = await this.service.getMotorcycleById(id);
      if (!motorcycle) {
        return this.res.status(ErrorMap.NOT_FOUND).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;