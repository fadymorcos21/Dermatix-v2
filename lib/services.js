const sharedConsultationFaq = {
  q: "How do I know if this is the right service?",
  a: "The safest answer comes from a consultation. Your skin, medical history, goals, medications, prior treatments, and tolerance for downtime all change what is appropriate.",
};

export const services = [
  {
    no: "01",
    slug: "botox",
    name: "Botox",
    blurb:
      "A neuromodulator treatment for expression lines, planned around movement rather than stillness.",
    summary:
      "Botox is a brand name commonly used for cosmetic botulinum toxin injections. In cosmetic use, small doses temporarily relax targeted facial muscles so expression lines can look softer while the face still reads as your own.",
    time: "Consult first",
    modality: "Injectable",
    img: "/images/serice-botox.jpg",
    tags: ["Expression lines", "Movement", "Wrinkles"],
    facts: [
      { label: "Type", value: "Prescription injectable" },
      { label: "Common onset", value: "Several days" },
      { label: "Typical duration", value: "About 3-4 months" },
      { label: "Plan", value: "Dose and placement vary" },
    ],
    story: [
      "The art of Botox is restraint. The goal is not to erase every sign of expression, but to quiet the muscles that repeatedly fold the skin into lines. A good plan studies how the face moves before deciding where product belongs.",
      "Botulinum toxin is temporary. Most people notice change over several days, and the effect commonly lasts around three to four months. Results vary by dose, treatment area, muscle strength, metabolism, and the look you are trying to preserve.",
    ],
    goodFor: [
      "Forehead lines",
      "Frown lines between the brows",
      "Crow's feet",
      "Bunny lines",
      "Lip flip conversations",
      "Jawline or masseter discussions",
    ],
    boundaries: [
      "It does not replace lost volume.",
      "It will not remove etched lines instantly.",
      "It should be administered only by an appropriately trained professional.",
      "Pregnancy, breastfeeding, neuromuscular conditions, and certain medications should be discussed first.",
    ],
    process: [
      {
        step: "01",
        label: "Expression review",
        body: "The face is assessed at rest and in motion so the plan follows your actual muscle pattern.",
      },
      {
        step: "02",
        label: "Dose planning",
        body: "Dose and placement are selected for the areas being treated and the amount of movement you want to keep.",
      },
      {
        step: "03",
        label: "Treatment",
        body: "Small injections are placed into targeted muscles. Temporary pinpoint marks or bruising can occur.",
      },
      {
        step: "04",
        label: "Settling",
        body: "Changes usually appear gradually. A review can help decide whether the result needs time, adjustment, or a future plan.",
      },
    ],
    faqs: [
      {
        q: "Will Botox make me look frozen?",
        a: "It should not be planned that way. Natural-looking treatment uses enough product to soften selected muscles without unnecessarily affecting the surrounding expression.",
      },
      {
        q: "How long does Botox last?",
        a: "Cosmetic botulinum toxin commonly lasts about three to four months, though individual results can be shorter or longer.",
      },
      {
        q: "When will I see the result?",
        a: "Many people begin noticing change after a few days. The final look is usually judged after the product has fully settled.",
      },
      {
        q: "What side effects should I know about?",
        a: "Temporary redness, tenderness, headache, bruising, or eyelid heaviness can happen. Your provider should review personal risks before treatment.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "02",
    slug: "dermal-filler",
    name: "Dermal Filler",
    blurb:
      "Soft-tissue filler for volume, contour, hydration, and proportion when structure has changed.",
    summary:
      "Dermal fillers are injectable implants used to create a smoother or fuller appearance in selected facial areas. Hyaluronic acid fillers are temporary because the body gradually absorbs them over time.",
    time: "Consult first",
    modality: "Injectable",
    img: "/images/service-lip-filler.jpg",
    tags: ["Volume", "Contour", "Balance"],
    facts: [
      { label: "Type", value: "Medical device injectable" },
      { label: "Material", value: "Often hyaluronic acid" },
      { label: "Duration", value: "Depends on product and area" },
      { label: "Safety", value: "Anatomy matters" },
    ],
    story: [
      "Filler is not just about adding volume. It is about deciding where volume is missing, where weight would be unhelpful, and how one feature affects the proportions around it. Lips, cheeks, chin, jawline, and folds can all require different products and different restraint.",
      "Hyaluronic acid fillers are temporary. Longevity depends on the product, placement depth, area treated, and the way your body metabolizes it. Because filler is a medical procedure, the risk conversation is part of the design conversation.",
    ],
    goodFor: [
      "Lip definition or volume",
      "Cheek contour conversations",
      "Chin proportion",
      "Jawline structure",
      "Nasolabial fold support",
      "Facial balancing plans",
    ],
    boundaries: [
      "It should not be used for broad body contouring.",
      "It cannot tighten loose skin.",
      "Some areas carry higher vascular risk and require advanced judgment.",
      "Swelling and bruising are common short-term possibilities.",
    ],
    process: [
      {
        step: "01",
        label: "Proportion study",
        body: "The plan starts with facial balance, not a syringe count. Existing anatomy guides the recommendation.",
      },
      {
        step: "02",
        label: "Risk review",
        body: "Medical history, prior filler, dental work, cold sores, allergies, and personal risk factors should be discussed.",
      },
      {
        step: "03",
        label: "Placement",
        body: "Product selection and technique vary by area. Needle or cannula use depends on the treatment plan.",
      },
      {
        step: "04",
        label: "Settle",
        body: "Initial swelling can distort the final result. Most plans are assessed after the tissue has calmed.",
      },
    ],
    faqs: [
      {
        q: "Is dermal filler permanent?",
        a: "Most commonly used hyaluronic acid fillers are temporary. Duration depends on the filler material and where it is injected.",
      },
      {
        q: "Can filler be dissolved?",
        a: "Some hyaluronic acid fillers can be treated with hyaluronidase, but removal is still a medical decision and may require more than one visit.",
      },
      {
        q: "What are the common side effects?",
        a: "Bruising, swelling, redness, tenderness, and itching can occur. Rare vascular complications are serious and should be discussed before treatment.",
      },
      {
        q: "Can I choose exactly how much I want?",
        a: "Your preference matters, but the final plan should also respect anatomy, safety, product limits, and the way surrounding features will read together.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "03",
    slug: "prp",
    name: "PRP Treatment",
    blurb:
      "Platelet-rich plasma made from your own blood, used in selected skin and hair-support protocols.",
    summary:
      "PRP stands for platelet-rich plasma. A small blood sample is processed in a centrifuge to concentrate platelets, then used in targeted areas to support healing signals in skin or scalp treatments.",
    time: "Consult first",
    modality: "Regenerative",
    img: "/images/prp.png",
    tags: ["Skin quality", "Scalp", "Regenerative"],
    facts: [
      { label: "Type", value: "Autologous treatment" },
      { label: "Source", value: "Your own blood sample" },
      { label: "Timeline", value: "Gradual change" },
      { label: "Plan", value: "Often a series" },
    ],
    story: [
      "PRP is built from your own blood. After the blood draw, the sample is spun so platelet-rich plasma can be separated and used for a targeted treatment area. In aesthetics, PRP is often discussed for skin texture, under-eye quality, and hair-support plans.",
      "This is a gradual category. PRP is not an instant filler, and it is not a guarantee of new hair growth. It is best framed as a supportive, biologic signal that may be used alone or alongside other treatment plans when you are a suitable candidate.",
    ],
    goodFor: [
      "Skin quality discussions",
      "Scalp and hair-density conversations",
      "Texture support",
      "Under-eye skin quality",
      "Acne-scar support plans",
      "Patients wanting non-filler options",
    ],
    boundaries: [
      "It requires a blood draw.",
      "Results are gradual and vary.",
      "It may not be suitable for certain blood or platelet conditions.",
      "It is usually not a one-and-done conversation.",
    ],
    process: [
      {
        step: "01",
        label: "Candidacy",
        body: "Hair pattern, skin goal, medical history, and expectations are reviewed before choosing PRP.",
      },
      {
        step: "02",
        label: "Draw",
        body: "A blood sample is taken and prepared for processing.",
      },
      {
        step: "03",
        label: "Spin",
        body: "The sample is centrifuged to separate and concentrate platelet-rich plasma.",
      },
      {
        step: "04",
        label: "Deliver",
        body: "PRP may be injected or paired with microneedling depending on the treatment area and plan.",
      },
    ],
    faqs: [
      {
        q: "Is PRP the same as filler?",
        a: "No. PRP is made from your own blood and is used as a regenerative signal. It does not create immediate volume the way filler can.",
      },
      {
        q: "How quickly does PRP work?",
        a: "Change is usually gradual. Skin and scalp plans are often evaluated over weeks to months rather than days.",
      },
      {
        q: "Do I need more than one session?",
        a: "Many PRP plans use a series, but the right number depends on the concern, baseline, response, and maintenance goals.",
      },
      {
        q: "Can everyone have PRP?",
        a: "Not always. Blood disorders, platelet issues, active infection, certain medications, and pregnancy-related considerations should be reviewed first.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "04",
    slug: "dermal-peel",
    name: "Dermal Peel",
    blurb:
      "Chemical resurfacing selected by depth, skin tone, history, and tolerance for downtime.",
    summary:
      "A chemical peel uses a chemical solution to remove outer skin layers so the skin that grows back can look smoother. Peel depth matters: light, medium, and deeper peels have different recovery and risk profiles.",
    time: "Consult first",
    modality: "Resurfacing",
    // img: "/images/shutterstock_2472173333.jpg",
    img: "/images/derma_peel.png",
    tags: ["Texture", "Pigment", "Acne"],
    facts: [
      { label: "Type", value: "Chemical resurfacing" },
      { label: "Depth", value: "Light to deeper options" },
      { label: "Downtime", value: "Depth-dependent" },
      { label: "Key risk", value: "Pigment change" },
    ],
    story: [
      "Peels are deceptively simple: apply solution, create a controlled injury, let the skin renew. The sophistication is in choosing the right acid, strength, contact time, preparation, and aftercare for your actual skin.",
      "Light peels can support tone, congestion, and texture with less recovery. Medium or deeper peels may create more visible change but bring more downtime and greater risk, especially for people prone to hyperpigmentation.",
    ],
    goodFor: [
      "Uneven texture",
      "Dullness",
      "Post-acne marks",
      "Congestion",
      "Uneven tone",
      "Fine surface lines",
    ],
    boundaries: [
      "Peels do not tighten sagging skin.",
      "Darker skin tones may have higher pigment-change risk.",
      "Cold sore history should be disclosed.",
      "Recent isotretinoin use or active irritation may change the plan.",
    ],
    process: [
      {
        step: "01",
        label: "Skin history",
        body: "Pigment tendency, medications, acne activity, sun exposure, and barrier health are reviewed first.",
      },
      {
        step: "02",
        label: "Depth choice",
        body: "The peel is selected by goal and risk profile rather than by intensity alone.",
      },
      {
        step: "03",
        label: "Application",
        body: "The solution is applied in a controlled way and watched for the correct endpoint.",
      },
      {
        step: "04",
        label: "Recovery",
        body: "Aftercare focuses on barrier repair, sun avoidance, and not picking at shedding skin.",
      },
    ],
    faqs: [
      {
        q: "Will I visibly peel?",
        a: "Maybe. Light peels may create mild flaking, while stronger peels can involve more obvious shedding and longer recovery.",
      },
      {
        q: "Can peels treat melasma or pigmentation?",
        a: "They can be part of a pigment plan, but pigment is complex. Incorrect depth or aftercare can worsen discoloration.",
      },
      {
        q: "Can I do a peel before an event?",
        a: "A conservative glow-style peel may fit some timelines, but stronger peels should be planned well before important dates.",
      },
      {
        q: "What should I avoid afterward?",
        a: "Sun exposure, picking, scrubs, strong actives, and heat are commonly limited while the barrier is healing.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "05",
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    blurb:
      "Light-based hair reduction for unwanted facial or body hair, planned across a series.",
    summary:
      "Laser hair removal uses laser energy to target unwanted hair. It usually requires multiple sessions because hair grows in cycles, and results vary by hair color, skin tone, hormones, and treatment area.",
    time: "Consult first",
    modality: "Laser",
    img: "/images/service-5-laserhair-removal.jpg",
    tags: ["Hair reduction", "Face", "Body"],
    facts: [
      { label: "Type", value: "Light-based treatment" },
      { label: "Sessions", value: "Usually multiple" },
      { label: "Best target", value: "Pigmented hair" },
      { label: "Maintenance", value: "May be needed" },
    ],
    story: [
      "Laser hair removal is really laser hair reduction. The device targets pigment in the hair structure, which is why hair color, skin tone, device choice, and settings matter. A safe plan is customized, not generic.",
      "Most people need a series because only some hairs are in the ideal growth phase at any one visit. Hormonal areas, especially parts of the face, can be less predictable and may need maintenance.",
    ],
    goodFor: [
      "Underarms",
      "Bikini or Brazilian discussions",
      "Legs",
      "Back",
      "Upper lip or chin",
      "Ingrown-hair reduction plans",
    ],
    boundaries: [
      "White, gray, red, or very light blond hair may respond poorly.",
      "Recent tanning can increase risk.",
      "Burns, scars, or pigment changes can occur with poor settings or technique.",
      "Hormonal hair growth may require medical evaluation.",
    ],
    process: [
      {
        step: "01",
        label: "Screen",
        body: "Skin tone, hair color, sun exposure, medications, and treatment area are reviewed.",
      },
      {
        step: "02",
        label: "Prepare",
        body: "The area is usually shaved before treatment. Waxing and plucking can interfere with the target.",
      },
      {
        step: "03",
        label: "Treat",
        body: "Laser pulses are delivered across the area using settings selected for skin and hair characteristics.",
      },
      {
        step: "04",
        label: "Repeat",
        body: "Sessions are spaced to meet new hair cycles. Maintenance depends on regrowth.",
      },
    ],
    faqs: [
      {
        q: "Is laser hair removal permanent?",
        a: "It can produce long-term reduction, but it is better described as reduction rather than guaranteed permanent removal for every person and area.",
      },
      {
        q: "How many sessions will I need?",
        a: "Many people need six or more sessions. The exact plan depends on the area, hair color, skin tone, and regrowth pattern.",
      },
      {
        q: "Can darker skin tones be treated?",
        a: "Often, yes, but device selection and settings matter. The consultation should review pigment-change risk and safest options.",
      },
      {
        q: "Why should I avoid waxing before treatment?",
        a: "Laser needs a target in the follicle. Waxing or plucking removes that target, so shaving is usually preferred before sessions.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "06",
    slug: "hifu-skin-tightening",
    name: "HIFU Skin Tightening",
    blurb:
      "Focused ultrasound for selected lifting and tightening goals, with gradual collagen remodeling.",
    summary:
      "HIFU stands for high-intensity focused ultrasound. In aesthetic skin tightening, focused ultrasound energy is used below the skin surface to support a gradual tightening response in selected areas.",
    time: "Consult first",
    modality: "Ultrasound",
    img: "/images/service-7-skin-tightening.jpg",
    tags: ["Lift", "Tightening", "Collagen"],
    facts: [
      { label: "Type", value: "Energy-based treatment" },
      { label: "Target", value: "Skin laxity" },
      { label: "Timeline", value: "Gradual remodeling" },
      { label: "Limit", value: "Not a facelift" },
    ],
    story: [
      "HIFU belongs in the subtle-lift category. It is usually considered when laxity is present but surgery is not the desired path. The treatment uses focused ultrasound energy to stimulate tissue response beneath the surface.",
      "The promise should stay realistic: HIFU does not duplicate a surgical facelift. It may be best for earlier laxity, maintenance, or people looking for a non-surgical approach with gradual change.",
    ],
    goodFor: [
      "Lower-face laxity discussions",
      "Jawline definition conversations",
      "Submental or neck laxity",
      "Brow-lift conversations",
      "Decolletage line discussions",
      "Non-surgical maintenance plans",
    ],
    boundaries: [
      "It is not a surgical facelift.",
      "It does not replace volume where volume is missing.",
      "Results vary with laxity, age, tissue quality, and device protocol.",
      "Energy-based treatments require careful screening around implants, medical conditions, and prior procedures.",
    ],
    process: [
      {
        step: "01",
        label: "Laxity review",
        body: "Skin quality, heaviness, volume loss, and realistic lift potential are assessed.",
      },
      {
        step: "02",
        label: "Mark",
        body: "Treatment zones are mapped around anatomy and the areas being targeted.",
      },
      {
        step: "03",
        label: "Deliver",
        body: "Focused ultrasound energy is delivered according to the selected treatment pattern.",
      },
      {
        step: "04",
        label: "Remodel",
        body: "The visible response is usually gradual as collagen remodeling takes time.",
      },
    ],
    faqs: [
      {
        q: "Does HIFU replace a facelift?",
        a: "No. It may support tightening in selected candidates, but it cannot reposition tissue the way surgery can.",
      },
      {
        q: "When will I see change?",
        a: "Some people notice early firmness, but the main change is usually assessed gradually over the collagen-remodeling period.",
      },
      {
        q: "Is HIFU right for severe laxity?",
        a: "Severe laxity often needs a surgical conversation. HIFU is usually discussed for mild to moderate laxity or maintenance.",
      },
      {
        q: "Can it be combined with other treatments?",
        a: "Sometimes. Sequencing matters, especially with filler, resurfacing, and other energy-based devices.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "07",
    slug: "hydrafacial",
    name: "Hydrafacial",
    blurb:
      "A device-assisted facial that cleanses, exfoliates, extracts, and hydrates in one visit.",
    summary:
      "Hydrafacial is a non-invasive facial treatment category using patented vortex-style technology to cleanse, exfoliate, extract, and hydrate the skin. It is often chosen for glow, congestion, and routine skin maintenance.",
    time: "Consult first",
    modality: "Facial",
    img: "/images/service-9-hydrafacial.jpg",
    tags: ["Glow", "Congestion", "Hydration"],
    facts: [
      { label: "Type", value: "Device-assisted facial" },
      { label: "Focus", value: "Cleanse/extract/hydrate" },
      { label: "Downtime", value: "Usually minimal" },
      { label: "Plan", value: "Maintenance-friendly" },
    ],
    story: [
      "Hydrafacial sits between facial and clinical maintenance. Instead of relying on manual extraction alone, the device uses a spiral tip and suction-assisted flow to remove debris while delivering hydrating solutions.",
      "It is often a good entry point for people who want clearer, brighter-feeling skin without committing to a resurfacing peel or injectable plan. Sensitive skin, active irritation, and acne severity still matter.",
    ],
    goodFor: [
      "Dullness",
      "Dehydrated feel",
      "Congestion",
      "Pre-event polish",
      "Routine maintenance",
      "First-time treatment conversations",
    ],
    boundaries: [
      "It is not a replacement for acne medication when acne is inflammatory or persistent.",
      "It will not lift skin or replace injectables.",
      "Active rash, sunburn, or open lesions may delay treatment.",
      "Boosters and add-ons should match the skin, not the trend.",
    ],
    process: [
      {
        step: "01",
        label: "Assess",
        body: "Skin sensitivity, congestion, recent treatments, and event timing are reviewed.",
      },
      {
        step: "02",
        label: "Cleanse",
        body: "The skin is cleansed and gently exfoliated using the device protocol.",
      },
      {
        step: "03",
        label: "Extract",
        body: "Suction-assisted extraction helps clear surface debris and congestion.",
      },
      {
        step: "04",
        label: "Hydrate",
        body: "Hydrating solutions or selected boosters are delivered based on the skin goal.",
      },
    ],
    faqs: [
      {
        q: "Is Hydrafacial good before an event?",
        a: "Often, yes, because downtime is usually minimal. First-time patients should still avoid trying anything new immediately before a major event.",
      },
      {
        q: "Can it help acne?",
        a: "It may help congestion, but active acne can need a medical skincare plan. Inflamed or cystic acne should be assessed before treatment.",
      },
      {
        q: "How often should I book it?",
        a: "Maintenance frequency depends on oiliness, congestion, budget, sensitivity, and the rest of your skincare plan.",
      },
      {
        q: "Is it suitable for sensitive skin?",
        a: "It can be adjusted for many skin types, but active irritation, sunburn, or compromised barrier may mean waiting.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "08",
    slug: "dermabrasion",
    name: "Dermabrasion",
    blurb:
      "Mechanical resurfacing for selected texture and scar concerns, with downtime and pigment risk considered first.",
    summary:
      "Dermabrasion is a mechanical resurfacing treatment that removes the upper skin layer with a fast-moving tool. As new skin heals in, texture can look smoother, but recovery and pigment risk must be taken seriously.",
    time: "Consult first",
    modality: "Resurfacing",
    img: "/images/service-Dermabrasion.jpg",
    tags: ["Texture", "Scars", "Resurfacing"],
    facts: [
      { label: "Type", value: "Mechanical resurfacing" },
      { label: "Focus", value: "Texture/scars" },
      { label: "Downtime", value: "Expected" },
      { label: "Key risk", value: "Color change" },
    ],
    story: [
      "Dermabrasion is more serious than a polishing facial. It mechanically resurfaces the skin, which can be useful for selected scars, rough texture, and fine lines, but the tradeoff is recovery.",
      "Skin tone, scar tendency, acne activity, cold sore history, isotretinoin history, and sun exposure all matter. The best design decision may be to delay, prep, choose a lighter option, or pair resurfacing with a longer-term skin plan.",
    ],
    goodFor: [
      "Acne-scar texture discussions",
      "Rough texture",
      "Selected fine lines",
      "Surface irregularity",
      "Post-procedure refinement conversations",
      "Patients who can commit to aftercare",
    ],
    boundaries: [
      "It can involve swelling, redness, and color change during healing.",
      "It may not be ideal for active acne.",
      "People prone to keloids or pigment change need careful screening.",
      "Sun protection after resurfacing is non-negotiable.",
    ],
    process: [
      {
        step: "01",
        label: "Screen",
        body: "Scar history, pigment risk, acne activity, medications, and downtime tolerance are reviewed.",
      },
      {
        step: "02",
        label: "Prepare",
        body: "The skin may need a preparation period before resurfacing is appropriate.",
      },
      {
        step: "03",
        label: "Resurface",
        body: "A controlled mechanical pass is performed according to the treatment depth and area.",
      },
      {
        step: "04",
        label: "Protect",
        body: "Healing skin is vulnerable. Barrier care and strict sun protection guide the result.",
      },
    ],
    faqs: [
      {
        q: "Is dermabrasion the same as microdermabrasion?",
        a: "No. Dermabrasion is a deeper mechanical resurfacing treatment and usually involves more recovery.",
      },
      {
        q: "How long does healing take?",
        a: "Healing depends on depth and skin response. Redness, swelling, sensitivity, and color changes can last beyond the first few days.",
      },
      {
        q: "Can it help acne scars?",
        a: "It can help selected texture concerns, including some acne scarring, but scar type and skin tone determine whether it is a good option.",
      },
      {
        q: "Why is sun protection emphasized so much?",
        a: "Freshly resurfaced skin is more prone to pigment change. Sun exposure can undo improvement or create longer-term discoloration.",
      },
      sharedConsultationFaq,
    ],
  },
  {
    no: "09",
    slug: "scar-revision",
    name: "Scar Revision",
    blurb:
      "A personalized plan to improve the texture, thickness, colour, and overall look of scars, matched to scar type.",
    summary:
      "Scar revision is a personalized treatment approach for improving the texture, thickness, colour, and overall appearance of scars. At Dermatix, treatment begins with understanding the scar type, skin tone, history, and how the scar has changed over time.",
    time: "Consult first",
    modality: "Resurfacing",
    img: "/images/scar-rev.png",
    tags: ["Acne scars", "Surgical scars", "Keloids", "Burn scars"],
    facts: [
      { label: "Type", value: "Scar-focused treatment plan" },
      { label: "Common onset", value: "Gradual improvement" },
      { label: "Typical duration", value: "Often requires a series" },
      { label: "Plan", value: "Depends on scar type" },
    ],
    story: [
      "Scar revision is not about erasing the skin's history. The goal is to improve how a scar looks and feels, using a plan that matches the scar's depth, colour, thickness, age, and location.",
      "Different scars behave differently. Acne scars may need texture-focused treatment, while surgical, traumatic, burn, or keloid scars may require a more cautious and staged approach. A good plan starts with diagnosis before choosing treatment.",
    ],
    goodFor: [
      "Acne scars",
      "Surgical scars",
      "Keloid and hypertrophic scars",
      "Raised, thickened, or uneven scars",
      "Burn and traumatic scars",
      "Stretch marks",
    ],
    boundaries: [
      "It usually improves a scar rather than removing it completely.",
      "Keloid and reactive scars require cautious, staged treatment to reduce the risk of worsening or recurrence.",
      "The right approach depends on scar type, skin tone, location, and the age of the scar.",
      "Improvement is gradual and often builds over a series of sessions.",
    ],
    process: [
      {
        step: "01",
        label: "Assess",
        body: "The scar type, skin tone, age, location, and previous treatments are reviewed to understand how the scar has changed over time.",
      },
      {
        step: "02",
        label: "Diagnose",
        body: "Because scars behave differently, diagnosis comes before treatment so the plan matches the scar rather than the other way around.",
      },
      {
        step: "03",
        label: "Treat",
        body: "Treatment is delivered in a staged way, often as a series, chosen for the scar's depth, thickness, and colour.",
      },
      {
        step: "04",
        label: "Review",
        body: "Improvement is assessed gradually, and the plan is adjusted for deeper, older, or raised scars.",
      },
    ],
    faqs: [
      {
        q: "Can scar revision completely remove a scar?",
        a: "Not usually. The goal is improvement, not complete removal. Most treatments aim to soften texture, reduce thickness, improve colour, or make the scar less noticeable.",
      },
      {
        q: "What types of scars can be treated?",
        a: "We assess acne scars, surgical scars, burn scars, traumatic scars, keloid scars, hypertrophic scars, and stretch marks.",
      },
      {
        q: "How do I know which scar treatment I need?",
        a: "That depends on the scar type, skin tone, location, age of the scar, previous treatments, and your tolerance for downtime. A consultation is the safest first step.",
      },
      {
        q: "How many sessions will I need?",
        a: "Scar improvement is usually gradual. Some scars need only a few sessions, while deeper, older, or raised scars may require a longer staged plan.",
      },
      {
        q: "Can keloid scars be treated?",
        a: "Yes, but keloids require careful assessment because they can be reactive. Treatment is usually planned cautiously to reduce the risk of worsening or recurrence.",
      },
      {
        q: "Is scar revision painful?",
        a: "Most scar treatments are well tolerated. Comfort measures may be used depending on the treatment type and area being treated.",
      },
      sharedConsultationFaq,
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return services.map((s) => s.slug);
}
