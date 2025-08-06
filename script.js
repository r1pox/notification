document.addEventListener('DOMContentLoaded', function() {
    const animateElements = () => {
        const elements = document.querySelectorAll('.card, h2, footer');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    };
    const setupAnimation = () => {
        const elements = document.querySelectorAll('.card, h2, footer');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };
    const highlightCurrentDate = () => {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        const dateElements = document.querySelectorAll('.highlight');
        dateElements.forEach(el => {
            const dateText = el.textContent.trim();
            if (dateText.includes(todayStr.substring(0, 7))) {
                el.classList.add('current-date');
            }
        });
    };
    setupAnimation();
    animateElements();
    highlightCurrentDate();
    const channelCards = document.querySelectorAll('.channel-card');
    channelCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    const notices = document.querySelectorAll('.notice h4');
    notices.forEach(notice => {
        notice.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});
