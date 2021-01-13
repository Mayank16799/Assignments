class MyArray {
    constructor(array) {
      this.originalArray = array;
  
    }
    getSorted(key) {
          
        if(key)
        return this.originalArray.sort((a, b) => {
          return a[key] > b[key] ? 1 : -1;
        });
        else
        return this.originalArray.sort();
    }
  }
  
  class SortObjectArray extends MyArray {
    constructor(objArray) {
      super(objArray);
    }
  
    getSortedObjectArray(key) {
      return this.getSorted(key);
    }
  }
  
  let obj1 = new MyArray([6, 3, 8, 4, 9, 0]);
  console.log(obj1.getSorted());
  
  let obj2 = new SortObjectArray([{
      name: "Mayank",
      age: 21,
      height: 56,
      weigth: 44
    },
    {
      name: "nipun",
      age: 34,
       height: 33,
      weigth: 36
    },
    {
      name: "akshay",
      age: 7,
       height: 66,
      weigth: 12
    },
    {
      name: "sid",
      age: 300,
       height: 23,
      weigth: 65
    },
  ], );
  
  console.log(obj2.getSortedObjectArray("height"));
  