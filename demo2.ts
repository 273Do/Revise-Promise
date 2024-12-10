// 基本構文
const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    // 成功
    resolve("処理が成功しました");
    // 失敗
    reject();
  });
};

asyncFunction()
  .then((msg) => {
    console.log(msg); // "処理が成功しました" が表示される
  })
  .catch((error) => {
    console.error("エラー:", error); // エラーが表示される
  });
