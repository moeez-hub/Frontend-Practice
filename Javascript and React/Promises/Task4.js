// Sab sa easy trika Promises ka Asyn await

function weatherData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", id);
      resolve(200);
    }, 3000);
  });
}

async function result() {
  await weatherData(1);
  await weatherData(2);
  await weatherData(3);
  await weatherData(4);
  await weatherData(5);
  await weatherData(6);
}
 result();