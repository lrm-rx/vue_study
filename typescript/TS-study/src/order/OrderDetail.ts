export default class OrderDetail{
  public orderDatailId: number | undefined; // TS4之前
  public producctname!: string;
  public price!: number;
  public count!: number;
  constructor(orderDatailId_:number,producctname_:string,price_: number,count_: number){
    // this.orderDatailId = orderDatailId_;
    // this.producctname = producctname_;
    // this.price = price_;
    // this.count = count_;
  }
}