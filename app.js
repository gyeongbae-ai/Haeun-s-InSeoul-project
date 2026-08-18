const schools = [
  {
    id: "cau", short: "중앙대", name: "중앙대학교", tone: "#ef9fc4", focus: "탐구형인재 · 융합형인재",
    summary: "탐구형인재는 1단계 서류 100%(3.5배수), 2단계 1단계 70% + 면접 30%. 융합형인재는 의학부 외 모집단위에서 서류 100% 일괄선발입니다.",
    dates: ["원서 9.8 10:00 ~ 9.11 18:00", "탐구형 1단계 11.26 14:00", "면접 12.5 ~ 12.6", "최초합격 12.18 14:00"],
    links: [
      ["2027 모집요강", "https://admission.cau.ac.kr/detail.do?board_seq=3239&menuurl=bmyV1ovIAzYtqDXLjUSVtw%3D%3D&pageNo=1"],
      ["2026 경쟁률", "https://admission.cau.ac.kr/submenu.do?menuurl=oG08risXFa2m%2BdEZZm03Xw%3D%3D"],
      ["전년도 입시결과", "https://admission.cau.ac.kr/submenu.do?menuurl=%2Bwb2%2F2YpjUGJjmg2NfyS6Q%3D%3D"]
    ]
  },
  {
    id: "konkuk", short: "건국대", name: "건국대학교", tone: "#72c9a5", focus: "KU자기추천 · KU논술우수자",
    summary: "KU자기추천은 서류 100%(3배수) 후 1단계 70% + 면접 30%, 수능최저 없음. KU논술우수자는 논술 100%이며 모집단위별 수능최저를 확인해야 합니다.",
    dates: ["원서 9.7 ~ 9.11", "논술 11.21", "자기추천 면접 12.5 ~ 12.6", "최초합격 12.18까지"],
    links: [
      ["2027 모집요강 PDF", "https://enter.konkuk.ac.kr/file/pdfDown.pdf?ofn=2027%ED%95%99%EB%85%84%EB%8F%84+%EA%B1%B4%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90+%EC%88%98%EC%8B%9C%EB%AA%A8%EC%A7%91%EC%9A%94%EA%B0%95%28%EB%8B%A8%EB%A9%B4%29_%EC%B5%9C%EC%A2%85.pdf&sfn=20260625041927583_3601.pdf"],
      ["입학처", "https://enter.konkuk.ac.kr/"],
      ["2026 결과·컷", "https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052"]
    ]
  },
  {
    id: "ghent", short: "겐트대", name: "겐트대학교 글로벌캠퍼스", tone: "#f0cc4e", focus: "2027년 3월학기 · 일반전형 · 학교장추천전형", wide: true,
    summary: "인천 송도에 있는 벨기에 겐트대학교 글로벌캠퍼스입니다. 선착순 심사 방식으로 원서를 받은 뒤 제출일 기준 약 4~6주 안에 결과를 이메일로 개별 안내합니다.",
    dates: ["원서접수 2026.9.1 시작", "우선지원 2026.11.30 마감", "온라인 입학시험 2026.12.31까지 응시 가능", "최종지원 2027.1.31 마감(조기마감 가능)", "합격 결과 원서 제출 후 4~6주 내 개별 통보"],
    requirements: [
      { title:"학교장추천 필수서류", items:["증명사진 JPG·여권사본", "영문 졸업(예정) 또는 재학증명서", "영문 내신성적표·국문 생활기록부", "영문 본교 양식 학교장추천서"] },
      { title:"일반전형 필수서류", items:["증명사진 JPG·여권사본", "영문 졸업증명서·영문 성적증명서", "입학시험 14점 이상 또는 SAT 수학 720·ACT 수학 32 중 하나", "공인영어성적: TOEFL iBT 72·IELTS 6.0·IB 5·SAT 영어 500·ACT 영어 21·수능 영어 2등급 중 하나"] },
      { title:"선택·유의사항", items:["일반전형: 영문 자기소개서와 영문 공증 활동자료 선택 제출", "입학시험은 수학·화학 20문항, 120분, 오픈북·계산기 사용 가능", "모든 업로드 파일은 10MB 이하, 사진 외 서류는 PDF", "졸업예정자는 등록기간 내 최종 졸업·성적증명서 추가 제출"] }
    ],
    links: [
      ["모집요강", "https://admissions.ghent.ac.kr/user/contents.php?sq=6"],
      ["온라인 지원", "https://admissions.ghent.ac.kr/user/contents.php?sq=7"],
      ["서식·자료실", "https://admissions.ghent.ac.kr/user/board/list.php?board_code=pds_kr"],
      ["입학 FAQ", "https://admissions.ghent.ac.kr/user/board/list.php?board_code=faq_kr&page=1&srchCate=A&srchKey=AB"]
    ]
  },
  {
    id: "seoultech", short: "서울과기대", name: "서울과학기술대학교", tone: "#70afe9", focus: "학교생활우수자 · 창의융합인재 · 논술",
    summary: "학생부종합은 1단계 서류 100% 후 2단계 면접을 실시합니다. 논술전형은 논술 70% + 교과 30%로 선발하며 모집단위별 최저를 확인합니다.",
    dates: ["원서 9.7 09:00 ~ 9.11 18:00", "1단계 11.20 14:00", "논술 11.23 10:00", "면접 11.28 ~ 11.29", "최초합격 12.18 14:00"],
    links: [["입학처", "https://admission.seoultech.ac.kr/"], ["2027 모집요강", "https://ipsi.theschools.co.kr/cne_s/4/947.pdf"], ["입시결과", "https://admission.seoultech.ac.kr/"]]
  },
  {
    id: "kookmin", short: "국민대", name: "국민대학교", tone: "#f3a15a", focus: "국민프런티어 · 교과우수자",
    summary: "국민프런티어는 1단계 서류 100%(3배수), 2단계 1단계 70% + 면접 30%로 선발하며 수능최저가 없습니다. 2027학년도부터 임산생명공학과는 바이오소재융합공학과로 명칭이 바뀝니다.",
    dates: ["원서 9.7 10:00 ~ 9.11 18:00", "1단계 11.17 14:00", "자연계 면접 11.21", "인문·예체능 면접 11.22", "최초합격 12.18 17:00"],
    links: [
      ["2027 모집요강", "https://admission.kookmin.ac.kr/nonschedule/notice.php?ctype=view&no=1070&page=1"],
      ["2026 경쟁률", "https://admission.kookmin.ac.kr/nonschedule/previousResult.php"],
      ["전년도 입시결과", "https://cs.u-is.co.kr/kmu/intro.htm"]
    ]
  },
  {
    id: "ssu", short: "숭실대", name: "숭실대학교", tone: "#ad8de0", focus: "SSU미래인재(면접형) · 논술우수자",
    summary: "미래인재 면접형은 서류 100%(3~3.5배수) 후 1단계 50% + 면접 50%. 논술우수자는 논술 80% + 학생부교과 20%입니다.",
    dates: ["원서 9.8 10:00 ~ 9.11 18:00", "논술 11.21", "1단계 11.23", "면접 11.27 ~ 11.28", "최초합격 12.18 10:00"],
    links: [["2027 모집요강", "https://admission.ssu.ac.kr/mojip/req.asp?flag=1&page_no=1_2_2"], ["모집요강 PDF", "https://admission.ssu.ac.kr/upload/SSU%281%29_260617194254.pdf"], ["입시통계", "https://admission.ssu.ac.kr/"]]
  },
  {
    id: "mju", short: "명지대", name: "명지대학교", tone: "#57bdb5", focus: "명지인재면접 · 교과면접",
    summary: "명지인재면접은 서류 100%(4배수) 후 1단계 70% + 면접 30%. 교과면접은 교과 100%(5배수) 후 1단계 70% + 면접 30%입니다. 전 전형 수능최저 없음.",
    dates: ["원서 9.7 10:00 ~ 9.11 17:00", "교과면접 10.31", "명지인재 면접 11.28 ~ 11.29", "최초합격 12.9 15:00"],
    links: [["2027 모집요강", "https://iphak.mju.ac.kr/pages/?b=B_1_1&bn=30136&m=read&p=9"], ["입학처", "https://iphak.mju.ac.kr/"], ["입시결과", "https://iphak.mju.ac.kr/pages/?b=B_1_1"]]
  },
  {
    id: "hansung", short: "한성대", name: "한성대학교", tone: "#ef7d86", focus: "한성인재 · 지역균형",
    summary: "한성인재는 학생부 전 영역 서류 100%로 선발하며 면접은 없습니다. 지역균형은 학교장 추천을 받아 교과 100%로 선발하고 수능최저가 없습니다.",
    dates: ["원서 9.7 ~ 9.11", "한성인재 면접 없음", "수시 합격자 발표 12.18까지"],
    links: [["수시 모집요강", "https://enter.hansung.ac.kr/?board=dataroom%25&boardId=nonscheduled%2Fdownload%25&m1=menu00%25&m2=sub02%25"], ["2026 경쟁률", "https://enter.hansung.ac.kr/?board=dataroom%25&boardId=nonscheduled%2Fdownload%25&m1=menu00%25&m2=sub02%25&tabName=competition%25"], ["입시결과", "https://enter.hansung.ac.kr/?board=entrance_data%2Fresult%25&m1=menu08%25&m2=sub02%25"]]
  }
];

