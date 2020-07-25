// 자바 스크립트 객체는 모두 자신의 부모 역할을 하는 객체와 연결되어진다.
// 이는 객체지향의 상속의 개념과 유사하며, 이러한 부모역할의 객체를 프로토 타입이라고 한다.

```javascript
[[Prototype]] vs prototype 프로퍼티
모든 객체는 internal slot 자신의 프로토타입 객체를 가지는 슬롯을 지니고 있다.
"함수" 객체 또한 interan slot을 가지지만, prototype 프로퍼티 또한 지닌다.

[[Prototype]]
함수포함 모든 객체가 가지는 인터널 슬롯이다. (함수형 객체와, 그냥 객체를 여기서 구분하고 생각하는게 좋다.)
객체의 기준으로는 자신의 부모역할을 하는 "프로토타입 객체"를 가리킨다.
"함수 객체"의 경우에는 Function.prototype(프로토타입 객체)을 가리킨다.

prototype 프로퍼티
함수 객체만이 가지고 있다.
함수 객체가 생성자로 사용되어 질 때에, "생성되어질 객체"의 부모역할을 하는 객체(프로토타입 객체)를 가리킨다. 
//example
console.log(Person.prototype === foo.__proto__);

- constructor 프로퍼티
"프로토타입 객체"는 constructor 프로퍼티를 갖는다. 객체의 입장에서 자신을 생성한 객체를 가리킨다.

ex ) Person()생성자 함수로 생성되어진 객체를 foo라 하였을 때, foo 객체를 생성한 객체는 Person()생성자 함수이다. 이 때 foo 객체의 프로토 타입 객체는 자신을 생성한 생성자 객체인
Person.prototype이 된다. 그렇기 때문에, Person.prototype의 constructor프로퍼티는 Person()생성자 함수 객체를 가리키게 된다.

function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);


```

4. Prototype chain
자바스크립트의 경우 특정한 객체의 프로퍼티 혹은 메소드에 접근하려 할 때, 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없는 경우 [[Prototype]]이 가리키는 링크를 따라서 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티 혹은 메소드를 차례대로 검색한다. 이것이 프로토 타입 체인이다.

```js
var student = {
  name: 'Lee',
  score: 90
}

// 본래라면 현재 객체에 없는 메소드를 참조하였기에 에러가 나야 하지만 
// [[Prototype]]의 링크를 따라 해당 객체의 부모 역할을 하는 Object.prototype의
// hasOwnProperty를 호출하였기에 가능하게 된 것이다.
console.log(student.hasOwnProperty('name')); // true

// 하단을 보면 프로토타입의 상관 관계를 잘 이해할 수 있다.
var student = {
  name: 'Lee',
  score: 90
}
console.dir(student);
console.log(student.hasOwnProperty('name')); // true
console.log(student.__proto__ === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
```

4.1 객체 리터럴 방식으로 생성되어진 객체의 프로토타입 체인

객체의 생성 방법에는 3가지를 가진다.
- 객체 리터럴
객체 리터럴 방식으로 생성되어진 객체는 결국 내장함수인 Object()생성자 함수로 객체를 생성하는 것을 단순화 한 것이다. 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부에서 Object()생성자 함수를 사용하여 객체를 생성시킨다.
- 생성자 함수

- Object() 생성자 함수
함수 객체인 Object()생성자 함수는 일반 객체와는 달리 prototype프로퍼티를 지니고 있다. (생성자 함수의 특징)

-- prototype 프로퍼티의 경우, 함수 객체가 생성자로써 이용 되어질 때, 함수를 통해 생성된 객체의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리키게 된다.

-- [[Prototype]]은 객체 입장에서 자신의 부모의 역할을 하는 객체, 즉 프로토 타입객체를 가리킨다.
```js

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function(){
    console.log('Hi! my name is ' + this.name);
  }
};

console.dir(person);

//리터럴 방식을 이용하는 경우의 상관관계..
console.log(person.__proto__ === Object.prototype);   // ① true
console.log(Object.prototype.constructor === Object); // ② true
console.log(Object.__proto__ === Function.prototype); // ③ true
console.log(Function.prototype.__proto__ === Object.prototype); // ④ true
```

결론적으로 객체 리터럴을 통해 객체를 생성한 경우, 객체의 프로토타입은  Object.prototype이 된다.

