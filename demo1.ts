// 同期処理
function heavyTaskSync() {
  console.log("同期タスク開始");
  for (let i = 0; i < 1e9; i++) {
    // 重い処理の模擬
  }
  console.log("同期タスク終了");
}

// 非同期処理
function heavyTaskAsync() {
  console.log("非同期タスク開始");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("非同期タスク終了");
      resolve(undefined);
    }, 3000); // 3秒の遅延を模擬
  });
}

console.log("開始");
heavyTaskSync();
// heavyTaskAsync();
console.log("終了");
