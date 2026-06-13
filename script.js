// ===========================
//  HARVESTIFY — script.js FINAL
//  Rotating Globe + Quiz (all 4 answers) + Smart Chatbot
// ===========================

// ─── CROP DATA ────────────────────────────────────────────────────────────────
const ALL_CROPS = [
    {
        id: "basil", name: "Basil", emoji: "🍃",
        image: "https://images.unsplash.com/photo-1629157247277-48f870757026?q=80&w=400&auto=format&fit=crop",
        category: "herb", tags: ["herbs"],
        space: ["windowsill", "balcony", "room"], light: ["medium", "lots"], experience: ["beginner", "pro"],
        reason: "Thrives in small hydroponic setups and grows up to 25% faster than soil — fresh pesto in 3–4 weeks.",
        growTime: "Ready in 3–4 weeks", badge: "Fan Favourite", difficulty: "Easy",
        phRange: "5.5–6.5", ecRange: "1.0–1.6 mS/cm", lightHours: "14–16 hrs/day", system: "DWC or Kratky",
        howToGrow: "Use a Deep Water Culture (DWC) or Kratky system. Germinate seeds in rockwool cubes or net pots filled with hydroton clay pebbles. Maintain pH between 5.5–6.5 and EC 1.0–1.6 mS/cm. Needs 14–16 hours of light per day. Keep water at 65–72°F. Pinch flower buds to encourage bushy growth. Harvest outer leaves, never removing more than one-third at a time.",
        whyGrow: "Basil grows 20–25% faster in water than soil, stays pest-free indoors, and produces intensely aromatic leaves year-round. Hydroponic basil uses 90% less water than soil-grown and contains no pesticide residues."
    },
    {
        id: "lettuce", name: "Lettuce", emoji: "🥬",
        image: "https://images.unsplash.com/photo-1556781366-336f8353ba7c?q=80&w=400&auto=format&fit=crop",
        category: "green", tags: ["greens"],
        space: ["windowsill", "balcony", "room"], light: ["low", "medium", "lots"], experience: ["beginner", "pro"],
        reason: "The world's most popular hydroponic crop — forgiving, fast, and endlessly harvestable with cut-and-come-again leaves.",
        growTime: "Ready in 3–5 weeks", badge: "Best for Beginners", difficulty: "Very Easy",
        phRange: "5.5–6.5", ecRange: "0.8–1.2 mS/cm", lightHours: "10–12 hrs/day", system: "NFT, Kratky, or Raft",
        howToGrow: "Thrives in NFT channels, floating raft, or Kratky jars. Maintain pH 5.5–6.5, EC 0.8–1.2 mS/cm. Only needs 10–12 hours of indirect light. Keep water at 60–70°F — above 75°F it bolts and turns bitter. Harvest outer leaves continuously.",
        whyGrow: "Grows 2–3× faster than soil varieties. Commercial hydroponic farms produce up to 11 harvests per year vs one for soil farms. A single NFT channel at home can produce $300+ worth of greens annually."
    },
    {
        id: "mint", name: "Mint", emoji: "🌱",
        image: "https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=400&auto=format&fit=crop",
        category: "herb", tags: ["herbs"],
        space: ["windowsill", "balcony", "room"], light: ["low", "medium"], experience: ["beginner", "pro"],
        reason: "Grows vigorously in water — mint is semi-aquatic by nature and genuinely thrives with low light.",
        growTime: "Ready in 2–3 weeks", badge: "Low Light Hero", difficulty: "Very Easy",
        phRange: "6.0–7.0", ecRange: "1.2–1.6 mS/cm", lightHours: "10–12 hrs/day", system: "Kratky or DWC",
        howToGrow: "Propagate from cuttings — strip lower leaves and place in water. Roots appear in 1–2 weeks. Maintain pH 6.0–7.0, EC 1.2–1.6 mS/cm. Needs only 10–12 hours of light. Harvest by cutting stems to the second leaf set. Change nutrient solution weekly.",
        whyGrow: "Mint evolved in riparian environments — hydroponics is its natural habitat. Fresh mint aids digestion, soothes headaches via menthol, and has antimicrobial properties. One plant supplies daily teas and cooking indefinitely."
    },
    {
        id: "spinach", name: "Spinach", emoji: "🥬",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400&auto=format&fit=crop",
        category: "green", tags: ["greens"],
        space: ["windowsill", "balcony", "room"], light: ["low", "medium", "lots"], experience: ["beginner", "pro"],
        reason: "Hydroponic spinach yields up to 3× more per square foot than soil and delivers iron, folate, and vitamins K and A on demand.",
        growTime: "Ready in 4–6 weeks", badge: "Superfood", difficulty: "Easy",
        phRange: "6.0–7.0", ecRange: "1.2–2.0 mS/cm", lightHours: "10–14 hrs/day", system: "DWC or NFT",
        howToGrow: "Start seeds in rockwool or net pots. pH 6.0–7.0, EC 1.2–2.0 mS/cm, 10–14 hours light. Keep water at 60–68°F — spinach bolts in heat. Harvest outer leaves always leaving the inner rosette.",
        whyGrow: "One 100g serving provides 181% of daily vitamin K and 49% of vitamin A. Hydroponic spinach retains up to 47% more folate than store-bought. NASA uses it in space farming research for its nutritional density."
    },
    {
        id: "cherry-tomatoes", name: "Cherry Tomatoes", emoji: "🍅",
        image: "https://images.unsplash.com/photo-1594057687713-5fd14eed1c17?q=80&w=400&auto=format&fit=crop",
        category: "fruit", tags: ["fruits"],
        space: ["balcony", "room"], light: ["lots"], experience: ["pro"],
        reason: "Compact, prolific — a hydroponic cherry tomato plant produces fruit continuously for 8–12 months.",
        growTime: "First harvest in 8–12 weeks", badge: "Pro Pick", difficulty: "Advanced",
        phRange: "5.8–6.3", ecRange: "2.0–4.0 mS/cm", lightHours: "14–18 hrs/day", system: "Dutch Bucket or DWC",
        howToGrow: "Use Dutch bucket or DWC (one per plant). pH 5.8–6.3, EC 2.0–4.0 mS/cm. Needs 14–18 hours of strong light. Stake plants — they reach 6–8 feet. Pollinate by gently shaking stems. Prune suckers weekly.",
        whyGrow: "A single plant produces 5–10 kg of fruit per season. Hydroponic tomatoes score higher in taste tests — vine-ripened and eaten fresh. Rich in lycopene, vitamin C, and antioxidants."
    },
    {
        id: "strawberry", name: "Strawberries", emoji: "🍓",
        image: "https://images.unsplash.com/photo-1594282241894-4da286138f44?q=80&w=400&auto=format&fit=crop",
        category: "fruit", tags: ["fruits"],
        space: ["balcony", "room"], light: ["medium", "lots"], experience: ["pro"],
        reason: "Sweet, rewarding, and visually stunning — hydroponic strawberries produce fruit year-round.",
        growTime: "First harvest in 8–12 weeks", badge: "Showstopper", difficulty: "Intermediate",
        phRange: "5.5–6.5", ecRange: "1.0–2.0 mS/cm", lightHours: "12–16 hrs/day", system: "NFT or Vertical Tower",
        howToGrow: "Use day-neutral varieties like 'Albion' or 'Seascape'. NFT channels or vertical towers work best. pH 5.5–6.5, EC 1.0–2.0 mS/cm, 12–16 hours light at 62–72°F. Hand-pollinate with a small paintbrush indoors.",
        whyGrow: "Hydroponic strawberries are harvested at peak ripeness — sugar content is dramatically higher than shipped supermarket fruit. Rich in vitamin C, manganese, and anthocyanins linked to reduced inflammation."
    },
    {
        id: "microgreens", name: "Microgreens", emoji: "🌱",
        image: "https://images.unsplash.com/photo-1647613233075-e0d5546b0f22?q=80&w=400&auto=format&fit=crop",
        category: "exotic", tags: ["exotic"],
        space: ["windowsill", "balcony", "room"], light: ["low", "medium", "lots"], experience: ["beginner", "pro"],
        reason: "Ready in under 2 weeks — microgreens contain up to 40× more nutrients than mature plants.",
        growTime: "Ready in 7–14 days", badge: "Fastest Harvest", difficulty: "Very Easy",
        phRange: "N/A (water only)", ecRange: "N/A", lightHours: "12–16 hrs/day", system: "Tray method",
        howToGrow: "Use shallow trays with hemp mat or coco coir. Soak seeds 4–8 hours, spread densely, cover 2–4 days in darkness (blackout phase), then give 12–16 hours of light. Bottom-water only. Harvest with scissors when first true leaves appear.",
        whyGrow: "A 2012 USDA study found microgreens contain 4–40× more concentrated vitamins than mature vegetables. Radish microgreens have 40× more vitamin E than full-grown radish. Fastest return on investment in all home food growing."
    },
    {
        id: "watercress", name: "Watercress", emoji: "🌾",
        image: "https://images.unsplash.com/photo-1664355048238-65d3dda1a0c2?q=80&w=400&auto=format&fit=crop",
        category: "exotic", tags: ["exotic", "greens"],
        space: ["windowsill", "balcony", "room"], light: ["medium", "lots"], experience: ["beginner", "pro"],
        reason: "Watercress evolved growing in streams — the most naturally hydroponic edible plant on earth.",
        growTime: "Ready in 2–3 weeks", badge: "Born Hydroponic", difficulty: "Very Easy",
        phRange: "6.5–7.5", ecRange: "0.4–1.8 mS/cm", lightHours: "12–14 hrs/day", system: "DWC or NFT",
        howToGrow: "Start from supermarket cuttings in a glass of water — roots appear within days. Transfer to DWC or NFT. pH 6.5–7.5, EC 0.4–1.8 mS/cm. Prefers 50–68°F. Harvest outer shoots continuously.",
        whyGrow: "Watercress scored 100/100 on the CDC's nutrient density index. More vitamin C than oranges per gram, more calcium than milk per gram. Research shows it significantly reduces DNA damage markers."
    },
    {
        id: "kale", name: "Kale", emoji: "🥬",
        image: "https://images.unsplash.com/photo-1624300477446-d379e923eca8?q=80&w=400&auto=format&fit=crop",
        category: "green", tags: ["greens"],
        space: ["balcony", "room"], light: ["medium", "lots"], experience: ["beginner", "pro"],
        reason: "Cut-and-come-again for months — hydroponic kale grows 2× faster than field-grown.",
        growTime: "Ready in 5–7 weeks", badge: "Nutrient Dense", difficulty: "Easy",
        phRange: "5.5–6.5", ecRange: "1.4–2.0 mS/cm", lightHours: "14–16 hrs/day", system: "DWC or NFT",
        howToGrow: "Start seeds in rockwool, transplant to DWC or NFT with 3–4 inch net pots. pH 5.5–6.5, EC 1.4–2.0 mS/cm, 14–16 hours light at 60–75°F. Harvest outer leaves always leaving the central tip. One plant harvests continuously for 4–6 months.",
        whyGrow: "One cup provides 206% of daily vitamin A, 134% vitamin C, and 684% vitamin K. Contains glucosinolates studied for anti-cancer properties. Hydroponic kale shows higher antioxidant concentrations than field-grown."
    },
    {
        id: "arugula", name: "Arugula", emoji: "🥬",
        image: "https://plus.unsplash.com/premium_photo-1675715402954-1107ca03341d?q=80&w=400&auto=format&fit=crop",
        category: "green", tags: ["greens"],
        space: ["windowsill", "balcony", "room"], light: ["low", "medium"], experience: ["beginner", "pro"],
        reason: "One of the fastest-maturing salad greens — peppery, flavourful, and ready in under 4 weeks with minimal light.",
        growTime: "Ready in 3–4 weeks", badge: "Flavour Punch", difficulty: "Very Easy",
        phRange: "6.0–7.0", ecRange: "0.8–1.4 mS/cm", lightHours: "10–12 hrs/day", system: "NFT or Kratky",
        howToGrow: "Direct-sow into net pots or shallow NFT channels. pH 6.0–7.0, EC 0.8–1.4 mS/cm. Only 10–12 hours of light needed. Prefers cool 45–65°F. Harvest young at 2–3 inches for mild flavour or mature for peppery kick.",
        whyGrow: "Arugula's peppery flavour comes from glucosinolates with anti-cancer properties. Rich in vitamin K, folate, and calcium. One of the most reliable low-light crops — perfect for dim apartments."
    },
    {
        id: "peppers", name: "Bell Peppers", emoji: "🫑",
        image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?q=80&w=400&auto=format&fit=crop",
        category: "fruit", tags: ["fruits"],
        space: ["room"], light: ["lots"], experience: ["pro"],
        reason: "A deeply rewarding grow — a single hydroponic pepper plant yields 50–100 peppers per season.",
        growTime: "First harvest in 10–14 weeks", badge: "Advanced Grow", difficulty: "Advanced",
        phRange: "5.8–6.3", ecRange: "1.8–3.5 mS/cm", lightHours: "16–18 hrs/day", system: "Dutch Bucket",
        howToGrow: "Dutch buckets or 5+ gallon DWC. Germinate at 80–85°F. pH 5.8–6.3, EC 1.8–3.5 mS/cm, 16–18 hours high-intensity light. Stake plants firmly. Hand-pollinate by vibrating flowering stems. Drop night temp 10°F to trigger fruiting.",
        whyGrow: "A single red pepper contains 169% of daily vitamin C. Fully vine-ripened red peppers contain 9× more beta-carotene and 11× more antioxidants than unripe green ones — only achievable by growing your own."
    },
    {
        id: "cilantro", name: "Cilantro", emoji: "🌿",
        image: "https://images.unsplash.com/photo-1723810330043-dd05647294cb?q=80&w=400&auto=format&fit=crop",
        category: "herb", tags: ["herbs"],
        space: ["windowsill", "balcony"], light: ["medium", "lots"], experience: ["beginner", "pro"],
        reason: "Fresh cilantro loses aroma within hours of cutting — growing it on your counter means flavour on demand.",
        growTime: "Ready in 3–4 weeks", badge: "Kitchen Staple", difficulty: "Easy",
        phRange: "6.2–6.8", ecRange: "1.0–1.4 mS/cm", lightHours: "12–14 hrs/day", system: "NFT or Kratky",
        howToGrow: "Sow seeds directly — cilantro dislikes transplanting due to its taproot. Crush seeds slightly before sowing. pH 6.2–6.8, EC 1.0–1.4 mS/cm, 12–14 hours light at 50–70°F. Succession-sow every 3 weeks for continuous supply.",
        whyGrow: "Store-bought cilantro loses 50% of its volatile aroma within 24 hours of harvest. Growing your own means cutting seconds before use. Contains compounds shown to reduce blood sugar and has documented anti-inflammatory properties."
    }
];

