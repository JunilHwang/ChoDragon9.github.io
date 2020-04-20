(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{318:function(e,a,t){"use strict";t.r(a);var r=t(28),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"자료형-정의"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자료형-정의"}},[e._v("#")]),e._v(" 자료형 정의")]),e._v(" "),t("p",[e._v("자료형 정의는 "),t("code",[e._v("datatype")]),e._v("으로 정의한다. 자료형으로 정의된 형은 네임스페이스 없이 바로 접근 가능하다.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('datatype color = Red | Green | Blue\n\nfun say Red = "You are red!"\n  | say Green = "You are green!"\n  | say Blue = "You are blue!"\n\nval _ = print (say(Red) ^ "\\n")\nval _ = print (say(Green) ^ "\\n")\nval _ = print (say(Blue) ^ "\\n")\n')])])]),t("h5",{attrs:{id:"실행-결과"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실행-결과"}},[e._v("#")]),e._v(" 실행 결과")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("You are red!\nYou are green!\nYou are blue!\ndatatype color = Blue | Green | Red\nval say = fn : color -> string\n")])])]),t("h3",{attrs:{id:"binary-tree-정의"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-tree-정의"}},[e._v("#")]),e._v(" Binary Tree 정의")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("'a btree * 'a * 'a btree")]),e._v("는 인자를 3개 받는 것을 의미한다. 순서대로 "),t("code",[e._v("'a btree")]),e._v(", "),t("code",[e._v("'a")]),e._v(", "),t("code",[e._v("'a btree")]),e._v(" 인자를 받는 다.")]),e._v(" "),t("li",[e._v("btree 명의 타입을 정의한다. 'a는 다형성을 의미한다.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('datatype \'a btree = Leaf of \'a\n                  | Node of \'a btree * \'a * \'a btree\n\nval myTree = Node (Leaf 9, 8, Node (Leaf 3, 5, Leaf 7))\n\nval strTree = Node (Leaf("B"), "A", Node (Leaf("D"), "C", Leaf("E")))\n')])])]),t("h5",{attrs:{id:"실행-결과-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실행-결과-2"}},[e._v("#")]),e._v(" 실행 결과")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('val myTree = Node (Leaf 9,8,Node (Leaf #,5,Leaf #)) : int btree\nval strTree = Node (Leaf "B","A",Node (Leaf #,"C",Leaf #)) : string btree\n')])])]),t("h4",{attrs:{id:"숫자값-모두-더하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#숫자값-모두-더하기"}},[e._v("#")]),e._v(" 숫자값 모두 더하기")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("datatype 'a btree = \n    Leaf of 'a\n  | Node of 'a btree * 'a * 'a btree\n\nval myTree = Node (\n  Leaf(9),\n  8,\n  Node (\n    Leaf(3),\n    5,\n    Leaf(7)\n  )\n)\n\nfun count (Leaf n) = n\n  | count (Node (left, n, right)) = count(left) + n + count(right)\n\nval myTreeCount = count(myTree)\n")])])]),t("h5",{attrs:{id:"실행결과"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실행결과"}},[e._v("#")]),e._v(" 실행결과")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("datatype 'a btree = Leaf of 'a | Node of 'a btree * 'a * 'a btree\nval myTree = Node (Leaf 9,8,Node (Leaf #,5,Leaf #)) : int btree\nval count = fn : int btree -> int\nval myTreeCount = 32 : int\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);