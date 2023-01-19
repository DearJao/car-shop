/* eslint-disable no-console */
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createRegisterDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar) {
    const registerODM = new CarODM();
    const newRegister = await registerODM.create(car);
    return this.createRegisterDomain(newRegister);
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

  public async updateCarsById(id: string, changes: ICar): Promise<Car | null> {
    const updateCarODM = new CarODM();

    const findCar = await updateCarODM.findById(id);
    if (!findCar) {
      return null;
    }

    const result = await updateCarODM.update(id, changes);
    return this.createRegisterDomain(result);
  }
}

export default CarService;