const interviewGuide = [
  ["01", "생기부 프린트물 준비", "전체 페이지를 출력하고 포스트잇·노랑·분홍·민트 형광팬을 준비합니다."],
  ["02", "개념 100개씩 뽑기", "생기부에서 알아야 할 단어와 개념을 100개 → 200개 → 300개로, 매주 빈 Word 파일에 100개씩 적습니다."],
  ["03", "뜻과 정의 정리", "앞에서 뽑은 단어와 개념의 뜻·정의를 찾아 매주 100개씩 정리합니다."],
  ["04", "3가지 역량으로 분석", "학업·진로·공동체역량을 서로 다른 형광팬으로 표시합니다."],
  ["05", "활동별 파일 만들기", "표시한 수행평가·활동·발표 내용을 다시 떠올리고, 프로젝트별 파일로 정리해 출력합니다."],
  ["06", "예상 질문 하루 10개", "생기부 근거 질문과 꼬리 질문을 하루 10개씩 만들고 소리 내어 답변합니다."],
  ["07", "주 1회 모의면접", "20분 분량으로 요일을 정해 반복합니다. 추천: 매주 일요일 오후 7시."],
  ["08", "녹화본 셀프 피드백", "1시간 동안 시선·말의 속도·근거·결론·불필요한 습관을 확인하고 수정합니다."]
];

const essaySteps = [
  ["01", "건국대 2022~2026 기출 완주", "시간을 재고 먼저 혼자 푼 뒤 해설과 비교합니다."],
  ["02", "오답 원인 분류", "개념 부족·조건 해석·계산 실수·시간 부족으로 나누고 개념과 풀이 스킬을 보완합니다."],
  ["03", "상위권 대학 기출 확장", "연세대·성균관대·한양대 기출로 낯선 문제 대응력을 키웁니다."],
  ["04", "수능 수학과 연결", "모의고사 오답과 논술 풀이를 연결해 수학 개념·표현·계산 스킬을 함께 올립니다."]
];