// ─── QUIZ STATE ───────────────────────────────────────────────────────────────
const quizAnswers = { space: null, light: null, experience: null, goal: null };
let currentStep = 0;
const totalSteps = 4;

const WEIGHTS = {
    space: { match: 4, noMatch: -999 },
    light: { match: 4, noMatch: -999 },
    experience: { match: 3, noMatch: -1 },
    goal: { match: 5, noMatch: 0 }
};

function matchCrops(answers) {
    const { space, light, experience, goal } = answers;
    if (!space || !light || !experience || !goal) return [];
    const scored = ALL_CROPS.map(crop => {
        let score = 0;
        score += crop.space.includes(space) ? WEIGHTS.space.match : WEIGHTS.space.noMatch;
        score += crop.light.includes(light) ? WEIGHTS.light.match : WEIGHTS.light.noMatch;
        score += crop.experience.includes(experience) ? WEIGHTS.experience.match : WEIGHTS.experience.noMatch;
        score += crop.tags.includes(goal) ? WEIGHTS.goal.match : WEIGHTS.goal.noMatch;
        if (crop.space.includes(space) && crop.light.includes(light) &&
            crop.experience.includes(experience) && crop.tags.includes(goal)) score += 3;
        return { crop, score };
    });
    const viable = scored.filter(s => s.score >= 0).sort((a, b) => b.score - a.score);
    if (viable.length === 0) return scored.sort((a, b) => b.score - a.score).slice(0, 3).map(s => s.crop);
    return viable.slice(0, 3).map(s => s.crop);
}