### 4.2 생성자 함수 로 생성된 객체의 프로토타입 체인
생성자 함수의 객체 생성 방식은 3가지 이다.
- Function declaration
- Function expression
- Function 생성자 함수

함수표현식으로 함수를 정의하게 되면 함수 리터럴 방식을 사용한다.
```js
var square = function(number) {
  return number * number;
};

```

함수선언식은 자바스크립트 엔진이 내부적으로 기명 함수 표현식으로 변환을 한다.
```js
var square =function square(number) {
  return number * number;
}
```

결국 함수 표현식, 선억식 모두 리터럴 방식을 사용한다. Function생성자 함수로 생성하는 것을 단순화 시킨 방식이다.

> 결론적으로 위 3가지 방식은 모두 Function생성자 함수를 통해서 생성을 하게 된다. 그렇기 때문에 모든 "함수 객체"의 prototype객체는 Function.prototype이다.
> 생성자 함수도 함수 객체이므로 생성자 함수의 prototype객체 또한, Function.prototype이다.

```js
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! my name is ' + this.name);
  };
}

var foo = new Person('Lee', 'male');

console.dir(Person);
console.dir(foo);

console.log(foo.__proto__ === Person.prototype);                // ① true
console.log(Person.prototype.__proto__ === Object.prototype);   // ② true
console.log(Person.prototype.constructor === Person);           // ③ true
console.log(Person.__proto__ === Function.prototype);           // ④ true
console.log(Function.prototype.__proto__ === Object.prototype); // ⑤ true
```
> foo 객체의 프로토타입 객체 Person.prototype 객체와 Person()생성자 함수의 프로토타입 객체인 Function.prototpye의 프로토타입 객체는
결국 Object.prototype객체 이다.

> 이는 객체리터럴 생성자 함수 방식이나 결국은 모두 부모의 객체인 Object.prototype 객체에서 프로토타입 체인이 끝나기 때문이다. 이 때 
Object.prototoype 객체를 __End of prototype chain__ 이라고 한다.

### 5.프로토타입 객체의 확장
프로토타입 객체의 경우에도 프로퍼티를 추가하거나 삭제가 가능하다. 이렇게 추가/삭제되어지는 프로퍼티는 즉시 프로토타입 체인에 반영 되어진다.
```js
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

//Add sayHello property to Persion.protytpe
Person.prototype.sayHello = function(){
  console.log('Hi! my name is ' + this.name);
};

//Instinctly reflect 
foo.sayHello();
```

위의 예에서는 Person.prototype 객체에 메소드 sayHello를 추가하였다. 이때 sayHello 메소드는 프로토타입 체인에 반영된다. 따라서 생성자 함수 Person에 의해 생성된 모든 객체는 프로토타입 체인에 의해 부모객체인 Person.prototype의 메소드를 사용할 수 있게 되었다.


### 6.원시 타입(Primitive Data Type)의 확장
자바 스크립트에서 원시타입(num,char,boolean,null,undefined)을 제외한 모든 것들은 객체로 취급한다. 그러나 원시타입인 문자열이 아래와 같이 동작하는 경우가 있다.
```js

var str = 'test';
console.log(typeof str);                 // string
console.log(str.constructor === String); // true
console.dir(str);                        // test

var strObj = new String('test');
console.log(typeof strObj);                 // object
console.log(strObj.constructor === String); // true
console.dir(strObj);
// {0: "t", 1: "e", 2: "s", 3: "t", length: 4, __proto__: String, [[PrimitiveValue]]: "test" }

//원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 된다.
console.log(str.toUpperCase());    // TEST

console.log(strObj.toUpperCase()); // TEST
```


```js
var str = 'test';


// 에러가 발생하지 않는다.
str.myMethod = function () {
  console.log('str.myMethod');
};
// 원시타입은 객체가 아니므로, 프로퍼티 혹은 메소드 등을 직접 추가가 불가하다.
str.myMethod(); // Uncaught TypeError: str.myMethod is not a function
```


```js
//하지만 String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면 원시 타입, 객체 모두 메소드를 사용할 수 있다.

var str = 'test';

String.prototype.myMethod = function () {
  return 'myMethod';
};

console.log(str.myMethod());      // myMethod
console.log('string'.myMethod()); // myMethod
console.dir(String.prototype);
```

