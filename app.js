        /* ========== SVG ICONS ========== */
        const svgWrap = (s, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
        const ICONS = {
            shield: (s=24) => svgWrap(s, `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`),
            bell: (s=20) => svgWrap(s, `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`),
            dashboard: (s=18) => svgWrap(s, `<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>`),
            listChecks: (s=18) => svgWrap(s, `<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>`),
            crown: (s=18) => svgWrap(s, `<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>`),
            scrollText: (s=18) => svgWrap(s, `<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/>`),
            settings: (s=18) => svgWrap(s, `<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>`),
            logOut: (s=18) => svgWrap(s, `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>`),
            trendingUp: (s=18) => svgWrap(s, `<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>`),
            arrowUp: (s=10) => svgWrap(s, `<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>`),
            arrowDown: (s=10) => svgWrap(s, `<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>`),
            clipboardPlus: (s=18) => svgWrap(s, `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 11v6"/>`),
            trophy: (s=18) => svgWrap(s, `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>`),
            hourglass: (s=24) => svgWrap(s, `<path d="M6 22h12"/><path d="M6 2h12"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>`),
            plus: (s=16) => svgWrap(s, `<path d="M5 12h14"/><path d="M12 5v14"/>`),
            globe: (s=16) => svgWrap(s, `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`),
            user: (s=16) => svgWrap(s, `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),
            coins: (s=16) => svgWrap(s, `<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>`),
            clipboardList: (s=16) => svgWrap(s, `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>`),
            eye: (s=14) => svgWrap(s, `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`),
            messageCircle: (s=14) => svgWrap(s, `<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>`),
            send: (s=16) => svgWrap(s, `<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`),
            flame: (s=12) => svgWrap(s, `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`),
            calendar: (s=12) => svgWrap(s, `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>`),
            check: (s=14) => svgWrap(s, `<polyline points="20 6 9 17 4 12"/>`),
            checkCircle: (s=14) => svgWrap(s, `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`),
            x: (s=14) => svgWrap(s, `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`),
            trash2: (s=14) => svgWrap(s, `<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`),
            save: (s=14) => svgWrap(s, `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`),
            keyRound: (s=16) => svgWrap(s, `<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>`),
            refreshCw: (s=16) => svgWrap(s, `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>`),
            shieldCheck: (s=16) => svgWrap(s, `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>`),
            leaf: (s=20) => svgWrap(s, `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c.5 3.5-.4 6.5-3.4 9.4-3 3-6 4-9 4Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>`),
            chevronRight: (s=12) => svgWrap(s, `<polyline points="9 18 15 12 9 6"/>`),
            chevronDown: (s=12) => svgWrap(s, `<polyline points="6 9 12 15 18 9"/>`),
            clock: (s=12) => svgWrap(s, `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`),
            link: (s=10) => svgWrap(s, `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`),
            inbox: (s=36) => svgWrap(s, `<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>`),
            fileText: (s=36) => svgWrap(s, `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/>`),
            listTodo: (s=36) => svgWrap(s, `<rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>`),
            activity: (s=18) => svgWrap(s, `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`),
            wifiOff: (s=14) => svgWrap(s, `<path d="m2 2 20 20"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path d="M10.66 5c4.01-.36 8.06.42 11.34 2.15"/><path d="M12 12v.01"/><path d="M5 12.86a10 10 0 0 1 5.17-2.9"/><path d="M18.71 17.99c.25.58.4 1.2.4 1.86a3 3 0 0 1-6 0c0-2 3-3 3-3"/>`)
        };
        const icon = (name, s=16) => `<span class="icon-svg" style="width:${s}px; height:${s}px;">${ICONS[name](s)}</span>`;

        /* Static icon injections */
        document.getElementById('auth-logo-icon').innerHTML = ICONS.shield(24);
        document.getElementById('pending-logo-icon').innerHTML = ICONS.hourglass(22);
        document.getElementById('offline-icon').innerHTML = ICONS.wifiOff(14);

        const brandMark = `<span class="brand-mark">${ICONS.shield(13)}</span>`;
        document.getElementById('mobile-brand').innerHTML = `${brandMark}<span>Civil Team</span>`;
        document.getElementById('sidebar-brand').innerHTML = `${brandMark}<span>Civil Team</span>`;
        document.getElementById('mobile-notif-bell').insertAdjacentHTML('afterbegin', ICONS.bell(16));
        document.getElementById('sidebar-notif-bell').insertAdjacentHTML('afterbegin', ICONS.bell(16));

        document.getElementById('sidebar-nav').innerHTML = `
            <button class="nav-link" data-tab="workspace-tab" onclick="switchTab('workspace-tab')">${icon('dashboard', 16)}<span>Панель</span></button>
            <button class="nav-link" data-tab="tasks-tab" onclick="switchTab('tasks-tab')">${icon('listChecks', 16)}<span>Задачи</span></button>
            <button class="nav-link admin-link" data-tab="admin-tab" style="display:none;" onclick="switchTab('admin-tab')">${icon('crown', 16)}<span>Admin</span></button>
            <button class="nav-link admin-link" data-tab="logs-tab" style="display:none;" onclick="switchTab('logs-tab')">${icon('scrollText', 16)}<span>Логи</span></button>
            <button class="nav-link" data-tab="settings-tab" onclick="switchTab('settings-tab')">${icon('settings', 16)}<span>Настройки</span></button>
        `;
        document.getElementById('logout-link').innerHTML = `${icon('logOut', 16)}<span>Выйти</span>`;

        document.getElementById('ct-xp-history').innerHTML = `${icon('trendingUp', 14)}<span>Динамика XP</span>`;
        document.getElementById('ct-analytics').innerHTML = `${icon('activity', 14)}<span>Командная аналитика</span>`;
        document.getElementById('ct-register-log').innerHTML = `${icon('clipboardPlus', 14)}<span>Зарегистрировать отчёт</span>`;
        document.getElementById('ct-monitoring').innerHTML = `${icon('trophy', 14)}<span>Мониторинг ассистентов</span>`;
        document.getElementById('ct-tasks').innerHTML = `${icon('listChecks', 14)}<span>Задачи</span>`;
        document.getElementById('new-task-btn').innerHTML = `${icon('plus', 14)}<span>Новая задача</span>`;
        document.getElementById('ct-settings').innerHTML = `${icon('settings', 14)}<span>Настройки профиля</span>`;
        document.getElementById('settings-password-title').innerHTML = `${icon('keyRound', 14)}<span>Смена пароля</span>`;
        document.getElementById('settings-refresh-title').innerHTML = `${icon('refreshCw', 14)}<span>Обновить данные</span>`;
        document.getElementById('settings-security-title').innerHTML = `${icon('shieldCheck', 14)}<span>Безопасность</span>`;
        document.getElementById('settings-logout-btn').innerHTML = `${icon('logOut', 14)}<span>Выйти из аккаунта</span>`;
        document.getElementById('ct-pending-approvals').innerHTML = `${icon('user', 14)}<span>Заявки на доступ</span>`;
        document.getElementById('ct-admin-manage').innerHTML = `${icon('crown', 14)}<span>Управление ассистентами</span>`;
        document.getElementById('ct-logs-feed').innerHTML = `${icon('scrollText', 14)}<span>Последние отчёты</span>`;
        document.getElementById('ct-personal-tasks').innerHTML = `${icon('clipboardList', 14)}<span>Личные задачи ассистентов</span>`;

        document.getElementById('bottom-nav').innerHTML = `
            <button class="bottom-nav-btn" data-tab="workspace-tab" onclick="switchTab('workspace-tab')"><span class="icon">${icon('dashboard', 18)}</span>Панель</button>
            <button class="bottom-nav-btn" data-tab="tasks-tab" onclick="switchTab('tasks-tab')"><span class="icon">${icon('listChecks', 18)}</span>Задачи</button>
            <button class="bottom-nav-btn admin-link" data-tab="admin-tab" style="display:none;" onclick="switchTab('admin-tab')"><span class="icon">${icon('crown', 18)}</span>Admin</button>
            <button class="bottom-nav-btn admin-link" data-tab="logs-tab" style="display:none;" onclick="switchTab('logs-tab')"><span class="icon">${icon('scrollText', 18)}</span>Логи</button>
            <button class="bottom-nav-btn" data-tab="settings-tab" onclick="switchTab('settings-tab')"><span class="icon">${icon('settings', 18)}</span>Ещё</button>
        `;

        /* ========== NUMBER COUNTER ========== */
        function animateNumber(el, target, duration=700, suffix='') {
            const start = parseInt((el.textContent || '0').replace(/\D/g, '')) || 0;
            if (start === target) { el.textContent = target + suffix; return; }
            const startTime = performance.now();
            function step(now) {
                const p = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                const v = Math.floor(start + (target - start) * eased);
                el.textContent = v + suffix;
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = target + suffix;
            }
            requestAnimationFrame(step);
        }

        /* ========== LAZY-LOAD CHART.JS ========== */
        let chartLoadPromise = null;
        function loadChartJs() {
            if (window.Chart) return Promise.resolve();
            if (chartLoadPromise) return chartLoadPromise;
            chartLoadPromise = new Promise((resolve, reject) => {
                const s1 = document.createElement('script');
                s1.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
                s1.onload = () => {
                    const s2 = document.createElement('script');
                    s2.src = 'https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3.0.0/dist/chartjs-adapter-date-fns.bundle.min.js';
                    s2.onload = resolve;
                    s2.onerror = reject;
                    document.head.appendChild(s2);
                };
                s1.onerror = reject;
                document.head.appendChild(s1);
            });
            return chartLoadPromise;
        }

        /* ========== OFFLINE SUPPORT ========== */
        window.addEventListener('online', () => {
            document.getElementById('offline-banner').classList.remove('show');
            retryQueuedLogs();
        });
        window.addEventListener('offline', () => {
            document.getElementById('offline-banner').classList.add('show');
        });

        async function retryQueuedLogs() {
            try {
                const queue = JSON.parse(localStorage.getItem('log_queue') || '[]');
                if (!queue.length) return;
                const remaining = [];
                for (const item of queue) {
                    try {
                        const { error } = await supabaseClient.from('work_logs').insert([item]);
                        if (error) remaining.push(item);
                    } catch { remaining.push(item); }
                }
                localStorage.setItem('log_queue', JSON.stringify(remaining));
                if (queue.length > remaining.length) {
                    showToast(`Синхронизировано ${queue.length - remaining.length} офлайн-записей`);
                    checkSession();
                }
            } catch (e) { console.warn('Queue retry failed', e); }
        }

        /* ========== SUPABASE ========== */
        const SUPABASE_URL = "https://jdrepnjvvyzaiohihvvw.supabase.co";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkcmVwbmp2dnl6YWlvaGlodnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MDczODUsImV4cCI6MjA5NzI4MzM4NX0.Byex7T_qRiiVBmFMD3QeS8tALx5k1ZIV34O2QDrjjbI";
        const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        let isRegisterMode = false;
        let currentUserData = null;
        let notifPollStarted = false;
        let notifDropdownOpen = false;
        window._assistantMap = {};

        function showToast(message, isError = false) {
            const toast = document.getElementById('toast');
            toast.innerHTML = `${isError ? icon('x', 14) : icon('checkCircle', 14)}<span>${message}</span>`;
            toast.style.borderColor = isError ? "rgba(229,72,77,0.35)" : "var(--border)";
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }

        function escapeHtml(str) {
            const div = document.createElement('div');
            div.textContent = str || '';
            return div.innerHTML;
        }

        function avatarColor(name) {
            let hash = 0;
            const str = name || '?';
            for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) % 360;
            return `hsl(${hash}, 35%, 40%)`;
        }

        function timeAgo(ts) {
            const diffMin = Math.floor((new Date() - new Date(ts)) / 60000);
            if (diffMin < 1) return 'только что';
            if (diffMin < 60) return `${diffMin} мин назад`;
            const diffHr = Math.floor(diffMin / 60);
            if (diffHr < 24) return `${diffHr} ч назад`;
            return `${Math.floor(diffHr / 24)} дн назад`;
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            const target = document.getElementById(tabId);
            if (target) target.classList.add('active');
            document.querySelectorAll('[data-tab]').forEach(el => el.classList.toggle('active', el.dataset.tab === tabId));
            if (tabId === 'tasks-tab') loadTasks();
            else if (tabId === 'admin-tab') loadAdminPanel();
            else if (tabId === 'logs-tab') loadLogsTab();
            else if (tabId === 'workspace-tab' && currentUserData) {
                loadXpHistory(currentUserData.id, 'xp-chart-wrap-self');
                loadAnalytics();
            }
        }

        function toggleAuthMode() {
            isRegisterMode = !isRegisterMode;
            document.getElementById('auth-title').innerText = isRegisterMode ? 'Создать профиль' : 'Вход в Workspace';
            document.getElementById('auth-subtitle').innerText = isRegisterMode ? 'Заведи новый профиль ассистента' : 'Войди под своим игровым ником';
            document.getElementById('auth-btn').innerText = isRegisterMode ? 'Зарегистрироваться' : 'Войти';
            document.getElementById('pass-strength-container').style.display = isRegisterMode ? 'block' : 'none';
            document.getElementById('auth-toggle-text').innerHTML = isRegisterMode
                ? 'Уже зарегистрированы? <span onclick="toggleAuthMode()">Войти</span>'
                : 'Впервые тут? <span onclick="toggleAuthMode()">Создать аккаунт</span>';
        }

        document.getElementById('auth-pass').addEventListener('input', function (e) {
            if (!isRegisterMode) return;
            const pass = e.target.value;
            const bar = document.getElementById('pass-bar');
            let score = 0;
            if (pass.length >= 8) score++;
            if (/[a-zA-Z]/.test(pass)) score++;
            if (/[0-9]/.test(pass)) score++;
            if (score === 1) { bar.style.width = '33%'; bar.style.backgroundColor = 'var(--danger)'; }
            else if (score === 2) { bar.style.width = '66%'; bar.style.backgroundColor = 'var(--role-deputy)'; }
            else if (score === 3) { bar.style.width = '100%'; bar.style.backgroundColor = 'var(--role-manager)'; }
            else { bar.style.width = '0%'; }
        });

        function showAuthView() {
            document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
            document.getElementById('auth-view').classList.add('active');
        }

        async function checkSession() {
            try {
                const { data: { session } } = await supabaseClient.auth.getSession();
                if (!session) { showAuthView(); return; }
                const user = session.user;
                let { data: profile, error: dbError } = await supabaseClient
                    .from('assistants').select('*').eq('id', user.id).single();
                if (dbError || !profile) {
                    const fallbackName = user.email.split('@')[0];
                    const niceName = fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1);
                    const { error: insertErr } = await supabaseClient.from('assistants').insert([
                        { id: user.id, name: niceName, email: user.email, points: 0, tasks_count: 0, role: 'assistant' }
                    ]);
                    if (insertErr) throw new Error('Ошибка создания профиля: ' + insertErr.message);
                    const retry = await supabaseClient.from('assistants').select('*').eq('id', user.id).single();
                    profile = retry.data;
                    if (!profile) throw new Error('Сбой при автосоздании профиля.');
                }
                currentUserData = profile;
                if (!profile.approved) {
                    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
                    document.getElementById('pending-view').classList.add('active');
                    return;
                }
                document.getElementById('current-user-name').innerText = profile.name;
                animateNumber(document.getElementById('stat-xp'), profile.points || 0, 800, ' XP');
                animateNumber(document.getElementById('stat-tasks'), profile.tasks_count || 0, 800, '');
                const roleLabels = { head: 'Head of Civil', deputy_head: 'Deputy Head', founder: 'Founder', manager: 'Manager', assistant: 'Civil Assistant' };
                const roleColors = { head: 'var(--role-head)', deputy_head: 'var(--role-deputy)', founder: 'var(--role-founder)', manager: 'var(--role-manager)', assistant: 'var(--accent-hover)' };
                const roleDisplay = document.getElementById('user-role-display');
                roleDisplay.innerText = roleLabels[profile.role] || 'Civil Assistant';
                roleDisplay.style.color = roleColors[profile.role] || 'var(--accent-hover)';
                const isHead = profile.role === 'head';
                const isDeputy = profile.role === 'deputy_head';
                const isFounder = profile.role === 'founder';
                const isManager = profile.role === 'manager';
                const isViewerRole = isFounder || isManager;
                const canEdit = isHead || isDeputy;
                const isPrivileged = canEdit || isViewerRole;
                document.querySelectorAll('.admin-link').forEach(el => {
                    el.style.display = isPrivileged ? '' : 'none';
                    el.classList.toggle('is-deputy', isDeputy);
                    el.classList.toggle('is-viewer', isViewerRole);
                });
                document.getElementById('task-editor-toggle-wrap').style.display = canEdit ? 'block' : 'none';
                const crownBadge = document.getElementById('head-crown-badge');
                crownBadge.style.display = isPrivileged ? 'inline-flex' : 'none';
                crownBadge.classList.toggle('role-deputy', isDeputy);
                crownBadge.classList.toggle('role-viewer', isViewerRole);
                const crownIconName = isHead ? 'crown' : isDeputy ? 'shield' : isFounder ? 'shieldCheck' : 'user';
                const crownLabel = isHead ? 'Head' : isDeputy ? 'Deputy' : isFounder ? 'Founder' : isManager ? 'Manager' : '';
                crownBadge.innerHTML = isPrivileged ? `${icon(crownIconName, 10)}<span>${crownLabel}</span>` : '';
                const roleStatBox = document.getElementById('role-stat-box');
                roleStatBox.classList.toggle('gold', isHead);
                roleStatBox.classList.toggle('silver', isDeputy);
                roleStatBox.classList.toggle('viewer', isViewerRole);
                document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
                document.getElementById('dashboard-view').classList.add('active');
                switchTab('workspace-tab');
                loadLeaderboard();
                loadNotifications();
                if (!notifPollStarted) { notifPollStarted = true; setInterval(loadNotifications, 30000); }
                supabaseClient.from('assistants').update({ last_seen: new Date().toISOString() }).eq('id', user.id)
                    .then(({ error: seenErr }) => { if (seenErr) console.warn('last_seen не обновлён:', seenErr.message); });
            } catch (err) {
                console.error(err);
                showToast("Ошибка сессии: " + err.message, true);
                showAuthView();
            }
        }

        document.getElementById('auth-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('auth-btn');
            btn.disabled = true;
            btn.innerText = isRegisterMode ? 'Регистрация...' : 'Вход...';
            const rawName = document.getElementById('auth-name').value.trim();
            const password = document.getElementById('auth-pass').value;
            const safeName = rawName.toLowerCase().replace(/[^a-z0-9_]/g, '');
            if (!safeName) {
                btn.disabled = false;
                btn.innerText = isRegisterMode ? 'Зарегистрироваться' : 'Войти';
                return showToast('Никнейм должен содержать латинские буквы или цифры', true);
            }
            const systemEmail = `${safeName}@civil.team`;
            try {
                if (isRegisterMode) {
                    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
                        throw new Error('Пароль: от 8 символов, нужны буквы и цифры.');
                    }
                    const { data, error } = await supabaseClient.auth.signUp({ email: systemEmail, password });
                    if (error) {
                        if (/already registered|already exists/i.test(error.message)) {
                            throw new Error('Этот никнейм уже занят.');
                        }
                        throw new Error('Ошибка: ' + error.message);
                    }
                    if (!data.session) {
                        throw new Error('Аккаунт создан, но не вошёл автоматически.');
                    }
                    if (data.user) {
                        const { error: dbError } = await supabaseClient.from('assistants').insert([
                            { id: data.user.id, name: rawName, email: systemEmail, points: 0, tasks_count: 0, role: 'assistant' }
                        ]);
                        if (dbError) throw new Error('Ошибка БД: ' + dbError.message);
                        const { data: leaders } = await supabaseClient.from('assistants').select('id').in('role', ['head', 'deputy_head']);
                        notifyMany((leaders || []).map(l => l.id), `Новая заявка на доступ: ${rawName}`);
                    }
                    showToast('Заявка отправлена. Дождись одобрения.');
                } else {
                    const { error } = await supabaseClient.auth.signInWithPassword({ email: systemEmail, password });
                    if (error) throw new Error('Неверный никнейм или пароль');
                    showToast('Добро пожаловать');
                }
                await checkSession();
            } catch (err) {
                showToast(err.message, true);
            } finally {
                btn.disabled = false;
                btn.innerText = isRegisterMode ? 'Зарегистрироваться' : 'Войти';
            }
        });

        async function logOut() {
            await supabaseClient.auth.signOut();
            currentUserData = null;
            isRegisterMode = false;
            document.getElementById('auth-title').innerText = 'Вход в Workspace';
            document.getElementById('auth-subtitle').innerText = 'Войди под своим игровым ником';
            document.getElementById('pass-strength-container').style.display = 'none';
            document.getElementById('auth-btn').innerText = 'Войти';
            showAuthView();
        }

        document.getElementById('password-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const newPass = document.getElementById('new-password').value;
            if (newPass.length < 8 || !/[a-zA-Z]/.test(newPass) || !/[0-9]/.test(newPass)) {
                return showToast('Пароль: от 8 символов, нужны буквы и цифры.', true);
            }
            const { error } = await supabaseClient.auth.updateUser({ password: newPass });
            if (error) return showToast('Ошибка: ' + error.message, true);
            document.getElementById('new-password').value = '';
            showToast('Пароль обновлён');
        });

        const LEADERBOARD_PAGE_SIZE = 15;
        let leaderboardPage = 0;
        async function loadLeaderboard(page = leaderboardPage) {
            leaderboardPage = page;
            const tbody = document.getElementById('leaderboard-data');
            tbody.innerHTML = Array.from({ length: 6 }).map(() => `
                <tr class="skel-leaderboard-row">
                    <td><div class="skel line short" style="width:22px;height:22px;border-radius:50%;"></div></td>
                    <td><div class="skel line" style="width:70%;"></div></td>
                    <td><div class="skel line" style="width:30px;"></div></td>
                    <td style="text-align:right;"><div class="skel badge" style="margin-left:auto;"></div></td>
                </tr>
            `).join('');
            const from = page * LEADERBOARD_PAGE_SIZE;
            const to = from + LEADERBOARD_PAGE_SIZE - 1;
            const { data: assistants, error, count } = await supabaseClient
                .from('assistants')
                .select('*', { count: 'exact' })
                .eq('role', 'assistant')
                .order('points', { ascending: false })
                .order('created_at', { ascending: true })
                .range(from, to);
            if (error) {
                tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--danger); padding:20px; font-size:12px;">Ошибка: ${error.message}</td></tr>`;
                return;
            }
            tbody.innerHTML = '';
            (assistants || []).forEach((user, i) => {
                const rank = from + i + 1;
                const isMe = currentUserData && currentUserData.id === user.id;
                let medal;
                if (rank === 1) medal = `<span class="medal medal-gold">1</span>`;
                else if (rank === 2) medal = `<span class="medal medal-silver">2</span>`;
                else if (rank === 3) medal = `<span class="medal medal-bronze">3</span>`;
                else medal = `<span style="color:var(--text-muted); font-size:12px;">${rank}</span>`;
                tbody.innerHTML += `
                    <tr style="${isMe ? 'background:var(--bg-surface-raised);' : ''}">
                        <td>${medal}</td>
                        <td style="font-weight: 500; color: var(--text-primary);">${escapeHtml(user.name)}${isMe ? ' <span style="color:var(--text-muted); font-weight:400; font-size:11px;">(ты)</span>' : ''}</td>
                        <td style="font-variant-numeric: tabular-nums;">${user.tasks_count || 0}</td>
                        <td style="text-align: right;"><span class="points-badge">${user.points || 0} XP</span></td>
                    </tr>
                `;
            });
            if (!assistants || assistants.length === 0) {
                tbody.innerHTML = `<tr><td colspan="4"><div class="empty-state"><div class="empty-icon">${ICONS.trophy(32)}</div><div class="empty-title">Пока пусто</div><div class="empty-desc">Как только ассистенты начнут вносить отчёты, здесь появится рейтинг.</div></div></td></tr>`;
            }
            renderLeaderboardPagination(count || 0, page);
        }

        function renderLeaderboardPagination(totalCount, page) {
            const totalPages = Math.max(1, Math.ceil(totalCount / LEADERBOARD_PAGE_SIZE));
            let pager = document.getElementById('leaderboard-pagination');
            if (!pager) {
                pager = document.createElement('div');
                pager.id = 'leaderboard-pagination';
                pager.className = 'pagination-row';
                document.getElementById('leaderboard-data').closest('.card').appendChild(pager);
            }
            if (totalPages <= 1) { pager.innerHTML = ''; return; }
            pager.innerHTML = `
                <button class="page-btn" ${page === 0 ? 'disabled' : ''} onclick="loadLeaderboard(${page - 1})">‹</button>
                <span class="page-indicator">${page + 1} / ${totalPages}</span>
                <button class="page-btn" ${page >= totalPages - 1 ? 'disabled' : ''} onclick="loadLeaderboard(${page + 1})">›</button>
            `;
        }

        async function loadNotifications() {
            if (!currentUserData) return;
            const { data, error } = await supabaseClient
                .from('notifications').select('*').eq('user_id', currentUserData.id)
                .order('created_at', { ascending: false }).limit(30);
            if (error) return;
            const unread = (data || []).filter(n => !n.read).length;
            document.querySelectorAll('.notif-badge').forEach(b => {
                b.style.display = unread > 0 ? 'flex' : 'none';
                b.innerText = unread > 9 ? '9+' : unread;
            });
            const listEl = document.getElementById('notif-list');
            if (!data || data.length === 0) {
                listEl.innerHTML = `<div class="notif-empty">${ICONS.inbox(28)}<span>Пока ничего нового</span></div>`;
                return;
            }
            listEl.innerHTML = data.map(n => {
                const iconSvg = n.message.includes('XP') ? ICONS.coins(14) : ICONS.clipboardList(14);
                return `
                    <div class="notif-item ${n.read ? '' : 'unread'}">
                        <span class="notif-icon">${iconSvg}</span>
                        <div class="notif-text">
                            <div>${escapeHtml(n.message)}</div>
                            <div class="notif-item-time">${timeAgo(n.created_at)}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        async function toggleNotifications(btnEl) {
            const dropdown = document.getElementById('notif-dropdown');
            notifDropdownOpen = !notifDropdownOpen;
            if (notifDropdownOpen) {
                const rect = btnEl.getBoundingClientRect();
                const dw = Math.min(320, window.innerWidth - 24);
                let left = rect.right - dw;
                left = Math.max(12, Math.min(left, window.innerWidth - dw - 12));
                dropdown.style.width = dw + 'px';
                dropdown.style.left = left + 'px';
                dropdown.style.top = (rect.bottom + 10) + 'px';
                dropdown.classList.add('open');
                await loadNotifications();
                await supabaseClient.from('notifications').update({ read: true }).eq('user_id', currentUserData.id).eq('read', false);
                setTimeout(() => document.querySelectorAll('.notif-badge').forEach(b => b.style.display = 'none'), 400);
            } else {
                dropdown.classList.remove('open');
            }
        }

        document.addEventListener('click', (e) => {
            const dropdown = document.getElementById('notif-dropdown');
            if (notifDropdownOpen && !dropdown.contains(e.target) && !e.target.closest('.notif-bell')) {
                dropdown.classList.remove('open');
                notifDropdownOpen = false;
            }
        });

        async function notifyUser(userId, message) {
            await supabaseClient.from('notifications').insert([{ user_id: userId, message }]);
        }

        async function notifyMany(userIds, message) {
            if (!userIds || userIds.length === 0) return;
            await supabaseClient.from('notifications').insert(userIds.map(id => ({ user_id: id, message })));
        }

        function formatLastSeen(ts) {
            if (!ts) return 'ещё не заходил';
            const date = new Date(ts);
            const diffHours = (new Date() - date) / 36e5;
            if (diffHours < 24) return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
            return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        const xpChartLoadedFor = new Set();
        const xpChartInstances = {};

        function toggleProfileCard(userId) {
            const card = document.getElementById(`profile-${userId}`);
            if (!card) return;
            const opening = card.style.display === 'none';
            card.style.display = opening ? 'flex' : 'none';
            if (opening && !xpChartLoadedFor.has(userId)) {
                xpChartLoadedFor.add(userId);
                loadXpHistory(userId);
            }
        }

        async function loadXpHistory(userId, wrapId) {
            const wrap = document.getElementById(wrapId || `xp-chart-wrap-${userId}`);
            if (!wrap) return;
            const { data, error } = await supabaseClient
                .from('work_logs')
                .select('points_awarded, created_at')
                .eq('assistant_id', userId)
                .order('created_at', { ascending: true });
            if (error) {
                wrap.innerHTML = `<div class="xp-chart-empty">Ошибка загрузки графика</div>`;
                return;
            }
            if (!data || data.length === 0) {
                wrap.innerHTML = `<div class="xp-chart-empty">Пока нет данных</div>`;
                return;
            }
            await loadChartJs();
            let running = 0;
            const points = data.map(l => {
                running += (l.points_awarded || 0);
                return { x: l.created_at, y: running };
            });
            const canvasId = `xp-canvas-${userId}-${wrapId || 'profile'}`;
            wrap.innerHTML = `<canvas id="${canvasId}"></canvas>`;
            const ctx = document.getElementById(canvasId).getContext('2d');
            const key = wrapId || userId;
            if (xpChartInstances[key]) xpChartInstances[key].destroy();
            xpChartInstances[key] = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        data: points,
                        borderColor: '#C81E4D',
                        backgroundColor: 'rgba(200,30,77,0.1)',
                        borderWidth: 1.5,
                        pointRadius: 0,
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: '#C81E4D',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: {
                        backgroundColor: '#141418',
                        borderColor: '#26262C',
                        borderWidth: 1,
                        titleColor: '#EDEDEF',
                        bodyColor: '#A0A0A8',
                        padding: 8,
                        displayColors: false,
                    }},
                    scales: {
                        x: {
                            type: 'time',
                            time: { unit: 'day', tooltipFormat: 'd MMM' },
                            grid: { display: false },
                            border: { display: false },
                            ticks: { color: '#6B6B74', font: { size: 10 }, maxTicksLimit: 5 }
                        },
                        y: {
                            grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                            border: { display: false },
                            ticks: { color: '#6B6B74', font: { size: 10 } },
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        /* ========== АНАЛИТИКА ========== */
        let analyticsLoaded = false;
        async function loadAnalytics() {
            if (!currentUserData || analyticsLoaded) return;
            analyticsLoaded = true;

            const heatmapWrap = document.getElementById('heatmap-wrap');
            const yearAgo = new Date(); yearAgo.setFullYear(yearAgo.getFullYear() - 1);
            const { data: allLogs } = await supabaseClient
                .from('work_logs')
                .select('assistant_id, created_at, points_awarded')
                .gte('created_at', yearAgo.toISOString());

            const dayMap = {};
            (allLogs || []).forEach(l => {
                const d = new Date(l.created_at);
                const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
                dayMap[key] = (dayMap[key] || 0) + 1;
            });

            const cellSize = 11, gap = 3;
            const weeks = 53;
            const w = weeks * (cellSize + gap);
            const h = 7 * (cellSize + gap);
            const today = new Date(); today.setHours(0,0,0,0);
            const startDate = new Date(today); startDate.setDate(startDate.getDate() - (weeks * 7 - 1));
            while (startDate.getDay() !== 0) startDate.setDate(startDate.getDate() - 1);

            let rects = '';
            let maxVal = 1;
            Object.values(dayMap).forEach(v => { if (v > maxVal) maxVal = v; });

            for (let w_i = 0; w_i < weeks; w_i++) {
                for (let d_i = 0; d_i < 7; d_i++) {
                    const cellDate = new Date(startDate);
                    cellDate.setDate(startDate.getDate() + w_i * 7 + d_i);
                    if (cellDate > today) continue;
                    const key = `${cellDate.getFullYear()}-${String(cellDate.getMonth()+1).padStart(2,'0')}-${String(cellDate.getDate()).padStart(2,'0')}`;
                    const count = dayMap[key] || 0;
                    const intensity = count === 0 ? 0 : 0.2 + (count / maxVal) * 0.8;
                    const color = count === 0 ? `var(--bg-surface-raised)` : `rgba(200,30,77,${intensity})`;
                    const x = w_i * (cellSize + gap);
                    const y = d_i * (cellSize + gap);
                    const dateStr = cellDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
                    rects += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="${color}"><title>${dateStr}: ${count}</title></rect>`;
                }
            }
            heatmapWrap.innerHTML = `<svg width="100%" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMinYMin meet" style="display:block;">${rects}</svg>`;

            const thirtyAgo = new Date(); thirtyAgo.setDate(thirtyAgo.getDate() - 30);
            const sixtyAgo = new Date(); sixtyAgo.setDate(sixtyAgo.getDate() - 60);
            const { data: last30 } = await supabaseClient
                .from('work_logs').select('points_awarded, created_at')
                .gte('created_at', thirtyAgo.toISOString());
            const { data: prev30 } = await supabaseClient
                .from('work_logs').select('points_awarded, created_at')
                .gte('created_at', sixtyAgo.toISOString())
                .lt('created_at', thirtyAgo.toISOString());

            const sum30 = (last30 || []).reduce((s, l) => s + (l.points_awarded || 0), 0);
            const sumPrev = (prev30 || []).reduce((s, l) => s + (l.points_awarded || 0), 0);
            const trend = sumPrev === 0 ? (sum30 > 0 ? 100 : 0) : Math.round(((sum30 - sumPrev) / sumPrev) * 100);

            document.getElementById('velocity-value').textContent = sum30 + ' XP';
            const trendEl = document.getElementById('velocity-trend');
            trendEl.innerHTML = trend >= 0
                ? `${icon('arrowUp', 10)}<span>+${trend}%</span>`
                : `${icon('arrowDown', 10)}<span>${trend}%</span>`;
            trendEl.className = `mini-chart-trend ${trend >= 0 ? 'trend-up' : 'trend-down'}`;

            const bars = [];
            for (let i = 29; i >= 0; i--) {
                const d = new Date(); d.setDate(d.getDate() - i); d.setHours(0,0,0,0);
                let xp = 0;
                (last30 || []).forEach(l => {
                    const ld = new Date(l.created_at); ld.setHours(0,0,0,0);
                    if (ld.getTime() === d.getTime()) xp += l.points_awarded || 0;
                });
                bars.push(xp);
            }
            const maxBar = Math.max(...bars, 1);
            const barsHtml = bars.map((v, i) => {
                const h = (v / maxBar) * 100;
                return `<div style="flex:1; display:flex; align-items:flex-end; justify-content:center;">
                    <div style="width:70%; height:${h}%; background:var(--accent); border-radius:2px 2px 0 0; min-height:${v > 0 ? '2px' : '1px'}; opacity:${v > 0 ? 0.8 : 0.15}; transition:all 0.5s; transition-delay:${i*12}ms;"></div>
                </div>`;
            }).join('');
            document.getElementById('velocity-chart').innerHTML = `<div style="display:flex; height:100%; align-items:flex-end; gap:1px;">${barsHtml}</div>`;

            const { data: tasks } = await supabaseClient.from('tasks').select('status');
            const total = (tasks || []).length;
            const done = (tasks || []).filter(t => t.status === 'done').length;
            const active = total - done;

            document.getElementById('burndown-value').textContent = `${active} / ${total}`;
            const bdTrend = document.getElementById('burndown-trend');
            const donePercent = total > 0 ? Math.round((done / total) * 100) : 0;
            bdTrend.innerHTML = `${icon('checkCircle', 10)}<span>${donePercent}%</span>`;
            bdTrend.className = 'mini-chart-trend trend-up';

            const r = 42, c = 2 * Math.PI * r;
            const offset = c - (donePercent / 100) * c;
            document.getElementById('burndown-chart').innerHTML = `
                <svg viewBox="0 0 120 120" style="width:100%; height:100%; max-height:130px; display:block; margin:auto;">
                    <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--border)" stroke-width="8"/>
                    <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--accent)" stroke-width="8"
                        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
                        transform="rotate(-90 60 60)" style="transition: stroke-dashoffset 1s cubic-bezier(.22,1,.36,1);"/>
                    <text x="60" y="60" text-anchor="middle" dy=".35em" fill="var(--text-primary)" font-size="20" font-weight="600" font-family="Inter">${donePercent}%</text>
                </svg>
            `;
        }

        async function loadAdminPanel() {
            const role = currentUserData ? currentUserData.role : null;
            const canEdit = role === 'head' || role === 'deputy_head';
            const isViewerRole = role === 'founder' || role === 'manager';
            if (!currentUserData || !(canEdit || isViewerRole)) return;
            const container = document.getElementById('admin-data');
            container.innerHTML = Array.from({ length: 4 }).map(() => `
                <div class="skel-row">
                    <div class="skel avatar"></div>
                    <div class="skel line"></div>
                    <div class="skel line short"></div>
                </div>
            `).join('');
            const { data: assistants, error } = await supabaseClient
                .from('assistants').select('*').order('points', { ascending: false });
            const pendingCard = document.getElementById('pending-approvals-card');
            const pendingContainer = document.getElementById('pending-approvals-list');
            if (error) {
                container.innerHTML = `<p style="text-align:center; color:var(--danger); padding:20px 0; font-size:12px;">Ошибка: ${error.message}</p>`;
                if (pendingCard) pendingCard.style.display = 'none';
                return;
            }
            const pending = (assistants || []).filter(a => !a.approved);
            const approved = (assistants || []).filter(a => a.approved);
            if (pendingCard) {
                if (canEdit && pending.length > 0) {
                    pendingCard.style.display = 'block';
                    pendingContainer.innerHTML = pending.map(u => `
                        <div class="admin-row">
                            <div class="admin-row-name">${escapeHtml(u.name)} <span style="color:var(--text-muted); font-weight:400; font-size:11px;">— ${escapeHtml(u.email || '')}</span></div>
                            <div class="admin-row-controls">
                                <button class="save-row-btn" onclick="adminApproveUser('${u.id}')">${icon('check', 12)}<span>Одобрить</span></button>
                                <button class="delete-row-btn" onclick="adminRejectUser('${u.id}')">${icon('x', 12)}<span>Отклонить</span></button>
                            </div>
                        </div>
                    `).join('');
                } else {
                    pendingCard.style.display = 'none';
                }
            }
            if (!approved || approved.length === 0) {
                container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px 0; font-size:12px;">Список пуст</p>`;
                return;
            }
            approved.forEach(u => { window._assistantMap[u.id] = u; });
            const isCurrentHead = role === 'head';
            const roleLabelMap = { head: 'Head', deputy_head: 'Deputy Head', founder: 'Founder', manager: 'Manager', assistant: 'Assistant' };
            if (!canEdit) {
                container.innerHTML = approved.map((user) => {
                    const isSelf = currentUserData.id === user.id;
                    const profileBlock = `
                        <div class="admin-row-profile" id="profile-${user.id}" style="display:none;">
                            <span><b>Email:</b> ${escapeHtml(user.email || '—')}</span>
                            <span><b>Отчётов:</b> ${user.tasks_count || 0}</span>
                            <span><b>Последний визит:</b> ${formatLastSeen(user.last_seen)}</span>
                            <div class="xp-chart-wrap" id="xp-chart-wrap-${user.id}">
                                <div class="xp-chart-loading"><div class="skel"></div></div>
                            </div>
                        </div>
                    `;
                    return `
                        <div class="admin-row">
                            <div class="admin-row-name">${escapeHtml(user.name)}${isSelf ? ' <span style="color:var(--text-muted); font-weight:400; font-size:11px;">(ты)</span>' : ''} <span style="color:var(--text-muted); font-weight:400; font-size:11px;">— ${roleLabelMap[user.role] || user.role} · ${user.points || 0} XP</span></div>
                            <div class="admin-row-controls">
                                <button class="view-row-btn" onclick="toggleProfileCard('${user.id}')">${icon('eye', 12)}<span>Профиль</span></button>
                            </div>
                            ${profileBlock}
                        </div>
                    `;
                }).join('');
                return;
            }
            container.innerHTML = approved.map((user) => {
                const isSelf = currentUserData.id === user.id;
                const profileBlock = `
                    <div class="admin-row-profile" id="profile-${user.id}" style="display:none;">
                        <span><b>Email:</b> ${escapeHtml(user.email || '—')}</span>
                        <span><b>Отчётов:</b> ${user.tasks_count || 0}</span>
                        <span><b>Последний визит:</b> ${formatLastSeen(user.last_seen)}</span>
                        <div class="xp-chart-wrap" id="xp-chart-wrap-${user.id}">
                            <div class="xp-chart-loading"><div class="skel"></div></div>
                        </div>
                    </div>
                `;
                const viewBtn = `<button class="view-row-btn" onclick="toggleProfileCard('${user.id}')">${icon('eye', 12)}<span>Профиль</span></button>`;
                const isLockedRole = user.role === 'head' || user.role === 'founder' || user.role === 'manager';
                if (isLockedRole && !isCurrentHead) {
                    return `
                        <div class="admin-row">
                            <div class="admin-row-name">${escapeHtml(user.name)} <span class="role-lock-note">— ${roleLabelMap[user.role]}, ${user.points || 0} XP, управление недоступно</span></div>
                            <div class="admin-row-controls">${viewBtn}</div>
                            ${profileBlock}
                        </div>
                    `;
                }
                const headOnlyOptions = isCurrentHead ? `
                    <option value="head" ${user.role === 'head' ? 'selected' : ''}>Head</option>
                    <option value="founder" ${user.role === 'founder' ? 'selected' : ''}>Founder</option>
                    <option value="manager" ${user.role === 'manager' ? 'selected' : ''}>Manager</option>
                ` : '';
                const canDelete = !isSelf && (isCurrentHead || user.role === 'assistant');
                return `
                    <div class="admin-row">
                        <div class="admin-row-name">${escapeHtml(user.name)}${isSelf ? ' <span style="color:var(--text-muted); font-weight:400; font-size:11px;">(ты)</span>' : ''} <span style="color:var(--text-muted); font-weight:400; font-size:11px;">— ${user.points || 0} XP</span></div>
                        <div class="admin-row-controls">
                            <select class="role-select" id="role-${user.id}">
                                <option value="assistant" ${user.role === 'assistant' ? 'selected' : ''}>Assistant</option>
                                <option value="deputy_head" ${user.role === 'deputy_head' ? 'selected' : ''}>Deputy Head</option>
                                ${headOnlyOptions}
                            </select>
                            <input type="number" class="points-input" id="points-${user.id}" placeholder="+ баллов">
                            <button class="save-row-btn" onclick="adminSaveUser('${user.id}')">${icon('save', 12)}<span>Сохранить</span></button>
                            ${canDelete ? `<button class="delete-row-btn" onclick="adminDeleteUser('${user.id}')">${icon('trash2', 12)}<span>Удалить</span></button>` : ''}
                            ${viewBtn}
                        </div>
                        ${profileBlock}
                    </div>
                `;
            }).join('');
        }

        async function adminApproveUser(userId) {
            const u = window._assistantMap[userId];
            const userName = u ? u.name : 'пользователь';
            const { error } = await supabaseClient.from('assistants').update({ approved: true }).eq('id', userId);
            if (error) return showToast('Ошибка: ' + error.message, true);
            notifyUser(userId, `Твоя заявка одобрена. Добро пожаловать в команду!`);
            showToast(`«${userName}» одобрен`);
            loadAdminPanel();
        }

        async function adminRejectUser(userId) {
            const u = window._assistantMap[userId];
            const userName = u ? u.name : 'пользователь';
            if (!confirm(`Отклонить заявку «${userName}»? Запись удалится из базы.`)) return;
            const { error } = await supabaseClient.from('assistants').delete().eq('id', userId);
            if (error) return showToast('Ошибка: ' + error.message, true);
            showToast(`Заявка «${userName}» отклонена`);
            loadAdminPanel();
        }

        async function adminDeleteUser(userId) {
            const u = window._assistantMap[userId];
            const userName = u ? u.name : 'пользователь';
            if (!confirm(`Удалить аккаунт «${userName}» из базы навсегда?`)) return;
            // Связанные таблицы обрабатываются на уровне БД через FK ON DELETE:
            // work_logs / task_completions / notifications удаляются каскадно,
            // task_comments.author_id и tasks.assigned_to/created_by становятся
            // NULL ("удалённый ассистент"), а не блокируют удаление.
            const { error } = await supabaseClient.from('assistants').delete().eq('id', userId);
            if (error) { showToast('Ошибка удаления: ' + error.message, true); return; }
            showToast(`Аккаунт «${userName}» удалён`);
            loadLeaderboard();
            loadAdminPanel();
        }

        async function adminSaveUser(userId) {
            const newRole = document.getElementById(`role-${userId}`).value;
            const pointsInput = document.getElementById(`points-${userId}`);
            const delta = parseInt(pointsInput.value) || 0;
            const { data: current, error: fetchErr } = await supabaseClient.from('assistants').select('points').eq('id', userId).single();
            if (fetchErr) return showToast('Ошибка: ' + fetchErr.message, true);
            const newPoints = (current.points || 0) + delta;
            const { error } = await supabaseClient.from('assistants').update({ role: newRole, points: newPoints }).eq('id', userId);
            if (error) { showToast('Ошибка сохранения: ' + error.message, true); return; }
            if (delta) notifyUser(userId, `Тебе начислено ${delta > 0 ? '+' : ''}${delta} XP. Баланс: ${newPoints} XP`);
            showToast(delta ? `Начислено ${delta > 0 ? '+' : ''}${delta} XP` : 'Изменения сохранены');
            pointsInput.value = '';
            loadLeaderboard();
            loadAdminPanel();
            if (userId === currentUserData.id) checkSession();
        }

        let assigneeOptionsLoaded = false;
        async function toggleTaskEditor() {
            const editor = document.getElementById('task-editor');
            const opening = editor.style.display === 'none';
            editor.style.display = opening ? 'flex' : 'none';
            if (opening && !assigneeOptionsLoaded) await loadAssigneeOptions();
        }

        async function loadAssigneeOptions() {
            const { data: assistants, error } = await supabaseClient.from('assistants').select('id, name').order('name');
            if (error) return;
            const select = document.getElementById('task-assignee-select');
            assistants.forEach((a) => {
                const opt = document.createElement('option');
                opt.value = a.id;
                opt.textContent = a.name;
                select.appendChild(opt);
            });
            assigneeOptionsLoaded = true;
        }

        async function createTask() {
            const title = document.getElementById('task-title-input').value.trim();
            const description = document.getElementById('task-desc-input').value.trim();
            const assignee = document.getElementById('task-assignee-select').value || null;
            const dueDate = document.getElementById('task-due-input').value || null;
            if (!title) return showToast('Введи название задачи', true);
            const { error } = await supabaseClient.from('tasks').insert([{
                title, description, assigned_to: assignee, created_by: currentUserData.id,
                status: 'todo', due_date: dueDate
            }]);
            if (error) return showToast('Ошибка: ' + error.message, true);
            if (assignee) {
                notifyUser(assignee, `Новая личная задача: «${title}»`);
            } else {
                const { data: allAssistants } = await supabaseClient.from('assistants').select('id').eq('role', 'assistant');
                notifyMany((allAssistants || []).map(a => a.id), `Новая общая задача: «${title}»`);
            }
            document.getElementById('task-title-input').value = '';
            document.getElementById('task-desc-input').value = '';
            document.getElementById('task-assignee-select').value = '';
            document.getElementById('task-due-input').value = '';
            document.getElementById('task-editor').style.display = 'none';
            showToast('Задача создана');
            loadTasks();
        }

        async function deleteTask(taskId) {
            if (!confirm('Удалить задачу?')) return;
            const { error } = await supabaseClient.from('tasks').delete().eq('id', taskId);
            if (error) return showToast('Ошибка: ' + error.message, true);
            showToast('Задача удалена');
            loadTasks();
        }

        async function submitMyCompletion(taskId) {
            const { error } = await supabaseClient.from('task_completions').upsert(
                { task_id: taskId, assistant_id: currentUserData.id, submitted_at: new Date().toISOString(), confirmed: false },
                { onConflict: 'task_id,assistant_id' }
            );
            if (error) return showToast('Ошибка: ' + error.message, true);
            showToast('Отправлено на проверку');
            loadTasks();
        }

        async function cancelMyCompletion(taskId) {
            const { error } = await supabaseClient.from('task_completions').delete()
                .eq('task_id', taskId).eq('assistant_id', currentUserData.id);
            if (error) return showToast('Ошибка: ' + error.message, true);
            loadTasks();
        }

        async function confirmCompletion(taskId, assistantId) {
            const a = window._assistantMap[assistantId];
            const assistantName = a ? a.name : 'ассистент';
            if (!confirm(`Подтвердить выполнение задачи: ${assistantName}?`)) return;
            const { error } = await supabaseClient.from('task_completions').update({
                confirmed: true, confirmed_by: currentUserData.id, confirmed_at: new Date().toISOString()
            }).eq('task_id', taskId).eq('assistant_id', assistantId);
            if (error) return showToast('Ошибка: ' + error.message, true);
            const { data: task } = await supabaseClient.from('tasks').select('assigned_to').eq('id', taskId).single();
            const { data: comps } = await supabaseClient.from('task_completions').select('confirmed').eq('task_id', taskId);
            let totalNeeded = 1;
            if (task && !task.assigned_to) {
                const { data: allAssistants } = await supabaseClient.from('assistants').select('id').eq('role', 'assistant');
                totalNeeded = (allAssistants || []).length;
            }
            const confirmedNow = (comps || []).filter(c => c.confirmed).length;
            if (totalNeeded > 0 && confirmedNow >= totalNeeded) {
                await supabaseClient.from('tasks').update({ status: 'done' }).eq('id', taskId);
                showToast('Задача закрыта командой');
            } else {
                showToast(`Подтверждено для ${assistantName}`);
            }
            loadTasks();
        }

        async function updateTaskStatus(taskId, status) {
            const { error } = await supabaseClient.from('tasks').update({ status }).eq('id', taskId);
            if (error) return showToast('Ошибка: ' + error.message, true);
            loadTasks();
        }

        async function toggleComments(taskId) {
            const box = document.getElementById(`comments-${taskId}`);
            const opening = box.style.display === 'none';
            box.style.display = opening ? 'block' : 'none';
            if (opening) loadComments(taskId);
        }

        async function loadComments(taskId) {
            const listEl = document.getElementById(`comments-list-${taskId}`);
            listEl.innerHTML = `<p style="color:var(--text-muted); font-size:11px;">Загрузка...</p>`;
            const [{ data: comments, error }, { data: assistants }] = await Promise.all([
                supabaseClient.from('task_comments').select('*').eq('task_id', taskId).order('created_at', { ascending: true }),
                supabaseClient.from('assistants').select('id, name')
            ]);
            if (error) { listEl.innerHTML = `<p style="color:var(--danger); font-size:11px;">Ошибка: ${error.message}</p>`; return; }
            const nameMap = {};
            (assistants || []).forEach(a => nameMap[a.id] = a.name);
            if (!comments || comments.length === 0) {
                listEl.innerHTML = `<p style="color:var(--text-muted); font-size:11px;">Пока тихо.</p>`;
                return;
            }
            listEl.innerHTML = comments.map(c => {
                const name = nameMap[c.author_id] || 'Удалённый ассистент';
                return `
                    <div class="comment-item">
                        <div class="comment-avatar" style="background:${avatarColor(name)}">${name.charAt(0).toUpperCase()}</div>
                        <div class="comment-body">
                            <div class="comment-head"><b>${escapeHtml(name)}</b> · ${timeAgo(c.created_at)}</div>
                            <div class="comment-text">${escapeHtml(c.body)}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        async function postComment(taskId) {
            const input = document.getElementById(`comment-input-${taskId}`);
            const body = input.value.trim();
            if (!body) return;
            const { error } = await supabaseClient.from('task_comments').insert([{ task_id: taskId, author_id: currentUserData.id, body }]);
            if (error) return showToast('Ошибка: ' + error.message, true);
            input.value = '';
            loadComments(taskId);
        }

        function renderTaskCard(task, assignees, compMap, assistantMap) {
            const role = currentUserData.role;
            const canEdit = role === 'head' || role === 'deputy_head';
            const isAssistant = role === 'assistant';
            const isViewerRole = role === 'founder' || role === 'manager';
            const today = new Date(); today.setHours(0, 0, 0, 0);
            const due = task.due_date ? new Date(task.due_date) : null;
            const isOverdue = due && due < today && task.status !== 'done';
            const dueText = task.due_date
                ? `<span class="task-due ${isOverdue ? 'overdue' : ''}">${isOverdue ? `${icon('flame', 10)} Просрочено · ` : `${icon('calendar', 10)} До `}${due.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span>`
                : '';
            const statusMeta = {
                todo: { label: 'К выполнению' },
                in_progress: { label: 'В работе' },
                done: { label: 'Готово' }
            };
            const status = task.status || 'todo';
            const sm = statusMeta[status] || statusMeta.todo;
            const dot = `<span class="status-dot"></span>`;
            const statusControl = canEdit
                ? `<select class="status-select status-${status}" onchange="updateTaskStatus('${task.id}', this.value)">
                       ${Object.entries(statusMeta).map(([v, m]) => `<option value="${v}" ${status === v ? 'selected' : ''}>${m.label}</option>`).join('')}
                   </select>`
                : `<span class="status-pill status-${status}">${dot}${sm.label}</span>`;
            const assigneeNote = task.assigned_to
                ? `<span class="task-assignee-note">${escapeHtml((assistantMap[task.assigned_to] || {}).name || '?')}</span>`
                : '';
            const total = assignees.length;
            const confirmedCount = assignees.filter(a => compMap[a.id] && compMap[a.id].confirmed).length;
            const avatarsHtml = assignees.map(a => {
                const c = compMap[a.id];
                const st = c ? (c.confirmed ? 'confirmed' : 'pending') : 'todo';
                const label = st === 'confirmed' ? 'подтверждено' : st === 'pending' ? 'на проверке' : 'не начато';
                const clickable = canEdit && st === 'pending';
                const onclick = clickable ? `onclick="confirmCompletion('${task.id}','${a.id}')"` : '';
                return `<div class="task-avatar ${st} ${clickable ? 'clickable' : ''}" style="background:${avatarColor(a.name)}" title="${escapeHtml(a.name)} — ${label}" ${onclick}>${(a.name || '?').charAt(0).toUpperCase()}</div>`;
            }).join('');
            const progressHtml = total > 0 ? `
                <div class="task-progress-row">
                    <div class="task-avatars">${avatarsHtml}</div>
                    <span class="task-progress-frac">${confirmedCount}/${total} подтверждено</span>
                </div>
                ${total > 1 ? `<div class="task-progress-bar"><div class="task-progress-fill" style="width:${(confirmedCount / total * 100)}%"></div></div>` : ''}
            ` : '';
            const myId = currentUserData.id;
            const amAssignee = assignees.some(a => a.id === myId);
            let myControl = '';
            if (amAssignee && isAssistant) {
                const mine = compMap[myId];
                if (!mine) {
                    myControl = `<button class="task-mark-btn" onclick="submitMyCompletion('${task.id}')">${icon('check', 12)}<span>Отметить выполненной</span></button>`;
                } else if (!mine.confirmed) {
                    myControl = `<div class="task-pending-note">${icon('clock', 11)}<span>На проверке</span><button class="task-cancel-btn" onclick="cancelMyCompletion('${task.id}')">отменить</button></div>`;
                } else {
                    myControl = `<div class="task-confirmed-note">${icon('checkCircle', 12)}<span>Подтверждено</span></div>`;
                }
            }
            const commentCount = task._commentCount || 0;
            const commentLabel = commentCount > 0 ? `${icon('messageCircle', 12)}<span>${commentCount}</span>` : `${icon('messageCircle', 12)}<span>Комментировать</span>`;
            const commentInputRow = isViewerRole ? '' : `
                <div class="comment-input-row">
                    <input type="text" class="comment-input" id="comment-input-${task.id}" placeholder="Написать комментарий..." onkeydown="if(event.key==='Enter'){event.preventDefault();postComment('${task.id}');}">
                    <button class="comment-send-btn" onclick="postComment('${task.id}')">${ICONS.send(14)}</button>
                </div>
            `;
            return `
                <div class="task-card status-${status}">
                    <div class="task-status-row">
                        ${statusControl}
                        ${dueText}
                    </div>
                    <div class="task-title">${escapeHtml(task.title)}${assigneeNote}</div>
                    ${task.description ? `<div class="task-desc">${escapeHtml(task.description)}</div>` : ''}
                    ${progressHtml}
                    ${myControl}
                    <div class="task-footer">
                        <button class="comments-toggle-btn" onclick="toggleComments('${task.id}')">${commentLabel}</button>
                        ${canEdit ? `<button class="delete-row-btn" style="margin-left:auto;" onclick="deleteTask('${task.id}')">${icon('trash2', 12)}<span>Удалить</span></button>` : ''}
                    </div>
                    <div class="task-comments" id="comments-${task.id}" style="display:none;">
                        <div class="comments-list" id="comments-list-${task.id}"></div>
                        ${commentInputRow}
                    </div>
                </div>
            `;
        }

        async function loadTasks() {
            if (!currentUserData) return;
            const container = document.getElementById('tasks-list');
            container.innerHTML = Array.from({ length: 3 }).map(() => `
                <div class="skel-task-card">
                    <div class="skel line w60"></div>
                    <div class="skel line w90"></div>
                </div>
            `).join('');
            const [tasksRes, assistantsRes, completionsRes, commentsRes] = await Promise.all([
                supabaseClient.from('tasks').select('*').order('created_at', { ascending: false }),
                supabaseClient.from('assistants').select('id, name, role'),
                supabaseClient.from('task_completions').select('*'),
                supabaseClient.from('task_comments').select('task_id')
            ]);
            if (tasksRes.error) {
                container.innerHTML = `<p style="text-align:center; color:var(--danger); padding:20px 0; font-size:12px;">Ошибка: ${tasksRes.error.message}</p>`;
                return;
            }
            const tasks = tasksRes.data || [];
            const allAssistants = assistantsRes.data || [];
            const completions = completionsRes.data || [];
            const comments = commentsRes.data || [];
            allAssistants.forEach(a => { window._assistantMap[a.id] = a; });
            if (tasks.length === 0) {
                const canCreate = currentUserData.role === 'head' || currentUserData.role === 'deputy_head';
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">${ICONS.listTodo(36)}</div>
                        <div class="empty-title">Задач пока нет</div>
                        <div class="empty-desc">${canCreate ? 'Создай первую задачу.' : 'Новые задачи появятся, как только их создаст руководитель.'}</div>
                        ${canCreate ? `<button class="btn-primary" onclick="toggleTaskEditor()">${icon('plus', 12)}<span>Новая задача</span></button>` : ''}
                    </div>`;
                return;
            }
            const assistantMap = {};
            allAssistants.forEach(a => assistantMap[a.id] = a);
            const onlyAssistants = allAssistants.filter(a => a.role === 'assistant');
            const compByTask = {};
            completions.forEach(c => {
                if (!compByTask[c.task_id]) compByTask[c.task_id] = {};
                compByTask[c.task_id][c.assistant_id] = c;
            });
            const commentCountByTask = {};
            comments.forEach(c => { commentCountByTask[c.task_id] = (commentCountByTask[c.task_id] || 0) + 1; });
            tasks.forEach(t => { t._commentCount = commentCountByTask[t.id] || 0; });
            const activeTasks = tasks.filter(t => t.status !== 'done');
            const doneTasks = tasks.filter(t => t.status === 'done');
            const generalTasks = activeTasks.filter(t => !t.assigned_to);
            const personalTasks = activeTasks.filter(t => t.assigned_to);
            let html = '';
            if (generalTasks.length > 0) {
                html += `<div class="tasks-section-title">${icon('globe', 12)}<span>Общие задачи</span></div>`;
                html += generalTasks.map(t => renderTaskCard(t, onlyAssistants, compByTask[t.id] || {}, assistantMap)).join('');
            }
            if (personalTasks.length > 0) {
                html += `<div class="tasks-section-title">${icon('user', 12)}<span>Личные задачи</span></div>`;
                html += personalTasks.map(t => {
                    const a = assistantMap[t.assigned_to];
                    return renderTaskCard(t, a ? [a] : [], compByTask[t.id] || {}, assistantMap);
                }).join('');
            }
            if (doneTasks.length > 0) {
                html += `
                    <div class="tasks-done-toggle" onclick="toggleDoneTasks()">
                        <span id="done-toggle-icon">${ICONS.chevronRight(12)}</span>
                        ${icon('checkCircle', 12)}<span>Выполненные (${doneTasks.length})</span>
                    </div>
                    <div class="tasks-done-list" id="tasks-done-list" style="display:none;">
                        ${doneTasks.map(t => {
                            const a = t.assigned_to ? (assistantMap[t.assigned_to] ? [assistantMap[t.assigned_to]] : []) : onlyAssistants;
                            return renderTaskCard(t, a, compByTask[t.id] || {}, assistantMap);
                        }).join('')}
                    </div>
                `;
            }
            container.innerHTML = html || `<p class="tasks-empty">Задач пока нет.</p>`;
        }

        function toggleDoneTasks() {
            const list = document.getElementById('tasks-done-list');
            const iconEl = document.getElementById('done-toggle-icon');
            const opening = list.style.display === 'none';
            list.style.display = opening ? 'block' : 'none';
            iconEl.innerHTML = opening ? ICONS.chevronDown(12) : ICONS.chevronRight(12);
        }

        const LOGS_PAGE_SIZE = 15;
        let logsPage = 0;

        async function loadLogsTab(page = logsPage) {
            const privilegedRoles = ['head', 'deputy_head', 'founder', 'manager'];
            if (!currentUserData || !privilegedRoles.includes(currentUserData.role)) return;
            logsPage = page;
            const feedEl = document.getElementById('logs-feed');
            const overviewEl = document.getElementById('personal-tasks-overview');
            feedEl.innerHTML = Array.from({ length: 4 }).map(() => `
                <div class="skel-row">
                    <div style="flex:1;">
                        <div class="skel line" style="width:55%; margin-bottom:6px;"></div>
                        <div class="skel line short" style="height:9px;"></div>
                    </div>
                    <div class="skel badge"></div>
                </div>
            `).join('');
            const from = page * LOGS_PAGE_SIZE;
            const to = from + LOGS_PAGE_SIZE - 1;
            const [logsRes, assistantsRes, tasksRes, compRes] = await Promise.all([
                supabaseClient.from('work_logs').select('*', { count: 'exact' }).order('created_at', { ascending: false }).range(from, to),
                supabaseClient.from('assistants').select('id, name, role').eq('role', 'assistant').order('name'),
                supabaseClient.from('tasks').select('*').not('assigned_to', 'is', null),
                supabaseClient.from('task_completions').select('*')
            ]);
            if (logsRes.error) {
                feedEl.innerHTML = `<p style="text-align:center; color:var(--danger); padding:20px 0; font-size:12px;">Ошибка: ${logsRes.error.message}</p>`;
            } else if (!logsRes.data || logsRes.data.length === 0) {
                feedEl.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">${ICONS.fileText(36)}</div>
                        <div class="empty-title">Отчётов пока нет</div>
                        <div class="empty-desc">Записи появятся, как только ассистенты начнут отправлять отчёты.</div>
                        <button class="btn-primary" onclick="switchTab('workspace-tab')">Перейти к форме</button>
                    </div>`;
            } else {
                feedEl.innerHTML = logsRes.data.map(l => `
                    <div class="log-row">
                        <div>
                            <div class="log-row-title">${escapeHtml(l.assistant_name)} — ${escapeHtml(l.task_type)}</div>
                            <div class="log-row-meta">
                                <span>${timeAgo(l.created_at)}</span>
                                ${l.proof_url ? ` · <a href="${escapeHtml(l.proof_url)}" target="_blank" rel="noopener">${icon('link', 9)}<span>доказательство</span></a>` : ''}
                            </div>
                        </div>
                        <span class="points-badge">${l.points_awarded || 0} XP</span>
                    </div>
                `).join('');
            }
            renderLogsPagination(logsRes.count || 0, page);
            const compByTask = {};
            (compRes.data || []).forEach(c => {
                if (!compByTask[c.task_id]) compByTask[c.task_id] = [];
                compByTask[c.task_id].push(c);
            });
            const personalTasks = tasksRes.data || [];
            overviewEl.innerHTML = (assistantsRes.data || []).map(a => {
                const theirTasks = personalTasks.filter(t => t.assigned_to === a.id);
                const taskRows = theirTasks.length
                    ? theirTasks.map(t => {
                        const comps = compByTask[t.id] || [];
                        const mine = comps.find(c => c.assistant_id === a.id);
                        const iconSvg = mine ? (mine.confirmed ? ICONS.checkCircle(11) : ICONS.clock(11)) : ICONS.listChecks(11);
                        return `<div class="log-task-item"><span class="icon-svg" style="width:11px; height:11px; color: ${mine ? (mine.confirmed ? 'var(--role-manager)' : 'var(--role-deputy)') : 'var(--text-muted)'};">${iconSvg}</span><span>${escapeHtml(t.title)}</span></div>`;
                    }).join('')
                    : `<div class="log-task-item" style="color:var(--text-muted);">нет личных задач</div>`;
                return `
                    <div class="log-assistant-block">
                        <div class="admin-row-name">${escapeHtml(a.name)}</div>
                        ${taskRows}
                    </div>
                `;
            }).join('');
        }

        function renderLogsPagination(totalCount, page) {
            const totalPages = Math.max(1, Math.ceil(totalCount / LOGS_PAGE_SIZE));
            let pager = document.getElementById('logs-pagination');
            if (!pager) {
                pager = document.createElement('div');
                pager.id = 'logs-pagination';
                pager.className = 'pagination-row';
                document.getElementById('logs-feed').closest('.card').appendChild(pager);
            }
            if (totalPages <= 1) { pager.innerHTML = ''; return; }
            pager.innerHTML = `
                <button class="page-btn" ${page === 0 ? 'disabled' : ''} onclick="loadLogsTab(${page - 1})">‹</button>
                <span class="page-indicator">${page + 1} / ${totalPages}</span>
                <button class="page-btn" ${page >= totalPages - 1 ? 'disabled' : ''} onclick="loadLogsTab(${page + 1})">›</button>
            `;
        }

        document.getElementById('work-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!currentUserData) return showToast('Ошибка авторизации', true);
            const btn = document.getElementById('submit-log-btn');
            btn.disabled = true;
            const taskSelect = document.getElementById('task-select');
            const pointsToAdd = parseInt(taskSelect.value);
            const taskText = taskSelect.options[taskSelect.selectedIndex].text;
            const proofUrl = document.getElementById('proof-url').value;
            const logEntry = {
                assistant_id: currentUserData.id,
                assistant_name: currentUserData.name,
                task_type: taskText,
                points_awarded: pointsToAdd,
                proof_url: proofUrl
            };
            try {
                if (!navigator.onLine) {
                    const queue = JSON.parse(localStorage.getItem('log_queue') || '[]');
                    queue.push(logEntry);
                    localStorage.setItem('log_queue', JSON.stringify(queue));
                    showToast('Сохранено офлайн');
                    document.getElementById('proof-url').value = '';
                    animateNumber(document.getElementById('stat-xp'), (currentUserData.points || 0) + pointsToAdd, 600, ' XP');
                    animateNumber(document.getElementById('stat-tasks'), (currentUserData.tasks_count || 0) + 1, 600, '');
                    currentUserData.points = (currentUserData.points || 0) + pointsToAdd;
                    currentUserData.tasks_count = (currentUserData.tasks_count || 0) + 1;
                    return;
                }

                const { error: logErr } = await supabaseClient.from('work_logs').insert([logEntry]);
                if (logErr) throw new Error(logErr.message);
                const { error: updateErr } = await supabaseClient.from('assistants').update({
                    points: (currentUserData.points || 0) + pointsToAdd,
                    tasks_count: (currentUserData.tasks_count || 0) + 1
                }).eq('id', currentUserData.id);
                if (updateErr) throw new Error(updateErr.message);
                animateNumber(document.getElementById('stat-xp'), (currentUserData.points || 0) + pointsToAdd, 600, ' XP');
                animateNumber(document.getElementById('stat-tasks'), (currentUserData.tasks_count || 0) + 1, 600, '');
                currentUserData.points = (currentUserData.points || 0) + pointsToAdd;
                currentUserData.tasks_count = (currentUserData.tasks_count || 0) + 1;
                document.getElementById('proof-url').value = '';
                showToast(`+${pointsToAdd} XP`);
                loadLeaderboard();
                analyticsLoaded = false;
                loadAnalytics();
            } catch (err) {
                showToast('Ошибка: ' + err.message, true);
            } finally {
                btn.disabled = false;
            }
        });

        setTimeout(() => {
            if (document.getElementById('loading-view').classList.contains('active')) {
                console.warn('Сессия зависла — показываем форму входа');
                showAuthView();
            }
        }, 8000);

        checkSession();