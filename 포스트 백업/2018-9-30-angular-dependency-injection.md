---
layout: post
title:  "[Angular Development with TypeScript] 의존성 주입"
date:   2018-09-30
description: Angular Development with TypeScript 책 정리
tags: [angular, pattern]
comments: true
---
#### 의존성 주입의 장점
의존성 주입 패턴을 사용하지 않으면 ProductService 클래스를 어떻게 생성하는지
ProductComponent가 직접 알아야 한다. 이때 인스턴스 생성은 new 키워트로 할 수도 있고,
싱글턴이라면 getInstance() 함수를 실행할 수도 있으며, createProductService()와 같은 팩토리 함수를 실행할 수도 있다.

`providers`는 의존성으로 주입될 객체를 어떻게 생성하는지 Angular에게 알려주기 위해 사용한다.

#### 인젝터와 프로바이더
Angular 애플리케이션에는 전체 모듈에서 사용하는 루트 인젝터가 있으며, 컴포넌트에서 객체나 기본형 변수, 컴포넌트, 서비스를 주입받으면 컴포넌트 안에도
인젝터를 따로 만든다. 프로바이더는 인젝터가 무엇을 주입해야 할지 알려주기 위해 사용하며, 프로바이더로 지정된 객체나 값을 인젝터가 생성해서
원하는 컴포넌트에 주입한다.

프로바이더는 주입될 토큰과 토큰을 만드는 방법을 매핑하며, @Component, @NgModule 어노테이션에 등록할 수 있다.

토큰 이름과 프로바이더로 등록하는 클래스 이름이 같다면, 짧게 줄여서 작성할 수도 있다.
```ts
@NgModule({
  providers: [ProductService]
})
```

#### TypeScript 의존성 주입
TypeScript에서는 컨포넌트에 의존성을 주입하면서 타입 이외에는 별다른 내용을 요구하지 않기 때문에 문법이 간단한다.
```ts
constructor(productService : ProductService)
```