function updateProgress() {
    const pct = Math.round(((currentStep + 1) / totalSteps) * 100);
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressLabel").textContent = `Question ${currentStep + 1} of ${totalSteps}`;
}

function goToStep(n) {
    document.querySelectorAll(".quiz-step").forEach(s => s.classList.remove("active"));
    const target = document.querySelector(`.quiz-step[data-step="${n}"]`);
    if (target) target.classList.add("active");
    currentStep = n;
    updateProgress();
}

function handleOptionClick(btn) {
    quizAnswers[btn.dataset.key] = btn.dataset.val;
    btn.closest(".options-grid").querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    setTimeout(() => {
        if (currentStep < totalSteps - 1) goToStep(currentStep + 1);
        else showResults();
    }, 420);
}

function showResults() {
    const matches = matchCrops({ ...quizAnswers });
    const cards = document.getElementById("resultsCards");
    cards.innerHTML = "";
    matches.forEach(crop => {
        const card = document.createElement("div");
        card.className = "result-card";
        card.innerHTML = `
      <img class="result-img" src="${crop.image}" alt="${crop.name}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="result-emoji" style="display:none">${crop.emoji}</span>
      <span class="result-name">${crop.name}</span>
      <span class="result-badge">${crop.badge}</span>
      <p class="result-reason">${crop.reason}</p>
      <span class="result-grow-time">🕐 ${crop.growTime}</span>
    `;
        cards.appendChild(card);
    });
    document.getElementById("quizSteps").style.display = "none";
    document.getElementById("progressWrapper").style.display = "none";
    document.getElementById("quizResults").classList.remove("hidden");
    document.getElementById("quizResults").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(fireConfetti, 400);
}

