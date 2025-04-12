// static/script.js

// 예시 데이터 (이름, 학번으로 구글 계정 ID/PW를 찾을 수 있도록)
const studentAccounts = [
  {
    id: '20240101',
    name: '김철수',
    googleId: 'kimcs01@school.edu',
    googlePw: 'abc12345'
  },
  {
    id: '20240102',
    name: '이영희',
    googleId: 'leeyh02@school.edu',
    googlePw: 'pass5678'
  },
  {
    id: '20240103',
    name: '박지민',
    googleId: 'parkjm03@school.edu',
    googlePw: 'qwerty789'
  }
];

// DOM 요소 선택
const form = document.getElementById('searchForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 제출 시 새로고침 방지

  const studentId = document.getElementById('studentId').value.trim();
  const studentName = document.getElementById('studentName').value.trim();

  if (!studentId || !studentName) {
    resultDiv.textContent = '학번과 이름을 모두 입력해주세요.';
    resultDiv.style.display = 'block';
    return;
  }

  // 검색 로직
  const found = studentAccounts.find(student => 
    student.id === studentId && student.name === studentName
  );

  if (found) {
    resultDiv.innerHTML = `
      <strong>🔐 검색 결과:</strong><br><br>
      📧 <strong>Google ID:</strong> ${found.googleId}<br>
      🔑 <strong>Password:</strong> ${found.googlePw}
    `;
  } else {
    resultDiv.innerHTML = `
      😥 해당 정보를 찾을 수 없습니다.<br>
      학번과 이름을 다시 확인해주세요.
    `;
  }

  resultDiv.style.display = 'block';
});
