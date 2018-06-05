let contents = [
  {
    title: 'Array.filter()',
    type: 'pure',
    description: 'Creates a new array with all elements that pass the test implemented by the provided function.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
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
    description:
      'Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
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
    description:
      'Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
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
    description:
      'Creates a new array with the results of calling a provided function on every element in the calling array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    examples: [
      {
        code: "emojis.map(\n\temoji => \n\t\t'Char code of ' + emoji + ' is ' + emoji.codePointAt(0))"
      },
      {
        code: 'users.map(\n\tuser => user)'
      },
      {
        code: 'users.map(\n\tuser => user.gender)'
      },
      {
        code: "users.map(\n\tuser => \n\t\tuser.name + ' age ' + user.age)"
      },
      {
        code: 'users.map(\n\tuser => user.gender).length'
      }
    ]
  },
  {
    title: 'Array.reduce()',
    type: 'pure',
    description:
      'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
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
        code: "users.filter(\n\tuser => \n\t\tuser.gender === 'female')\n\t\t\t.map(user => user.username)"
      }
    ]
  },
  {
    title: 'Array.sort()',
    type: 'impure',
    description: 'Sorts the elements of an array and returns the array. We can define the conditions for sorting.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    examples: [
      {
        code: 'emojis.sort()'
      },
      {
        code: 'users.sort()'
      },
      {
        code: '/*Order by name*/\nusers.sort(\n\t(a, b) => (a.name - b.name))'
      },
      {
        code: '/*Order by price*/\nproducts.sort(\n\t(a, b) => (a.price - b.price))'
      }
    ]
  },
  {
    title: 'Array.reverse()',
    type: 'impure',
    description: 'Reverses an array in place.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
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
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    examples: [
      {
        code: "emojis.push('💥')"
      },
      {
        code: "emojis.push('⚽', '🏀')"
      },
      {
        code: "/* Observe this carefully */\nemojis.push(['🔫', '💣', '🔪'])"
      }
    ]
  },
  {
    title: 'Push',
    type: 'pure',
    description: 'We can pure push too.',
    examples: [
      {
        code:
          "// Use spread operator\nvar newEmojis = [...emojis, '🏀']\n// Try push to array\nnewEmojis.push('🏀')\nnewEmojis"
      },
      {
        code:
          "// or use concat \nvar newEmojisAgain = [].concat(emojis, '👍')\n// Try push to array\nnewEmojisAgain.push('🏀')\nnewEmojisAgain"
      }
    ]
  },
  {
    title: 'Array.shift()',
    type: 'impure',
    description:
      'Removes the first element from an array and returns that removed element. This method changes the length of the array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
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
    description:
      'Removes the last element from an array and returns that element. This method changes the length of the array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
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
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
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
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
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
    description:
      'This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    examples: [
      {
        code: '//Take first array and concatenate\n/* with the second array.*/\nemojis.concat(users)'
      },
      {
        code: '//Concatenate more than 2 arrays\nempty.concat(users, emojis)'
      },
      {
        code:
          '//Concatenate more than 3 elements\n//with empty array\n[].concat(["🇹🇭", "🇰🇷", "🇯🇵"], emojis, ["🇹🇭", "🇰🇷", "🇯🇵"])'
      }
    ]
  },
  {
    title: 'Array.slice()',
    type: 'pure',
    description:
      'Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
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
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
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
        code:
          "// Copy emojis array \nvar copyEmojis = [...emojis]\n// Try push element to emojis\ncopyEmojis.push('🏀')\ncopyEmojis"
      },
      {
        code:
          "// or use [].concat \nvar copyEmojisAgain = [].concat(emojis)\n// Try push element to emojis\ncopyEmojisAgain.push('🏀')\ncopyEmojisAgain"
      }
    ]
  },
  {
    title: 'Array.copyWithin()',
    type: 'impure',
    description:
      'Shallow copies part of an array to another location in the same array and returns it, without modifying its size.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
    examples: [
      {
        code:
          '// place at position 0 \n// the element between\n// position 3 and 4 \nvar copyEmojis = emojis.slice(0)\ncopyEmojis.copyWithin(0, 3, 4)'
      },
      {
        code:
          '// place at position 1 \n// the elements after \n// position 3 \nvar copyEmojis = emojis.slice(0)\ncopyEmojis.copyWithin(1, 3)'
      }
    ]
  },
  {
    title: 'Array.entries()',
    type: 'pure',
    description: 'Returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
    examples: [
      {
        code: '// place at position 0 \nvar iterator = emojis.entries()\niterator.next().value'
      }
    ]
  },
  {
    title: 'Array.every()',
    type: 'pure',
    description: 'Tests whether all elements in the array pass the test implemented by the provided function.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
    examples: [
      {
        code:
          '// function to test\nfunction isPriceBelowThreshold(product) {\n  return product.price < 100000;\n}\nproducts.every(isPriceBelowThreshold)'
      }
    ]
  },
  {
    title: 'Array.fill()',
    type: 'impure',
    description:
      'Fills all the elements of an array from a start index to an end index with a static value. The end index is not included.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
    examples: [
      {
        code:
          'var copyEmojis = emojis.slice(0)\n// fill with 0 from position \n// 2 until position 4\ncopyEmojis.fill(0, 2, 4)'
      },
      {
        code: 'var copyEmojis = emojis.slice(0)\n// fill with 1 from position 2\ncopyEmojis.fill(1, 2)'
      },
      {
        code: 'var copyEmojis = emojis.slice(0)\n// fill with 2 \ncopyEmojis.fill(2)'
      }
    ]
  },
  {
    title: 'Array.find()',
    type: 'pure',
    description:
      'Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    examples: [
      {
        code: '// Find the first user \n// age more than 14\nusers.find(function(user) {\n  return user.age > 14\n})'
      }
    ]
  },
  {
    title: 'Array.forEach()',
    type: 'pure',
    description: 'Executes a provided function once for each array element.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
    examples: [
      {
        code: 'let copyEmojis = ""\nemojis.forEach(function(emoji) {\n copyEmojis += emoji\n})\ncopyEmojis'
      }
    ]
  },
  {
    title: 'Array.includes()',
    type: 'pure',
    description:
      'Determines whether an array includes a certain element, returning true or false as appropriate. It uses the sameValueZero algorithm to determine whether the given element is found.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
    examples: [
      {
        code: 'emojis.includes("💻")'
      },
      {
        code: 'emojis.includes("🇹🇭")'
      },
      {
        code: 'emojis.includes("🍵")'
      }
    ]
  },
  {
    title: 'Array.from()',
    type: 'pure',
    description: 'Creates a new, shallow-copied Array instance from an array-like or iterable object.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
    examples: [
      {
        code: 'Array.from("shiba")'
      }
    ]
  },
  {
    title: 'Array.isArray()',
    type: 'pure',
    description: 'Determines whether the passed value is an Array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
    examples: [
      {
        code: 'Array.isArray(emojis)'
      }
    ]
  },
  {
    title: 'Array.of()',
    type: 'pure',
    description:
      'Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
    examples: [
      {
        code: 'Array.of(1, 2, 3, 4, 5)'
      }
    ]
  },
  {
    title: 'Array.indexOf()',
    type: 'pure',
    description:
      'Returns the first index at which a given element can be found in the array, or -1 if it is not present.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
    examples: [
      {
        code: 'emojis.indexOf("☕️")'
      },
      {
        code: 'emojis.indexOf("👙")'
      },
      {
        code: 'emojis.indexOf("🍶")'
      }
    ]
  },
  {
    title: 'Array.keys()',
    type: 'pure',
    description: 'Returns a new Array Iterator object that contains the keys for each index in the array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
    examples: [
      {
        code:
          'let copyEmoji = ""\nvar iterator = emojis.keys()\nfor (let key of iterator) {\n  copyEmoji += key; // expected output: 0 1 2\n}\ncopyEmoji'
      }
    ]
  },
  {
    title: 'Array.lastIndexOf()',
    type: 'pure',
    description:
      'Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
    examples: [
      {
        code: 'emojis.lastIndexOf("🍻")'
      },
      {
        code: 'emojis.lastIndexOf("👙")'
      },
      {
        code: 'emojis.lastIndexOf("💪")'
      }
    ]
  },
  {
    title: 'Array.map()',
    type: 'pure',
    description:
      'Creates a new array with the results of calling a provided function on every element in the calling array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    examples: [
      {
        code: 'var array = [1, 4, 9, 16]\narray.map(x => x * 2)'
      }
    ]
  },
  {
    title: 'Array.reduceRight()',
    type: 'impure',
    description:
      'Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    examples: [
      {
        code:
          '[[0, 1], [2, 3], [4, 5]].reduceRight(\n  (previousValue, currentValue) => previousValue.concat(currentValue)\n)'
      }
    ]
  },
  {
    title: 'Array.some()',
    type: 'pure',
    description:
      'Tests whether at least one element in the array passes the test implemented by the provided function.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
    examples: [
      {
        code:
          'var array = [1, 2, 3, 4, 5]\nvar even = function(element) {\n  // checks whether an element is even\n  return element % 2 === 0;\n}\narray.some(even)'
      }
    ]
  },
  {
    title: 'Array.toLocaleString()',
    type: 'pure',
    description:
      'Returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString',
    examples: [
      {
        code:
          'var array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")]\narray1.toLocaleString("en", {timeZone: "UTC"})'
      }
    ]
  },
  {
    title: 'Array.unshift()',
    type: 'impure',
    description: 'Adds one or more elements to the beginning of an array and returns the new length of the array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    examples: [
      {
        code: 'emojis.unshift("🍺","🍻")'
      }
    ]
  },
  {
    title: 'Array.values()',
    type: 'pure',
    description: 'Returns a new Array Iterator object that contains the values for each index in the array.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
    examples: [
      {
        code:
          'let copyArray = ""\nconst array = ["a", "b", "c"]\nconst iterator = array.values()\nfor (const value of iterator) {\n  copyArray += value // \n}\ncopyArray'
      }
    ]
  },
  {
    title: 'Array[Symbol.iterator]()',
    type: 'pure',
    description: 'Property is the same function object as the initial value of the values() property.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator',
    examples: [
      {
        // cant find the right example
        code:
          'let copyArray = ""\nvar arr = ["w", "y", "k", "o", "p"]\nvar eArr = arr[Symbol.iterator]()\nfor (let letter of eArr) {\n  copyArray += letter\n}\ncopyArray'
      }
    ]
  },
  {
    title: 'How to break loop array function with Array.some()',
    type: 'pure',
    description: 'If use forEach and want to break loop just use some and return with condition',
    ref: 'https://stackoverflow.com/questions/2641347/how-to-short-circuit-array-foreach-like-calling-break',
    examples: [
      {
        // cant find the right example
        code: 'users.some(item => {\n\tconsole.log(item)\n\treturn item.id === 1002\n})'
      }
    ]
  }
]

export default contents
