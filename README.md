# wetube 클론 강의 내용 - munbohr

npm install 할 때에는 package.json을 꼭 닫고 실행해야 한다.
안그러면 version 충돌이 일어난다.

---

.gitignore로 node_modules을 깃헙에 올리지 않음으로써 다른 사람이
파일을 다운 받을때 좀 더 용이하게 만든다.

---

--save-dev가 있는 이유가 dev에 그 정보를 내려받는다(다운로드?).

---

nodemon --exec 설정하면 추적? ctrl+c를 누르기 전까지는 무엇이 바뀌고 있는지
realTime으로 보여준다

---

nodemon --exec babel-node index.js 문장에서 nodemon --exec은 realTime으로 보여주는 것,
babel은 NodeJS가 이해하지 못하는 최신 문장을 컴파일러 해준다.

---

express function을 사용하면 express application을 생성해준다.

---

서버(?)랑 상호작용하는 그 모든 것들은 request 한다고 말한다.
ex) /login을 들어가거나 google.com을 간다거나 하는 모든 것들
내 서버는 그런 것들을 모두 listening 하고 있다.

---

app.listen은 바닐라JS에서 배웠던 variableName.addEventListener("interaction", functionName)
이랑 비슷한 것이다.

---

google.con === google.com/ <-- 이런게 root이다.

---

https는 서버가 서버끼리 서로 소통하는 방법이다.
GET은 http method이다. 의미는 무엇을 가져와 달라고 요청하는 것이다.

---

app.get("root", function) 처럼 2번째에는 function이 꼭 와야하는것 같다.

---

express 에선 route handler에는 event같은 건 없지만 req(uest), res(ponse)라는 섹시한
object 두 개가 있다. express가 무대 뒤에서 해주는 것이다(심지어 무료로!)
req엔 ㅎㄷㄷ 할 정도로 많은게 존재한다! 전부 다 req object들이다.

---

return res.end();는 server 호출하는 것은 안하겠다고 선언하는 것이다.

---

  <h1>#3.4</h1>

- h1, JSON도 개별적으로 res.send를 통해 사용할 수 있다

---

  <h1>#3.5</h1>

- middleware = 중간에 있는 소프트 웨어

- 모든 middleware는 handler이고, 모든 handler는 middleware이다.

- nex();는 다음 함수를 호출한다, 다음 function이 없으면 작동 안함.

---

  <h1>#3.5</h1>

- const gossipMiddleware = (req, res, next) => {
  return res.send("something");
  next();
  }
  하면은 다음 함수가 호출 되지 않는다.

- gossipware 은 우리가 어디를 가려는지 말해준다

---

  <h1>#3.6</h1>

- middleware를 use하는게 먼저 오고, 그 다음에 URL의 get이 와야한다.
  마지막 함수는 next();를 굳이 추가 할 필요가 없다.

---

  <h1>#3.8</h1>

- Recap =>
  dependencies, devDependencies에 있는 버전 정보를 확인해서 npm i 할 때
  모두 다운받아준다. dependencies는 프로젝트가 작동하기 위해 필요한 것,
  devDependencies는 개발자들이 개발하기 위해 필요한 것.

---

  <h1>#3.9</h1>

- () => function을 inline function이라고 부른다

---

  <h1>#3.10</h1>

- middleware를 원하는 만큼 만들수 있음

- 누군가 대답하기 전까지는 전부 middleware이다.

- 순서가 중요하다.

---

  <h1>#4.0</h1>

- Router는 controler와 url을 쉽게 관리해준다.
  쉽게 말해 미니 어플리케이션을 만들어주는 것이다.
  Router는 우리가 작업중인 주제를 기반으로 url을 구획화한다.

---

  <h1>#4.2</h1>

- 코드를 작성한만큼 정리하는데에 시간을 할애해야한다.
  NodeJS는 모든 파일은 모듈이고, 거품과 같다.
  import하기 전에 export 먼저 해야한다.
  export는 무언가를 밖에 공유하는 것이다.
  default export를 했기때문에 밖에선 이름을 바꿔도 상관이 없다.

- #4.2 진행중 videoController에서 export를 해주지 않아서 찾고 있었음

- default에서 export 할 때엔 내가 원하는 아무 이름이나 가능한데
  export const 이렇게 되어있으면 그 뒤에 {변수명?} 대로 가져와야함
  파일은 하나의 default밖에 못가진다.
  import {variable1, variable2, variable3 } from "파일 위치";형식으로 가져올 수 있다.

- 자바 스크립트에서 delete는 이미 예약 되어있어서 변수명으로 사용할 수 없다,

  <h1>#4.4</h1>

- url 을 정리해주지 않으면 comment on video 혹은 delete video comment 같은 케이스가 발생한다.
  이걸 다 타이핑 해야하는데 매우 귀찮기때문에 구획을 나눠야 한다. 즉 "분할 정복!"

---

  <h1>#4.5</h1>

- 하나의 JS 파일을 통째로 import하려면 const 무슨무슨Router = express.Router(); 하면 된다
  그리고 export는 잊지말고 해줘야한다.

- 위에서도 말했듯이 import {variable1, variable2, variable3 } from "파일 위치";를 하지 않으면
  (export한 variable이랑 똑같아야 한다 -중요!)
  Node.js는 길을 잃는다.

- 현재 파일에서 벗어나고 싶으면 ../ 를 사용하면 된다.
  ./는 현재의 장소

---

  <h1>#4.7</h1>

- /: <-- ":"를 Parameter 라고 칭한다. 역할은
  url에 변수를 넣게 해준다.

