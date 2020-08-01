## 2.TypeScript의 장점

### 2.1 정적타입
TypeScript는 정적타입을 지원한다는 특징을 가진다.
```js

function sum(a, b) {
  return a + b;
}

// 위 함수는 두 인수를 받아 그 값을 리턴하는 것으로 보여진다. 하지만 어떤값을 인수로받고 반환해야 하는지에 대해서는 명확하지가 않다.

function sum(a, b) {
  return a + b;
}

sum('x', 'y'); // 'xy'

// 이러한 상태로 실행하게 되어지면, javascript자체의 Dynamic Typing에 의해서 위처럼 이의 제기 없이 코드를 실행하게 되어 버린다.

```

이를 TypeScript의 정적 타입을 활용하여 만들어 보자.

```js
// 인수값의 타입을 지정.
function sum(a: number, b: number) {
  return a + b;
}

sum('x', 'y');
// error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
```

### 2.2 도구의 지원

- TypeScript의 가장 큰 장점은 IDE를 포함한 다양한 도구의 지원을 받는 것이 가능하기 때문이다. 개발환경 도구에 "타입정보"를 제공하여, 다양한 지원을 받으며, 이는 대규모 프로젝트에 유용하게 작용한다.



### 2.3 강력한 객체지향의 프로그래밍

- 인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍 지원은 크고 복잡한 프로젝트의 코드 기반을 쉽게 구성할 수 있도록 도우며, Java, C# 등의 클래스 기반 객체지향 언어에 익숙한 개발자가 자바스크립트 프로젝트를 수행하는 데 진입 장벽을 낮추는 효과도 있다.



### 2.4 ES6 / ES Next 지원

- TypeScript는 아직 ECMAScript 표준에 포함되지는 않았지만 표준화가 유력한 스펙을 선제적으로 도입하므로 새로운 스펙의 유용한 기능을 안전하게 도입하기에 유리하다.



### 2.5 Angular

- 마지막으로 Angular는 TypeScript 뿐만 아니라 자바스크립트(ES5, ES6), Dart로도 작성할 수 있지만 Angular 문서, 커뮤니티 활동에서 가장 많이 사용되고 있는 것이 TypeScript이다. Angular 관련 문서의 예제 등도 TypeScript로 작성된 것이 대부분이어서 관련 정보를 얻을 때 이점이 있으며 이러한 현상은 앞으로도 지속될 것으로 예상된다.


## 3. 개발 환경을 구축하기
```
npm install -g typescirpt

버젼확인
tsc -v

```

TypeScript 컴파일러(tsc)는 TypeScript 파일(.ts)을 자바스크립트 파일로 트랜스파일링한다.

```ts
// person.ts
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello, " + this.name;
  }
}

const person = new Person('Lee');

console.log(person.sayHello());
```

위와 같은 .ts확장자 파일을 tsc명령를 통해서 컴파일 해본다.
```
tsc person
```

```js
// person.ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;  
}());
var person = new Person('Lee');
console.log(person.sayHello());
```

위와 같이 person.js파일이 별도로 생성이 되어지게 된다.
이때 트랜스파일링된 person.js의 자바스크립트 버전은 ES3이다. 이는 TypeScript 컴파일 타겟 자바스크립트 기본 버전이 ES3이기 때문이다.

해당 컴파일을 선택적으로 js 버젼에 맞추어 할 수 있다.

만약, 자바스크립트 버전을 변경하려면 컴파일 옵션에 --target 또는 -t를 사용한다. 현재 tsc가 지원하는 자바스크립트 버전은 ‘ES3’(default), ‘ES5’, ‘ES2015’, ‘ES2016’, ‘ES2017’, ‘ES2018’, ‘ES2019’, ‘ESNEXT’이다. 예를 들어, ES6 버전으로 트랜스파일링을 실행하려면 아래와 같이 옵션을 추가한다.

예를 들어, ES6 버전으로 트랜스파일링을 실행하려면 아래와 같이 옵션을 추가한다.


```js
// person.ts
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
const person = new Person('Lee');
console.log(person.sayHello());
```