앞서 살펴본 바와 같이 모든 객체는 "프로토타입 체인"에 의해 Object.prototype 객체의 메소드를 사용할 수 있었다. Object.prototype 객체는 프로토타입 체인의 종점으로 "모든 객체가 사용할 수 있는 메소드"를 갖는다.

이후 살펴보게 될 Built-in object(내장 객체)의 Global objects (Standard Built-in Objects)인 String, Number, Array 객체 등이 가지고 있는 표준 메소드는 프로토타입 객체인 String.prototype, Number.prototype, Array.prototype 등에 정의되어 있다. 이들 프로토타입 객체 또한 Object.prototype를 프로토타입 체인에 의해 자신의 프로토타입 객체로 연결한다.

자바스크립트는 "표준 내장 객체의 프로토타입 객체"에 개발자가 정의한 메소드의 추가를 허용한다. 

이 모든 것들은 프로토타입 체인에 의한 Object.prototype 객체 메소드를 사용 할 수 있기 때문!

```js
var str = 'test';

String.prototype.myMethod = function() {
  return 'myMethod';
}

console.log(str.myMethod());
console.dir(String.prototype);

console.log(str.__proto__ === String.prototype);                 // ① true : str문자열의 프로토타입 객체는 String.prototype이다.
console.log(String.prototype.__proto__  === Object.prototype);   // ② true : String.prototype의 프로토타입 객체는 Object.prototype이다.
console.log(String.prototype.constructor === String);            // ③ true : String.prototype의 생성자함수는 String이다.
console.log(String.__proto__ === Function.prototype);            // ④ true : 생성자함수 String의 프로토타입 객체는 Function.prototype이다.
console.log(Function.prototype.__proto__  === Object.prototype); // ⑤ true : Function.prototype의 프로토타입 객체는 Object.prototoye이다.
// String.prototype의 프로토타입객체와 Function.prototype의 프로토타입 객체는 Object.prototype으로써 같다.
```

### 7.프로토타입 객체의 변경
객체를 생성할 때 프로토타입은 결정된다. 결정된 프로토타입 객체는 다른 임의의 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 이러한 특징을 활용하여 객체의 상속을 구현할 수 있다.

부모객체인 프로토타입을 동적으로 변경가능하다. 이러한 특징을 활용하면 객체의 상속을 구현 할 수 있다.

이 때 주의해야 할 부분은 
* 프로토타입 객체 변경 시점 이전에 생성된 객체의 기존 프로토 타입 객체를 [[Prototype]]에 바인딩 한다.
* 프로토타입 객체 변경 시점 이후에 생성된 객체의 변경된 프로토 타입 개체를 [[Prototype]]에 바인딩 한다.

```js
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

// 프로토타입 객체의 변경 해당 시점에서 Prototype 프로퍼티가 가리키는 객체를 일반 객체로 변경시켜 버리게 되었다.
Person.prototype = { gender: 'male' };

var bar = new Person('Kim');

console.log(foo.gender); // undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); // ① Person(name)
console.log(bar.constructor); // ② Object()
```
1. constructor 프로퍼티는 Person() 생성자 함수를 가리킨다.
2. 프로토타입 객체 변경 후, Person() 생성자 함수의 Prototype 프로퍼티가 가리키는 프로토타입 객체를 일반 객체로 변경하면서 Person.prototype.constructor 프로퍼티도 삭제되었다. 따라서 프로토타입 체인에 의해 bar.constructor의 값은 프로토타입 체이닝에 의해 Object.prototype.constructor 즉 "Object() 생성자 함수"가 된다.



### 8.프로토타입 객체의 변경

객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작한다.

객체의 프로퍼티에 값을 할당하는 경우, 프로토타입 체인이 동작하지 않는다. 이는 객체에 해당 프로퍼티가 있는 경우, 값을 재할당하고 해당 프로퍼티가 없는 경우는 해당 객체에 프로퍼티를 동적으로 추가하기 때문이다.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.gender = 'male'; // ①

var foo = new Person('Lee');
var bar = new Person('Kim');

console.log(foo.gender); // ① 'male'
console.log(bar.gender); // ① 'male'

// 1. foo 객체에 gender 프로퍼티가 없으면 프로퍼티 동적 추가
// 2. foo 객체에 gender 프로퍼티가 있으면 해당 프로퍼티에 값 할당
foo.gender = 'female';   // ②

console.log(foo.gender); // ② 'female'
console.log(bar.gender); // ① 'male'
```

