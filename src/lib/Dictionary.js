class Dictionary {
    words = [
      'sat', 'sad', 'saw', 'sap',
      'set', 'sew', 
      'sit', 'sip', 'sin',
      'sob', 'sod', 'sow', 'son',
      'sud', 'sum', 'sun', 'sup',
      'tab', 'tad', 'tan', 'tap',
      'ten',
      'tin', 'tip',
      'tot', 'tow', 'ton', 'top',
      'tub',
      'bat', 'bad', 'ban',
      'bet', 'bed',
      'bit', 'bid', 'bin',
      'bot', 'bob', 'bow', 'bop',
      'but', 'bud', 'bum', 'bun',
      'dab', 'dad', 'dam', 
      'den',
      'did', 'dim', 'din', 'dip',
      'dot', 'don',
      'dub', 'dud',
      'cat', 'cab', 'cad', 'can', 'cap',
      'cot', 'cob', 'cow', 'cop',
      'cut', 'cub', 'cud', 'cup',
      'rat', 'rad', 'raw', 'ram', 'ran', 'rap',
      'red',
      'rib', 'rid', 'rim', 'rip',
      'rot', 'rob', 'rod', 'row', 
      'rut', 'rub', 'run',
      'mat', 'mad', 'maw', 'man', 'map',
      'met', 'men',
      'mit', 
      'mob', 'mow', 'mop', 'mom',
      'mud', 
      'nab', 'nap',
      'net', 'new', 
      'nit', 'nib', 'nip',
      'not', 'nod', 'now', 
      'nut'
    ];
  
    isWord(str) {
      return (this.words.indexOf(str) >= 0);
    }
  }

  export default Dictionary;