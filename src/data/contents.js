let contents = [
  {
    title: 'Array.filter()',
    description: 'เป็นการกรองข้อมูลใน array ด้วยเงื่อนไขที่กำหนด',
    examples: [
      {
        code: 'users.filter(user => user.age > 13)'
      },
      {
        code: 'users.filter(user => user.gender === "female")'
      }
    ]
  },
  {
    title: 'Array.find()',
    description: 'การทำงานจะคล้ายกับ filter แต่จะเป็นการหาข้อมูลใน array ด้วยเงื่อนไขที่กำหนด และจะ return ผลลัพท์ตัวแรกที่หาเจอออกมาเท่านั้น',
    examples: [
      {
        code: 'users.find(user => user.age > 13)'
      }
    ]
  },
  {
    title: 'Array.map()',
    description: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    examples: [
      {
        code: 'users.map(user => user)'
      },
      {
        code: 'users.map(user => user.gender)'
      },
      {
        code: 'users.map(user => user.gender).length'
      },
      {
        code: 'users.map(user => user.name + \' age \' + user.age)'
      }
    ]
  },
  {
    title: 'Array.filter().map()',
    description: 'เราสามารถเอามันมาต่อกันได้ด้วย',
    examples: [
      {
        code: 'users.filter(user => user.gender === \'female\').map(user => user.username)'
      }
    ]
  },
  {
    title: 'Array.reverse()',
    description: 'เป็นการกลับการเรียงลำดับของ Array ค่าภายใน Array ยังอยู่เหมือนเดิม แค่กลับการเรียงลำดับเท่านั้น',
    examples: [
      {
        code: 'users.reverse()'
      }
    ]
  },
  {
    title: 'Array.shift()',
    description: 'เป็นการลบค่าลำดับเเรกของ Array ออก เเละ Return ตัวนั้น ',
    examples: [
      {
        code: 'users.shift()'
      }
    ]
  }
]
export default contents
