import { Response, Request, NextFunction } from 'express';
import GetCarsService from '../Services/GetCarsService';
import ErrorMap from '../Utils/ErrorMap';

class GetCarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: GetCarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res;
    this.req = req;
    this.next = next;
    this.service = new GetCarsService();
  }

  public async getCars() {
    const carList = await this.service.getCars();
    return this.res.status(200).json(carList);
    // console.log(this.getCars);
  }

  public async getCarsById() {
    const { id } = this.req.params;

    if (id.length === 24) {
      return this.res.status(ErrorMap.NOT_FOUND).json({ message: 'Car not found' });
    }

    const car = await this.service.getCarsById(id);
    if (!car) {
      return this.res.status(ErrorMap.INVALID_FORMAT).json({ message: 'Invalid mongo id' });
    }
    return this.res.status(200).json(car);
  }
}
export default GetCarsController;