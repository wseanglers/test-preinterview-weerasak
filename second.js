let a = 1
let b = 2
let c = ''
console.log(`a = ${a}, b = ${b}, c = ${c}`)
a += 0
b = a + c

// === (Strict equality) , == (Equality) ใน Javascript จะมีการใช้งานที่แตกต่างกัน
// โดย == (Equality) จะมีเทียบตัวแปรสองตัวที่มีค่าเหมือนกันโดยไม่ได้สนเรื่องของ Data Type เช่น '1' == 1 true เพราะ Javascript มอง '1' ที่เป็น STRING เป็นเลข 1 เหมือนกัน
// === (Strict equality) การใช้แบบนี้จะเป็นการเทียบตัวแปรสองตัวที่จะสนในเรื่องของ Data Type ที่เหมือนกัน เช่น '1' === '1' true เพราะ Javascript เช็คค่าตัวแปรแล้วเหมือนกัน แล้วมาเช็ค Data Type อีกครั้งแล้วเหมือนกันจึงออกมาเป็น true
if (b === a) {
    console.log('a equal b')
} else {
    console.log('something went wrong')
}

// Fix
if (b == a) {
    console.log('a equal b')
} else {
    console.log('something went wrong')
}





// การใช้แบบบรรทัดที่ 32 กับ 38 เป็นการสร้าง Function เหมือนกัน แต่จะแตกต่างวิธีการสร้าง Function และขั้นตอนการทำงานของโค้ด
// โดยการสร้าง Function บรรทัดที่ 32 เป็นการสร้าง Function ที่เป็นการสร้างในรูปแบบตัวแปร และการใช้งานก็ใช้เหมือนกัน โดยการเรียกใช้ชื่อตัวแปร แต่ส่วนของโค้ดตรงนี้เมื่อรันแล้ว จะเกิดข้อผิดพลาดเนื่องจากตัวแปร square เป็นตัวแปรที่ไม่ได้เกิดขึ้นก่อนที่จะ console.log จึงทำให้เกิดข้อผิดพลาด
console.log(square(5));
 
var square = function(n) { 
  return n * n; 
}

console.log(square(5));
 
function square(n) { 
  return n * n; 
}
