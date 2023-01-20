/* eslint-disable no-console */
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private Motorcycle(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async register(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const registerODM = new MotorcycleODM();
    const newRegister = await registerODM.create(motorcycle);
    return this.Motorcycle(newRegister);
  }

  public async getMotorcycle(): Promise<(Motorcycle | null)[]> {
    const findMotorcycleODM = new MotorcycleODM();
    const list = await findMotorcycleODM.find();
    return list.map((motorcycle) => (
      this.Motorcycle(motorcycle)
    ));
  }

  public async getMotorcycleById(id: string) {
    const findMotorcycleODM = new MotorcycleODM();
    const result = await findMotorcycleODM.findById(id);
    return this.Motorcycle(result);
  }
}

export default MotorcycleService;
