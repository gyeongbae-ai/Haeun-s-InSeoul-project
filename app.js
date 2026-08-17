const schools = [
  {
    id: "cau",
    name: "중앙대학교",
    tone: "#f5a7ca",
    target: "CAU탐구형인재 또는 CAU융합형인재",
    summary:
      "2027학년도 학종은 융합형·탐구형·성장형 체계. 탐구형은 서류 1단계 뒤 면접 30% 반영, 융합형은 모집단위별 면접 여부를 모집요강에서 확인.",
    admissions: [
      "CAU탐구형인재: 서류 100% 1단계 후 2단계 서류 70% + 면접 30%, 수능최저 없음",
      "CAU융합형인재: 서류 중심 전형, 일부 모집단위는 세부 방식 확인 필요",
      "2026학년도 경쟁률·입시결과는 중앙대 입학처 수시 경쟁률/입시결과에서 확인"
    ],
    links: [
      ["2027 수시 모집요강", "https://admission.cau.ac.kr/submenu.do?menuurl=fpotGuatDnhsqjCnl16KOw%3D%3D"],
      ["수시 경쟁률", "https://admission.cau.ac.kr/submenu.do?menuurl=oG08risXFa2m%2BdEZZm03Xw%3D%3D"],
      ["전년도 입시결과", "https://admission.cau.ac.kr/submenu.do?menuurl=%2Bwb2%2F2YpjUGJjmg2NfyS6Q%3D%3D"]
    ]
  },
  {
    id: "uos",
    name: "서울시립대학교",
    tone: "#bde7d6",
    target: "학생부종합전형Ⅰ 면접형",
    summary:
      "2027 기본계획 기준 학생부종합Ⅰ은 1단계 서류 100% 3배수, 2단계 1단계 50% + 면접 50%, 수능최저 없음.",
    admissions: [
      "학생부종합Ⅰ(면접형): 391명 규모, 면접 비중 50%",
      "학생부종합Ⅱ: 서류 100% 일괄합산, 수능최저 없음",
      "2026학년도 등급·경쟁률은 서울시립대 입학통계/입시결과 메뉴에서 모집단위별 확인"
    ],
    links: [
      ["입학처", "https://english.uos.ac.kr/admissionNew/main.do"],
      ["입학통계", "https://english.uos.ac.kr/admissionNew/main.do"],
      ["전형 기본계획", "https://english.uos.ac.kr/admissionNew/main.do"]
    ]
  },
  {
    id: "kmu",
    name: "국민대학교",
    tone: "#b7d8ff",
    target: "국민프런티어 중심 면접 준비",
    summary:
      "2027 수시 모집요강 기준 국민프런티어는 1단계 서류 100% 3배수, 2단계 1단계 70% + 면접 30%, 수능최저 없음.",
    admissions: [
      "원서접수: 2026.09.07.(월) 10:00 ~ 09.11.(금) 18:00",
      "1단계 발표: 2026.11.17.(화) 14:00 예정, 면접: 2026.11.22.(일) 지정일시",
      "최초 합격발표: 2026.12.18.(금) 17:00 예정"
    ],
    links: [
      ["2027 수시 모집요강 공지", "https://admission.kookmin.ac.kr/nonschedule/notice.php?ctype=view&no=1070&page=1"],
      ["경쟁률 보기", "https://admission.kookmin.ac.kr/nonschedule/application.php"],
      ["입시결과 보기", "https://admission.kookmin.ac.kr/nonschedule/previousResult.php"]
    ]
  },
  {
    id: "ghent",
    name: "겐트대학교 글로벌캠퍼스",
    tone: "#f6e59a",
    target: "송도 글로벌캠퍼스 2027학년도 지원",
    summary:
      "모집정원은 3월·9월 학기 통합 225명. 일반전형/학교장추천전형으로 상시 지원하며 결과는 접수 후 4~6주 개별 통보.",
    admissions: [
      "2027년 3월 학기: 2026.09.01 접수 시작, 2026.11.30 우선지원 마감, 2027.01.31 지원마감",
      "2027년 9월 학기: 2027.03.01 접수 시작, 2027.07.31 지원마감",
      "수능영어 2등급, TOEFL/IELTS 등 영어 요건과 온라인 입학시험 기준 확인"
    ],
    links: [
      ["모집요강", "https://admissions.ghent.ac.kr/user/contents.php?sq=6"],
      ["온라인 지원", "https://www.ghent.ac.kr/~applynow"],
      ["영문 입학처", "https://admissions.ghent.ac.kr/user_en/index.php"]
    ]
  }
];

