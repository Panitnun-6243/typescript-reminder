export const arrowFunction = () => {
  // arrow function คือ anonymous function ที่นำไปเก็บในตัวแปร เพื่อชี้ ไปยัง function (มองเป็น object) จริง ๆ
  ;(a, b) => {
    return a + b
  }
  // เอาไปเก็บใน const add
  const add = (a, b) => {
    return a + b
  }
  // add o------> function()

  // สามารถตัด return กับ ปีกกา {} ทิ้งได้ ถ้ามีได้แค่ expression เดียว (ไม่มี if-else ที่ทำให้เกิดได้หลาย expression/statement)
  // expression คำนวณแล้วได้ค่า (value) เช่น 1+1, 2-2 แต่ถ้ามี if-else หรือ การประกาศตัวแปร จะตัดปีก {} ทิ้งไม่ได้
  const minus = (a, b) => a - b
  // statement
  const multiply = (a, b) => {
    const z = 20
    return a * b * z
  }

  // ถ้า parameter มีตัวเดียวเอาวงเล็บออกได้
  const divide = (a) => a / 10

  console.log(add(1, 2))
  console.log(minus(1, 2))
  console.log(multiply(1, 2))
  console.log(divide(100))
}