function resetQuiz() {
    quizAnswers.space = quizAnswers.light = quizAnswers.experience = quizAnswers.goal = null;
    currentStep = 0;
    document.getElementById("quizSteps").style.display = "";
    document.getElementById("progressWrapper").style.display = "";
    document.getElementById("quizResults").classList.add("hidden");
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    goToStep(0);
    document.getElementById("quiz-section").scrollIntoView({ behavior: "smooth" });
}

// ─── TICKER ───────────────────────────────────────────────────────────────────
function buildTicker() {
    const ticker = document.getElementById("cropTicker");
    [...ALL_CROPS, ...ALL_CROPS].forEach(crop => {
        const card = document.createElement("div");
        card.className = "crop-card-mini";
        card.innerHTML = `<span class="mini-emoji">${crop.emoji}</span><span class="mini-name">${crop.name}</span><span class="mini-tag">${crop.growTime}</span>`;
        ticker.appendChild(card);
    });
}

// ─── CONFETTI ─────────────────────────────────────────────────────────────────
function fireConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    const banner = document.getElementById("confettiBanner");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const COLORS = ["#6B8F71", "#3E5E44", "#A8C5AD", "#D6E8D9", "#F7F5F0", "#FFD700", "#FFA07A", "#87CEEB", "#fff"];
    const pieces = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * -canvas.height * 0.6 - 20,
        w: Math.random() * 14 + 6, h: Math.random() * 7 + 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vy: Math.random() * 4.5 + 1.5, vx: (Math.random() - 0.5) * 3.5,
        angle: Math.random() * 360, spin: (Math.random() - 0.5) * 9, opacity: 1
    }));
    banner.classList.remove("hidden"); banner.classList.add("show");
    setTimeout(() => {
        banner.classList.replace("show", "hide");
        setTimeout(() => { banner.classList.add("hidden"); banner.classList.remove("hide"); }, 500);
    }, 2800);
    let frame = 0; const maxFrames = 240;
    (function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            ctx.save(); ctx.translate(p.x + p.w / 2, p.y + p.h / 2); ctx.rotate(p.angle * Math.PI / 180);
            ctx.globalAlpha = Math.max(0, p.opacity); ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
            p.y += p.vy; p.x += p.vx; p.angle += p.spin;
            if (frame > maxFrames * 0.55) p.opacity -= 0.014;
        });
        if (++frame < maxFrames) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    })();
}

