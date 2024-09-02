// spread operator
// to create new structure on the new array variable -> [1,2,3,4] (to prevent [[1,2,3,4]])

export const spreadOperator = () => {
  // array
  const nums = [1, 2, 3, 4]
  const nums2 = [5, 6, 7, 8]

  const newNum = [...nums, 4.5, ...nums2]
  console.log(newNum)

  // object
  //   ถ้า key ซ้ำจะถูกแทนที่ด้วยตัวหลังสุด
  //   const obj1 = { id: 1, content: 'obj1' }
  //   const obj2 = { id: 2, content: 'obj2' }
  const obj1 = { a: 1, b: 'obj1' }
  const obj2 = { c: 2, d: 'obj2' }

  const newObj = { ...obj1, ...obj2 }
  console.log(newObj)
}
