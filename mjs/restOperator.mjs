export const restOperator = () => {
  // object
  const todos = {
    id: 1,
    title: 'test rest operator',
    desc: 'rest object',
  }

  const { id, ...restObj } = todos
  console.log(restObj)

  // array
  const nums = [1, 2, 3, 4, 5]
  const [first, second, ...restArr] = nums

  console.log(restArr)

  // can be used with function that similar to math.min
  const findMin = Math.min(...nums)
  console.log(findMin)

  const testRestFunction = (...nums) => {
    return nums
  }

  console.log(testRestFunction(1, 2, 3, 4)) // ข้อสังเกตุ: output มาเป็น array ทั้งที่ตอนใส่ ไม่ใช่ array
}
