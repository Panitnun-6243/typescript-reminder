export const mapFilter = () => {
  // method คือ function ที่อยู่ข้างใน object
  const person = {
    name: 'Somchai',
    age: 22,
    printDetail: function () {
      console.log(this.name, this.age)
    },
  }
  person.printDetail()

  // map
  const numMap = [2, 2, 6, 4, 7]
  // *=2
  const newNumMap = numMap.map((n) => n * 2) // create new array without fixing old array
  console.log(numMap)
  console.log(newNumMap)

  // filter
  const numFilter = [2, 3, 6, 4, 7]
  // %2 == 0
  const newNumFilter = numFilter.filter((n) => n % 2 === 0)
  console.log(numFilter)
  console.log(newNumFilter)

  // filter หาเจอตัวแรกแล้วจบการทำงานโดยการใช้ method find
  const numFind = numFilter.find((n) => n % 2 !== 0)
  console.log(numFind)
}
