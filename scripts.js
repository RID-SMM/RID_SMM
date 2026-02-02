const reviews = [
    {
        name: "Александр",
        business: "Автосервис 'Форсаж'",
        text: "Андрей навел порядок в Яндекс.Картах буквально за сутки. Раньше висел старый телефон, и мы даже не знали, сколько клиентов уходило. Сейчас стабильно +2 звонка в день только с карт. Рекомендую!",
        rating: 5
    },
    {
        name: "Елена",
        business: "Студия красоты 'Lush'",
        text: "Заказала пакет 'Быстрая победа'. Были проблемы с отображением в 2ГИС. Теперь профиль выглядит профессионально, добавили актуальное меню услуг. Окна в расписании стали закрываться сами собой.",
        rating: 5
    },
    {
        name: "Михаил",
        business: "Доставка пиццы 'Gusto'",
        text: "Лендинг, который сделал Андрей, окупился за первую неделю. Очень четкая работа, без лишних вопросов. Самое ценное — аудит, который открыл глаза на критические ошибки на нашем старом сайте.",
        rating: 5
    },
    {
        name: "Иван",
        business: "Магазин электроники",
        text: "Внедрение CRM и ИИ-бота сэкономило нам кучу времени менеджеров. Теперь ни один клиент не теряется в нерабочее время. Полный контроль оправдывает свою цену на 200%.",
        rating: 5
    }
];

const faqs = [
    {
        q: "Сколько длится бесплатный аудит?",
        a: "Всего 15-20 минут. Вы оставляете заявку, и я присылаю вам PDF-отчет со скриншотами и конкретным списком ошибок, которые нужно исправить в первую очередь."
    },
    {
        q: "Что именно вы проверяете?",
        a: "Я проверяю актуальность ваших контактов и графиков на Яндекс.Картах, 2ГИС, Google Мой Бизнес, а также техническое состояние вашего сайта или лендинга (скорость загрузки, адаптивность, корректность ссылок)."
    },
    {
        q: "Как быстро я увижу результат?",
        a: "Технические исправления на картах вступают в силу в течение нескольких часов. Основной прирост обращений от клиентов, которые раньше вас не видели, обычно заметен уже на 2-3 день."
    },
    {
        q: "Нужны ли от меня пароли или доступы?",
        a: "Для большинства правок на картах и общего аудита доступы не требуются. Если потребуется настройка CRM или редактирование сайта, мы обсудим безопасный способ передачи доступов."
    }
];

function initReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    
    container.innerHTML = reviews.map(review => `
        <div class="p-6 rounded-2xl bg-slate-900 border border-white/5 flex flex-col justify-between hover:bg-slate-800 transition-all">
            <div>
                <div class="flex gap-1 text-orange-500 mb-4">
                    ${Array(review.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('')}
                </div>
                <p class="text-slate-300 italic mb-6">"${review.text}"</p>
            </div>
            <div>
                <p class="font-bold text-white">${review.name}</p>
                <p class="text-xs text-slate-500">${review.business}</p>
            </div>
        </div>
    `).join('');
}

function initFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = faqs.map((faq, idx) => `
        <div class="border-b border-white/5">
            <button class="w-full py-6 flex items-center justify-between text-left group" onclick="this.nextElementSibling.classList.toggle('hidden')">
                <span class="font-bold text-lg group-hover:text-orange-500 transition-colors">${faq.q}</span>
                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-500"></i>
            </button>
            <div class="hidden pb-6 text-slate-400 leading-relaxed">
                ${faq.a}
            </div>
        </div>
    `).join('');
}

function initForm() {
    const form = document.getElementById('lead-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Отправка...';
        btn.disabled = true;


        setTimeout(() => {
            btn.innerHTML = 'Заявка отправлена! <i data-lucide="check" class="w-4 h-4 ml-2"></i>';
            btn.classList.remove('bg-orange-500');
            btn.classList.add('bg-green-600');
            lucide.createIcons();
            form.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.add('bg-orange-500');
                btn.classList.remove('bg-green-600');
                btn.disabled = false;
                lucide.createIcons();
            }, 3000);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initReviews();
    initFAQ();
    initForm();
    lucide.createIcons();
});
