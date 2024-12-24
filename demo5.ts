const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("データ取得完了"), 2000); // "2秒待機"
  });
};

(async () => {
  const result = await asyncFunc();
  console.log(result);
})();

// or

// const test = async () => {
//   const result = await asyncFunc();
//   console.log(result);
// };
// test();

console.log("データ取得開始");
