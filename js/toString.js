console.log(`toString`)

// To string

//Число к строке
let value = 0

// 1й способ

let toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

// 2й способ
toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)


value = 1

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)

//Значение бесконечности к строке
value = Infinity

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)

// Не число к строке
value = NaN

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)

// Булевое (Логическое)
value = true

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)


value = false

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)

// undefined 
value = undefined

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)


// null
value = null

toString = String(value)
console.log(`${value}, через конструктор String(): `, toString)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString)

toString = value + ""
console.log(`${value}, через конкотенацию: `, toString)
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString)