document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sidebar Toggle Logic ---
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    if(menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    if(closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (sidebar && !sidebar.contains(e.target) && menuToggle && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    // --- Search Interaction ---
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.style.borderColor = '#8b5cf6';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.style.borderColor = 'transparent';
        });
    }

    // --- Quote Rotation (Dashboard & Motivation Page) ---
    const quotes = [
        { text: "\"Take care of your body. It's the only place you have to live.\"", author: "— Jim Rohn" },
        { text: "\"The only bad workout is the one that didn't happen.\"", author: "— Unknown" },
        { text: "\"Motivation is what gets you started. Habit is what keeps you going.\"", author: "— Jim Ryun" },
        { text: "\"To enjoy the glow of good health, you must exercise.\"", author: "— Gene Tunney" },
        { text: "\"Discipline is doing what needs to be done, even if you don't want to do it.\"", author: "— Unknown" }
    ];

    let currentQuoteIndex = 0;
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteCard = document.querySelector('.quote-card');
    const heroQuote = document.getElementById('hero-quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    // Dashboard Quote
    if (quoteCard && quoteText && quoteAuthor) {
        quoteCard.addEventListener('click', () => {
            quoteText.style.opacity = 0;
            quoteAuthor.style.opacity = 0;
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteText.textContent = quotes[currentQuoteIndex].text;
                quoteAuthor.textContent = quotes[currentQuoteIndex].author;
                quoteText.style.opacity = 1;
                quoteAuthor.style.opacity = 1;
            }, 300);
        });
        quoteText.style.transition = 'opacity 0.3s ease';
        quoteAuthor.style.transition = 'opacity 0.3s ease';
    }

    // Motivation Page Quote
    if (newQuoteBtn && heroQuote) {
        newQuoteBtn.addEventListener('click', () => {
            heroQuote.style.opacity = 0;
            setTimeout(() => {
                currentQuoteIndex = (Math.floor(Math.random() * quotes.length));
                heroQuote.textContent = quotes[currentQuoteIndex].text;
                heroQuote.style.opacity = 1;
            }, 300);
        });
        heroQuote.style.transition = 'opacity 0.3s ease';
    }

    // --- Simple Canvas Chart Animation (Dashboard) ---
    const canvas = document.getElementById('caloriesChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.parentElement.clientWidth;
        const height = canvas.height;
        const points = [10, 40, 25, 50, 30, 60, 40];
        const stepX = width / (points.length - 1);
        const maxVal = 70;

        function drawChart() {
            ctx.clearRect(0, 0, width, height);
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(249, 115, 22, 0.4)');
            gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
            
            ctx.beginPath();
            ctx.moveTo(0, height);
            points.forEach((p, i) => {
                const x = i * stepX;
                const y = height - (p / maxVal * height);
                if (i === 0) ctx.lineTo(x, y);
                else {
                    const prevX = (i - 1) * stepX;
                    const prevY = height - (points[i - 1] / maxVal * height);
                    const cpX = (prevX + x) / 2;
                    ctx.quadraticCurveTo(cpX, prevY, prevX + (x - prevX)/2, y);
                    ctx.lineTo(x, y);
                }
            });
            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            points.forEach((p, i) => {
                const x = i * stepX;
                const y = height - (p / maxVal * height);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.strokeStyle = '#f97316';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        window.addEventListener('resize', () => {
            canvas.width = canvas.parentElement.clientWidth;
            drawChart();
        });
        drawChart();
    }

    // --- Workout Videos Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const videoCards = document.querySelectorAll('.video-card');

    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Active class
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                videoCards.forEach(card => {
                    if(filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Meal Plan Checks & Habit Checks (Local Storage) ---
    const checkBtns = document.querySelectorAll('.btn-check, .habit-check');
    
    // Load state
    checkBtns.forEach((btn, index) => {
        const page = window.location.pathname;
        const key = `check-${page}-${index}`;
        const isChecked = localStorage.getItem(key) === 'true';
        
        if (btn.type === 'checkbox') {
            btn.checked = isChecked;
        } else {
            if(isChecked) btn.classList.add('checked');
        }

        btn.addEventListener('click', () => {
            if (btn.type === 'checkbox') {
                 localStorage.setItem(key, btn.checked);
            } else {
                btn.classList.toggle('checked');
                localStorage.setItem(key, btn.classList.contains('checked'));
            }
        });
    });

    // --- Calendar Date Highlighting ---
    const calendarDays = document.querySelectorAll('.calendar-days .day');
    calendarDays.forEach(day => {
        if(!day.classList.contains('empty')) {
            day.addEventListener('click', () => {
                calendarDays.forEach(d => d.style.background = ''); // Reset others (simple logic)
                // Restore current day style if needed, but for now just highlight click
                if(!day.classList.contains('current')) {
                    day.style.background = '#f1f5f9';
                }
            });
        }
    });

    // --- NEW: Calendar Logic (Add Events) ---
    const calendarContainer = document.getElementById('calendar-days');
    const eventModal = document.getElementById('event-modal');
    const saveEventBtn = document.getElementById('save-event-btn');
    const eventTitleInput = document.getElementById('event-title');
    const eventTypeSelect = document.getElementById('event-type');
    let selectedDay = null;

    // Initialize Calendar (Simple 31 days)
    if (calendarContainer) {
        function renderCalendar() {
            calendarContainer.innerHTML = '';
            
            // Add some empty days for offset
            for(let i=0; i<2; i++) {
                const empty = document.createElement('div');
                empty.className = 'day empty';
                calendarContainer.appendChild(empty);
            }

            for (let i = 1; i <= 31; i++) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';
                dayDiv.textContent = i;
                if (i === 11) dayDiv.classList.add('current');

                // Load events
                const events = JSON.parse(localStorage.getItem(`events-day-${i}`)) || [];
                events.forEach(ev => {
                    const el = document.createElement('div');
                    el.className = `event ${ev.type}`;
                    el.textContent = ev.title;
                    dayDiv.appendChild(el);
                });

                dayDiv.addEventListener('click', () => {
                    selectedDay = i;
                    eventModal.classList.add('open');
                });

                calendarContainer.appendChild(dayDiv);
            }
        }
        renderCalendar();

        // Save Event
        if(saveEventBtn) {
            saveEventBtn.addEventListener('click', () => {
                const title = eventTitleInput.value;
                const type = eventTypeSelect.value;
                if(title && selectedDay) {
                    const events = JSON.parse(localStorage.getItem(`events-day-${selectedDay}`)) || [];
                    events.push({ title, type });
                    localStorage.setItem(`events-day-${selectedDay}`, JSON.stringify(events));
                    
                    renderCalendar();
                    eventModal.classList.remove('open');
                    eventTitleInput.value = '';
                }
            });
        }
    }

    // Modal Close
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if(eventModal) eventModal.classList.remove('open');
        });
    });

    // --- NEW: Profile Logic (Save/Load) ---
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        // Load Data
        const savedName = localStorage.getItem('profile-name');
        const savedEmail = localStorage.getItem('profile-email');
        const savedBio = localStorage.getItem('profile-bio');
        
        if(savedName) document.getElementById('profile-name').value = savedName;
        if(savedEmail) document.getElementById('profile-email').value = savedEmail;
        if(savedBio) document.getElementById('profile-bio').value = savedBio;

        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('profile-name', document.getElementById('profile-name').value);
            localStorage.setItem('profile-email', document.getElementById('profile-email').value);
            localStorage.setItem('profile-bio', document.getElementById('profile-bio').value);
            
            alert('Profile saved successfully!');
            updateHeaderProfile();
        });
    }

    // Update Header Profile Name
    function updateHeaderProfile() {
        const savedName = localStorage.getItem('profile-name');
        const headerName = document.getElementById('header-name');
        if(savedName && headerName) {
            headerName.textContent = savedName;
        }
    }
    updateHeaderProfile();

    // --- NEW: Notifications Toggle ---
    const notifBtn = document.getElementById('notif-btn');
    const notifDropdown = document.getElementById('notif-dropdown');

    if(notifBtn && notifDropdown) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            notifDropdown.classList.remove('show');
        });
    }

    // --- NEW: Settings (Dark Mode) ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if(darkModeToggle) {
        // Load state
        if(localStorage.getItem('dark-mode') === 'true') {
            darkModeToggle.checked = true;
            document.body.classList.add('dark-mode');
        }

        darkModeToggle.addEventListener('change', () => {
            if(darkModeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('dark-mode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('dark-mode', 'false');
            }
        });
    }
    // Apply dark mode globally on load
    if(localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

});
