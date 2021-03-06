---
layout: post
title:  "GoF 디자인 패턴 | 생성패턴"
date:   2018-12-09
description: GoF 디자인 패턴 중 생성패턴을 정리합니다.
tags: [pattern]
category: 패턴
sidebar: auto
---
## 싱글턴(Singleton)
오직 한 개의 클래스 인스턴스만을 갖도록 보장하고, 이에 대한 전역적인 접근점을 제공합니다.

* 클래스의 인스턴스가 오직 하나여야 함을 보장하고, 잘 정의된 접근점으로 모든 사용자가 접근 할 수 있도록 해야 할 때
* 유일한 인스턴스가 서브클래싱으로 확장되어야 하며, 사용자는 코드의 수정없이 확장된 서브클래스의 인스턴스를 사용할 수 있어야 할 때

```js
class Person {
  constructor () {}
}

const Singleton = (() => {
  let instance = null

  return {
    getInstance () {
      if (!instance) {
        instance = new Person()
      }
      return instance
    }
  }
})()
```
```js
const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()

console.log(instance1 === instance2) // true
```

## 팩토리 메서드
객체를 생성하기 위해 인터페이스를 정의하지만, 어떤 클래스의 인스턴스를 생성할지에 대한 결정은 서브클래스가 내리도록 합니다.

(MVC에서 View가 Controller의 인스턴스 생성할 때와 동일함)

![](../img/design-pattern/38173590-b5d92d46-35fb-11e8-9d9f-304821417cd5.jpg)

- 어떤 클래스가 자신이 생성해야 하는 객체의 클래스를 예측할 수 없을 때
- 생성할 객체를 기술하는 책임을 자신의 서브클래스가 지정했으면 할 때
- 객체 생성의 책임을 몇 개의 보조 서브클래스 가운데 하나에게 위임하고, 어떤 서브클래서가 위임자인지에 대한 정보를 국소화시키고 싶을 때

```js
class FullTime {
  constructor () {
    this.hourly = "$12";
  }
}

class PartTime {
  constructor () {
    this.hourly = "$11";
  }
}

class Temporary {
  constructor () {
    this.hourly = "$10";
  }
}

class Employee {
  static create (type) {
    switch (type) {
      case Employee.FULL_TIME:
        return new FullTime()
      case Employee.PART_TIME:
        return new PartTime()
      case Employee.TEMPORARY:
        return new Temporary()
    }
  }
  static get FULL_TIME () {
    return 'FULL_TIME'
  }
  static get PART_TIME () {
    return 'PART_TIME'
  }
  static get TEMPORARY () {
    return 'TEMPORARY'
  }
}
```
```js
const employees = []

employees.push(Employee.create(Employee.FULL_TIME))
employees.push(Employee.create(Employee.PART_TIME))
employees.push(Employee.create(Employee.TEMPORARY))

employees.forEach(employee => console.log(employee.hourly))
```

## 추상 팩토리
구체적인 클래스를 지정하지 않고 관련성을 갖는 객체들의 집합을 생성하거나 서로 독립적인 객체들의 집합을 생성할 수 있는 인터페이스를 제공하는 패턴

![](../img/design-pattern/38173856-7c2b4c92-35ff-11e8-813b-fc18ba9f0755.jpg)

- 객체가 생성되거나 구성 또는 표현되는 방식과 무관하게 시스템을 독립적으로 만들고자 할 때
- 여러 제품군 중 하나를 선택해서 시스템을 설정해야 하고 한번 구성한 제품을 다른 것으로 대체할 수 있을 때
- 관련된 제품 객체들이 함께 사용되로록 설계되었고, 이 부분에 대한 제약이 외부에도 지켜지도록 하고 싶을 때
- 제품에 대한 클래스 라이브러리를 제공하고, 그들의 구현이 아닌 인터페이스를 노출시키고 싶을 때

