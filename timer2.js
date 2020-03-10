const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  } else if (key === 'b') {
    // process.stdout.write('\x07') // this does NOT work on Macbook Pro 16, so console log a beep instead
    console.log('beep');
  } else if (numArray.includes(key)) {
    // console.log(key);
    setTimeout(() => {
      console.log('beep');
    }, Number(key) * 1000);
  }
});

console.log('after callback');