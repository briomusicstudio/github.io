
        import React, { useState, useEffect, useMemo, useCallback, useRef, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import C4 from './audio/C4.mp3'; import D4 from './audio/D4.mp3'; import E4 from './audio/E4.mp3'; import F4 from './audio/F4.mp3';
import G4 from './audio/G4.mp3'; import A4 from './audio/A4.mp3'; import B4 from './audio/B4.mp3';
const CLEF_PATH = 'M314 801Q300 854 291.0 906.0Q282 958 282 1012Q282 1059 288.5 1100.5Q295 1142 307 1177Q320 1217 341.0 1252.5Q362 1288 385.5 1311.0Q409 1334 427 1334Q451 1334 493 1249Q514 1206 524.0 1156.0Q534 1106 534 1049Q534 978 515.0 907.5Q496 837 459.5 775.0Q423 713 372 666L407 498Q422 500 432.0 501.0Q442 502 447 502Q508 502 556.0 467.5Q604 433 632.5 377.0Q661 321 661 254Q661 177 621.5 115.5Q582 54 503 25Q508 8 532 -117Q538 -147 541.0 -164.5Q544 -182 545.0 -195.0Q546 -208 546 -225Q546 -275 521.5 -314.5Q497 -354 455.5 -376.0Q414 -398 363 -398Q311 -398 271.0 -378.5Q231 -359 208.0 -324.5Q185 -290 185 -245Q185 -197 211.5 -165.0Q238 -133 287 -133Q329 -133 355.5 -163.5Q382 -194 382 -236Q382 -272 357.0 -299.0Q332 -326 292 -326H282Q308 -365 364 -365Q433 -365 472.0 -320.0Q511 -275 511 -205Q511 -188 507.0 -159.5Q503 -131 493 -91Q483 -51 477.5 -25.0Q472 1 470 12Q436 2 390 2Q304 2 222 52Q142 102 96.0 184.0Q50 266 50 361Q50 451 91 530Q132 609 192.5 675.0Q253 741 314 801ZM341 826Q364 838 390.0 870.5Q416 903 440.0 945.0Q464 987 479.0 1029.5Q494 1072 494 1106Q494 1142 483.0 1163.0Q472 1184 445 1184Q421 1184 398.5 1162.0Q376 1140 358.5 1103.5Q341 1067 331.0 1022.0Q321 977 321 930Q321 898 327.5 872.0Q334 846 341 826ZM398 379Q371 373 347.0 353.5Q323 334 308.5 306.5Q294 279 294 248Q294 223 307.0 196.5Q320 170 339 154Q352 142 365 136Q380 129 380 123Q380 120 370 117Q332 126 301.5 151.0Q271 176 253.5 211.5Q236 247 236 287Q236 330 253.5 370.0Q271 410 302.5 442.0Q334 474 374 490L345 641Q229 547 174.5 456.5Q120 366 120 277Q120 212 154.0 156.0Q188 100 247.0 65.5Q306 31 380 31Q400 31 420.5 35.0Q441 39 464 45ZM495 55Q593 97 593 227Q593 270 571.0 305.5Q549 341 512.0 362.0Q475 383 429 383Z';

        
        const Star = ({ className, fill = "none" }) => (
            <svg className={className} fill={fill} stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        );
        const Clock = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        );
        const CheckCircle2 = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        );
        const XCircle = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        );
        const Info = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        );
        const RefreshCw = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        );
        const HomeIcon = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        );

        const ico = (children) => ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>);
const Volume2 = ico(<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></>);
const VolumeX = ico(<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></>);
const Menu = ico(<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>);
const Instagram = ico(<><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>);
const Telegram = ico(<><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>);
const TikTok = ico(<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>);
const Close = ico(<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>);

