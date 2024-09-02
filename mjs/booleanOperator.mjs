export const booleanOperator = () => {
  // why result = 10 ? --> เพราะ programming lang เป็นสิ่งที่ขี้เกียจเพราะมันจะชอบหลีกเลี่ยงการประมวลผลอะไรที่ไม่จำเป็น
  // เพราะฉะนั้น เวลามันเจอ true && มันจะมองข้างหน้าเป็น true และคืนค่าด้านหลังออกมาทันที ถ้า t & t ก็จะคืน true หรือ t & f ก็จะ
  // คืน false เพราะงั้นมันเลยคืน 10 ที่เป็นตัวหลังออกมา
  console.log(true && 10)
  // why result = false ? --> เหมือนเดิมอีกแล้วมันขี้เกียจ เพราะงั้นถ้าเป็น false && มันจะไม่สนตัวหลังและคืนค่า false ทันที ด้วยเหตุผล
  // ที่ว่า อะไรก็ตามที่มี false ใน && จะเป็นเท็จทั้งหมด
  console.log(false && 15)
  // เหมือน false && เลย มันจะไม่สนด้านหลังเพราะยังไงถ้ามี true ใน || จะหมายความว่ายังไง statement นั้นก็จะเป็น true อยู่ดี
  console.log(true || 20)
  // เหมือน true && เลบ ตรงที่ว่า ตัวหน้า (false) ยังไงก็ไม่มีประโยชน์ละ ผลลัพธ์จะออกมาเป็น true/false ขึ้นอยู่กับตัวหลังเลย
  console.log(false || 25)

  // คำถามคือ รู้ไปทำไม --> เพราะสามารถนำไปเขียนใน react (jsx) เพื่อ return component ตาม condition ประมาณว่า
  // const hasError = true
  // hasError && <div>This component is error </div>
  // หรือ ถ้าค่า property เป็น underfined จะเป็น false เช่น ถ้า person.sex เป็น underfined
  // const gender = person.sex || 'male' --> return male
}