- videoRouter.get("/:id", see);
  videoRouter.get("/upload", upload); 처럼 upload가 :id
  보다 밑에 있을때 upload를 :id로 인식하고 출력한다.
  (순서 중요!)

  <h1>#4.8</h1>

- 정규식에선 (\\n이 string 출력? 하는 것이고 , \\d+는 숫자만 체킹?하는 것이다.)

---

  <h1>#5.2</h1>

- app.set("views" process.cwd() + "/src/views");를 하면 퍼그를 그 파일 안에서 찾는다, 안그러면 nodeJS가 길을 잃는다.

- #{}가 pug에서 변수를 사용하는 법이다.

- res.render를 사용해 pug를 호출할 수 있다.

- 퍼그 사용시 주의점은 첫번째론파일명은 띄어쓰기가 있으면 안된다.
  파일명을 전부 다 소문자로 작성해야한다.

- partials로 자주 쓰이는 부분만 복붙해서 작성할 수 있음
  ex) include 파일 위치/head.pug

---

  <h1>#5.3</h1>

extends를 사용해서 확장? 아무튼 뭘 할수 있다. Recap들으면 알 수 있을것 같다.
block은 templete의 창문같은 것이다. 한마디로 요약하자면
다른 pug 파일들이 내용을 채워넣을 공간을 마련해 주는 것이다.

---

  <h1>#5.4</h1>

- block을 써놓고 다른 파일에서 사용하지 않으면 그 부분은 그냥 없는 것이다.

- block blabla하면 그 이름까지 정확히 같아야 한다. export default처럼 이름 막
  사용하면 안된다.

- render는 2 개의 argument를 받는다
  하나는 view, 다른 하나는 템플릿에 보낼 변수
  템플릿에 변수를 생성하는법 #{}
  res.render("Pug", {변수 2개 이상 가능 }, 이 이외에 변수 추가 가능);

---

  <h1>#5.6</h1>

- link(rel="stylesheet" href="https://unpkg.com/mvp.css")
  를 해주면 그나마 괜찮은 css를 입힐 수 있다.

  <h1>#5.7</h1>

- h1=pageTitle 의 경우엔 오직 하나의 값만을 가진다.
  여기에선 pageTitle이 variable Name이다.
  그러면 여기에선 평범한 text로 읽힌다.

- 이 파트는 복습이 필요한 파트입니다.

- 여기도 마찬가지로 if만 쓰거나 if ~ else 까지 쓸 수 있다.
- <h3>💥Pug는 띄어쓰기에 민감하다💥</h3>

  <h1>#5.8</h1>

- each variable_name in const 위치? 하면 array를
  가져올 수 있음 variable_name 이건 아무렇게 바뀌여도
  상관없는 거 같은데 const 이 부분은 바꾸면 안된다.

- array가 비어있으면 그냥 안뜬다. 빈공간으롬나 나옴
  여기다가 even 넣어서 array가 없으면 다른 문구가
  나오게 만들 수 있다. 즉 Pug가 자동적으로 array안에
  무엇이 없는지 체크한다.

  - 댓글이나 비디오, 다른 무엇이든 리스트를 보여주고
  싶을때 interation을 쓴다.
  <h1>#5.9</h1>

- li=video.title처럼 객체여도 된다.

- mixin은 일종의 똑똑한 partial이다.
  즉 데이터를 받을 수 있는 일종의 미리 만들어진 HTML Block이다.

- 블록은 같은 형태를 지니지만 안에 있는 서로 다른
  데이터를 가질 때 mixin 을 이용한다.

- mixin video(video)을 사용해 무엇을 받을지 정할 수 있음.(?)

- mixin의 경우엔 +를 넣어야한다. 그리고 Router처럼 import 할 때엔
  include 경로 를 사용해서 넣어주면된다. 이거 안하면 경로 못찾는다고
  뜬다.

- extends base.pug에서 pug를 지워줘도 Pug는 똑똑하기 때문에
  정상적으로 작동된다.

- each ~ in 안에 ~는 객체인데 array의 한 item이다.

---

  <h1>💥#5.10 Recap💥</h1>

- mixin은 가끔 쓰고 interation은 자주 쓸 예정

- each X in Y에서 Y는 반드시 존재해야한다.

- Y는 render로 보내지는 variable이다.

- +video()에 X(argument)를 대입하지않으면 오류가 난다.

- mixin을 사용할때에는 +를 꼭 사용해야한다.

- 그리고 mixin을 template에 include 해줘야한다.

- footer에다가 +를 안붙인 이유는 그냥 HTML이기 때문이다.

- 요약하자면 list의 모든 element 들을 HTML에 보여주는 것이
  interation의 역할이고, 다른 데이터를 포함하지만 같은 형태의
  HTML을 보여주는게 mixin의 역할이다.

- 위에 내용을 내 방식대로 해석하자면 interaction은 HTML 형식을
  가져오는 것이고, mixin은 HTML 형식 안에 들어갈 데이터를 가져온다.

  <h1>#6.0</h1>

- post를 사용하는 것은 assume하다.

- 백틱 사용중 `#{video.id}`했는데 적용이 안됬다.

- href에 변수를 사용하는 법은 + variable 혹은
  `${variable}`로 적용 가능하다

- #{}는 varible과 text를 섞어서 작성하는 방식이다.
  하지만 이걸 attribute에는 사용할 수 없다.

- const { id } = req.params;과 const id = req.params.id
  는 같다. 전자는 ES6형식 후자는 JS식(?)

  <h1>#6.1</h1>

  - video는 array에서 videos를 찾고 있다. watch template을
    render한다.

