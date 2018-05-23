let contents = [
  {
    title: 'Array.filter()',
    type: 'pure',
    description: 'Creates a new array with all elements that pass the test implemented by the provided function.',
    examples: [
      {
        code: '/* Try change the code */\nemojis.filter(\n\temoji => emoji === "🐶")\n/* and press ▶ Run below */'
      },
      {
        code: 'emojis.filter(\n\temoji => emoji >= "🐶")'
      },
      {
        code: 'users.filter(\n\tuser => user.age > 13)'
      },
      {
        code: 'users.filter(\n\tuser => user.gender === "female")'
      },
      {
        code: 'products.filter(\n\tproduct => product.price < 20000)'
      },
      {
        code: 'products.filter(\n\tproduct => product.price > 20000 \n\t&& product.price < 30000)'
      }
    ]
  },
  {
    title: 'Array.find()',
    type: 'pure',
    description: 'Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.',
    examples: [
      {
        code: 'emojis.find(\n\temoji => emoji === "🐶")'
      },
      {
        code: 'users.find(\n\tuser => user.age > 13)'
      },
      {
        code: 'products.find(\n\tproduct => product.price < 20000)'
      }
    ]
  },
  {
    title: 'Array.findIndex()',
    type: 'pure',
    description: 'Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.',
    examples: [
      {
        code: 'emojis.findIndex(\n\temoji => emoji === "🐶")'
      },
      {
        code: 'users.findIndex(\n\tuser => user.age > 13)'
      },
      {
        code: 'products.findIndex(\n\tproduct => product.price < 20000)'
      }
    ]
  },
  {
    title: 'Array.map()',
    type: 'pure',
    description: 'Creates a new array with the results of calling a provided function on every element in the calling array.',
    examples: [
      {
        code: 'emojis.map(\n\temoji => \n\t\t\'Char code of \' + emoji + \' is \' + emoji.codePointAt(0))'
      },
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
    description: 'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.',
    examples: [
      {
        code: 'users.reduce(\n\t(previousValue, currentValue) => \n\t\tpreviousValue + currentValue.age, 0)'
      },
      {
        code: 'users.reduce(\n\t/* Try change params */\n\t(sumAge, user) => \n\t\tsumAge + user.age, 0)'
      },
      {
        code: 'emojis.reduce(\n\t(result, emoji) => \n\t\tresult + \'💥\' + emoji, "")'
      },
      {
        code: 'products.reduce(\n\t(sumPrice, product) => \n\t\tsumPrice + product.price, 0)'
      }
    ]
  },
  {
    title: 'Array.filter().map()',
    description: 'Two method can put together.',
    examples: [
      {
        code: 'users.filter(\n\tuser => \n\t\tuser.gender === \'female\')\n\t\t\t.map(user => user.username)'
      }
    ]
  },
  {
    title: 'Array.sort()',
    type: 'impure',
    description: 'Sorts the elements of an array and returns the array. We can define the conditions for sorting.',
    examples: [
      {
        code: 'emojis.sort()'
      },
      {
        code: 'users.sort()'
      },
      {
        code: 'products.sort()'
      },
      {
        code: '/*Order by name*/\nusers.sort(\n\t(a, b) => (a.name > b.name))'
      },
      {
        code: '/*Order by price*/\nproducts.sort(\n\t(a, b) => (a.price > b.price))'
      }
    ]
  },
  {
    title: 'Array.reverse()',
    type: 'impure',
    description: 'Reverses an array in place.',
    examples: [
      {
        code: 'emojis.reverse()'
      },
      {
        code: 'users.reverse()'
      },
      {
        code: 'products.reverse()'
      }
    ]
  },
  {
    title: 'Array.push()',
    type: 'impure',
    description: 'Adds one or more elements to the end of an array and returns the new length of the array.',
    examples: [
      {
        code: 'emojis.push(\'💥\')'
      },
      {
        code: 'emojis.push(\'⚽\', \'🏀\')'
      },
      {
        code: '/* Observe this carefully */\nemojis.push([\'🔫\', \'💣\', \'🔪\'])'
      }
    ]
  },
  {
    title: 'Push',
    type: 'pure',
    description: 'We can pure push too.',
    examples: [
      {
        code: '// Use spread operator\nvar newEmojis = [...emojis, \'🏀\']\n// Try push to array\nnewEmojis.push(\'🏀\')\nnewEmojis'
      },
      {
        code: '// or use concat \nvar newEmojisAgain = [].concat(emojis, \'👍\')\n// Try push to array\nnewEmojisAgain.push(\'🏀\')\nnewEmojisAgain'
      }
    ]
  },
  {
    title: 'Array.shift()',
    type: 'impure',
    description: 'Removes the first element from an array and returns that removed element. This method changes the length of the array.',
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
    description: 'Removes the last element from an array and returns that element. This method changes the length of the array.',
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
  },
  {
    title: 'Array.splice()',
    type: 'impure',
    description: 'Changes the contents of an array by removing existing elements and/or adding new elements.',
    examples: [
      {
        code: '/*Add new element to index 2*/\n emojis.splice(2, 0,\n\t "👍", "👊", "✊", "✌️", "👌", "✋")'
      },
      {
        code: '/*Add new element*/\n/*to index 2 - 4*/\n emojis.splice(2, 3,\n\t "👍", "👊", "✊")'
      },
      {
        code: '/*Remove element index 2 - 3*/\n users.splice(2, 2)'
      }
    ]
  },
  {
    title: 'Array.join()',
    type: 'pure',
    description: 'Joins all elements of an array (or an array-like object) into a string and returns this string.',
    examples: [
      {
        code: 'emojis.join()'
      },
      {
        code: 'emojis.join("|")'
      }
    ]
  },
  {
    title: 'Array.concat()',
    type: 'pure',
    description: 'This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
    examples: [
      {
        code: '//Take first array and concatenate\n/* with the second array.*/\nemojis.concat(users)'
      },
      {
        code: '//Concatenate more than 2 arrays\nempty.concat(users, emojis)'
      },
      {
        code: '//Concatenate more than 3 elements\n//with empty array\n[].concat(["🇹🇭", "🇰🇷", "🇯🇵"], emojis, ["🇹🇭", "🇰🇷", "🇯🇵"])'
      }
    ]
  },
  {
    title: 'Array.slice()',
    type: 'pure',
    description: 'Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.',
    examples: [
      {
        code: '// Extracts all element.\nemojis.slice()'
      },
      {
        code: '// Extracts the third element. \n// through the last element.\nemojis.slice(3)'
      },
      {
        code: '// Extracts the third element. \n// through the fourth element.\nemojis.slice(3, 4)'
      }
    ]
  },
  {
    title: 'Array.toString()',
    type: 'pure',
    description: 'Returns a string representing the specified array and its elements.',
    examples: [
      {
        code: '// Return toString value of emojis. \nemojis.toString()'
      }
    ]
  },
  {
    title: 'Copy Array',
    type: 'pure',
    description: 'pure Copy Array',
    examples: [
      {
        code: '// Copy emojis array \nvar copyEmojis = [...emojis]\n// Try push element to emojis\ncopyEmojis.push(\'🏀\')\ncopyEmojis'
      },
      {
        code: '// or use [].concat \nvar copyEmojisAgain = [].concat(emojis)\n// Try push element to emojis\ncopyEmojisAgain.push(\'🏀\')\ncopyEmojisAgain'
      }
    ]
  }
]
export default contents
