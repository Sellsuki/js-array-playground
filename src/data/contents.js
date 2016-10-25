let contents = [
  {
    title: 'Array.filter()',
    type: 'pure',
    description: 'เป็นการกรองข้อมูลใน array ด้วยเงื่อนไขที่กำหนด',
    examples: [
      {
        code: 'users.filter(\n\tuser => user.age > 13)'
      },
      {
        code: 'users.filter(\n\tuser => user.gender === "female")'
      }
    ]
  },
  {
    title: 'Array.find()',
    type: 'pure',
    description: 'การทำงานจะคล้ายกับ filter แต่จะเป็นการหาข้อมูลใน array ด้วยเงื่อนไขที่กำหนด และจะ return ผลลัพท์ตัวแรกที่หาเจอออกมาเท่านั้น',
    examples: [
      {
        code: 'users.find(\n\tuser => user.age > 13)'
      }
    ]
  },
  {
    title: 'Array.map()',
    type: 'pure',
    description: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    examples: [
      {
        code: 'users.map(\n\tuser => user)'
      },
      {
        code: 'users.map(\n\tuser => user.gender)'
      },
      {
        code: 'users.map(\n\tuser => \n\t\tuser.name + \' age \' + user.age)'
      },
      {
        code: 'users.map(\n\tuser => user.gender).length'
      }
    ]
  },
  {
    title: 'Array.reduce()',
    type: 'pure',
    description: 'ในแต่ละรอบของการทำงาน ค่าที่ถูก return จาก callback จะถูกสะสมไปเรื่อยๆ และ return ค่าสุดท้ายออกมา',
    examples: [
      {
        code: 'users.reduce(\n\t(previousValue, currentValue) => \n\t\tpreviousValue + currentValue.age, 0)'
      },
      {
        code: 'users.reduce(\n\t(sumAge, user) => \n\t\tsumAge + user.age, 0)'
      },
      {
        code: 'emojis.reduce(\n\t(result, emoji) => \n\t\tresult + emoji, "")'
      },
      {
        code: 'products.reduce(\n\t(sumPrice, product) => \n\t\tsumPrice + product.price, 0)'
      }
    ]
  },
  {
    title: 'Array.filter().map()',
    description: 'เราสามารถเอามันมาต่อกันได้ด้วย',
    examples: [
      {
        code: 'users.filter(\n\tuser => \n\t\tuser.gender === \'female\')\n\t\t\t.map(user => user.username)'
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
        code: 'emojis.shift()'
      },
      {
        code: 'users.shift()'
      },
      {
        code: 'products.shift()'
      }
    ]
  },
  {
    title: 'Array.pop()',
    type: 'impure',
    description: 'เป็นการลบค่าลำดับสุดท้ายของ Array ต้นฉบับออก และ Return ค่านั้นออกมา',
    examples: [
      {
        code: 'emojis.pop()'
      },
      {
        code: 'users.pop()'
      },
      {
        code: 'products.pop()'
      }
    ]
  }
]
export default contents