- ternary operator(조건문)를 사용할 수 있는데
  #{video.views === 1 ? "view" : "views"} 이렇게 사용할 수 있다

- "&rarr;"는 오른쪽 화살표 "&larr;" 는 왼쪽 화살표이다.

- absoulte와 relatie url의 차이점은 /edit하면 앞에 문장이 사라지고
  root 경로 + /edit만 뜬다. 근데 그냥 edit하면 앞에 문장 포함으로
  간다. root 경로 + /videos/edit으로 간다!

  <h1>#6.2</h1>

- 똑같은 url을 쓸 것이라서 action=""를 지워줬다.
  action="경로"하면 예를 들어 localhost:Num/videos
  이런 것들이 지워지고 localhost:/경로로 나오기 때문에
  action은 특별한 상황이 아니면 사용하지 않는다.

- 기본값으로는 method는 GET이다.

-💥 post 방식은 파일을 보내거나, database에 있는 값은
바꾸는 뭔가를 보낼 때 사용한다. 💥

- 💥 But 바꿀 data를 보내거나, file을 보낼 때, 웹사이트에
  로그인 할 때에도 post를 사용한다💥

  <h1>#6.3</h1>

- database를 수정하거나 변경하거나 삭제할 땐 method="POST"
  를 사용하고 , 그게 아니라 data만 받는 목적이라면
  method="GET"을 사용한다.

- <h4> 한번 더 강조하자면 render로 Pug , 즉, HTML을 load 할 수 있다.</h4>

- videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);를 사용하면
  videoRouter.get("/:id(\\d+)/edit", getEdit);
  videoRouter.post("/:id(\\d+)/edit", postEdit); 를 동시에 적은 효과를 볼 수 있다.
  (효과는 대단했다!) 실수도 줄일 수 있다는 장점이 존재한다.

- 위에 간결한 코드를 설명하자면 get하면 request를 이 route로 보내면,
  getEdit을 사용하고 post request를 이 route로 보내면 postEdit을 사용할 것이다.

- <h3>실수를 통해 깨달은 것인데 연동 되는 무언가를 지우면 그것이 사용된 경로를
  찾아내서 전부 바꾸거나 없애야한다.</h3>

- 현재 우리의 express application은 form을 어떻게 다루는지 모른다.
  express.urlencoded([options])를 하면 우리의 form의 body를 이해
  하게 해준다.

- parameterLimit를 써서 parameter에 갯수 제한을 줄 수 있다.
  또는 limit을 사용해서 form 사이즈에 제한을 줄 수 있다.
  extended는 body에 있는 정보들을 보기 좋게 형식을 갖춰
  주는 일을 한다.

- 거듭 말하지만, 우린 Router를 사용하기 전에 이 middleware
  를 사용해야한다. 그러면 그 middleware가 그 form을 이해하고
  그것들을 자바스크립트로 변형시켜줘서 우리가 사용할 수 있게
  만들어 주는 것이다.

- app.use(express.urlencoded({ extended: true }));는 express
  application이 form의 value들을 이해할 수 있도록 하고,
  우리가 쓸 수 있는 멋진 자바스크립트 형식으로 변형 시켜준다.

  <h1>#6.4 Recap</h1>

- method="POST"를 하면 post request을 back end에 보낸다.

- HTTP method는 그 종류가 매우 많다.

- 니꼬쌤은 보통 2개 이상의 method를 사용하는게 아니라면
  route를 사용하지 않는다.
- post edit이 하는 것은, 먼저 req.params로 부터 id를 받는다.
  form 안에 있는 value의 java script representation이다.
  이건 req.body로 접근할 수 있다.
  app.use(express.urlencoded({ extended: true })); 요녀석이
  HTML form 을 이해하고 그 form 을 우리가 사용 할 수 있는
  javascript object 형식으로 통역을 해준다.

- 어떤 request가 vdieoRouter,post에 이르렀을 때 req.body는
  이미 준비가 돼 있을 것이다.

- name=""가 없으면 req.body에서 data를 볼 수 없다.
  req.body는 텅 비어있을 것이다.

-<h3> 오늘 route를 get으로 썼다가 조금 헤맸다, 하지만 조금 숙달돼서 금방 찾았다. </h3>

---

<h1>#6.6</h1>

- <h3>오타 조심하자!</h3>

---

<h1>#6.7~#6.9</h1>

- <h3>MongoDB 설치 하는 법은 MongoDB -> resource -> server -> installatin 
  가면 확인 할 수 있다. </h3>

- <h2>나와 같은 윈도우 개발자들은 chocolatey를 깔아서 mongodb 검색 후 
  choco install mongodb이 나오는데 copy 해서 붙여 넣으면 된다. chocoalatey는
  powersehll에서 열어야 하는데 명심할 것은 관리자 모드로 해야한다는 것이다.</h2>

- import mongoose from "mongoose";
  mongoose.connect("mongodb://127.0.0.1:27017/wetube"); 처럼 써서 mongodb를
  가져 올 수 있다. mongodb://127.0.0.1:27017/같은 경우는 mongodb가 존재하는
  디렉토리에서 mongo라는 명령어를 쳐서 connecting to: 옆에 코드를 따오면 된다.

- import "./db";로 import 할 수 있다.

- on과 once의 차이점은 on은 여러번 계속 발생 시킬 수 있다. 예를 들자면 클릭같은 이벤트

<h2>WSL에서 mongo 실행방법

