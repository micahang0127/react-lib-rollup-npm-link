## [Library version.React]()

React 버전의 사내 Library 및 Common Code.

<br/>

#### [목적]() 
----
1) 공통적으로 자주 쓰이는 components, function 들을 정의하여 외부 React.js Project 에서 호출하여 용이하게 사용할 수 있도록 한다. 
2) React.js를 처음 접하거나 잘 알지 못하여도 호출 만으로 최대한 용이하게 사용할 수 있도록 한다. 
    

<br/>


#### [구성]() 
----
* <b>[epikar-lib-react]</b> <br/>
    : React version의 library 및 common 모듈의 집합체 Project
    ```
        $ cd epikar-lib-react               // 접속    
    ```
    <br/>
* <b>[check-epikar-lib-react]</b> <br/>
    : epikar-lib-react project 작성 시, 변경내용을 동기적으로 확인하는 용도의 프로젝트 <br/>
        ( epikar-lib-react project link로 연결하여 동기적으로 변경내용 확인 )
    ```
        $ cd check-epikar-lib-react         // 접속    
    ```


<br/>

#### [초기 세팅]() 
----
<b>1. npm install</b>  <br/>
: 두 프로젝트에서 각기 실행할 수 있는 환경을 만든다. 


* <b>[epikar-lib-react]</b> <br/>

        $ npm install --force
        
        or

        $ npm install --legacy-peer-deps --D rollup-plugin-terser
        $ npm install 

    [!] rollup-plugin-terser (build 시 코드파일 압축)로 인하여 
    npm install --D rollup-plugin-terser 를 하게 되면 충돌 에러가 남. 

<br/>

* <b>[check-epikar-lib-react]</b> <br/>

        $ npm install
    

<br/><br/>

<b>2. link 연결(로컬)</b>  <br/>
: npm link로 두 프로젝트를 연결한다. 이는 로컬에서만 실행된다. <br/>
확인 후 연결한 link는 바로 삭제하기로 한다. 

<br/>

* <b>[epikar-lib-react]</b> <br/>

    1) build <br/>
    : library로 사용할(link의 대상 프로젝트) 프로젝트에서 build를 실행한다. 
    link를 걸고 타 프로젝트를 확인 시, 이 타 프로젝트의 build 된 내용이 반영된다. 
    (+) 때문에 타 프로젝트의 코드를 수정하여 확인할 때에는 수정된 내용을 재빌드 해주어야 한다. 

            $ npm run build

        build 완료 후, 해당 프로젝트 root에 dist폴더가 생김.<br/>
        실제로 rollup -c --bundleConfigAsCjs의 명령문이 실행 됨.<br/>
        "build": "rollup -c --bundleConfigAsCjs",       // [package.json]

    <br/>

    2) link <br/>

            $ npm link

<br/>

* <b>[check-epikar-lib-react]</b> <br/>

    1) link의 대상 연결 <br/>
    : 타 프로젝트의 코드/파일을 사용할 수 있도록 타 프로젝트를 연결한다. 

            $ npm link epikar-lib-react

            // $ npm link <project name>
        
    

<br/><br/>

#### [진행]() 
----

<b>* 작업내용 지속적 확인 (동기화) <b/>   <br/>

: library 프로젝트의 지속적인 변경 및 확인 시, link 연결로 동기적으로 내용을 확인 할 수 있다. <br/>
(코드 수정 시마다 재실행 하지 않아도 변경내용 확인 가능.) <br/>
단, <b>재빌드</b>는 해주어야 한다. 

    $ npm run build

1) [epikar-lib-react]프로젝트 코드수정 
2) 재빌드(위 명령어)
3) 동기적으로 변경내용 확인 가능. 
    check-epikar-lib-react 프로젝트에서 재실행 하지 않아도 epikar-lib-react프로젝트에서 새로 빌드된 내용이 동기적으로 반영된다. 

<br/><br/>

#### [link 연결 해제]() 
: 작업 완료 후 link 연결을 해제하여 원래대로 되돌려 준다.  <br/>

* <b>[epikar-lib-react]</b> <br/>

        $ npm unlink --no-save epikar-lib-react
        $ npm uninstall --no-save epikar-lib-react











