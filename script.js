document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const roleBox = document.getElementById("roleBox");
    const loginBox = document.getElementById("loginBox");
    const roleTitle = document.getElementById("roleTitle");
    const loginBtn = document.getElementById("loginBtn");

    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const signInBtn = document.getElementById("signInBtn");

    const backBtn = document.getElementById("backBtn");
    const eyeBtn = document.getElementById("eyeBtn");

    let selectedRole = null;

    // OPEN OVERLAY
    loginBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
        roleBox.style.display = "block";
        loginBox.style.display = "none";
    });

    // ROLE SELECT
    document.querySelectorAll("[data-role]").forEach(button => {
        button.addEventListener("click", () => {
            selectedRole = button.dataset.role;

            roleBox.style.display = "none";
            loginBox.style.display = "grid"; // important: grid because auth-shell uses grid

            roleTitle.innerHTML = `Login as: <b>${selectedRole}</b>`;
        });
    });

    // BACK to roleBox
    backBtn.addEventListener("click", () => {
        loginBox.style.display = "none";
        roleBox.style.display = "block";
    });

    // SHOW PASSWORD checkbox
    togglePassword.addEventListener("change", () => {
        passwordInput.type = togglePassword.checked ? "text" : "password";
    });

    // Eye button toggle (optional)
    eyeBtn.addEventListener("click", () => {
        const nowText = passwordInput.type === "password";
        passwordInput.type = nowText ? "text" : "password";
        togglePassword.checked = nowText;
    });

    // SIGN IN
    signInBtn.addEventListener("click", () => {
        if (selectedRole === "Owner") {
            window.location.href = "testing.html";
        } else if (selectedRole === "Staff") {
            window.location.href = "staff.html";
        }
    });

    // click outside to close
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });
});