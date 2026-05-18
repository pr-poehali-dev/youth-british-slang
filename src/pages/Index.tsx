import { useState } from "react";
import Icon from "@/components/ui/icon";

const slangWords = [
  {
    word: "Bloke",
    translation: "Чувак, парень",
    example: "He's a nice bloke.",
    exampleRu: "Он классный парень.",
    category: "People",
    color: "yellow",
    emoji: "🧑",
    difficulty: "Easy",
  },
  {
    word: "Mate",
    translation: "Друг, приятель",
    example: "Cheers, mate!",
    exampleRu: "Спасибо, приятель!",
    category: "People",
    color: "pink",
    emoji: "🤝",
    difficulty: "Easy",
  },
  {
    word: "Cheeky",
    translation: "Дерзкий, нахальный (в хорошем смысле)",
    example: "That's a cheeky smile!",
    exampleRu: "Какая дерзкая улыбка!",
    category: "Feelings",
    color: "cyan",
    emoji: "😏",
    difficulty: "Easy",
  },
  {
    word: "Gutted",
    translation: "Расстроенный, убитый горем",
    example: "I'm gutted we lost the match.",
    exampleRu: "Я убит горем, что мы проиграли матч.",
    category: "Feelings",
    color: "green",
    emoji: "😞",
    difficulty: "Medium",
  },
  {
    word: "Gobsmacked",
    translation: "Поражённый, ошарашенный",
    example: "I was absolutely gobsmacked!",
    exampleRu: "Я был просто ошарашен!",
    category: "Feelings",
    color: "yellow",
    emoji: "😲",
    difficulty: "Hard",
  },
  {
    word: "Knackered",
    translation: "Очень уставший, вымотанный",
    example: "I'm completely knackered after PE.",
    exampleRu: "Я совсем вымотался после физры.",
    category: "Feelings",
    color: "pink",
    emoji: "😴",
    difficulty: "Medium",
  },
  {
    word: "Brilliant",
    translation: "Отлично! Потрясающе!",
    example: "That film was brilliant!",
    exampleRu: "Этот фильм был потрясающим!",
    category: "Reactions",
    color: "cyan",
    emoji: "✨",
    difficulty: "Easy",
  },
  {
    word: "Dodgy",
    translation: "Подозрительный, ненадёжный",
    example: "That looks a bit dodgy.",
    exampleRu: "Это выглядит немного подозрительно.",
    category: "Description",
    color: "green",
    emoji: "🤨",
    difficulty: "Medium",
  },
  {
    word: "Rubbish",
    translation: "Мусор / Ерунда, чушь",
    example: "That idea is rubbish!",
    exampleRu: "Это идея — полная чушь!",
    category: "Reactions",
    color: "yellow",
    emoji: "🗑️",
    difficulty: "Easy",
  },
  {
    word: "Fancy",
    translation: "Хотеть / нравиться кому-то",
    example: "Do you fancy some chips?",
    exampleRu: "Хочешь немного картошки фри?",
    category: "Actions",
    color: "pink",
    emoji: "💜",
    difficulty: "Medium",
  },
  {
    word: "Fit",
    translation: "Привлекательный, симпатичный",
    example: "He's really fit!",
    exampleRu: "Он очень симпатичный!",
    category: "Description",
    color: "cyan",
    emoji: "😍",
    difficulty: "Medium",
  },
  {
    word: "Banter",
    translation: "Дружеские подколки, приколы",
    example: "It's just a bit of banter.",
    exampleRu: "Это просто дружеские приколы.",
    category: "Actions",
    color: "green",
    emoji: "😄",
    difficulty: "Hard",
  },
];

const quizQuestions = [
  {
    question: "Что значит «Mate»?",
    word: "Mate",
    options: ["Враг", "Друг, приятель", "Учитель", "Незнакомец"],
    correct: 1,
  },
  {
    question: "Переведи: «I'm gutted»",
    word: "Gutted",
    options: ["Я голоден", "Я устал", "Я расстроен", "Я рад"],
    correct: 2,
  },
  {
    question: "Что значит «Brilliant»?",
    word: "Brilliant",
    options: ["Скучно", "Отлично! Потрясающе!", "Странно", "Дорого"],
    correct: 1,
  },
  {
    question: "«That's dodgy» — это значит...",
    word: "Dodgy",
    options: ["Это красиво", "Это вкусно", "Это подозрительно", "Это весело"],
    correct: 2,
  },
  {
    question: "Что значит «Knackered»?",
    word: "Knackered",
    options: ["Злой", "Вымотанный, уставший", "Счастливый", "Голодный"],
    correct: 1,
  },
  {
    question: "«Do you fancy this?» означает...",
    word: "Fancy",
    options: ["Ты боишься этого?", "Ты хочешь это?", "Ты понимаешь это?", "Ты видишь это?"],
    correct: 1,
  },
];

