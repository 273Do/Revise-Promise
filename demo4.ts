// demo4.ts

const somePromise = (num: number): Promise<string> =>
  new Promise((resolve, reject) => {
    console.log(`入力：${num}`);
    if (num >= 10) {
      resolve("10以上です．順：");
    } else {
      reject("10より小さいです．順：");
    }
  });

const processWithAwait = async (num: number) => {
  let val: string = ""; // 結果を格納する変数

  try {
    // somePromise を実行し、成功した場合に値を取得
    val = await somePromise(num);

    // 処理 A
    val += "A->";
    // 処理 B
    val += "B->";
    // 処理 D
    val += "D";
  } catch (err: any) {
    // エラー処理 C
    val = err + "C->";
    // 処理 D
    val += "D";
  } finally {
    console.log(val);
    console.log("結果");
  }
};

processWithAwait(12);