1. WSL 터미널을 연다
2. 'sudo apt update' 을 입력하고 apt 업데이트
3. 'sudo apt-get install mongodb' 을 입력하고 설치한다
4. 'mongod --version' 을 입력하고 설치가 잘 되었는지 확인한다
5. 'sudo service mongodb start' 을 입력하고 mongo 를 사용할 수 있게 서비스 시작
6. 'mongo' 를 입력하면 mongo shell로 이동한다
7. 다 사용했으면 'sudo service mongodb stop' 을 입력하고 서비스를 종료한다

- 'sudo service mongodb status'를 입력하면 지금 mongodb 서비스가 실행중인지 알 수 있다
  실행중이면 오른쪽에 [OK] 아니면 [Fail]
  인용문 from jjhun1228</h2>

- db가 실행되는게 느리다. 그래서 좀 느리게 나온다.

- 수정도 할 수 있고, 삭제도 가능하게 해주는 행위를 일반적으로 CRUD라고 한다.
  C는 create,R은 read, U는 update , D는 delete

- Video.js같은 모델을 만드는 이유는 그 데이터가 어떻게 생겼는지 알려주기 위함이다.
  예를 들어 "제목이 있고, 그건 문자형이다"라고 얘기해주는 형식이다.

- <h4>schema는 데이터 형태이다.</h4>

---

<h1>#6.10</h1>

- <h2>mongodb사용법
  1. wsl창에 mongo를 입력
  2. mongodb console창이 뜬다.
  3. show dbs하면 database들이 나온다.
  4. use + 사용할 db_NAME을 치면 그 db 안으로 들어가진다
  5. show collections하면 그동안의 거시적인 data를 볼 수 있다. 
  6, 그리고 db.( + 아까 나온 data).find()하면 모든 data를 볼 수 있다</h2>

- const videoSchema = new mongoose.Schema({

}) 이 안에 우리들의 비디오 형식을 작성할 것 이다.
비디오별 데이터가 가진 형식을 정의해주고 있다.
id를 사용하지 않는다. (곧 얘기해주실 예정)

- 이 영상에서는 우리의 video 형태를 정의해줬다.

- title을 보내면 데이터의 형식이 맞는지 확인해 준다.

- <h2>db를 mongoose와 연결시켜서 video model을 인식시킨다.</h2>

---

<h1>#6.11</h1>

- Video.find()를 사용하는 법은 두가지가 있는데,
  먼저 callback function을 활용하는 방법이 있고,
  둘째는 promise를 활용하는 방법이 있다.

- callback 이란 무언가가 발생하고 난 다음 호출되는
  function을 말한다. 즉, JS에서 기다림을 표현하는 하나의
  방법이라고 생각하면 된다.

- 코드 실행 중 오류가 발생할 수 도 있는데 그 이유는 우리가
  받는 데이터는 JS에 없기 때문이다!

- Nicolas쌤: promise가 가장 섹시한 방법이다

- Video.find({}, )에 중괄호는 search terms를 나타내는데
  이 search terms가 비어있으면 모든 형식을 찾는다는 것을
  의미한다.

- callback은 err와 docs라는 signature를 가진다.
  이 부분이 우리가 찾는 function이다.

- <h2>💥Callback explanation이 엄청 중요하다!💥</h2>

다음 강의에 계속...

---

<h1>#6.12</h1>

- mongoose는 Video.find({}) 부분을 database에서 불러올 것이다.
  database가 반응하면, mongoose는 이 function을 실행시킬 것이다.

- 우리의 logger는 request가 완성되면 출력이 돼야한다.

- callback은 특정 코드를 마지막에 실행되게 한다.

---

<h1>#6.13</h1>

- callback의 장점은 에러들을 바로 여기에서 볼 수 있다는 것이다.

- 하지만 callback의 단점은 function안에 function을 작성해야하는 것이다.

- promise의 차이점은, await를 find앞에 적으면 find는 우리가 callback을
  필요로 하지 않는다는 것을 안다. 그렇기에 find는 찾아낸 video를 바로
  출력해줄 것이다.

- +(추가 내용) callback은 console.log() 두개 사이에 넣고 실행하면 callback이
  가장 늦게 나왔다.

- await이 대단한 이유는 await가 database를 기다려주기 때문이다.

- 코딩 규칙상 await는 function 안에서만 사용이 가능한데 해당 function이
  asynchronous일 때만 가능하다 그렇기 때문에 async를 적어주는 것이다.

- error를 살펴보면 callback의 경우 어디에서 무엇이 오는지 명확한데,
  promise는 아직 명확하지 않다. 이 때 두가지 옵션이 있는데
  첫 번째는 try를 사용하는 것이고, 이 방법은 res.render를 실행하다 에러 발생시
  , 이 코드로 넘어가서 실행시키는 것이다. 에러를 인식 하는 것이 catch의 기능이다.

- 이 operation의 await가 있는 코드에 오류가 있다면 await가 있는 코드는 출력되지
  않을 것이다. return 모시깽이가 실행 ㄴㄴ

---

<h1>#6.14</h1>

- return 을 안해서 작동은 모두 잘 될 것이다.

- render 를 절대로 두번 동시에 쓰면 안된다. 이미 render 한 것을 render 할 순 없다.

- return을 사용하는 이유는 이 function이 render 작업 후에 종료되도록 하기 위해서이다.

- 계속 강조하지만 return이 아니라 실행되는 function들에 집중해야 된다.

- 예를 들어 redirect 뒤에 render를 할 수 없다.

- return은 필수가 아니라 필요한 function에만 넣어주는 선택사항이다.

- return을 적어서 실수를 방지해 주는 것이 좋다.

---

<h1>#6.15</h1>

- schema는 우리의 비디오 형태를 정의해준다.

