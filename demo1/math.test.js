// var result = add(3, 7);
// var expected = 10;

// if (result !== 10) {
//   throw Error(`3+7应该等于${expected},但是现在结果是${result}`);
// }

// var result = minus(3, 2);
// var expected = 1;

// if (result !== 1) {
//   throw Error(`3-2应该等于${expected}，但是结果是${result}`);
// }

function expect(result) {
  return {
    tobe: function (actual) {
      if (result !== actual) {
        throw new Error(
          `预期值和实际值不相等，预期是${result},但是结果是${actual}`
        );
      }
    },
  };
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc}通过测试`);
  } catch (e) {
    console.log(`${desc}没有通过测试,${e}`);
  }
}

test("测试加法 3+7", () => {
  expect(add(3, 7)).tobe(10);
});

test("测试减法 3-2", () => {
  expect(minus(3, 2)).tobe(1);
});

// 测试加法 3+7通过测试
// VM228:18 测试减法 3-2没有通过测试,Error: 预期值和实际值不相等，预期是6,但是结果是1
