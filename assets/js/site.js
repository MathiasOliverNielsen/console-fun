// write cool JS here!!
console.time('default');
const myInfo = 'en variabel';
const myBooks = [
  'The Catcher in the Rye',
  'To Kill a Mockingbird',
  '1984',
  'Pride and Prejudice',
  'The Great Gatsby',
  'The Hobbit',
  "Harry Potter and the Sorcerer's Stone",
  'The Lord of the Rings',
  'The Da Vinci Code',
  'The Hunger Games',
];

console.group('konsol opgave');
console.log('Jeg er en almindelig konsol log');
console.info('Jeg er en  konsol info: ' + myInfo);
console.warn('Jeg er en advarsel');
console.error('Jeg er en fejl');

console.table(myBooks);
console.groupEnd();
console.timeEnd('default');
