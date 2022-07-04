async function onMyBirthday(isKayoSick) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(12);
      } else {
        reject(Error("Buồn quá ốm thật rồi!!!"));
      }
    });
  });
}

//làm theo Async/Await
async function smile() {
  try {
    let result = await onMyBirthday(false);
    console.log(`Tôi có ${result} cái bánh`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Party đê ốm gì mà ốm!!!");
  }
}
smile();

async function cry() {
  try {
    let result = await onMyBirthday(true);
    console.log(`Tôi có ${result} cái bánh`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Party cái gì nữa ốm thật rồi!!!");
  }
}
cry();


//làm theo .then .catch .finally
onMyBirthday(false)
  .then((resolve) => console.log(`Tôi có ${resolve} cái bánh`))
  .catch((reject) => console.log(reject))
  .finally("Party đê ốm gì mà ốm!!!");

onMyBirthday(true)
  .then((resolve) => console.log(`Tôi có ${resolve} cái bánh`))
  .catch((reject) => console.log(reject))
  .finally("Party cái gì nữa ốm thật rồi!!!");