const colorMap = {
  yellow: {
    border: "neon-border-yellow",
    text: "neon-text-yellow",
    tag: "bg-yellow-500/20 text-yellow-300",
  },
  pink: {
    border: "neon-border-pink",
    text: "neon-text-pink",
    tag: "bg-purple-500/20 text-purple-300",
  },
  cyan: {
    border: "neon-border-cyan",
    text: "neon-text-cyan",
    tag: "bg-cyan-500/20 text-cyan-300",
  },
  green: {
    border: "neon-border-green",
    text: "neon-text-green",
    tag: "bg-green-500/20 text-green-300",
  },
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-500/20 text-green-300",
  Medium: "bg-yellow-500/20 text-yellow-300",
  Hard: "bg-red-500/20 text-red-300",
};

type Tab = "lessons" | "quiz";

export default function Index() {
  const [tab, setTab] = useState<Tab>("lessons");
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [filter, setFilter] = useState("All");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const categories = ["All", ...Array.from(new Set(slangWords.map((w) => w.category)))];
  const filtered = filter === "All" ? slangWords : slangWords.filter((w) => w.category === filter);

  const handleFlip = (i: number) => {
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quizQuestions[quizIndex].correct) {
      setScore((s) => s + 1);
    }
    setTimeout(() => {
      if (quizIndex + 1 >= quizQuestions.length) {
        setQuizDone(true);
      } else {
        setQuizIndex((q) => q + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setQuizDone(false);
  };

  const q = quizQuestions[quizIndex];

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-bg)" }}>
      {/* Header */}
      <header className="pt-10 pb-6 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(245,230,66,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl animate-float">🇬🇧</span>
            <span
              className="tag-pill font-display text-xs"
              style={{
                background: "rgba(245,230,66,0.1)",
                color: "#f5e642",
                border: "1px solid rgba(245,230,66,0.3)",
              }}
            >
              7 класс
            </span>
          </div>
          <h1
            className="font-display text-3xl md:text-5xl font-black mb-3 leading-tight"
            style={{ color: "var(--neon-yellow)", textShadow: "0 0 40px rgba(245,230,66,0.4)" }}
          >
            BRITISH SLANG
          </h1>
          <p className="text-base font-medium max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Молодёжный британский сленг — говори как настоящий лондонец
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex justify-center gap-3 px-4 mb-8">
        {(["lessons", "quiz"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="font-display text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200"
            style={
              tab === t
                ? { background: "var(--neon-yellow)", color: "#0d0d14" }
                : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }
            }
          >
            {t === "lessons" ? (
              <span className="flex items-center gap-2">
                <Icon name="BookOpen" size={16} /> Уроки
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Icon name="Trophy" size={16} /> Викторина
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* LESSONS TAB */}
        {tab === "lessons" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: "Слов", value: slangWords.length, icon: "BookMarked", color: "yellow" },
                { label: "Тем", value: categories.length - 1, icon: "Layers", color: "pink" },
                { label: "Уровней", value: 3, icon: "Star", color: "cyan" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`slang-card ${colorMap[s.color as keyof typeof colorMap].border} text-center py-4`}
                >
                  <Icon
                    name={s.icon}
                    size={20}
                    className={`mx-auto mb-1 ${colorMap[s.color as keyof typeof colorMap].text}`}
                  />
                  <div
                    className={`font-display text-2xl font-black ${colorMap[s.color as keyof typeof colorMap].text}`}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="tag-pill text-xs transition-all duration-150"
                  style={
                    filter === cat
                      ? { background: "var(--neon-yellow)", color: "#0d0d14", border: "1px solid transparent" }
                      : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((w, i) => {
                const col = colorMap[w.color as keyof typeof colorMap];
                const isFlipped = flipped[i];
                return (
                  <div
                    key={w.word}
                    className={`slang-card ${col.border} animate-slide-up`}
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      opacity: 0,
                      animationFillMode: "forwards",
                    }}
                    onClick={() => handleFlip(i)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{w.emoji}</span>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`tag-pill ${col.tag}`}>{w.category}</span>
                        <span className={`tag-pill ${difficultyColor[w.difficulty]}`}>
                          {w.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className={`font-display text-2xl font-black mb-1 ${col.text}`}>
                      {w.word}
                    </div>

                    {!isFlipped ? (
                      <div
                        className="text-sm mt-2 flex items-center gap-1"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        <Icon name="Eye" size={14} />
                        <span>Нажми, чтобы узнать перевод</span>
                      </div>
                    ) : (
                      <div className="animate-fade-in">
                        <div className="text-white font-medium text-base mb-3">
                          {w.translation}
                        </div>
                        <div
                          className="rounded-lg p-3 text-sm"
                          style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                          <p className={`font-medium mb-0.5 ${col.text}`}>{w.example}</p>
                          <p style={{ color: "rgba(255,255,255,0.45)" }}>{w.exampleRu}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* QUIZ TAB */}
        {tab === "quiz" && (
          <div className="max-w-xl mx-auto">
            {!quizDone ? (
              <div className="animate-slide-up">
                {/* Progress */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-sm font-display"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {quizIndex + 1} / {quizQuestions.length}
                  </span>
                  <span
                    className="tag-pill font-display"
                    style={{
                      background: "rgba(245,230,66,0.15)",
                      color: "#f5e642",
                    }}
                  >
                    <Icon name="Star" size={12} className="inline mr-1" />
                    {score} очков
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="w-full h-1.5 rounded-full mb-8 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(quizIndex / quizQuestions.length) * 100}%`,
                      background:
                        "linear-gradient(90deg, var(--neon-yellow), var(--neon-pink))",
                    }}
                  />
                </div>

                {/* Question card */}
                <div className="slang-card neon-border-yellow mb-6 text-center py-8">
                  <div className="text-5xl mb-4 animate-float">🤔</div>
                  <div className="font-display text-xl font-bold text-white mb-2">
                    {q.question}
                  </div>
                  <div
                    className="font-display text-3xl font-black mt-2"
                    style={{
                      color: "var(--neon-yellow)",
                      textShadow: "0 0 20px rgba(245,230,66,0.5)",
                    }}
                  >
                    «{q.word}»
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-3">
                  {q.options.map((opt, idx) => {
                    let cls = "quiz-option";
                    if (selected !== null) {
                      if (idx === q.correct) cls += " correct";
                      else if (idx === selected && idx !== q.correct) cls += " wrong";
                    }
                    return (
                      <button key={idx} className={cls} onClick={() => handleAnswer(idx)}>
                        <span
                          className="font-display text-xs mr-2"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {["A", "B", "C", "D"][idx]}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="slang-card neon-border-yellow text-center py-12 animate-slide-up">
                <div className="text-6xl mb-4">
                  {score >= 5 ? "🏆" : score >= 3 ? "👍" : "💪"}
                </div>
                <div
                  className="font-display text-4xl font-black mb-2"
                  style={{
                    color: "var(--neon-yellow)",
                    textShadow: "0 0 30px rgba(245,230,66,0.5)",
                  }}
                >
                  {score} / {quizQuestions.length}
                </div>
                <div
                  className="text-lg mb-2 font-medium"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {score === quizQuestions.length
                    ? "Безупречно! Ты настоящий лондонец!"
                    : score >= 4
                    ? "Отлично! Почти perfect!"
                    : score >= 2
                    ? "Неплохо! Ещё немного практики"
                    : "Повторяй карточки и попробуй снова!"}
                </div>
                <div className="flex justify-center gap-2 my-4">
                  {Array.from({ length: quizQuestions.length }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{
                        background:
                          i < score ? "var(--neon-green)" : "rgba(255,255,255,0.12)",
                        boxShadow:
                          i < score ? "0 0 8px rgba(105,255,71,0.6)" : "none",
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={resetQuiz}
                  className="mt-4 font-display font-bold text-sm px-8 py-3 rounded-xl transition-colors"
                  style={{ background: "var(--neon-yellow)", color: "#0d0d14" }}
                >
                  Попробовать снова
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        className="text-center pb-8 text-xs font-display"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        🇬🇧 BRITISH SLANG · 7 КЛАСС
      </footer>
    </div>
  );
}