// ─── SMART CHATBOT ────────────────────────────────────────────────────────────
function findCropMention(text) {
    const lower = text.toLowerCase();
    return ALL_CROPS.find(c => lower.includes(c.name.toLowerCase()) || lower.includes(c.id.toLowerCase())) || null;
}

function detectIntent(text) {
    const t = text.toLowerCase();
    if (/how.*(grow|start|setup|begin|plant)/i.test(t)) return "how";
    if (/why.*(grow|worth|benefit|good|health)/i.test(t)) return "why";
    if (/ph|acid|alkaline/i.test(t)) return "ph";
    if (/\bec\b|nutrient|ppm|feed/i.test(t)) return "ec";
    if (/light|hours|sun|bright|dim|dark/i.test(t)) return "light";
    if (/system|setup|equipment|nft|dwc|kratky|bucket/i.test(t)) return "system";
    if (/difficult|hard|easy|beginner/i.test(t)) return "difficulty";
    if (/time|long|week|days|harvest|ready/i.test(t)) return "time";
    if (/best.*beginner|easiest|start with|recommend/i.test(t)) return "recommend_beginner";
    if (/low.?light|no.?light|dark|dim/i.test(t)) return "recommend_lowlight";
    if (/fastest|quickest|quick/i.test(t)) return "recommend_fastest";
    if (/nutriti|healthy|vitamin|mineral|superfood/i.test(t)) return "recommend_nutrition";
    if (/what is hydro|hydroponics mean|explain hydro/i.test(t)) return "explain_hydroponics";
    if (/list|all crops|what crops|which crops/i.test(t)) return "list_crops";
    if (/hello|^hi\b|^hey\b|howdy/i.test(t)) return "greeting";
    return "general";
}

