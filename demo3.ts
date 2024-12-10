// demo3.ts

const somePromise = (num: number): Promise<string> =>
  new Promise((resolve, reject) => {
    console.log(`入力：${num}`);
    if (num >= 10) {
      resolve("10以上です．順：");
    } else {
      reject("10より小さいです．順：");
    }
  })
    .then((val) => {
      // 処理 A
      const item_a = val + "A->";
      return item_a;
    })
    .then((val) => {
      // 処理 B
      const item_b = val + "B->";
      return item_b;
    })
    .catch((err) => {
      // エラー処理 C
      const item_c = err + "C->";
      return item_c;
    })
    .then((val) => {
      // 処理 D
      const item_d = val + "D";
      return item_d;
    })
    .finally(() => {
      // 終了処理 E
      console.log("結果");
    });

const item: number = 15;
somePromise(item).then((val: string) => {
  console.log(val);
});
