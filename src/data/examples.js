let examples = [
  {
    title: 'Array.filter()',
    content: 'เป็นการกรองข้อมูลใน array ด้วยเงื่อนไขที่กำหนด เช่นต้องการกรองข้อมูลให้เหลือเฉพาะ user ที่มีอายุมากกว่า 13 ปีขึ้นไป',
    code: 'users.filter(item => item.age > 13)'
  },
  {
    title: 'Array.find()',
    content: 'การทำงานจะคล้ายกับ filter แต่จะเป็นการหาข้อมูลใน array ด้วยเงื่อนไขที่กำหนด และจะ return ผลลัพท์ตัวแรกที่หาเจอออกมาเท่านั้น',
    code: 'users.find(item => item.age > 13)'
  },
  {
    title: 'Array.map()',
    content: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    code: 'users.map(item => item)'
  },
  {
    title: 'Array.map()',
    content: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    code: 'users.map(item => item.gender)'
  },
  {
    title: 'Array.map()',
    content: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    code: 'users.map(item => item.name + \' age \' + item.age)'
  },
  {
    title: 'Array.map()',
    content: 'ข้อสังเกตุเมื่อเราใช้ function map นั้น array ผลลัพท์จะมี length เท่ากับ array ต้นฉบับเสมอ',
    code: 'users.map(item => item.gender).length'
  },
  {
    title: 'Array.filter().map()',
    content: 'เราสามารถเอามันมาต่อกันได้ด้วย',
    code: 'users.filter(item => item.gender === \'female\').map(item => item.username)'
  },
  {
    title: 'Playground',
    content: 'อยากรู้ต้องลองเอง',
    code: ''
  }
]
export default examples