function generateResponse(userText) {
    const crop = findCropMention(userText);
    const intent = detectIntent(userText);

    if (intent === "greeting")
        return `Hi there! 👋 I'm Harvestify's crop guide. Ask me anything about our 12 hydroponic crops — how to grow them, why they're worth it, what equipment you need, or which crop suits your space best!`;

    if (intent === "explain_hydroponics")
        return `🌊 Hydroponics is the method of growing plants in nutrient-rich water instead of soil. Roots are suspended in or regularly flooded with a mineral solution containing nitrogen, phosphorus, potassium, calcium, and trace elements.\n\nHydroponic plants grow up to 3× faster than soil-grown, use 90% less water, and can be grown anywhere year-round — from a kitchen windowsill to a vertical city farm.\n\nCommon systems: Deep Water Culture (DWC), Nutrient Film Technique (NFT), Kratky (passive, no pump), and Dutch Bucket for fruiting crops. Want to know which system suits your space?`;

    if (intent === "list_crops")
        return `Here are all 12 crops on Harvestify:\n\n${ALL_CROPS.map(c => `${c.emoji} ${c.name} — ${c.growTime}`).join("\n")}\n\nAsk me about any of them!`;

    if (intent === "recommend_beginner")
        return `🌱 Top 3 for complete beginners:\n\n1. 🥬 Lettuce — most forgiving crop, ready in 3–5 weeks, tolerates low light.\n2. 🌱 Mint — roots itself from cuttings in water, almost impossible to kill, ready in 2–3 weeks.\n3. 🌱 Microgreens — no nutrient solution needed, just water. Ready in 7–14 days.\n\nAll three work on a windowsill with minimal equipment!`;

    if (intent === "recommend_lowlight")
        return `🌑 Best crops for low-light conditions:\n\n${ALL_CROPS.filter(c => c.light.includes("low")).map(c => `${c.emoji} ${c.name}`).join(", ")}\n\nTop picks: 🌱 Mint and 🥬 Lettuce are most reliable in dim spaces. A basic LED grow light running 10–12 hours is all you need.`;

    if (intent === "recommend_fastest")
        return `⚡ Fastest-growing crops:\n\n1. 🌱 Microgreens — 7–14 days. Nothing faster.\n2. 🌱 Mint — 2–3 weeks from cutting.\n3. 🌾 Watercress — 2–3 weeks, roots from supermarket cuttings.\n4. 🍃 Basil & 🥬 Arugula — 3–4 weeks each.\n\nStart with microgreens if you want food on the table fast!`;

    if (intent === "recommend_nutrition")
        return `💚 Most nutritionally dense crops:\n\n1. 🌾 Watercress — 100/100 CDC nutrient density score. More vitamin C than oranges per gram.\n2. 🌱 Microgreens — up to 40× more vitamins than mature plants (USDA, 2012).\n3. 🥬 Kale — 684% of daily vitamin K per cup.\n4. 🥬 Spinach — 181% of vitamin K, 49% of vitamin A per 100g.`;

    if (crop) {
        if (intent === "how") return `${crop.emoji} How to grow ${crop.name}:\n\n${crop.howToGrow}`;
        if (intent === "why") return `${crop.emoji} Why grow ${crop.name}?\n\n${crop.whyGrow}`;
        if (intent === "ph") return `${crop.emoji} ${crop.name} pH: ${crop.phRange}. Use a digital pH meter and adjust with pH Up (potassium hydroxide) or pH Down (phosphoric acid). Check every time you top up the reservoir.`;
        if (intent === "ec") return `${crop.emoji} ${crop.name} EC: ${crop.ecRange}. EC measures nutrient concentration. Start at the lower end and increase as the plant matures. Use a digital EC meter.`;
        if (intent === "light") return `${crop.emoji} ${crop.name} needs ${crop.lightHours} of light per day. ${crop.light.includes("low") ? "Tolerates low light well — a north-facing window or basic LED grow light works." : crop.light.includes("lots") ? "Needs strong direct light — a south-facing window or dedicated grow light recommended." : "Moderate indirect light or a standard LED grow light works well."}`;
        if (intent === "system") return `${crop.emoji} Best system for ${crop.name}: ${crop.system}.`;
        if (intent === "difficulty") return `${crop.emoji} ${crop.name} difficulty: ${crop.difficulty}. ${crop.difficulty === "Very Easy" ? "Perfect for first-time growers." : crop.difficulty === "Easy" ? "Suitable for beginners with minimal research." : crop.difficulty === "Intermediate" ? "Requires some attention to pH, EC, and temperature." : "Best for experienced growers — needs dialled-in nutrients and strong lighting."}`;
        if (intent === "time") return `${crop.emoji} ${crop.name}: ${crop.growTime}.`;
        return `${crop.emoji} Quick overview of ${crop.name}:\n\n📋 Difficulty: ${crop.difficulty}\n🕐 Grow time: ${crop.growTime}\n⚗️ pH: ${crop.phRange}\n📡 EC: ${crop.ecRange}\n💡 Light: ${crop.lightHours}\n🔧 System: ${crop.system}\n\n${crop.reason}\n\nAsk "how to grow ${crop.name}" or "why grow ${crop.name}" for the full guide!`;
    }

    return `🌿 I'm Harvestify's crop guide! Ask me:\n\n• How to grow any of our 12 crops\n• Why each crop is worth growing\n• pH, EC, light, and system requirements\n• Which crop suits your space or experience level\n• What hydroponics is\n\nTry: "How do I grow basil?" or "Best crop for a beginner?"`;
}