트랜스파일링이 성공하여 자바스크립트 파일이 생성되었으면, Node.js REPL을 이용해 트랜스파일링된 person.js를 실행해보자.

```
$ node person
Hello, Lee
```

매번 ES6버젼으로 컴파일 해주기 귀찬으니, 아래명령어를 날려주자.

```
$ tsc --init
message TS6071: Successfully created a tsconfig.json file.
```


해당 파일들을 트렌스 파일링하려면 특정파일을 지정하는 것이 아니고 해당 디렉토리에서 tsc명령어를 날려주면 된다.
```
tsc
```

# TypeScirpt의 정적 타이핑

### 타입선언하기

TypeScript는 아래와 같이 변수명 뒤에 타입을 명시하는 것으로 타입을 선언할 수 있다.

```ts
// 변수 foo는 string 타입이다.
let foo: string = 'hello';
```

선언한 타입에 맞지 않는 값을 할당하면 컴파일 시점에 에러가 발생한다.
```ts
let bar: number = true; // error TS2322: Type 'true' is not assignable to type 'number'.
```

위를 통해서 타입의 정적 정의와 사전 오류 검출이 가능하게 된다.

함수의 매개변수와 반환값에 대한 타입 선언 방법은 아래와 같다. 일반 변수와 마찬가지로 선언된 타입에 일치하지 않는 값이 주어지면 에러가 발생한다.

```ts
// 함수선언식
function multiply1(x: number, y: number): number {
  return x * y;
}

// 함수표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));

// 잘못되어진 타입으로 인한 에러 발생
console.log(multiply1(true, 1)); // error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
```

"타입스크립트의 타입 지정하기"
https://im-developer.tistory.com/185


```ts
// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';
let myName: string = `Lee`; // ES6 템플릿 문자열
let greeting: string = `Hello, my name is ${ myName }.`; // ES6 템플릿 대입문

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
let tuple: [string, number];
tuple = ['hello', 10]; // OK
tuple = [10, 'hello']; // Error
tuple = ['hello', 10, 'world', 100]; // Error
tuple.push(true); // Error

// enum : 열거형은 숫자값 집합에 이름을 지정한 것이다.
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3); // 4

/*
any: 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
*/
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser(): void {
  console.log("This is my warning message");
}

// never : 결코 발생하지 않는 값
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}
```

타입은 소문자, 대문자를 구별하므로 주의가 필요하다. 위에서 살펴본 바와 같이 TypeScript가 기본 제공하는 타입은 모두 소문자이다. 아래 코드를 살펴보자.

```ts
// string: 원시 타입 문자열 타입
let primiteveStr: string;
primiteveStr = 'hello'; // OK
// 원시 타입 문자열 타입에 객체를 할당하였다.
primiteveStr = new String('hello'); // Error
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/

// String: String 생성자 함수로 생성된 String 래퍼 객체 타입
let objectStr: String;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK
```

string 타입은 TypeScript가 기본으로 제공하는 원시 타입인 문자열 타입을 의미한다. 하지만 대문자로 시작하는 String 타입은 String 생성자 함수로 생성된 String 래퍼 객체 타입을 의미한다. 따라서 string 타입에 String 타입을 할당하면 에러가 발생한다. 하지만 String 타입에는 string 타입을 할당할 수 있다. 이처럼 객체의 유형도 타입이 될 수 있다.

```ts
// 객체의 유형도 하나의 타입형태가 되어 질 수 있음을 알려줍니다.

// Date 타입
const today: Date = new Date();

// HTMLElement 타입
const elem: HTMLElement = document.getElementById('myId');

class Person { }
// Person 타입
const person: Person = new Person();
```

## 정적 타이핑

C나 Java같은 C-family 언어는 변수를 선언할 때 변수에 할당할 값의 타입에 따라 사전에 타입을 명시적으로 선언(Type declaration)하여야 하며 선언한 타입에 맞는 값을 할당해야 한다. 이를 정적 타이핑(Static Typing)이라 한다.

