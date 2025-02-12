document.addEventListener('DOMContentLoaded', function() {
    let notifications = document.querySelector('.notifications');
    let success = document.getElementById('success');
    let info = document.getElementById('info');
    let error = document.getElementById('error');
    let warning = document.getElementById('warning');

    function createToast(type, icon, title, text) {
        let newToast = document.createElement('div');
        newToast.classList.add('toast');
        newToast.innerHTML = `
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark"></i>
        `;
        newToast.style.setProperty('--color', getColor(type));
        notifications.appendChild(newToast);
        setTimeout(() => {
            newToast.remove();
        }, 3000);
    }

    function getColor(type) {
        switch (type) {
            case 'success':
                return '#0abf30';
            case 'info':
                return '#1e90ff';
            case 'error':
                return '#ff4c4c';
            case 'warning':
                return '#ffae42';
            default:
                return '#fff';
        }
    }

    success.onclick = function() {
        createToast('success', 'fa-solid fa-circle-check', 'Success', 'This is a success toast.');
    };

    info.onclick = function() {
        createToast('info', 'fa-solid fa-info-circle', 'Info', 'This is an info toast.');
    };

    error.onclick = function() {
        createToast('error', 'fa-solid fa-times-circle', 'Error', 'This is an error toast.');
    };

    warning.onclick = function() {
        createToast('warning', 'fa-solid fa-exclamation-circle', 'Warning', 'This is a warning toast.');
    };
});