let msgIdCounter = 0;
function appendChatMsg(role, avatar, text) {
    const messages = document.getElementById("chatMessages");
    const id = "msg-" + (++msgIdCounter);
    const div = document.createElement("div");
    div.id = id; div.className = `chat-msg chat-msg--${role}`;
    const formatted = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
    div.innerHTML = `<span class="msg-avatar">${avatar}</span><div class="msg-bubble">${formatted}</div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return id;
}

function buildChatBox() {
    const wrapper = document.createElement("div");
    wrapper.id = "chatWrapper";
    wrapper.innerHTML = `
    <div id="chatBubble" class="chat-bubble">
      <span class="chat-bubble-icon">🌱</span>
      <span class="chat-bubble-label">Ask about crops</span>
    </div>
    <div id="chatPanel" class="chat-panel hidden">
      <div class="chat-panel-header">
        <div class="chat-header-title"><span>🌿</span><span>Harvestify Crop Guide</span></div>
        <button id="chatClose" class="chat-close">✕</button>
      </div>
      <div class="chat-messages" id="chatMessages">
        <div class="chat-msg chat-msg--bot">
          <span class="msg-avatar">🌿</span>
          <div class="msg-bubble">Hi! I'm your Harvestify crop guide 🌱 Ask me anything about our 12 hydroponic crops — how to grow them, why they're worth growing, equipment needed, or which crop suits your space!</div>
        </div>
        <div class="chat-suggestions">
          <button class="chat-suggestion-btn">🥬 Best crop for a beginner?</button>
          <button class="chat-suggestion-btn">⚡ Which grows fastest?</button>
          <button class="chat-suggestion-btn">🌑 Good crops for low light?</button>
          <button class="chat-suggestion-btn">🍃 How do I grow basil?</button>
        </div>
      </div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" class="chat-input" placeholder="Ask anything about crops..." maxlength="300" autocomplete="off" />
        <button id="chatSend" class="chat-send-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>`;
    document.body.appendChild(wrapper);

    document.getElementById("chatBubble").addEventListener("click", () => {
        const panel = document.getElementById("chatPanel");
        panel.classList.toggle("hidden");
        if (!panel.classList.contains("hidden")) document.getElementById("chatInput").focus();
    });
    document.getElementById("chatClose").addEventListener("click", () => document.getElementById("chatPanel").classList.add("hidden"));
    document.getElementById("chatSend").addEventListener("click", handleSend);
    document.getElementById("chatInput").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); handleSend(); } });
    document.querySelectorAll(".chat-suggestion-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("chatInput").value = btn.textContent.replace(/^[^\w]+/, "").trim();
            handleSend();
            document.querySelector(".chat-suggestions")?.remove();
        });
    });
}

function handleSend() {
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    appendChatMsg("user", "🧑", text);
    setTimeout(() => appendChatMsg("bot", "🌿", generateResponse(text)), 280);
}

// ─── ROTATING GLOBE ───────────────────────────────────────────────────────────
const CONTINENTS = [
    // North America
    [[-168, 72], [-140, 70], [-125, 60], [-130, 54], [-124, 48], [-124, 37], [-117, 32], [-105, 20], [-90, 16], [-83, 10], [-77, 8], [-77, 25], [-80, 32], [-75, 45], [-65, 47], [-60, 46], [-64, 44], [-70, 41], [-72, 41], [-76, 34], [-80, 25], [-82, 28], [-85, 30], [-90, 29], [-94, 30], [-97, 26], [-100, 22], [-110, 24], [-116, 32], [-118, 34], [-124, 37], [-124, 48], [-130, 54], [-135, 58], [-140, 60], [-145, 60], [-152, 58], [-160, 56], [-165, 60], [-168, 60], [-168, 72]],
    // Greenland
    [[-44, 83], [-20, 83], [-18, 77], [-25, 72], [-44, 70], [-52, 68], [-54, 70], [-52, 75], [-44, 83]],
    // South America
    [[-82, 10], [-77, 8], [-60, -5], [-50, -1], [-36, -5], [-35, -8], [-37, -12], [-38, -18], [-40, -22], [-44, -23], [-48, -28], [-52, -33], [-58, -38], [-63, -42], [-65, -48], [-66, -55], [-68, -55], [-70, -52], [-72, -48], [-74, -44], [-72, -40], [-72, -35], [-70, -30], [-70, -18], [-76, -2], [-80, 0], [-82, 10]],
    // Europe
    [[0, 51], [2, 51], [8, 54], [10, 55], [12, 56], [18, 57], [24, 56], [26, 60], [28, 65], [26, 70], [20, 70], [15, 68], [12, 65], [10, 58], [5, 58], [0, 51]],
    // Scandinavia
    [[5, 58], [10, 58], [14, 56], [16, 57], [18, 58], [20, 60], [22, 63], [24, 65], [26, 68], [28, 70], [22, 70], [16, 68], [10, 63], [8, 60], [5, 58]],
    // Africa
    [[-18, 15], [0, 15], [10, 12], [15, 10], [20, 5], [25, 0], [30, -5], [35, -10], [35, -20], [32, -28], [28, -34], [20, -35], [16, -30], [14, -22], [10, -8], [8, 4], [2, 6], [-5, 5], [-8, 5], [-15, 10], [-18, 15]],
    // Asia
    [[26, 70], [35, 68], [50, 70], [70, 66], [100, 70], [130, 68], [140, 70], [160, 68], [168, 65], [165, 58], [145, 46], [140, 42], [135, 34], [130, 32], [122, 30], [110, 20], [100, 5], [104, -2], [110, -8], [115, -8], [108, 5], [100, 10], [96, 16], [88, 24], [80, 34], [62, 36], [52, 40], [48, 46], [40, 54], [36, 58], [30, 60], [26, 70]],
    // Australia
    [[114, -22], [122, -18], [128, -14], [136, -12], [140, -14], [148, -18], [152, -24], [154, -28], [150, -36], [144, -38], [136, -36], [128, -34], [120, -28], [114, -22]],
    // India
    [[68, 24], [72, 24], [76, 28], [80, 30], [84, 28], [88, 24], [88, 20], [84, 14], [80, 12], [76, 8], [72, 8], [70, 20], [68, 24]],
    // Japan
    [[130, 32], [134, 36], [138, 38], [140, 40], [141, 42], [138, 44], [132, 42], [130, 38], [130, 32]]
];