- split은 string들을 분리하는 기능을 가지고 있다, splitter 또는 separator
  가 그 분리의 기준이 되는데

- "food,movies ".split(",").map(word => `${word}`)
  -> ["#food""#movies""#music"]
  이게 바로 해시태그를 구성하는 원리가 될 것이다.

  - #6.15의 object는 JS에 저장은 되있지만 database에는 저장 되어있지않다.

  - <h3>mongoose는 자동적으로 data에 id를 부여해준다.</h3>

---

  <h1>#6.16</h1>

- mongoose.schema를 사용하는 이유는 그 데이터 타입의 유효성을 검사하기
  때문이다. 받은 data type이 유효하지 않으면 그 data를 받지 않는다.

- title을 string으로 받도록 해서 숫자를 사용하더라도 String값으로 반환한다.

- number 값을 받는 object에 string이 있으면 그냥 그 값을 받지 않는다.

- 우리는 video.save를 실행하지만 await 을 해야한다, 그 이유는 데이터를
  database에 전송하는데 시간이 걸리기 때문이다.

- video.save를 하지 않으면 그냥 java object인데 database에 저장된다.

- await video.save(); 이런 식으로 정보를 db에 저장한다. f5를 눌러도
  db에 저장되어 있기때문에 사라지지 않는다.

- mongo 안에서 use wetube하고 show collection을 하면 저장된
  data가 나온다. 여기서 collection은 document들의 묶음이라고
  생각하면 된다.

- 값이 잘못되면 웹을 불러오지 않는다. 즉, database는 우리의
  실수를 막아주고 있다.

- 아니면 video.save를 지우고 await Video.create({ data~ }); 해도 정상적으로
  작동한다.

---

<h1>#6.17</h1>

- data에 required를 넣지 않으면 그 data를 관련 줄을 지워도 정상작동된다.

- 예시) Discriptions: {type: Date, required: true}

- mongoose에 데이터 타입을 더 구체적으로 작성할수록 더 편하다.

- await에서 에러가 생기면 그냥 다 날아가버리는 것이다.

- 에러로 인한 피해를 막으려면 try {} catch {}를 꼭 해야 한다.

- required를 사용하면 그 값이 없어서는 안된다. 안그러면
  무한로딩의 늪..

- mongoose는 똑똑해서 schema에 function을 넣을 때

- 변수에 errorMessage: error. \_message를 사용해서 에러 문구를
  창에 띄울 수 있게 된다. 물론 이것도 mongoose가 만들어주는 것이다!

- createdAt: {type: Date, required: true, default: Date.now} 하면서 Date.now()를
  하지 않는데 그 이유는 ()를 넣으면 바로 실행되기 때문이다.

- <h3>mongo에서 저장된 db를 보는 법은 show dbs -> use DBS_NAME -> db.videos.find()하면 db에 저장된 값이 나온다</h3>

#6.17 요약

1. 먼저 에러를 만들었다
2. required를 썼는데 default도 같이 써주지 않아서
   required가 오류가 났다.
3. 그래서 catch에 대해서 배웠다.
4. 그 덕에 에러 메세지 template를 render 해서
   보내줄 수 있었다.
5. error가 있는 경우에는 errorMessage와 함께
   render
6. 그리고 try와 catch에 대해서 배웠다.
7. 기억할 것은 'await'의 코드에 error가 있다면
   JS는 더 이상 코드를 실행시키지 않을 것이다.
8. JS에서 try와 catch가 같이 와야한다.
   (만약 catch가 없다면 우리의 서버는 아무것도 안함.)

---

<h1>#6.18</h1>

- uppercase:true 하면 모두 대문자로 나오게 할 수 있다.

- .trim()은 양쪽에 빈 공간을 제거해준다.

- 데이터에 대한 구체적인 설명은 정말정말 중요하다.

- match는 정규표현식을 추가하는 것을 도와준다.

- minLength: NUMBER_VLAUE or maxLength: NUMBER_VLAUE으로
  글자 제한을 할 수 있다.

- Pug(HTML)에도 설명을 넣어줘야하고 db에도 설명을 넣어줘야,
  다른 사람들이 inspect창에서 지워버리면 악용할 수 도 있기때문이다.
  나름의 보안(?)이다.

  - schema는 데이터의 종류와 필수 여부를 구분할 수 있고 알고, string
    길이도 검사 할 수 있다.

- 여기에 default까지 있다.

---

<h1>#6.19</h1>

- /:id(\\d+) 정규식표현에 string을 넣기 위해선 [0-9a-f]{24}를 사용하면 된다.
  0-9는 0에서부터 9까지 그리고 a부터 f까지의 24자 string을 찾아내는 것이다.

- await을 사용할 때에는 (변수) 옆에 async를 꼭 붙이자 예를 들어 async(error)같이
  붙여야한다.

---

<h1>#6.20</h1>

- .excu() 는 query를 실행시키는 것이다. Mongoose 내부적으로 우리가 excute를
  호출하면 promise가 return이 된다.

- 만약 호출하는 링크의 :id가 다를 시에 영상이 null(존재하지 않음)이여서 무한
  로딩, 즉 오류가 난다. 이 에러는 MongoDB에서부터 나온 Error가 아니다. 이런
  경우엔 null로 부터 Title이라는 property를 찾을 수 없다는게 문제인 것이다.

- 우리는 어떤 조건이 성공하더라도 다른 조건또한 성립하는지 확인해야한다.

- if 안에 return을 넣지 않으면 그 조건문이 성립하더라도 밑에 코드가 실행이
  돼서 꼭 return을 넣어줘야한다.

