let examples = [
  {
    title: 'Array.filter()',
    content: 'เป็นการกรองข้อมูลใน array ด้วยเงื่อนไขที่กำหนด เช่นต้องการกรองข้อมูลให้เหลือเฉพาะ user ที่มีอายุมากกว่า 13 ปีขึ้นไป',
    code: 'users.filter(user => user.age > 13)'
  },
  {
    title: 'Array.find()',
    content: 'การทำงานจะคล้ายกับ filter แต่จะเป็นการหาข้อมูลใน array ด้วยเงื่อนไขที่กำหนด และจะ return ผลลัพท์ตัวแรกที่หาเจอออกมาเท่านั้น',
    code: 'users.find(user => user.age > 13)'
  },
  {
    title: 'Array.map()',
    content: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    code: 'users.map(user => user)'
  },
  {
    title: 'Array.map()',
    content: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    code: 'users.map(user => user.gender)'
  },
  {
    title: 'Array.map()',
    content: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    code: 'users.map(user => user.name + \' age \' + user.age)'
  },
  {
    title: 'Array.map()',
    content: 'ข้อสังเกตุเมื่อเราใช้ function map นั้น array ผลลัพท์จะมี length เท่ากับ array ต้นฉบับเสมอ',
    code: 'users.map(user => user.gender).length'
  },
  {
    title: 'Array.filter().map()',
    content: 'เราสามารถเอามันมาต่อกันได้ด้วย',
    code: 'users.filter(user => user.gender === \'female\').map(user => user.username)'
  },
  {
    title: 'Array.reverse()',
    content: 'เป็นการกลับการเรียงลำดับของ Array ค่าภายใน Array ยังอยู่เหมือนเดิม แค่กลับการเรียงลำดับเท่านั้น',
    code: 'users.reverse()'
  },
  {
    title: 'Array.sort()',
    content: 'sort() แบบไม่มี parameter เป็นการเรียงลำดับของ Array ตามเลข Unicode จากน้อยไปมาก แต่ใช้กับ Array JSON ไม่ได้ ต้องเปลี่ยนให้อยู่ในรูปของ Array ทั่วไปก่อน ค่าภายใน Array ยังอยู่เหมือนเดิม แค่เรียงลำดับเท่านั้น',
    code: 'users.map(user => user.id).sort()'
  },
  {
    title: 'Array.sort().reverse()',
    content: 'sort() แบบไม่มี parameter ใช้คู่กับ reverse() จะได้การเรียงจากมากไปน้อย',
    code: 'users.map(user => user.id).sort().reverse()'
  },
  {
    title: 'Array.sort()',
    content: 'sort() แบบมี parameter เป็นการเรียงลำดับของ Array โดยการเทียบค่าในพารามิเตอร์แรก(เริ่มจาก array[0])และพารามิเตอร์ที่สอง(เริ่มจาก array[1]) การreturnจะส่งผลถึงการย้ายตำแหน่ง หากค่ามากกว่า(1) ขึ้นไป จะทำการสลับตำแหน่งแล้วจะเทียบค่าย้อนกลับจนกว่าจะเจอค่าที่ น้อยกว่า(-1) หรือ เท่ากัน(0) จะหยุดแล้วกลับมาทำตำแหน่งปัจจุบัน *(ในกรณีที่เป็นข้อความให้ return พารามิเตอร์ที่หนึ่ง.localeCompare(พารามิเตอร์ที่สอง)) ค่าภายใน Array ยังอยู่เหมือนเดิม แค่เรียงลำดับเท่านั้น',
    code: 'users.sort((parameterOne, parameterTwo) => parameterOne.id - parameterTwo.id)'
  },
  {
    title: 'Array.sort()',
    content: 'sort() แบบมี parameter ถ้าสลับตัวแปลตอน return จะได้การเรียงจากมากไปน้อย',
    code: 'users.sort((parameterOne, parameterTwo) => parameterTwo.id - parameterOne.id)'
  }
]
export default examples