let globeRotation = 0;

function projectPoint(lon, lat, rot, cx, cy, r) {
    const lonRad = (lon + rot) * Math.PI / 180;
    const latRad = lat * Math.PI / 180;
    const x = Math.cos(latRad) * Math.sin(lonRad);
    const y = -Math.sin(latRad);
    const z = Math.cos(latRad) * Math.cos(lonRad);
    return { x: cx + r * x, y: cy + r * y, z };
}

function drawGlobe() {
    const canvas = document.getElementById("globeCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2, r = W * 0.42;

    ctx.clearRect(0, 0, W, H);

    // ── CHANGED: Ocean sphere — light blue matching the provided color swatch ──
    const ocean = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, r * 0.05, cx, cy, r);
    ocean.addColorStop(0, "#7A9DBF");
    ocean.addColorStop(0.5, "#4A6F9A");
    ocean.addColorStop(1, "#2D4F78");
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = ocean; ctx.fill();

    // Continents — clipped to sphere, back-face culled (unchanged logic)
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
    CONTINENTS.forEach(poly => {
        const mid = poly[Math.floor(poly.length / 2)];
        if (projectPoint(mid[0], mid[1], globeRotation, cx, cy, r).z < -0.05) return;
        ctx.beginPath();
        let started = false;
        poly.forEach(([lon, lat]) => {
            const pt = projectPoint(lon, lat, globeRotation, cx, cy, r);
            if (pt.z < -0.04) { started = false; return; }
            if (!started) { ctx.moveTo(pt.x, pt.y); started = true; }
            else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.fillStyle = "#2D4A35"; ctx.fill();
    });
    ctx.restore();

    // 3D depth shading (unchanged)
    const shade = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, r * 0.1, cx + r * 0.3, cy + r * 0.3, r * 1.1);
    shade.addColorStop(0, "transparent");
    shade.addColorStop(0.6, "transparent");
    shade.addColorStop(1, "rgba(0,0,0,0.25)");
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = shade; ctx.fill();

    // Highlight (unchanged)
    const hl = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.35, 0, cx - r * 0.35, cy - r * 0.35, r * 0.6);
    hl.addColorStop(0, "rgba(255,255,255,0.09)");
    hl.addColorStop(1, "transparent");
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = hl; ctx.fill();

    globeRotation -= 0.12;
    requestAnimationFrame(drawGlobe);
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────────────────────
function buildScrollAnimations() {
    const targets = document.querySelectorAll(".about-section, .stat-card, .crop-scroll-section, .quiz-section, .site-footer, .about-text, .section-title, .about-body");
    targets.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(32px)";
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    targets.forEach(el => observer.observe(el));
}

// ─── CUSTOM CURSOR ────────────────────────────────────────────────────────────
function buildCustomCursor() {
    const cursor = document.createElement("div");
    cursor.id = "customCursor";
    document.body.appendChild(cursor);
    let mouseX = -100, mouseY = -100;
    let curX = -100, curY = -100;
    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });
    (function animateCursor() {
        curX += (mouseX - curX) * 0.12;
        curY += (mouseY - curY) * 0.12;
        cursor.style.transform = `translate(${curX - 12}px, ${curY - 12}px)`;
        requestAnimationFrame(animateCursor);
    })();
    document.querySelectorAll("a, button, .option-btn, .chat-bubble, .chat-suggestion-btn").forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    buildTicker();
    buildChatBox();
    drawGlobe();
    goToStep(0);
    buildScrollAnimations();
    buildCustomCursor();
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => handleOptionClick(btn));
    });
    document.getElementById("startOverBtn").addEventListener("click", resetQuiz);
    window.addEventListener("resize", () => {
        const c = document.getElementById("confettiCanvas");
        c.width = window.innerWidth; c.height = window.innerHeight;
    });
});