import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class GetCarsService {
  private createRegisterDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async getCars(): Promise<(Car | null)[]> {
    const findCarODM = new CarODM();
    const cars = await findCarODM.find();
    return cars.map((car) => (
      this.createRegisterDomain(car)
    ));
  }

  public async getCarsById(id: string) {
    const findCarODM = new CarODM();
    const result = await findCarODM.findById(id);
    return this.createRegisterDomain(result);
  }
}

export default GetCarsService;