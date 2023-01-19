/* eslint-disable no-console */
import MotorcycleDomain from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private Motorcycle(motorcycle: IMotorcycle | null): MotorcycleDomain | null {
    if (motorcycle) {
      return new MotorcycleDomain(motorcycle);
    }
    return null;
  }

  public async register(motorcycle: IMotorcycle): Promise<MotorcycleDomain | null> {
    const registerODM = new MotorcycleODM();
    const newRegister = await registerODM.create(motorcycle);
    return this.Motorcycle(newRegister);
  }
}

export default MotorcycleService;
