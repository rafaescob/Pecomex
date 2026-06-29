const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");
const activeRoleLabel = document.getElementById("activeRoleLabel");
const roleButtons = document.querySelectorAll(".role-picker button");
const navItems = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");
const segmentedButtons = document.querySelectorAll(".segmented button");
let selectedRole = "Operaciones";

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRole = button.dataset.role;
    roleButtons.forEach((roleButton) => roleButton.classList.remove("active"));
    button.classList.add("active");
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  activeRoleLabel.textContent = selectedRole;
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
});

logoutButton.addEventListener("click", () => {
  appShell.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const viewId = item.dataset.view;

    navItems.forEach((navItem) => navItem.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));

    item.classList.add("active");
    document.getElementById(viewId).classList.add("active");
  });
});

segmentedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    segmentedButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
