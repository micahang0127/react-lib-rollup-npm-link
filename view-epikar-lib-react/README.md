## [View Library version.React]()

React 버전의 사내 Library 및 Common Code 작성진행 시 <b>확인용 프로젝트</b>.

<br/>

#### [목적]() 
----
react library project의 경우, rollup 번들러를 사용하고, webpack 번들러는 사용하지 않음(create-react-app도 미사용).  <br/>
개발 진행 시 확인하는 방법으로 yarn link를 걸어 외부 프로젝트에서 연결 된 link로 실행 확인을 한다. 

<br/>


#### [사용 방법]() 
----
* <b>[사전세팅]-[epikar-lib-react]</b> <br>
    : library project(epikar-lib-react)에서 빌드 후, npm link

        $ npm run build           
        $ npm link

<br>

* <b>[진행]-[view-epikar-lib-react]</b> <br>

    <b>1. npm install</b>
    
            $ npm install

    <br/>

    <b>2. library project link 연결 </b> <br/>
    : library project를 확인할 수 있도록 연결한다. 

            $ npm link epikar-lib-react

            // $ npm link <project name>
        
    <br/>

    <b>3. 실행 </b>

            $ npm start

    [!] library project code 변경 시, 실시간으로 변경내용 확인 <br/>
        library project 에서 build 하면, link로 연결된 프로젝트에서 재실행 하지 않아도 동기적으로 변경된 내용 반영됨. 
            
    
