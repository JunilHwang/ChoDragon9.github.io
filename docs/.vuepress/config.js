module.exports = {
  title: 'ChoDragon9',
  themeConfig: {
    nav: [
      {
        text: 'Javascript',
        items: [
          { text: '[ECMAScript] ES6 Overview', link: '/javascript/es6/' },
          { text: 'this, this is magic.', link: '/javascript/this/' },
          { text: '콜백 사용 시점', link: '/javascript/callback/' },
          { text: '안전한 체이닝을 위한 safeChain', link: '/javascript/safe-chain/' },
          { text: 'async await 정리', link: '/javascript/async-await-case/' },
          { text: '옵져버 매커니즘', link: '/javascript/observation-mechanism/' },
          { text: '코루틴을 사용한 지연 평가', link: '/javascript/call-stack-and-coroutine/' },
          { text: '[손에 잡히는 정규표현식] 역참조/전방탐색/후방탐색', link: '/javascript/regexp-book-backref/' },
          { text: 'Promise 정리', link: '/javascript/promise/' },
        ]
      },
      {
        text: 'Angular',
        items: [
          { text: 'RxJs 코드리뷰 사례', link: '/angular/rxjs-codereview/' },
          { text: 'Angular의 강력함과 아쉬운점', link: '/angular/angular/' }
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Nuxt에서 TypeScript로 개발하기', link: '/vue/nuxt-ts/' },
          { text: 'Nuxt v2.0에서 v2.11로 마이그레이션', link: '/vue/nuxt-migration/' },
        ]
      },
      {
        text: 'SML',
        items: [
          { text: '기초', link: '/sml/sml-basic/' },
          { text: '빌트인 자료형', link: '/sml/sml-builtin-datatype/' },
          { text: '자료형 정의', link: '/sml/sml-datatype/' },
          { text: '예외처리', link: '/sml/sml-exception/' },
          { text: '함수', link: '/sml/sml-function/' },
          { text: '고차함수', link: '/sml/sml-higher-order-function/' },
          { text: 'infix 정의', link: '/sml/sml-infix/' },
          { text: '모듈 시스템', link: '/sml/sml-module/' },
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-135042351-1'
      }
    ]
  ]
}
