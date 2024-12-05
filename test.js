document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const form = modal.querySelector('form');
    // 모달 열기
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    // 모달 닫기
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
     // "문의하기" 버튼 클릭 시 알림 표시
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // 폼 제출 방지 (기본 동작 차단)
        alert('문의가 완료되었습니다!'); // 알림 창 표시
        modal.style.display = 'none'; // 모달 닫기
        form.reset(); // 폼 초기화
    });
    });