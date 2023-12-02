// 单件模式 实现方法二
class DateUtil {
  static dateUtil: DateUtil
  static getInstance() {
    if (!this.dateUtil) {
      this.dateUtil = new DateUtil();
    }
    return this.dateUtil;
  }
  private constructor() { }
  formatDate() { }
  diffDateByDay() { } // 两个日期之间的天数计算
  diffDateByHour() { } // 两个日期之间的小时计算
  timeConversion(restTime: number) { } // 天 时 分 秒
}
const dateUtil1 = DateUtil.getInstance()
const dateUtil2 = DateUtil.getInstance()
console.log(dateUtil1 === dateUtil2);

export default {};