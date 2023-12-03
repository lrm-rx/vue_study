// dataFlowAnalysisWithNever 方法穷尽了 DataFlow 的所有可能类型
// 使用 never 避免出现未来扩展新的类没有对应类型的实现,目的就是写出顾炎武绝对安全的代码.
type DataFlow = string | number | boolean;
function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
  if (typeof dataFlow === "string") {
    console.log("字符串类型:", dataFlow.length);
  } else if (typeof dataFlow === "number") {
    console.log("数值类型:", dataFlow.toFixed(2));
  } else {
    let data = dataFlow;
  }
}

dataFlowAnalysisWithNever("WBG");
dataFlowAnalysisWithNever(3.1415)