- 해시태그가 array로 나와서 당황스러울 땐 value= video.hashtags.join()를 하면
  array가 벗겨진 채로 나온다.

---

<h1>#6.21</h1>

- hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));를
  정리해 보자면 word.startsWith("#") ? word : `#${word}는 만약 옆에 설정한 #와 같이
  내가 말해주는 무언가가 있다면 그 기호,문자를 추가시키지 않고 넘어갈 수 있다.

- ? word : `#${word}는 word가 #${word}와 같은 꼴이면 그 상태로 그냥 두고
  그게 아니라면 #${word}로 만든다.

---

<h1>#6.22</h1>

- video.title을 = something처럼 손수 수동적으로 하는 방법이 있고
  mongoDB에서 주는 function을 이용해 자동적으로 할 수 있다.

- [번외] Model.exist()는 우리한테 유용하다.

- exists는 ID를 받지 않는다. exist()는 filter를 받는다.

- 우리는 object의 id가 req.params의 id같은 경우를 찾는 것이다.
  한 마디로, video object를 받는 대신에 true나 false를 받아낸다.

- exitst()는 필터를 필요로 하고 영상의 어떤 property도 필터 가능하다.
  하지만 findById ~는 꼭 id를 인자로 받는다.

<h1>#6.23</h1>

- middleware의 function 안에는 this라는 키워드가 있는데 이 this는
  우리가 저장하고자하는 문서를 가리킨다.

- mongoose의 document에서 무슨 일이 발생하기 전&후에
  middleware를 적용할 수 있다.

- mongoose가 업데이트 돼서 니꼬쌤이 쓰셨던 {useNewUrlParser,useUnifiedTopology,useFindAndModify,}를 굳이 따라 쓸 필요가 없어졌다. 경험상 오히려 오류가 남

- videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0]
  .split(",")
  .map((word) => (word.startsWith("#") ? word : `#${word}`));
  }); 가 Middleware이다.

---

<h1>#6.24</h1>

- #6.23에서 우리는 어떤 이벤트가 발생하기 이전에 중간에 가로채서
  우리 문서를 수정할 수 있다는 것을 배웠다.

- Static을 생성하기 위해서 필요한 것은 Schema.static이랑 function과
  만들고자하는 static의 이름이다.

- 댓글 보니 Static은 아마 reuse(재사용) function을 위해 쓰이는 것같다.

- findOneAndUpdate는 save hook를 호출하지 않는다.

- findOneAndUpdate에서는 업데이트하려는 문서에 접근할 수 없다.

- save 훅같은 경우에는 여기 pre("save") middleware를 보면, 여기서는
  우리가 update하려는 문서에 접근이 가능하다.

- static function을 사용했는데 이해가 안돼서 복습해야하는 파트이다.

---

<h1>#6.25</h1>

- https://mongoosejs.com/docs/guide.html에서 명령어? 관련 정보를
  얻을 수 있다.

- delete와 remove의 차이점은

---

<h1>#6.25~#6.27</h1>

- Mongoose가 좋은 이유중 하나는 쿼리엔진을 가지고 있다,

- sort({ variable: "desc", }는 순서정렬을 해주는 것인데 desc는
  최근의 것이 맨 위로 올라가고 asc는 오래된 것이 위로 올라간다.

- input에서 name 설정해주는 것은 매우 중요하다.

- keyword는 우리가 search할 때에만 생기는 것이다.

- 이 파트에서 req,query로 URL에 있는 모든 정보들을 확인할 수
  있었다, 그리고 때때로 keyword가 undifined가 될 수도 있었다.

- regular expression은 특정 단어로 끝나는 것들을 검색한다던가 특정
  단어를 포함한 제목이라던지 특정 단어로 시작되는 제목도  
  검색할 수 있다.

- $regex: new RegExp(keyword, "i")에서 i는 W이나 w의 차이를
  없애준다.

- 더 자세한 것은 query operators에서 알 수 있다.

---

<h1>#7.0</h1>

-<h3>중요: input에 name이 없다면 백엔드에서 사용할 수가 없다.</h3>

- unique를 통해 같은 것들을 여러개를 만드는 것을 막는다.

---

<h1>#7.1</h1>

- db.users.find()를 했을 때 password가 노출되는 위험한 상황이 발생됨
  그래서 보안처리를 해 줘야 한다.

---

<h1>#7.2</h1>

- 같은 입력값에선 같은 해시값이 나온다. 이것을 컴퓨터과학에서
  deterministic function(결정적 함수) 라고 한다. = 항상 똑같이
  나오기 때문에 그런다.

- mongodb에서 data 값을 전부 지우려면 db.(+ COLLECTION_NAME).remove({})
  를 해야한다.

- bcrypt를 사용해서 해시값으로 변환시켜줄 수 있다.

- bcrypt엔 soltRounds라는 변수가 있는데, 말그래도 소금을 뿌린다는 의미로
  password를 더 예측하기 어렵게 만들어준다. (여러번 해싱함.)

- userSchema.pre("save", saltRounds, async function () {
  this.password = await bcrypt.hash(this.password);
  })처럼 이 context,function 안에서 this는 여기서 create되는 User를 가르킨다.

- await을 쓰기 때문에 callback 함수는 필요없다.

- 결론적으로 userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
  })이라는 함수를 내 방식대로 설명해 보자면 Schema는 data
  형식?을 가져오는데 .pre가 붙어 있으니 data를 가져오는 그
  사이에 무언가를 한다는 것인데 this.password를 통해 난
  password DATA만 사용할 것을 알려주고 bcrypt를 통해서
  5번 해싱하게 된다..

