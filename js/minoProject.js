document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 제출 동작 중지

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // 비밀번호 길이가 10글자 이내인지 검사
        if (password.length < 10) {
            alert("비밀번호는 10글자 이상 설정해주세요.");
            return; // 함수 종료
        }

        // 여기에 이메일과 비밀번호의 유효성 검사 로직을 추가할 수 있습니다.
        // 예: 간단한 형식 검사

        if (email && password) { // 이메일과 비밀번호가 입력되었을 경우
            // 여기에 서버로 이메일과 비밀번호를 전송하는 로직을 추가할 수 있습니다.
            // 이 예시에서는 단순히 메인 화면으로 이동합니다.
            window.location.href = "index.html";
        } else {
            alert("이메일과 비밀번호를 입력해주세요.");
        }
    });
});


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 동작을 중지

    // 회원가입 처리 로직 (서버로 전송, 데이터 저장 등)

    // 회원가입 완료 후 다른 페이지로 이동
    window.location.href = "1.html";
});