const baseEvents = [
  ["2026-09-01", "ghent", "겐트대 2027년 3월 학기 원서접수 시작", "서류 영문 발급, 여권, 영어성적, 입학시험 준비 시작"],
  ["2026-09-07", "cau", "2027 수시 원서접수 시작", "중앙대 지원 전 모집요강/변경 공지 최종 확인"],
  ["2026-09-07", "uos", "2027 수시 원서접수 시작", "서울시립대 학생부종합Ⅰ 지원 모집단위 확정"],
  ["2026-09-07", "kmu", "국민대 원서접수 시작", "2026.09.07 10:00부터 접수"],
  ["2026-09-11", "kmu", "국민대 원서접수 마감", "2026.09.11 18:00 마감"],
  ["2026-09-11", "cau", "수시 원서접수 마감 주간", "학교별 마감 시간이 다르므로 진학어플라이/입학처에서 최종 확인"],
  ["2026-09-11", "uos", "수시 원서접수 마감 주간", "자기소개 자료와 생기부 질문 후보 정리"],
  ["2026-11-17", "kmu", "국민대 1단계 발표", "14:00 예정, 2단계 면접 고사장 확인"],
  ["2026-11-22", "kmu", "국민대 면접고사", "지정일시, 블라인드 면접 복장 유의"],
  ["2026-11-30", "ghent", "겐트대 3월 학기 우선지원 마감", "기숙사 우선 신청 조건까지 함께 점검"],
  ["2026-12-01", "cau", "중앙대 면접 집중 대비", "탐구형 생기부 활동별 꼬리 질문 녹음 연습"],
  ["2026-12-01", "uos", "서울시립대 면접 집중 대비", "학생부종합Ⅰ 면접 50% 반영 기준으로 답변 구조 훈련"],
  ["2026-12-18", "cau", "수시 합격자 발표 마감일", "대교협 수시 발표 마감 기준, 중앙대 입학처 발표 확인"],
  ["2026-12-18", "uos", "수시 합격자 발표 마감일", "서울시립대 입학처에서 발표 확인"],
  ["2026-12-18", "kmu", "국민대 최초 합격발표", "17:00 예정"],
  ["2026-12-21", "cau", "합격자 등록 시작", "2026.12.21 ~ 12.23 온라인 문서등록"],
  ["2026-12-24", "kmu", "국민대 충원 합격발표 시작", "2026.12.24 ~ 12.29 18:00"],
  ["2027-01-31", "ghent", "겐트대 2027년 3월 학기 지원마감", "조기마감 가능, 서류 보완 여유를 두고 접수"],
  ["2027-03-01", "ghent", "겐트대 2027년 9월 학기 원서접수 시작", "가을 학기 지원 계정 생성"],
  ["2027-07-31", "ghent", "겐트대 2027년 9월 학기 지원마감", "접수 후 4~6주 개별 결과 통보"]
];

const interviewSets = [
  {
    title: "생기부 기반",
    questions: [
      "활동을 시작한 문제의식은 무엇이었는지 30초로 설명하기",
      "내가 직접 바꾼 점, 배운 점, 아쉬운 점을 한 문장씩 말하기",
      "활동과 지원학과가 연결되는 지점을 사례로 말하기"
    ]
  },
  {
    title: "중앙대 탐구형",
    questions: [
      "가장 깊게 탐구한 주제의 가설, 과정, 결론 정리",
      "탐구 과정에서 실패하거나 수정한 부분 설명",
      "면접관의 꼬리 질문에 근거 자료로 답하기"
    ]
  },
  {
    title: "서울시립대·국민대",
    questions: [
      "학업역량, 진로역량, 공동체역량 사례를 각각 2개씩 준비",
      "10분 면접 기준 첫 답변은 40초 안으로 연습",
      "블라인드 면접에서 학교명, 교복, 실명 노출 금지 확인"
    ]
  }
];

const sources = [
  ["중앙대학교", "2027 수시 모집요강, 수시 경쟁률, 전년도 입시결과", schools[0].links],
  ["서울시립대학교", "입학전형 기본계획, 입학통계, 입시결과", schools[1].links],
  ["국민대학교", "2027 수시 모집요강 재게시, 경쟁률, 입시결과", schools[2].links],
  ["겐트대학교 글로벌캠퍼스", "2027년 3월/9월 학기 모집요강과 온라인 지원", schools[3].links]
];

const scoreSubjects = ["국어", "수학", "영어", "탐구1", "탐구2"];
const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

let activeSchool = "all";
let customEvents = store.get("haeun-events", []);
let tasks = store.get("haeun-tasks", [
  { id: crypto.randomUUID(), area: "수능", title: "국어/수학 오답노트 30분", due: "", done: false },
  { id: crypto.randomUUID(), area: "면접", title: "생기부 활동 1개를 1분 답변으로 녹음", due: "", done: false },
  { id: crypto.randomUUID(), area: "서류", title: "겐트대 영문 서류 발급 목록 확인", due: "2026-09-01", done: false }
]);

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  }).format(date);
}

function getSchool(id) {
  return schools.find((school) => school.id === id) || {
    name: "개인",
    tone: "#d9b8ef"
  };
}

function renderDday() {
  const target = new Date("2026-09-07T00:00:00+09:00");
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  const label = diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
  document.querySelector("#ddayCount").textContent = label;
}

function renderScores() {
  const saved = store.get("haeun-scores", {});
  document.querySelector("#scoreGrid").innerHTML = scoreSubjects
    .map((subject) => {
      const selected = saved[subject] || "2";
      return `
        <article class="score-card">
          <label>${subject}
            <select data-score="${subject}">
              ${["1", "2", "3", "4", "5"].map((grade) => `<option value="${grade}" ${grade === selected ? "selected" : ""}>${grade}등급</option>`).join("")}
            </select>
          </label>
        </article>
      `;
    })
    .join("");
}

