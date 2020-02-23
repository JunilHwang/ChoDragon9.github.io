(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{293:function(t,_,v){"use strict";v.r(_);var r=v(28),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"글의-목적"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#글의-목적"}},[t._v("#")]),t._v(" 글의 목적")]),t._v(" "),v("p",[t._v("서비스 배포 과정과 안정화 기간에 대한 일렬의 과정은 안전한 서비스 운영을 위해서 중요하다.\n하지만 이러한 지식은 현업에서 경험하는 방법외는 얻기 힘들다. 서비스 개발 및 운영을 하는 엔지니어들에게 도움을 주고자 작성을 했다.")]),t._v(" "),v("h3",{attrs:{id:"배포와-관련된-지식들"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배포와-관련된-지식들"}},[t._v("#")]),t._v(" 배포와 관련된 지식들")]),t._v(" "),v("h4",{attrs:{id:"배포-프로세스"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배포-프로세스"}},[t._v("#")]),t._v(" 배포 프로세스")]),t._v(" "),v("p",[t._v("소프트웨어를 "),v("strong",[t._v("배포하기 위해서는 프로세스")]),t._v("가 존재한다. 나는 프런트를 담당하고 있는 데, 프런트에는 일반적으로 백엔드 배포에 의존성이 있다.\n의존성이 있는 소프트웨어가 있으면 협업부서간의 명확하게 순서를 정의해야 한다.")]),t._v(" "),v("p",[t._v("배포 과정중에 일시적으로 서비스를 사용하지 못하는 경우가 있다. 이럴때는 사용자들이 소프트웨어를 사용하지 못하도록 "),v("strong",[t._v("공지사항")]),t._v("과 같은 장치를 둔다.")]),t._v(" "),v("h4",{attrs:{id:"롤백-플랜"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#롤백-플랜"}},[t._v("#")]),t._v(" 롤백 플랜")]),t._v(" "),v("p",[t._v("롤백 플랜이란 배포 후 제품 사용에 지장을 주는 이슈 발생 시, "),v("strong",[t._v("이슈가 발생하지 않도록 대응")]),t._v("하는 방안이다.\n일반적으로는 두가지 방법을 진행하는 것을 봤다.")]),t._v(" "),v("p",[v("strong",[t._v("첫번째")]),t._v("는 형상관리에서 버전을 뒤로 되돌리거나, 배포를 이전 태깅 버전으로 배포하는 것이다.\n이 방법의 단점은 버전관리와 배포버전관리를 배포를 할 수 있는 모든 사람이 인지를 하고 있어야 한다.\n이렇게 하면 이 모든 것을 안정적으로 기록하고 관리할 수 있을 지 의문이다.")]),t._v(" "),v("p",[v("strong",[t._v("두번째")]),t._v("는 기능 비활성화를 위해 코드를 수정하는 행위이다. 배포를 위해 QA를 진행했을 것이다.\n이때 코드의 다수라인을 수정한다면 QA한 의미가 없다고 생각된다.")]),t._v(" "),v("p",[t._v("그래서 내가 선호하는 방법은 "),v("strong",[t._v("피쳐 토글링")]),t._v("이다. 단순히 불리언 값 수정으로 활성화/비활성화를 조정할 수 있고,\n배포와 같은 긴급한 상황일 때 실수를 줄일 수 있다.")]),t._v(" "),v("p",[t._v("이 기능은 비즈니스적으로 리스크한 기능에서도 오류 대비책으로 사용될 수 있다. 비즈니스적으로 리스크 한 기능을 예를 들면 "),v("strong",[t._v("결제창")]),t._v("이 있다. 결제창은 잘못된 구현을 할 경우 금전적으로 피해가 발생함으로 대비책을 세우는 게 손해를 줄일 수 있는 방법중 하나이다.")]),t._v(" "),v("blockquote",[v("p",[t._v("작년 카카오톡 영화서비스에 카카오페이 신규 결제 페이지를 적용한 경험이 있는 데, 해당 기능이 비정상적으로 노출될 경우를 대비해서 컴포넌트로 분리하고 토글링이 가능하도록 설계했다.")])]),t._v(" "),v("blockquote",[v("p",[t._v("결제창은 페이 라이브러리, 빌링 API 등 연관된 서비스가 많은 데, 하나의 서비스라도 일시적인 오류가 발생되면 "),v("strong",[t._v("구 UI")]),t._v("를 노출하도록 했다. 이렇게 되면 사용자는 영화예매를 정상적으로 진행이 가능하다.")])]),t._v(" "),v("h4",{attrs:{id:"안정화-기간"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#안정화-기간"}},[t._v("#")]),t._v(" 안정화 기간")]),t._v(" "),v("p",[t._v("안정화 기간은 서비스 배포 후 "),v("strong",[t._v("서비스가 안정적으로 동작")]),t._v("하는 지 확인하는 기간을 의미한다. 사용자가 사용할 시간이 필요하므로 가능하면 "),v("strong",[t._v("1~2주")]),t._v(" 정도 가지는 것을 추천한다. 안정화 기간 사이에는 새로운 배포를 하지 않는 것이 좋다. 이슈 발생 시 해당 배포와 연관된 이슈인지 파악이 필요하기 때문에 안정화 기간에는 배포는 하지 않는 것을 추천한다.")]),t._v(" "),v("h4",{attrs:{id:"에러-리포트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#에러-리포트"}},[t._v("#")]),t._v(" 에러 리포트")]),t._v(" "),v("blockquote",[v("p",[t._v("카카오에서는 "),v("a",{attrs:{href:"https://sentry.io/welcome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentry"),v("OutboundLink")],1),t._v("라는 도구를 사용하고 있다.")])]),t._v(" "),v("p",[t._v("우리가 개발중에는 콘솔을 통해 에러를 확인하며 개발을 한다. 하지만 서비스 운영중에도 에러가 발생하지 않을 거라는 보장은 없다.\n서비스에서 에러 발생할때, 사용자가 정상적인 서비스 사용을 못하는 것을 서비스를 운영자가 인지할 수 있어야 한다.\n이때 에러 리포트 기능을 사용한다.")]),t._v(" "),v("p",[t._v("에러 리포트에는 예외 발생 로그(throw로 던지는 것)와 사용자 디바이스, 이동 경로 등이 들어간다. 하지만 경험상 이 정보로는 파악하기 힘들때가 있다.\n그렇기 때문에 해당 서비스에 맞게 추가적인 로깅 처리를 하도록 에러 리포트 설정을 해야 한다.")])])}),[],!1,null,null,null);_.default=s.exports}}]);