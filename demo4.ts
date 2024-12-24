// demo4.ts

const somePromise = async (num: number): Promise<string> => {
  console.log(`入力：${num}`);
  if (num >= 10) {
    return "10以上です．順：";
  } else {
    throw "10より小さいです．順：";
  }
};

const processWithAwait = async (num: number) => {
  let val: string; // 結果を格納する変数

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
    console.log("結果");
    console.log(val);
  }
};

processWithAwait(2);
