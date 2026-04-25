export const services = [
  {
    no: "01",
    slug: "botox",
    name: "Botox",
    blurb:
      "Neuromodulator microdosing for softened expression without the freeze.",
    summary:
      "Precision-dosed botulinum toxin to relax targeted muscles, soften lines and reshape the resting face. Calibrated unit by unit so expression stays — only the tension goes.",
    time: "20 min",
    from: "$11 / unit",
    img: "/images/botox-lip.jpg",
    tags: ["Wrinkles", "Jaw slim", "Baby-tox"],
    treats: [
      "Forehead lines",
      "Glabellar (11s)",
      "Crow's feet",
      "Bunny lines",
      "Masseter / jaw slimming",
      "Lip flip",
    ],
    process: [
      { step: "01", label: "Map", body: "Facial muscle assessment at rest and in motion." },
      { step: "02", label: "Dose", body: "Microdoses delivered to targeted motor points." },
      { step: "03", label: "Settle", body: "Onset over 4–7 days; full result by day 14." },
      { step: "04", label: "Refine", body: "Two-week touch-up included if needed." },
    ],
    faqs: [
      {
        q: "Will I look frozen?",
        a: "No — we dose conservatively and prioritize natural movement. We can always add more; we can't subtract.",
      },
      {
        q: "How long does it last?",
        a: "Typically 3–4 months. Masseter (jaw) treatments can last longer.",
      },
    ],
  },
  {
    no: "02",
    slug: "dermal-filler",
    name: "Dermal Filler",
    blurb:
      "Architectural hyaluronic acid — lips, cheeks, chin, jaw, tear trough.",
    summary:
      "Hyaluronic acid placed with anatomic precision to restore volume, reshape contour and rebalance proportion. We design the face you already have — clearer.",
    time: "45 min",
    from: "$650",
    img: "/images/filler-injection.jpg",
    tags: ["Volume", "Contour", "Hydration"],
    treats: ["Lips", "Cheeks", "Chin", "Jawline", "Tear trough", "Nasolabial"],
    process: [
      { step: "01", label: "Design", body: "Proportion analysis, photo-mapping and plan." },
      { step: "02", label: "Numb", body: "Topical anesthetic plus lidocaine in the product." },
      { step: "03", label: "Place", body: "Cannula or needle, area-dependent, sterile field." },
      { step: "04", label: "Review", body: "Two-week check-in to assess and refine." },
    ],
    faqs: [
      {
        q: "How long do results last?",
        a: "9–18 months depending on area, product and metabolism.",
      },
      {
        q: "Is it reversible?",
        a: "Hyaluronic acid fillers can be dissolved with hyaluronidase if needed.",
      },
    ],
  },
  {
    no: "03",
    slug: "prp",
    name: "PRP Treatment",
    blurb:
      "Your plasma, reapplied. Regeneration for skin, scalp and tone.",
    summary:
      "Platelet-rich plasma drawn from your own blood, concentrated and reintroduced — a regenerative signal for collagen, hair density and skin quality.",
    time: "60 min",
    from: "$550",
    img: "/images/prp-treatment.jpg",
    tags: ["Collagen", "Hair", "Glow"],
    treats: ["Skin tone & texture", "Hair density / scalp", "Under-eye quality", "Acne scar refinement"],
    process: [
      { step: "01", label: "Draw", body: "Standard blood draw, ~20ml." },
      { step: "02", label: "Spin", body: "Centrifuged to isolate platelet-rich plasma." },
      { step: "03", label: "Apply", body: "Microinjection or microneedling delivery." },
      { step: "04", label: "Build", body: "3-session series for best results, spaced monthly." },
    ],
    faqs: [
      {
        q: "Is there downtime?",
        a: "Mild redness and pinpoint marks for 24–48 hours.",
      },
      {
        q: "How many sessions do I need?",
        a: "Most plans run 3 sessions, then maintenance every 6–12 months.",
      },
    ],
  },
  {
    no: "04",
    slug: "dermal-peel",
    name: "Dermal Peel",
    blurb: "Medical-grade resurfacing calibrated to your Fitzpatrick type.",
    summary:
      "A calibrated chemical resurfacing protocol — superficial, medium or layered — selected and dosed for your skin type, history and goal.",
    time: "40 min",
    from: "$180",
    img: "/images/shutterstock_2472173333.jpg",
    tags: ["Texture", "Pigment", "Acne"],
    treats: ["Uneven texture", "Pigment / melasma", "Active acne", "Post-acne marks", "Sun damage"],
    process: [
      { step: "01", label: "Prime", body: "Pre-treatment regimen 2–4 weeks ahead." },
      { step: "02", label: "Apply", body: "Layered acid solution, time-controlled." },
      { step: "03", label: "Neutralize", body: "Endpoint determined by skin response." },
      { step: "04", label: "Heal", body: "Aftercare kit and 7-day skin guidance." },
    ],
    faqs: [
      {
        q: "Will I peel visibly?",
        a: "Light to moderate flaking for 3–7 days depending on depth.",
      },
      {
        q: "Is it safe for darker skin?",
        a: "Yes — peel choice and dosing are matched to Fitzpatrick type.",
      },
    ],
  },
  {
    no: "05",
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    blurb:
      "Diode & Nd:YAG platforms for all skin types — safe, permanent reduction.",
    summary:
      "Two-platform laser hair reduction — diode for speed and comfort, Nd:YAG for darker skin types — delivering safe, long-term reduction across the body.",
    time: "15–60 min",
    from: "$60",
    img: "/images/shutterstock_2604269051.jpg",
    tags: ["All skin types", "Permanent"],
    treats: ["Face", "Underarms", "Bikini / Brazilian", "Legs", "Back", "Full body"],
    process: [
      { step: "01", label: "Test", body: "Patch test for skin type and tolerance." },
      { step: "02", label: "Treat", body: "8–10 sessions spaced 4–6 weeks apart." },
      { step: "03", label: "Cool", body: "Integrated chilled tip for comfort." },
      { step: "04", label: "Maintain", body: "Annual maintenance after the initial series." },
    ],
    faqs: [
      {
        q: "Does it hurt?",
        a: "Most patients describe a quick warm snap. The chilled tip dramatically reduces discomfort.",
      },
      {
        q: "Is it safe for darker skin?",
        a: "Yes — Nd:YAG is the gold standard for Fitzpatrick IV–VI.",
      },
    ],
  },
  {
    no: "06",
    slug: "cryolipolysis",
    name: "Cryolipolysis",
    blurb:
      "Targeted fat reduction by controlled cooling. No knife, no downtime.",
    summary:
      "Controlled cooling of subcutaneous fat — selectively crystallizes and clears fat cells over 8–12 weeks. Non-surgical body contouring with no incisions.",
    time: "60 min",
    from: "$450",
    img: "/images/shutterstock_2385017027.jpg",
    tags: ["Body", "Non-surgical"],
    treats: ["Abdomen", "Flanks", "Thighs", "Bra line", "Submental (chin)"],
    process: [
      { step: "01", label: "Mark", body: "Pinch test and treatment area mapping." },
      { step: "02", label: "Cool", body: "Vacuum applicator, controlled-temperature cycle." },
      { step: "03", label: "Massage", body: "Post-cycle manual massage to enhance clearance." },
      { step: "04", label: "Reveal", body: "Visible change at 6–12 weeks." },
    ],
    faqs: [
      {
        q: "Is there downtime?",
        a: "None — patients return to normal activity the same day.",
      },
      {
        q: "How many cycles do I need?",
        a: "Most areas respond well to 1–2 cycles, spaced 6–8 weeks apart.",
      },
    ],
  },
  {
    no: "07",
    slug: "hifu-skin-tightening",
    name: "HIFU Skin Tightening",
    blurb:
      "High-intensity focused ultrasound for a non-surgical lift — 12-month build.",
    summary:
      "Focused ultrasound energy delivered at controlled depths to stimulate the SMAS and dermal layers — a non-surgical lift that builds over 90 to 180 days.",
    time: "75 min",
    from: "$1,200",
    img: "/images/hifu-treatment.jpg",
    tags: ["Lift", "Collagen"],
    treats: ["Lower face / jowls", "Brow", "Neck", "Décolleté"],
    process: [
      { step: "01", label: "Map", body: "Treatment grid based on facial anatomy." },
      { step: "02", label: "Deliver", body: "Layered passes at 1.5, 3.0 and 4.5mm depths." },
      { step: "03", label: "Build", body: "Collagen remodels over 90–180 days." },
      { step: "04", label: "Review", body: "Photo review at 3 and 6 months." },
    ],
    faqs: [
      {
        q: "Does it replace a facelift?",
        a: "No — it lifts and tightens without surgery, ideal for early laxity.",
      },
      {
        q: "How long do results last?",
        a: "12–18 months with annual maintenance.",
      },
    ],
  },
  {
    no: "08",
    slug: "hifu-vaginal-tightening",
    name: "HIFU Vaginal Tightening",
    blurb: "Discreet, physician-led intimate wellness protocol.",
    summary:
      "A physician-led intimate wellness treatment using focused ultrasound to stimulate collagen and improve tissue tone — performed in a private, dignified setting.",
    time: "45 min",
    from: "$1,400",
    img: "/images/shutterstock_2348572749.jpg",
    tags: ["Wellness", "Discreet"],
    treats: [
      "Post-childbirth laxity",
      "Stress incontinence (mild)",
      "Tone & sensation",
      "Menopausal changes",
    ],
    process: [
      { step: "01", label: "Consult", body: "Confidential one-on-one assessment." },
      { step: "02", label: "Treat", body: "Single-session protocol, ~30 minutes of energy delivery." },
      { step: "03", label: "Recover", body: "No downtime; return to activity in 24–48 hours." },
      { step: "04", label: "Build", body: "Result builds over 8–12 weeks." },
    ],
    faqs: [
      {
        q: "Is it painful?",
        a: "Most patients describe mild warmth. Topical numbing is offered.",
      },
      {
        q: "How private is the visit?",
        a: "Entirely private. Physician-led, single-room, no shared spaces.",
      },
    ],
  },
  {
    no: "09",
    slug: "hydrafacial",
    name: "Hydrafacial",
    blurb:
      "A cleanse, exfoliate and infuse — every treatment, always the right answer.",
    summary:
      "A 3-step medical-grade facial — cleanse, exfoliate, infuse — that leaves skin clearer, brighter and more even, with zero downtime.",
    time: "50 min",
    from: "$210",
    img: "/images/glowing-skin.jpg",
    tags: ["Glow", "Monthly"],
    treats: ["Dullness", "Congestion", "Dehydration", "Pre-event glow", "Routine maintenance"],
    process: [
      { step: "01", label: "Cleanse", body: "Vortex cleanse and gentle exfoliation." },
      { step: "02", label: "Extract", body: "Painless suction-based extraction." },
      { step: "03", label: "Infuse", body: "Hydrating and brightening serum infusion." },
      { step: "04", label: "Finish", body: "LED, mask or peptides — your choice." },
    ],
    faqs: [
      {
        q: "How often should I get one?",
        a: "Monthly is the sweet spot for most skin.",
      },
      {
        q: "Can I have it before an event?",
        a: "Yes — there's no downtime. Same-day glow.",
      },
    ],
  },
  {
    no: "10",
    slug: "dermabrasion",
    name: "Dermabrasion",
    blurb: "Controlled surface renewal for scars, texture and fine lines.",
    summary:
      "Controlled mechanical resurfacing that smooths uneven texture, refines acne scarring and softens fine lines — calibrated to your tolerance.",
    time: "45 min",
    from: "$300",
    img: "/images/shutterstock_2353782881.jpg",
    tags: ["Texture", "Scars"],
    treats: ["Acne scars", "Fine lines", "Sun damage", "Rough texture"],
    process: [
      { step: "01", label: "Prep", body: "Cleanse, anesthetic if needed." },
      { step: "02", label: "Resurface", body: "Mechanical resurfacing pass." },
      { step: "03", label: "Soothe", body: "Calming serum and barrier repair." },
      { step: "04", label: "Heal", body: "5–7 days of guided aftercare." },
    ],
    faqs: [
      {
        q: "Is there downtime?",
        a: "Yes — 5–7 days of redness and light flaking.",
      },
      {
        q: "How many sessions do I need?",
        a: "1–3 sessions depending on goal, spaced 4–6 weeks apart.",
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return services.map((s) => s.slug);
}
