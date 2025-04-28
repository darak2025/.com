
function updateToggleIcons(isDark) {
    const icon = isDark ? 'sun' : 'moon';
    themeToggle.innerHTML = `<i class="fas fa-${icon}"></i>`;
    if (mobileThemeToggle) {
        mobileThemeToggle.innerHTML = `<i class="fas fa-${icon}"></i>`;
    }
}

function toggleTheme() {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcons(isDark);
}

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    header.classList.remove('scrolled');

    const loader = document.querySelector('.page-loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        
        setTimeout(() => {
            loader.remove();
            document.body.classList.add('loaded');
        }, 1000);
    }, 1500);
});

window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = scrollProgress + '%';
});

const menuToggle = docum