자바스크립트는 동적 타입(dynamic typed) 언어 혹은 느슨한 타입(loosely typed) 언어이다. 이것은 변수의 타입 선언 없이 값이 할당되는 과정에서 동적으로 타입을 추론(Type Inference)한다는 의미이다. 동적 타입 언어는 타입 추론에 의해 변수의 타입이 결정된 후에도 같은 변수에 여러 타입의 값을 교차하여 할당할 수 있다. 이를 동적 타이핑(Dynamic Typing)이라 한다.

동적 타이핑은 사용하기 간편하지만 코드를 예측하기 힘들어 예상치 못한 오류를 만들 가능성이 높다. 또한 IDE와 같은 도구가 변수나 매개 변수, 함수의 반환값의 타입을 알 수 없어 코드 어시스트 등의 기능을 지원할 수 없게 한다.

```js
//자바스크립트의 동적 타이핑
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = "Hi there";
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean  
```

TypeScript의 가장 독특한 특징은 정적 타이핑을 지원한다는 것이다. 정적 타입 언어는 타입을 명시적으로 선언하며, 타입이 결정된 후에는 타입을 변경할 수 없다. 잘못된 타입의 값이 할당 또는 반환되면 컴파일러는 이를 감지해 에러를 발생시킨다.

```ts
let foo: string,   // 문자열 타입
    bar: number,   // 숫자 타입
    baz: boolean;  // 불리언 타입

foo = 'Hello';
bar = 123;
//사전에 정의한 타입과 다르기 때문에 에러를 출력합니다.
baz = 'true'; // error: Type '"true"' is not assignable to type 'boolean'.
```

정적 타이핑은 변수는 물론 함수의 매개변수와 반환값에도 사용할 수 있다.

```ts
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 10)); // 20
console.log(add('10', '10'));
// error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'.
```

참고로 정적 타이핑과 동적 타이핑 중 무엇이 우위인지에 대한 논쟁은 사실 큰 의미가 없다. 정적 타이핑과 동적 타이핑의 가장 큰 차이를 컴파일 시의 에러 검출과 런타임 시의 에러 검출로 볼 수 있는데 Java와 같은 정적 타이핑 언어도 런타임에만 검출되는 에러가 존재하기 때문이다.

정적 타이핑의 장점은 코드 가독성, 예측성, 안정성의 향상이라고 볼 수 있는데 이는 대규모 프로젝트에 매우 적합하다.

# 3. 타입추론
만약 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정된다. 이를 타입 추론(Type Inference)이라 한다.
```ts
let foo = 123; // foo는 number 타입
```

위 코드를 보면 변수 foo에 타입을 선언하지 않았으나 타입 추론에 의해 변수의 타입이 결정된다. 동적 타입 언어는 타입 추론에 의해 변수의 타입이 결정된 후에도 같은 변수에 여러 타입의 값을 교차하여 할당할 수 있다. 하지만 정적 타입 언어는 타입이 결정된 후에는 타입을 변경할 수 없다. __TypeScript는 정적 타입 언어이므로 타입 추론으로 타입이 결정된 이후, 다른 타입의 값을 할당하면 에러가 발생한다.__

```ts
// 타입추론으로써 값이 할당되어졌지만, 다시 다른타입으로써 재할당을 하는 경우 에러가 발생한다.
let foo = 123; // foo는 number 타입
foo = 'hi';    // error: Type '"hi"' is not assignable to type 'number'.
```

<HR>

# TypeScript Class
ES6에서 새롭게 도입된 클래스는 기존 프로토타입 기반 객체지향 언어보다 클래스 기반 언어에 익숙한 개발자가 보다 빠르게 학습할 수 있는 단순명료한 새로운 문법을 제시하고 있다. 하지만 클래스가 새로운 객체지향 모델을 제공하는 것은 아니다. 사실 클래스도 함수이고 기존 프로토타입 기반 패턴의 Syntactic sugar일 뿐이다. Typescript가 지원하는 클래스는 ECMAScript 6의 클래스와 상당히 유사하지만 몇 가지 Typescript만의 고유한 확장 기능이 있다.

