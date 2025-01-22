// class Counter {
//   count = 0;

//   increment() {
//     //this.count++; // 動く
//     // 通常の関数は`this`が不明確
//     function update() {
//       this.count++; // エラーになる
//     }

//     const update2 = () => {
//       this.count++;
//     };
//     update2();
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// counter.increment();

// const obj = {
//   id: 1,
//   fullName: function () {
//     console.log(this.id);
//   },
//   fullName2: () => {
//     console.log(this.id);
//   },
// };

// obj.fullName2();

class Test {
  id = 20;
  obj2 = {
    id: 42,
    regularFunction: function () {
      console.log(this.id); // this は obj を参照 → 42
    },
    arrowFunction: () => {
      console.log(this.id); // this は親スコープを参照 → undefined (グローバルスコープに id がない場合)
    },
  };
}

const test1 = new Test();
test1.obj2.regularFunction();
test1.obj2.arrowFunction();
