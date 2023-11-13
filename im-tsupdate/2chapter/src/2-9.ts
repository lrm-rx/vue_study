// 数字枚举
enum Week {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(Week.Monday);
console.log(Week["Monday"]);
console.log(Week[1]);
console.log(Week[5]);

export { }