const essayLinks = [
  ["2026 출제범위·경향 정리", "https://blog.naver.com/shamec1/223893428593"],
  ["건국대 공식 논술 자료실", "https://admission.konkuk.ac.kr/admission/37897/subview.do"],
  ["2022 논술가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExNzcyNzYlMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2023 모의논술·가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExODAwMzklMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2024 모의논술·가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExODMyNjMlMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2025 모의논술·가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExODgwNjglMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2026 선행학습 영향평가", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExOTQ5ODYlMkZhcnRjbFZpZXcuZG8lM0Y%3D"]
];

const baseEvents = [
  ["2026-09-01", "ghent", "겐트대 2027년 3월학기 원서접수 시작", "일반전형·학교장추천전형 · 서류가 준비되는 대로 조기 제출 권장"],
  ["2026-09-07", "konkuk", "건국대 원서접수 시작", "9.11까지 · KU자기추천 / KU논술우수자 지원 정보 최종 확인"],
  ["2026-09-07", "seoultech", "서울과기대 원서접수 시작", "09:00 시작 · 9.11 18:00 마감"],
  ["2026-09-07", "mju", "명지대 원서접수 시작", "10:00 시작 · 9.11 17:00 마감"],
  ["2026-09-07", "hansung", "한성대 원서접수 기간", "9.7~9.11 · 지원 전 입학처 최종 모집요강 확인"],
  ["2026-09-07", "kookmin", "국민대 원서접수 시작", "10:00 시작 · 9.11 18:00 마감 · 국민프런티어 지원 정보 최종 확인"],
  ["2026-09-08", "cau", "중앙대 원서접수 시작", "10:00 시작 · 9.11 18:00 마감"],
  ["2026-09-08", "ssu", "숭실대 원서접수 시작", "10:00 시작 · 9.11 18:00 마감"],
  ["2026-09-14", "mju", "명지대 서류제출 마감", "마감일 우체국 접수분까지 인정"],
  ["2026-09-14", "ssu", "숭실대 서류 업로드 마감", "17:00 마감"],
  ["2026-09-15", "cau", "중앙대 서류제출 마감", "16:00 온라인 업로드 마감"],
  ["2026-09-17", "seoultech", "서울과기대 서류제출 마감", "17:00 · 등기우편 소인 유효"],
  ["2026-10-31", "mju", "명지대 교과면접", "인문캠퍼스(서울) 진행"],
  ["2026-11-20", "seoultech", "서울과기대 1단계 발표", "14:00 · 학생부종합 전체"],
  ["2026-11-17", "kookmin", "국민대 국민프런티어 1단계 발표", "14:00 예정 · 2단계 고사장 안내"],
  ["2026-11-21", "konkuk", "건국대 KU논술우수자 논술", "고사시간은 모집단위별 수험생 안내 확인"],
  ["2026-11-21", "kookmin", "국민대 국민프런티어 자연계 면접", "지정시간 · 지능형ICT·융합바이오 등 자연계 모집단위"],
  ["2026-11-21", "ssu", "숭실대 논술우수자 논술", "수험생 유의사항 11.17 공개"],
  ["2026-11-22", "kookmin", "국민대 국민프런티어 인문·예체능 면접", "경영대학 자연계 모집단위 포함 · 지정시간"],
  ["2026-11-23", "seoultech", "서울과기대 논술고사", "10:00 시작 예정"],
  ["2026-11-23", "ssu", "숭실대 면접형 1단계 발표", "SSU미래인재·기회균형·SW우수자"],
  ["2026-11-26", "cau", "중앙대 탐구형 1단계 발표", "14:00"],
  ["2026-11-27", "ssu", "숭실대 미래인재 면접", "면접형 · 모집단위별 안내 확인"],
  ["2026-11-28", "seoultech", "서울과기대 학생부종합 면접", "학교생활우수자·창의융합인재·특수교육대상자"],
  ["2026-11-28", "mju", "명지대 명지인재면접", "자연캠퍼스 모집단위"],
  ["2026-11-29", "seoultech", "서울과기대 기회균형 면접", "기회균형 전체(특수교육대상자 제외)"],
  ["2026-11-29", "mju", "명지대 명지인재면접", "인문캠퍼스 모집단위"],
  ["2026-11-30", "ghent", "겐트대 우선지원 마감", "2027년 3월학기 우선지원 마감일"],
  ["2026-12-05", "cau", "중앙대 탐구형·성장형 면접", "12.5~12.6 · 전형/모집단위별 날짜 확인"],
  ["2026-12-05", "konkuk", "건국대 KU자기추천 면접 1일차", "이과·공과·일부 사회과학·사범계열 등"],
  ["2026-12-06", "konkuk", "건국대 KU자기추천 면접 2일차", "문과·건축·경영·일부 사회과학·수의·KU자유전공 등"],
  ["2026-12-09", "mju", "명지대 최초합격 발표", "15:00"],
  ["2026-12-18", "cau", "중앙대 최초합격 발표", "14:00"],
  ["2026-12-18", "seoultech", "서울과기대 최초합격 발표", "14:00 · 실기 외 전체"],
  ["2026-12-18", "kookmin", "국민대 최초합격 발표", "17:00 예정"],
  ["2026-12-18", "ssu", "숭실대 최초합격 발표", "10:00"],
  ["2026-12-18", "hansung", "한성대 수시 합격 발표 기한", "한성인재는 면접 없이 서류 100%"],
  ["2026-12-21", "personal", "수시 최초합격자 문서등록", "대학별 등록 마감시각 확인 · 12.23까지"],
  ["2026-12-31", "ghent", "겐트대 온라인 입학시험 응시 기한", "수학·화학 20문항 중 14점 이상 · 현행 시험제도 변경 가능성 확인"],
  ["2027-01-31", "ghent", "겐트대 2027년 3월학기 최종지원 마감", "조기마감 가능 · 원서 제출 후 결과 통보까지 약 4~6주"]
];

const portals = [
  ["대입정보포털", "대학·학과·전형을 검색하는 시작점", "https://www.adiga.kr/man/inf/mainView.do?menuId=PCMANINF1000", "대학어디가 열기"],
  ["학생부 성적 HTML", "학생부 성적을 입력하고 HTML 파일로 내려받기", "https://www.adiga.kr/mpg/sga/ssa/schoolScoreMngeView.do?menuId=PCMPGSGA1001", "성적 관리 열기"],
  ["학생부 입력 가이드", "HTML 다운로드 전 입력 방법부터 확인", "https://www.adiga.kr/sco/sca/schScoAnlsPopup.do?guideType=student", "가이드 보기"],
  ["50% · 70% 컷", "대학별 전형 결과와 합격선 확인", "https://www.adiga.kr/uct/acd/ade/criteriaAndResultView.do?menuId=PCUCTACD2000", "컷 확인하기"]
];

const cutoffRows = [
  { school:"중앙대", tone:"#ef9fc4", type:"탐구형인재", major:"화학공학과", prevSeats:"10", currentSeats:"8", competition:"29.50", waitlist:"17", cut50:"5.68", cut70:"5.86" },
  { school:"중앙대", tone:"#ef9fc4", type:"탐구형인재", major:"융합공학부", prevSeats:"12", currentSeats:"18", competition:"29.17", waitlist:"20", cut50:"3.80", cut70:"5.50" },
  { school:"건국대", tone:"#72c9a5", type:"KU논술우수자", major:"화공·생명·에너지공학부", prevSeats:"19", currentSeats:"3", competition:"21.63", waitlist:"21", cut50:"2.04", cut70:"2.12" },
  { school:"건국대", tone:"#72c9a5", type:"KU논술우수자", major:"첨단바이오공학부", prevSeats:"18", currentSeats:"3", competition:"23.11", waitlist:"2", cut50:"2.17", cut70:"3.75" },
  { school:"건국대", tone:"#72c9a5", type:"KU논술우수자", major:"생물공학과", prevSeats:"15", currentSeats:"7", competition:"18.60", waitlist:"4", cut50:"1.96", cut70:"2.08" },
  { school:"건국대", tone:"#72c9a5", type:"KU논술우수자", major:"KU자유전공학부", prevSeats:"183", currentSeats:"65", competition:"32.75", waitlist:"91", cut50:"2.70", cut70:"3.27" },
  { school:"국민대", tone:"#f3a15a", type:"국민프런티어", major:"지능형ICT융합전공", prevSeats:"26", currentSeats:"26", competition:"10.23", waitlist:"24", cut50:"2.77", cut70:"2.83" },
  { school:"국민대", tone:"#f3a15a", type:"국민프런티어", major:"융합바이오공학과", prevSeats:"10", currentSeats:"10", competition:"36.10", waitlist:"3", cut50:"2.51", cut70:"2.59" },
  { school:"국민대", tone:"#f3a15a", type:"국민프런티어", major:"임산생명공학과", currentMajor:"바이오소재융합공학과", prevSeats:"11", currentSeats:"15", competition:"23.82", waitlist:"3", cut50:"2.59", cut70:"2.66" },
  { school:"서울과기대", tone:"#70afe9", type:"기회균형(기회균등)", major:"신소재공학과", prevSeats:"4", currentSeats:"4", competition:"9.00", waitlist:"1", cut50:"4.74", cut70:"4.74" },
  { school:"서울과기대", tone:"#70afe9", type:"창의융합인재", major:"바이오메디컬학과", prevSeats:"14", currentSeats:"12", competition:"45.90", waitlist:"4", cut50:"6.72", cut70:"6.77" },
  { school:"서울과기대", tone:"#70afe9", type:"학교생활우수자", major:"스마트ICT융합공학과", currentMajor:"ICT융합공학과", prevSeats:"14", currentSeats:"14", competition:"26.60", waitlist:"5", cut50:"2.58", cut70:"2.61" },
  { school:"서울과기대", tone:"#70afe9", type:"학교생활우수자", major:"화공생명공학과", prevSeats:"16", currentSeats:"17", competition:"45.60", waitlist:"19", cut50:"2.65", cut70:"4.40" }
];

const scoreSubjects = ["국어", "수학", "영어", "탐구1", "탐구2"];
const cloudSyncedKeys = new Set(["haeun-events-v2", "haeun-tasks-v2", "haeun-scores-v2", "haeun-study-records-v1"]);
const store = { get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }, set(key, value) { localStorage.setItem(key, JSON.stringify(value)); if (cloudSyncedKeys.has(key)) scheduleCloudSave(); } };
let activeSchool = "all";
let customEvents = store.get("haeun-events-v2", []);
let calendarCursor = new Date(2026, 8, 1);
let tasks = store.get("haeun-tasks-v2", [
  { id: crypto.randomUUID(), area: "면접", title: "생기부 프린트하고 형광팬 3색 준비", due: "2026-08-23", done: false },
  { id: crypto.randomUUID(), area: "면접", title: "생기부 핵심 단어·개념 100개 작성", due: "2026-08-30", done: false },
  { id: crypto.randomUUID(), area: "논술", title: "건국대 2022 기출 1회 시간 재고 풀기", due: "2026-08-30", done: false },
  { id: crypto.randomUUID(), area: "수능", title: "국어·수학 오답 30분씩 복습", due: "", done: false }
]);
let studyRecords = store.get("haeun-study-records-v1", {});
let studyDate = dateKey(new Date());
const cloudConfig = window.HAEUN_SUPABASE_CONFIG;
let cloudCode = localStorage.getItem("haeun-sync-code-v1") || "";
let cloudConnected = false;
let cloudSaveTimer;
let cloudPollTimer;

