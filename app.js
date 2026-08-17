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
    id: "konkuk", short: "건국대", name: "건국대학교", tone: "#a9d9c8", focus: "KU자기추천 · KU논술우수자",
    summary: "KU자기추천은 서류 100%(3배수) 후 1단계 70% + 면접 30%, 수능최저 없음. KU논술우수자는 논술 100%이며 모집단위별 수능최저를 확인해야 합니다.",
    dates: ["원서 9.7 ~ 9.11", "논술 11.21", "자기추천 면접 12.5 ~ 12.6", "최초합격 12.18까지"],
    links: [
      ["2027 모집요강 PDF", "https://enter.konkuk.ac.kr/file/pdfDown.pdf?ofn=2027%ED%95%99%EB%85%84%EB%8F%84+%EA%B1%B4%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90+%EC%88%98%EC%8B%9C%EB%AA%A8%EC%A7%91%EC%9A%94%EA%B0%95%28%EB%8B%A8%EB%A9%B4%29_%EC%B5%9C%EC%A2%85.pdf&sfn=20260625041927583_3601.pdf"],
      ["입학처", "https://enter.konkuk.ac.kr/"],
      ["2026 결과·컷", "https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052"]
    ]
  },
  {
    id: "seoultech", short: "서울과기대", name: "서울과학기술대학교", tone: "#9fc8ef", focus: "학교생활우수자 · 창의융합인재 · 논술",
    summary: "학생부종합은 1단계 서류 100% 후 2단계 면접을 실시합니다. 논술전형은 논술 70% + 교과 30%로 선발하며 모집단위별 최저를 확인합니다.",
    dates: ["원서 9.7 09:00 ~ 9.11 18:00", "1단계 11.20 14:00", "논술 11.23 10:00", "면접 11.28 ~ 11.29", "최초합격 12.18 14:00"],
    links: [["입학처", "https://admission.seoultech.ac.kr/"], ["2027 모집요강", "https://ipsi.theschools.co.kr/cne_s/4/947.pdf"], ["입시결과", "https://admission.seoultech.ac.kr/"]]
  },
  {
    id: "ssu", short: "숭실대", name: "숭실대학교", tone: "#cab5ed", focus: "SSU미래인재(면접형) · 논술우수자",
    summary: "미래인재 면접형은 서류 100%(3~3.5배수) 후 1단계 50% + 면접 50%. 논술우수자는 논술 80% + 학생부교과 20%입니다.",
    dates: ["원서 9.8 10:00 ~ 9.11 18:00", "논술 11.21", "1단계 11.23", "면접 11.27 ~ 11.28", "최초합격 12.18 10:00"],
    links: [["2027 모집요강", "https://admission.ssu.ac.kr/mojip/req.asp?flag=1&page_no=1_2_2"], ["모집요강 PDF", "https://admission.ssu.ac.kr/upload/SSU%281%29_260617194254.pdf"], ["입시통계", "https://admission.ssu.ac.kr/"]]
  },
  {
    id: "mju", short: "명지대", name: "명지대학교", tone: "#f0c49d", focus: "명지인재면접 · 교과면접",
    summary: "명지인재면접은 서류 100%(4배수) 후 1단계 70% + 면접 30%. 교과면접은 교과 100%(5배수) 후 1단계 70% + 면접 30%입니다. 전 전형 수능최저 없음.",
    dates: ["원서 9.7 10:00 ~ 9.11 17:00", "교과면접 10.31", "명지인재 면접 11.28 ~ 11.29", "최초합격 12.9 15:00"],
    links: [["2027 모집요강", "https://iphak.mju.ac.kr/pages/?b=B_1_1&bn=30136&m=read&p=9"], ["입학처", "https://iphak.mju.ac.kr/"], ["입시결과", "https://iphak.mju.ac.kr/pages/?b=B_1_1"]]
  },
  {
    id: "hansung", short: "한성대", name: "한성대학교", tone: "#f3aeb1", focus: "한성인재 · 지역균형",
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
  ["2022 논술가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExNzcyNzYlMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2023 모의논술·가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExODAwMzklMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2024 모의논술·가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExODMyNjMlMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2025 모의논술·가이드북", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExODgwNjglMkZhcnRjbFZpZXcuZG8lM0Y%3D"],
  ["2026 선행학습 영향평가", "https://admission.konkuk.ac.kr/admission/37897/subview.do?enc=Zm5jdDF8QEB8JTJGYWRtaXNzaW9uJTJGNjI4MiUyRjExOTQ5ODYlMkZhcnRjbFZpZXcuZG8lM0Y%3D"]
];

const baseEvents = [
  ["2026-09-07", "konkuk", "건국대 원서접수 시작", "9.11까지 · KU자기추천 / KU논술우수자 지원 정보 최종 확인"],
  ["2026-09-07", "seoultech", "서울과기대 원서접수 시작", "09:00 시작 · 9.11 18:00 마감"],
  ["2026-09-07", "mju", "명지대 원서접수 시작", "10:00 시작 · 9.11 17:00 마감"],
  ["2026-09-07", "hansung", "한성대 원서접수 기간", "9.7~9.11 · 지원 전 입학처 최종 모집요강 확인"],
  ["2026-09-08", "cau", "중앙대 원서접수 시작", "10:00 시작 · 9.11 18:00 마감"],
  ["2026-09-08", "ssu", "숭실대 원서접수 시작", "10:00 시작 · 9.11 18:00 마감"],
  ["2026-09-14", "mju", "명지대 서류제출 마감", "마감일 우체국 접수분까지 인정"],
  ["2026-09-14", "ssu", "숭실대 서류 업로드 마감", "17:00 마감"],
  ["2026-09-15", "cau", "중앙대 서류제출 마감", "16:00 온라인 업로드 마감"],
  ["2026-09-17", "seoultech", "서울과기대 서류제출 마감", "17:00 · 등기우편 소인 유효"],
  ["2026-10-31", "mju", "명지대 교과면접", "인문캠퍼스(서울) 진행"],
  ["2026-11-20", "seoultech", "서울과기대 1단계 발표", "14:00 · 학생부종합 전체"],
  ["2026-11-21", "konkuk", "건국대 KU논술우수자 논술", "고사시간은 모집단위별 수험생 안내 확인"],
  ["2026-11-21", "ssu", "숭실대 논술우수자 논술", "수험생 유의사항 11.17 공개"],
  ["2026-11-23", "seoultech", "서울과기대 논술고사", "10:00 시작 예정"],
  ["2026-11-23", "ssu", "숭실대 면접형 1단계 발표", "SSU미래인재·기회균형·SW우수자"],
  ["2026-11-26", "cau", "중앙대 탐구형 1단계 발표", "14:00"],
  ["2026-11-27", "ssu", "숭실대 미래인재 면접", "면접형 · 모집단위별 안내 확인"],
  ["2026-11-28", "seoultech", "서울과기대 학생부종합 면접", "학교생활우수자·창의융합인재·특수교육대상자"],
  ["2026-11-28", "mju", "명지대 명지인재면접", "자연캠퍼스 모집단위"],
  ["2026-11-29", "seoultech", "서울과기대 기회균형 면접", "기회균형 전체(특수교육대상자 제외)"],
  ["2026-11-29", "mju", "명지대 명지인재면접", "인문캠퍼스 모집단위"],
  ["2026-12-05", "cau", "중앙대 탐구형·성장형 면접", "12.5~12.6 · 전형/모집단위별 날짜 확인"],
  ["2026-12-05", "konkuk", "건국대 KU자기추천 면접 1일차", "이과·공과·일부 사회과학·사범계열 등"],
  ["2026-12-06", "konkuk", "건국대 KU자기추천 면접 2일차", "문과·건축·경영·일부 사회과학·수의·KU자유전공 등"],
  ["2026-12-09", "mju", "명지대 최초합격 발표", "15:00"],
  ["2026-12-18", "cau", "중앙대 최초합격 발표", "14:00"],
  ["2026-12-18", "seoultech", "서울과기대 최초합격 발표", "14:00 · 실기 외 전체"],
  ["2026-12-18", "ssu", "숭실대 최초합격 발표", "10:00"],
  ["2026-12-18", "hansung", "한성대 수시 합격 발표 기한", "한성인재는 면접 없이 서류 100%"],
  ["2026-12-21", "personal", "수시 최초합격자 문서등록", "대학별 등록 마감시각 확인 · 12.23까지"]
];

const portals = [
  ["대입정보포털", "대학·학과·전형을 검색하는 시작점", "https://www.adiga.kr/man/inf/mainView.do?menuId=PCMANINF1000", "대학어디가 열기"],
  ["학생부 성적 HTML", "학생부 성적을 입력하고 HTML 파일로 내려받기", "https://www.adiga.kr/mpg/sga/ssa/schoolScoreMngeView.do?menuId=PCMPGSGA1001", "성적 관리 열기"],
  ["학생부 입력 가이드", "HTML 다운로드 전 입력 방법부터 확인", "https://www.adiga.kr/sco/sca/schScoAnlsPopup.do?guideType=student", "가이드 보기"],
  ["50% · 70% 컷", "대학별 전형 결과와 합격선 확인", "https://www.adiga.kr/uct/acd/ade/criteriaAndResultView.do?menuId=PCUCTACD2000", "컷 확인하기"]
];

const scoreSubjects = ["국어", "수학", "영어", "탐구1", "탐구2"];
const store = { get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }, set(key, value) { localStorage.setItem(key, JSON.stringify(value)); } };
let activeSchool = "all";
let customEvents = store.get("haeun-events-v2", []);
let tasks = store.get("haeun-tasks-v2", [
  { id: crypto.randomUUID(), area: "면접", title: "생기부 프린트하고 형광팬 3색 준비", due: "2026-08-23", done: false },
  { id: crypto.randomUUID(), area: "면접", title: "생기부 핵심 단어·개념 100개 작성", due: "2026-08-30", done: false },
  { id: crypto.randomUUID(), area: "논술", title: "건국대 2022 기출 1회 시간 재고 풀기", due: "2026-08-30", done: false },
  { id: crypto.randomUUID(), area: "수능", title: "국어·수학 오답 30분씩 복습", due: "", done: false }
]);

