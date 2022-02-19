// The value of kevin is constant
const kelvin = 0

// Convert kelvin to celsius by subtracting 273
var celsius = kelvin - 273

// This is the formula for newton rounded down.
var newton = Math.floor(celsius * (33/100))

// This is the formula for fahrenheit rounded down
var fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// 
