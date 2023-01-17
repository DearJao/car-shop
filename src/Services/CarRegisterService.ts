import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarRegisterODM from '../Models/CarODM';

class CarRegisterService {
  private createRegisterDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar) {
    const registerODM = new CarRegisterODM();
    const newRegister = await registerODM.create(car);
    return this.createRegisterDomain(newRegister);
  }
}

export default CarRegisterService;
