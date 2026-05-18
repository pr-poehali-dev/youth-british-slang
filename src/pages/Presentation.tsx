import { useEffect } from "react";

const slides = [
  // SLIDE 1 — Title
  {
    type: "title",
  },
  // SLIDE 2 — What is slang?
  {
    type: "theory1",
  },
  // SLIDE 3 — History
  {
    type: "history",
  },
  // SLIDE 4 — Cultural context
  {
    type: "culture",
  },
  // SLIDE 5 — Dictionary part 1
  {
    type: "dict1",
  },
  // SLIDE 6 — Dictionary part 2
  {
    type: "dict2",
  },
  // SLIDE 7 — Where is it used
  {
    type: "media",
  },
  // SLIDE 8 — Conclusion
  {
    type: "conclusion",
  },
];

const dict1 = [
  { word: "Mate", tr: "Друг, приятель", ex: "Cheers, mate! — Спасибо, приятель!" },
  { word: "Bloke", tr: "Парень, чувак", ex: "He's a nice bloke. — Он классный парень." },
  { word: "Cheeky", tr: "Дерзкий (в хорошем смысле)", ex: "That's a cheeky smile! — Какая дерзкая улыбка!" },
  { word: "Gutted", tr: "Расстроенный", ex: "I'm gutted we lost. — Я убит, что мы проиграли." },
  { word: "Brilliant", tr: "Отлично! Потрясающе!", ex: "That film was brilliant! — Фильм был потрясающим!" },
  { word: "Knackered", tr: "Вымотанный, уставший", ex: "I'm knackered after PE. — Я вымотан после физры." },
];

const dict2 = [
  { word: "Dodgy", tr: "Подозрительный, ненадёжный", ex: "That looks dodgy. — Это выглядит подозрительно." },
  { word: "Rubbish", tr: "Ерунда, чушь", ex: "That idea is rubbish! — Это идея — чушь!" },
  { word: "Fancy", tr: "Хотеть / нравиться", ex: "Do you fancy chips? — Хочешь картошки фри?" },
  { word: "Banter", tr: "Дружеские подколки", ex: "It's just banter. — Это просто приколы." },
  { word: "Gobsmacked", tr: "Ошарашенный", ex: "I was gobsmacked! — Я был просто в шоке!" },
  { word: "Fit", tr: "Симпатичный, привлекательный", ex: "She's really fit! — Она очень симпатичная!" },
];

