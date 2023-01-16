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

// 97630609737 and https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW
// [Car-Shop][Req 2][Sala 10] - Problemas com a tipagem e portas do container