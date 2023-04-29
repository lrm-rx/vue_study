// 将字符串转化为以k为单位显示
export function hotNumber(value) {
  const num = parseInt(value);
  if (num < 1000) {
    return value;
  }
  value = value + "";
  return value.substring(0, value.length - 3) + "k";
}
