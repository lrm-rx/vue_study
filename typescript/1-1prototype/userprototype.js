function QQUser(QQNo, QQAge, QQMark) {
  this.QQNo = QQNo;
  this.QQAge = QQAge;
  this.QQMark = QQMark;
  // 引用对象类型 = 引用类型 = 对象类型, 函数和数组也是一种引用数据类型
  this.commonfriends = ['letme', 'mlxg', 'xiaohu', 'uzi', 'ming'];
  this.show = function () {
    console.log(`QQ号: ${this.QQNo}, Q年: ${this.QQAge}, QQ标注: ${this.QQMark}`);
    console.log(`共同的好友是:${this.commonfriends}`);
  }
}
// 对象也叫实例
// doinb称为对象变量, 对象是等号右边通过new出来的一个实例, 而且是运行期间才在堆中开辟对象的内存空间
let doinb = new QQUser('doinb', 15, '中单选手')
let baolan = new QQUser('baolan', 18, '辅助选手')
let zz1tai = new QQUser('zz1tai', 19, '虎牙主播')

doinb.show();
baolan.show();
zz1tai.show();