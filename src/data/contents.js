let contents = [
  {
    title: 'Array.filter()',
    type: 'pure',
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
    type: 'pure',
    description: 'การทำงานจะคล้ายกับ filter แต่จะเป็นการหาข้อมูลใน array ด้วยเงื่อนไขที่กำหนด และจะ return ผลลัพท์ตัวแรกที่หาเจอออกมาเท่านั้น',
    examples: [
      {
        code: 'users.find(user => user.age > 13)'
      }
    ]
  },
  {
    title: 'Array.map()',
    type: 'pure',
    description: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    examples: [
      {
        code: 'users.map(user => user)'
      },
      {
        code: 'users.map(user => user.gender)'
      },
      {
        code: 'users.map(user => user.name + \' age \' + user.age)'
      },
      {
        code: 'users.map(user => user.gender).length'
      }
    ]
  },
  {
    title: 'Array.reduce()',
    type: 'pure',
    description: 'ในแต่ละรอบของการทำงาน ค่าที่ถูก return จาก callback จะถูกสะสมไปเรื่อยๆ และ return ค่าสุดท้ายออกมา',
    examples: [
      {
        code: 'users.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0)'
      },
      {
        code: 'users.reduce((sumAge, user) => sumAge + user.age, 0)'
      },
      {
        code: 'emojis.reduce((result, emoji) => result + emoji, "")'
      },
      {
        code: 'products.reduce((sumPrice, product) => sumPrice + product.price, 0)'
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
    type: 'impure',
    description: 'เป็นการกลับการเรียงลำดับของ Array ค่าภายใน Array ยังอยู่เหมือนเดิม แค่กลับการเรียงลำดับเท่านั้น',
    examples: [
      {
        code: 'users.reverse()'
      }
    ]
  },
  {
    title: 'Array.shift()',
    type: 'impure',
    description: 'เป็นการลบค่าลำดับเเรกของ Array ต้นฉบับออก และ Return ค่านั้นออกมา',
    examples: [
      {
        code: 'users.shift()'
      }
    ]
  },
  {
    title: 'Array.pop()',
    type: 'impure',
    description: 'เป็นการลบค่าลำดับสุดท้ายของ Array ต้นฉบับออก และ Return ค่านั้นออกมา',
    examples: [
      {
        code: 'users.pop()'
      }
    ]
  }
]
export default contents