```js
class Employee {
  constructor (name) {
    this.name = name;
  }
  say () {
    console.log("I am employee " + this.name);
  }
}

class EmployeeFactory {
  constructor () {}
  create (name) {
    return new Employee(name);
  }
}
```
```js
const persons = [];
const employeeFactory = new EmployeeFactory();

persons.push(employeeFactory.create("Joan DiSilva"));
persons.push(employeeFactory.create("Tim O'Neill"));

persons.forEach(person=>person.say())
```

## 원형(Prototype)

원형이 되는 인스턴스를 사용하여 생성할 객체의 종류를 명시하고, 이렇게 만든 견본을 복사해서 새로운 객체를 생성합니다.

![](../img/design-pattern/38410249-0e4a4f66-39bf-11e8-8cfd-092ce4782562.jpg)

원형 패턴은 제품의 생성, 복합, 표현 방법에 독립적인 제품을 만들고자 할 때 씁니다.
- 인스턴스화할 클래스를 런타임에 지정할 때
- 제품 클래스 계통과 병렬적으로 만드는 팩토리 클래스를 피하고 싶을 때
- 클래스의 인스턴스들이 서로 다른 상태 조합 중에 어느 하나일 때 원형 패턴을 씁니다. 이들을 미리 원현으로 초기화해 두고,
나중에 복제해서 사용하는 것이 매번 필요한 상태 조합의 값들을 수동적으로 초기화하는 것보다 더 편리할 수도 있습니다.

```js
class CustomerPrototype {
  constructor (proto) {
    this.proto = proto
  }
  clone () {
    const {first, last, status} = this.proto
    return new Customer(first, last, status)
  }
}

class Customer {
  constructor (first, last, status) {
    this.first = first
    this.last = last
    this.status = status
  }
  say () {
    console.log(`name: ${this.first} ${this.last}, status: ${this.status}`)
  }
}
```
```js
const proto = new Customer("n/a", "n/a", "pending")
const prototype = new CustomerPrototype(proto)

const customer = prototype.clone()
customer.first = "Peter"
customer.last = "Cho"
customer.status = "closed"
customer.say()

proto.say()
```

## 빌더(builder)
복잡한 객체를 생성하는 방법과 표현하는 방법을 정의하는 클래스를 별도로 분리하여, 서로 다른 표현이라도 이를 생성할 수 있는 동일한 절차를 제공할 수 있도록 합니다.

![](../img/design-pattern/38411406-ff14c730-39c1-11e8-9af9-c7d101717d88.jpg)

- 복합 객체의 생성 알고리즘이 이를 합성하는 요소 객체들이 무엇인지 이들의 조립 방법에 독립적일 때
- 합성할 객체들의 표현이 서로 다르더라도 생성 절차에서 이를 지원해야 할 때

```js
class Shop {
  constructor () {}
  construct (builder) {
    builder.step1()
    builder.step2()
    return builder.get()
  }
}

class Car {
  constructor () {
    this.doors = 0
  }
  addParts () {
    this.doors = 4
  }
  say () {
    console.log(`I am a ${this.doors}-door car`)
  }
}

class Truck {
  constructor () {
    this.doors = 0
  }
  addParts () {
    this.doors = 2
  }
  say () {
    console.log(`I am a ${this.doors}-door truck`)
  }
}

class CarBuilder {
  constructor () {
    this.car = null
  }
  step1 () {
    this.car = new Car()
  }
  step2 () {
    this.car.addParts()
  }
  get () {
    return this.car
  }
}

class TruckBuilder {
  constructor () {
    this.truck = null
  }
  step1 () {
    this.truck = new Truck()
  }
  step2 () {
    this.truck.addParts()
  }
  get () {
    return this.truck
  }
}
```
```js
const shop = new Shop()
const carBuilder = new CarBuilder()
const truckBuilder = new TruckBuilder()

const car = shop.construct(carBuilder)
const truck = shop.construct(truckBuilder)

car.say()
truck.say()
```
