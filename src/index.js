// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
	return Symbol(propertyName);	
};
const createProtoMagicObject = () => {
	return Function;
};

const incrementor = (() => {
	let col = 0;
	Function.__proto__.toString = () => {return col;};
	return () => {
		col++;
		return incrementor;
	}	
})();

let count = 0;
const asyncIncrementor = () => {	
    return new Promise((resolve) => {
        resolve(++count);
    })	
};

const createIncrementer = () => {
	let count = 0;

    function* Incrementor() {
        while (true) {
            yield ++count;
        }
    }
    return Incrementor();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	    return new Promise((resolve) => {
        setTimeout(() => { resolve(param); }, 1000)
    })
};
const getDeepPropertiesCount = (obj) => {
	    let count = 0,
        i = 0;

    temp = obj;
    while (Object.values(temp).length != 0) {
        count += Object.values(temp).length;
        count += Object.values(temp[i]).length;
        temp = temp[i][i];
        i++;
        if (i > 99) {
            i = 0;
        }
    }
    return count;
};
const createSerializedObject = () => {return null;};

const toBuffer = () => {};

const sortByProto = (arr) => {
	arr.sort((a, b) => {
      if (a.__proto__ < b.__proto__) {
          return -1;
      } else {
          return 1;
      }
    });
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;