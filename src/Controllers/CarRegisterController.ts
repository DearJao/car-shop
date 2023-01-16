import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarRegisterService from '../Services/CarRegisterService';

class CarRegisterController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarRegisterService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarRegisterService();
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
}

export default CarRegisterController;