## 1. 클래스 정의 (Class Definition)
ES6 클래스는 클래스 몸체에 메소드만을 포함할 수 있다. 클래스 몸체에 클래스 프로퍼티를 선언할 수 없고 반드시 생성자 내부에서 클래스 프로퍼티를 선언하고 초기화한다.

```js
// person.js
class Person {
  // 생성자 내부에서 클래스 프로퍼티를 선언한다.
  constructor(name) {
    // 클래스 프로퍼티의 선언과 초기화
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}
```

위와 같은 방식을 ts에서 사용하게 되면 다음과 같은 에러를 가진다.
```
person.ts(4,10): error TS2339: Property 'name' does not exist on type 'Person'.
person.ts(8,25): error TS2339: Property 'name' does not exist on type 'Person'.
```

Typescript 클래스는 클래스 몸체에 클래스 프로퍼티를 사전 선언하여야 한다.

```ts
// person.ts
class Person {
  // 클래스 프로퍼티를 사전 선언하여야 한다
  name: string;

  constructor(name: string) {
    // 클래스 프로퍼티수에 값을 할당
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person = new Person('Lee');
person.walk(); // Lee is walking
```

## 2. 접근 제한자
Typescript 클래스는 클래스 기반 객체 지향 언어가 지원하는 접근 제한자(Access modifier) public, private, protected 를 지원하며 의미 또한 기본적으로 동일하다.

단, 접근 제한자를 명시하지 않았을 때, 다른 클래스 기반 언어의 경우, 암묵적으로 protected로 지정되어 패키지 레벨로 공개되지만 Typescript의 경우, 접근 제한자를 생략한 클래스 프로퍼티와 메소드는 __암묵적으로 public__ 이 선언된다. 따라서 public으로 지정하고자 하는 멤버 변수와 메소드는 접근 제한자를 생략한다.

접근 제한자를 선언한 프로퍼티와 메소드에 대한 접근 가능성은 아래와 같다.

```ts
class Foo {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
    // public, protected, private 접근 제한자 모두 클래스 내부에서 참조 가능하다.
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// 지정한 프로퍼티 값을 지닌 객체가 생성된다.
const foo = new Foo('x', 'y', 'z');

// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
console.log(foo.x);

// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
console.log(foo.y);
// error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
console.log(foo.z);
// error TS2341: Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    // public 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
    console.log(this.x);

    // protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
    console.log(this.y);

    // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
    console.log(this.z);
    // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
  }
}
```

## 3. 생성자 파라미터 접근 제한자 선언
접근 제한자는 생성자 파라미터에도 선언할 수 있다. 이때 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언되고 생성자 내부에서 별도의 초기화가 없어도 암묵적으로 초기화가 수행된다.

이때 private 접근 제한자가 사용되면 클래스 내부에서만 참조 가능하고 public 접근 제한자가 사용되면 클래스 외부에서도 참조가 가능하다.

```ts
class Foo {
  /*
  접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
  public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다.
  */
  constructor(public x: string) { }
}

const foo = new Foo('Hello');
console.log(foo);   // Foo { x: 'Hello' }
console.log(foo.x); // Hello

class Bar {
  /*
  접근 제한자가 선언된 생성자 파라미터 x는 멤버 변수로 선언되고 자동으로 초기화된다.
  private이 선언되었으므로 x는 클래스 내부에서만 참조 가능하다.
  */
  constructor(private x: string) { }
}

const bar = new Bar('Hello');

console.log(bar); // Bar { x: 'Hello' }

// private이 선언된 bar.x는 클래스 내부에서만 참조 가능하다
console.log(bar.x); // Property 'x' is private and only accessible within class 'Bar'.
```

만일 생성자 파라미터에 접근 제한자를 선언하지 않으면 생성자 파라미터는 생성자 내부에서만 유효한 지역 변수가 되어 생성자 외부에서 참조가 불가능하게 된다.

