# 프로젝트 소개

당일 배송 수산마켓 서비스 [오늘회](https://www.onul-hoi.com/) 웹사이트 클론 프로젝트

---

### **개발 인원 및 기간**

- 기간 : 20.02.24 - 20.03.06
- 팀 구성 : 프론트엔드 4명, 백엔드 2명 (총 6명)
- Backend-Repo: [we-fish-Backend GitHub Repository 📍](https://github.com/wecode-bootcamp-korea/we-fish-backend)

---

### **사용된 기술**

- **FrontEnd**:

  - JavaScript
  - React
  - Sass(Scss)
  - KaKao API

- **BackEnd**:
  - Python
  - Django Web Framework
  - MySQL
- **Deployment**:
  - AWS EC2, RDS
  - CORS headers

---

### **구현 기능:**

#### **Main Page / Products**:

- React의 params를 사용하여 해당 이미지 클릭시 상세페이지 이동경로 구현
- React Slick, React Carousel 사용하여 Slider 기능 구현
- Backend API 를 Fetch 및 Axios를 사용하여 데이터를 GET한 후 .Map 함수를 사용하여 화면에 구현 하였습니다
- 유동적 Router를 사용하여 params 적용

#### **Detail/Layout**:

- React fragment 및 child 를 사용하여 layout 구현
- 해당 ZIP CODE 에 맞춰 배송가능/불가 지역 기능 구현
- match params을 사용하여 제품 상세페이지의 유동적 Router 구현

#### **Nav/Search 기능**:

- Navbar / Sidebar/ footer layout구성
- GET,POST 사용하여 제품의 검색기능, 고객의 1:1 문의 기능 구현

#### **로그인/회원가입 기능**

- **회원가입**:

  - 이메일 및 패스워드 양식 확인 기능 구현
  - Daum 주소 API 연동
  - 핸드폰 문자 인증 기능 구현
  - 가입약관 전체동의/부분 동의 기능 구현
  - 카카오 소셜 회원가입 기능 구현

- **로그인**:
  - 로그인 상태 유지 기능 구현 (활성화시 토큰 localStorage에 저장, 비활성화시 토큰 sessionStorage에 저장)
  - 카카오 소셜 로그인 API 기능 구현 (카카오 소셜로그인 선택시 간편 회원가입 가능)

---