function renderSchools() {
  document.querySelector("#schoolGrid").innerHTML = schools
    .map(
      (school) => `
      <article class="school-card" style="--tone:${school.tone}">
        <div class="school-head">
          <div>
            <h3>${school.name}</h3>
            <p>${school.target}</p>
          </div>
          <span class="tag">${school.id.toUpperCase()}</span>
        </div>
        <div class="school-body">
          <p>${school.summary}</p>
          <ul class="mini-list">
            ${school.admissions.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="link-row">
            ${school.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function allEvents() {
  return [
    ...baseEvents.map(([date, school, title, memo]) => ({
      id: `${date}-${school}-${title}`,
      date,
      school,
      title,
      memo,
      custom: false
    })),
    ...customEvents
  ].sort((a, b) => a.date.localeCompare(b.date));
}

function renderTimeline() {
  const events = allEvents().filter((event) => activeSchool === "all" || event.school === activeSchool);
  document.querySelector("#timeline").innerHTML = events
    .map((event) => {
      const school = getSchool(event.school);
      return `
        <article class="event-card" style="--tone:${school.tone}">
          <div class="event-date">${formatDate(event.date)}</div>
          <div>
            <h3>${event.title}</h3>
            <p>${event.memo}</p>
          </div>
          <span class="tag">${school.name}</span>
          ${event.custom ? `<button type="button" data-delete-event="${event.id}" aria-label="일정 삭제">삭제</button>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderTasks() {
  if (!tasks.length) {
    document.querySelector("#taskList").innerHTML = "<p class='small-note'>아직 저장된 계획이 없습니다.</p>";
    return;
  }

  document.querySelector("#taskList").innerHTML = tasks
    .map(
      (task) => `
      <article class="task-item ${task.done ? "done" : ""}">
        <input type="checkbox" data-task-check="${task.id}" ${task.done ? "checked" : ""} aria-label="완료 체크" />
        <div>
          <strong>${task.title}</strong>
          <p class="small-note">${task.area}${task.due ? ` · ${formatDate(task.due)}` : ""}</p>
        </div>
        <button type="button" data-task-delete="${task.id}" aria-label="계획 삭제">삭제</button>
      </article>
    `
    )
    .join("");
}

function renderInterview() {
  document.querySelector("#interviewGrid").innerHTML = interviewSets
    .map(
      (set) => `
      <article class="interview-card">
        <h3>${set.title}</h3>
        <ol>
          ${set.questions.map((question) => `<li>${question}</li>`).join("")}
        </ol>
      </article>
    `
    )
    .join("");
}

function renderSources() {
  document.querySelector("#sourceList").innerHTML = sources
    .map(
      ([name, detail, links]) => `
      <article class="source-card">
        <h3>${name}</h3>
        <p>${detail}</p>
        <div class="link-row">
          ${links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

document.addEventListener("submit", (event) => {
  if (event.target.id === "eventForm") {
    event.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      school: document.querySelector("#eventSchool").value,
      date: document.querySelector("#eventDate").value,
      title: document.querySelector("#eventTitle").value.trim(),
      memo: document.querySelector("#eventMemo").value.trim() || "개인 추가 일정",
      custom: true
    };
    customEvents = [...customEvents, item];
    store.set("haeun-events", customEvents);
    event.target.reset();
    renderTimeline();
  }

  if (event.target.id === "taskForm") {
    event.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      area: document.querySelector("#taskArea").value,
      title: document.querySelector("#taskTitle").value.trim(),
      due: document.querySelector("#taskDue").value,
      done: false
    };
    tasks = [item, ...tasks];
    store.set("haeun-tasks", tasks);
    event.target.reset();
    renderTasks();
  }
});

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-school]");
  if (filter) {
    activeSchool = filter.dataset.school;
    document.querySelectorAll(".filter-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.school === activeSchool);
    });
    renderTimeline();
  }

  const deleteEvent = event.target.closest("[data-delete-event]");
  if (deleteEvent) {
    customEvents = customEvents.filter((item) => item.id !== deleteEvent.dataset.deleteEvent);
    store.set("haeun-events", customEvents);
    renderTimeline();
  }

  const deleteTask = event.target.closest("[data-task-delete]");
  if (deleteTask) {
    tasks = tasks.filter((task) => task.id !== deleteTask.dataset.taskDelete);
    store.set("haeun-tasks", tasks);
    renderTasks();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-score]")) {
    const saved = store.get("haeun-scores", {});
    saved[event.target.dataset.score] = event.target.value;
    store.set("haeun-scores", saved);
  }

  if (event.target.matches("[data-task-check]")) {
    tasks = tasks.map((task) =>
      task.id === event.target.dataset.taskCheck ? { ...task, done: event.target.checked } : task
    );
    store.set("haeun-tasks", tasks);
    renderTasks();
  }
});

renderDday();
renderScores();
renderSchools();
renderTimeline();
renderTasks();
renderInterview();
renderSources();
