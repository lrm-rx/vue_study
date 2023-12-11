class Pay {
  constructor(bank_card_no: string, balance: number, cost: number, tokenid: string) {

  }
  // 支付父类
  bank_card_no: string // 捆绑银行卡号
  balance: number // 银行卡余额
  cost: number // 消费费用
  tokenid: string // 登录后用户访问令牌
  pay() { }
}
enum PayType {
  WebChat = 1,
  AliPay = 2,
  CloudFlashPayment = 3
}

// 银行卡支付
class ATMPay extends Pay {
  bak_network: string // 银行网点
  bankno_type // 银行卡类型
  bank_card_psw // 银行卡密码
  custname
}

class MobilePay extends Pay {
  constructor(bank_card_no: string, balance: number, cost: number, tokenid: string, type: PayType, change: number, openid: string, appid: string) {
    super(bank_card_no, balance, cost, tokenid);
    this.type = type;
    this.change = change;
    this.opendid = openid;
    this.appid = appid;
  }
  type: PayType
  change: number // 支付平台零钱
  opendid: string // 用户识别身份id
  appid: string // 小程序 appid
  pay() {
    super.pay();
    console.log("完成支付!");
  }
}

let webChatPay = new MobilePay("123", 300, 200, "12fsdafgw", PayType.WebChat, 10, "123fsdafggwefgw", "932fagwe")

export { }