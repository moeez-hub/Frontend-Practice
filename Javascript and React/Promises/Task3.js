// Easy and better trika yahi wala krna ha.

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data" + dataId);
      resolve("success");
    },3000);
  });
}

getData(1).then(() => {
  return getData(2).then(() => {
    return getData(3).then((res) => {
      console.log(res);
    });
  });
});
