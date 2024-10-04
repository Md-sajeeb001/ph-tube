// function getTimeString(time){
//     const hour = parseInt(time / 3600);
//     let second = parseInt(time % 3600);
//     const min = parseInt(second / 60);
//     second = second % 60;
//     return `${hour} hr ${min} minute ${second} second ago`
// }

// console.log(getTimeString(4000))

// function getTime(time){
//     const hour = parseInt(time / 3600);
//     let second = time % 3600;
//     const min = parseInt(second / 60);
//     second = second % 60;
//     return `${hour} hr ${min} min ${second} second ago`
// }

// console.log(getTime(7865));

function getTimeFunction(time) {
  const day = parseInt(time / 86400);
  const hour = parseInt(time / 3600);
  let second = time % 3600;
  const min = parseInt(second / 60);
  second = second % 60;
  return `${day} day ${hour} hour ${min} min ${second} ago`;
}

// console.log(getTimeFunction(400000));

function getTime(time) {
  const day = parseInt(time / 86400);
  const remainingSecond = time % 86400;
  const hour = parseInt(remainingSecond / 3600);
  let second = time % 3600;
  const min = parseInt(second / 60); 
  second = second % 60;
  return `${day} day ${hour} hour ${min} min ${second} second ago`;
}

console.log(gettime(3043400));
