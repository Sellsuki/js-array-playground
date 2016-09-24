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
  }
]
export default examples
