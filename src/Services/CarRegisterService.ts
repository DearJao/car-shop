import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarRegisterODM from '../Models/CarRegisterOdm';

class CarRegisterService {
  private createRegisterDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
      console.log(this.createRegisterDomain);
    }
    return null;
  }

  public async register(car: ICar) {
    const registerODM = new CarRegisterODM();
    const newRegister = await registerODM.create(car);
    return this.createRegisterDomain(newRegister);
    console.log(this.createRegisterDomain);
  }
}

export default CarRegisterService;

// 97630609737 and https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW