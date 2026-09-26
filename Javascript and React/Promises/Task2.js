function assyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 1 done");
    }, 5000);
  });
}

function assyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 2 done");
    }, 5000);
  });
}

console.log("Fetching data 1");

let promie1 = assyncFunc1();
promie1.then((res) => {
  console.log(res);

  console.log("Fetching data 2");

  let promise2 = assyncFunc2();

  promise2.then((res) => {
    console.log(res);
  });
});
