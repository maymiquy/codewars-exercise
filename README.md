<h1 align="center"> Higher-Order Functions </h1>

1. `map()`: Metode ini digunakan untuk membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen dalam array yang ada. Fungsi ini akan menerima setiap elemen sebagai parameter dan mengembalikan hasilnya ke dalam array baru.

```bash
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num * 2);
// doubledNumbers: [2, 4, 6]
```

2. `filter()`: Metode ini digunakan untuk membuat array baru yang hanya berisi elemen-elemen dari array yang lulus uji yang diberikan dalam bentuk fungsi. Fungsi ini akan menerima setiap elemen sebagai parameter dan mengembalikan `true` atau `false` untuk menentukan apakah elemen tersebut akan disertakan dalam array baru.

```bash
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers: [2, 4]
```

3. `reduce()`: Metode ini digunakan untuk mereduksi array menjadi satu nilai tunggal dengan menjalankan fungsi pada setiap elemen. Fungsi ini akan menerima dua parameter: sebuah akumulator dan elemen saat ini, dan mengembalikan nilai akumulator yang diperbarui.

```bash
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// sum: 15
```

4. `find()`: Metode ini digunakan untuk mencari elemen pertama dalam array yang lulus uji yang diberikan dalam bentuk fungsi. Fungsi ini akan menerima setiap elemen sebagai parameter dan mengembalikan true atau false.

```bash
const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find(num => num % 2 === 0);
// firstEvenNumber: 2
```

5. `some()`: Metode ini digunakan untuk memeriksa apakah setidaknya satu elemen dalam array lulus uji yang diberikan dalam bentuk fungsi. Fungsi ini akan menerima setiap elemen sebagai parameter dan mengembalikan `true` atau `false`.

```bash
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
// hasEvenNumber: true
```

6. `every()`: Metode ini digunakan untuk memeriksa apakah semua elemen dalam array lulus uji yang diberikan dalam bentuk fungsi. Fungsi ini akan menerima setiap elemen sebagai parameter dan mengembalikan `true` atau `false`.

```bash
const numbers = [2, 4, 6, 8];
const allEvenNumbers = numbers.every(num => num % 2 === 0);
// allEvenNumbers: true
```

7. `findIndex()`: Metode ini mirip dengan find(), tetapi mengembalikan indeks dari elemen pertama yang lulus uji.

```bash
const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex(num => num % 2 === 0);
// index: 1
```

8. `flatMap`: Metode ini digunakan untuk memetakan setiap elemen menggunakan fungsi yang diberikan, kemudian memampatkan hasilnya menjadi satu array dengan kedalaman satu.

```bash
const numbers = [1, 2, 3];
const doubledNumbers = numbers.flatMap(num => [num, num * 2]);
// doubledNumbers: [1, 2, 2, 4, 3, 6]
```

9. `sort()`: Metode ini digunakan untuk mengurutkan elemen dalam array berdasarkan yang diinginkan.

```bash
const numbers = [3, 2, 1];
numbers.sort((a, b) => b - a);
// numbers: [1, 2, 3]
```

10. `concat()`: Metode ini digunakan untuk menggabungkan dua atau lebih array.

```bash
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
// combinedArray: [1, 2, 3, 4, 5, 6]
```

11. `includes()`: Metode ini digunakan untuk memeriksa apakah sebuah elemen ditemukan dalam array.

```bash
const numbers = [1, 2, 3, 4, 5];
const isPresent = numbers.includes(3);
// isPresent: true
```

12. `join()`: Metode ini digunakan untuk menggabungkan semua elemen dalam array menjadi satu string.

```bash
const numbers = [1, 2, 3];
const string = numbers.join('-');
// string: '1-2-3'
```

13. `reverse()`: Metode ini digunakan untuk membalikkan urutan elemen dalam array.

```bash
const numbers = [1, 2, 3];
numbers.reverse();
// numbers: [3, 2, 1]
```

14. `slice()`: Metode ini digunakan untuk membagi array menjadi beberapa bagian dan index terakhir tidak terbawa.

```bash
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 3);
// slicedNumbers: [2, 3]
```

15. `indexOf()`: Metode ini digunakan untuk mencari indeks dari elemen yang diberikan.

```bash
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3);
// index: 2
```

16. `lastIndexOf()`: Metode ini digunakan untuk mencari indeks dari elemen terakhir yang diberikan.

```bash
const numbers = [1, 2, 3, 4, 5];
const index = numbers.lastIndexOf(3);
// index: 2
```

17. `splice()`: Metode ini digunakan untuk menghapus element array dan dapat menambahkan elemen baru.

```bash
const arr = [1, 2, 3];
const flattenedArr = arr.flatMap(x => [x, x * 2]);
// flattenedArr: [1, 2, 2, 4, 3, 6]
```

18. `flat()`: Metode ini digunakan untuk memetakan setiap elemen menggunakan fungsi yang diberikan, kemudian memampatkan hasilnya menjadi satu array.

```bash
const arr = [1, 2, 3];
const flattenedArr = arr.flatMap(x => [x, x * 2]);
// flattenedArr: [1, 2, 2, 4, 3, 6]
```
