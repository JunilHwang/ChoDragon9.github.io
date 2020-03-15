(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{287:function(a,t,s){"use strict";s.r(t);var e=s(28),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"고차-함수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#고차-함수"}},[a._v("#")]),a._v(" 고차 함수")]),a._v(" "),s("p",[a._v("값 처럼 사용할 수 있는 함수를 고차 함수라고 한다. 익명함수를 정의하여 변수에 할당할 수 있다. 익명함수는 "),s("code",[a._v("fn")]),a._v("을 사용한다.")]),a._v(" "),s("h5",{attrs:{id:"예제코드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val is_large = (fn x => x > 37)\nval add = fn (a, b) => a + b\n\nval check = is_large(38)\nval added = add(2, 3)\n")])])]),s("h5",{attrs:{id:"실행예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행예제"}},[a._v("#")]),a._v(" 실행예제")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val is_large = fn : int -> bool\nval add = fn : int * int -> int\nval check = true : bool\nval added = 5 : int\n")])])]),s("p",[a._v("고차 함수를 사용 가능하기 때문에 클로저를 정의할 수 있다.")]),a._v(" "),s("h5",{attrs:{id:"예제코드-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-2"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val cache_num = fn (x) => fn (y) => x * y\nval numFn = cache_num(1)\nval result = numFn(2)\n")])])]),s("h5",{attrs:{id:"실행결과"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val cache_num = fn : int -> int -> int\nval numFn = fn : int -> int\nval result = 2 : int\n")])])]),s("h3",{attrs:{id:"list-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-map"}},[a._v("#")]),a._v(" List.map")]),a._v(" "),s("h5",{attrs:{id:"예제코드-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-3"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('fun toAlpha 0 = "A"\n  | toAlpha 1 = "B"\n  | toAlpha 2 = "C"\n  | toAlpha n = "Z"\nval numbers = [0, 1, 2, 3, 4]\nval result = List.map(toAlpha)(numbers)\n')])])]),s("h5",{attrs:{id:"실행결과-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-2"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('val toAlpha = fn : int -> string\nval numbers = [0,1,2,3,4] : int list\nval result = ["A","B","C","Z","Z"] : string list\n')])])]),s("h3",{attrs:{id:"list-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-filter"}},[a._v("#")]),a._v(" List.filter")]),a._v(" "),s("h5",{attrs:{id:"예제코드-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-4"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val isLarge = fn n => n > 2\nval numbers = [0, 1, 2, 3, 4]\nval result = List.filter(isLarge)(numbers)\n")])])]),s("h5",{attrs:{id:"실행결과-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-3"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val isLarge = fn : int -> bool\nval numbers = [0,1,2,3,4] : int list\nval result = [3,4] : int list\n")])])]),s("h3",{attrs:{id:"커스텀-map-함수-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-map-함수-정의"}},[a._v("#")]),a._v(" 커스텀 "),s("code",[a._v("map")]),a._v(" 함수 정의")]),a._v(" "),s("ul",[s("li",[a._v("map 함수는 함수와 리스트를 인자로 받는다.")]),a._v(" "),s("li",[a._v("리스트 인자가 비어있으면 빈 리스트를 반환한다.")]),a._v(" "),s("li",[a._v("리스트가 비어있지 않으면 리스트에서 앞에 있는 값(x)과 나머지 리스트(xs)를 꺼낸다.\n"),s("ul",[s("li",[a._v("x를 인자로 받은 함수(f)에 인자로 사용한다.")]),a._v(" "),s("li",[a._v("map 함수에 f, xs를 재귀적으로 호출한다.")]),a._v(" "),s("li",[a._v("map(f)(xs) 실행 결과의 리스트 앞에 f(x)의 값이 추가된다.")])])])]),a._v(" "),s("h5",{attrs:{id:"예제코드-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-5"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('fun map f [] = []\n  | map f (x :: xs) = f(x) :: map(f)(xs)\nfun toAlpha 0 = "A"\n  | toAlpha 1 = "B"\n  | toAlpha 2 = "C"\n  | toAlpha n = "Z"\nval numbers = [0, 1, 2, 3, 4]\nval result = map(toAlpha)(numbers)\n')])])]),s("h5",{attrs:{id:"실행결과-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-4"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('val map = fn : (\'a -> \'b) -> \'a list -> \'b list\nval toAlpha = fn : int -> string\nval numbers = [0,1,2,3,4] : int list\nval result = ["A","B","C","Z","Z"] : string list\n')])])])])}),[],!1,null,null,null);t.default=l.exports}}]);