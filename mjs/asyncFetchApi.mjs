export const asyncFetchApi = () => {
  console.log(1) // sync
  setTimeout(() => console.log(2), 0) // async --> ข้อสังเกตคือ ถึงแม้จะเป็น 0 วิ แต่สุดท้ายก็จะทำงานทีหลังเพราะเป็น async function
  // โดย javascript จะทำการ register async เป็น callback function เพื่อเป็นการบอกว่า function นี้จะถูกกลับมาเรียกทีหลังเมื่อมันทำงานเสร็จนะ
  // และข้ามไปทำ sync function อื่นก่อน เพราะถ้ารอให้ func นี้เสร็จก่อน มันก็จะเป็น sync ที่ทำงานเป็นลำกับบรรทัด
  console.log(3) // sync

  // example with async await
  const fetchBook = async () => {
    const res = await fetch('api/v1/books')
    console.log(res.json)
  }
  // example with api request
  async function createBooks() {
    const res = await fetch('api/v1/books', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Antman',
        desc: 'Antman is the movie',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    const books = await res.json()

    console.log(books)
  }
}