```ts
class Foo {
  // 별도로 접근제한자를 지정하지 않은 x는 생성자 내부에서만 유효한 지역 변수이다.
  constructor(x: string) {
    console.log(x);
  }
}

const foo = new Foo('Hello');
console.log(foo); // Foo {}
```

## 4. readonly 키워드
Typescript는 readonly 키워드를 사용할 수 있다. readonly가 선언된 클래스 프로퍼티는 선언 시 또는 생성자 내부에서만 값을 할당할 수 있다. 그 외의 경우에는 값을 할당할 수 없고 오직 읽기만 가능한 상태가 된다. __이를 이용하여 상수의 선언에 사용한다.__

```ts
class Foo {
  //readOnliy를 지정합니다.
  private readonly MAX_LEN: number = 5;
  private readonly MSG: string;

  constructor() {
    this.MSG = 'hello';
  }

  log() {
    // *readonly가 선언된 프로퍼티는 재할당이 금지된다.
    this.MAX_LEN = 10; // *Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
    this.MSG = 'Hi'; // *Cannot assign to 'MSG' because it is a constant or a read-only property.

    console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
    console.log(`MSG: ${this.MSG}`); // MSG: hello
  }
}

new Foo().log();
```

## 5. static 키워드
ES6 클래스에서 static 키워드는 클래스의 정적(static) 메소드를 정의한다. 정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다. 따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

```js
class Foo {
  constructor(prop) {
    this.prop = prop;
  }

  //정적 메소드 지정
  static staticMethod() {
    /*
    정적 메소드는 this를 사용할 수 없다.
    정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다. (중요)
    */
    return 'staticMethod';
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출한다.
console.log(Foo.staticMethod());

const foo = new Foo(123);
// 정적 메소드는 인스턴스로 호출할 수 없다.
console.log(foo.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function
```

Typescript에서는 static 키워드를 클래스 프로퍼티에도 사용할 수 있다. 정적 메소드와 마찬가지로 정적 클래스 프로퍼티는 인스턴스가 아닌 클래스 이름으로 호출하며 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

```ts
class Foo {
  // 생성된 인스턴스의 갯수
  static instanceCounter = 0;
  constructor() {
    // 생성자가 호출될 때마다 instanceCounter프로퍼티 카운터를 1씩 증가시킨다.
    Foo.instanceCounter++;
  }
}

var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);  // 2
console.log(foo2.instanceCounter); // error TS2339: Property 'instanceCounter' does not exist on type 'Foo'.
```

## 6. 추상 클래스
추상 클래스(abstract class)는 하나 이상의 추상 메소드를 포함하며 일반 메소드도 포함할 수 있다. __추상 메소드는 내용이 없이 메소드 이름과 타입만이 선언된 메소드__ 를 말하며 선언할 때 abstract 키워드를 사용한다. 추상 클래스를 정의할 때는 abstract 키워드를 사용하며, 직접 인스턴스를 생성할 수 없고 __상속만을 위해 사용__ 된다. 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다.

```ts
abstract class Animal {
  // 추상 메소드
  abstract makeSound(): void;
  // 일반 메소드
  move(): void {
    console.log('roaming the earth...');
  }
}

// 직접 인스턴스를 생성할 수 없다.
// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.

class Dog extends Animal {
  // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
  makeSound() {
    console.log('bowwow~~');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
```

# TypeScript Interface

## 1. Introduction
주로 타입의 체크를 위해서 사용되어지며, 변수 함수 클래스에 사용한다. 인터페이스는 여러타입을 가지고 있는 프로퍼티로,
새로운 타입을 정의하는 것과 유사하다. 인터페이스로 선언되어진 프로퍼티는 메소드 구현의 강제로 일관성을 유지할 수 있도록 한다.
TypeScript는 인터페이스를 지원한다. 

클래스와 같이 프로퍼티와 메소드를 가질 수 있다는 점에서 유사하지만, 직접 인스턴스 생성을 할 수 없음에 그 차이가 있고, 모든 메소드들은 추상메서드로 구현된다.

## 2. 변수와 인터페이스

