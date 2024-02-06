## [Check Library version.React]
    react버전의 사내 Library / Common Code 작성진행 시, 확인용 프로젝트.

    * 사유
    react library project의 경우, rollup 번들러를 사용하고, webpack 번들러는 사용하지 않음(create-react-app도 미사용). 
    rollup은 npm start로 실행할 수 없으므로, 개발 진행 시 확인하는 방법으로 yarn link를 걸어 외부 프로젝트에서 연결 된 link로 실행 확인을 한다. 



#### [사용 방법]() 
    1. library project에서 빌드 후, yarn link
        ```
            $ npm run build           
            $ yarn link
        ```

    2. check project(me)에서 -> library project link 연결 
        ```
            $ yarn link <library project name>

            // ex> $ yarn link epikar-lib-react
        ```

    3. check project(me) 실행
        ```
            $ npm start
        ```

    4. library project code 변경 시, 실시간으로 변경내용 확인 
        library project 에서 build 하면, check project 에서 재실행 하지 않아도 동기적으로 변경된 내용 반영됨. 
        
    
