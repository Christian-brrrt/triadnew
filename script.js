document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const roleBox = document.getElementById("roleBox");
    const loginBox = document.getElementById("loginBox");
    const roleTitle = document.getElementById("roleTitle");
    const loginBtn = document.getElementById("loginBtn");
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const signInBtn = document.getElementById("signInBtn");

    let selectedRole = null; 

    loginBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
        roleBox.style.display = "block";
        loginBox.style.display = "none";
    });

    document.querySelectorAll("[data-role]").forEach(button => {
        button.addEventListener("click", () => {
            selectedRole = button.dataset.role;
            roleBox.style.display = "none";
            loginBox.style.display = "block";
            roleTitle.textContent = `Login as ${selectedRole}`;
        });
    });

    togglePassword.addEventListener("change", () => {
        passwordInput.type = togglePassword.checked ? "text" : "password";
    });

    signInBtn.addEventListener("click", () => {
        if (selectedRole === "Owner") {
            window.location.href = "testing.html";
        } else if (selectedRole === "Staff") {
            window.location.href = "staff.html"; 
        }
    });
});
