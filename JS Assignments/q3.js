let objArray = [
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
];


function groupObjectsBy(objArray,  key ){

  let result = {};
  objArray.forEach((element) => {

      if(result[element.key]){
          result[element.key].push(element);
      }else{
          result[element[key]] = [element];         
      }
  });

  return result;

}

result = groupObjectsBy(objArray,"channel");
console.log(result);