function SlideWrapper({ children, num }: { children: React.ReactNode; num: number }) {
  return (
    <div
      className="slide-page"
      style={{
        width: "210mm",
        minHeight: "148mm",
        margin: "0 auto 12mm",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        pageBreakAfter: "always",
        breakAfter: "page",
        fontFamily: "'Golos Text', 'Roboto', sans-serif",
        boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
        borderRadius: "4px",
      }}
    >
      {children}
      {/* Slide number */}
      <div
        style={{
          position: "absolute",
          bottom: "6mm",
          right: "8mm",
          fontSize: "9pt",
          color: "#bbb",
          fontFamily: "'Unbounded', sans-serif",
        }}
      >
        {num} / {slides.length}
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <SlideWrapper num={1}>
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d0d20 0%, #1a1040 50%, #0d2020 100%)" }} />
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "-20mm", right: "-20mm", width: "80mm", height: "80mm", borderRadius: "50%", background: "rgba(245,230,66,0.07)", border: "1px solid rgba(245,230,66,0.15)" }} />
      <div style={{ position: "absolute", bottom: "-15mm", left: "-15mm", width: "60mm", height: "60mm", borderRadius: "50%", background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.12)" }} />

      <div style={{ position: "relative", zIndex: 1, padding: "14mm 16mm" }}>
        {/* Flag + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6mm" }}>
          <span style={{ fontSize: "28pt" }}>🇬🇧</span>
          <span style={{ background: "rgba(245,230,66,0.15)", color: "#f5e642", border: "1px solid rgba(245,230,66,0.3)", borderRadius: "20px", padding: "2px 12px", fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>ENGLISH · 7 CLASS</span>
        </div>

        <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "32pt", lineHeight: 1.1, color: "#f5e642", textShadow: "0 0 30px rgba(245,230,66,0.4)", marginBottom: "4mm" }}>
          BRITISH<br />SLANG
        </div>
        <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 400, fontSize: "11pt", color: "rgba(255,255,255,0.5)", marginBottom: "8mm" }}>
          Молодёжный британский сленг
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10mm" }}>
          {["#cheeky", "#mate", "#brilliant", "#gutted", "#banter"].map(tag => (
            <span key={tag} style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", borderRadius: "20px", padding: "2px 10px", fontSize: "8pt" }}>{tag}</span>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
          {[
            { icon: "📚", label: "История" },
            { icon: "🗣️", label: "Словарь" },
            { icon: "🎬", label: "Культура" },
          ].map(item => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "6px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "14pt", marginBottom: "2px" }}>{item.icon}</div>
              <div style={{ fontSize: "8pt", color: "rgba(255,255,255,0.5)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide2() {
  return (
    <SlideWrapper num={2}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "14mm", background: "linear-gradient(90deg, #0d0d20, #1a1040)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "2mm", height: "100%", background: "#f5e642" }} />

      <div style={{ padding: "16mm 16mm 12mm 18mm" }}>
        <div style={{ fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", color: "#f5e642", letterSpacing: "0.12em", marginBottom: "3mm", textTransform: "uppercase" }}>Что такое сленг?</div>
        <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "18pt", color: "#0d0d20", marginBottom: "6mm", lineHeight: 1.2 }}>
          Язык улиц — <span style={{ color: "#6c47ff" }}>неформальная речь</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm", marginBottom: "6mm" }}>
          <div>
            <p style={{ fontSize: "9.5pt", lineHeight: 1.6, color: "#333" }}>
              <strong>Сленг</strong> — это неформальные слова и выражения, которые используются в разговорной речи, особенно среди молодёжи. Они делают общение живым, выразительным и «своим».
            </p>
            <p style={{ fontSize: "9.5pt", lineHeight: 1.6, color: "#333", marginTop: "3mm" }}>
              Британский сленг отличается от американского — он более ироничный, часто с юмором и самоиронией.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              { emoji: "💬", text: "Используется в разговорной речи" },
              { emoji: "👥", text: "Популярен среди подростков" },
              { emoji: "🚫", text: "Не используется в официальных текстах" },
              { emoji: "🌍", text: "Отражает культуру и время" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f8f7ff", borderRadius: "6px", padding: "5px 8px" }}>
                <span style={{ fontSize: "12pt" }}>{item.emoji}</span>
                <span style={{ fontSize: "8.5pt", color: "#444" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(90deg, #0d0d20, #1a1040)", borderRadius: "8px", padding: "8px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "16pt" }}>💡</span>
          <span style={{ fontSize: "9pt", color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>
            "Слово <strong style={{ color: "#f5e642" }}>slang</strong> впервые появилось в английских словарях в 1756 году и обозначало 'язык низшего класса'"
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide3() {
  return (
    <SlideWrapper num={3}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "2mm", height: "100%", background: "#00e5ff" }} />

      <div style={{ padding: "14mm 16mm 12mm 18mm" }}>
        <div style={{ fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", color: "#00a8bf", letterSpacing: "0.12em", marginBottom: "3mm" }}>ИСТОРИЯ</div>
        <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "17pt", color: "#0d0d20", marginBottom: "6mm" }}>
          Как появился британский сленг
        </h2>

        <div style={{ position: "relative", paddingLeft: "8mm" }}>
          {[
            {
              year: "XVIII век",
              color: "#6c47ff",
              title: "Кокни и рифмующийся сленг",
              text: "Рабочие кварталы Лондона (Ист-Энд) создали «Cockney rhyming slang» — слова заменялись рифмующимися фразами. «Stairs» → «apples and pears».",
            },
            {
              year: "1950–60-е",
              color: "#e040fb",
              title: "Эпоха рок-н-ролла",
              text: "Молодёжная культура взорвалась вместе с The Beatles и Rolling Stones. Новые слова пришли из джаза, хиппи-движения и улиц.",
            },
            {
              year: "1990-е",
              color: "#f5e642",
              title: "Брит-поп и клубная культура",
              text: "Britpop, Oasis, Blur — музыка и клубы принесли новую волну: «wicked», «sorted», «innit». Сленг стал массовым.",
            },
            {
              year: "2000–сейчас",
              color: "#69ff47",
              title: "Интернет и многокультурность",
              text: "Лондон — мультикультурный город. MLE (Multicultural London English) смешал карибский, южноазиатский и лондонский сленг. TikTok ускорил распространение.",
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8mm", marginBottom: "5mm", position: "relative" }}>
              <div style={{ position: "absolute", left: "-8mm", top: "3px", width: "10px", height: "10px", borderRadius: "50%", background: item.color, flexShrink: 0 }} />
              {i < 3 && <div style={{ position: "absolute", left: "-3.5mm", top: "13px", width: "1px", height: "calc(100% + 5mm)", background: "#e5e5e5" }} />}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                  <span style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "7.5pt", fontWeight: 700, color: item.color }}>{item.year}</span>
                  <span style={{ fontWeight: 700, fontSize: "9pt", color: "#111" }}>{item.title}</span>
                </div>
                <p style={{ fontSize: "8.5pt", color: "#555", lineHeight: 1.5, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide4() {
  return (
    <SlideWrapper num={4}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "2mm", height: "100%", background: "#e040fb" }} />

      <div style={{ padding: "14mm 16mm 12mm 18mm" }}>
        <div style={{ fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", color: "#b030d0", letterSpacing: "0.12em", marginBottom: "3mm" }}>КУЛЬТУРНЫЙ КОНТЕКСТ</div>
        <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "17pt", color: "#0d0d20", marginBottom: "5mm" }}>
          Где и кто использует сленг?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5mm", marginBottom: "5mm" }}>
          {[
            {
              emoji: "🎬",
              title: "Кино и сериалы",
              text: "«Шерлок», «Сkins», «Peaky Blinders» — живой лондонский сленг в диалогах. Смотреть с субтитрами — отличный способ учить.",
              color: "#ffeaa7",
              border: "#f5e642",
            },
            {
              emoji: "🎵",
              title: "Музыка",
              text: "Grime, UK Drill, Britpop — Stormzy, Dizzee Rascal, Arctic Monkeys активно используют уличный сленг в текстах.",
              color: "#ffeef8",
              border: "#e040fb",
            },
            {
              emoji: "📱",
              title: "Соцсети и TikTok",
              text: "Британские тиктокеры и YouTubers: KSI, Sidemen, Callux. Сленг живёт в комментариях, мемах и стримах.",
              color: "#e8f8ff",
              border: "#00e5ff",
            },
            {
              emoji: "⚽",
              title: "Спорт",
              text: "Футбол — главный спорт Британии. «It's a dodgy tackle», «brilliant save» — сленг постоянно звучит на стадионах.",
              color: "#efffee",
              border: "#69ff47",
            },
          ].map(item => (
            <div key={item.title} style={{ background: item.color, border: `1.5px solid ${item.border}40`, borderRadius: "8px", padding: "7px 10px" }}>
              <div style={{ fontSize: "14pt", marginBottom: "3px" }}>{item.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: "9.5pt", marginBottom: "3px", color: "#111" }}>{item.title}</div>
              <div style={{ fontSize: "8pt", color: "#444", lineHeight: 1.5 }}>{item.text}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#f0f0ff", borderLeft: "3px solid #6c47ff", borderRadius: "0 6px 6px 0", padding: "6px 10px" }}>
          <span style={{ fontSize: "9pt", color: "#333", fontStyle: "italic" }}>
            🗺️ <strong>Интересный факт:</strong> В Лондоне живут люди более чем из 300 стран — именно поэтому британский сленг такой разнообразный и постоянно меняется!
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}

function DictSlide({ num, words, part }: { num: number; words: typeof dict1; part: number }) {
  return (
    <SlideWrapper num={num}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "2mm", height: "100%", background: "#69ff47" }} />

      <div style={{ padding: "14mm 16mm 12mm 18mm" }}>
        <div style={{ fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", color: "#3a9e1a", letterSpacing: "0.12em", marginBottom: "3mm" }}>СЛОВАРЬ СЛЕНГА · ЧАСТЬ {part}</div>
        <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "17pt", color: "#0d0d20", marginBottom: "5mm" }}>
          Ключевые слова и выражения
        </h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9pt" }}>
          <thead>
            <tr style={{ background: "#0d0d20" }}>
              <th style={{ padding: "5px 8px", textAlign: "left", color: "#f5e642", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "7.5pt", borderRadius: "0" }}>Слово</th>
              <th style={{ padding: "5px 8px", textAlign: "left", color: "#f5e642", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "7.5pt" }}>Перевод</th>
              <th style={{ padding: "5px 8px", textAlign: "left", color: "#f5e642", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "7.5pt" }}>Пример</th>
            </tr>
          </thead>
          <tbody>
            {words.map((w, i) => (
              <tr key={w.word} style={{ background: i % 2 === 0 ? "#fff" : "#f8f7ff" }}>
                <td style={{ padding: "6px 8px", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "10pt", color: "#6c47ff", borderBottom: "1px solid #eee", whiteSpace: "nowrap" }}>
                  {w.word}
                </td>
                <td style={{ padding: "6px 8px", color: "#111", borderBottom: "1px solid #eee", fontWeight: 600 }}>
                  {w.tr}
                </td>
                <td style={{ padding: "6px 8px", color: "#555", borderBottom: "1px solid #eee", fontStyle: "italic", fontSize: "8.5pt" }}>
                  {w.ex}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}

function Slide7() {
  return (
    <SlideWrapper num={7}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "2mm", height: "100%", background: "#f5e642" }} />

      <div style={{ padding: "14mm 16mm 12mm 18mm" }}>
        <div style={{ fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", color: "#b09000", letterSpacing: "0.12em", marginBottom: "3mm" }}>ПРИМЕРЫ ИЗ ЖИЗНИ</div>
        <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "17pt", color: "#0d0d20", marginBottom: "5mm" }}>
          Сленг в диалогах
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "5mm" }}>
          {[
            {
              context: "🏫 В школе",
              lines: [
                { who: "Jake", msg: "Oi mate, that test was well dodgy.", ru: "Эй, приятель, этот тест был ну очень странный." },
                { who: "Tom", msg: "I know, I'm absolutely gutted. Thought I was gonna smash it.", ru: "Знаю, я просто убит. Думал, что разнесу его в пух и прах." },
                { who: "Jake", msg: "Banter aside — I reckon we're both knackered from revision.", ru: "Шутки в сторону — думаю, мы оба вымотались от повторения." },
              ],
            },
            {
              context: "⚽ После матча",
              lines: [
                { who: "Sam", msg: "Did you see that? Absolutely brilliant goal!", ru: "Ты видел это? Просто потрясающий гол!" },
                { who: "Alex", msg: "The keeper was gobsmacked. Didn't fancy his chances!", ru: "Вратарь был в шоке. Шансов у него не было!" },
              ],
            },
          ].map((dialog, di) => (
            <div key={di}>
              <div style={{ fontSize: "8.5pt", fontWeight: 700, color: "#888", marginBottom: "3px" }}>{dialog.context}</div>
              <div style={{ background: "#f8f8ff", borderRadius: "8px", padding: "8px 10px", border: "1px solid #e8e8f0" }}>
                {dialog.lines.map((line, li) => (
                  <div key={li} style={{ marginBottom: li < dialog.lines.length - 1 ? "5px" : 0 }}>
                    <span style={{ fontWeight: 700, color: "#6c47ff", fontSize: "9pt" }}>{line.who}: </span>
                    <span style={{ fontSize: "9pt", color: "#111", fontStyle: "italic" }}>"{line.msg}"</span>
                    <div style={{ fontSize: "8pt", color: "#888", marginLeft: "8px" }}>→ {line.ru}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide8() {
  return (
    <SlideWrapper num={8}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d0d20 0%, #1a1040 60%, #0d2020 100%)" }} />
      <div style={{ position: "absolute", top: "-10mm", right: "-10mm", width: "60mm", height: "60mm", borderRadius: "50%", background: "rgba(105,255,71,0.07)", border: "1px solid rgba(105,255,71,0.15)" }} />

      <div style={{ position: "relative", zIndex: 1, padding: "14mm 16mm", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "8pt", fontFamily: "'Unbounded', sans-serif", color: "#69ff47", letterSpacing: "0.12em", marginBottom: "3mm" }}>ВЫВОД</div>
          <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "18pt", color: "#fff", marginBottom: "5mm", lineHeight: 1.2 }}>
            Зачем учить<br /><span style={{ color: "#f5e642" }}>British Slang?</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm", marginBottom: "6mm" }}>
            {[
              { icon: "🎯", text: "Понимать носителей языка в кино, музыке и интернете" },
              { icon: "🤝", text: "Звучать естественно в общении с британскими сверстниками" },
              { icon: "🧠", text: "Лучше понимать культуру и менталитет британцев" },
              { icon: "✨", text: "Сделать свой английский живым и настоящим" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "12pt", flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: "8.5pt", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ background: "rgba(245,230,66,0.08)", border: "1px solid rgba(245,230,66,0.25)", borderRadius: "8px", padding: "8px 12px", marginBottom: "5mm" }}>
            <span style={{ fontSize: "9pt", color: "#f5e642", fontStyle: "italic" }}>
              "Language is the road map of a culture. It tells you where its people come from and where they are going." — Rita Mae Brown
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "14pt", color: "#f5e642" }}>CHEERS, MATE! 🇬🇧</div>
              <div style={{ fontSize: "8pt", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Английский язык · 7 класс</div>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {["Brilliant!", "Cheers!", "Banter!"].map(tag => (
                <span key={tag} style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", borderRadius: "20px", padding: "2px 8px", fontSize: "7.5pt" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

export default function Presentation() {
  useEffect(() => {
    document.title = "British Slang — Презентация · 7 класс";
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;800;900&family=Golos+Text:wght@400;500;600;700&display=swap');

        body { background: #e8e8f0; margin: 0; }

        @media print {
          body { background: white; margin: 0; }
          .no-print { display: none !important; }
          .slide-page {
            box-shadow: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            page-break-after: always !important;
          }
          .print-container { padding: 0 !important; }
        }
      `}</style>

      {/* Print button */}
      <div className="no-print" style={{ position: "fixed", top: "16px", right: "16px", zIndex: 100, display: "flex", gap: "10px" }}>
        <button
          onClick={() => window.print()}
          style={{
            background: "#f5e642",
            color: "#0d0d20",
            border: "none",
            borderRadius: "10px",
            padding: "10px 22px",
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(245,230,66,0.35)",
          }}
        >
          🖨️ Печать / PDF
        </button>
        <a
          href="/"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "10px 16px",
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            cursor: "pointer",
            textDecoration: "none",
            backdropFilter: "blur(8px)",
          }}
        >
          ← Назад
        </a>
      </div>

      <div className="print-container" style={{ padding: "20px 0", maxWidth: "230mm", margin: "0 auto" }}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <DictSlide num={5} words={dict1} part={1} />
        <DictSlide num={6} words={dict2} part={2} />
        <Slide7 />
        <Slide8 />
      </div>
    </>
  );
}
