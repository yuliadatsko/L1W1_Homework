// 1.1. Currency Converter

var dollars = prompt("How many USD?");
var converter = function () { 
	uah = 26
	return (dollars * uah);
}
	console.log(uah);

// 1.2. Min and max numbers
var array = [13, 4, -6];
var max = getMax(array);
var min = getMin(array);

function getMax(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
    	if (max < array[i]) max = array[i];
    } return max;
} function getMin(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
} 
console.log(max);
console.log(min);


// 1.3. Average number of values
 var arr [underfinded];
 var sum = 0;
 
 for (i = 0; i < arr.length; i++ ) {
 	sum += array[i];
 return sum = sum / arr.length;
 }
console.log(sum);


// 2. Recursive function
function recurs(n) { 
   console.log(n)
   if (n <=1) {
   	return n;
   } 
   	else 
   	recurs(n - 1);
}
recurs(10)


// 3. Resolve all issues in the code
const users = {
  1: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  2: {
    name: 'Ivan',
    lastName: 'Bondarenko',
    otherData: {
      role: 'student'
    }
  },
  3: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  
  4: {
    name: 'Oleg',
    lastName: 'Murko',
    otherData: {
      role: 'student'
    }
  },
  5: {
    name: 'Kurz',
    lastName: 'Smith'
     },
   };

Object.keys(users).forEach(function(key) {
  const user = users[key];
  
  if(user) {
     console.log('name: ', user.name);
     console.log('last name: ', user.lastName);
     console.log('role: ', user.otherData);
  }
});


// 4. Triagle
function makeTriagle() {
 var triagle = "";
 for (var i = 1; i <= 8; i++) {
 	for (var j = 1; j <= i; j++) {
 		triagle += "# ";
 	}
 	console.log(triagle);
 	triagle = "";
 	}
 }
 makeTriagle();

 // 5. Fibonacci sequence
 var num = prompt("Enter your number");
 function fibonacci(num) {
 if (num <= 1) { 
 	return 1;
 }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(num));