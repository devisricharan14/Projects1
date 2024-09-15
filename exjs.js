function sevenBoom(arr) {
	if (String(arr).includes('7')){
    return "Boom!"
  } else {
    return "there is no 7 in the array"
  }
}
console.log(sevenBoom([1,2,3,4,5,6,87]))
function trackRobot(steps) {
  coor = [x=0,y=0]
  for (let i in steps){
    if (i%4===0){
      y += steps[i]
    }else if ((i-1)%4===0){
      x += steps[i]
    }else if ((i-2)%4===0){
      y -= steps[i]
    }else if ((i-3)%4===0){
      x -= steps[i]
    }}
  coor = [x,y]
  return coor
  }
console.log(trackRobot([20, 30, 10,40]))

function splitBunches(bunches) {
	bunch = []
  for (let i in bunches){
    for (let j=0;j<bunches[i].quantity;j++){
    bunch.push(bunches[i])
  }}
  for (let i in bunch){
    bunch[i].quantity = 1
  }
  return bunch
}
console.log(splitBunches([{ name: "currants", quantity: 1 },{ name: "grapes", quantity: 2 },{ name: "bananas", quantity: 2 }]))