function school(id) { return schools.find((item) => item.id === id) || { name: "개인", short: "개인", tone: "#d9b8ef" }; }
function formatDate(value) { return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", weekday: "short" }).format(new Date(`${value}T00:00:00`)); }
function renderDday() { const diff = Math.ceil((new Date("2026-09-07T00:00:00+09:00") - new Date()) / 86400000); document.querySelector("#ddayCount").textContent = diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`; }
function renderInterview() { document.querySelector("#interviewGuide").innerHTML = interviewGuide.map(([n,t,d]) => `<article class="guide-card"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join(""); }
function renderEssay() { document.querySelector("#essaySteps").innerHTML = essaySteps.map(([n,t,d]) => `<article class="essay-step"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join(""); document.querySelector("#essayLinks").innerHTML = essayLinks.map(([l,h]) => `<a href="${h}" target="_blank" rel="noreferrer">${l}<span>↗</span></a>`).join(""); }
function renderScores() { const saved = store.get("haeun-scores-v2", {}); document.querySelector("#scoreGrid").innerHTML = scoreSubjects.map((s) => `<label class="score-card"><span>${s}</span><select data-score="${s}">${[1,2,3,4,5].map((g) => `<option value="${g}" ${String(g) === (saved[s] || "2") ? "selected" : ""}>${g}등급</option>`).join("")}</select></label>`).join(""); }
function renderSchools() { document.querySelector("#schoolGrid").innerHTML = schools.map((s) => `<article class="school-card" style="--tone:${s.tone}"><div class="school-head"><div><span class="school-kicker">${s.short}</span><h3>${s.name}</h3><p>${s.focus}</p></div><span class="dot"></span></div><p class="school-summary">${s.summary}</p><ul>${s.dates.map((d) => `<li>${d}</li>`).join("")}</ul><div class="link-row">${s.links.map(([l,h]) => `<a href="${h}" target="_blank" rel="noreferrer">${l}</a>`).join("")}</div></article>`).join(""); }
function renderFilters() { document.querySelector("#schoolFilters").innerHTML = `<button class="filter-button active" data-school="all">전체</button>${schools.map((s) => `<button class="filter-button" data-school="${s.id}">${s.short}</button>`).join("")}`; document.querySelector("#eventSchool").innerHTML = `${schools.map((s) => `<option value="${s.id}">${s.short}</option>`).join("")}<option value="personal">개인 공통</option>`; }
function events() { return [...baseEvents.map(([date,schoolId,title,memo]) => ({ id:`${date}-${schoolId}-${title}`, date, school:schoolId, title, memo, custom:false })), ...customEvents].sort((a,b) => a.date.localeCompare(b.date)); }
function renderTimeline() { const list = events().filter((e) => activeSchool === "all" || e.school === activeSchool); document.querySelector("#timeline").innerHTML = list.map((e) => { const s = school(e.school); return `<article class="event-card" style="--tone:${s.tone}"><time>${formatDate(e.date)}</time><div><span class="event-school">${s.short}</span><h3>${e.title}</h3><p>${e.memo}</p></div>${e.custom ? `<button type="button" data-delete-event="${e.id}" aria-label="일정 삭제">삭제</button>` : ""}</article>`; }).join(""); }
function renderTasks() { document.querySelector("#taskList").innerHTML = tasks.length ? tasks.map((t) => `<article class="task-item ${t.done ? "done" : ""}"><input type="checkbox" data-task-check="${t.id}" ${t.done ? "checked" : ""} aria-label="완료 체크" /><div><strong>${t.title}</strong><p>${t.area}${t.due ? ` · ${formatDate(t.due)}` : ""}</p></div><button type="button" data-task-delete="${t.id}" aria-label="계획 삭제">삭제</button></article>`).join("") : `<p class="empty">아직 저장한 계획이 없어요.</p>`; }
function renderPortals() { document.querySelector("#portalGrid").innerHTML = portals.map(([t,d,h,l],i) => `<article class="portal-card"><span>0${i+1}</span><h3>${t}</h3><p>${d}</p><a href="${h}" target="_blank" rel="noreferrer">${l} ↗</a></article>`).join(""); }

document.addEventListener("submit", (event) => {
  if (event.target.id === "eventForm") { event.preventDefault(); customEvents.push({ id:crypto.randomUUID(), school:eventSchool.value, date:eventDate.value, title:eventTitle.value.trim(), memo:eventMemo.value.trim() || "개인 추가 일정", custom:true }); store.set("haeun-events-v2", customEvents); event.target.reset(); renderTimeline(); }
  if (event.target.id === "taskForm") { event.preventDefault(); tasks.unshift({ id:crypto.randomUUID(), area:taskArea.value, title:taskTitle.value.trim(), due:taskDue.value, done:false }); store.set("haeun-tasks-v2", tasks); event.target.reset(); renderTasks(); }
});
document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-school]"); if (filter) { activeSchool = filter.dataset.school; document.querySelectorAll(".filter-button").forEach((b) => b.classList.toggle("active", b.dataset.school === activeSchool)); renderTimeline(); }
  const de = event.target.closest("[data-delete-event]"); if (de) { customEvents = customEvents.filter((e) => e.id !== de.dataset.deleteEvent); store.set("haeun-events-v2", customEvents); renderTimeline(); }
  const dt = event.target.closest("[data-task-delete]"); if (dt) { tasks = tasks.filter((t) => t.id !== dt.dataset.taskDelete); store.set("haeun-tasks-v2", tasks); renderTasks(); }
});
document.addEventListener("change", (event) => {
  if (event.target.matches("[data-score]")) { const saved = store.get("haeun-scores-v2", {}); saved[event.target.dataset.score] = event.target.value; store.set("haeun-scores-v2", saved); }
  if (event.target.matches("[data-task-check]")) { tasks = tasks.map((t) => t.id === event.target.dataset.taskCheck ? {...t, done:event.target.checked} : t); store.set("haeun-tasks-v2", tasks); renderTasks(); }
});

renderDday(); renderInterview(); renderEssay(); renderScores(); renderSchools(); renderFilters(); renderTimeline(); renderTasks(); renderPortals();
