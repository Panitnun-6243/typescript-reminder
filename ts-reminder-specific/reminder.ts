export const reminder = () => {
  const str = 'Hello' // แทนที่จะเป็น type string แต่ typescript ดันมองว่า const จะทำให้แก้ค่าไม่ได้ ทำให้ประเภทของตัวแปรก็คือค่านั้น ๆ เลย
  // กลายเป็น type = "Hello" เฉยเลย แบบนี้จะเรียกว่า literal type string พิเศษแบบเป๊ะ ๆ คำนั้นไปเลย
  console.log(str)

  // const assertion มีไว้เพื่อทำให้รู้ค่าของ property ใน object (เพราะไม่งั้นจะรู้แค่ว่าเป็น string) เวลา hover mouse ไปดูที่ property นั้นๆ
  const themeColor = {
    colors: {
      primary: '#439483',
      secondary: '#233434',
    },
  }
  // (property) primary: string

  // แต่ถ้าเพิ่ม assertion จะรู้ค่าเลย
  const themeColorAssertion = {
    colors: {
      primary: '#439483',
      secondary: '#233434',
    },
  } as const
  // (property) primary: "#439483"

  // การกำหนดค่าข้อมูล
  // interface
  interface Animal {
    age: number
  }

  interface People extends Animal {
    name: string
    gender: 'male' | 'female'
    // มีก็ได้ ไม่มีก็ได้ใช้ ?
    socials?: {
      line?: string
      facebook?: string
    }
  }

  const people1: People = {
    name: 'Somsri',
    age: 28,
    gender: 'female',
    socials: {
      line: 'somsri1625',
    },
  }

  console.log(people1)

  // type
  type AnimalType = {
    age: number
  }

  type Address = {
    lat: string
    lng: string
  }
  // การจะ extend ของ type จะเป็นการรวมโครงสร้าง
  type PeopleType = AnimalType & {
    name: string
    gender: 'male' | 'female'
    // เพิ่มการมีที่อยู่หลาย ๆ ที่ (array)
    addresses: Address[]
    socials?: {
      line?: string
      facebook?: string
    }
  }

  const people2: PeopleType = {
    name: 'Somsri',
    age: 28,
    gender: 'female',
    addresses: [
      { lat: '121212232', lng: '2322424242' },
      { lat: '34354545', lng: '243888' },
    ],
    socials: {
      line: 'somsri1625',
    },
  }
  console.log(people2)

  // function
  interface Options {
    x: number
    y: number
  }
  function foo(bar: number, option?: Options): void {
    console.log(bar)
  }
  foo(3)

  // generic จะช่วยให้เราส่งค่า argument ได้หลายประเภทใน 1 ชุดข้อมูล แต่ชุดข้อมูลนั้นต้องเหมือนกันหมดนะ เช่น num [1,2], string ['sds', 'fggf']

  //   function concatAll(...arr: number[]) {
  //     let concatenatedResult = ''
  //     let hyphenCount = 0
  //     for (const a of arr) {
  //       if (hyphenCount === 0) {
  //         concatenatedResult += a
  //       } else {
  //         concatenatedResult += `-${a}`
  //       }
  //       hyphenCount++
  //     }
  //     console.log(concatenatedResult)
  //   }

  // refactor
  function concatNum(...arr: number[]) {
    return arr.join('-')
  }
  console.log(concatNum(1, 2, 3, 4, 5))

  // use generic
  function concatAll<T>(...arr: T[]) {
    return arr.join('-')
  }
  console.log(concatAll('fdfdf', 'dffd', 'ghgh'))

  interface Item {
    id: number
    title: string
  }

  const products: Item[] = [
    {
      id: 1,
      title: 'First item',
    },
    {
      id: 2,
      title: 'Second item',
    },
  ]
  function findById<T extends { id: number }>(items: T[], id: T['id']) {
    return items.find((i) => i.id === id)
  }

  console.log(findById(products, 2))

  // utilities type
  //   type Address = {
  //     lat: string
  //     lng: string
  //   }

  // to

  type AddressUtil = Record<'lat' | 'lng', string>

  // type PeopleType = AnimalType & {
  //   name: string
  //   gender: 'male' | 'female'
  //   addresses: Address[]
  //   socials?: {
  //     line?: string
  //     facebook?: string
  //   }
  // }

  // to
  type PeopleTypePartial = AnimalType & {
    name: string
    gender: 'male' | 'female'
    addresses: Address[]
    // ใช้ partial แทน ?
    socials?: Partial<{
      line: string
      facebook: string
    }>
  }

  // extract type from People (only want name and gender)
  type BasicInfo = Pick<PeopleTypePartial, 'name' | 'gender'>
  // omit หรือละเว้น name กับ gender
  type OtherInfo = Omit<PeopleTypePartial, 'name' | 'gender'>

  // ถ้าอยากรู้ว่าชนิดข้อมูลของสิ่งที่รีเทิร์นกลับมาจาก function คืออะไรให้ใช้ return type
  function getTheme() {
    return {
      colors: {
        primary: '#439483',
        secondary: '#233434',
      },
    }
  }

  console.log(typeof getTheme())
  type GetThemeReturn = ReturnType<typeof getTheme>

  //ถ้าอยากได้แค่ type ของ color
  type Colors = GetThemeReturn['colors']

  // ถ้าอยากได้ type ของ property ข้างใน color
  type GetColorKeyReturn = keyof Colors

  // ถ้าอยากได้ type ของพารามิเตอร์ในฟังชั่น
  function hello(a: number, b: string, c: boolean) {
    console.log(a, b, c)
  }
  type HelloParams = Parameters<typeof hello>
}
