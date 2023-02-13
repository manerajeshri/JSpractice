
// toString takeas a radix param, the "base" in which the integer is translated to string. The easiest to grasp this, I think is var a = 5;a.toString(2) ; will return the number 5 in binary format, so 101

const password = Math.random().toString(36).slice(-8)

console.log(password);