// 单件模式 实现方法一
class DateUtil {
  static dateUtil = new DateUtil()
  private constructor() { }
  formatDate() { }
  diffDateByDay() { } // 两个日期之间的天数计算
  diffDateByHour() { } // 两个日期之间的小时计算
  timeConversion(restTime: number) { } // 天 时 分 秒
}

const dateUtil1 = DateUtil.dateUtil
const dateUtil2 = DateUtil.dateUtil
console.log(dateUtil1 === dateUtil2);

export default DateUtil.dateUtil;