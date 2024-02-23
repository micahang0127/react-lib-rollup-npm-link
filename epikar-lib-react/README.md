## [Library version.React]()

React 버전의 사내 Library 및 Common Code

<br/>

#### [목적]() 
----
1) 공통적으로 자주 쓰이는 components, function 들을 정의하여 외부 React.js Project 에서 호출하여 용이하게 사용할 수 있도록 한다. 
2) React.js를 처음 접하거나 잘 알지 못하여도 호출만으로 최대한 용이하게 사용할 수 있도록 한다. 

<br/>


#### [사용 방법]() 
----

<b>1. npm install</b>   <br/>

        $ npm install --force
        
        or

        $ npm install --legacy-peer-deps --D rollup-plugin-terser
        $ npm install 

[!] rollup-plugin-terser(build 시 코드파일 압축하는 라이브러리)로 인하여 
npm install 되면(npm install --D rollup-plugin-terser) 충돌 에러가 남. 

<br/><br/>

<b>2. link 연결 </b> <br/>

: library project를 확인할 수 있도록 연결한다. 

        $ npm link
    
<br/><br/>

<b>3. 빌드(build) </b>  <br/>

: library 코드 변경은 빌드(build) 된 내용이 반영된다. <br/>
<b>[!] link를 연결해둔 타 프로젝트에서 재실행 하지 않아도, 재빌드만 하면 동기적으로 변경 내용을 확인할 수 있다.</b><br/>


        $ npm run build

        /*
        아래 명령어로 빌드 실행 시 root에 /dist 파일이 생성됨. 
        [rollup.config.mjs] 파일에서 output 부분에 dist파일을 지정함.
        ex> output -> file -> "./dist/bundle.js"
        */

<b>[!] 즉, 코드만 변경하고 빌드를 하지 않았을 경우, 빌드되어 있지 않은 내용(dist폴더에 없는 내용)은 변경내용에 반영되지 않음.</b>
            
<br/><br/>

<b>4. link 연결 해제 </b>  <br/>


: 작업 완료 후 link 연결을 해제하여 원래대로 되돌려 준다.  <br/>


        $ npm unlink --no-save epikar-lib-react
        $ npm uninstall --no-save epikar-lib-react
