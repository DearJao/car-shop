import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.status = car.status;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(id: string) {
    this.id = id;
  }

  public getModel() {
    return this.id;
  }

  public setYear(id: string) {
    this.id = id;
  }

  public getYear() {
    return this.id;
  }

  public setColor(id: string) {
    this.id = id;
  }

  public getColor() {
    return this.id;
  }

  public setBuyValue(id: string) {
    this.id = id;
  }

  public getBuyValue() {
    return this.id;
  }

  public setStatus(id: string) {
    this.id = id;
  }

  public getStatus() {
    return this.id;
  }

  public setDoorsQty(id: string) {
    this.id = id;
  }

  public getDoorsQty() {
    return this.id;
  }

  public setSeatQty(id: string) {
    this.id = id;
  }

  public getSeatQty() {
    return this.id;
  }
}

export default Car;