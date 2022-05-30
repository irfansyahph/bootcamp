/** 
  Diketahui rumus area = pi * radius * radius dimana pi = 3.14159, r = radius buat function dengan nama getAreaCircle(r)
  Output Contraint : 
  getAreaCircle('-1'); //return radius -1 <= 0, try higher
  getAreaCircle('a');  //return Inputan harus dalam angka
  getAreaCircle(5);    //retun 78.53975
 */

  function getAreaCircle(r) {
    pi = 3.14159
    area = pi * r * r
    if (r <= 0) {
        return "radius -1 <= 0, try higher"
    } else if (isNaN(r)) {
        return "inputan harus dalam angka"
    } else {
        return area
    }
}


console.log(getAreaCircle('-1')); //return radius -1 <= 0, try higher
console.log(getAreaCircle('a'));  //return Inputan harus dalam angka
console.log(getAreaCircle(5));    //retun 78.53975

