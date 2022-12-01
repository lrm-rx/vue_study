function QQUser(QQNo, QQAge, QQMark) {
  this.QQNo = QQNo;
  this.QQAge = QQAge;
  this.QQMark = QQMark;
  // 引用对象类型 = 引用类型 = 对象类型, 函数和数组也是一种引用数据类型
  // this.commonfriends = ['letme', 'mlxg', 'xiaohu', 'uzi', 'ming'];
  // this.show = function () {
  //   console.log(`QQ号: ${this.QQNo}, Q年: ${this.QQAge}, QQ标注: ${this.QQMark}`);
  //   console.log(`共同的好友是:${this.commonfriends}`);
  // }
}

QQUser.prototype.commonfriends = ['letme', 'mlxg', 'xiaohu', 'uzi', 'ming'];
QQUser.prototype.show = function () {
  console.log(`QQ号: ${this.QQNo}, Q年: ${this.QQAge}, QQ标注: ${this.QQMark}`);
  console.log(`共同的好友是:${this.commonfriends}`);
}

let doinb = new QQUser('doinb', 15, '中单选手')
doinb.show();
console.log('QQUser.prototype:', QQUser.prototype);