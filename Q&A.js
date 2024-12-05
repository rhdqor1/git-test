const modal = document.getElementById('inquiryModal');
const openModalBtn = document.getElementById('openModal');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const noticeTableBody = document.querySelector('.notice-table tbody');
let inquiryCount = 2;

// Modal 열기
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Modal 닫기
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

//확인 버튼 클릭 이벤트
    confirmBtn.addEventListener('click', () => {

// 이메일 유효성 검사 
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        emailError.style.display = 'block';
        return; // 유효하지 않으면 실행 중단
    }

    emailError.style.display = 'none';

    // 데이터 가져오기
    const name = document.getElementById('name').value;
    const inquiryType = document.getElementById('inquiryType').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;


    if (!name || !subject || !message || !inquiryType) {
    alert('모든 필드를 입력해주세요.');
    return;
    }

    // 새로운 행 추가
inquiryCount++; // 문의 번호 증가
const newRow = document.createElement('tr');

// td1: NO 번호
const td1 = document.createElement('td');
td1.textContent = inquiryCount;

// td2: 문의 항목
const td2 = document.createElement('td');
const link = document.createElement('a');
link.href = '#';
link.title = message;
link.textContent = `${subject}`;

td2.appendChild(link);

// 행에 td 추가
newRow.appendChild(td1);
newRow.appendChild(td2);

// 테이블 상단에 행 추가
noticeTableBody.prepend(newRow);

// 문의 성공 메시지 및 모달 닫기
alert('Q&A가 성공적으로 접수되었습니다.');
modal.style.display = 'none';
    
    // 폼 초기화
    document.getElementById('inquiryForm').reset();
});

// 외부 클릭으로 모달 닫기
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});