/* --- Локалізація --- */
        const T = {
            uk: {
                app_title: 'СКРИПКОВИЙ КЛЮЧ',
                home: 'Головна', wrong: 'Неправильно', right: 'Правильно', mute: 'Вимкнути звук', unmute: 'Увімкнути звук', volume: 'Гучність', menu: 'Меню', correct_n: 'Правильних', of10: 'з 10',
                home_desc_1: 'Скрипковий ключ (або ключ «соль») — це головний музичний знак на нотному стані. Він показує нам, що нота «соль» першої октави знаходиться саме на другій знизу лінійці!',
                home_desc_2: 'Він відповідає за високі звуки, охоплюючи клавіатуру від першої до четвертої октави.',
                start_octave: 'Початок (1-ша октава)',
                end_octave: 'Кінець (4-та октава)',
                select_section: 'Оберіть розділ у верхньому меню, щоб розпочати',
                sec: 'сек', min: 'хв', choose_time: 'Обери час для виконання:',
                time_out: 'Час вийшов! ⏰', finished: 'Завершено! 🏁',
                result: 'Результат:', play_again: 'Ще раз',
                drag_here: 'Перетягни сюди 🎹',
                notes: ['ДО', 'РЕ', 'МІ', 'ФА', 'СОЛЬ', 'ЛЯ', 'СІ'],
                sec1_title: '🎵 Ноти', sec1_q: 'Обери правильну ноту 🎯',
                sec2_title: '🎹 Клавіші', sec2_q: 'Знайди клавішу для ноти 👇',
                sec3_title: '📈 Рух', sec3_q: 'Куди рухається мелодія? 🤔',
                up: 'ВГОРУ 📈', down: 'ВНИЗ 📉', same: 'НА МІСЦІ ➡️',
                sec4_title: '🦘 Стрибки', sec4_q: 'Визнач характер руху мелодії 🧐',
                steps: 'ПІДРЯД 🚶‍♂️', leaps: 'СТРИБКАМИ 🦘',
                sec5_title: '🎶 Мелодія', sec5_q: 'Які ноти звучать? Обери правильний ряд 🎵',
                sec6_title: '🎸 Граємо', sec6_q: 'Зіграй цю мелодію на інструменті 🎹', play_melody: 'Прослухати мелодію 🔊',
                praise_perfect: ["Ти молодець! На відмінно! 🏆", "Ідеально! Ти справжній маестро! 🌟", "Блискуче! Жодної помилки! 🎉"],
                praise_good: ["Молодець! Гарний результат! 👍", "Дуже добре! Ти робиш успіхи! 🚀"],
                praise_try: ["Не здавайся, спробуй ще! 💪", "Трохи більше уваги, і все вийде! 🎯"]
            },
            ru: {
                app_title: 'СКРИПИЧНЫЙ КЛЮЧ',
                home: 'Главная', wrong: 'Неправильно', right: 'Правильно', mute: 'Выключить звук', unmute: 'Включить звук', volume: 'Громкость', menu: 'Меню', correct_n: 'Правильных', of10: 'из 10',
                home_desc_1: 'Скрипичный ключ (или ключ «соль») — это главный музыкальный знак на нотном стане. Он показывает, что нота «соль» первой октавы находится именно на второй снизу линейке!',
                home_desc_2: 'Он отвечает за высокие звуки, охватывая клавиатуру от первой до четвертой октавы.',
                start_octave: 'Начало (1-я октава)',
                end_octave: 'Конец (4-я октава)',
                select_section: 'Выберите раздел в верхнем меню, чтобы начать',
                sec: 'сек', min: 'мин', choose_time: 'Выбери время для выполнения:',
                time_out: 'Время вышло! ⏰', finished: 'Завершено! 🏁',
                result: 'Результат:', play_again: 'Еще раз',
                drag_here: 'Перетащи сюда 🎹',
                notes: ['ДО', 'РЕ', 'МИ', 'ФА', 'СОЛЬ', 'ЛЯ', 'СИ'],
                sec1_title: '🎵 Ноты', sec1_q: 'Выбери правильную ноту 🎯',
                sec2_title: '🎹 Клавиши', sec2_q: 'Найди клавишу для ноты 👇',
                sec3_title: '📈 Движение', sec3_q: 'Куда движется мелодия? 🤔',
                up: 'ВВЕРХ 📈', down: 'ВНИЗ 📉', same: 'НА МЕСТЕ ➡️',
                sec4_title: '🦘 Прыжки', sec4_q: 'Определи характер движения мелодии 🧐',
                steps: 'ПОДРЯД 🚶‍♂️', leaps: 'СКАЧКАМИ 🦘',
                sec5_title: '🎶 Мелодия', sec5_q: 'Какие ноты звучат? Выбери правильный ряд 🎵',
                sec6_title: '🎸 Играем', sec6_q: 'Сыграй эту мелодию на инструменте 🎹', play_melody: 'Послушать мелодию 🔊',
                praise_perfect: ["Ты молодец! На отлично! 🏆", "Идеально! Ты настоящий маэстро! 🌟", "Блестяще! Ни одной ошибки! 🎉"],
                praise_good: ["Молодец! Хороший результат! 👍", "Очень хорошо! Ты делаешь успехи! 🚀"],
                praise_try: ["Не сдавайся, попробуй еще! 💪", "Немного больше внимания, и все получится! 🎯"]
            },
            en: {
                app_title: 'TREBLE CLEF',
                home: 'Home', wrong: 'Wrong', right: 'Correct', mute: 'Mute', unmute: 'Unmute', volume: 'Volume', menu: 'Menu', correct_n: 'Correct answers', of10: 'out of 10',
                home_desc_1: 'The treble clef (or G clef) is the main musical symbol on the staff. It tells us that the note "G" of the first octave is located exactly on the second line from the bottom!',
                home_desc_2: 'It represents high-pitched sounds, covering the keyboard from the 1st to the 4th octave.',
                start_octave: 'Start (1st octave)',
                end_octave: 'End (4th octave)',
                select_section: 'Select a section in the top menu to start',
                sec: 'sec', min: 'min', choose_time: 'Choose time:',
                time_out: 'Time is up! ⏰', finished: 'Finished! 🏁',
                result: 'Result:', play_again: 'Play again',
                drag_here: 'Drag here 🎹',
                notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
                sec1_title: '🎵 Notes', sec1_q: 'Choose the correct note 🎯',
                sec2_title: '🎹 Keys', sec2_q: 'Find the key for the note 👇',
                sec3_title: '📈 Motion', sec3_q: 'Where does the melody go? 🤔',
                up: 'UP 📈', down: 'DOWN 📉', same: 'SAME ➡️',
                sec4_title: '🦘 Leaps', sec4_q: 'Determine the movement 🧐',
                steps: 'STEPS 🚶‍♂️', leaps: 'LEAPS 🦘',
                sec5_title: '🎶 Melody', sec5_q: 'What notes are playing? Choose correct 🎵',
                sec6_title: '🎸 Play', sec6_q: 'Play this melody on the instrument 🎹', play_melody: 'Listen to the melody 🔊',
                praise_perfect: ["Well done! Perfect! 🏆", "Perfect! You are a true maestro! 🌟", "Brilliant! Not a single mistake! 🎉"],
                praise_good: ["Well done! Good result! 👍", "Very good! You are making progress! 🚀"],
                praise_try: ["Don't give up, try again! 💪", "A little more attention, and you will succeed! 🎯"]
            }
        };

        const LangContext = createContext('uk');

        /* --- Аудіо: семпли реального фортепіано (вбудовані в бандл), мʼютинг і гучність --- */
const SAMPLE_URLS = [C4, D4, E4, F4, G4, A4, B4];
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
                set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
const audioPrefs = { volume: Math.min(1, Math.max(0, parseFloat(store.get('brio.volume', '0.8')) || 0.8)), muted: store.get('brio.muted', '0') === '1' };
let audioCtx = null, master = null, buffersPromise = null;
const applyGain = () => { if (master) master.gain.value = audioPrefs.muted ? 0 : audioPrefs.volume; };
const setVolume = (v) => { audioPrefs.volume = v; if (v > 0) audioPrefs.muted = false; store.set('brio.volume', v); store.set('brio.muted', audioPrefs.muted ? '1' : '0'); applyGain(); };
const setMuted = (m) => { audioPrefs.muted = m; store.set('brio.muted', m ? '1' : '0'); applyGain(); };

