import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('test all functions of service layer', function () {
  it('verify if is possible create a new car register', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car({ ...carInput, id: '1' });
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.register(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('verify if is possible to list all Cars', async function () {
    const carInput: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        status: false,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(carInput);

    const service = new CarService();
    const result = await service.getCars();

    expect(result).to.be.deep.equal(carInput);
  });

  it('verify if is possible to list a car using an id', async function () {
    const carInput: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findOne').resolves(carInput);

    const service = new CarService();
    const result = await service.getCarsById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(carInput);
  });

  afterEach(function () {
    sinon.restore();
  });
});