인터페이스는 변수의 타입으로써 사용되어질 수 있다. 이때 인터페이스를 타입으로 선언한 변수는 해당 인터페이스를 준수하여야 한다. 새로운 타입을 정의하는 것과 같다.

```js
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: 'typescript', completed: false };
```

인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다. 이때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다. 함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요없어서 매우 유용하다.

```js
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todos: Todo[] = [];

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
                //  이부분 //
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos)
// [ { id: 1, content: 'typescript', completed: false } ]
```

## 3.함수와 인터페이스

인터페이스는 함수의 타입으로 사용할 수 있다. 이때 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다. 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.

```js
// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10)); // 100
```

## 4.클래스와 인터페이스

클래스 선언문의  implements뒤에 인터페이스를 선언시에, __해당 클래스는 지정된 인터페이스를 반드시 구현하여야 한다.__
이는 인터페이스를 구현하는 클래스의 일관성을 유지할 수 있는 장점을 지닌다.

```ts
// 인터페이스의 정의
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Todo implements ITodo {
  // 필수 구현 파트
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ) { }
}

const todo = new Todo(1, 'Typescript', false);

console.log(todo);
```

인터페이스는 프로퍼티뿐만 아니라 메소드도 포함할 수 있다. 단, 모든 메소드는 추상 메소드이어야 한다. 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.

```ts
// 인터페이스의 정의
interface IPerson {
  name: string;
  sayHello(): void;
}

/*
인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.
*/
class Person implements IPerson {
  // 인터페이스에서 정의한 프로퍼티의 구현
  constructor(public name: string) {}

  // 인터페이스에서 정의한 추상 메소드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person('Lee');
greeter(me); // Hello Lee
```

## 5. 덕타이핑
주의해야 할 것은 인터페이스를 구현하였다는 것만이 타입 체크를 통과하는 유일한 방법은 아니다. 타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이다. 이해가 어려울 수 있으므로 예를 들어 설명한다.

```js
interface IDuck { // 1
  //리턴값의 설정 : void  
  quack(): void; //해당 메소드를 Redhead쪽에서도 가지고 있다.
}

class MallardDuck implements IDuck { // 3
  quack() {
    console.log('Quack!');
  }
}

//IDuck인스턴스가 구현되어져 있지는 않다.
class RedheadDuck { // 4
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void { // 2
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
```
(1) 인터페이스 IDuck은 quack메소드를 정의했다.
(2) makeNoise 함수는 인터페이스 IDuck을 구현한 클래스의 인스턴스 duck을 인자로 받는다.
(3) 클래스 MallardDuck은 인터페이스 IDuck을 구현하였다.
(4) 클래스 RedheadDuck은 인터페이스 IDuck을 구현하지는 않지만, 자체적으로 quack메소드를 가지고 있다.
(5) makeNoise 함수 인터페이스 IDuck을 구현하지 않은 클래스 RedheadDuck의 인스턴스를 인자로 전달하여도 에러가 없이 처리된다.

TypeScript는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면 그 인터페이스를 구현한 것으로 인정한다. 이것을 덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)이라 한다.

인터페이스를 변수에 사용할 경우에도 덕 타이핑은 적용된다. (해당 변수를 가지고 있으면 덕타이핑이 적용된다.)

```ts
interface IPerson {
  name: string;
}

function sayHello(person: IPerson): void {
  console.log(`Hello ${person.name}`);
}

//인터페이스에 있는 필드를 사용하여, 덕 타이핑이 실행되었다. (interface에 name을 사용.)
const me = { name: 'Lee', age: 18 };
sayHello(me); // Hello Lee
```

변수 me는 인터페이스 IPerson과 일치하지는 않는다. 하지만 IPerson의 name 프로퍼티를 가지고 있으면 인터페이스에 __부합__ 하는 것으로 인정된다.

인터페이스는 개발 단계에서 도움을 주기 위해 제공되는 기능으로 자바스크립트의 표준이 아니다. 따라서 위 예제의 TypeScript 파일을 자바스크립트 파일로 트랜스파일링하면 아래와 같이 인터페이스가 삭제된다.

