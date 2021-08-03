// Your code here

class Polygon {
  constructor(arr){
    //arr of ints that represent each side of shape
    this.arr = arr;
  }
  get countSides(){
    return this.arr.length
  }
  get perimeter(){
    return this.arr.reduce((total, currVal) => total + currVal)
  }
}

class Triangle extends Polygon {
  get isValid(){
    return this.countSides === 3 && this.verifyTriangle;
  }
  get verifyTriangle(){
    let side1 = this.arr[0];
    let side2 = this.arr[1];
    let side3 = this.arr[2]
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
  }
}

class Square extends Polygon {

 get isValid(){
   return this.countSides === 4 && this.checkLengths; 
 }
 get checkLengths(){
  let side = this.arr[0];
  return (this.arr[1]) === side && (this.arr[2] === side) && (this.arr[3] === side);
 }
 get area(){
   return this.arr[1] * this.arr[1]
 }
}