---

<h1>#7.3</h1>

- (Schema가 존재하는 JS파일).exists({DATA_NAME}) 하면 그
  data가 존재하는지 알 수있다(물론 몇번의 과정을 걸쳐야한다.)
  ex) User.exists

---

<h1>#7.4</h1>

- 똑같은 아이디 똑같은 username으로 하고 비번만 바꾸면 errorMessage가
  뜬다, 하지만 여기서 status code 가 등장하는데, status code는 오류가 발생해도
  비번을 저장하겠냐고 물어본다.

- 우리가 틀렸을때 흔히 보는 400이나 404같은 것들을 응답 상태 코드라고 하는데
  200이 뜨면 OK라는 뜻을 지니고 있다.

- status(400)를 사용하면 브라우저에게 이 URL을 기록하지 말라고 알려주는 방법이다,
  브라우저는 우리가 이런 에러를 출력하고 있다는 것을 모른다.

- 페이지에서 404 코드를 받으면 브라우저가 히스토리에 기록을 남기지 않을 것이다.

- hr
  div
  이렇게 작성하면 에러가 난다 (경험담)

---

<h1>#7.5</h1>

- 배운것 중에서 가장 중요한것은 POST이다. POST는 DB와 통신을 하며
  데이터를 다루고 에러 처리, 유효성 체크 등등 실제로 사용되어지는
  기능을 담당하고 있다.

- 유저가 입력한 비밀번호와 저장된 비밀번호가 같은지 체크하지 위해서
  저장된 해시값과 비교한다.

---

<h1>#7.6</h1>

- 쿠키를 이해를 위해선 세션을 이해해야한다.

- 세션은 백엔드와 브라우저간에 어떤 활동을 했는지 기억하는 걸 말한다.
  즉, 세션은 백엔드와 브라우저 사이의 memory, history같은거다.

- 그런데 이게 작동하려면 백엔드와 브라우저가 서로에 대한 정보를
  가지고 있어야한다.

- 왜냐면 로그인 페이지에서 HTTP를 요청하면 요청이 처리되고
  끝나게 되는데, 그 이후로 백엔드는 아무것도 할 수 없어진다.
  이것을 Stateless(무상태)라고 한다.

- 세션에선 유저가 로그인 할 때 유저한테 어떤 텍스트를 준다
  그리고 다시 로그인할때 텍스트를 돌려준다?

- session({ }) 안에 secret라는 설정을 해줘야한다.

- session 미들웨어가 사이트로 들어오는 모두를 기억할 것이다.

---

<h1>#7.10</h1>

- locals object는 이미 모든 pug template template에 import
  된 object이다. Pug에 #{object} 를 써서 호출 가능

- 다시 한번 강조하지만, 이는 locals object 안에 있어야 한다.
  Ex) res.locals.OBJECT_NAME = ~
  형식으로 작성해야한다.

---

<h1>#7.11</h1>

- session이라는 middleware가 브라우저에 cookie를 전송한다.

- cookie는 backend가 우리의 브라우저에 주는 정보인데
  cookie에는 정해진 규칙이 있기때문에 backend에
  request를 할때 브라우저가 알아서 그 request에 cookie를
  덧붙이게 된다.

- 브라우저와 backend같은 경우엔, 살아있는 Connection이란 없다.
  render가 끝나거나 redirect가 발생하거나, 응답없음 등을 받으면
  connection은 바로 끝난다. 그래서 사용자에게 session ID를 준다.

- Cookie와 Session의 개념은 별개이다.

- Cookie는 단지 정보를 주고 받는 것이고, 그게 다이다.
  Cookie는 자동적으로 처리된다.

- 다른건 session ID인데, 이건 Cookie에 저장된다.

- backend는 생성된 모든 session ID를 관리하는 곳이다.

- session store는 우리가 session을 저장하는 곳이다.

- session store도 재시작하면 cookie는 유효하지 않게된다.

- 브라우저마다 req.session이 다르기 때문에 몇몇 정보를
  req.session object에 덧붙이는것이다.

---

<h1>#7.12</h1>

- 로그인한 상태에서 connect-mongo(MongoStore)를 사용하고 Backend를
  kill하고 다시켜도 로그인이 돼있는데 이는 로그인 정보가 서버에 있지
  않게 돼서 그렇다. 세션들을 database에 저장하도록 만든것이다.

---

<h1>#7.13</h1>

- 이 파트에선 session authentication(인증)을 사용하면 생길 수 있는 문제를
  다룬다.

- session을 하나하나 만들어서 db에 저장하면 큰 돈이 들게 된다.

- resave: false,
  saveUninitialized: false
  로 해주게 되면 세션이 새로 만들어지거나 수정된 적이
  없을 때 Uninitialized(초기화 되지않은)이다.

- Uninitialized 라는 설정은 세션을 수정할 때 만 세션을
  DB에 저장하고 쿠키를 넘겨주는 것이다.

- Uninitialized가 false로 돼있으면 Backend가 로그인한
  사용자에게만 쿠키를 주도록 설정되었다는 것이다.

---

<h1>#7.14</h1>

- 쿠키의 프로퍼티

- secret은 우리가 쿠키에 sign 할 때 사용하는 string이다.
  쿠키에 sign하는 이유는 우리 backend에 쿠키를 줬다는 것을
  보여주기 위함이다. 왜냐하면 session hijack(납치)라는
  공격유형이 있기때문이다.

- 브라우저는 Domain에 따라 쿠키를 저장하도록 되어있다.
  그리고 Cookie는 도메인데 있는 Backend로만 전송된다.