```js
function sayHello(person) {
  console.log("Hello " + person.name);
}
var me = { name: 'Lee', age: 18 };
sayHello(me); // Hello Lee
```

## 6. 선택적 프로퍼티
인터페이스의 프로퍼티는 반드시 구현되어져야 하지만, 이를 선택적으로 하여 옵셔널하게 사용할수도 있다.
프로퍼티 명의 뒤에 ?를 붙이는 것이다.

```ts
interface UserInfo {
  username: string;
  password: string;
  //선택적 프로퍼티의 활용
  age?    : number;
  address?: string;
}

const userInfo: UserInfo = {
  username: 'ungmo2@gmail.com',
  password: '123456'
}

console.log(userInfo);
```

## 7. 인터페이스의 상속

인터페이스는 extends 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.
```ts
interface Person {
  name: string;
  age?: number;
}

//인터페이스의 상속
interface Student extends Person {
  grade: number;
}

//인스턴스의 구현
const student: Student =  {
  name: 'Lee',
  age: 20,
  grade: 3
}
```

복수의 인터페이스를 상속받을 수도 있다.

```ts
interface Person {
  name: string;
  age?: number;
}

interface Developer {
  skills: string[];
}

//인터페이스 더블 상속
interface WebDeveloper extends Person, Developer {}

const webDeveloper: WebDeveloper =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
```

인터페이스는 인터페이스 뿐만 아니라 클래스도 상속받을 수 있다. 단, 클래스의 모든 멤버(public, protected, private)가 상속되지만 구현까지 상속하지는 않는다.
```ts
class Person {
  constructor(public name: string, public age: number) {}
}

interface Developer extends Person {
  skills: string[];
}

const developer: Developer =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
```

# Type Alias

타입 앨리어스는 새로운 타입을 정의한다. 타입으로 사용할 수 있다는 점에서 타입 앨리어스는 인터페이스와 유사하다.
인터페이스는 아래와 같이 타입으로 사용할 수 있다.

```ts
interface Person {
  name: string,
  age?: number
}

// 빈 객체를 Person 타입으로 지정
const person = {} as Person;
person.name = 'Lee';
person.age = 20;
person.address = 'Seoul'; // Error
```

타입 앨리어스도 인터페이스와 마찬가지로 타입으로 사용할 수 있다.
* alias : 가명으로 알려진, 일컬어지는...

```ts
// 타입 앨리어스
type Person = {
  name: string,
  age?: number
}

// 빈 객체를 Person 타입으로 지정
const person = {} as Person;
person.name = 'Lee';
person.age = 20;
person.address = 'Seoul'; // Error
```

하지만 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.

```ts
// 문자열 리터럴로 타입 지정
type Str = 'Lee';

// 유니온 타입으로 타입 지정
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = 'Lee' | 'Kim';

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = {a: 1} | {b: 2};

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

// 인터페이스 유니온 타입으로 타입 지정
type Shape = Square | Rectangle | Circle;

// 튜플로 타입 지정
type Tuple = [string, boolean];
const t: Tuple = ['', '']; // Error
```

인터페이스는 extends 또는 implements될 수 있지만 타입 앨리어스는 extends 또는 implements될 수 없다. 즉, 상속을 통해 확장이 필요하다면 타입 앨리어스보다는 인터페이스가 유리하다. 하지만 인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야한다면 타입 앨리어스를 사용한는 편이 유리하다.

# TypeScript-Generic

Java나 C# 같은 정적 타입 언어의 경우, 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하여야 한다. TypeScript 또한 정적 타입 언어이기 때문에 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하여야 한다. 그런데 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하기 어려운 경우가 있다.
아래의 예제를 살펴보자. FIFO(First In First Out) 구조로 데이터를 저장하는 큐를 표현한 것이다.

```ts
class Queue {
  protected data = []; // data: any[]

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.shift();
  }
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // 의도하지 않은 실수!

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // Runtime error
```

