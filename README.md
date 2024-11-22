
# 👨🏻‍🍳 소상공인을 위한 식당 무인 운영 앱 👨🏻‍🍳


![image](/uploads/54cca10bd926fba70fa4705d7b7b4755/image.png)


- **배포 URL : https://j11b302.p.ssafy.io**

<br>

# 목차

1. [프로젝트 개요](#item-one)
2. [팀원 소개](#item-two)
3. [기획 배경 및 목표](#item-seven)
4. [서비스 주요 기능](#item-eight)
5. [서비스 아키텍쳐](#item-three)
6. [기술 스택](#item-four)
7. [개발 환경](#item-five)
8. [디렉토리 구조](#item-six)

<br>

<a id="item-one"></a>

# 프로젝트 개요

- **소상공인을 위한 식당 무인 운영 앱**
- 개발 기간: 2024.08.19 ~ 2024.10.11 (7주)
- 삼성 청년 소프트웨어 아카데미(SSAFY) 특화 프로젝트


<br>

<a id="item-two"></a>

# 팀원 소개

<table>
  <tr>
    <th>장정현</th>
    <th>곽예빈</th>
    <th>이경곤</th>
    <th>이수민</th>
    <th>박소정</th>
    <th>이정현</th>
  </tr>
  <tr>
    <td><img src="/uploads/73332892ccfb15155635b8126064f814/image.png" width="120" height="120"></td>
    <td><img src="/uploads/7cd97476b00fc2b8561ef0b81c2692f3/image.png" width="120" height="120"></td>
    <td><img src="/uploads/865c8847d21e605e02d8387ee4051f2a/image.png" width="120" height="120"></td>
    <td><img src="/uploads/7486323ba58f29426659c91093f88ea6/image.png" width="120" height="120"></td>
    <td><img src="/uploads/f32576199ea8275a1677bfcdd45527fc/image.png" width="120" height="120"></td>
    <td><img src="/uploads/edfb7fb5763ceb8122fb5905f7411f20/image.png" width="120" height="120"></td>
  </tr>
</table>


**🐯 장정현 : 팀장, Infra**

**🦁 곽예빈 : Back-end Leader**

**🐼 이경곤 : Back-end**

**🐰 이수민: Front-end Leader**

**🐹 박소정 : Front-end**

**🐻 이정현 : Front-end**

<br>

<a id="item-three"></a>

# 기획 배경 및 목표

### 기획 배경
[손님]    
- 단체 메뉴 주문 시, 상호 간 주문 현황 파악 어려움
- 특별한 날 예약 방문을 했는데 불편한 자리에 앉음
- 대화없이 밥만 먹고 오고 싶은 내향인 비율 증가

[사업자]
- 키오스크 구입 및 대여 비용이 부담스러움
- 높은 인건비 문제
- 피크타임에 예약, 주문, 결제를 수동으로 처리하기 바쁨.

**일행들과 함께 예약부터 주문, 결제까지 할 수 있는 서비스가 필요!**

### 기대효과
**1. 사용자 편의성 개선**         
한 곳에서 실시간 주문 현황 공유와 채팅 서비스를 제공하여 사용자 편의성을 개선하고, 예약자의 부담을 줄여줍니다.

**2. 고객 경험 향상**      
맞춤형 예약을 통해 원하는 시간, 자리에서 바로 식사가 가능합니다.   
효율적인 프로세스로 사업자의 수고는 줄이고, 고객 경험은 향상됩니다. 

**3. 시간 절약**    
핸드폰으로 간편한 결제와  퇴실, 정산이 가능합니다.   
사업자와 고객 모두의 시간을 절약해 줍니다.   

**4. 효율적인 매장 운영**    
매장 현황 파악과 예약 관리를 한 곳에서 제공하여 효율적인 매장 운영이 가능합니다.    

**5. 비용 절감**    
주문 프로세스 간소화를 통해 인건비와 키오스크 대여 비용을 절약합니다.   

**6. 운영 최적화**    
매장 맞춤형 통계를 제공하여 좌석 및 메뉴 최적화를 통한 운영 개선이 가능합니다.   
<br>

<a id="item-seven"></a>

# 서비스 주요 기능

![image](/uploads/8df122a5dd3fb246b5ae315cb64507d5/image.png)

# 서비스 아키텍쳐
![image](/uploads/9fb1d569c173893a32db6b6a7d8e2de5/image.png)
<br>

<a id="item-four"></a>

# 기술 스택


### 💡 Front-end
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### 🔎 Back-end

<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">

![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white) 
<img src="https://img.shields.io/badge/OAuth2-113155?style=for-the-badge">
<img src="https://img.shields.io/badge/QueryDSL-50ABF1?style=for-the-badge"> 
 <img src="https://img.shields.io/badge/Spring Data JPA-F8DC75?style=for-the-badge">
 ![Apache Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=Apache-Kafka&logoColor=white)
### 💾 DB

![mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### 🏗 Infra

![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white)

<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"><img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"> ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white">


<br>

<a id="item-five"></a>

# 서비스 화면

### 메인       
![image](/uploads/abe6432440a0dddc238437c2ac22fc71/image.png){: width="150"}

### 회원가입
![image](/uploads/e5e696286fc0a28a144f3539ae57c6fe/image.png){: width="150"}

### 소비자 페이지
![image](/uploads/6d537789a9b1a4c5e45ed78553581394/image.png){: width="150"}
![image](/uploads/23a4e01daa745417be8c5cc1952eda5d/image.png){: width="150"}

### 소비자 예약
![image](/uploads/51d4864f42a2c12937986dc8ecd7e4db/image.png){: width="150"}
![image](/uploads/f0a043cc228d0f6e0dd06ed50d566626/image.png){: width="150"}
![image](/uploads/e795c27fa933e99b265c4515e32d42b5/image.png){: width="150"}
![image](/uploads/9ff8bfa5287043544ab67fa843754fdd/image.png){: width="150"}

# 개발 환경

### ⚙ Management Tool

- 형상 관리 : [**GitLab**](https://lab.ssafy.com/s11-fintech-finance-sub1/S11P21B302)
- 이슈 관리 : [**Jira**](https://ssafy.atlassian.net/jira/software/c/projects/S11P21B302/boards/7268)
- 디자인 : [**Figma**](https://www.figma.com/design/BrBuWz0hqMhEoj3P7te18M/%ED%85%8C%EC%9D%B4%EB%B8%94-%ED%8E%98%EC%9D%B4?node-id=229-3571&t=0BVg39wPm3Y9LXpj-1)

### 💻 IDE

- Visual Studio Code
- IntelliJ IDEA

### 💡 Front-end

- React `18.3.1`
- Axios `1.7.2`

### 🔎 Back-end

- Spring Boot `3.3.2`
- Java `Open JDK 17 - LTS`
- MySQL `8.0.37`
- Redis `3.0.5`
- MongoDB `7.0.12`

### 🏗 Infra

- Ubuntu `20.04.6 LTS`
- Docker `27.1.1`
- Docker-compose `1.25.0`
- Jenkins `2.470`
- Nginx `1.18.0`
- AWS EC2
- AWS S3

<br>

<a id="item-six"></a>

# 디렉토리 구조

<details>
<summary>Front-end</summary>
<div markdown="1">

```
📦src
 ┣ 📂api
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂ssafyPay
 ┃ ┃ ┃ ┣ 📜account.js
 ┃ ┃ ┃ ┣ 📜card.js
 ┃ ┃ ┃ ┗ 📜user.js
 ┃ ┃ ┣ 📜join.js
 ┃ ┃ ┣ 📜login.js
 ┃ ┃ ┗ 📜payment.js
 ┃ ┣ 📂customer
 ┃ ┃ ┣ 📜chat.js
 ┃ ┃ ┣ 📜guest.js
 ┃ ┃ ┣ 📜reservation.js
 ┃ ┃ ┣ 📜restaurant.js
 ┃ ┃ ┣ 📜socket.js
 ┃ ┃ ┣ 📜user.js
 ┃ ┃ ┗ 📜zzim.js
 ┃ ┗ 📂manager
 ┃ ┃ ┣ 📂alarm
 ┃ ┃ ┃ ┗ 📜alarm.js
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┃ ┗ 📜menu.js
 ┃ ┃ ┣ 📂reservation
 ┃ ┃ ┃ ┗ 📜reservation.js
 ┃ ┃ ┗ 📂restaurant
 ┃ ┃ ┃ ┗ 📜restaurant.js
 ┣ 📂assets
 ┣ 📂component
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┗ 📂WEButton
 ┃ ┃ ┃ ┃ ┣ 📜WEButton.js
 ┃ ┃ ┃ ┃ ┗ 📜WEButton.jsx
 ┃ ┃ ┣ 📂check
 ┃ ┃ ┃ ┣ 📜WECheck.js
 ┃ ┃ ┃ ┗ 📜WECheck.jsx
 ┃ ┃ ┣ 📂dropdown
 ┃ ┃ ┃ ┣ 📜WEDropdown.js
 ┃ ┃ ┃ ┗ 📜WEDropdown.jsx
 ┃ ┃ ┣ 📂loading
 ┃ ┃ ┃ ┗ 📜Loading.js
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📂WEAlertModal
 ┃ ┃ ┃ ┃ ┣ 📜WEAlertModal.js
 ┃ ┃ ┃ ┃ ┗ 📜WEAlertModal.jsx
 ┃ ┃ ┃ ┣ 📂WESettingModal
 ┃ ┃ ┃ ┃ ┣ 📜WESettingModal.js
 ┃ ┃ ┃ ┃ ┗ 📜WESettingModal.jsx
 ┃ ┃ ┃ ┣ 📂WESheetModal
 ┃ ┃ ┃ ┃ ┣ 📜WESheetModal.js
 ┃ ┃ ┃ ┃ ┗ 📜WESheetModal.jsx
 ┃ ┃ ┃ ┣ 📜WEModal.js
 ┃ ┃ ┃ ┗ 📜WEModal.jsx
 ┃ ┃ ┣ 📂tab
 ┃ ┃ ┃ ┗ 📂WETab
 ┃ ┃ ┃ ┃ ┣ 📜WETab.js
 ┃ ┃ ┃ ┃ ┗ 📜WETab.jsx
 ┃ ┃ ┣ 📂textfield
 ┃ ┃ ┃ ┗ 📂WETextfield
 ┃ ┃ ┃ ┃ ┣ 📜WETextfield.js
 ┃ ┃ ┃ ┃ ┗ 📜WETextfield.jsx
 ┃ ┃ ┗ 📂toggle
 ┃ ┃ ┃ ┣ 📜WEToggle.js
 ┃ ┃ ┃ ┗ 📜WEToggle.jsx
 ┃ ┣ 📂customer
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┣ 📜Map.js
 ┃ ┃ ┃ ┣ 📜Map.jsx
 ┃ ┃ ┃ ┣ 📜MapFilterModalBox.js
 ┃ ┃ ┃ ┗ 📜MapFilterModalBox.jsx
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┃ ┣ 📂OrderCartBox
 ┃ ┃ ┃ ┣ 📂OrderSheetBox
 ┃ ┃ ┃ ┃ ┣ 📜OrderSheetBox.js
 ┃ ┃ ┃ ┃ ┗ 📜OrderSheetBox.jsx
 ┃ ┃ ┃ ┗ 📜MenuSelectBox.jsx
 ┃ ┃ ┗ 📂reservation
 ┃ ┃ ┃ ┣ 📂CardCarousel
 ┃ ┃ ┃ ┃ ┣ 📜CardCarousel.js
 ┃ ┃ ┃ ┃ ┗ 📜CardCarousel.jsx
 ┃ ┃ ┃ ┣ 📂ReservationSeatMap
 ┃ ┃ ┃ ┃ ┣ 📜ReservationSeatMap.js
 ┃ ┃ ┃ ┃ ┗ 📜ReservationSeatMap.jsx
 ┃ ┃ ┃ ┣ 📂SeatSelect
 ┃ ┃ ┃ ┃ ┣ 📜SeatSelect.js
 ┃ ┃ ┃ ┃ ┗ 📜SeatSelect.jsx
 ┃ ┃ ┃ ┣ 📂TimeSelectModalBox
 ┃ ┃ ┃ ┃ ┣ 📜TimeSelectModalBox.js
 ┃ ┃ ┃ ┃ ┗ 📜TimeSelectModalBox.jsx
 ┃ ┃ ┃ ┗ 📂WEStep
 ┃ ┃ ┃ ┃ ┣ 📜WEStep.js
 ┃ ┃ ┃ ┃ ┗ 📜WEStep.jsx
 ┃ ┗ 📂manager
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┗ 📂SeatingMap
 ┃ ┃ ┃ ┃ ┣ 📜SeatingMap.js
 ┃ ┃ ┃ ┃ ┗ 📜SeatingMap.jsx
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┣ 📜ManagerMap.jsx
 ┃ ┃ ┃ ┣ 📜MapModal.js
 ┃ ┃ ┃ ┗ 📜MapModal.jsx
 ┃ ┃ ┣ 📂restaurant
 ┃ ┃ ┃ ┗ 📂SeatDecorate
 ┃ ┃ ┃ ┃ ┣ 📂FloorSelector
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FloorSelector.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜FloorSelector.jsx
 ┃ ┃ ┃ ┃ ┣ 📂GridCanvas
 ┃ ┃ ┃ ┃ ┃ ┣ 📜GridCanvas.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜GridCanvas.jsx
 ┃ ┃ ┃ ┃ ┗ 📂ItemPalette
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemPalette.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ItemPalette.jsx
 ┃ ┃ ┣ 📂statistics
 ┃ ┃ ┃ ┣ 📂WEColumn
 ┃ ┃ ┃ ┃ ┣ 📜WEColumn.js
 ┃ ┃ ┃ ┃ ┗ 📜WEColumn.jsx
 ┃ ┃ ┃ ┣ 📂WEDonut
 ┃ ┃ ┃ ┃ ┣ 📜WEDonut.js
 ┃ ┃ ┃ ┃ ┗ 📜WEDonut.jsx
 ┃ ┃ ┃ ┣ 📂WELine
 ┃ ┃ ┃ ┃ ┣ 📜WELine.js
 ┃ ┃ ┃ ┃ ┗ 📜WELine.jsx
 ┃ ┃ ┃ ┗ 📂WEMenu
 ┃ ┃ ┃ ┃ ┣ 📜WEMenu.js
 ┃ ┃ ┃ ┃ ┗ 📜WEMenu.jsx
 ┃ ┃ ┣ 📜WETimeDropdown.js
 ┃ ┃ ┗ 📜WETimeDropdown.jsx
 ┣ 📂firebase
 ┃ ┣ 📜firebase.js
 ┃ ┗ 📜firebaseCloudMessaging.js
 ┣ 📂layout
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📂WEBlackOutLayout
 ┃ ┃ ┃ ┣ 📜WEBlackOutLayout.js
 ┃ ┃ ┃ ┗ 📜WEBlackOutLayout.jsx
 ┃ ┃ ┣ 📂WEFooter
 ┃ ┃ ┃ ┣ 📜WEFooter.js
 ┃ ┃ ┃ ┗ 📜WEFooter.jsx
 ┃ ┃ ┣ 📂WEHeader
 ┃ ┃ ┃ ┣ 📜WEExtraHeader.js
 ┃ ┃ ┃ ┣ 📜WEExtraHeader.jsx
 ┃ ┃ ┃ ┣ 📜WEHeader.js
 ┃ ┃ ┃ ┗ 📜WEHeader.jsx
 ┃ ┃ ┗ 📜Layout.js
 ┣ 📂pages
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂LoginPage
 ┃ ┃ ┃ ┣ 📜LoginPage.js
 ┃ ┃ ┃ ┗ 📜LoginPage.jsx
 ┃ ┃ ┣ 📂LoginRedirectPage
 ┃ ┃ ┃ ┗ 📜LoginRedirectPage.jsx
 ┃ ┃ ┣ 📂PasswordRegistPage
 ┃ ┃ ┃ ┣ 📜PasswordRegistPage.js
 ┃ ┃ ┃ ┗ 📜PasswordRegistPage.jsx
 ┃ ┃ ┗ 📂SignUpPage
 ┃ ┃ ┃ ┣ 📜SignUpPage.js
 ┃ ┃ ┃ ┗ 📜SignUpPage.jsx
 ┃ ┣ 📂customer
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📜Chat.js
 ┃ ┃ ┃ ┗ 📜ChatPage.jsx
 ┃ ┃ ┣ 📂like
 ┃ ┃ ┃ ┗ 📜LikePage.jsx
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂CreateQRPage
 ┃ ┃ ┃ ┃ ┣ 📜CreateQRPage.js
 ┃ ┃ ┃ ┃ ┗ 📜CreateQRPage.jsx
 ┃ ┃ ┃ ┣ 📂GuestEntryPage
 ┃ ┃ ┃ ┃ ┣ 📜GuestEntryPage.js
 ┃ ┃ ┃ ┃ ┗ 📜GuestEntryPage.jsx
 ┃ ┃ ┃ ┗ 📂MainPage
 ┃ ┃ ┃ ┃ ┣ 📜MainPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┣ 📜MapRestaurantPage.js
 ┃ ┃ ┃ ┗ 📜MapRestaurantPage.jsx
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┃ ┣ 📂MenuSelectPage
 ┃ ┃ ┃ ┃ ┣ 📜MenuSelectPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MenuSelectPage.jsx
 ┃ ┃ ┃ ┣ 📂NotExistOrderPage
 ┃ ┃ ┃ ┃ ┣ 📜NotExistOrderPage.js
 ┃ ┃ ┃ ┃ ┗ 📜NotExistOrderPage.jsx
 ┃ ┃ ┃ ┣ 📂OrderAllPaymentPage
 ┃ ┃ ┃ ┃ ┗ 📜OrderAllPaymentPage.jsx
 ┃ ┃ ┃ ┣ 📂OrderCartPage
 ┃ ┃ ┃ ┃ ┣ 📜OrderCartPage.js
 ┃ ┃ ┃ ┃ ┗ 📜OrderCartPage.jsx
 ┃ ┃ ┃ ┣ 📂OrderMainPage
 ┃ ┃ ┃ ┃ ┣ 📜OrderMainPage.js
 ┃ ┃ ┃ ┃ ┗ 📜OrderMainPage.jsx
 ┃ ┃ ┃ ┣ 📂OrderPaymentPage
 ┃ ┃ ┃ ┃ ┣ 📜OrderPaymentPage.js
 ┃ ┃ ┃ ┃ ┗ 📜OrderPaymentPage.jsx
 ┃ ┃ ┃ ┣ 📂OrderSheetPage
 ┃ ┃ ┃ ┃ ┗ 📜OrderSheetPage.jsx
 ┃ ┃ ┃ ┗ 📂OrderSuccessPage
 ┃ ┃ ┃ ┃ ┣ 📜OrderSuccessPage.js
 ┃ ┃ ┃ ┃ ┗ 📜OrderSuccessPage.jsx
 ┃ ┃ ┣ 📂pay
 ┃ ┃ ┃ ┣ 📜FingerprintAuthPage.jsx
 ┃ ┃ ┃ ┗ 📜PaymentPasswordPage.jsx
 ┃ ┃ ┣ 📂reservation
 ┃ ┃ ┃ ┣ 📂history
 ┃ ┃ ┃ ┃ ┣ 📂ReservationDetailPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ReservationDetailPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ReservationDetailPage.jsx
 ┃ ┃ ┃ ┃ ┗ 📂ReservationListPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ReservationListPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ReservationListPage.jsx
 ┃ ┃ ┃ ┗ 📂process
 ┃ ┃ ┃ ┃ ┣ 📂DepositPaymentPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DepositPaymentPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜DepositPaymentPage.jsx
 ┃ ┃ ┃ ┃ ┣ 📂FingerprintAuthPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FingerprintAuthPage.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FingerprintAuthPage.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜registerCredential.js
 ┃ ┃ ┃ ┃ ┣ 📂PasswordAuthPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PasswordAuthPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PasswordAuthPage.jsx
 ┃ ┃ ┃ ┃ ┣ 📂RestaurantDetailPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜RestaurantDetailPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜RestaurantDetailPage.jsx
 ┃ ┃ ┃ ┃ ┣ 📂SeatSelectPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SeatSelectPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SeatSelectPage.jsx
 ┃ ┃ ┃ ┃ ┣ 📂SuccessPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SuccessPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SuccessPage.jsx
 ┃ ┃ ┃ ┃ ┗ 📂TimeSelectPage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜TimeSelectPage.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TimeSelectPage.jsx
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📂CardManagePage
 ┃ ┃ ┃ ┃ ┣ 📜CardManagePage.js
 ┃ ┃ ┃ ┃ ┗ 📜CardManagePage.jsx
 ┃ ┃ ┃ ┣ 📂CardRegistPage
 ┃ ┃ ┃ ┃ ┣ 📜CardRegistPage.js
 ┃ ┃ ┃ ┃ ┗ 📜CardRegistPage.jsx
 ┃ ┃ ┃ ┣ 📂MyInfoPage
 ┃ ┃ ┃ ┃ ┣ 📜MyInfoPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MyInfoPage.jsx
 ┃ ┃ ┃ ┣ 📂MyZzimPage
 ┃ ┃ ┃ ┃ ┣ 📜MyZzimPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MyZzimPage.jsx
 ┃ ┃ ┃ ┗ 📂NicknameEditPage
 ┃ ┃ ┃ ┃ ┣ 📜NicknameEditPage.js
 ┃ ┃ ┃ ┃ ┗ 📜NicknameEditPage.jsx
 ┃ ┗ 📂manager
 ┃ ┃ ┣ 📂alarm
 ┃ ┃ ┃ ┣ 📜alarm.js
 ┃ ┃ ┃ ┗ 📜alarm.jsx
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜MainPage.js
 ┃ ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┃ ┣ 📂MemuRegistPage
 ┃ ┃ ┃ ┃ ┣ 📜MemuRegistPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MemuRegistPage.jsx
 ┃ ┃ ┃ ┣ 📂MenuCategoryPage
 ┃ ┃ ┃ ┃ ┣ 📜MenuCategoryPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MenuCategoryPage.jsx
 ┃ ┃ ┃ ┣ 📂MenuEditPage
 ┃ ┃ ┃ ┃ ┣ 📜MenuEditPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MenuEditPage.jsx
 ┃ ┃ ┃ ┗ 📂MenuViewPage
 ┃ ┃ ┃ ┃ ┣ 📜MenuViewPage.js
 ┃ ┃ ┃ ┃ ┣ 📜MenuViewPage.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Modal.js
 ┃ ┃ ┣ 📂reservation
 ┃ ┃ ┃ ┣ 📂AdminDetailPage
 ┃ ┃ ┃ ┃ ┣ 📜AdminDetailPage.js
 ┃ ┃ ┃ ┃ ┗ 📜AdminDetailPage.jsx
 ┃ ┃ ┃ ┣ 📂AdminPage
 ┃ ┃ ┃ ┃ ┣ 📜AdminPage.js
 ┃ ┃ ┃ ┃ ┗ 📜AdminPage.jsx
 ┃ ┃ ┃ ┣ 📂ManagerReservationDetailPage
 ┃ ┃ ┃ ┃ ┣ 📜ManagerReservationDetailPage.js
 ┃ ┃ ┃ ┃ ┗ 📜ManagerReservationDetailPage.jsx
 ┃ ┃ ┃ ┗ 📜AdminDatePage.jsx
 ┃ ┃ ┣ 📂restaurant
 ┃ ┃ ┃ ┣ 📂ManagerRegistPage
 ┃ ┃ ┃ ┃ ┣ 📜ManagerRegistPage.js
 ┃ ┃ ┃ ┃ ┗ 📜ManagerRegistPage.jsx
 ┃ ┃ ┃ ┣ 📂RestaurantManagePage
 ┃ ┃ ┃ ┃ ┣ 📜RestaurantManagePage.js
 ┃ ┃ ┃ ┃ ┗ 📜RestaurantManagePage.jsx
 ┃ ┃ ┃ ┣ 📂SeatDecoratePage
 ┃ ┃ ┃ ┃ ┣ 📜SeatDecoratePage.jsx
 ┃ ┃ ┃ ┃ ┗ 📜SeatDecoreatePage.js
 ┃ ┃ ┃ ┣ 📜ManagerViewPage.jsx
 ┃ ┃ ┃ ┗ 📜RestaurantViewPage.jsx
 ┃ ┃ ┣ 📂statistics
 ┃ ┃ ┃ ┣ 📂PeakTimePage
 ┃ ┃ ┃ ┃ ┣ 📜PeakTimePage.js
 ┃ ┃ ┃ ┃ ┗ 📜PeakTimePage.jsx
 ┃ ┃ ┃ ┣ 📂SalesPage
 ┃ ┃ ┃ ┃ ┣ 📜SalesPage.js
 ┃ ┃ ┃ ┃ ┗ 📜SalesPage.jsx
 ┃ ┃ ┃ ┣ 📂StatisticsPage
 ┃ ┃ ┃ ┃ ┣ 📜StatisticsPage.js
 ┃ ┃ ┃ ┃ ┗ 📜StatisticsPage.jsx
 ┃ ┃ ┃ ┗ 📜MenuPage.jsx
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📂MyInfoPage
 ┃ ┃ ┃ ┃ ┣ 📜MyInfoPage.js
 ┃ ┃ ┃ ┃ ┗ 📜MyInfoPage.jsx
 ┃ ┃ ┃ ┣ 📂NicknameEditPage
 ┃ ┃ ┃ ┃ ┣ 📜NicknameEditPage.js
 ┃ ┃ ┃ ┃ ┗ 📜NicknameEditPage.jsx
 ┃ ┃ ┃ ┣ 📜AuthOCRPage.jsx
 ┃ ┃ ┃ ┣ 📜AuthPage.jsx
 ┃ ┃ ┃ ┗ 📜OCRCheckPage.jsx
 ┣ 📂route
 ┃ ┗ 📜routes.js
 ┣ 📂stores
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜useAnimationStore.js
 ┃ ┃ ┣ 📜useCommonStore.js
 ┃ ┃ ┣ 📜useDropdownStore.js
 ┃ ┃ ┣ 📜useFooterStore.js
 ┃ ┃ ┣ 📜useHeaderStore.js
 ┃ ┃ ┣ 📜useModalStore.js
 ┃ ┃ ┗ 📜useTextfieldStore.js
 ┃ ┣ 📂customer
 ┃ ┃ ┣ 📜useAuthStore.js
 ┃ ┃ ┣ 📜useCardStore.js
 ┃ ┃ ┣ 📜useCartStore.js
 ┃ ┃ ┣ 📜useChatStore.js
 ┃ ┃ ┣ 📜useMyInfoStore.js
 ┃ ┃ ┣ 📜useOrderStore.js
 ┃ ┃ ┣ 📜useReservationStore.js
 ┃ ┃ ┗ 📜useRestaurantStore.js
 ┃ ┣ 📂manager
 ┃ ┃ ┣ 📜useGridCanvasStore.js
 ┃ ┃ ┗ 📜useMyRestaurantStore.js
 ┃ ┗ 📂map
 ┃ ┃ ┣ 📜useMapFilterStore.js
 ┃ ┃ ┗ 📜useMapStore.js
 ┣ 📂style
 ┃ ┗ 📂common
 ┃ ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┣ 📂manager
 ┃ ┃ ┗ 📜restaurantRegistValidation.js
 ┃ ┣ 📜alert.js
 ┃ ┣ 📜decode-token.js
 ┃ ┣ 📜http-client.js
 ┃ ┗ 📜useCountDownTimer.js
 ┣ 📜App.js
 ┣ 📜Main.jsx
 ┣ 📜config.js
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┣ 📜service-worker.js
 ┗ 📜serviceWorkerRegistration.js
 ```

</div>
</details>

<details>
<summary>Back-end</summary>
<div markdown="1">


```
추후 공개
```
</div>
</details>

<br>

<a id="item-six"></a>