- 만료 날짜를 정하지 않으면 그것은 session cookie로 설정
  된다.

---

<h1>#7.15</h1>

- env를 사용해서 데이터값을 숨길 수 있다.

- env 파일에 추가하는 모든 건 대문자로 적어야한다.

- env에 process.env.DB_URL를 바로하면 undefined가 뜬다.

1. env파일을 만든 후에 .gitignore로 가리기
2. 비밀로 해야하는 string을 process.env(환경변수)로 바꾸기
3. init.js에 import "dotenv/config";를 넣어주면 오류없이 진행된다.
4. env안의 필요한 정보를 process.env.(SECRET_NAME)으로 가져온다.

---

<h1>#7.16</h1>

- dotenv를 설치하고 require("dotenv") .config();를 하면
  dotenv는 파일을 읽고 env를 추가해줄 것이다.

- init.js에 import "dotenv/config";를 넣어줘야 한다.

- env 안에 있는 키값과 이름이 동일해야한다

- http://localhost:4242/users/github/callback (?)

---

<h1>#7.17</h1>

- callback Url이 자꾸 떠서 뭔가 했었는데
  Authorization callback URL에 user 뒤에 /finish로
  URL을 바꿔주지 않아서 일어난 일...
  조심하도록 하자!

---

<h1>#7.18</h1>

- Github에서 받은 토큰을 Access 토큰으로 변환시켜야한다

- finalUrl에 POST 요청을 보낼 것이다. 우선 fetch를 통해 데이터를
  받아오고 그 데이터에서 JSON을 추출할것이다.

- await.json이라는 실수를 함 ===> 원래의 답 = await json

- await fetch를 한 다음에 JSON을 가져오는것이 더 편하다.

- fetch는 브라우저에서만 가능하다. fetch의 기능이 NodeJS에
  포함돼 있지 않기때문이다.

- alert 또한 사용할 수 없다.

- 그리고 await을 쓸 땐 항상 async를 있지말자!

---

<h1>#7.19</h1>

- npm install node-fetch 했는데
  Error [ERR_REQUIRE_ESM]: require() of ES Module ~ not supported.
  라는 오류가 뜨면 npm install node-fetch@2를 하면 간단히
  해결 된다.

- 만약 response 안에 access_token이 없다면 우린 login으로
  redirect해야한다.

- fetch를 요청하면 fetch가 돌아오고 해당 fetch의 JSON을 받는다.

---

<h1>#7.20</h1>

- access_token을 가지려고 하는 첫번째것은 scope이다.
  scope:"read:user user:email"을 통해 유저를 읽고 유저 이메일을
  가져온다.

Github Login은 복습이 필요하다!!!!!!!!!

---

<h1>#7.21</h1>

- email은 String이 아닌 Object이다.

- 이건 직접 몸소 느끼셔야합니다.

---

<h1>#7.22</h1>

- req.session.destroy();하면 세션이 사라지고 로그아웃된다.

---

<h1>#7.23</h1>

- scope는 user로 무엇을 할것인지 설정한다.

- URL로 POST request를 보내고, 모든 것이 올바르면 우리에게
  access_token을 준다. (access_token은 Github API와 상호작용할 때 쓴다.)

- Github API에 어떤 method를 주더라도 응답을 보내준다.(access_token이
  있다면 말이다..)

- let user = await User.findOne({email: emailObj.email})을 통해서
  데이터베이스에서 해당 이메일을 찾고 해당 email을 찾았다면
  로그인 시킨다

- 만약 데이터베이스에서 해당 email을 찾지 못했을 경우 그 email로 user를
  만들것이다.

- socialOnly가 true이면 깃헙을 통해 만들어진 계정이고 socialOnly가
  false이면 깃헙을 통해 만들어진것이 아니다.

---

<h1>#8.1</h1>

- 이 과정에선 우리가 보호하려는 페이지에 로그인 하지 않은
  사람들이 가는 것을 막는 것이다.

- .all()을 통해 모든 route에 .all() 안의 값을 대입할 수 있다.

- {...req.session}은 req.session.user안에 있는 내용을 전해주는 것이다.

- 기본적으로 findByIdAndUpdate는 update되기 전의 데이터를 return
  해주고 new:true를 설정해주면 findByIdAndUpdate가 업데이트 된
  데이터를 return해줄 것이다.

---

<h1>#8.4</h1>

- loggedInUser는 모든 pug에서 사용 가능한 locals에서
  가져오는 것이다.

---

<h1>#8.6</h1>

- 실험결과 type="file"일때 value를 해보니 아무런 영향도
  미치지 못했다!

- type="file"일때 accept=\*/image등등으로 파일 업로드를
  제한 할수 도 있다

- multer를 사용하려면 enctype="multipart/form-data"을 해줘야한다.
  위 문장은 우리의 form이 다르게 encode될 거라는 의미이다.

- 아마 multer는 사용자들이 업로드하는 파일을 개발자(즉, 내가) 원하는
  폴더 등으로 이동시키는 역할을 하는것 같다.

- <h3> uploadFiles.single()이 하는 역할은 template의 input에서 오는 avatar파일을
  가지고 파일을 업로드하고 uploads 폴더에 저장한다. 그리고 그 다음
  controller인 postEdit에 그 파일의 정보를 전달한다. 이렇게 하면 request에 
  req.file이 추가 된다는 것이다.</h3>

- console.log(file); 했는데 왜 file 관련 이메일이 안뜨나 했더니 postEdit에서 선언해줘야
  한다.. 물론 나는 postChangePassword에다가 적어서 실행되지 않은 것이다.

---

<h1>#8.7</h1>

-