Queue 클래스 데이터의 프로퍼티는 타입에 대한선언이 생략되어져, any[]타입이 된다. 
이럴경우 any에 들어가는 타입이 다른 경우가 생긴다. 위 예제의 경우, data프로퍼티가 
number 타입만을 포함하는 배열이라는 기대 하에 각 요소에 대해서, Number.prototype.toFixed를 사용한다.
그렇기 때문에 number타입의 요소가 아닌경우 런타임 에러를 일으킨다.

위와 같은 문제를 해결하기 위해 Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의할 수 있다.

```ts
class Queue {
  protected data = []; // data: any[]

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.shift();
  }
}

// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의
class NumberQueue extends Queue {

  // number 타입의 요소만을 push한다. 1차 검증 방법을 추가한다.
  push(item: number) {
    super.push(item);
  }

  pop(): number {
    return super.pop();
  }
}

const queue = new NumberQueue();

queue.push(0);
// 의도하지 않은 실수를 사전 검출 가능
// [ts] Argument of type '"1"' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1
```

이와 같이 number 타입 전용 NumberQueue 클래스를 정의하면 number 타입 이외의 요소가 추가(push)되었을 때, 아래와 같이 런타임 이전에 에러를 사전 감지할 수 있다.

// [ts] Argument of type '"1"' is not assignable to parameter of type 'number'.
// queue.push('1');

하지만 다양한 타입을 지원해야 한다면 타입 별로 클래스를 상속받아 추가해야 하므로 이 또한 좋은 방법은 아니다. 제네릭을 사용하여 이 문제를 해결하여 보자.
generic : 포괄적인, 총칭의

```ts
// T는 제네릭을 선언할 때 관용적으로 사용되는 식별자로 타입 파라미터(Type parameter)라 한다. T는 Type의 약자로 반드시 T를 사용하여야 하는 것은 아니다.
class Queue<T> {
  protected data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

// number 전용 Queue 
const numberQueue = new Queue<number>();

numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1');   // 실수를 사전 인지하고 수정할 수 있다

console.log(numberQueue.pop().toFixed()); // 0
console.log(numberQueue.pop().toFixed()); // 1

// string 전용 Queue 인스턴스를 탄력적으로 바꾸 수있다.
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop().toUpperCase()); // HELLO
console.log(stringQueue.pop().toUpperCase()); // WORLD

// 커스텀 객체 전용 Queue
const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: 'Lee', age: 10});
myQueue.push({name: 'Kim', age: 20});

console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
```

제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다. 한 번의 선언으로 다양한 타입에 재사용이 가능하다는 장점이 있다.

T는 제네릭을 선언할 때 관용적으로 사용되는 식별자로 타입 파라미터(Type parameter)라 한다. T는 Type의 약자로 반드시 T를 사용하여야 하는 것은 아니다.

또한 함수에도 제네릭을 사용할 수 있다. 제네릭을 사용하면 하나의 타입만이 아닌 다양한 타입의 매개변수와 리턴값을 사용할 수 있다. 아래 예제를 살펴보자.

```ts
//                  프로퍼티 명 : T속성[] : T[]리턴값
function reverse<T>(items: T[]): T[] {
  return items.reverse();
}
```

reverse 함수는 인수의 타입에 의해 타입 매개변수가 결정된다. Reverse 함수는 다양한 타입의 요소로 구성된 배열을 인자로 전달받는다. 예를 들어 number 타입의 요소를 갖는 배열을 전달받으면 타입 매개변수는 number가 된다.

```ts
function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const arg = [1, 2, 3, 4, 5];
// 인수에 의해 타입 매개변수가 결정된다.
const reversed = reverse(arg);
console.log(reversed); // [ 5, 4, 3, 2, 1 ]
```

만약 {name: string} 타입의 요소를 갖는 배열을 전달받으면 타입 매개변수는 {name: string}가 된다.

```ts
function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const arg = [{ name: 'Lee' }, { name: 'Kim' }];
// 인수에 의해 타입 매개변수가 결정된다.
const reversed = reverse(arg);
console.log(reversed); // [ { name: 'Kim' }, { name: 'Lee' } ]
```