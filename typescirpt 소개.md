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