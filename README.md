# My Diary

## 프로젝트 소개

달력을 기반으로 작성하는 비밀 일기장입니다.
사용자를 판별하여 자신이 작성한 일기만 보여주고, 달력에 일기와 함께 기록된 사진을 보여주어 기록된 사진들을 모아 볼 수 있습니다.

## 개발 환경 및 배포 URL

Front: <ul style="display:flex;">

  <li style="list-style:none; margin-right:5px;"><img src="https://img.shields.io/badge/React-black?style=flat&logo=React"/></li>
  <li style="list-style:none; margin-right:5px;"><img src="https://img.shields.io/badge/CSS-black?style=flat&logo=CSS3"/></li>
  <li style="list-style:none; margin-right:5px;"><img src="https://img.shields.io/badge/firebase-black?style=flat&logo=firebase"/></li>
</ul>

## 구현 기능

<div style="display: flex;">
  <img style="margin-right:10px;" src="https://user-images.githubusercontent.com/80265536/196971251-c8666d11-0136-4363-83f9-5861882e8809.png">
  <img src="https://user-images.githubusercontent.com/80265536/196971573-d81e0f0f-3f6f-4966-8a5a-494867f9bb34.png">
</div>
<br/>
<div>회원가입과 로그인 기능을 구현하여 사용자가 본인의 일기만 볼 수 있도록 구현</div>
<br/>

![일기작성](https://user-images.githubusercontent.com/80265536/196963163-0994a1f7-7e56-4923-8293-01e799188008.gif)
날짜를 선택하여 선택한 날짜에 일기 작성
![일기 보여주기](https://user-images.githubusercontent.com/80265536/196964048-cf2b1e14-2430-4165-a81c-87620b8db018.gif)
일기가 작성된 날짜를 클릭하면 해당 날짜의 일기를 보여줌
![사진 필수 추가](https://user-images.githubusercontent.com/80265536/196964208-0f539156-7e59-4f3a-90c6-157ce430d805.gif)
일기에 사진이 추가되지 않으면 alert
![삭제 기능](https://user-images.githubusercontent.com/80265536/196964320-8d38c6be-477c-437e-b49a-68f145b1b9e6.gif)
일기를 삭제하려면 confirm을 통해 확인이 되어야 삭제

## 구현 일지 (feat. 트러블 슈팅)

|                              주제                               |                                                                                                                                                                                                                                                                                               해결 과정 로그                                                                                                                                                                                                                                                                                               |
| :-------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                           캘린더 구현                           |                                                                                                                      <a href="https://velog.io/@dyorong/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EC%9D%BC%EA%B8%B0%EC%9E%A5%EC%97%90-%EC%B6%94%EA%B0%80%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0">캘린더 구현하기</a>                                                                                                                       |
|                            모달 구현                            |                                                                                                          <a href="https://velog.io/@dyorong/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EC%9D%BC%EA%B8%B0%EC%9E%A5%EC%97%90-%EC%B6%94%EA%B0%80%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EB%8B%AC%EB%A0%A5%EA%B3%BC-%EC%9D%BC%EA%B8%B0%EC%9E%A5-%EC%97%B0%EA%B2%B0">context API 활용해서 모달 구현</a>                                                                                                          |
|                      일기에 사진 추가하기                       |                            <a href="https://velog.io/@dyorong/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EC%9D%BC%EA%B8%B0%EC%9E%A5%EC%97%90-%EC%B6%94%EA%B0%80%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%82%AC%EC%A7%84-%EC%B6%94%EA%B0%80-input-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B3%A0-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0-feat.-fileReader">input 커스텀하고 파이어베이스에 저장 feat. fileReader</a>                            |
| 일기가 기록된 날짜의 사진 보여주고, 클릭하면 일기 전체 보여주기 | <a href="https://velog.io/@dyorong/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EC%9D%BC%EA%B8%B0%EC%9E%A5%EC%97%90-%EC%B6%94%EA%B0%80%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EB%8B%AC%EB%A0%A5%EC%97%90%EC%84%9C-%EC%82%AC%EC%A7%84-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0-%EB%82%A0%EC%A7%9C-%ED%81%B4%EB%A6%AD%ED%95%98%EB%A9%B4-%ED%95%B4%EB%8B%B9-%EB%82%A0%EC%A7%9C%EC%9D%98-%EC%9D%BC%EA%B8%B0-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0">달력에서 사진 보여주기, 날짜 클릭하면 해당 날짜의 일기 보여주기</a> |