function school(id) { return schools.find((item) => item.id === id) || { name: "개인", short: "개인", tone: "#d9b8ef" }; }
function formatDate(value) { return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", weekday: "short" }).format(new Date(`${value}T00:00:00`)); }
function dateKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[char]); }
function cloudHeaders(code = cloudCode) { return { apikey:cloudConfig.key, Authorization:`Bearer ${cloudConfig.key}`, "Content-Type":"application/json", "x-haeun-sync-key":code }; }
function cloudPayload() { return { version:1, events:store.get("haeun-events-v2", customEvents), tasks:store.get("haeun-tasks-v2", tasks), scores:store.get("haeun-scores-v2", {}), studyRecords:store.get("haeun-study-records-v1", studyRecords) }; }
function setCloudStatus(message, state = "idle") { const status = document.querySelector("#cloudSyncStatus"); const dot = document.querySelector("#cloudDot"); if (status) status.textContent = message; if (dot) dot.dataset.state = state; }
function showCloudConnected(connected) { document.querySelector("#cloudSyncForm").hidden = connected; document.querySelector("#cloudSyncActions").hidden = !connected; }
async function cloudFetch(code = cloudCode) { const response = await fetch(`${cloudConfig.url}/rest/v1/haeun_state?id=eq.primary&select=payload,updated_at`, { headers:cloudHeaders(code), cache:"no-store" }); if (!response.ok) throw new Error("동기화 서버에서 기록을 읽지 못했습니다."); return response.json(); }
function applyCloudPayload(payload) {
  if (payload.events) { customEvents = payload.events; localStorage.setItem("haeun-events-v2", JSON.stringify(customEvents)); }
  if (payload.tasks) { tasks = payload.tasks; localStorage.setItem("haeun-tasks-v2", JSON.stringify(tasks)); }
  if (payload.scores) localStorage.setItem("haeun-scores-v2", JSON.stringify(payload.scores));
  if (payload.studyRecords) { studyRecords = payload.studyRecords; localStorage.setItem("haeun-study-records-v1", JSON.stringify(studyRecords)); }
  renderScores(); renderTimeline(); renderTasks(); renderStudyPlanner();
}
async function pushCloudState() {
  if (!cloudConnected) return;
  setCloudStatus("변경 내용을 저장하는 중입니다.", "syncing");
  const response = await fetch(`${cloudConfig.url}/rest/v1/haeun_state?on_conflict=id`, { method:"POST", headers:{ ...cloudHeaders(), Prefer:"resolution=merge-duplicates,return=minimal" }, body:JSON.stringify({ id:"primary", payload:cloudPayload(), updated_at:new Date().toISOString() }) });
  if (!response.ok) throw new Error("동기화 코드가 맞지 않거나 서버 저장에 실패했습니다.");
  setCloudStatus("Supabase에 저장됨 · 모든 기기에서 같은 기록을 사용합니다.", "connected");
}
function scheduleCloudSave() { if (!cloudConnected) return; clearTimeout(cloudSaveTimer); cloudSaveTimer = setTimeout(() => { cloudSaveTimer = undefined; pushCloudState().catch((error) => setCloudStatus(error.message, "error")); }, 700); }
async function pullCloudState({ quiet = false } = {}) { const rows = await cloudFetch(); if (rows[0]?.payload) applyCloudPayload(rows[0].payload); if (!quiet) setCloudStatus("최신 기록을 불러왔습니다.", "connected"); }
async function connectCloud(code) {
  if (!cloudConfig?.url || !cloudConfig?.key) throw new Error("Supabase 연결 설정을 찾지 못했습니다.");
  setCloudStatus("동기화 코드를 확인하는 중입니다.", "syncing");
  const rows = await cloudFetch(code);
  cloudCode = code;
  cloudConnected = true;
  if (rows[0]?.payload) applyCloudPayload(rows[0].payload); else await pushCloudState();
  localStorage.setItem("haeun-sync-code-v1", cloudCode);
  document.querySelector("#cloudSyncCode").value = "";
  showCloudConnected(true);
  setCloudStatus("Supabase 연결 완료 · 모든 기기에서 같은 기록을 사용합니다.", "connected");
  clearInterval(cloudPollTimer); cloudPollTimer = setInterval(() => { if (!cloudSaveTimer) pullCloudState({ quiet:true }).catch(() => {}); }, 30000);
}
function disconnectCloud() { cloudConnected = false; cloudCode = ""; clearTimeout(cloudSaveTimer); clearInterval(cloudPollTimer); localStorage.removeItem("haeun-sync-code-v1"); showCloudConnected(false); setCloudStatus("연결이 해제됐습니다. 이 기기의 기록은 그대로 남아 있습니다."); }
function initCloudSync() { showCloudConnected(false); if (cloudCode) connectCloud(cloudCode).catch((error) => { localStorage.removeItem("haeun-sync-code-v1"); cloudCode = ""; setCloudStatus(error.message, "error"); }); }
function initCursorBubble() {
  const bubble = document.querySelector("#cursorBubble");
  if (!bubble || !matchMedia("(pointer: fine)").matches) return;
  let frame;
  document.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { bubble.style.setProperty("--cursor-x", `${event.clientX}px`); bubble.style.setProperty("--cursor-y", `${event.clientY}px`); bubble.classList.add("visible"); bubble.classList.toggle("interactive", Boolean(event.target.closest?.("a,button,input,select,textarea,label"))); });
  });
  document.addEventListener("pointerdown", () => { bubble.classList.add("burst"); setTimeout(() => bubble.classList.remove("burst"), 220); });
  document.addEventListener("mouseout", (event) => { if (!event.relatedTarget) bubble.classList.remove("visible"); });
}
function ddayLabel(date) { const diff = Math.ceil((new Date(`${date}T00:00:00+09:00`) - new Date()) / 86400000); return diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`; }
function renderDday() { document.querySelector("#ghentDdayCount").textContent = ddayLabel("2026-09-01"); document.querySelector("#universityDdayCount").textContent = ddayLabel("2026-09-07"); }
function renderInterview() { document.querySelector("#interviewGuide").innerHTML = interviewGuide.map(([n,t,d]) => `<article class="guide-card"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join(""); }
function renderEssay() { document.querySelector("#essaySteps").innerHTML = essaySteps.map(([n,t,d]) => `<article class="essay-step"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join(""); document.querySelector("#essayLinks").innerHTML = essayLinks.map(([l,h]) => `<a href="${h}" target="_blank" rel="noreferrer">${l}<span>↗</span></a>`).join(""); }
function renderScores() { const saved = store.get("haeun-scores-v2", {}); document.querySelector("#scoreGrid").innerHTML = scoreSubjects.map((s) => `<label class="score-card"><span>${s}</span><select data-score="${s}">${[1,2,3,4,5].map((g) => `<option value="${g}" ${String(g) === (saved[s] || "2") ? "selected" : ""}>${g}등급</option>`).join("")}</select></label>`).join(""); }
function renderSchools() { document.querySelector("#schoolGrid").innerHTML = schools.map((s) => `<article class="school-card ${s.wide ? "school-card-wide" : ""}" style="--tone:${s.tone}"><div class="school-head"><div><span class="school-kicker">${s.short}</span><h3>${s.name}</h3><p>${s.focus}</p></div><span class="dot"></span></div><p class="school-summary">${s.summary}</p><ul>${s.dates.map((d) => `<li>${d}</li>`).join("")}</ul>${s.requirements ? `<div class="school-requirements">${s.requirements.map((group) => `<section><h4>${group.title}</h4><ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`).join("")}</div>` : ""}<div class="link-row">${s.links.map(([l,h]) => `<a href="${h}" target="_blank" rel="noreferrer">${l}</a>`).join("")}</div></article>`).join(""); }
function renderFilters() { document.querySelector("#schoolFilters").innerHTML = `<button class="filter-button active" data-school="all">전체</button>${schools.map((s) => `<button class="filter-button" style="--tone:${s.tone}" data-school="${s.id}"><span class="color-swatch" aria-hidden="true"></span>${s.short}</button>`).join("")}`; document.querySelector("#eventSchool").innerHTML = `${schools.map((s) => `<option value="${s.id}">${s.short}</option>`).join("")}<option value="personal">개인 공통</option>`; }
function events() { return [...baseEvents.map(([date,schoolId,title,memo], index) => ({ id:`base-${index}`, date, school:schoolId, title, memo, custom:false })), ...customEvents].sort((a,b) => a.date.localeCompare(b.date)); }
function eventCategory(title) {
  if (title.includes("원서접수")) return "원서접수";
  if (title.includes("서류제출") || title.includes("서류 업로드")) return "서류제출";
  if (title.includes("1단계 발표")) return "1단계 합격발표";
  if (title.includes("면접")) return "면접";
  if (title.includes("논술")) return "논술";
  if (title.includes("입학시험") || title.includes("시험 응시")) return "입학시험";
  if (title.includes("지원 마감") || title.includes("우선지원")) return "지원 마감";
  if (title.includes("합격") && title.includes("발표")) return "최종 합격발표";
  if (title.includes("등록")) return "등록";
  return "기타 일정";
}
function renderDetailSchedule(list) {
  const grouped = [...schools, { id:"personal", short:"개인", name:"개인 공통 일정", tone:"#d9b8ef", links:[] }].map((item) => ({ school:item, items:list.filter((event) => event.school === item.id) })).filter((group) => group.items.length);
  document.querySelector("#detailSchedule").innerHTML = grouped.length ? grouped.map(({school:s,items}) => `<article class="detail-school" style="--tone:${s.tone}"><header class="detail-school-head"><div><h4>${escapeHtml(s.name)}</h4><p>${items.length}개의 주요 일정</p></div>${s.links?.[0] ? `<a href="${s.links[0][1]}" target="_blank" rel="noreferrer">모집요강 ↗</a>` : ""}</header><ol class="detail-list">${items.map((event) => `<li class="detail-event" id="detail-${event.id}" data-detail-event="${event.id}" data-detail-date="${event.date}" style="--tone:${s.tone}"><time class="detail-date">${event.date.slice(5).replace("-", ".")}</time><span class="detail-category">${eventCategory(event.title)}</span><h5>${escapeHtml(event.title)}</h5><p>${escapeHtml(event.memo)}</p></li>`).join("")}</ol></article>`).join("") : `<p class="detail-empty">선택한 학교의 일정이 아직 없습니다.</p>`;
}
function renderTimeline() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const cells = Math.ceil((first.getDay() + last.getDate()) / 7) * 7;
  const start = new Date(year, month, 1 - first.getDay());
  const visibleEvents = events().filter((e) => activeSchool === "all" || e.school === activeSchool);
  const grouped = visibleEvents.reduce((map, event) => { (map[event.date] ||= []).push(event); return map; }, {});
  document.querySelector("#calendarMonth").textContent = `${year}.${String(month+1).padStart(2,"0")}`;
  document.querySelector("#calendarGrid").innerHTML = Array.from({length:cells}, (_, index) => {
    const day = new Date(start); day.setDate(start.getDate() + index);
    const key = dateKey(day);
    const dayEvents = grouped[key] || [];
    const classes = ["calendar-day", day.getMonth() === month ? "" : "outside", key === dateKey(new Date()) ? "today" : ""].filter(Boolean).join(" ");
    const entries = dayEvents.slice(0, 3).map((event) => { const s = school(event.school); const shortTitle = event.title.replace(s.short, "").trim(); return `<div class="calendar-event" style="--tone:${s.tone}" title="${escapeHtml(`${event.title} · ${event.memo}`)}"><button class="event-jump" type="button" data-event-jump="${event.id}" aria-label="${escapeHtml(event.title)} 상세 일정 보기"><b>${escapeHtml(s.short)}</b><span>${escapeHtml(shortTitle)}</span></button>${event.custom ? `<button type="button" data-delete-event="${event.id}" aria-label="${escapeHtml(event.title)} 삭제">×</button>` : ""}</div>`; }).join("");
    return `<div class="${classes}" data-date="${key}"><span class="day-number">${day.getDate()}</span><div class="day-events">${entries}${dayEvents.length > 3 ? `<button class="more-events" type="button" data-date-jump="${key}">+${dayEvents.length-3}개 더보기</button>` : ""}</div></div>`;
  }).join("");
  renderDetailSchedule(visibleEvents);
}
function renderTasks() { document.querySelector("#taskList").innerHTML = tasks.length ? tasks.map((t) => `<article class="task-item ${t.done ? "done" : ""}"><input type="checkbox" data-task-check="${t.id}" ${t.done ? "checked" : ""} aria-label="완료 체크" /><div><strong>${t.title}</strong><p>${t.area}${t.due ? ` · ${formatDate(t.due)}` : ""}</p></div><button type="button" data-task-delete="${t.id}" aria-label="계획 삭제">삭제</button></article>`).join("") : `<p class="empty">아직 저장한 계획이 없어요.</p>`; }
function studyRecord(date = studyDate) { return studyRecords[date] || { wake:"", sleep:"", memo:"", entries:[] }; }
function studyMinutes(entry) { if (!entry.start || !entry.end) return 0; const [startHour,startMinute] = entry.start.split(":").map(Number); const [endHour,endMinute] = entry.end.split(":").map(Number); const start = startHour * 60 + startMinute; const end = endHour * 60 + endMinute; if (start === end) return 0; return end > start ? end - start : end + 1440 - start; }
function formatStudyMinutes(minutes) { return `${Math.floor(minutes / 60)}시간 ${minutes % 60}분`; }
function saveStudyRecord(record) { studyRecords[studyDate] = record; store.set("haeun-study-records-v1", studyRecords); const state = document.querySelector("#studySaveState"); if (state) state.textContent = `저장됨 · ${new Intl.DateTimeFormat("ko-KR", { hour:"2-digit", minute:"2-digit" }).format(new Date())}`; }
function renderStudyPlanner() {
  const record = studyRecord();
  const entries = record.entries || [];
  const completedEntries = entries.filter((entry) => entry.done);
  document.querySelector("#studyDate").value = studyDate;
  document.querySelector("#studyDateLabel").textContent = formatDate(studyDate);
  document.querySelector("#wakeTime").value = record.wake || "";
  document.querySelector("#sleepTime").value = record.sleep || "";
  document.querySelector("#dailyMemo").value = record.memo || "";
  document.querySelector("#studyTotal").textContent = formatStudyMinutes(completedEntries.reduce((sum, entry) => sum + studyMinutes(entry), 0));
  document.querySelector("#studyCount").textContent = `계획 ${entries.length}개 · 완료 ${completedEntries.length}개`;
  document.querySelector("#studyEntryList").innerHTML = entries.length ? entries.map((entry) => { const minutes = studyMinutes(entry); const time = entry.start && entry.end ? `${entry.start}–${entry.end}` : "시간 미입력"; return `<article class="study-entry ${entry.done ? "done" : ""}"><input type="checkbox" data-study-check="${entry.id}" ${entry.done ? "checked" : ""} aria-label="${escapeHtml(entry.content)} 완료 체크" /><div><span>${escapeHtml(entry.area)}${entry.done ? " · 완료" : " · 계획"}</span><strong>${escapeHtml(entry.content)}</strong></div><time>${time}</time><b>${minutes ? formatStudyMinutes(minutes) : "-"}</b><button type="button" data-study-delete="${entry.id}" aria-label="${escapeHtml(entry.content)} 삭제">×</button></article>`; }).join("") : `<p class="study-empty">이 날짜에 작성한 계획이 아직 없어요. 오늘의 첫 계획을 추가해 보세요.</p>`;
}
function moveStudyDate(days) { const next = new Date(`${studyDate}T00:00:00`); next.setDate(next.getDate() + days); studyDate = dateKey(next); renderStudyPlanner(); }
function renderStudySearch(query) {
  const results = document.querySelector("#studySearchResults");
  const keyword = query.trim().toLowerCase();
  if (!keyword) { results.hidden = true; results.innerHTML = ""; return; }
  const matches = Object.entries(studyRecords).filter(([date,record]) => `${date} ${record.memo || ""} ${(record.entries || []).map((entry) => `${entry.area} ${entry.content}`).join(" ")}`.toLowerCase().includes(keyword)).sort(([a],[b]) => b.localeCompare(a)).slice(0, 12);
  results.hidden = false;
  results.innerHTML = matches.length ? matches.map(([date,record]) => { const total = (record.entries || []).filter((entry) => entry.done).reduce((sum, entry) => sum + studyMinutes(entry), 0); const preview = (record.entries || []).map((entry) => entry.content).join(", ") || record.memo || "생활 시간 기록"; return `<button type="button" data-study-date-result="${date}"><strong>${formatDate(date)}</strong><span>${escapeHtml(preview)}</span><b>${formatStudyMinutes(total)}</b></button>`; }).join("") : `<p>검색된 기록이 없어요.</p>`;
}
function renderPortals() { document.querySelector("#portalGrid").innerHTML = portals.map(([t,d,h,l],i) => `<article class="portal-card"><span>0${i+1}</span><h3>${t}</h3><p>${d}</p><a href="${h}" target="_blank" rel="noreferrer">${l} ↗</a></article>`).join(""); }
function renderCutoffs() { document.querySelector("#cutoffTable").innerHTML = cutoffRows.map((row) => `<tr style="--tone:${row.tone}"><td class="cutoff-school" data-label="학교"><span aria-hidden="true"></span>${row.school}</td><td class="cutoff-type" data-label="전형">${row.type}</td><td class="cutoff-major" data-label="모집단위"><strong>${row.major}</strong>${row.currentMajor ? `<small>2027 명칭: ${row.currentMajor}</small>` : ""}</td><td class="cutoff-number" data-label="2026 최종">${row.prevSeats}명</td><td class="cutoff-number current" data-label="2027 모집">${row.currentSeats}명</td><td class="cutoff-number" data-label="2026 경쟁률">${row.competition}:1</td><td class="cutoff-number" data-label="2026 충원">${row.waitlist}명</td><td class="cutoff-score" data-label="50% 컷">${row.cut50}등급</td><td class="cutoff-score" data-label="70% 컷">${row.cut70}등급</td></tr>`).join(""); }

const tabNames = new Set(["interview", "essay", "schools", "calendar", "tasks", "sources"]);
function openTab(name, { updateHash = true, scroll = false } = {}) {
  const tabName = tabNames.has(name) ? name : "interview";
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && scroll) tab.scrollIntoView({ behavior:"smooth", block:"nearest", inline:"center" });
  });
  document.querySelectorAll("[data-tab-panel]").forEach((panel) => { panel.hidden = panel.dataset.tabPanel !== tabName; });
  if (updateHash) history.replaceState(null, "", `#${tabName}`);
  if (scroll) document.querySelector("#pageTabs").scrollIntoView({ behavior:"smooth", block:"start" });
}

document.addEventListener("submit", (event) => {
  if (event.target.id === "cloudSyncForm") { event.preventDefault(); const code = document.querySelector("#cloudSyncCode").value.trim(); connectCloud(code).catch((error) => { cloudConnected = false; showCloudConnected(false); setCloudStatus(error.message, "error"); }); }
  if (event.target.id === "eventForm") { event.preventDefault(); const selectedDate = eventDate.value; customEvents.push({ id:crypto.randomUUID(), school:eventSchool.value, date:selectedDate, title:eventTitle.value.trim(), memo:eventMemo.value.trim() || "개인 추가 일정", custom:true }); calendarCursor = new Date(`${selectedDate}T00:00:00`); store.set("haeun-events-v2", customEvents); event.target.reset(); renderTimeline(); }
  if (event.target.id === "taskForm") { event.preventDefault(); tasks.unshift({ id:crypto.randomUUID(), area:taskArea.value, title:taskTitle.value.trim(), due:taskDue.value, done:false }); store.set("haeun-tasks-v2", tasks); event.target.reset(); renderTasks(); }
  if (event.target.id === "studyEntryForm") { event.preventDefault(); const record = studyRecord(); record.entries = [...(record.entries || []), { id:crypto.randomUUID(), area:studyArea.value, content:studyContent.value.trim(), start:studyStart.value, end:studyEnd.value, done:false }]; saveStudyRecord(record); event.target.reset(); renderStudyPlanner(); }
});
document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-tab]"); if (tab) { openTab(tab.dataset.tab, { scroll:true }); }
  const tabLink = event.target.closest("[data-open-tab]"); if (tabLink) { event.preventDefault(); openTab(tabLink.dataset.openTab, { scroll:true }); }
  if (event.target.closest("#calendarPrev")) { calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth()-1, 1); renderTimeline(); }
  if (event.target.closest("#calendarNext")) { calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth()+1, 1); renderTimeline(); }
  const eventJump = event.target.closest("[data-event-jump]"); if (eventJump) { const detail = document.querySelector(`[data-detail-event="${eventJump.dataset.eventJump}"]`); if (detail) { detail.scrollIntoView({ behavior:"smooth", block:"center" }); detail.classList.add("jump-highlight"); setTimeout(() => detail.classList.remove("jump-highlight"), 2200); } }
  const dateJump = event.target.closest("[data-date-jump]"); if (dateJump) { const detail = document.querySelector(`[data-detail-date="${dateJump.dataset.dateJump}"]`); if (detail) { detail.scrollIntoView({ behavior:"smooth", block:"center" }); document.querySelectorAll(`[data-detail-date="${dateJump.dataset.dateJump}"]`).forEach((item) => { item.classList.add("jump-highlight"); setTimeout(() => item.classList.remove("jump-highlight"), 2200); }); } }
  const filter = event.target.closest("[data-school]"); if (filter) { activeSchool = filter.dataset.school; document.querySelectorAll(".filter-button").forEach((b) => b.classList.toggle("active", b.dataset.school === activeSchool)); renderTimeline(); }
  const de = event.target.closest("[data-delete-event]"); if (de) { customEvents = customEvents.filter((e) => e.id !== de.dataset.deleteEvent); store.set("haeun-events-v2", customEvents); renderTimeline(); }
  const dt = event.target.closest("[data-task-delete]"); if (dt) { tasks = tasks.filter((t) => t.id !== dt.dataset.taskDelete); store.set("haeun-tasks-v2", tasks); renderTasks(); }
  if (event.target.closest("#studyPrev")) moveStudyDate(-1);
  if (event.target.closest("#studyNext")) moveStudyDate(1);
  if (event.target.closest("#studyToday")) { studyDate = dateKey(new Date()); renderStudyPlanner(); }
  const studyResult = event.target.closest("[data-study-date-result]"); if (studyResult) { studyDate = studyResult.dataset.studyDateResult; document.querySelector("#studySearch").value = ""; renderStudySearch(""); renderStudyPlanner(); document.querySelector("#studyPlannerTitle").scrollIntoView({ behavior:"smooth", block:"start" }); }
  const studyDelete = event.target.closest("[data-study-delete]"); if (studyDelete) { const record = studyRecord(); record.entries = (record.entries || []).filter((entry) => entry.id !== studyDelete.dataset.studyDelete); saveStudyRecord(record); renderStudyPlanner(); }
  if (event.target.closest("#cloudSyncNow")) pullCloudState().catch((error) => setCloudStatus(error.message, "error"));
  if (event.target.closest("#cloudDisconnect")) disconnectCloud();
});
document.querySelector("#pageTabs").addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...document.querySelectorAll("[data-tab]")];
  const current = tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true");
  const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
  openTab(tabs[next].dataset.tab);
  tabs[next].focus();
});
window.addEventListener("hashchange", () => openTab(location.hash.slice(1), { updateHash:false }));
document.addEventListener("change", (event) => {
  if (event.target.matches("[data-score]")) { const saved = store.get("haeun-scores-v2", {}); saved[event.target.dataset.score] = event.target.value; store.set("haeun-scores-v2", saved); }
  if (event.target.matches("[data-task-check]")) { tasks = tasks.map((t) => t.id === event.target.dataset.taskCheck ? {...t, done:event.target.checked} : t); store.set("haeun-tasks-v2", tasks); renderTasks(); }
  if (event.target.id === "studyDate" && event.target.value) { studyDate = event.target.value; renderStudyPlanner(); }
  if (event.target.id === "wakeTime" || event.target.id === "sleepTime") { const record = studyRecord(); record[event.target.id === "wakeTime" ? "wake" : "sleep"] = event.target.value; saveStudyRecord(record); }
  if (event.target.matches("[data-study-check]")) { const record = studyRecord(); record.entries = (record.entries || []).map((entry) => entry.id === event.target.dataset.studyCheck ? {...entry, done:event.target.checked} : entry); saveStudyRecord(record); renderStudyPlanner(); }
});
document.addEventListener("input", (event) => {
  if (event.target.id === "dailyMemo") { const record = studyRecord(); record.memo = event.target.value; saveStudyRecord(record); }
  if (event.target.id === "studySearch") renderStudySearch(event.target.value);
});

renderDday(); renderInterview(); renderEssay(); renderScores(); renderSchools(); renderFilters(); renderTimeline(); renderTasks(); renderStudyPlanner(); renderPortals(); renderCutoffs(); openTab(location.hash.slice(1), { updateHash:false }); initCloudSync(); initCursorBubble();
