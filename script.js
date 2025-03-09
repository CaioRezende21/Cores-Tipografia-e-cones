function toggleMenu() {
    const menu = document.getElementById('theme-menu');
    menu.classList.toggle('hidden');
}

function changeTheme(theme) {
    document.body.className = theme;
}
