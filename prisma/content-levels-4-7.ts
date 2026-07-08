import { MaterialData } from "../src/lib/content-types";

export const contentLevels4to7: MaterialData[] = [
  // ==================== LEVEL 4 - JAVASCRIPT ====================
  {
    level: 4,
    order: 1,
    title: "Variabel",
    slug: "js-variabel",
    description: "Mengenal variabel dalam JavaScript: cara deklarasi dengan let, const, dan var serta perbedaannya.",
    icon: "📦",
    isProject: false,
    content: `# Variabel dalam JavaScript

**Variabel** adalah wadah untuk menyimpan data. Di JavaScript, kamu bisa mendeklarasikan variabel dengan tiga kata kunci: \`var\`, \`let\`, dan \`const\`.

## Mendeklarasikan Variabel

\`\`\`javascript
// Menggunakan let - nilai bisa diubah
let nama = "Budi";
nama = "Andi"; // OK

// Menggunakan const - nilai tidak bisa diubah
const PI = 3.14;
// PI = 3.15; // Error!

// Menggunakan var (lama, hindari penggunaan)
var umur = 20;
\`\`\`

## Perbedaan let, const, dan var

| Keyword | Bisa diubah | Scope | Hoisting |
|---------|------------|-------|----------|
| let     | Ya         | Block | Tidak    |
| const   | Tidak      | Block | Tidak    |
| var     | Ya         | Function | Ya   |

## Aturan Penamaan

- Gunakan **camelCase**: \`namaDepan\`, \`totalHarga\`
- Tidak boleh diawali angka
- Bersifat **case-sensitive**: \`nama\` ≠ \`Nama\`
- Gunakan nama yang **deskriptif**

> **Best Practice:** Selalu gunakan \`const\` kecuali kamu tahu nilainya akan berubah, maka gunakan \`let\`. Hindari \`var\`.`,
    quiz: [
      {
        question: "Kata kunci manakah yang digunakan untuk variabel yang nilainya tidak boleh diubah?",
        options: ["let", "const", "var", "static"],
        answer: 1,
        explanation: "const digunakan untuk variabel yang nilainya konstan dan tidak bisa diubah setelah dideklarasikan."
      },
      {
        question: "Apa perbedaan utama antara let dan var?",
        options: [
          "let lebih cepat dari var",
          "let memiliki block scope, var memiliki function scope",
          "let hanya untuk angka, var untuk string",
          "Tidak ada perbedaan"
        ],
        answer: 1,
        explanation: "let dibatasi oleh block scope ({}), sedangkan var dibatasi oleh function scope."
      },
      {
        question: "Manakah penamaan variabel yang benar?",
        options: ["1nama", "nama-depan", "namaDepan", "class"],
        answer: 2,
        explanation: "namaDepan menggunakan camelCase dan tidak diawali angka. 'class' adalah reserved word, angka tidak boleh di awal, dan tanda hubung tidak diperbolehkan."
      }
    ]
  },
  {
    level: 4,
    order: 2,
    title: "Tipe Data",
    slug: "js-tipe-data",
    description: "Memahami tipe data primitive dan reference dalam JavaScript beserta cara mengeceknya.",
    icon: "🏷️",
    isProject: false,
    content: `# Tipe Data dalam JavaScript

JavaScript memiliki **dua kategori tipe data**: primitive (nilai) dan reference (objek). Memahami keduanya penting agar kamu bisa memanipulasi data dengan benar.

## Tipe Data Primitive

Tipe primitive disimpan **berdasarkan nilai**. JavaScript punya 7 tipe primitive:

\`\`\`javascript
let nama = "Budi";        // string
let umur = 25;            // number
let tinggi = 175.5;       // number (float juga number)
let aktif = true;         // boolean
let data = null;          // null (kosong sengaja)
let alamat;               // undefined (belum diisi)
let id = Symbol("id");    // symbol (unik)
let big = 9007199254740991n; // bigint
\`\`\`

## Tipe Data Reference

Tipe reference disimpan **berdasarkan referensi** (alamat memori):

\`\`\`javascript
let mhs = { nama: "Budi", umur: 20 }; // object
let buah = ["apel", "mangga"];        // array (tipe object)
let fungsi = function() { return 1; }; // function (tipe object)
\`\`\`

## Mengecek Tipe Data

Gunakan operator \`typeof\` untuk mengecek tipe data:

\`\`\`javascript
typeof "halo";    // "string"
typeof 42;        // "number"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object" ⚠️ (ini bug lama JavaScript!)
typeof {};        // "object"
typeof [];        // "object" (gunakan Array.isArray())
\`\`\`

> **Catatan:** \`typeof null\` mengembalikan "object" karena bug historis. Untuk mengecek null gunakan \`value === null\`.`,
    quiz: [
      {
        question: "Apa hasil dari typeof null di JavaScript?",
        options: ["null", "undefined", "object", "string"],
        answer: 2,
        explanation: "typeof null mengembalikan 'object' karena bug historis di JavaScript yang tidak pernah diperbaiki demi kompatibilitas."
      },
      {
        question: "Manakah yang termasuk tipe data primitive?",
        options: ["Array", "Object", "Number", "Function"],
        answer: 2,
        explanation: "Number adalah tipe primitive. Array, Object, dan Function adalah tipe reference (berbasis object)."
      },
      {
        question: "Apa perbedaan tipe primitive dan reference?",
        options: [
          "Primitive disimpan berdasarkan nilai, reference berdasarkan referensi",
          "Primitive lebih besar ukurannya",
          "Reference tidak bisa diubah",
          "Tidak ada perbedaan"
        ],
        answer: 0,
        explanation: "Tipe primitive disimpan berdasarkan nilai (copy nilai), sedangkan reference disimpan berdasarkan referensi (alamat memori)."
      }
    ]
  },
  {
    level: 4,
    order: 3,
    title: "Operator",
    slug: "js-operator",
    description: "Belajar berbagai operator di JavaScript: aritmatika, perbandingan, logika, dan assignment.",
    icon: "➕",
    isProject: false,
    content: `# Operator dalam JavaScript

**Operator** adalah simbol yang digunakan untuk melakukan operasi pada nilai dan variabel. JavaScript memiliki beberapa jenis operator yang penting untuk dipelajari.

## Operator Aritmatika

\`\`\`javascript
let a = 10, b = 3;

console.log(a + b);  // 13 (penjumlahan)
console.log(a - b);  // 7  (pengurangan)
console.log(a * b);  // 30 (perkalian)
console.log(a / b);  // 3.33 (pembagian)
console.log(a % b);  // 1  (sisa bagi / modulus)
console.log(a ** b); // 1000 (pangkat)
\`\`\`

## Operator Perbandingan

\`\`\`javascript
let x = 5, y = "5";

console.log(x == y);   // true  (loose, konversi tipe)
console.log(x === y);  // false (strict, cek tipe juga)
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 3);    // true
console.log(x <= 5);   // true
\`\`\`

## Operator Logika

\`\`\`javascript
let isAdmin = true;
let isLoggedIn = false;

console.log(isAdmin && isLoggedIn); // false (AND)
console.log(isAdmin || isLoggedIn); // true  (OR)
console.log(!isAdmin);              // false (NOT)
\`\`\`

## Operator Assignment

\`\`\`javascript
let nilai = 10;
nilai += 5;  // nilai = nilai + 5 = 15
nilai -= 3;  // 12
nilai *= 2;  // 24
nilai++;     // 25 (increment)
nilai--;     // 24 (decrement)
\`\`\`

> **Best Practice:** Selalu gunakan \`===\` (strict equality) daripada \`==\` untuk menghindari bug karena konversi tipe yang tidak terduga.`,
    quiz: [
      {
        question: "Apa hasil dari 10 % 3 di JavaScript?",
        options: ["3", "1", "3.33", "0"],
        answer: 1,
        explanation: "Operator % adalah modulus (sisa bagi). 10 dibagi 3 = 3 sisa 1, jadi hasilnya 1."
      },
      {
        question: "Apa perbedaan antara == dan ===?",
        options: [
          "Tidak ada perbedaan",
          "== selalu true, === cek nilai",
          "=== cek nilai dan tipe, == hanya nilai",
          "=== hanya untuk angka"
        ],
        answer: 2,
        explanation: "=== (strict equality) memeriksa nilai DAN tipe data, sedangkan == (loose equality) melakukan konversi tipe sebelum membandingkan."
      },
      {
        question: "Apa hasil dari true && false?",
        options: ["true", "false", "null", "undefined"],
        answer: 1,
        explanation: "Operator && (AND) mengembalikan true hanya jika kedua operand true. Karena salah satu false, hasilnya false."
      }
    ]
  },
  {
    level: 4,
    order: 4,
    title: "If Else",
    slug: "js-if-else",
    description: "Mengenal struktur percabangan if, else if, else, ternary operator, dan switch statement.",
    icon: "🔀",
    isProject: false,
    content: `# Percabangan If Else

**Percabangan** membuat program bisa mengambil keputusan berdasarkan kondisi tertentu. JavaScript menyediakan \`if...else\`, ternary operator, dan \`switch\`.

## If, Else If, Else

\`\`\`javascript
let nilai = 85;

if (nilai >= 90) {
  console.log("Grade A");
} else if (nilai >= 80) {
  console.log("Grade B");
} else if (nilai >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}
// Output: Grade B
\`\`\`

## Ternary Operator

Operator ternary adalah cara singkat untuk if-else sederhana:

\`\`\`javascript
let umur = 20;
let status = umur >= 17 ? "Dewasa" : "Anak-anak";
console.log(status); // "Dewasa"

// Bisa juga nested (tapi hindari agar tidak sulit dibaca)
let hasil = nilai >= 75 ? "Lulus" : nilai >= 50 ? "Remedial" : "Gagal";
\`\`\`

## Switch Statement

\`switch\` cocok untuk mengecek satu variabel terhadap banyak nilai:

\`\`\`javascript
let hari = "Senin";

switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Weekend");
    break;
  default:
    console.log("Hari tidak valid");
}
\`\`\`

> **Penting:** Jangan lupa \`break\` di setiap case, jika tidak, eksekusi akan lanjut ke case berikutnya (fall-through).`,
    quiz: [
      {
        question: "Apa kegunaan keyword break dalam switch statement?",
        options: [
          "Menghentikan program",
          "Keluar dari case dan switch",
          "Melanjutkan ke case berikutnya",
          "Mengulang switch"
        ],
        answer: 1,
        explanation: "break menghentikan eksekusi dan keluar dari switch. Tanpa break, eksekusi akan lanjut ke case berikutnya (fall-through)."
      },
      {
        question: "Manakah penulisan ternary operator yang benar?",
        options: [
          "if x > 5 ? 'besar' : 'kecil'",
          "x > 5 ? 'besar' : 'kecil'",
          "x > 5 : 'besar' ? 'kecil'",
          "x > 5 and 'besar' or 'kecil'"
        ],
        answer: 1,
        explanation: "Sintaks ternary: kondisi ? nilai_jika_true : nilai_jika_false."
      },
      {
        question: "Blok else akan dieksekusi ketika...",
        options: [
          "Kondisi if bernilai true",
          "Semua kondisi if dan else if bernilai false",
          "Selalu dieksekusi",
          "Hanya jika ada else if"
        ],
        answer: 1,
        explanation: "Blok else dieksekusi sebagai fallback ketika semua kondisi if dan else if sebelumnya bernilai false."
      }
    ]
  },
  {
    level: 4,
    order: 5,
    title: "Loop",
    slug: "js-loop",
    description: "Memahami berbagai jenis perulangan: for, while, do-while, for...of, dan for...in.",
    icon: "🔁",
    isProject: false,
    content: `# Perulangan (Loop) dalam JavaScript

**Loop** digunakan untuk menjalankan kode berulang kali. JavaScript menyediakan beberapa jenis loop yang cocok untuk situasi berbeda.

## For Loop

\`\`\`javascript
// Loop dari 0 sampai 4
for (let i = 0; i < 5; i++) {
  console.log("Iterasi ke-" + i);
}
\`\`\`

## While dan Do-While

\`\`\`javascript
// while - cek dulu, baru jalankan
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do-while - jalankan dulu, baru cek
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
// do-while minimal dijalankan 1 kali
\`\`\`

## For...of dan For...in

\`\`\`javascript
// for...of - iterasi nilai array
let buah = ["apel", "mangga", "jeruk"];
for (let item of buah) {
  console.log(item);
}

// for...in - iterasi key/property object
let mhs = { nama: "Budi", umur: 20 };
for (let key in mhs) {
  console.log(key + ": " + mhs[key]);
}
\`\`\`

## Break dan Continue

\`\`\`javascript
// break - menghentikan loop sepenuhnya
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0-4
}

// continue - lewati iterasi ini
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0,1,3,4
}
\`\`\`

> **Tips:** Untuk iterasi array, \`for...of\` lebih disarankan. Untuk object, gunakan \`for...in\` atau \`Object.keys()\`.`,
    quiz: [
      {
        question: "Apa perbedaan while dan do-while?",
        options: [
          "Tidak ada perbedaan",
          "do-while minimal dijalankan 1 kali, while bisa 0 kali",
          "while lebih cepat",
          "do-while hanya untuk angka"
        ],
        answer: 1,
        explanation: "do-while menjalankan blok kode dulu baru cek kondisi, sehingga minimal dieksekusi 1 kali. while cek kondisi dulu."
      },
      {
        question: "Loop manakah yang paling cocok untuk iterasi nilai array?",
        options: ["for...in", "for...of", "while", "do-while"],
        answer: 1,
        explanation: "for...of mengiterasi nilai array secara langsung. for...in mengiterasi index/key yang bisa bermasalah dengan array."
      },
      {
        question: "Apa fungsi keyword continue dalam loop?",
        options: [
          "Menghentikan loop sepenuhnya",
          "Melompat ke iterasi berikutnya",
          "Mengulang iterasi saat ini",
          "Mempercepat loop"
        ],
        answer: 1,
        explanation: "continue melewati sisa kode di iterasi saat ini dan lanjut ke iterasi berikutnya."
      }
    ]
  },
  {
    level: 4,
    order: 6,
    title: "Function",
    slug: "js-function",
    description: "Belajar function declaration, expression, arrow function, parameter, dan return value.",
    icon: "🔧",
    isProject: false,
    content: `# Function dalam JavaScript

**Function** adalah blok kode reusable yang melakukan tugas tertentu. Function membantu mengorganisir kode dan menghindari重复 penulisan.

## Mendeklarasikan Function

\`\`\`javascript
// Function Declaration
function sapa(nama) {
  return "Halo, " + nama + "!";
}
console.log(sapa("Budi")); // "Halo, Budi!"

// Function Expression
const tambah = function(a, b) {
  return a + b;
};

// Arrow Function (ES6)
const kali = (a, b) => a * b;
console.log(kali(3, 4)); // 12
\`\`\`

## Parameter dan Default Value

\`\`\`javascript
function buatEmail(nama, domain = "gmail.com") {
  return nama + "@" + domain;
}
console.log(buatEmail("budi"));           // budi@gmail.com
console.log(buatEmail("andi", "yahoo.com")); // andi@yahoo.com
\`\`\`

## Rest Parameters dan Spread

\`\`\`javascript
// Rest parameter - kumpulkan sisa argumen jadi array
function jumlahkan(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
console.log(jumlahkan(1, 2, 3, 4)); // 10

// Spread operator - pecah array jadi argumen terpisah
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]
\`\`\`

## Arrow Function vs Regular Function

Perbedaan utama: arrow function tidak punya \`this\` sendiri (mewarisi dari scope luar).

\`\`\`javascript
// Arrow function cocok untuk callback pendek
const ganjil = (n) => n % 2 !== 0;
const arr = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
\`\`\`

> **Best Practice:** Gunakan arrow function untuk callback dan function pendek. Gunakan regular function untuk method object atau ketika butuh \`this\`.`,
    quiz: [
      {
        question: "Apa kegunaan keyword return dalam function?",
        options: [
          "Menghentikan program",
          "Mengembalikan nilai dari function",
          "Mengulang function",
          "Mencetak ke console"
        ],
        answer: 1,
        explanation: "return mengembalikan nilai dari function dan menghentikan eksekusi function tersebut."
      },
      {
        question: "Apa perbedaan utama arrow function dengan regular function?",
        options: [
          "Arrow function lebih cepat",
          "Arrow function tidak punya this sendiri",
          "Arrow function hanya untuk angka",
          "Arrow function tidak bisa punya parameter"
        ],
        answer: 1,
        explanation: "Arrow function tidak memiliki this sendiri, melainkan mewarisi this dari scope luar (lexical this)."
      },
      {
        question: "Apa fungsi rest parameter (...args)?",
        options: [
          "Menghapus parameter",
          "Mengumpulkan sisa argumen menjadi array",
          "Membuat parameter wajib",
          "Mengulang parameter"
        ],
        answer: 1,
        explanation: "Rest parameter (...args) mengumpulkan argumen yang tersisa menjadi sebuah array, cocok untuk function dengan jumlah argumen variabel."
      }
    ]
  },
  {
    level: 4,
    order: 7,
    title: "Array",
    slug: "js-array",
    description: "Mengenal array dan method penting: push, pop, map, filter, reduce, forEach, dan lainnya.",
    icon: "📚",
    isProject: false,
    content: `# Array dalam JavaScript

**Array** adalah struktur data untuk menyimpan kumpulan nilai dalam satu variabel. JavaScript menyediakan banyak method bawaan untuk memanipulasi array.

## Membuat dan Mengakses Array

\`\`\`javascript
let buah = ["apel", "mangga", "jeruk"];
console.log(buah[0]);      // "apel" (index mulai dari 0)
console.log(buah.length);  // 3

buah[3] = "anggur";        // tambah elemen
\`\`\`

## Method Dasar

\`\`\`javascript
let arr = [1, 2, 3];

arr.push(4);        // [1,2,3,4] - tambah di akhir
arr.pop();          // [1,2,3] - hapus dari akhir
arr.unshift(0);     // [0,1,2,3] - tambah di awal
arr.shift();        // [1,2,3] - hapus dari awal
arr.indexOf(2);     // 1 - cari index
arr.includes(2);    // true - cek keberadaan
\`\`\`

## Method Fungsional (Higher-Order)

Method ini sangat powerful untuk transformasi data:

\`\`\`javascript
const angka = [1, 2, 3, 4, 5];

// map - ubah setiap elemen
const kali2 = angka.map(n => n * 2); // [2,4,6,8,10]

// filter - saring berdasarkan kondisi
const genap = angka.filter(n => n % 2 === 0); // [2,4]

// reduce - gabungkan jadi satu nilai
const total = angka.reduce((acc, n) => acc + n, 0); // 15

// forEach - iterasi tanpa return
angka.forEach(n => console.log(n));

// find - cari elemen pertama yang cocok
const pertama = angka.find(n => n > 3); // 4
\`\`\`

## Destructuring dan Spread

\`\`\`javascript
const [a, b, c] = [1, 2, 3]; // a=1, b=2, c=3
const [first, ...rest] = [1, 2, 3, 4]; // first=1, rest=[2,3,4]
const gabung = [...arr1, ...arr2]; // gabungkan array
\`\`\`

> **Best Practice:** Gunakan \`map\`, \`filter\`, \`reduce\` untuk manipulasi data—lebih deklaratif dan mudah dibaca dibanding loop tradisional.`,
    quiz: [
      {
        question: "Method manakah yang menambah elemen di akhir array?",
        options: ["push", "pop", "shift", "unshift"],
        answer: 0,
        explanation: "push menambah elemen di akhir array. pop menghapus dari akhir, unshift menambah di awal, shift menghapus dari awal."
      },
      {
        question: "Apa hasil dari [1,2,3].map(n => n * 2)?",
        options: ["[1,2,3]", "[2,4,6]", "6", "[1,1,1]"],
        answer: 1,
        explanation: "map mengubah setiap elemen dengan function yang diberikan. 1*2=2, 2*2=4, 3*2=6, jadi hasilnya [2,4,6]."
      },
      {
        question: "Apa fungsi method reduce?",
        options: [
          "Menyaring elemen array",
          "Menggabungkan elemen array menjadi satu nilai",
          "Mengurutkan array",
          "Menghapus elemen"
        ],
        answer: 1,
        explanation: "reduce menggabungkan semua elemen array menjadi satu nilai tunggal (seperti total penjumlahan, produk, dll)."
      }
    ]
  },
  {
    level: 4,
    order: 8,
    title: "Object",
    slug: "js-object",
    description: "Memahami object: property, method, this, destructuring, dan spread operator.",
    icon: "🎁",
    isProject: false,
    content: `# Object dalam JavaScript

**Object** adalah struktur data yang menyimpan pasangan **key-value**. Object sangat penting untuk merepresentasikan entitas dunia nyata dalam kode.

## Membuat dan Mengakses Object

\`\`\`javascript
let mhs = {
  nama: "Budi Santoso",
  umur: 20,
  aktif: true,
  hobi: ["coding", "gaming"]
};

// Akses property (2 cara)
console.log(mhs.nama);      // dot notation
console.log(mhs["umur"]);   // bracket notation
\`\`\`

## Method dalam Object

\`\`\`javascript
let kalkulator = {
  hasil: 0,
  tambah(a, b) {
    return a + b;
  },
  kali(a, b) {
    return a * b;
  }
};

console.log(kalkulator.tambah(2, 3)); // 5
\`\`\`

## Keyword \`this\`

\`this\` merujuk ke object tempat method dipanggil:

\`\`\`javascript
let user = {
  nama: "Andi",
  sapa() {
    return "Halo, saya " + this.nama;
  }
};
console.log(user.sapa()); // "Halo, saya Andi"
\`\`\`

## Destructuring dan Spread

\`\`\`javascript
// Destructuring
const { nama, umur } = mhs;
console.log(nama); // "Budi Santoso"

// Rename saat destructuring
const { nama: namaLengkap } = mhs;

// Spread (copy object)
const mhsBaru = { ...mhs, jurusan: "TI" };
\`\`\`

## Optional Chaining

\`\`\`javascript
let data = { user: { nama: "Budi" } };
console.log(data?.user?.nama);    // "Budi"
console.log(data?.profile?.nama); // undefined (tidak error)
\`\`\`

> **Best Practice:** Gunakan object untuk mengelompokkan data terkait. Manfaatkan destructuring dan optional chaining untuk kode yang lebih bersih.`,
    quiz: [
      {
        question: "Bagaimana cara mengakses property object menggunakan bracket notation?",
        options: [
          "object.property",
          "object[property]",
          "object->property",
          "object::property"
        ],
        answer: 1,
        explanation: "Bracket notation menggunakan object['property']. Berguna saat key dinamis atau mengandung karakter khusus."
      },
      {
        question: "Apa yang dirujuk oleh keyword this dalam method object?",
        options: [
          "Window global",
          "Object tempat method dipanggil",
          "Function itu sendiri",
          "undefined"
        ],
        answer: 1,
        explanation: "Dalam regular function/method, this merujuk ke object tempat method tersebut dipanggil."
      },
      {
        question: "Apa fungsi optional chaining (?.)?",
        options: [
          "Memaksa property ada",
          "Mengakses property aman tanpa error jika undefined/null",
          "Membuat property optional",
          "Menghapus property"
        ],
        answer: 1,
        explanation: "Optional chaining (?.) mengakses property dengan aman—mengembalikan undefined jika ada yang null/undefined, tanpa error."
      }
    ]
  },
  {
    level: 4,
    order: 9,
    title: "DOM",
    slug: "js-dom",
    description: "Mengenal Document Object Model: cara memanipulasi elemen HTML dengan JavaScript.",
    icon: "🌳",
    isProject: false,
    content: `# DOM (Document Object Model)

**DOM** adalah representasi struktur halaman web sebagai object yang bisa dimanipulasi dengan JavaScript. Dengan DOM, kamu bisa mengubah konten, style, dan struktur HTML secara dinamis.

## Mengakses Elemen

\`\`\`javascript
// Berdasarkan ID (kembalikan 1 elemen)
const judul = document.getElementById("judul");

// Berdasarkan selector CSS
const tombol = document.querySelector(".tombol");
const item = document.querySelectorAll("li"); // NodeList
\`\`\`

## Mengubah Konten dan Style

\`\`\`javascript
const el = document.getElementById("pesan");

// Ubah teks
el.textContent = "Halo Dunia!";

// Ubah HTML
el.innerHTML = "<strong>Tebal</strong>";

// Ubah style
el.style.color = "blue";
el.style.fontSize = "20px";

// Tambah/hapus class
el.classList.add("aktif");
el.classList.remove("aktif");
el.classList.toggle("aktif");
\`\`\`

## Membuat dan Menambah Elemen

\`\`\`javascript
// Buat elemen baru
const paragraf = document.createElement("p");
paragraf.textContent = "Paragraf baru";
paragraf.classList.add("intro");

// Tambahkan ke DOM
document.body.appendChild(paragraf);

// Sisipkan sebelum elemen lain
const container = document.getElementById("container");
container.insertBefore(paragraf, container.firstChild);
\`\`\`

## Menghapus Elemen

\`\`\`javascript
const el = document.getElementById("lama");
el.remove(); // hapus elemen
\`\`\`

## Mengubah Atribut

\`\`\`javascript
const link = document.querySelector("a");
link.setAttribute("href", "https://google.com");
link.getAttribute("href");
link.removeAttribute("target");
\`\`\`

> **Tips:** Gunakan \`querySelector\` dan \`querySelectorAll\` karena lebih fleksibel—bisa pakai selector CSS apa pun.`,
    quiz: [
      {
        question: "Method manakah yang mengembalikan elemen pertama yang cocok dengan selector CSS?",
        options: ["getElementById", "querySelector", "getElementsByClassName", "querySelectorAll"],
        answer: 1,
        explanation: "querySelector mengembalikan elemen pertama yang cocok dengan selector CSS. querySelectorAll mengembalikan semua elemen yang cocok."
      },
      {
        question: "Apa perbedaan textContent dan innerHTML?",
        options: [
          "Tidak ada perbedaan",
          "textContent hanya teks, innerHTML bisa HTML tag",
          "innerHTML lebih cepat",
          "textContent untuk input"
        ],
        answer: 1,
        explanation: "textContent hanya mengatur teks biasa (HTML tag akan ditampilkan sebagai teks). innerHTML memparse HTML, jadi tag akan dirender."
      },
      {
        question: "Method apa untuk menambah elemen sebagai child terakhir?",
        options: ["appendBefore", "appendChild", "addChild", "insertLast"],
        answer: 1,
        explanation: "appendChild menambahkan elemen sebagai child terakhir dari parent. insertBefore untuk menyisipkan di posisi tertentu."
      }
    ]
  },
  {
    level: 4,
    order: 10,
    title: "Event",
    slug: "js-event",
    description: "Belajar menangani event: click, submit, input, dan event object dengan addEventListener.",
    icon: "⚡",
    isProject: false,
    content: `# Event dalam JavaScript

**Event** adalah kejadian yang terjadi di halaman web—klik tombol, ketik keyboard, submit form, dll. JavaScript bisa merespons event dengan \`addEventListener\`.

## addEventListener

\`\`\`javascript
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function() {
  alert("Tombol diklik!");
});

// Arrow function juga bisa
tombol.addEventListener("click", () => console.log("Klik!"));
\`\`\`

## Jenis Event Umum

\`\`\`javascript
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log("Key ditekan: " + e.key);
});

// Form events
form.addEventListener("submit", (e) => {
  e.preventDefault(); // cegah reload
  console.log("Form disubmit");
});

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
\`\`\`

## Event Object

Handler menerima **event object** dengan info kejadian:

\`\`\`javascript
tombol.addEventListener("click", (event) => {
  console.log(event.type);      // "click"
  console.log(event.target);    // elemen yang diklik
  console.log(event.clientX);   // koordinat X mouse
  event.preventDefault();       // cegah aksi default
  event.stopPropagation();      // cegah event bubbling
});
\`\`\`

## Event Delegation

Manfaatkan **event bubbling** untuk handle banyak elemen dengan satu listener:

\`\`\`javascript
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Klik item: " + e.target.textContent);
  }
});
\`\`\`

## Menghapus Event Listener

\`\`\`javascript
function handler() { console.log("halo"); }
tombol.addEventListener("click", handler);
tombol.removeEventListener("click", handler); // harus function yang sama
\`\`\`

> **Best Practice:** Gunakan event delegation untuk list dinamis—lebih efisien daripada pasang listener di setiap item.`,
    quiz: [
      {
        question: "Apa fungsi event.preventDefault()?",
        options: [
          "Menghentikan event",
          "Mencegah aksi default elemen (seperti reload form)",
          "Menghapus elemen",
          "Mempercepat event"
        ],
        answer: 1,
        explanation: "preventDefault mencegah aksi default browser, misalnya mencegah form submit yang biasanya me-reload halaman."
      },
      {
        question: "Apa itu event delegation?",
        options: [
          "Menyerahkan event ke server",
          "Pasang satu listener di parent untuk handle child",
          "Menghapus semua event",
          "Event yang hanya untuk admin"
        ],
        answer: 1,
        explanation: "Event delegation memanfaatkan event bubbling—pasang satu listener di parent untuk menangani event dari child elements."
      },
      {
        question: "Property apa untuk mendapatkan nilai input saat event input?",
        options: ["event.value", "event.target.value", "event.input", "event.data"],
        answer: 1,
        explanation: "event.target merujuk ke elemen yang memicu event, dan .value berisi nilai input saat ini."
      }
    ]
  },
  {
    level: 4,
    order: 11,
    title: "Fetch API",
    slug: "js-fetch-api",
    description: "Mengambil data dari server dengan Fetch API menggunakan then-catch dan async-await.",
    icon: "📡",
    isProject: false,
    content: `# Fetch API

**Fetch API** adalah interface modern JavaScript untuk melakukan HTTP request ke server. Fetch mengembalikan **Promise**, sehingga mendukung \`then/catch\` dan \`async/await\`.

## Fetch Dasar (then-catch)

\`\`\`javascript
fetch("https://api.example.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }
    return response.json(); // parse JSON
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
\`\`\`

## Async/Await (lebih bersih)

\`\`\`javascript
async function ambilUser() {
  try {
    const response = await fetch("https://api.example.com/users");
    if (!response.ok) throw new Error("Gagal: " + response.status);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
ambilUser();
\`\`\`

## POST Request (Kirim Data)

\`\`\`javascript
async function tambahUser() {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nama: "Budi",
      email: "budi@mail.com"
    })
  });
  const data = await response.json();
  console.log(data);
}
\`\`\`

## Konfigurasi Fetch

\`\`\`javascript
fetch(url, {
  method: "POST",            // GET, POST, PUT, DELETE
  headers: { ... },          // header HTTP
  body: JSON.stringify(data),// data untuk POST/PUT
  mode: "cors",              // mode request
  credentials: "include"     // kirim cookie
});
\`\`\`

## Response Methods

\`\`\`javascript
response.json();   // parse sebagai JSON
response.text();   // ambil sebagai teks
response.blob();   // untuk file/binary
response.status;   // kode HTTP (200, 404, dll)
response.ok;       // true jika status 200-299
\`\`\`

> **Best Practice:** Selalu cek \`response.ok\` sebelum parsing, dan gunakan \`try/catch\` dengan async/await untuk error handling yang bersih.`,
    quiz: [
      {
        question: "Apa yang dikembalikan oleh fetch()?",
        options: ["Object data", "Promise", "JSON", "String"],
        answer: 1,
        explanation: "fetch() mengembalikan Promise yang resolve ke Response object. Untuk mendapatkan data, perlu .json() atau .text()."
      },
      {
        question: "Method apa untuk mengirim data dengan POST request?",
        options: ["method: 'GET'", "method: 'POST' dengan body", "type: 'POST'", "send: 'data'"],
        answer: 1,
        explanation: "Untuk POST, set method: 'POST' dan sertakan body berisi data (biasanya JSON.stringify)."
      },
      {
        question: "Property apa untuk mengecek apakah request berhasil (status 200-299)?",
        options: ["response.success", "response.ok", "response.done", "response.status === true"],
        answer: 1,
        explanation: "response.ok bernilai true jika status HTTP antara 200-299 (sukses). Cek ini sebelum parsing data."
      }
    ]
  },
  {
    level: 4,
    order: 12,
    title: "Project: To-Do List",
    slug: "project-todo-list",
    description: "Bangun aplikasi To-Do List interaktif dengan JavaScript yang menyimpan data ke localStorage.",
    icon: "✅",
    isProject: true,
    content: `# Project: To-Do List

Pada project ini, kamu akan membangun **aplikasi To-Do List** lengkap menggunakan HTML, CSS, dan JavaScript. Aplikasi ini menggabungkan semua konsep yang telah dipelajari di Level 4.

## Fitur yang Dibangun

- **Tambah tugas** baru melalui input form
- **Tandai selesai** dengan checkbox (strikethrough)
- **Hapus tugas** dengan tombol
- **Filter** tugas: semua / aktif / selesai
- **Edit tugas** secara inline
- **Simpan ke localStorage** agar data tetap ada setelah refresh
- **Hitung jumlah tugas** aktif

## Struktur HTML

\`\`\`html
<div id="app">
  <h1>To-Do List</h1>
  <form id="form-tugas">
    <input type="text" id="input-tugas" placeholder="Tambah tugas..." required>
    <button type="submit">Tambah</button>
  </form>
  <div id="filter">
    <button data-filter="all">Semua</button>
    <button data-filter="active">Aktif</button>
    <button data-filter="done">Selesai</button>
  </div>
  <ul id="list-tugas"></ul>
  <p id="jumlah-tugas"></p>
</div>
\`\`\`

## Logika JavaScript Utama

\`\`\`javascript
let tugas = JSON.parse(localStorage.getItem("tugas")) || [];

function simpan() {
  localStorage.setItem("tugas", JSON.stringify(tugas));
}

function render(filter = "all") {
  const list = document.getElementById("list-tugas");
  list.innerHTML = "";
  const filtered = tugas.filter(t => {
    if (filter === "active") return !t.selesai;
    if (filter === "done") return t.selesai;
    return true;
  });
  filtered.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = \`
      <input type="checkbox" \${t.selesai ? "checked" : ""}>
      <span>\${t.teks}</span>
      <button class="hapus">Hapus</button>
    \`;
    li.querySelector("input").addEventListener("change", () => {
      t.selesai = !t.selesai;
      simpan(); render(filter);
    });
    li.querySelector(".hapus").addEventListener("click", () => {
      tugas.splice(tugas.indexOf(t), 1);
      simpan(); render(filter);
    });
    list.appendChild(li);
  });
}

document.getElementById("form-tugas").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("input-tugas");
  tugas.push({ teks: input.value, selesai: false });
  input.value = "";
  simpan(); render();
});
render();
\`\`\`

## Langkah Implementasi

1. **Buat struktur HTML** dengan form input, filter buttons, dan list kosong
2. **Styling CSS** agar tampil menarik (gunakan flexbox)
3. **Inisialisasi data** dari localStorage
4. **Buat function render()** untuk menampilkan list tugas
5. **Tambah event listener** untuk submit form (tambah tugas)
6. **Implementasi checkbox** untuk toggle selesai
7. **Implementasi tombol hapus** untuk menghapus tugas
8. **Implementasi filter** dengan event delegation
9. **Simpan ke localStorage** setiap perubahan
10. **Tambah edit inline** (bonus)

## Tantangan Tambahan

- Tambah **due date** untuk setiap tugas
- Tambah **prioritas** (tinggi/sedang/rendah)
- **Drag and drop** untuk reorder
- **Export/import** tugas sebagai JSON
- **Dark mode** toggle`,
    quiz: [
      {
        question: "API apa yang digunakan untuk menyimpan data permanen di browser?",
        options: ["sessionStorage", "localStorage", "cookies", "cache"],
        answer: 1,
        explanation: "localStorage menyimpan data permanen di browser tanpa expiry. Data tetap ada walau browser ditutup."
      },
      {
        question: "Mengapa kita perlu JSON.stringify dan JSON.parse saat menyimpan object ke localStorage?",
        options: [
          "localStorage butuh JSON",
          "localStorage hanya bisa menyimpan string",
          "Agar lebih cepat",
          "Tidak perlu, bisa langsung simpan object"
        ],
        answer: 1,
        explanation: "localStorage hanya bisa menyimpan string. JSON.stringify mengubah object jadi string, JSON.parse mengubah kembali jadi object."
      },
      {
        question: "Pada project To-Do List, kapan function simpan() dipanggil?",
        options: [
          "Hanya saat tambah tugas",
          "Setiap kali data tugas berubah",
          "Saat halaman dimuat",
          "Tidak perlu dipanggil"
        ],
        answer: 1,
        explanation: "simpan() harus dipanggil setiap kali data tugas berubah (tambah, hapus, toggle selesai) agar localStorage selalu sinkron."
      }
    ]
  },

  // ==================== LEVEL 5 - BACKEND (NODE.JS) ====================
  {
    level: 5,
    order: 1,
    title: "Pengenalan Node.js",
    slug: "pengenalan-nodejs",
    description: "Mengenal Node.js: runtime JavaScript di luar browser, event loop, dan cara kerjanya.",
    icon: "🟢",
    isProject: false,
    content: `# Pengenalan Node.js

**Node.js** adalah runtime JavaScript yang memungkinkan kita menjalankan JavaScript di server (di luar browser). Node.js dibangun di atas **V8 engine** (engine Chrome) dan menggunakan **event-driven, non-blocking I/O**.

## Mengapa Node.js?

- **Single language**: gunakan JavaScript untuk frontend dan backend
- **Cepat**: berkat V8 engine dan non-blocking I/O
- **NPM**: ekosistem package terbesar
- **Real-time**: cocok untuk aplikasi chat, game, streaming

## Instalasi dan Cek Versi

\`\`\`bash
# Cek versi Node.js
node --version
# v20.x.x

# Cek versi NPM
npm --version
# 10.x.x
\`\`\`

## Hello World di Node.js

Buat file \`app.js\`:

\`\`\`javascript
console.log("Halo dari Node.js!");

// Server sederhana
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Halo Dunia!");
});
server.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
\`\`\`

Jalankan dengan:

\`\`\`bash
node app.js
\`\`\`

## Module System (CommonJS vs ES Modules)

\`\`\`javascript
// CommonJS (default)
const fs = require("fs");
module.exports = { fungsi };

// ES Modules (modern)
import fs from "fs";
export const fungsi = () => {};
\`\`\`

## Event Loop dan Non-blocking

Node.js single-threaded tapi asynchronous. Operasi I/O (file, network) tidak blocking:

\`\`\`javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2 (async tidak blocking)
\`\`\`

## Global Object di Node.js

- \`__dirname\`: path folder file saat ini
- \`__filename\`: path file saat ini
- \`process\`: info proses Node
- \`require()\`: import module
- \`module\`: info module

> **Best Practice:** Gunakan Node.js untuk aplikasi I/O-heavy (API, real-time). Hindari untuk CPU-intensive task (gambar processing berat).`,
    quiz: [
      {
        question: "Apa engine yang menjadi dasar Node.js?",
        options: ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"],
        answer: 1,
        explanation: "Node.js dibangun di atas V8 engine buatan Google (juga digunakan di Chrome)."
      },
      {
        question: "Apa keunggulan utama model I/O Node.js?",
        options: [
          "Multi-threaded",
          "Blocking I/O",
          "Non-blocking I/O (asynchronous)",
          "Hanya untuk Windows"
        ],
        answer: 2,
        explanation: "Node.js menggunakan non-blocking I/O yang asynchronous, sehingga efisien menangani banyak koneksi concurrent."
      },
      {
        question: "Module system manakah yang menggunakan require() dan module.exports?",
        options: ["ES Modules", "CommonJS", "AMD", "UMD"],
        answer: 1,
        explanation: "CommonJS menggunakan require() untuk import dan module.exports untuk export. ES Modules menggunakan import/export."
      }
    ]
  },
  {
    level: 5,
    order: 2,
    title: "NPM",
    slug: "npm",
    description: "Mengenal NPM (Node Package Manager): install package, package.json, scripts, dan dependencies.",
    icon: "📦",
    isProject: false,
    content: `# NPM (Node Package Manager)

**NPM** adalah package manager untuk Node.js. Dengan NPM, kamu bisa menginstal ribuan package open-source dan mengelola dependencies project.

## Inisialisasi Project

\`\`\`bash
# Buat package.json (jawab pertanyaan atau pakai flag -y)
npm init -y
\`\`\`

File \`package.json\` berisi metadata project dan daftar dependencies.

## Menginstal Package

\`\`\`bash
# Install package (production dependency)
npm install express

# Install sebagai dev dependency
npm install --save-dev nodemon

# Install global (bisa diakses di mana saja)
npm install -g nodemon

# Install versi spesifik
npm install express@4.18.0
\`\`\`

## Struktur package.json

\`\`\`json
{
  "name": "aplikasi-saya",
  "version": "1.0.0",
  "description": "Belajar NPM",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
\`\`\`

## NPM Scripts

\`\`\`bash
npm run start    # jalankan script "start"
npm run dev      # jalankan script "dev"
npm start        # shortcut untuk "start"
\`\`\`

## dependencies vs devDependencies

- **dependencies**: package yang dibutuhkan saat production (express, mongoose)
- **devDependencies**: package hanya untuk development (nodemon, jest, eslint)

## Versioning (SemVer)

Format: \`MAJOR.MINOR.PATCH\`

- \`^4.18.0\`: update MINOR dan PATCH (4.x.x)
- \`~4.18.0\`: update PATCH saja (4.18.x)
- \`4.18.0\`: lock ke versi exact

## Perintah Berguna

\`\`\`bash
npm list                # lihat installed packages
npm outdated            # cek package outdated
npm update              # update package
npm uninstall express   # hapus package
npm install             # install semua dari package.json
\`\`\`

> **Best Practice:** Selalu commit \`package.json\` dan \`package-lock.json\`, tapi jangan commit folder \`node_modules\` (tambahkan ke .gitignore).`,
    quiz: [
      {
        question: "Apa fungsi file package.json?",
        options: [
          "Menyimpan kode aplikasi",
          "Metadata project dan daftar dependencies",
          "Konfigurasi database",
          "Menyimpan data user"
        ],
        answer: 1,
        explanation: "package.json berisi metadata project (nama, versi) dan daftar dependencies yang dibutuhkan project."
      },
      {
        question: "Apa perbedaan dependencies dan devDependencies?",
        options: [
          "dependencies untuk server, devDependencies untuk client",
          "dependencies untuk production, devDependencies hanya untuk development",
          "Tidak ada perbedaan",
          "devDependencies lebih besar"
        ],
        answer: 1,
        explanation: "dependencies dibutuhkan di production. devDependencies hanya untuk development (testing, linting, hot reload)."
      },
      {
        question: "Apa arti simbol ^ di depan versi package (^4.18.0)?",
        options: [
          "Lock ke versi exact",
          "Boleh update MINOR dan PATCH",
          "Boleh update MAJOR",
          "Versi beta"
        ],
        answer: 1,
        explanation: "Caret (^) memperbolehkan update MINOR dan PATCH (4.x.x) tapi tidak MAJOR, untuk hindari breaking changes."
      }
    ]
  },
  {
    level: 5,
    order: 3,
    title: "Express.js",
    slug: "expressjs",
    description: "Mengenal framework Express.js: setup server, middleware, routing dasar, dan struktur aplikasi.",
    icon: "🚂",
    isProject: false,
    content: `# Express.js

**Express.js** adalah framework web minimalis dan fleksibel untuk Node.js. Express memudahkan pembuatan API dan web server dengan routing, middleware, dan helper HTTP.

## Instalasi dan Setup

\`\`\`bash
mkdir aplikasi-saya
cd aplikasi-saya
npm init -y
npm install express
\`\`\`

## Hello World Server

\`\`\`javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware parse JSON body
app.use(express.json());

// Route GET /
app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.listen(PORT, () => {
  console.log(\`Server berjalan di http://localhost:\${PORT}\`);
});
\`\`\`

## Middleware

Middleware adalah function yang dipanggil sebelum request sampai ke handler. Express menggunakan **stack of middleware**.

\`\`\`javascript
// Logger middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);
  next(); // lanjut ke middleware/handler berikutnya
});

// Built-in middleware
app.use(express.json());      // parse JSON body
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static("public")); // serve static files
\`\`\`

## Response Methods

\`\`\`javascript
res.send("teks");              // kirim teks
res.json({ nama: "Budi" });   // kirim JSON
res.status(201).json(data);   // kirim dengan status code
res.sendFile("/path/file");   // kirim file
res.redirect("/login");       // redirect
\`\`\`

## Struktur Project Recommended

\`\`\`
aplikasi-saya/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── app.js
├── package.json
└── .env
\`\`\`

## Request Object

\`\`\`javascript
app.post("/users", (req, res) => {
  console.log(req.body);      // data dari body (perlu express.json())
  console.log(req.params);    // parameter URL /:id
  console.log(req.query);     // query string ?key=value
  console.log(req.headers);   // HTTP headers
});
\`\`\`

> **Best Practice:** Pisahkan routes, controllers, dan middleware ke file terpisah untuk maintainability. Gunakan \`express.json()\` untuk parse body.`,
    quiz: [
      {
        question: "Apa fungsi middleware di Express.js?",
        options: [
          "Menggambar UI",
          "Function yang dipanggil antara request dan response",
          "Menyimpan database",
          "Mengkompilasi JavaScript"
        ],
        answer: 1,
        explanation: "Middleware adalah function yang dijalankan antara menerima request dan mengirim response. Bisa logging, auth, parse body, dll."
      },
      {
        question: "Method apa untuk parse JSON body di Express?",
        options: ["express.parse()", "express.json()", "bodyParser()", "app.parse()"],
        answer: 1,
        explanation: "express.json() adalah built-in middleware untuk parse body berformat JSON sebelum tersedia di req.body."
      },
      {
        question: "Apa fungsi next() dalam middleware?",
        options: [
          "Lompat ke route berikutnya",
          "Lanjut ke middleware/handler berikutnya",
          "Menghentikan request",
          "Mengirim response"
        ],
        answer: 1,
        explanation: "next() memanggil middleware atau handler berikutnya dalam stack. Tanpa next() atau res, request akan hang."
      }
    ]
  },
  {
    level: 5,
    order: 4,
    title: "Routing",
    slug: "routing",
    description: "Memahami routing di Express: HTTP methods, route parameters, query string, dan router modular.",
    icon: "🛣️",
    isProject: false,
    content: `# Routing di Express.js

**Routing** menentukan bagaimana aplikasi merespons request ke endpoint tertentu. Setiap route memiliki **method HTTP**, **path**, dan **handler**.

## Route Dasar

\`\`\`javascript
app.METHOD(PATH, HANDLER);

// Contoh
app.get("/", (req, res) => res.send("GET /"));
app.post("/users", (req, res) => res.send("POST /users"));
app.put("/users/:id", (req, res) => res.send("PUT /users"));
app.delete("/users/:id", (req, res) => res.send("DELETE /users"));
\`\`\`

## Route Parameters

\`\`\`javascript
// URL: /users/123
app.get("/users/:id", (req, res) => {
  const id = req.params.id; // "123"
  res.json({ id: id });
});

// Multiple params: /users/123/posts/45
app.get("/users/:userId/posts/:postId", (req, res) => {
  console.log(req.params.userId);   // "123"
  console.log(req.params.postId);   // "45"
});
\`\`\`

## Query String

\`\`\`javascript
// URL: /search?q=nodejs&page=2
app.get("/search", (req, res) => {
  const q = req.query.q;        // "nodejs"
  const page = req.query.page;  // "2"
  res.json({ q, page });
});
\`\`\`

## Multiple Handlers (Middleware Route)

\`\`\`javascript
app.get("/admin", 
  (req, res, next) => {
    // auth check
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized");
    }
    next();
  },
  (req, res) => {
    res.send("Admin Dashboard");
  }
);
\`\`\`

## Express Router (Modular Routes)

Pisahkan routes ke file terpisah untuk maintainability:

\`\`\`javascript
// routes/users.js
const router = require("express").Router();

router.get("/", (req, res) => res.send("List users"));
router.get("/:id", (req, res) => res.send("User " + req.params.id));
router.post("/", (req, res) => res.send("Create user"));

module.exports = router;

// app.js
const usersRoute = require("./routes/users");
app.use("/users", usersRoute); // prefix /users
\`\`\`

## Response dengan Status Code

\`\`\`javascript
app.get("/users/:id", (req, res) => {
  const user = findUser(req.params.id);
  if (!user) return res.status(404).json({ error: "User tidak ditemukan" });
  res.status(200).json(user);
});
\`\`\`

> **Best Practice:** Gunakan \`express.Router()\` untuk memecah routes berdasarkan resource (users, posts, products). Ini membuat kode lebih terorganisir.`,
    quiz: [
      {
        question: "Bagaimana cara mengakses parameter URL /users/:id?",
        options: ["req.params.id", "req.query.id", "req.body.id", "req.url.id"],
        answer: 0,
        explanation: "Route parameters (dengan :id) diakses via req.params.id. req.query untuk query string, req.body untuk data POST."
      },
      {
        question: "URL /search?q=node&page=2, bagaimana akses q dan page?",
        options: [
          "req.params.q dan req.params.page",
          "req.query.q dan req.query.page",
          "req.body.q dan req.body.page",
          "req.search.q"
        ],
        answer: 1,
        explanation: "Query string (setelah ?) diakses via req.query. req.query.q = 'node', req.query.page = '2'."
      },
      {
        question: "Apa fungsi express.Router()?",
        options: [
          "Membuat route baru",
          "Modularisasi routes ke file terpisah",
          "Menghapus route",
          "Mengirim response"
        ],
        answer: 1,
        explanation: "express.Router() membuat instance router modular yang bisa dipasang di app dengan app.use('/prefix', router)."
      }
    ]
  },
  {
    level: 5,
    order: 5,
    title: "REST API",
    slug: "rest-api",
    description: "Mempelajari prinsip REST API: HTTP methods, status codes, dan konvensi penamaan endpoint.",
    icon: "🔌",
    isProject: false,
    content: `# REST API

**REST** (Representational State Transfer) adalah arsitektur untuk membangun web API. REST menggunakan **HTTP methods** untuk operasi **CRUD** (Create, Read, Update, Delete).

## HTTP Methods dan CRUD

| Method | Operasi | Contoh Endpoint | Deskripsi |
|--------|---------|----------------|-----------|
| GET    | Read    | GET /users     | Ambil semua user |
| POST   | Create  | POST /users    | Buat user baru |
| GET    | Read    | GET /users/:id | Ambil user by ID |
| PUT    | Update  | PUT /users/:id | Update full user |
| PATCH  | Update  | PATCH /users/:id| Update partial |
| DELETE | Delete  | DELETE /users/:id | Hapus user |

## Contoh REST API dengan Express

\`\`\`javascript
let users = [
  { id: 1, nama: "Budi" },
  { id: 2, nama: "Andi" }
];

// GET semua users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User tidak ditemukan" });
  res.json(user);
});

// POST buat user baru
app.post("/api/users", (req, res) => {
  const user = { id: users.length + 1, nama: req.body.nama };
  users.push(user);
  res.status(201).json(user);
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User tidak ditemukan" });
  user.nama = req.body.nama;
  res.json(user);
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});
\`\`\`

## Status Code Penting

- **200 OK**: request berhasil
- **201 Created**: resource berhasil dibuat
- **204 No Content**: berhasil tanpa body (DELETE)
- **400 Bad Request**: input invalid
- **401 Unauthorized**: belum login
- **403 Forbidden**: tidak punya akses
- **404 Not Found**: resource tidak ada
- **500 Internal Server Error**: error server

## Konvensi REST

- Gunakan **plural nouns**: \`/users\` bukan \`/user\`
- **Versioning**: \`/api/v1/users\`
- **Filtering via query**: \`/users?role=admin\`
- **Nested resource**: \`/users/:id/posts\`
- **HATEOAS** (opsional): sertakan link ke resource terkait

## Response Format Konsisten

\`\`\`javascript
// Sukses
{
  "success": true,
  "data": { ... },
  "message": "User berhasil dibuat"
}

// Error
{
  "success": false,
  "error": "User tidak ditemukan",
  "code": "USER_NOT_FOUND"
}
\`\`\`

> **Best Practice:** Selalu kembalikan status code yang tepat dan format response konsisten di semua endpoint.`,
    quiz: [
      {
        question: "HTTP method manakah untuk membuat resource baru?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 1,
        explanation: "POST digunakan untuk membuat resource baru. PUT untuk update full, PATCH untuk update partial, DELETE untuk hapus."
      },
      {
        question: "Status code manakah yang tepat saat resource berhasil dibuat?",
        options: ["200", "201", "204", "400"],
        answer: 1,
        explanation: "201 Created menandakan resource baru berhasil dibuat. 200 untuk request sukses umum, 204 untuk sukses tanpa body."
      },
      {
        question: "Endpoint manakah yang mengikuti konvensi REST dengan benar?",
        options: ["/getUser", "/users/:id", "/api/getUserById/5", "/delete-user"],
        answer: 1,
        explanation: "REST menggunakan plural nouns dan HTTP method untuk operasi: /users/:id. Hindari kata kerja di URL."
      }
    ]
  },
  {
    level: 5,
    order: 6,
    title: "Authentication (JWT)",
    slug: "auth-jwt",
    description: "Implementasi autentikasi dengan JSON Web Token: login, generate token, dan verifikasi middleware.",
    icon: "🔐",
    isProject: false,
    content: `# Authentication dengan JWT

**JWT (JSON Web Token)** adalah standar untuk autentikasi stateless. Setelah login, server memberi **token** yang dikirim client di setiap request berikutnya.

## Cara Kerja JWT

1. User **login** dengan email & password
2. Server **verifikasi** kredensial
3. Server **generate JWT** dan kirim ke client
4. Client simpan token (localStorage/cookie)
5. Setiap request, client kirim token di header \`Authorization: Bearer <token>\`
6. Server **verifikasi token** di middleware

## Instalasi

\`\`\`bash
npm install jsonwebtoken bcrypt
\`\`\`

## Login dan Generate Token

\`\`\`javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "rahasia-sangat-aman";

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Cari user di database
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: "Email salah" });

  // Verifikasi password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Password salah" });

  // Generate JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});
\`\`\`

## Middleware Verifikasi Token

\`\`\`javascript
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  // Format: "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token tidak ada" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // simpan info user di req
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token invalid" });
  }
}

// Gunakan di route yang butuh auth
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: "Halo user " + req.user.email });
});
\`\`\`

## Hash Password dengan bcrypt

\`\`\`javascript
// Saat register
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Saat login - compare
const isValid = await bcrypt.compare(inputPassword, hashedPassword);
\`\`\`

## Struktur JWT

JWT terdiri dari 3 bagian: \`header.payload.signature\`

- **Header**: algoritma (HS256) dan tipe (JWT)
- **Payload**: data user (id, email, role, exp)
- **Signature**: verifikasi token tidak diubah

> **Best Practice:** Jangan simpan data sensitif di payload JWT (tidak dienkripsi). Simpan JWT di **httpOnly cookie** untuk keamanan ekstra terhadap XSS.`,
    quiz: [
      {
        question: "Bagaimana cara client mengirim JWT ke server?",
        options: [
          "Di body request",
          "Di header Authorization: Bearer <token>",
          "Di URL parameter",
          "Di query string"
        ],
        answer: 1,
        explanation: "JWT dikirim di header Authorization dengan format 'Bearer <token>'. Ini standar yang dikenal server."
      },
      {
        question: "Mengapa password harus di-hash dengan bcrypt sebelum disimpan?",
        options: [
          "Agar lebih cepat login",
          "Agar password tidak terbaca jika database bocor",
          "Untuk kompresi data",
          "Tidak perlu di-hash"
        ],
        answer: 1,
        explanation: "Hashing bcrypt membuat password tidak bisa dibaca walau database bocor. bcrypt juga menambahkan salt untuk mencegah rainbow table attack."
      },
      {
        question: "Apa yang dilakukan middleware auth?",
        options: [
          "Membuat user baru",
          "Verifikasi token dan simpan info user di req",
          "Mengirim email",
          "Hash password"
        ],
        answer: 1,
        explanation: "Middleware auth memverifikasi JWT, dan jika valid, menyimpan info user (decoded) di req.user agar handler bisa mengaksesnya."
      }
    ]
  },
  {
    level: 5,
    order: 7,
    title: "Upload File",
    slug: "upload-file",
    description: "Mengunggah file di Express menggunakan Multer: konfigurasi, storage, dan validasi.",
    icon: "📤",
    isProject: false,
    content: `# Upload File dengan Multer

**Multer** adalah middleware Express untuk menangani \`multipart/form-data\`—format yang digunakan saat upload file. Multer sangat populer untuk upload file di Node.js.

## Instalasi

\`\`\`bash
npm install multer
\`\`\`

## Setup Dasar

\`\`\`javascript
const express = require("express");
const multer = require("multer");
const app = express();

// Konfigurasi storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder tujuan
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + unique + "." + file.mimetype.split("/")[1]);
  }
});

// Filter file (hanya gambar)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Hanya file gambar yang diizinkan!"), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // max 5MB
});
\`\`\`

## Route Upload Single File

\`\`\`javascript
// Upload 1 file dengan field name "avatar"
app.post("/upload", upload.single("avatar"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "File wajib diupload" });
  
  res.json({
    message: "File berhasil diupload",
    file: {
      originalname: req.file.originalname,
      filename: req.file.filename,
      size: req.file.size,
      path: req.file.path
    }
  });
});
\`\`\`

## Upload Multiple Files

\`\`\`javascript
// Upload maksimal 5 file
app.post("/upload-multiple", upload.array("photos", 5), (req, res) => {
  const files = req.files.map(f => ({
    filename: f.filename,
    size: f.size
  }));
  res.json({ message: "Upload berhasil", files });
});

// Upload multiple field berbeda
app.post("/profile", upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "gallery", maxCount: 8 }
]), (req, res) => {
  res.json({ 
    avatar: req.files.avatar,
    gallery: req.files.gallery
  });
});
\`\`\`

## Memory Storage (untuk upload ke cloud)

\`\`\`javascript
const upload = multer({ storage: multer.memoryStorage() });
// File disimpan di req.file.buffer (sebelum upload ke S3/Cloudinary)
\`\`\`

## Error Handling

\`\`\`javascript
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File terlalu besar (max 5MB)" });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err) return res.status(400).json({ error: err.message });
  next();
});
\`\`\`

## Serve Static Files

\`\`\`javascript
// Agar file di folder uploads bisa diakses
app.use("/uploads", express.static("uploads"));
\`\`\`

> **Best Practice:** Selalu validasi tipe file dan ukuran. Untuk produksi, upload ke cloud storage (S3, Cloudinary) bukan lokal.`,
    quiz: [
      {
        question: "Middleware apa yang digunakan untuk upload file di Express?",
        options: ["body-parser", "multer", "cors", "morgan"],
        answer: 1,
        explanation: "Multer adalah middleware Express khusus untuk menangani multipart/form-data yang digunakan saat upload file."
      },
      {
        question: "Method multer manakah untuk upload 1 file?",
        options: ["upload.array()", "upload.single()", "upload.fields()", "upload.many()"],
        answer: 1,
        explanation: "upload.single('fieldname') untuk upload 1 file. upload.array() untuk multiple files dengan nama field sama, upload.fields() untuk multiple field berbeda."
      },
      {
        question: "Apa tujuan fileFilter di Multer?",
        options: [
          "Membatasi ukuran file",
          "Memfilter berdasarkan tipe file (mimetype)",
          "Mengkompres file",
          "Mengubah nama file"
        ],
        answer: 1,
        explanation: "fileFilter memungkinkan kita menolak file berdasarkan mimetype atau kriteria lain. limits.fileSize untuk batas ukuran."
      }
    ]
  },
  {
    level: 5,
    order: 8,
    title: "Project: API Sederhana",
    slug: "project-api-sederhana",
    description: "Bangun REST API lengkap untuk manajemen produk dengan Express, JWT auth, dan validasi.",
    icon: "🛠️",
    isProject: true,
    content: `# Project: API Sederhana

Pada project ini, kamu akan membangun **REST API lengkap** untuk manajemen produk dengan authentication, validasi, dan dokumentasi. API ini menggabungkan semua konsep Level 5.

## Fitur API

- **Auth**: register, login (JWT)
- **CRUD Produk**: create, read, update, delete
- **Search & filter** produk
- **Pagination** hasil query
- **Validasi input** dengan middleware
- **Upload gambar** produk
- **Protected routes** (butuh token)
- **Error handling** terpusat
- **Logging** request

## Tech Stack

- **Express.js** - web framework
- **JWT** - authentication
- **bcrypt** - hash password
- **multer** - upload file
- **joi/express-validator** - validasi
- **morgan** - logging
- **cors** - cross-origin

## Struktur Project

\`\`\`
api-produk/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validate.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── products.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── productController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   └── app.js
├── uploads/
├── .env
└── package.json
\`\`\`

## Kode Utama: app.js

\`\`\`javascript
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Error handler (paling bawah)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server di port \${PORT}\`));
\`\`\`

## Contoh Route dengan Auth + Upload

\`\`\`javascript
// routes/products.js
const router = require("express").Router();
const auth = require("../middleware/auth");
const upload = require("../config/multer");
const { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", auth, upload.single("image"), createProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
\`\`\`

## Langkah Implementasi

1. **Setup project**: \`npm init\`, install dependencies
2. **Buat struktur folder** sesuai diagram
3. **Buat User model** dengan hash password
4. **Implementasi auth routes**: register & login
5. **Buat JWT middleware** untuk protected routes
6. **Buat Product model** (simpan ke array/file dulu, nanti MongoDB)
7. **Implementasi CRUD products** (hanya yang login bisa create/update/delete)
8. **Tambah upload gambar** dengan Multer
9. **Validasi input** (nama wajib, harga > 0)
10. **Implementasi search & pagination**: \`/products?search=laptop&page=1&limit=10\`
11. **Error handling middleware** terpusat
12. **Test semua endpoint** dengan Postman/Thunder Client
13. **Dokumentasi** dengan Postman Collection atau README

## Tantangan Tambahan

- **Role-based access** (admin bisa hapus, user biasa tidak)
- **Rate limiting** untuk hindari spam
- **Soft delete** (tambah field \`deletedAt\`)
- **Caching** dengan Redis
- **Dokumentasi Swagger/OpenAPI**`,
    quiz: [
      {
        question: "Mengapa kita memisahkan routes, controllers, dan models ke folder berbeda?",
        options: [
          "Agar lebih cepat",
          "Untuk separation of concerns dan maintainability",
          "Karena Express mewajibkan",
          "Tidak perlu dipisah"
        ],
        answer: 1,
        explanation: "Pemisahan folder mengikuti prinsip separation of concerns—kode lebih terorganisir, mudah di-maintain, dan testable."
      },
      {
        question: "Pada project ini, route mana yang seharusnya butuh auth middleware?",
        options: [
          "GET /api/products (lihat semua)",
          "POST /api/products (tambah produk)",
          "GET /api/products/:id",
          "Tidak perlu auth"
        ],
        answer: 1,
        explanation: "Operasi create/update/delete biasanya butuh auth (hanya user login). GET (read) seringkali publik. Tapi bisa sesuai kebutuhan aplikasi."
      },
      {
        question: "Apa guna middleware error handler di Express?",
        options: [
          "Mencegah semua error",
          "Menangkap error terpusat dan kirim response konsisten",
          "Mempercepat server",
          "Menyimpan error ke database"
        ],
        answer: 1,
        explanation: "Error handler middleware (dengan 4 parameter: err, req, res, next) menangkap semua error di route dan kirim response error yang konsisten ke client."
      }
    ]
  },

  // ==================== LEVEL 6 - DATABASE ====================
  {
    level: 6,
    order: 1,
    title: "Pengenalan Database",
    slug: "pengenalan-database",
    description: "Mengenal konsep database, perbedaan SQL dan NoSQL, serta kapan menggunakan keduanya.",
    icon: "🗄️",
    isProject: false,
    content: `# Pengenalan Database

**Database** adalah sistem penyimpanan data terorganisir yang memungkinkan aplikasi menyimpan, mengambil, dan mengelola data secara efisien. Tanpa database, data hilang saat aplikasi dimatikan.

## Mengapa Butuh Database?

- **Persistensi**: data tetap ada walau server mati
- **Skalabilitas**: handle jutaan data
- **Konsistensi**: data terstruktur & valid
- **Concurrency**: banyak user akses bersamaan
- **Query**: cari data cepat dengan query

## Jenis Database

### 1. Relational (SQL)

Data disimpan dalam **tabel** dengan baris dan kolom. Menggunakan bahasa **SQL**.

Contoh: MySQL, PostgreSQL, SQLite, SQL Server

\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  nama VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

SELECT * FROM users WHERE nama = 'Budi';
\`\`\`

### 2. NoSQL (Non-Relational)

Data disimpan sebagai **document**, key-value, graph, atau column-family. Fleksibel tanpa schema tetap.

Contoh: MongoDB, Redis, Cassandra, Neo4j

\`\`\`javascript
// MongoDB document
{
  _id: ObjectId("..."),
  nama: "Budi",
  email: "budi@mail.com",
  hobi: ["coding", "gaming"],
  alamat: { kota: "Jakarta", kodePos: "12345" }
}
\`\`\`

## Perbandingan SQL vs NoSQL

| Aspek | SQL | NoSQL |
|-------|-----|-------|
| Struktur | Tabel tetap (schema) | Fleksibel (schema-less) |
| Query | SQL standar | Bervariasi |
| Skalabilitas | Vertikal (naikkan server) | Horizontal (tambah server) |
| Relasi | Strong (JOIN) | Lemah/Embed |
| ACID | Ya | Tergantung |
| Cocok untuk | Data terstruktur, transaksi | Data fleksibel, big data |

## Kapan Pakai SQL?

- Sistem keuangan, banking (butuh ACID)
- Data terstruktur dan relasi kompleks
- Aplikasi ERP, inventory
- Butuh JOIN antar banyak tabel

## Kapan Pakai NoSQL?

- Aplikasi real-time, social media
- Data tidak terstruktur/berubah-ubah
- Butuh skalabilitas horizontal
- Big data, content management

## ACID Properties

- **Atomicity**: semua operasi berhasil atau gagal total
- **Consistency**: data tetap valid setelah transaksi
- **Isolation**: transaksi concurrent tidak saling ganggu
- **Durability**: data tersimpan permanen setelah commit

> **Best Practice:** Tidak ada database "terbaik" untuk semua kasus. Pilih sesuai kebutuhan: SQL untuk data terstruktur & transaksional, NoSQL untuk fleksibilitas dan skalabilitas.`,
    quiz: [
      {
        question: "Apa perbedaan utama SQL dan NoSQL?",
        options: [
          "SQL lebih cepat",
          "SQL pakai tabel terstruktur, NoSQL fleksibel (document)",
          "NoSQL hanya untuk angka",
          "SQL tidak bisa simpan data permanen"
        ],
        answer: 1,
        explanation: "SQL (relational) menyimpan data dalam tabel tetap dengan schema. NoSQL menyimpan data fleksibel (document, key-value) tanpa schema ketat."
      },
      {
        question: "Manakah yang termasuk database relational (SQL)?",
        options: ["MongoDB", "Redis", "PostgreSQL", "Cassandra"],
        answer: 2,
        explanation: "PostgreSQL adalah database relational (SQL). MongoDB, Redis, Cassandra adalah NoSQL."
      },
      {
        question: "Kapan lebih baik menggunakan NoSQL?",
        options: [
          "Sistem banking yang butuh ACID",
          "Data terstruktur dengan banyak relasi",
          "Data fleksibel, big data, perlu skalabilitas horizontal",
          "Aplikasi dengan sedikit data"
        ],
        answer: 2,
        explanation: "NoSQL cocok untuk data fleksibel, big data, dan aplikasi yang butuh skalabilitas horizontal. SQL untuk banking dan data terstruktur dengan relasi."
      }
    ]
  },
  {
    level: 6,
    order: 2,
    title: "MongoDB",
    slug: "mongodb",
    description: "Mengenal MongoDB: database NoSQL document-oriented, collections, documents, dan instalasi.",
    icon: "🍃",
    isProject: false,
    content: `# MongoDB

**MongoDB** adalah database **NoSQL document-oriented** paling populer. Data disimpan sebagai **document** BSON (biner JSON) dalam **collection**. MongoDB fleksibel, skalabel, dan mudah dipelajari untuk developer JavaScript.

## Konsep Dasar

| Relational | MongoDB |
|-----------|---------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Index | Index |
| JOIN | Embed / \$lookup |

## Struktur Document

\`\`\`javascript
// 1 document = 1 record
{
  _id: ObjectId("6123abc..."),
  nama: "Budi Santoso",
  email: "budi@mail.com",
  umur: 25,
  aktif: true,
  hobi: ["coding", "gaming"],
  alamat: {
    kota: "Jakarta",
    kodePos: "12345"
  },
  createdAt: ISODate("2024-01-01T00:00:00Z")
}
\`\`\`

## Instalasi

### Opsi 1: Local Install
\`\`\`bash
# Ubuntu
sudo apt install mongodb

# macOS
brew tap mongodb/brew
brew install mongodb-community

# Windows: download installer dari mongodb.com
\`\`\`

### Opsi 2: MongoDB Atlas (Cloud - GRATIS)
1. Daftar di mongodb.com/atlas
2. Buat cluster free
3. Dapatkan connection string
4. Connect dengan MongoDB Compass (GUI)

### Opsi 3: Docker
\`\`\`bash
docker run -d -p 27017:27017 --name mongo mongo
\`\`\`

## Koneksi via MongoDB Shell

\`\`\`bash
# Connect ke local
mongosh "mongodb://localhost:27017"

# Connect ke Atlas
mongosh "mongodb+srv://user:pass@cluster.mongodb.net/dbname"
\`\`\`

## Operasi Dasar di Shell

\`\`\`javascript
// Pilih database
use tokoOnline;

// Insert 1 document
db.users.insertOne({ nama: "Budi", umur: 25 });

// Insert banyak
db.users.insertMany([
  { nama: "Andi", umur: 30 },
  { nama: "Citra", umur: 28 }
]);

// Find semua
db.users.find();

// Find dengan filter
db.users.find({ umur: { $gte: 28 } });

// Update
db.users.updateOne({ nama: "Budi" }, { $set: { umur: 26 } });

// Delete
db.users.deleteOne({ nama: "Andi" });
\`\`\`

## Operator Query Umum

\`\`\`javascript
$eq   // sama dengan
$ne   // tidak sama
$gt   // lebih besar
$gte  // lebih besar atau sama
$lt   // lebih kecil
$in   // ada di array
$nin  // tidak ada di array
$and  // logika AND
$or   // logika OR
\`\`\`

## MongoDB Compass (GUI)

MongoDB Compass adalah tool visual untuk melihat dan mengelola database MongoDB. Lebih mudah bagi pemula daripada shell.

> **Best Practice:** Mulai dengan **MongoDB Atlas** (free) untuk belajar tanpa instalasi. Gunakan Compass untuk eksplorasi data secara visual.`,
    quiz: [
      {
        question: "Di MongoDB, apa yang setara dengan 'table' di database relational?",
        options: ["Document", "Collection", "Field", "Database"],
        answer: 1,
        explanation: "Collection di MongoDB setara dengan table di relational DB. Document setara dengan row, field setara dengan column."
      },
      {
        question: "Format apa yang digunakan MongoDB untuk menyimpan data?",
        options: ["XML", "BSON (biner JSON)", "CSV", "YAML"],
        answer: 1,
        explanation: "MongoDB menyimpan data dalam format BSON (Binary JSON)—versi biner dari JSON yang mendukung tipe data tambahan seperti ObjectId, Date, dll."
      },
      {
        question: "Operator manakah untuk mencari nilai yang lebih besar atau sama dengan?",
        options: ["$gt", "$gte", "$eq", "$in"],
        answer: 1,
        explanation: "$gte (greater than or equal) untuk lebih besar atau sama. $gt hanya lebih besar, $eq sama dengan, $in untuk cek keberadaan dalam array."
      }
    ]
  },
  {
    level: 6,
    order: 3,
    title: "CRUD",
    slug: "crud",
    description: "Operasi CRUD di MongoDB: Create (insert), Read (find), Update, dan Delete document.",
    icon: "🔄",
    isProject: false,
    content: `# Operasi CRUD di MongoDB

**CRUD** adalah empat operasi dasar database: **C**reate, **R**ead, **U**pdate, **D**elete. Memahami CRUD adalah fondasi wajib untuk bekerja dengan database.

## 1. CREATE (Insert)

\`\`\`javascript
// Insert satu document
db.users.insertOne({
  nama: "Budi",
  email: "budi@mail.com",
  umur: 25
});

// Insert banyak document sekaligus
db.users.insertMany([
  { nama: "Andi", umur: 30 },
  { nama: "Citra", umur: 28 },
  { nama: "Dina", umur: 22 }
]);
\`\`\`

## 2. READ (Find)

\`\`\`javascript
// Ambil semua document
db.users.find();

// Filter sederhana (exact match)
db.users.find({ nama: "Budi" });

// Filter dengan operator
db.users.find({ umur: { $gte: 25 } });  // umur >= 25
db.users.find({ umur: { $gt: 22, $lt: 30 } }); // 22 < umur < 30
db.users.find({ nama: { $in: ["Budi", "Andi"] } }); // nama salah satu

// Logika AND / OR
db.users.find({ 
  $or: [
    { umur: { $lt: 25 } },
    { nama: "Budi" }
  ]
});

// Projection (pilih field tertentu)
db.users.find({}, { nama: 1, umur: 1, _id: 0 });

// Limit, Skip, Sort (pagination)
db.users.find().limit(10).skip(0).sort({ umur: -1 }); // descending
\`\`\`

## 3. UPDATE

\`\`\`javascript
// Update satu document (yang pertama cocok)
db.users.updateOne(
  { nama: "Budi" },          // filter
  { $set: { umur: 26 } }     // update
);

// Update banyak document
db.users.updateMany(
  { umur: { $lt: 25 } },
  { $set: { status: "muda" } }
);

// Operator update
$set    // set field
$unset  // hapus field
$inc    // increment angka
$push   // tambah ke array
$pull   // hapus dari array
$rename // rename field

// Contoh
db.users.updateOne(
  { nama: "Budi" },
  { 
    $set: { umur: 26 },
    $push: { hobi: "membaca" },
    $inc: { loginCount: 1 }
  }
);

// Replace seluruh document
db.users.replaceOne({ nama: "Budi" }, { nama: "Budi", umur: 26 });
\`\`\`

## 4. DELETE

\`\`\`javascript
// Hapus satu document
db.users.deleteOne({ nama: "Budi" });

// Hapus banyak document
db.users.deleteMany({ umur: { $lt: 25 } });

// Hapus SEMUA document (hati-hati!)
db.users.deleteMany({});
\`\`\`

## findOne() vs find()

\`\`\`javascript
const satu = db.users.findOne({ nama: "Budi" }); // 1 object
const banyak = db.users.find({ umur: 25 });      // cursor/array
\`\`\`

> **Best Practice:** Selalu sertakan filter saat delete. \`deleteMany({})\` akan menghapus SEMUA data. Gunakan dengan sangat hati-hati!`,
    quiz: [
      {
        question: "Method manakah untuk insert banyak document sekaligus?",
        options: ["insertOne", "insertMany", "insertAll", "addMany"],
        answer: 1,
        explanation: "insertMany menerima array document dan menyimpannya sekaligus. insertOne hanya untuk 1 document."
      },
      {
        question: "Apa fungsi operator $inc di update?",
        options: [
          "Increment nilai angka",
          "Insert document",
          "Hapus field",
          "Rename field"
        ],
        answer: 0,
        explanation: "$inc menambah nilai field angka dengan jumlah tertentu. Misal { $inc: { loginCount: 1 } } menambah loginCount sebanyak 1."
      },
      {
        question: "Apa yang terjadi jika menjalankan db.users.deleteMany({})?",
        options: [
          "Error karena filter kosong",
          "Hapus SEMUA document di collection users",
          "Tidak menghapus apa-apa",
          "Hapus 1 document saja"
        ],
        answer: 1,
        explanation: "deleteMany({}) dengan filter kosong akan menghapus SEMUA document di collection. Sangat berbahaya, gunakan dengan hati-hati!"
      }
    ]
  },
  {
    level: 6,
    order: 4,
    title: "Relasi Data",
    slug: "relasi-data",
    description: "Memahami relasi data di MongoDB: embedding, referencing, dan population.",
    icon: "🔗",
    isProject: false,
    content: `# Relasi Data di MongoDB

Berbeda dengan SQL yang menggunakan **JOIN**, MongoDB memiliki dua cara merepresentasikan relasi: **Embedding** (selipkan data) dan **Referencing** (simpan referensi ID).

## 1. Embedding (Document Tertanam)

Data terkait disimpan di dalam document utama. Cocok untuk data "one-to-few" yang sering diakses bersama.

\`\`\`javascript
// User dengan alamat tertanam
{
  _id: ObjectId("..."),
  nama: "Budi",
  alamat: {
    kota: "Jakarta",
    kodePos: "12345",
    jalan: "Jl. Merdeka No. 1"
  }
}

// Post dengan comments tertanam
{
  _id: ObjectId("..."),
  judul: "Belajar MongoDB",
  komentar: [
    { nama: "Andi", teks: "Mantap!" },
    { nama: "Citra", teks: "Bagus" }
  ]
}
\`\`\`

**Kelebihan**: 1 query dapatkan semua data, performa baca cepat
**Kekurangan**: document bisa membesar, duplikasi data

## 2. Referencing (Storing ID)

Simpan ID document lain sebagai referensi. Cocok untuk "one-to-many" atau "many-to-many".

\`\`\`javascript
// User
{ _id: ObjectId("user1"), nama: "Budi" }

// Posts yang reference ke user
{ _id: ObjectId("post1"), judul: "Post 1", author: ObjectId("user1") }
{ _id: ObjectId("post2"), judul: "Post 2", author: ObjectId("user1") }
\`\`\`

## $lookup (Join di MongoDB)

\`\`\`javascript
db.posts.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "authorData"
    }
  }
]);
// Hasil: post dengan data author disisipkan
\`\`\`

## One-to-One

\`\`\`javascript
// User dan Profile (1:1)
// Reference: simpan profileId di user
{ _id: ObjectId("u1"), nama: "Budi", profile: ObjectId("p1") }
{ _id: ObjectId("p1"), bio: "Developer", umur: 25 }
\`\`\`

## One-to-Many

\`\`\`javascript
// User dan Posts (1:many)
// Reference di sisi "many": post menyimpan userId
{ _id: ObjectId("p1"), judul: "Post 1", userId: ObjectId("u1") }
{ _id: ObjectId("p2"), judul: "Post 2", userId: ObjectId("u1") }

// Atau embed array of IDs di sisi "one"
{ _id: ObjectId("u1"), nama: "Budi", posts: [ObjectId("p1"), ObjectId("p2")] }
\`\`\`

## Many-to-Many

\`\`\`javascript
// Student dan Course (many:many)
// Buat collection junction
{ _id: ObjectId("..."), studentId: ObjectId("s1"), courseId: ObjectId("c1") }
\`\`\`

## Kapan Embed vs Reference?

| Kondisi | Pilih |
|---------|-------|
| Data sedikit & sering diakses bersama | Embed |
| Data banyak & tumbuh terus | Reference |
| Data berubah jarang | Embed |
| Data berubah sering & di banyak tempat | Reference |
| Butuh query terpisah | Reference |

> **Best Practice:** Embed untuk data "one-to-few" yang selalu diakses bersama. Reference untuk data besar atau yang berubah sering. Hindari document yang tumbuh tanpa batas (max 16MB).`,
    quiz: [
      {
        question: "Kapan lebih baik menggunakan embedding daripada referencing?",
        options: [
          "Data banyak dan tumbuh terus",
          "Data sedikit dan sering diakses bersama",
          "Data berubah sering di banyak tempat",
          "Selalu gunakan embedding"
        ],
        answer: 1,
        explanation: "Embedding cocok untuk data sedikit (one-to-few) yang sering diakses bersamaan, karena 1 query dapat semua data."
      },
      {
        question: "Apa operator MongoDB untuk melakukan JOIN?",
        options: ["$join", "$lookup", "$merge", "$connect"],
        answer: 1,
        explanation: "$lookup dalam aggregation pipeline digunakan untuk JOIN collection di MongoDB, mirip JOIN di SQL."
      },
      {
        question: "Bagaimana cara merepresentasikan relasi one-to-many di MongoDB?",
        options: [
          "Hanya dengan embed",
          "Reference ID di sisi 'many' atau array ID di sisi 'one'",
          "Tidak bisa di MongoDB",
          "Harus buat collection baru wajib"
        ],
        answer: 1,
        explanation: "One-to-many bisa dengan reference: simpan parentId di child, atau simpan array child IDs di parent. Pilih sesuai pola akses data."
      }
    ]
  },
  {
    level: 6,
    order: 5,
    title: "Mongoose",
    slug: "mongoose",
    description: "Menggunakan Mongoose ODM untuk MongoDB: schema, model, validation, dan middleware.",
    icon: "🦫",
    isProject: false,
    content: `# Mongoose ODM

**Mongoose** adalah **ODM (Object Data Modeling)** untuk MongoDB dan Node.js. Mongoose memberikan **schema-based** solution, validasi, type casting, dan middleware—membuat MongoDB lebih terstruktur.

## Instalasi dan Koneksi

\`\`\`bash
npm install mongoose
\`\`\`

\`\`\`javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/toko", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Terhubung ke MongoDB"))
.catch(err => console.error("Error:", err));
\`\`\`

## Definisi Schema dan Model

\`\`\`javascript
const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  },
  umur: {
    type: Number,
    min: 0,
    max: 120,
    default: 0
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  aktif: {
    type: Boolean,
    default: true
  },
  hobi: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);
\`\`\`

## Operasi CRUD dengan Mongoose

\`\`\`javascript
// CREATE
const user = new User({ nama: "Budi", email: "budi@mail.com", umur: 25 });
await user.save();
// Atau
const user2 = await User.create({ nama: "Andi", email: "andi@mail.com" });

// READ
const all = await User.find();
const satu = await User.findById("userId");
const filter = await User.find({ umur: { $gte: 25 } });
const satuFilter = await User.findOne({ email: "budi@mail.com" });

// UPDATE
await User.updateOne({ _id: id }, { umur: 26 });
await User.findByIdAndUpdate(id, { umur: 26 }, { new: true });

// DELETE
await User.deleteOne({ _id: id });
await User.findByIdAndDelete(id);
\`\`\`

## Validation

Mongoose otomatis validasi berdasarkan schema:

\`\`\`javascript
try {
  await User.create({ nama: "A", email: "invalid" }); 
  // Error: nama minimal 3 char, email tidak valid
} catch (err) {
  console.log(err.message);
}
\`\`\`

## Instance Methods dan Static Methods

\`\`\`javascript
// Instance method
userSchema.methods.getFullName = function() {
  return this.nama + " (" + this.email + ")";
};

// Static method
userSchema.statics.findByRole = function(role) {
  return this.find({ role });
};

const admin = await User.findByRole("admin");
\`\`\`

## Middleware (Hooks)

\`\`\`javascript
// Pre-save: hash password sebelum save
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Post-save: log setelah save
userSchema.post("save", function(doc) {
  console.log("User tersimpan:", doc.nama);
});
\`\`\`

## Populate (Reference)

\`\`\`javascript
const postSchema = new Schema({
  judul: String,
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

const post = await Post.find().populate("author", "nama email");
// Akan menyertakan data user di field author
\`\`\`

> **Best Practice:** Selalu definisikan schema dengan validasi ketat. Gunakan middleware \`pre\` untuk hash password dan validasi kompleks. Gunakan \`populate\` untuk join reference.`,
    quiz: [
      {
        question: "Apa itu Mongoose?",
        options: [
          "Database NoSQL",
          "ODM (Object Data Modeling) untuk MongoDB",
          "Framework web",
          "Library frontend"
        ],
        answer: 1,
        explanation: "Mongoose adalah ODM untuk MongoDB—memberikan schema, validasi, dan abstraction di atas MongoDB driver native."
      },
      {
        question: "Method Mongoose untuk mendapatkan document dengan relasi terisi?",
        options: ["find()", "populate()", "join()", "include()"],
        answer: 1,
        explanation: "populate() mengisi field reference dengan document lengkap. Mirip JOIN di SQL. Contoh: Post.find().populate('author')."
      },
      {
        question: "Apa fungsi pre middleware di Mongoose?",
        options: [
          "Jalankan setelah operasi",
          "Jalankan sebelum operasi (misal hash password sebelum save)",
          "Hapus document",
          "Validasi input user"
        ],
        answer: 1,
        explanation: "pre middleware dijalankan SEBELUM operasi (pre-save, pre-validate). Sering dipakai untuk hash password, generate slug, atau set default."
      }
    ]
  },
  {
    level: 6,
    order: 6,
    title: "Project: Sistem Login",
    slug: "project-sistem-login",
    description: "Bangun sistem login lengkap dengan registrasi, JWT, hash password, dan MongoDB.",
    icon: "🔑",
    isProject: true,
    content: `# Project: Sistem Login dengan Database

Pada project ini, kamu akan membangun **sistem autentikasi lengkap** dengan registrasi, login, JWT, hash password, dan penyimpanan di MongoDB. Project ini menggabungkan Level 5 (backend) dan Level 6 (database).

## Fitur yang Dibangun

- **Register** user baru dengan validasi
- **Login** dengan email & password
- **Hash password** dengan bcrypt
- **Generate JWT** setelah login
- **Middleware auth** untuk protected routes
- **Profile** (butuh login)
- **Update profile** (nama, password)
- **Refresh token** (opsional)
- **Logout** (blacklist token)
- **Role-based access** (user & admin)

## Tech Stack

- **Express.js** - web framework
- **Mongoose** - ODM MongoDB
- **bcrypt** - hash password
- **jsonwebtoken** - JWT
- **joi** - validasi input
- **dotenv** - environment variables

## Struktur Project

\`\`\`
sistem-login/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── User.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validate.js
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── utils/
│   │   └── token.js
│   └── app.js
├── .env
└── package.json
\`\`\`

## Model User dengan Hash Password

\`\`\`javascript
// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  nama: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6, select: false },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  createdAt: { type: Date, default: Date.now }
});

// Hash password sebelum save
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method untuk compare password
userSchema.methods.matchPassword = function(enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
\`\`\`

## Controller: Register & Login

\`\`\`javascript
// controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.register = async (req, res) => {
  try {
    const { nama, email, password } = req.body;
    
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email sudah terdaftar" });
    
    const user = await User.create({ nama, email, password });
    res.status(201).json({
      _id: user._id,
      nama: user.nama,
      email: user.email,
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ error: "Email tidak terdaftar" });
    
    const valid = await user.matchPassword(password);
    if (!valid) return res.status(401).json({ error: "Password salah" });
    
    res.json({
      _id: user._id,
      nama: user.nama,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
\`\`\`

## Langkah Implementasi

1. **Setup project**: install Express, Mongoose, bcrypt, jsonwebtoken, joi, dotenv
2. **Konfigurasi .env**: \`MONGODB_URI\`, \`JWT_SECRET\`, \`PORT\`
3. **Buat koneksi MongoDB** di config/db.js
4. **Buat User model** dengan schema, hash password pre-hook, dan method matchPassword
5. **Implementasi register**: validasi input, cek email unik, hash password, simpan, kirim token
6. **Implementasi login**: cari user, compare password, kirim token
7. **Buat auth middleware**: verifikasi JWT, simpan user di req
8. **Buat protected route** (misal \`/api/profile\`)
9. **Implementasi update profile** (nama, ganti password)
10. **Implementasi role-based middleware** (admin only)
11. **Error handling** terpusat
12. **Test dengan Postman**: register, login, akses protected route

## Tantangan Tambahan

- **Email verification** saat register
- **Forgot password** via email
- **Refresh token** mechanism
- **Rate limiting** di endpoint login
- **OAuth** (Google, GitHub login)
- **2FA** (two-factor authentication)`,
    quiz: [
      {
        question: "Mengapa password harus di-hash di pre-save hook Mongoose?",
        options: [
          "Agar password lebih pendek",
          "Agar password tidak tersimpan plain-text (aman jika DB bocor)",
          "Agar login lebih cepat",
          "Untuk kompresi data"
        ],
        answer: 1,
        explanation: "Hash password di pre-save memastikan password tidak pernah disimpan plain-text. Jika database bocor, password tetap aman karena hash satu arah."
      },
      {
        question: "Mengapa field password di-set \`select: false\` di schema?",
        options: [
          "Agar tidak bisa disimpan",
          "Agar tidak ikut terkirim saat query normal (keamanan)",
          "Untuk kompresi",
          "Agar password wajib diisi ulang"
        ],
        answer: 1,
        explanation: "select: false membuat password tidak ikut di hasil find() biasa. Saat login, gunakan .select('+password') untuk eksplisit mengambilnya."
      },
      {
        question: "Apa yang dilakukan auth middleware?",
        options: [
          "Membuat user baru",
          "Verifikasi JWT dari header dan simpan info user di req",
          "Hash password",
          "Kirim email verifikasi"
        ],
        answer: 1,
        explanation: "Auth middleware mengambil token dari header Authorization, verifikasi JWT, dan simpan decoded user info di req.user untuk handler berikutnya."
      }
    ]
  },

  // ==================== LEVEL 7 - PROJECT AKHIR ====================
  {
    level: 7,
    order: 1,
    title: "Website Portfolio",
    slug: "project-portfolio",
    description: "Bangun website portfolio personal yang menampilkan profil, skills, project, dan kontak.",
    icon: "💼",
    isProject: true,
    content: `# Project: Website Portfolio

**Website Portfolio** adalah project akhir pertama yang wajib kamu bangun. Project ini menggabungkan semua skill yang telah dipelajari dari Level 1-6: HTML, CSS, JavaScript, dan opsional backend untuk contact form.

## Tujuan Project

Membangun website portfolio profesional yang menampilkan:
- Profil dan bio singkat
- Skills & teknologi yang dikuasai
- Daftar project yang pernah dibuat
- Pengalaman & pendidikan
- Form kontak yang berfungsi
- Tampilan **responsive** di semua device

## Fitur Wajib

- **Hero section** dengan foto dan tagline
- **About section** dengan bio lengkap
- **Skills section** dengan ikon teknologi
- **Projects section** dengan card project (gambar, deskripsi, link)
- **Experience section** (timeline pengalaman)
- **Contact form** dengan validasi
- **Navigation** smooth scroll
- **Dark/Light mode** toggle
- **Responsive** untuk mobile, tablet, desktop
- **SEO friendly** (meta tags, semantic HTML)

## Tech Stack

### Frontend
- **HTML5** semantic
- **CSS3** (Flexbox, Grid, animations)
- **JavaScript** (vanilla atau framework)
- **Tailwind CSS** atau Bootstrap (opsional)
- **Font Awesome** untuk ikon

### Opsional Backend
- **Node.js + Express** untuk contact form
- **Nodemailer** untuk kirim email
- **MongoDB** untuk simpan pesan

## Struktur Project

\`\`\`
portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── form.js
├── assets/
│   ├── images/
│   └── resume.pdf
├── server/           (opsional)
│   └── app.js
└── README.md
\`\`\`

## Langkah Implementasi

### 1. Planning & Wireframe (1 hari)
- Sketsa layout di paper atau Figma
- Tentukan color palette dan typography
- Kumpulkan konten: foto, project, deskripsi

### 2. Struktur HTML (1 hari)
\`\`\`html
<header>
  <nav>
    <div class="logo">Nama Kamu</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<section id="hero">
  <h1>Halo, Saya <span>Nama Kamu</span></h1>
  <p>Full-Stack Web Developer</p>
  <a href="#contact" class="btn">Hubungi Saya</a>
</section>

<section id="about">...</section>
<section id="skills">...</section>
<section id="projects">...</section>
<section id="contact">
  <form id="contact-form">
    <input type="text" name="nama" required>
    <input type="email" name="email" required>
    <textarea name="pesan" required></textarea>
    <button type="submit">Kirim</button>
  </form>
</section>
\`\`\`

### 3. Styling CSS (2-3 hari)
- Layout dengan Flexbox/Grid
- Animasi hover, scroll reveal
- Responsive breakpoints
- Dark mode dengan CSS variables

### 4. JavaScript Interaktif (1-2 hari)
- Smooth scroll navigation
- Mobile hamburger menu
- Form validation
- Scroll animations (Intersection Observer)
- Theme toggle

### 5. Contact Form Backend (opsional, 1 hari)
\`\`\`javascript
// server/app.js
app.post("/api/contact", async (req, res) => {
  const { nama, email, pesan } = req.body;
  // Kirim email dengan Nodemailer atau simpan ke DB
  await sendEmail(nama, email, pesan);
  res.json({ success: true });
});
\`\`\`

### 6. Deployment (1 hari)
- Deploy frontend: **Vercel**, **Netlify**, atau **GitHub Pages**
- Deploy backend: **Railway**, **Render**, atau **Vercel**
- Custom domain (opsional)

## Tantangan Tambahan

- **Blog section** dengan CMS sederhana
- **Project filter** berdasarkan teknologi
- **Multi-language** (Indonesia & English)
- **Animasi loading** saat awal buka
- **Print-friendly** resume
- **Analytics** (Google Analytics)

## Tips Sukses

- **Performance**: optimasi gambar, minify CSS/JS
- **Accessibility**: alt text, semantic HTML, keyboard nav
- **SEO**: meta tags, Open Graph, structured data
- **Konten**: tulis deskripsi yang menarik dan jelas

> **Hasil Akhir:** Portfolio yang menarik, cepat, dan profesional bisa menjadi kartu nama digital kamu untuk melamar kerja atau freelance.`,
    quiz: [
      {
        question: "Apa fitur yang paling penting di website portfolio?",
        options: [
          "Animasi yang rumit",
          "Tampilan project terbaik dan kontak yang jelas",
          "Banyak warna",
          "Musik latar"
        ],
        answer: 1,
        explanation: "Tujuan portfolio adalah showcase project dan memudahkan recruiter menghubungimu. Konten dan kontak jelas lebih penting dari animasi rumit."
      },
      {
        question: "Mengapa website portfolio harus responsive?",
        options: [
          "Agar loading cepat",
          "Agar tampil baik di semua device (mobile, tablet, desktop)",
          "Agar SEO naik",
          "Tidak perlu responsive"
        ],
        answer: 1,
        explanation: "Banyak recruiter mengakses portfolio via HP. Responsive memastikan website tampil optimal di semua ukuran layar."
      },
      {
        question: "Platform mana yang populer untuk deploy website portfolio statis gratis?",
        options: ["AWS EC2", "Vercel atau Netlify", "DigitalOcean", "Heroku"],
        answer: 1,
        explanation: "Vercel dan Netlify menyediakan hosting gratis untuk website statis dengan custom domain, HTTPS, dan CI/CD otomatis dari GitHub."
      }
    ]
  },
  {
    level: 7,
    order: 2,
    title: "Blog",
    slug: "project-blog",
    description: "Bangun platform blog lengkap dengan CMS, kategori, komentar, dan dashboard admin.",
    icon: "📝",
    isProject: true,
    content: `# Project: Blog Platform

**Blog Platform** adalah project full-stack yang menggabungkan frontend, backend, dan database. Kamu akan membangun aplikasi blog lengkap dengan CMS untuk menulis artikel, sistem kategori, dan komentar.

## Fitur Utama

### Publik (Frontend)
- **List artikel** dengan pagination
- **Detail artikel** dengan markdown rendering
- **Search** artikel by judul/konten
- **Filter** by kategori dan tag
- **Komentar** di setiap artikel
- **Share** ke social media
- **Related articles** di bawah artikel
- **Author profile**

### Admin (CMS Dashboard)
- **Login** admin
- **CRUD artikel** (create, read, update, delete)
- **Rich text editor** (markdown/WYSIWYG)
- **Upload gambar** untuk artikel
- **Kelola kategori & tag**
- **Moderasi komentar**
- **Draft & publish** scheduling
- **Analytics** sederhana (views, popular posts)

## Tech Stack

### Frontend
- **Next.js** atau vanilla JS
- **Tailwind CSS** untuk styling
- **marked.js** untuk render markdown
- **highlight.js** untuk syntax highlighting

### Backend
- **Node.js + Express**
- **Mongoose** untuk MongoDB
- **JWT** untuk auth admin
- **Multer** untuk upload gambar
- **slugify** untuk URL friendly

### Database Schema
\`\`\`javascript
// Article
{
  judul: String,
  slug: String,
  konten: String,        // markdown
  excerpt: String,
  gambar: String,        // URL
  kategori: ObjectId,
  tags: [String],
  author: ObjectId,
  status: "draft" | "published",
  views: Number,
  createdAt: Date,
  updatedAt: Date
}

// Kategori
{ nama: String, slug: String, deskripsi: String }

// Komentar
{ 
  artikel: ObjectId, 
  nama: String, 
  email: String, 
  teks: String,
  status: "pending" | "approved",
  createdAt: Date 
}
\`\`\`

## Struktur Project

\`\`\`
blog/
├── client/                # Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── lib/
│   └── package.json
├── server/                # Backend API
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── app.js
│   └── package.json
└── README.md
\`\`\`

## Langkah Implementasi

### 1. Setup & Database (1-2 hari)
- Buat Express server + MongoDB connection
- Definisikan schema Article, Kategori, Komentar, User
- Setup auth admin dengan JWT

### 2. API Backend (3-4 hari)
\`\`\`javascript
// routes/articles.js
router.get("/", getArticles);              // list dengan pagination
router.get("/:slug", getArticle);          // detail by slug
router.post("/", auth, createArticle);     // admin only
router.put("/:id", auth, updateArticle);
router.delete("/:id", auth, deleteArticle);

// routes/comments.js
router.post("/:articleId/comments", addComment);
router.get("/:articleId/comments", getComments);
router.delete("/:id", auth, deleteComment); // admin moderate
\`\`\`

### 3. Frontend Public (3-4 hari)
- Halaman home dengan list artikel
- Halaman detail artikel (render markdown)
- Search bar dengan debounce
- Filter kategori & tag
- Form komentar

### 4. Admin Dashboard (3-4 hari)
- Halaman login
- Dashboard dengan statistik
- List artikel dengan action edit/delete
- Form create/edit dengan markdown editor
- Upload gambar
- Manajemen komentar (approve/reject)

### 5. Fitur Tambahan (2-3 hari)
- **SEO**: meta tags dinamis, sitemap.xml
- **RSS feed**
- **Social share** buttons
- **Reading time** estimation
- **Table of contents** otomatis

### 6. Deployment (1 hari)
- Frontend: Vercel/Netlify
- Backend: Railway/Render
- Database: MongoDB Atlas
- Image storage: Cloudinary (gratis)

## Tantangan Lanjutan

- **Multi-author** (beberapa penulis dengan role)
- **Newsletter** subscribe
- **Email notification** untuk komentar baru
- **Search full-text** dengan Algolia
- **PWA** (Progressive Web App)
- **AMP** pages untuk mobile cepat

## Contoh: Controller Get Articles

\`\`\`javascript
exports.getArticles = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  
  const query = { status: "published" };
  if (req.query.kategori) query.kategori = req.query.kategori;
  if (req.query.search) {
    query.$text = { $search: req.query.search };
  }
  
  const articles = await Article.find(query)
    .populate("kategori author", "nama slug")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
    
  const total = await Article.countDocuments(query);
  
  res.json({
    data: articles,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    total
  });
};
\`\`\`

> **Tips:** Mulai dengan MVP (Minimum Viable Product)—artikel CRUD + tampilan publik. Tambah fitur kompleks secara bertahap.`,
    quiz: [
      {
        question: "Mengapa slug lebih baik digunakan di URL blog daripada ID?",
        options: [
          "Lebih cepat di database",
          "Lebih SEO friendly dan mudah dibaca manusia",
          "Lebih aman",
          "Menghemat storage"
        ],
        answer: 1,
        explanation: "Slug seperti '/belajar-nodejs' lebih SEO friendly dan mudah dibaca daripada '/article/6123abc'. Search engine lebih mudah mengindex."
      },
      {
        question: "Apa kegunaan middleware auth di admin dashboard blog?",
        options: [
          "Mempercepat loading",
          "Memastikan hanya admin yang bisa CRUD artikel",
          "Mengkompres gambar",
          "Render markdown"
        ],
        answer: 1,
        explanation: "Auth middleware memverifikasi JWT dan memastikan hanya admin yang bisa create/update/delete artikel. Tanpa auth, siapa saja bisa mengubah konten."
      },
      {
        question: "Library apa yang umum digunakan untuk render markdown menjadi HTML?",
        options: ["lodash", "marked.js", "axios", "mongoose"],
        answer: 1,
        explanation: "marked.js adalah library populer untuk convert markdown ke HTML. Sering dipakai di blog untuk render konten yang ditulis dalam markdown."
      }
    ]
  },
  {
    level: 7,
    order: 3,
    title: "Sistem Login",
    slug: "project-sistem-login-full",
    description: "Bangun sistem autentikasi lengkap dengan registrasi, login, OAuth, role, dan keamanan.",
    icon: "🔐",
    isProject: true,
    content: `# Project: Sistem Login Full-Stack

**Sistem Login Full-Stack** adalah project yang fokus pada autentikasi yang aman dan lengkap. Lebih komprehensif dari project Level 6—kali ini dengan frontend, OAuth, role management, dan fitur keamanan advanced.

## Fitur Utama

### Autentikasi
- **Register** dengan email verification
- **Login** dengan email/password
- **OAuth login** (Google, GitHub)
- **Forgot password** via email
- **Reset password** dengan token
- **Refresh token** mechanism
- **Logout** dengan token blacklist
- **Remember me** (extended session)

### Manajemen User
- **Profile page** (update nama, foto, bio)
- **Change password**
- **Upload avatar**
- **Delete account**
- **Session management** (lihat device aktif)

### Role & Permission
- **Role-based access control** (user, admin, superadmin)
- **Permission middleware**
- **Admin dashboard** (kelola user)
- **Ban/suspend user**

### Keamanan
- **Rate limiting** di endpoint login
- **Brute force protection**
- **2FA** (Two-Factor Authentication) dengan TOTP
- **Account lockout** setelah gagal login
- **Secure HTTP headers** (helmet)
- **CSRF protection**
- **XSS prevention**

## Tech Stack

### Frontend
- **Next.js** atau React
- **Tailwind CSS**
- **React Hook Form** untuk form
- **Zod** untuk validasi

### Backend
- **Node.js + Express**
- **Mongoose** (MongoDB)
- **bcrypt** (hash password)
- **jsonwebtoken** (JWT)
- **passport** (OAuth)
- **nodemailer** (email)
- **speakeasy** (2FA TOTP)
- **helmet**, **express-rate-limit** (security)
- **redis** (token blacklist, opsional)

## Database Schema

\`\`\`javascript
const userSchema = new Schema({
  nama: String,
  email: { type: String, unique: true },
  password: String,           // null jika OAuth only
  avatar: String,
  role: { type: String, enum: ["user", "admin", "superadmin"], default: "user" },
  isEmailVerified: { type: Boolean, default: false },
  emailVerifyToken: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  twoFactorSecret: String,
  twoFactorEnabled: { type: Boolean, default: false },
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date,
  provider: { type: String, enum: ["local", "google", "github"] },
  providerId: String,
  lastLogin: Date,
  createdAt: Date
});
\`\`\`

## Arsitektur Sistem

\`\`\`
┌─────────────┐     ┌──────────────┐     ┌────────────┐
│  Frontend   │────▶│  Backend API │────▶│ MongoDB    │
│  (Next.js)  │◀────│  (Express)   │◀────│            │
└─────────────┘     └──────┬───────┘     └────────────┘
                           │
                           ├────▶ Email Service (Nodemailer)
                           ├────▶ Redis (token blacklist)
                           └────▶ OAuth Provider (Google/GitHub)
\`\`\`

## Langkah Implementasi

### 1. Setup Project (1 hari)
- Buat struktur monorepo (frontend + backend)
- Setup environment variables (.env)
- Konfigurasi MongoDB Atlas dan Redis

### 2. Backend Auth Core (3-4 hari)
- User model dengan hash password
- Register endpoint dengan email verification
- Login endpoint dengan rate limiting
- JWT access + refresh token
- Logout dengan blacklist token di Redis
- Forgot/reset password flow

### 3. OAuth Integration (2 hari)
\`\`\`javascript
// Google OAuth dengan Passport
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  // Cari atau buat user berdasarkan Google ID
  let user = await User.findOne({ providerId: profile.id, provider: "google" });
  if (!user) {
    user = await User.create({
      nama: profile.displayName,
      email: profile.emails[0].value,
      provider: "google",
      providerId: profile.id,
      isEmailVerified: true
    });
  }
  done(null, user);
}));
\`\`\`

### 4. Frontend Auth Pages (3-4 hari)
- Login page dengan form + tombol OAuth
- Register page dengan validasi
- Forgot password page
- Reset password page
- 2FA setup page (QR code)
- Profile page

### 5. Role & Permission (2 hari)
- Middleware checkRole(["admin", "superadmin"])
- Admin dashboard (list user, ban, change role)
- Protected admin routes

### 6. Security Hardening (2 hari)
- Implementasi rate limiting
- Account lockout setelah 5x gagal
- 2FA dengan TOTP (Google Authenticator)
- Security headers dengan helmet
- Audit logging

### 7. Testing & Deployment (2 hari)
- Unit test untuk auth logic
- Integration test untuk flow lengkap
- Deploy ke production (Vercel + Railway + Atlas)

## Tantangan Lanjutan

- **Magic link login** (login via email tanpa password)
- **Biometric auth** (WebAuthn)
- **Session management** dengan device tracking
- **Audit log** untuk semua aksi user
- **Single Sign-On (SSO)** untuk multiple apps

## Contoh: Refresh Token Flow

\`\`\`javascript
// Saat login, kirim access token (15 menit) + refresh token (7 hari)
// Access token expired → frontend kirim refresh token → backend beri access token baru

app.post("/api/auth/refresh", async (req, res) => {
  const refreshToken = req.body.refreshToken;
  
  // Cek apakah token di-blacklist
  const blacklisted = await redis.get(\`blacklist:\${refreshToken}\`);
  if (blacklisted) return res.status(401).json({ error: "Token invalid" });
  
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    res.json({ accessToken });
  } catch {
    res.status(401).json({ error: "Refresh token invalid" });
  }
});
\`\`\`

> **Best Practice:** Gunakan HTTPS di production, simpan JWT di httpOnly cookie (bukan localStorage) untuk hindari XSS, dan selalu hash password dengan bcrypt.`,
    quiz: [
      {
        question: "Apa keuntungan menggunakan refresh token?",
        options: [
          "Membuat login lebih lambat",
          "Access token bisa berumur pendek (aman), tapi user tidak perlu login ulang terus",
          "Menghemat storage database",
          "Menghindari penggunaan password"
        ],
        answer: 1,
        explanation: "Refresh token memungkinkan access token berumur pendek (15 menit) untuk keamanan, tapi user tetap login karena refresh token (7 hari) bisa generate access token baru."
      },
      {
        question: "Mengapa perlu rate limiting di endpoint login?",
        options: [
          "Mempercepat server",
          "Mencegah brute force attack",
          "Menghemat bandwidth",
          "Untuk analytics"
        ],
        answer: 1,
        explanation: "Rate limiting membatasi jumlah request per IP/waktu, mencegah attacker menebak password dengan mencoba ribuan kombinasi (brute force)."
      },
      {
        question: "Apa manfaat OAuth (Google/GitHub login)?",
        options: [
          "Menghilangkan kebutuhan password",
          "User tidak perlu buat akun baru, lebih aman & nyaman",
          "Server tidak butuh database",
          "Membuat website lebih cepat"
        ],
        answer: 1,
        explanation: "OAuth memungkinkan user login dengan akun Google/GitHub yang sudah ada—lebih nyaman (tidak perlu ingat password baru) dan lebih aman (provider handle security)."
      }
    ]
  },
  {
    level: 7,
    order: 4,
    title: "Dashboard Admin",
    slug: "project-dashboard-admin",
    description: "Bangun dashboard admin lengkap dengan charts, tables, CRUD, dan manajemen data.",
    icon: "📊",
    isProject: true,
    content: `# Project: Dashboard Admin

**Dashboard Admin** adalah project yang fokus pada visualisasi data, manajemen resource, dan operasi CRUD yang kompleks. Project ini mengasah skill frontend (charts, tables) dan backend (API, query kompleks).

## Fitur Utama

### Dashboard Overview
- **Statistik cards** (total user, revenue, orders, dll)
- **Charts** (line, bar, pie, area) untuk visualisasi
- **Recent activity** feed
- **Quick actions** shortcut
- **Calendar** event

### Manajemen Data (CRUD)
- **User management** (list, search, filter, sort, pagination)
- **Product management** (CRUD dengan upload gambar)
- **Order management** (view, update status)
- **Category management**
- **Bulk actions** (select multiple, delete, export)

### Analitik & Report
- **Sales report** dengan filter tanggal
- **User growth** chart
- **Top products** analysis
- **Export** ke Excel/PDF
- **Custom date range** picker

### Sistem
- **Role & permission** (admin, editor, viewer)
- **Activity log** (audit trail)
- **Settings** (profile, preferences)
- **Notifications** (real-time via WebSocket)
- **Dark/Light mode**

## Tech Stack

### Frontend
- **React** atau Next.js
- **Tailwind CSS** + component library (shadcn/ui, Ant Design, MUI)
- **Recharts** atau Chart.js untuk visualisasi
- **React Table** (TanStack Table) untuk data tables
- **React Hook Form + Zod** untuk form

### Backend
- **Node.js + Express**
- **Mongoose** (MongoDB)
- **JWT auth** dengan role middleware
- **Multer** untuk upload
- **exceljs** atau pdfkit untuk export
- **Socket.io** untuk real-time notifications

## Struktur Database

\`\`\`javascript
// User
{ nama, email, role, status, avatar, createdAt }

// Product
{ nama, deskripsi, harga, stok, kategori, gambar, status }

// Order
{ 
  user, items: [{ product, qty, harga }], 
  total, status: "pending"|"paid"|"shipped"|"done",
  createdAt 
}

// Activity Log
{ user, aksi: "create"|"update"|"delete", target, detail, timestamp }
\`\`\`

## Struktur Frontend

\`\`\`
dashboard-admin/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/              # reusable components
│   │   ├── charts/
│   │   └── tables/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Users.tsx
│   │   ├── Products.tsx
│   │   ├── Orders.tsx
│   │   └── Reports.tsx
│   ├── hooks/
│   ├── lib/
│   │   ├── api.ts
│   │   └── auth.ts
│   └── App.tsx
└── package.json
\`\`\`

## Langkah Implementasi

### 1. Setup & Auth (2 hari)
- Setup React + Tailwind
- Implementasi login dengan JWT
- Protected routes (hanya admin bisa akses)
- Role-based menu (sidebar dinamis)

### 2. Layout & Navigation (2 hari)
- Sidebar dengan menu (Dashboard, Users, Products, Orders, Settings)
- Header dengan search, notifications, profile dropdown
- Responsive (sidebar collapse di mobile)
- Breadcrumb navigation

### 3. Dashboard Overview (2-3 hari)
\`\`\`jsx
function Dashboard() {
  return (
    <div>
      {/* Statistik Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total User" value="1,234" trend="+12%" />
        <StatCard title="Revenue" value="Rp 50jt" trend="+8%" />
        <StatCard title="Orders" value="567" trend="-3%" />
        <StatCard title="Products" value="89" trend="+5%" />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <LineChart data={salesData} title="Sales 7 Hari" />
        <BarChart data={categoryData} title="Kategori" />
      </div>
      
      {/* Recent Orders Table */}
      <RecentOrdersTable />
    </div>
  );
}
\`\`\`

### 4. User Management (3 hari)
- Table dengan search, filter, sort, pagination
- Modal create/edit user
- Delete dengan konfirmasi
- Bulk select & delete
- Export ke Excel

### 5. Product Management (3 hari)
- Grid atau table view
- CRUD dengan form lengkap
- Upload multiple gambar
- Filter by kategori
- Stock management

### 6. Charts & Analytics (2-3 hari)
- Line chart untuk sales trend
- Bar chart untuk perbandingan
- Pie chart untuk distribusi
- Date range picker untuk filter
- Custom query di backend untuk aggregate data

### 7. Real-time Notifications (2 hari)
- WebSocket (Socket.io) untuk notif real-time
- Toast notification saat order baru
- Badge counter di header

### 8. Export & Report (2 hari)
\`\`\`javascript
// Backend: Export ke Excel
const ExcelJS = require("exceljs");

app.get("/api/users/export", auth, async (req, res) => {
  const users = await User.find();
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Users");
  sheet.columns = [
    { header: "Nama", key: "nama" },
    { header: "Email", key: "email" },
    { header: "Role", key: "role" }
  ];
  users.forEach(u => sheet.addRow(u));
  
  res.setHeader("Content-Type", "application/vnd.openxmlformats");
  res.setHeader("Content-Disposition", "attachment; filename=users.xlsx");
  await workbook.xlsx.write(res);
  res.end();
});
\`\`\`

## Tantangan Lanjutan

- **Multi-tenant** (multiple organization dalam 1 dashboard)
- **Customizable widgets** (drag & drop layout)
- **Advanced filtering** dengan saved filters
- **Real-time collaboration** (lihat user lain online)
- **AI insights** (prediksi trend, anomali detection)

## Tips UX untuk Dashboard

- **Loading state**: skeleton saat fetch data
- **Empty state**: tampilan saat tidak ada data
- **Error handling**: tampilkan error yang jelas
- **Keyboard shortcuts** untuk power user
- **Performance**: lazy load, virtualization untuk table besar

> **Best Practice:** Gunakan component library (shadcn/ui, Ant Design) untuk konsistensi UI. Optimasi performance dengan pagination dan virtual scroll untuk data besar.`,
    quiz: [
      {
        question: "Library apa yang umum digunakan untuk membuat charts di React?",
        options: ["axios", "Recharts atau Chart.js", "mongoose", "express"],
        answer: 1,
        explanation: "Recharts dan Chart.js adalah library populer untuk visualisasi data di React. Recharts lebih React-friendly, Chart.js lebih fleksibel."
      },
      {
        question: "Apa pentingnya role & permission di dashboard admin?",
        options: [
          "Mempercepat loading",
          "Membatasi akses user sesuai role (admin, editor, viewer)",
          "Mengkompres data",
          "Render charts"
        ],
        answer: 1,
        explanation: "Role & permission memastikan user hanya bisa akses fitur sesuai levelnya. Editor mungkin bisa edit konten tapi tidak bisa hapus user, viewer hanya bisa lihat."
      },
      {
        question: "Mengapa dashboard perlu pagination di table dengan banyak data?",
        options: [
          "Agar lebih mudah dihitung",
          "Performance—load semua data sekalian akan lambat",
          "Untuk SEO",
          "Tidak perlu pagination"
        ],
        answer: 1,
        explanation: "Load ribuan baris sekaligus akan lambat dan memakan memori. Pagination hanya load 10-50 baris per halaman, jauh lebih cepat dan ringan."
      }
    ]
  },
  {
    level: 7,
    order: 5,
    title: "E-Commerce Sederhana",
    slug: "project-ecommerce",
    description: "Bangun toko online lengkap dengan katalog, cart, checkout, dan payment integration.",
    icon: "🛒",
    isProject: true,
    content: `# Project: E-Commerce Sederhana

**E-Commerce Sederhana** adalah project paling komprehensif yang menggabungkan semua skill: frontend, backend, database, autentikasi, payment, dan banyak fitur kompleks. Project ini adalah showcase terbaik untuk portofolio kamu.

## Fitur Utama

### Customer (Pembeli)
- **Browse produk** dengan filter (kategori, harga, rating)
- **Search** produk dengan autocomplete
- **Detail produk** dengan gambar, deskripsi, review
- **Cart** (tambah, hapus, ubah qty)
- **Wishlist** (simpan favorit)
- **Checkout** dengan alamat pengiriman
- **Payment** (Midtrans, Xendit, atau simulasi)
- **Order history** dan tracking
- **Review & rating** produk
- **Profile management**

### Admin (Penjual)
- **Dashboard** dengan statistik penjualan
- **Product CRUD** (dengan multiple gambar, variant)
- **Order management** (update status, shipping)
- **Customer management**
- **Category & brand management**
- **Promo/voucher** management
- **Sales report** dan analytics
- **Inventory management** (stok)

### Sistem
- **Autentikasi** (register, login, JWT, OAuth)
- **Role-based access** (customer, admin)
- **Search engine** (full-text search)
- **Email notification** (order confirmation, shipping)
- **Real-time** stock update

## Tech Stack

### Frontend
- **Next.js** (SSR untuk SEO produk)
- **Tailwind CSS** + shadcn/ui
- **Zustand** atau Redux (state management cart)
- **React Query** (data fetching & caching)

### Backend
- **Node.js + Express**
- **Mongoose** (MongoDB)
- **JWT** + **bcrypt**
- **Midtrans/Xendit SDK** (payment gateway)
- **Nodemailer** (email)
- **Multer + Cloudinary** (gambar)
- **Socket.io** (real-time notif)

### Third-party
- **Midtrans** atau **Xendit** (payment)
- **Cloudinary** (image storage)
- **RajaOngkir API** (cek ongkir)
- **SendGrid** (email transactional)

## Database Schema

\`\`\`javascript
// Product
{
  nama: String,
  slug: String,
  deskripsi: String,
  harga: Number,
  hargaDiskon: Number,
  stok: Number,
  kategori: ObjectId,
  brand: String,
  gambar: [String],
  variant: [{ nama: String, opsi: [String] }], // ukuran, warna
  rating: Number,
  jumlahReview: Number,
  terjual: Number,
  status: "active" | "draft" | "archived"
}

// Cart
{ user: ObjectId, items: [{ product: ObjectId, qty: Number, variant: Object }] }

// Order
{
  user: ObjectId,
  items: [{ product, qty, harga, subtotal }],
  total: Number,
  ongkir: Number,
  alamat: { penerima, telepon, alamatLengkap, kota, kodePos },
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled",
  payment: { metode, transactionId, status },
  createdAt: Date
}

// Review
{ product: ObjectId, user: ObjectId, rating: Number, teks: String, createdAt }
\`\`\`

## Langkah Implementasi

### 1. Planning & Setup (2 hari)
- Rancang database schema
- Setup project (Next.js + Express)
- Konfigurasi environment (.env)
- Setup MongoDB Atlas, Cloudinary

### 2. Auth & User (2-3 hari)
- Register, login, JWT
- Role customer & admin
- Profile management
- OAuth (opsional)

### 3. Product Management (3-4 hari)
- Admin: CRUD produk dengan multiple gambar
- Upload ke Cloudinary
- Variant produk (size, color)
- Category management
- Frontend: list, filter, search, detail

### 4. Cart & Checkout (3-4 hari)
\`\`\`javascript
// Cart state dengan Zustand
const useCart = create((set) => ({
  items: [],
  addToCart: (product) => set((state) => ({
    items: [...state.items, product]
  })),
  removeFromCart: (id) => set((state) => ({
    items: state.items.filter(i => i.id !== id)
  })),
  total: () => get().items.reduce((sum, i) => sum + i.harga * i.qty, 0)
}));

// Checkout: simpan order ke DB
app.post("/api/orders", auth, async (req, res) => {
  const { items, alamat } = req.body;
  const total = items.reduce((sum, i) => sum + i.harga * i.qty, 0);
  const order = await Order.create({
    user: req.user.id, items, total, alamat, status: "pending"
  });
  // Buat payment di Midtrans
  const payment = await midtrans.createTransaction({
    transaction_details: { order_id: order._id, gross_amount: total }
  });
  res.json({ order, payment });
});
\`\`\`

### 5. Payment Integration (2-3 hari)
- Integrasi Midtrans/Xendit
- Handle webhook (payment success → update order)
- Email konfirmasi setelah pembayaran
- Order status tracking

### 6. Order Management Admin (2 hari)
- List order dengan filter status
- Update status (paid → shipped → delivered)
- Input no resi
- Notification ke customer via email

### 7. Review & Rating (2 hari)
- Customer bisa review produk yang sudah dibeli
- Rating otomatis update di produk
- Moderasi review oleh admin

### 8. Search & Filter (2 hari)
- Full-text search di produk
- Filter: kategori, harga, rating, brand
- Sort: termurah, termahal, terlaris, terbaru
- Pagination dengan infinite scroll

### 9. Admin Dashboard (2-3 hari)
- Statistik penjualan (revenue, orders, products)
- Chart penjualan per bulan
- Top products
- Recent orders
- Low stock alert

### 10. Testing & Deployment (2 hari)
- Test flow lengkap: register → belanja → checkout → bayar
- Deploy frontend (Vercel) + backend (Railway) + DB (Atlas)
- Setup custom domain

## Tantangan Lanjutan

- **Multi-vendor** (marketplace dengan banyak penjual)
- **Live chat** customer service
- **Wishlist & save for later**
- **Loyalty points** system
- **Coupon/voucher** kompleks (persen, nominal, free shipping)
- **Recommendation engine** (produk terkait)
- **PWA** untuk mobile app-like experience
- **Internationalization** (multi-currency, multi-language)

## Contoh: Webhook Payment

\`\`\`javascript
app.post("/api/payment/webhook", async (req, res) => {
  const { order_id, transaction_status } = req.body;
  
  // Verifikasi signature dari Midtrans
  if (!verifySignature(req.body)) return res.status(403).send();
  
  const order = await Order.findById(order_id);
  if (!order) return res.status(404).send();
  
  if (transaction_status === "settlement" || transaction_status === "capture") {
    order.status = "paid";
    // Kurangi stok produk
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, { $inc: { stok: -item.qty } });
    }
    // Kirim email konfirmasi
    await sendOrderConfirmation(order);
  }
  await order.save();
  res.status(200).send("OK");
});
\`\`\`

> **Best Practice:** Mulai dengan MVP—product list, cart, checkout simulasi (tanpa payment real). Tambah payment gateway setelah flow dasar berjalan. Selalu handle webhook dengan verifikasi signature.`,
    quiz: [
      {
        question: "Mengapa e-commerce perlu webhook dari payment gateway?",
        options: [
          "Untuk mempercepat website",
          "Menerima notifikasi otomatis saat pembayaran berhasil dan update order",
          "Untuk menampilkan gambar",
          "Mengirim email ke customer"
        ],
        answer: 1,
        explanation: "Webhook memungkinkan payment gateway (Midtrans) memberi tahu server kita secara otomatis saat pembayaran berhasil, sehingga status order bisa diupdate tanpa polling manual."
      },
      {
        question: "State management library apa yang cocok untuk cart di React?",
        options: ["axios", "Zustand atau Redux", "mongoose", "tailwind"],
        answer: 1,
        explanation: "Zustand atau Redux cocok untuk state global seperti cart yang diakses di banyak komponen. axios untuk HTTP request, bukan state."
      },
      {
        question: "Apa yang harus dilakukan saat webhook payment diterima?",
        options: [
          "Langsung update status order tanpa verifikasi",
          "Verifikasi signature webhook, baru update order dan kurangi stok",
          "Kirim email ke semua user",
          "Hapus data cart"
        ],
        answer: 1,
        explanation: "Selalu verifikasi signature webhook untuk memastikan request benar-benar dari payment gateway (bukan attacker). Setelah valid, update status order dan kurangi stok produk."
      }
    ]
  },
  {
    level: 7,
    order: 6,
    title: "Website Belajar Coding",
    slug: "project-belajar-coding",
    description: "Bangun platform e-learning coding interaktif dengan materi, quiz, dan progress tracking.",
    icon: "🎓",
    isProject: true,
    content: `# Project: Website Belajar Coding

**Website Belajar Coding** adalah project paling kompleks dan menarik—kamu akan membangun platform e-learning seperti yang sedang kamu gunakan sekarang! Project ini menggabungkan semua skill: frontend, backend, database, autentikasi, dan content management.

## Fitur Utama

### Student (Pembelajar)
- **Learning path** dengan level (1-7)
- **Materi** dalam format markdown dengan code examples
- **Code editor** interaktif (jalankan kode di browser)
- **Quiz** dengan auto-grading
- **Progress tracking** (materi selesai, level, skor)
- **Achievement/badges** sistem gamification
- **Sertifikat** setelah menyelesaikan level
- **Leaderboard** kompetisi
- **Forum diskusi** antar student
- **Bookmark** materi favorit

### Instructor (Pengajar)
- **CMS** untuk membuat materi (markdown editor)
- **Quiz builder** dengan multiple choice
- **Analytics** progres student
- **Manajemen student** (enroll, progress)
- **Komentar/moderasi** forum

### Admin
- **User management** (student, instructor, admin)
- **Content management** (approve materi)
- **Site settings**
- **Analytics dashboard**

## Tech Stack

### Frontend
- **Next.js** (SSR/SSG untuk SEO materi)
- **Tailwind CSS** + shadcn/ui
- **Monaco Editor** (code editor seperti VS Code)
- **react-markdown** + rehype-highlight (render materi)
- **Zustand** (state management)
- **React Query** (data fetching)

### Backend
- **Node.js + Express** atau Next.js API routes
- **Prisma** atau **Mongoose** (database ORM)
- **PostgreSQL** atau MongoDB
- **JWT** + bcrypt
- **Code execution sandbox** (Docker untuk run kode user)
- **Bull/BullMQ** (job queue untuk grading)

### Third-party
- **Judge0** atau **Piston API** (execute code user)
- **Stripe/Midtrans** (subscription premium)
- **SendGrid** (email notifikasi)
- **Sentry** (error monitoring)

## Database Schema

\`\`\`javascript
// Level
{ 
  level: Number, 
  judul: String, 
  deskripsi: String, 
  icon: String,
  order: Number 
}

// Material
{
  level: Number,
  order: Number,
  judul: String,
  slug: String,
  deskripsi: String,
  konten: String,        // markdown
  isProject: Boolean,
  quiz: [{
    pertanyaan: String,
    opsi: [String],
    jawaban: Number,
    penjelasan: String
  }]
}

// UserProgress
{
  user: ObjectId,
  material: ObjectId,
  completed: Boolean,
  quizScore: Number,
  completedAt: Date
}

// User
{
  nama, email, password, role: "student"|"instructor"|"admin",
  level: Number,         // level tertinggi yang diakses
  xp: Number,            // experience points
  badges: [String],
  enrolledAt: Date
}

// Submission (untuk project)
{
  user: ObjectId,
  project: ObjectId,
  kode: String,
  status: "pending"|"reviewed"|"approved",
  feedback: String,
  submittedAt: Date
}
\`\`\`

## Langkah Implementasi

### 1. Planning & Setup (2 hari)
- Rancang schema database
- Setup Next.js + Prisma/Mongoose
- Konfigurasi database (PostgreSQL/Atlas)
- Setup authentication

### 2. Auth & User Roles (2-3 hari)
- Register, login, JWT
- Role: student, instructor, admin
- Middleware proteksi route by role
- Profile & settings

### 3. Content Management (3-4 hari)
- Schema Level & Material
- Instructor CMS: CRUD materi dengan markdown editor
- Quiz builder UI
- Preview materi sebelum publish

### 4. Student Learning Interface (3-4 hari)
\`\`\`jsx
function MaterialPage({ material }) {
  const [progress, setProgress] = useState(null);
  
  return (
    <div>
      {/* Sidebar: list materi per level */}
      <Sidebar level={material.level} current={material.order} />
      
      {/* Konten materi */}
      <article>
        <ReactMarkdown 
          rehypePlugins={[rehypeHighlight]}
        >
          {material.konten}
        </ReactMarkdown>
        
        {/* Quiz */}
        <Quiz 
          questions={material.quiz} 
          onComplete={(score) => saveProgress(material._id, score)} 
        />
        
        {/* Navigasi */}
        <NavButton prev={prevMaterial} next={nextMaterial} />
      </article>
    </div>
  );
}
\`\`\`

### 5. Interactive Code Editor (3-4 hari)
- Integrate Monaco Editor
- Execute kode user via Judge0/Piston API
- Show output real-time
- Save & submit kode
\`\`\`javascript
// Backend: execute kode user
app.post("/api/run", async (req, res) => {
  const { kode, bahasa } = req.body;
  
  // Kirim ke Judge0 API
  const response = await axios.post("https://judge0.com/submissions", {
    source_code: kode,
    language_id: getLanguageId(bahasa)
  });
  
  // Polling hasil
  const result = await pollResult(response.data.token);
  res.json({ output: result.stdout, error: result.stderr });
});
\`\`\`

### 6. Progress Tracking & Gamification (2-3 hari)
- Track materi completed
- Hitung XP & level
- Unlock materi berikutnya setelah quiz lulus
- Achievement badges (first quiz, streak 7 hari, dll)
- Leaderboard weekly/monthly

### 7. Quiz System (2 hari)
- Multiple choice dengan auto-grading
- Tracking skor per materi
- Minimal skor untuk lanjut (misal 70%)
- Retry quiz
- Explanation setelah submit

### 8. Forum Diskusi (2-3 hari)
- Thread per materi
- Reply & like
- Markdown support
- Moderasi by instructor
- Notification reply

### 9. Sertifikat & Achievement (2 hari)
- Generate sertifikat PDF setelah selesai level
- Unique certificate ID
- Share ke LinkedIn
- Badge system visual

### 10. Admin Dashboard (2-3 hari)
- Statistik: total student, completion rate
- Manajemen user & role
- Approve materi dari instructor
- Analytics per level (dropout point)

## Tantangan Lanjutan

- **Live coding session** (WebSocket real-time)
- **AI tutor** (chatbot bantu jawab pertanyaan)
- **Pair programming** feature
- **Code review** peer-to-peer
- **Career path** (learning path terstruktur)
- **Premium content** (subscription)
- **Mobile app** (React Native)
- **Multi-language** materi

## Contoh: Progress Tracking Logic

\`\`\`javascript
// Saat student selesai quiz
async function completeQuiz(userId, materialId, score) {
  // Simpan progress
  await UserProgress.findOneAndUpdate(
    { user: userId, material: materialId },
    { completed: true, quizScore: score, completedAt: new Date() },
    { upsert: true }
  );
  
  // Tambah XP
  const xp = score >= 70 ? 100 : 50;
  await User.findByIdAndUpdate(userId, { $inc: { xp } });
  
  // Cek achievement
  const totalCompleted = await UserProgress.countDocuments({ 
    user: userId, completed: true 
  });
  if (totalCompleted === 1) {
    await User.findByIdAndUpdate(userId, { $push: { badges: "first_quiz" } });
    // Notifikasi
  }
  
  // Unlock materi berikutnya
  const material = await Material.findById(materialId);
  const nextMaterial = await Material.findOne({
    level: material.level,
    order: material.order + 1
  });
  return { xp, nextMaterial };
}
\`\`\`

## Tips Sukses

- **Konten adalah raja**: pastikan materi berkualitas & akurat
- **UX adalah kunci**: progress yang jelas, feedback instan
- **Performance**: caching materi, lazy load code editor
- **Gamification**: jadikan belajar menyenangkan dengan XP, badge, leaderboard
- **Komunitas**: forum diskusi penting untuk retention

> **Hasil Akhir:** Platform e-learning yang interaktif dan engaging akan menjadi showcase terbaik skill kamu. Plus, kamu membantu orang lain belajar coding!`,
    quiz: [
      {
        question: "Mengapa platform belajar coding perlu code editor interaktif?",
        options: [
          "Agar tampil lebih keren",
          "Student bisa langsung praktik dan lihat output kode mereka",
          "Untuk menghemat server",
          "Menggantikan backend"
        ],
        answer: 1,
        explanation: "Belajar coding paling efektif dengan praktik. Code editor interaktif memungkinkan student menulis kode dan langsung melihat hasilnya—belajar by doing."
      },
      {
        question: "Apa manfaat gamification (XP, badge, leaderboard) di platform belajar?",
        options: [
          "Mempercepat server",
          "Meningkatkan motivasi dan retention student",
          "Menggantikan sistem nilai",
          "Untuk analytics"
        ],
        answer: 1,
        explanation: "Gamification (XP, achievement, leaderboard) memicu motivasi intrinsik dan ekstrinsik, membuat student lebih engaged dan cenderung lanjut belajar (retention tinggi)."
      },
      {
        question: "Bagaimana cara menentukan student bisa lanjut ke materi berikutnya?",
        options: [
          "Selalu bisa lanjut langsung",
          "Lewat quiz dengan minimal skor tertentu (misal 70%)",
          "Setelah membaca materi 3 kali",
          "Acak"
        ],
        answer: 1,
        explanation: "Quiz dengan minimal skor memastikan student benar-benar paham materi sebelum lanjut. Ini menjaga kualitas pembelajaran dan mencegah student tertinggal di materi advanced."
      }
    ]
  }
];
