function metaDataParser(version = 0, channel = 0, keyFields = 0) {

  let _version = version;
  let _channel = channel;
  let _keyFields = keyFields;

  this.setVersion = (version) => {
    _version = version;
  }

  this.setChannel = (channel) => {
    _channel = channel;
  }

  this.setKeyField = (keyFields) => {
    _keyFields = keyFields;
  }

  this.getVersion = () => {
    return _version;
  }

  this.getChannel = () => {
    return _channel;
  }

  this.getKeyField = () => {
    return _keyFields;
  }
  
  this.getKeyFields = (objArray)=> {

    let result= [];
    objArray.forEach((element) => {
      result.push(element.channel);
    });
    
    return result;
  }


}


let obj = new metaDataParser(1,2,3);

obj.setVersion(3);
obj.setChannel(4);
obj.setKeyField(5);

console.log(obj.getVersion());
console.log(obj.getChannel());
console.log(obj.getKeyField());



var objArray = [{ "channel": "A" }, { "channel": "B" }, { "channel": "C" }];
console.log(obj.getKeyFields(objArray));