const getAudioCtx = () => {
    try {
        if (!audioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return null;
            audioCtx = new Ctx();
            master = audioCtx.createGain();
            master.connect(audioCtx.destination);
            applyGain();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        return audioCtx;
    } catch (e) { return null; }
};
const dataUrlToBuffer = (url) => { const bin = atob(url.split(',')[1]); const a = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return a.buffer; };
const decode = (ctx, buf) => new Promise((res, rej) => { const p = ctx.decodeAudioData(buf, res, rej); if (p && p.catch) p.catch(rej); });
const loadSamples = (ctx) => {
    if (!buffersPromise) buffersPromise = Promise.all(SAMPLE_URLS.map(u => decode(ctx, dataUrlToBuffer(u)).catch(() => null)));
    return buffersPromise;
};
const FALLBACK_FREQ = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
const playNoteAt = (ctx, buffers, idx, when, vol = 1) => {
    const g = ctx.createGain(); g.connect(master);
    const buf = buffers && buffers[idx];
    if (buf) {
        const src = ctx.createBufferSource(); src.buffer = buf; src.connect(g);
        g.gain.setValueAtTime(vol, when); g.gain.setTargetAtTime(0, when + 0.9, 0.2);
        src.start(when); src.stop(when + 1.6);
    } else { // запасний варіант, якщо семпл не декодувався
        const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = FALLBACK_FREQ[idx]; o.connect(g);
        g.gain.setValueAtTime(0.0001, when); g.gain.exponentialRampToValueAtTime(0.25 * vol, when + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, when + 0.9);
        o.start(when); o.stop(when + 0.95);
    }
};
const playMelody = (indices) => {
    const ctx = getAudioCtx(); if (!ctx) return;
    loadSamples(ctx).then(b => { const t = ctx.currentTime + 0.05; indices.forEach((idx, i) => playNoteAt(ctx, b, idx, t + i * 0.55)); });
};
const playSound = (type, noteIdx) => {
    const ctx = getAudioCtx(); if (!ctx) return;
    const t = ctx.currentTime;
    if (type === 'correct' && noteIdx !== undefined) { loadSamples(ctx).then(b => playNoteAt(ctx, b, noteIdx, ctx.currentTime)); return; }
    const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(master);
    o.type = 'sine';
    if (type === 'correct') { o.frequency.setValueAtTime(880, t); o.frequency.setValueAtTime(1174.66, t + 0.09); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4); }
    else { o.frequency.setValueAtTime(200, t); o.frequency.exponentialRampToValueAtTime(130, t + 0.2); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.2, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3); }
    o.start(t); o.stop(t + 0.45);
};
// Розблокування аудіо на iOS/Safari при першому дотику
['pointerdown', 'keydown'].forEach(ev => window.addEventListener(ev, () => { const c = getAudioCtx(); if (c) loadSamples(c); }, { once: true, passive: true }));


        const NOTES_DATA = [
            { id: 0, y: 105, color: '#ef4444', keyIndex: 0, ledger: true },
            { id: 1, y: 97.5, color: '#f97316', keyIndex: 1, ledger: false },
            { id: 2, y: 90, color: '#facc15', keyIndex: 2, ledger: false },
            { id: 3, y: 82.5, color: '#4ade80', keyIndex: 3, ledger: false },
            { id: 4, y: 75, color: '#3b82f6', keyIndex: 4, ledger: false },
            { id: 5, y: 67.5, color: '#6366f1', keyIndex: 5, ledger: false },
            { id: 6, y: 60, color: '#a855f7', keyIndex: 6, ledger: false }
        ];

        const r = () => Math.floor(Math.random() * 7);
        const shuffle = (arr) => {
            const copy = [...arr];
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        };

        const shuffleWithSpacing = (arr, minGap = 2) => {
            const remaining = shuffle(arr);
            const result = [];
            while (remaining.length) {
                const recent = result.slice(-minGap);
                const candidates = remaining.filter(value => !recent.includes(value));
                const pool = candidates.length ? candidates : remaining;
                const chosen = pool[Math.floor(Math.random() * pool.length)];
                result.push(chosen);
                remaining.splice(remaining.indexOf(chosen), 1);
            }
            return result;
        };

        const shuffleQuestions = (arr, typeKey = q => q.type || q.indices.join(',')) => {
            let result = shuffle(arr);
            for (let attempt = 0; attempt < 150; attempt++) {
                let valid = true;
                for (let i = 1; i < result.length; i++) {
                    if (typeKey(result[i]) === typeKey(result[i - 1])) { valid = false; break; }
                }
                if (valid) return result;
                result = shuffle(arr);
            }
            const remaining = [...arr];
            const arranged = [];
            while (remaining.length) {
                const prevType = arranged.length ? typeKey(arranged[arranged.length - 1]) : null;
                const idx = remaining.findIndex(q => typeKey(q) !== prevType);
                arranged.push(remaining.splice(idx >= 0 ? idx : 0, 1)[0]);
            }
            return arranged;
        };

        // Дві «колоди» по 7 нот: кожна нота зустрічається щонайменше раз, однакові ноти ніколи не йдуть підряд
        // і не повторюються раніше, ніж через 7 карток.
        const generateBalancedSingleNoteList = (count = 10) => {
            const deckA = shuffle([0, 1, 2, 3, 4, 5, 6]);
            let deckB; do { deckB = shuffle([0, 1, 2, 3, 4, 5, 6]); } while (deckB[0] === deckA[6]);
            return [...deckA, ...deckB].slice(0, count).map(index => ({ indices: [index] }));
        };

        const buildDirectionPool = () => {
            const up = [], down = [], same = [];
            for (let a = 0; a < 7; a++) same.push({ type: 'SAME', indices: [a, a, a] });
            for (let a = 0; a < 7; a++) for (let b = a + 1; b < 7; b++) for (let c = b + 1; c < 7; c++) {
                up.push({ type: 'UP', indices: [a, b, c] });
                down.push({ type: 'DOWN', indices: [c, b, a] });
            }
            return { up: shuffle(up), down: shuffle(down), same: shuffle(same) };
        };

        const generateDirectionList = (count = 10) => {
            const pool = buildDirectionPool();
            const result = [];
            const quotas = { UP: 4, DOWN: 3, SAME: 3 };
            shuffle(['UP','DOWN','SAME']).forEach(type => { 
                result.push(...pool[type.toLowerCase()].slice(0, quotas[type])); 
            });
            return shuffleQuestions(result, q => q.type);
        };

        const buildLeapsPool = () => {
            const steps = [], leaps = [];
            for (let a = 0; a <= 4; a++) {
                steps.push({ type: 'STEPS', indices: [a, a + 1, a + 2] });
                steps.push({ type: 'STEPS', indices: [a + 2, a + 1, a] });
            }
            for (let a = 0; a < 7; a++) for (let b = 0; b < 7; b++) for (let c = 0; c < 7; c++) {
                if (Math.abs(a - b) >= 2 && Math.abs(b - c) >= 2) {
                    leaps.push({ type: 'LEAPS', indices: [a, b, c] });
                }
            }
            return { steps: shuffle(steps), leaps: shuffle(leaps) };
        };

        const generateLeapsList = (count = 10) => {
            const pool = buildLeapsPool();
            const result = [...pool.steps.slice(0, 5), ...pool.leaps.slice(0, 5)];
            return shuffleQuestions(result, q => q.type);
        };

        const generateRandomMelodyList = (count = 10) => {
            const pool = [];
            for (let a = 0; a < 7; a++) for (let b = 0; b < 7; b++) for (let c = 0; c < 7; c++) {
                if (a !== b && b !== c) pool.push({ type: 'RANDOM', indices: [a, b, c] });
            }
            // картки не повторюються, і сусідні картки не починаються з однієї ноти
            const result = [];
            for (const q of shuffle(pool)) {
                if (!result.length || result[result.length - 1].indices[0] !== q.indices[0]) result.push(q);
                if (result.length === count) break;
            }
            return result;
        };

        const generateList = (generatorFn, count) => {
            if (generatorFn === generateRandomSingleNote) return generateBalancedSingleNoteList(count);
            if (generatorFn === generateDirectionMelody) return generateDirectionList(count);
            if (generatorFn === generateLeapsMelody) return generateLeapsList(count);
            if (generatorFn === generateRandomMelody) return generateRandomMelodyList(count);
            return [];
        };

        const generateRandomSingleNote = () => ({ indices: [r()] });
        const generateDirectionMelody = () => ({ type: 'UP', indices: [0, 1, 2] });
        const generateLeapsMelody = () => ({ type: 'LEAPS', indices: [0, 2, 4] });
        const generateRandomMelody = () => ({ type: 'RANDOM', indices: [0, 2, 1] });

        
        const Button = ({ children, onClick, className = '', variant = 'primary', disabled = false, draggable = false, onDragStart, onDragEnd }) => {
            const base = "px-4 py-3 md:px-6 md:py-4 rounded-2xl font-bold text-sm md:text-lg uppercase tracking-wide transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-md disabled:opacity-50 border-2";
            const variants = {
                // Яскраві градієнти замість напівпрозорого білого для кращого візуалу
                primary: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700",
                success: "bg-emerald-700 border-transparent text-white hover:bg-emerald-800",
                danger: "bg-rose-700 border-transparent text-white hover:bg-rose-800",
                outline: "bg-white border-indigo-200 text-indigo-950 hover:bg-indigo-50 hover:border-indigo-500"
            };
            return (
                <button onClick={onClick} disabled={disabled} draggable={draggable} onDragStart={onDragStart} onDragEnd={onDragEnd} className={`${base} ${variants[variant]} ${className}`}>
                {children}
                </button>
            );
        };

        const Confetti = () => {
            const bits = useMemo(() => [...Array(60)].map(() => ({ left: Math.random() * 100, color: ['#facc15', '#ec4899', '#3b82f6', '#4ade80', '#a855f7'][Math.floor(Math.random() * 5)], delay: Math.random() * 2, dur: 2 + Math.random() * 2 })), []);
            return (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
                    {bits.map((b, i) => (<div key={i} className="absolute w-3 h-3 rounded-full animate-confetti" style={{ left: `${b.left}%`, top: '-10%', backgroundColor: b.color, '--delay': `${b.delay}s`, '--duration': `${b.dur}s` }} />))}
                </div>
            );
        };

        const StarProgress = ({ stars }) => { const lang = useContext(LangContext); return (
            <div className="flex gap-1 justify-center p-2 bg-indigo-900 rounded-2xl" role="img" aria-label={`${T[lang].correct_n}: ${stars.filter(s => s === 'correct').length} ${T[lang].of10}`}>
                {stars.map((status, i) => (
                <div key={i} className="relative w-6 h-6 md:w-8 md:h-8">
                    <Star className="w-full h-full text-slate-400" fill="currentColor" />
                    {status === 'correct' && <Star className="w-full h-full text-yellow-300 absolute top-0 left-0" fill="currentColor" />}
                    {status === 'wrong' && <Star className="w-full h-full text-rose-400 absolute top-0 left-0" fill="currentColor" />}
                </div>
                ))}
            </div>
        ); };

        const MusicalStaff = ({ indicesArray, colored = false, className = '' }) => {
            return (
                <svg viewBox="0 0 200 130" role="img" aria-label="♪" className={`w-full max-w-[250px] md:max-w-[350px] h-auto ${className}`}>
                {[30, 45, 60, 75, 90].map(y => (
                    <line key={`line-${y}`} x1="8" y1={y} x2="192" y2={y} stroke="#334155" strokeWidth="1.5" />
                ))}
                <path d={CLEF_PATH} transform="translate(9 90) scale(0.06 -0.06)" fill="#0f172a" />
                {indicesArray.map((noteIdx, i) => {
                    const data = NOTES_DATA.find(n => n.id === noteIdx);
                    if (!data) return null;
                    const xPos = indicesArray.length === 1 ? 100 : 62 + (i * (76 / Math.max(indicesArray.length - 1, 1))); 
                    const fill = colored ? data.color : '#0f172a';
                    return (
                    <g key={`${noteIdx}-${i}`} className="animate-[fadeIn_0.25s_ease-out]">
                        {data.ledger && <line x1={xPos - 14} y1={data.y} x2={xPos + 14} y2={data.y} stroke="#334155" strokeWidth="2" />}
                        <ellipse cx={xPos} cy={data.y} rx="8" ry="6" fill={fill} transform={`rotate(-15 ${xPos} ${data.y})`} />
                    </g>
                    );
                })}
                </svg>
            );
        };

        const KeyboardSVG = ({ highlightIndex }) => {
            const keys = [0,1,2,3,4,5,6];
            return (
                <svg viewBox="0 0 140 80" className="w-full rounded-b-md" aria-hidden="true">
                {keys.map(i => (
                    <rect 
                    key={`wk-${i}`} 
                    x={i * 20} y="0" width="20" height="80" 
                    fill={highlightIndex === i ? '#fde047' : '#ffffff'} 
                    stroke="#cbd5e1" strokeWidth="1" rx="2" 
                    />
                ))}
                <rect x="14" y="0" width="12" height="45" fill="#1e293b" rx="1" />
                <rect x="34" y="0" width="12" height="45" fill="#1e293b" rx="1" />
                <rect x="74" y="0" width="12" height="45" fill="#1e293b" rx="1" />
                <rect x="94" y="0" width="12" height="45" fill="#1e293b" rx="1" />
                <rect x="114" y="0" width="12" height="45" fill="#1e293b" rx="1" />
                </svg>
            );
        };

        const FullKeyboardHighlight = () => {
            const lang = useContext(LangContext);
            const totalWhiteKeys = 52; 
            const highlightStart = 23; 
            const highlightEnd = 50;   
            const keyCenterPct = (i) => ((i * 20 + 10) / (totalWhiteKeys * 20)) * 100; // підписи рахуються від тих самих координат, що й клавіші
            const startPct = keyCenterPct(highlightStart);
            const endPct = keyCenterPct(highlightEnd);
            const splitLabel = (str) => { const i = str.indexOf(' ('); return i < 0 ? [str, ''] : [str.slice(0, i), str.slice(i + 1)]; };

            return (
                <div className="w-full bg-white p-3 md:p-4 rounded-2xl border border-indigo-100 mt-6">
                <svg viewBox="0 0 1040 100" className="w-full h-auto" role="img" aria-label="piano">
                    {[...Array(totalWhiteKeys)].map((_, i) => (
                    <rect 
                        key={`fwk-${i}`} 
                        x={i * 20} y="0" width="20" height="100" 
                        fill={i === highlightStart ? '#fca5a5' : i === highlightEnd ? '#a5b4fc' : (i > highlightStart && i < highlightEnd) ? '#fef08a' : '#ffffff'} 
                        stroke="#94a3b8" strokeWidth="1" rx="1" 
                    />
                    ))}
                    {[...Array(totalWhiteKeys - 1)].map((_, i) => {
                    if ([1, 4].includes(i % 7)) return null; // клавіатура починається з ля (A0): чорних немає після сі та мі
                    return (
                        <rect key={`fbk-${i}`} x={i * 20 + 13} y="0" width="14" height="60" fill="#1e293b" rx="1" />
                    );
                    })}
                </svg>
                <div className="relative h-14 md:h-16 mt-1" style={{ fontSize: 0 }}>
                    {[[startPct, 'text-red-700', 'start_octave', false], [endPct, 'text-blue-700', 'end_octave', true]].map(([pct, color, key, alignRight]) => {
                        const [l1, l2] = splitLabel(T[lang][key]);
                        return (
                            <React.Fragment key={key}>
                                <span aria-hidden="true" className={`absolute top-0 -translate-x-1/2 text-[10px] leading-none ${color}`} style={{ left: `${pct}%` }}>▲</span>
                                <span className={`absolute top-3 text-center font-black uppercase leading-tight text-[11px] sm:text-xs md:text-sm ${color}`}
                                    style={alignRight ? { right: 0 } : { left: `${pct}%`, transform: 'translateX(-50%)' }}>
                                    {l1}<br />{l2}
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
                </div>
            );
        };

        
        const Section1Notes = ({ q, handleAnswer }) => {
            const lang = useContext(LangContext);
            const targetNoteIdx = q.indices[0];
            
            const options = useMemo(() => {
                let opts = [targetNoteIdx];
                while (opts.length < 6) {
                const rVal = r();
                if (!opts.includes(rVal)) opts.push(rVal);
                }
                return shuffle(opts);
            }, [targetNoteIdx]);

            return (
                <div className="flex flex-col items-center gap-6 w-full">
                <h3 className="section-heading text-xl md:text-2xl font-bold text-center">{T[lang].sec1_q}</h3>
                <div className="game-card p-8 rounded-[2rem] flex flex-col items-center w-full max-w-md">
                    <MusicalStaff indicesArray={[targetNoteIdx]} colored={true} className="my-6" />
                </div>
                <div className="answer-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl">
                    {options.map((optIdx, i) => (
                    <Button key={i} variant="outline" className="h-14 md:h-16 text-lg font-black" onClick={() => handleAnswer(optIdx === targetNoteIdx, targetNoteIdx)}>
                        {T[lang].notes[optIdx]}
                    </Button>
                    ))}
                </div>
                </div>
            );
        };

        const Section2Keys = ({ q, handleAnswer }) => {
            const lang = useContext(LangContext);
            const targetNoteIdx = q.indices[0];
            const [drag, setDrag] = useState(null);
            const dragRef = useRef(null);
            const zoneRef = useRef(null);

            const options = useMemo(() => {
                let opts = [targetNoteIdx];
                while (opts.length < 3) { const v = r(); if (!opts.includes(v)) opts.push(v); }
                return shuffle(opts);
            }, [targetNoteIdx]);

            const answer = (idx) => handleAnswer(idx === targetNoteIdx, targetNoteIdx);
            const onDown = (e, idx) => {
                if (e.pointerType === 'mouse' && e.button !== 0) return;
                dragRef.current = { idx, sx: e.clientX, sy: e.clientY, moved: false };
                try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
            };
            const onMove = (e) => {
                const d = dragRef.current; if (!d) return;
                if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 8) d.moved = true;
                if (d.moved) setDrag({ idx: d.idx, x: e.clientX, y: e.clientY });
            };
            const onUp = (e) => {
                const d = dragRef.current; dragRef.current = null; setDrag(null);
                if (!d) return;
                if (!d.moved) return answer(d.idx); // простий дотик/клік = відповідь
                const z = zoneRef.current && zoneRef.current.getBoundingClientRect();
                if (z && e.clientX >= z.left && e.clientX <= z.right && e.clientY >= z.top && e.clientY <= z.bottom) answer(d.idx);
            };

            return (
                <div className="flex flex-col items-center gap-6 w-full relative">
                <h3 className="section-heading text-xl md:text-2xl font-bold text-center">{T[lang].sec2_q}</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mt-2">
                    <div ref={zoneRef}
                        className={`game-card p-6 rounded-[2rem] border-4 transition-colors w-full md:w-5/12 flex flex-col items-center justify-center min-h-[250px] ${drag ? '!border-dashed !border-indigo-500 !bg-indigo-50' : ''}`}>
                        <p className="text-sm md:text-base font-black text-slate-700 mb-4 text-center uppercase tracking-wide">{T[lang].drag_here}</p>
                        <MusicalStaff indicesArray={[targetNoteIdx]} colored={false} />
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                    {options.map((optIdx) => (
                        <button type="button" key={optIdx}
                            style={{ touchAction: 'none', opacity: drag && drag.idx === optIdx ? 0.4 : 1 }}
                            onPointerDown={(e) => onDown(e, optIdx)} onPointerMove={onMove} onPointerUp={onUp}
                            onPointerCancel={() => { dragRef.current = null; setDrag(null); }}
                            onClick={(e) => { if (e.detail === 0) answer(optIdx); /* клавіатура: Enter/Space */ }}
                            className="cursor-grab active:cursor-grabbing bg-white p-3 rounded-2xl shadow-md border-2 border-slate-300 hover:border-indigo-500 transition-colors w-full max-w-[200px] mx-auto select-none"
                            aria-label={T[lang].notes[optIdx]}>
                            <KeyboardSVG highlightIndex={NOTES_DATA.find(n => n.id === optIdx).keyIndex} />
                        </button>
                    ))}
                    </div>
                </div>
                {drag && (
                    <div className="fixed z-[60] pointer-events-none w-[160px] bg-white p-3 rounded-2xl shadow-xl border-2 border-indigo-500"
                        style={{ left: drag.x, top: drag.y, transform: 'translate(-50%,-60%)' }}>
                        <KeyboardSVG highlightIndex={NOTES_DATA.find(n => n.id === drag.idx).keyIndex} />
                    </div>
                )}
                </div>
            );
        };

        const Section3Direction = ({ q, handleAnswer }) => {
            const lang = useContext(LangContext);
            // Порядок варіантів завжди однаковий: змінюється лише картка з нотами
            const options = [
                { type: 'UP', label: T[lang].up },
                { type: 'SAME', label: T[lang].same },
                { type: 'DOWN', label: T[lang].down }
            ];
            
            return (
                <div className="flex flex-col items-center gap-6 w-full">
                <h3 className="section-heading text-xl md:text-2xl font-bold text-center">{T[lang].sec3_q}</h3>
                <div className="game-card p-8 rounded-[2rem] flex flex-col items-center w-full max-w-xl">
                    <MusicalStaff indicesArray={q.indices} colored={false} className="my-4" />
                </div>
                <div className="answer-grid grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                    {options.map(option => (
                        <Button key={option.type} className="h-16 text-lg" variant="outline" onClick={() => handleAnswer(q.type === option.type)}>{option.label}</Button>
                    ))}
                </div>
                </div>
            );
        };

        const Section4Leaps = ({ q, handleAnswer }) => {
            const lang = useContext(LangContext);
            const options = [
                { type: 'STEPS', label: T[lang].steps },
                { type: 'LEAPS', label: T[lang].leaps }
            ];
            
            return (
                <div className="flex flex-col items-center gap-6 w-full">
                <h3 className="section-heading text-xl md:text-2xl font-bold text-center">{T[lang].sec4_q}</h3>
                <div className="game-card p-8 rounded-[2rem] flex flex-col items-center w-full max-w-xl">
                    <MusicalStaff indicesArray={q.indices} colored={false} className="my-4" />
                </div>
                <div className="answer-grid flex flex-col md:flex-row gap-4 w-full max-w-2xl">
                    {options.map(option => (
                        <Button key={option.type} variant="outline" className="h-16 text-lg flex-1" onClick={() => handleAnswer(q.type === option.type)}>{option.label}</Button>
                    ))}
                </div>
                </div>
            );
        };

        const Section5Melody = ({ q, handleAnswer }) => {
            const lang = useContext(LangContext);
            const targetStr = q.indices.join(',');
            
            const options = useMemo(() => {
                let opts = [targetStr];
                while(opts.length < 3) {
                const c = [...q.indices]; const p = Math.floor(Math.random() * 3); let v;
                do { v = r(); } while (v === c[p] || (p > 0 && v === c[p - 1]) || (p < 2 && v === c[p + 1]));
                c[p] = v; const rStr = c.join(',');
                if (!opts.includes(rStr)) opts.push(rStr);
                }
                return shuffle(opts);
            }, [targetStr]);
            
            return (
                <div className="flex flex-col items-center gap-6 w-full">
                <h3 className="section-heading text-xl md:text-2xl font-bold text-center">{T[lang].sec5_q}</h3>
                <div className="game-card p-8 rounded-[2rem] flex flex-col items-center w-full max-w-xl">
                    <MusicalStaff indicesArray={q.indices} colored={false} className="my-4" />
                </div>
                <div className="answer-grid flex flex-col gap-3 md:gap-4 w-full max-w-2xl">
                    {options.map((optStr, i) => (
                    <Button key={i} className="h-14 md:h-16 text-lg font-bold tracking-widest" variant="outline" onClick={() => handleAnswer(optStr === targetStr)}>
                        {optStr.split(',').map(idx => T[lang].notes[idx]).join(' - ')}
                    </Button>
                    ))}
                </div>
                </div>
            );
        };

        const Section6Play = ({ q, handleAnswer }) => {
            const lang = useContext(LangContext);
            return (
                <div className="flex flex-col items-center gap-6 w-full">
                <h3 className="section-heading text-xl md:text-2xl font-bold text-center">{T[lang].sec6_q}</h3>
                <div className="game-card p-8 rounded-[2rem] flex flex-col items-center w-full max-w-xl">
                    <MusicalStaff indicesArray={q.indices} colored={false} className="my-4" />
                    <Button variant="primary" className="mt-4 min-h-14" onClick={() => playMelody(q.indices)}>
                        {T[lang].play_melody}
                    </Button>
                </div>
                <div className="flex gap-5 w-full max-w-sm justify-center">
                    <button type="button" aria-label={T[lang].wrong} title={T[lang].wrong} onClick={() => handleAnswer(false)} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-rose-700 text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border-4 border-white">
                        <XCircle className="w-10 h-10 md:w-12 md:h-12" />
                    </button>
                    <button type="button" aria-label={T[lang].right} title={T[lang].right} onClick={() => handleAnswer(true)} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border-4 border-white">
                        <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
                    </button>
                </div>
                </div>
            );
        };

        const SECTIONS_CONFIG = [
            { id: 'sec1', comp: Section1Notes, gen: generateRandomSingleNote },
            { id: 'sec2', comp: Section2Keys, gen: generateRandomSingleNote },
            { id: 'sec3', comp: Section3Direction, gen: generateDirectionMelody },
            { id: 'sec4', comp: Section4Leaps, gen: generateLeapsMelody },
            { id: 'sec5', comp: Section5Melody, gen: generateRandomMelody },
            { id: 'sec6', comp: Section6Play, gen: generateRandomMelody }
        ];

        
        const GameEngine = ({ sectionId, onExit }) => {
            const lang = useContext(LangContext);
            const section = SECTIONS_CONFIG.find(s => s.id === sectionId);
            const sectionTitle = T[lang][`${sectionId}_title`];

            const [stage, setStage] = useState('setup');
            const [timeLeft, setTimeLeft] = useState(0);
            const [deadline, setDeadline] = useState(null);
            const [stars, setStars] = useState(Array(10).fill(null));
            const [currentQ, setCurrentQ] = useState(0);
            const [resultPhrase, setResultPhrase] = useState('');
            const [gameId, setGameId] = useState(Date.now());
            const [isTransitioning, setIsTransitioning] = useState(false);
            const [timedOut, setTimedOut] = useState(false);
            const [feedback, setFeedback] = useState(null);
            // 10 карток створюються один раз на гру (а не при кожному перемальовуванні)
            const questions = useMemo(() => generateList(section.gen, 10), [gameId, sectionId]);

            const starsRef = useRef(stars);
            const deadlineRef = useRef(deadline);
            const transitionTimerRef = useRef(null);

            useEffect(() => { starsRef.current = stars; }, [stars]);
            useEffect(() => { deadlineRef.current = deadline; }, [deadline]);

            useEffect(() => () => {
                if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
            }, []);

            useEffect(() => {
                if (stage !== 'playing' || !deadline) return;

                let completed = false;
                const tick = () => {
                    if (completed) return;
                    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
                    setTimeLeft(remaining);
                    if (remaining <= 0) {
                        completed = true;
                        setTimedOut(true);
                        finishGame(starsRef.current, true);
                    }
                };

                tick();
                const timer = setInterval(tick, 200);
                return () => { completed = true; clearInterval(timer); };
            }, [stage, deadline]);

            useEffect(() => {
                setStage('setup');
                setDeadline(null);
                setTimeLeft(0);
                setStars(Array(10).fill(null));
                setCurrentQ(0);
                setFeedback(null);
                setTimedOut(false);
            }, [sectionId]);

            const choosePraise = useCallback((finalStars) => {
                const correctCount = finalStars.filter(s => s === 'correct').length;
                const pool = correctCount === 10
                    ? T[lang].praise_perfect
                    : correctCount >= 7
                        ? T[lang].praise_good
                        : T[lang].praise_try;
                return pool[Math.floor(Math.random() * pool.length)];
            }, [lang]);

            const finishGame = useCallback((finalStars = starsRef.current, didTimeOut = false) => {
                if (transitionTimerRef.current) { clearTimeout(transitionTimerRef.current); transitionTimerRef.current = null; }
                const safeStars = [...finalStars];
                setStars(safeStars);
                starsRef.current = safeStars;
                setTimedOut(didTimeOut);
                setDeadline(null);
                setTimeLeft(0);
                setResultPhrase(choosePraise(safeStars));
                setStage('result');
                setIsTransitioning(false);
                setFeedback(null);
            }, [choosePraise]);

            const startGame = (seconds) => {
                const freshStars = Array(10).fill(null);
                const end = Date.now() + seconds * 1000;
                setStars(freshStars);
                starsRef.current = freshStars;
                setCurrentQ(0);
                setGameId(prev => prev + 1);
                setIsTransitioning(false);
                setFeedback(null);
                setTimedOut(false);
                setTimeLeft(seconds);
                setDeadline(end);
                deadlineRef.current = end;
                setStage('playing');
                getAudioCtx();
            };

            const handleAnswer = (isCorrect, noteIdx) => {
                if (stage !== 'playing' || isTransitioning || currentQ > 9) return;

                const answeredIndex = currentQ;
                const newStars = [...starsRef.current];
                newStars[answeredIndex] = isCorrect ? 'correct' : 'wrong';
                starsRef.current = newStars;
                setStars(newStars);
                setFeedback({ type: isCorrect ? 'correct' : 'wrong' });
                setIsTransitioning(true);
                playSound(isCorrect ? 'correct' : 'wrong', noteIdx);

                if (answeredIndex >= 9) {
                    transitionTimerRef.current = setTimeout(() => {
                        finishGame(newStars, false);
                    }, 650);
                    return;
                }

                setCurrentQ(answeredIndex + 1);
                transitionTimerRef.current = setTimeout(() => {
                    setFeedback(null);
                    setIsTransitioning(false);
                }, 650);
            };

            if (stage === 'setup') {
                return (
                    <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto animate-[fadeIn_0.4s_ease-out]">
                        <div className="game-card p-8 md:p-12 rounded-[2rem] flex flex-col items-center gap-6 w-full text-center">
                            <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg mb-2">
                                <Clock className="w-12 h-12 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-indigo-900 uppercase tracking-wide">{sectionTitle}</h2>
                            <h3 className="text-lg md:text-xl font-bold text-slate-700 mt-4">{T[lang].choose_time}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-2">
                                <Button variant="primary" onClick={() => startGame(30)}>30 {T[lang].sec}</Button>
                                <Button variant="primary" onClick={() => startGame(60)}>1 {T[lang].min}</Button>
                                <Button variant="primary" onClick={() => startGame(90)}>1.5 {T[lang].min}</Button>
                                <Button variant="primary" onClick={() => startGame(120)}>2 {T[lang].min}</Button>
                            </div>
                        </div>
                    </div>
                );
            }

            if (stage === 'result') {
                const correctCount = stars.filter(s => s === 'correct').length;
                const isPerfect = correctCount === 10;
                return (
                    <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto animate-[fadeIn_0.5s_ease-out]">
                        {isPerfect && <Confetti />}
                        <div className="game-card p-8 md:p-14 rounded-[2rem] flex flex-col items-center gap-6 text-center w-full">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-800 uppercase">
                                {timedOut ? T[lang].time_out : T[lang].finished}
                            </h2>
                            <div className="text-2xl md:text-3xl font-bold text-slate-600">
                                {T[lang].result} <span className={`text-5xl md:text-6xl font-black mx-2 ${isPerfect ? 'text-indigo-600' : 'text-slate-800'}`}>{correctCount}</span> / 10
                            </div>
                            <p className="text-xl md:text-2xl font-bold text-indigo-900 mt-4 bg-indigo-50 px-6 py-4 rounded-2xl border border-indigo-100">
                                {resultPhrase}
                            </p>
                            <div className="my-4 transform scale-110"><StarProgress stars={stars} /></div>
                            <div className="flex gap-4 w-full mt-4 justify-center">
                                <Button onClick={() => setStage('setup')} className="flex-1 max-w-[220px] text-lg font-black" variant="primary">
                                    <RefreshCw className="w-5 h-5"/> {T[lang].play_again}
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            }

            const GameComponent = section.comp;
            const score = stars.filter(s => s === 'correct').length;

            return (
                <div className={`game-stage section-${sectionId} flex flex-col w-full flex-grow max-w-6xl mx-auto gap-5 animate-[fadeIn_0.3s_ease-out]`}>
                    <div className="flex flex-col sm:flex-row justify-center items-center bg-white p-3 md:p-4 rounded-3xl shadow-md border border-indigo-100 gap-3">
                        <div className="flex items-center justify-center gap-2 order-2 sm:order-1">
                            <span className="text-slate-800 font-black text-sm md:text-base">{T[lang].result}</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-xl text-indigo-900 font-black">{score}/10</span>
                        </div>
                        <div className="flex justify-center order-1 sm:order-2">
                            <StarProgress stars={stars} />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-indigo-100 px-4 py-2 md:px-5 md:py-3 rounded-2xl text-indigo-900 order-3">
                            <Clock className={`w-6 h-6 md:w-7 md:h-7 ${timeLeft <= 10 ? 'text-rose-700' : ''}`} />
                            <span className={`text-2xl md:text-3xl font-black tabular-nums ${timeLeft <= 10 ? 'text-rose-700' : ''}`}>
                                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                            </span>
                        </div>
                    </div>

                    {feedback && (
                        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-[popIn_0.25s_ease-out]" aria-live="polite">
                            <div className={`feedback-mark ${feedback.type === 'correct' ? 'correct' : 'wrong'}`}>
                                {feedback.type === 'correct'
                                    ? <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14" />
                                    : <XCircle className="w-12 h-12 md:w-14 md:h-14" />}
                            </div>
                        </div>
                    )}

                    <div className="flex-grow flex items-center justify-center w-full relative min-h-[400px]">
                        <div key={`${gameId}-${currentQ}`} className="w-full animate-[slideUp_0.3s_ease-out]">
                            <GameComponent q={questions[Math.min(currentQ, questions.length - 1)]} handleAnswer={handleAnswer} />
                        </div>
                    </div>
                </div>
            );
        };

        /* --- Керування звуком та мовою --- */
        const AudioControl = ({ lang, idPrefix }) => {
            const [vol, setVol] = useState(audioPrefs.volume);
            const [muted, setMut] = useState(audioPrefs.muted);
            const off = muted || vol === 0;
            return (
                <div className="flex items-center gap-2">
                    <button type="button" aria-pressed={off} aria-label={off ? T[lang].unmute : T[lang].mute} title={off ? T[lang].unmute : T[lang].mute}
                        onClick={() => { const m = !off; setMuted(m); if (!m && audioPrefs.volume === 0) { setVolume(0.8); setVol(0.8); } setMut(m); }}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 border border-slate-300 text-slate-900 hover:bg-indigo-50">
                        {off ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <input id={`${idPrefix}-vol`} type="range" min="0" max="1" step="0.05" value={off ? 0 : vol} aria-label={T[lang].volume}
                        onChange={(e) => { const v = parseFloat(e.target.value); setVolume(v); setVol(v); setMut(v === 0); }}
                        className="w-24 md:w-28" />
                </div>
            );
        };
        const LangSwitch = ({ lang, setLang }) => (
            <div className="flex gap-1 bg-slate-100 p-1 rounded-full border border-slate-300" role="group" aria-label="Language">
                {['uk', 'ru', 'en'].map(l => (
                    <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l}
                        className={`px-3 py-1.5 text-xs font-black uppercase rounded-full ${lang === l ? 'bg-indigo-600 text-white' : 'text-slate-800 hover:bg-white'}`}>{l}</button>
                ))}
            </div>
        );
        const ClefMark = ({ className }) => (
            <svg viewBox="50 -1334 611 1732" className={className} aria-hidden="true"><path d={CLEF_PATH} transform="scale(1 -1)" fill="currentColor" /></svg>
        );

        const SOCIAL = {
            instagram: 'https://www.instagram.com/brio_musicstudio/',
            telegram: 'https://t.me/briomusicstudio',
            tiktok: 'https://www.tiktok.com/@brio_music_studio_'
        };

        function App() {
            const [activeSectionId, setActiveSectionId] = useState(null);
            const [lang, setLang] = useState(() => { const v = store.get('brio.lang', 'uk'); return ['uk', 'ru', 'en'].includes(v) ? v : 'uk'; });
            const [menuOpen, setMenuOpen] = useState(false);
            useEffect(() => { store.set('brio.lang', lang); document.documentElement.lang = lang; document.title = lang === 'uk' ? 'Вивчай ноти граючи — гра «Скрипковий ключ» | Brio Music Studio' : `${T[lang].app_title} — Brio Music Studio`; }, [lang]);
            useEffect(() => {
                if (!menuOpen) return;
                const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
                window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
            }, [menuOpen]);
            const go = (id) => { setActiveSectionId(id); setMenuOpen(false); window.scrollTo(0, 0); };
            const navBtn = (id, label, extra = '') => (
                <button key={id || 'home'} type="button" onClick={() => go(id)} aria-current={activeSectionId === id ? 'page' : undefined}
                    className={`nav-item text-[13px] xl:text-sm uppercase tracking-wide px-3 xl:px-4 py-2.5 rounded-xl whitespace-nowrap ${activeSectionId === id ? 'active' : ''} ${extra}`}>{label}</button>
            );
            const navItems = [navBtn(null, T[lang].home), ...SECTIONS_CONFIG.map(sec => navBtn(sec.id, T[lang][`${sec.id}_title`]))];

            return (
                <LangContext.Provider value={lang}>
                <div className="app-shell flex flex-col relative font-sans">
                    
                    <header className="app-header sticky top-0 z-50 w-full">
                        <div className="w-full px-3 sm:px-5 py-2 grid grid-cols-[1fr_auto] nav:grid-cols-[1fr_auto_1fr] items-center gap-3">
                            <button type="button" onClick={() => go(null)} title={T[lang].home} aria-label={T[lang].home} className="justify-self-start rounded-lg">
                                <img src="assets/logo.svg" alt="Brio Music Studio" width="110" height="48" className="h-12 w-auto object-contain"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'inline'; }} />
                                <span style={{ display: 'none' }} className="font-black tracking-widest text-indigo-900 text-sm md:text-base">BRIO MUSIC STUDIO</span>
                            </button>
                            <nav className="hidden nav:flex items-center gap-1 justify-center" aria-label="Menu">{navItems}</nav>
                            <div className="hidden nav:flex flex-col items-end gap-1.5 justify-self-end">
                                <LangSwitch lang={lang} setLang={setLang} />
                                <AudioControl lang={lang} idPrefix="d" />
                            </div>
                            <button type="button" className="nav:hidden justify-self-end w-11 h-11 rounded-xl flex items-center justify-center border border-slate-300 bg-slate-100 text-slate-900"
                                aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={T[lang].menu} onClick={() => setMenuOpen(o => !o)}>
                                {menuOpen ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                        {menuOpen && (
                            <div id="mobile-menu" className="nav:hidden border-t border-slate-200 bg-white px-4 py-4 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
                                <nav className="flex flex-col gap-2" aria-label="Menu">{navItems.map((b) => React.cloneElement(b, { className: b.props.className + ' text-left w-full' }))}</nav>
                                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
                                    <AudioControl lang={lang} idPrefix="m" />
                                    <LangSwitch lang={lang} setLang={setLang} />
                                </div>
                            </div>
                        )}
                    </header>

                    {/* Головна область */}
                    <main className="w-full flex-grow flex flex-col items-center p-4 md:p-8 z-10">
                    {!activeSectionId ? (
                        <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl my-auto animate-[fadeIn_0.5s_ease-out]">
                        <div className="bg-white/85 p-6 md:p-12 rounded-[2rem] border border-white shadow-xl w-full flex flex-col items-center">
                            
                            <div className="mb-6 bg-white w-36 h-40 md:w-44 md:h-48 rounded-[2rem] border-4 border-indigo-200 shadow-md flex items-center justify-center">
                                <ClefMark className="w-14 h-32 md:w-[4.5rem] md:h-40 text-indigo-900" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-indigo-900 mb-6 uppercase tracking-widest text-center">
                            {T[lang].app_title}
                            </h1>
                            
                            <div className="bg-indigo-50 p-6 md:p-10 rounded-3xl border border-indigo-100 w-full max-w-5xl mb-8 text-left text-slate-800 font-medium">
                            <p className="text-lg md:text-xl leading-relaxed mb-4">
                                {T[lang].home_desc_1}
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                {T[lang].home_desc_2}
                            </p>
                            
                            <FullKeyboardHighlight />
                            </div>

                            <div className="flex items-center gap-3 text-white font-bold text-base md:text-xl mt-4 bg-indigo-600 px-6 md:px-8 py-4 rounded-full">
                            <Info className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                            {T[lang].select_section}
                            </div>
                        </div>
                        </div>
                    ) : (
                        <GameEngine key={activeSectionId} sectionId={activeSectionId} onExit={() => setActiveSectionId(null)} />
                    )}
                    </main>

                    {/* Доданий футер з інформацією про автора */}
                    <footer className="w-full text-center py-6 mt-auto z-10 bg-white border-t border-indigo-100 text-slate-800">
                        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-2">
                            <p className="text-sm md:text-base font-medium">© Мар'яна Вихрист (Mariana Vykhryst)</p>
                            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                                className="text-sm md:text-base font-black tracking-widest text-indigo-800 hover:underline">
                                BRIO MUSIC STUDIO
                            </a>
                            <div className="flex items-center gap-3 mt-1">
                                {[['Instagram', SOCIAL.instagram, Instagram], ['Telegram', SOCIAL.telegram, Telegram], ['TikTok', SOCIAL.tiktok, TikTok]].map(([name, href, Icon]) => (
                                    <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Brio Music Studio — ${name}`} title={name}
                                        className="w-11 h-11 rounded-full flex items-center justify-center text-indigo-900 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100">
                                        <Icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </footer>
                </div>
                </LangContext.Provider>
            );
        }

        /* --- Рендеринг в DOM... --- */
        const root = createRoot(document.getElementById('root'));
        root.render(<App />);
    