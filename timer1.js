// process.stdout.write('\x07'); ==> THIS DOES NOT WORK ON MACBOOK PRO 16, 'beep' will be logged to the console instead"

const beepArray = process.argv.slice(2);

for (let num of beepArray) {

  if (Number(num) > 0) {
    const beepDelay = (Number(num) * 1000);
    setTimeout(() => {
      console.log('beep')
    }, beepDelay);
  }
};