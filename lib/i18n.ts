export type Locale = "en" | "ar";

/* All site copy lives here. `ar` is typed as `typeof en`, so TypeScript
   forces both languages to stay in sync. Copy is written like a real shop
   would talk — specific, a little rough, never a slogan generator.
   NOTE: `en` is deliberately NOT `as const` — literal types would demand
   identical strings in both languages. */

const en = {
  nav: {
    about: "About",
    services: "Prices",
    gallery: "Gallery",
    barbers: "Barbers",
    reviews: "Reviews",
    contact: "Visit us",
    book: "Book",
    menuLabel: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Switch language",
  },
  hero: {
    meta: "Est. 2019 — Mar Mikhael, Beirut",
    title: "A proper cut.",
    subtitle:
      "Walk in, sit down. The coffee's on, the radio's on Fairuz, and nobody's rushing you out of the chair.",
    primaryCta: "Book on WhatsApp",
    secondaryCta: "Prices",
  },
  about: {
    title: "A shop, not a factory.",
    body: [
      "Blade & Cedar opened in 2019 with three chairs, one mirror each, and a landlord who thought we were crazy to open a barbershop here. He comes in every second Thursday now.",
      "The name? The blade is the work. The cedar is where we're from. We kept both.",
      "Karim took the chair by the window. Elie claimed the good clippers. Sami brought his own towels from day one — that's the kind of shop this is.",
    ],
    imageCaption: "The chair by the window. Karim's.",
  },
  services: {
    title: "Prices",
    note: "All in USD, as everything in Lebanon. Whish or cash.",
    items: [
      { name: "Classic Haircut", desc: "Scissors & clippers, washed and styled.", price: "$8" },
      { name: "Skin Fade", desc: "Blended to nothing, razor-finished edges.", price: "$10" },
      { name: "Beard Trim & Shape", desc: "Lines, oil, and honest advice about the neck.", price: "$5" },
      { name: "Haircut + Beard", desc: "Both, one sitting.", price: "$12" },
      { name: "Hot Towel Shave", desc: "Straight razor, three towels, twenty minutes.", price: "$8" },
      { name: "Kids Cut", desc: "Under 10. We bring the patience, you bring the child.", price: "$5" },
    ],
  },
  gallery: {
    title: "Recent cuts",
    note: "Six of the last few hundred.",
  },
  barbers: {
    title: "Who owns which chair",
    items: [
      {
        name: "Karim Haddad",
        role: "The chair by the window",
        bio: "Twenty years behind a chair. First head he cut was his cousin's, at 14 — badly. He's improved since.",
      },
      {
        name: "Elie Nassar",
        role: "The good clippers",
        bio: "Does the kind of fade that makes the next customer cancel his appointment somewhere else.",
      },
      {
        name: "Sami Khoury",
        role: "The private towels",
        bio: "Straight-razor shaves since 2012. Brings his own towels; we've stopped asking why.",
      },
    ],
  },
  reviews: {
    title: "Word of mouth",
    items: [
      {
        quote:
          "Walked in five minutes before close and still got the full hot-towel treatment, zero dirty looks. Try that anywhere else in Mar Mikhael.",
        name: "Tarek, regular since 2021",
      },
      {
        quote:
          "Karim listened to what I wanted. Actually listened. First barber in Beirut who didn't 'know better'.",
        name: "Jad, regular since 2023",
      },
      {
        quote:
          "My son's first haircut. Sami gave him the chair like it was a spaceship. He still talks about it.",
        name: "Rami, and his son",
      },
    ],
  },
  location: {
    title: "Find us",
    addressLabel: "Address",
    address: "Street 17, Mar Mikhael, Beirut",
    landmark:
      "Ground floor, next to the pharmacy with the green cross — you'll hear the radio from the street.",
    hoursLabel: "Hours",
    walkIns: "Walk-ins fine. Booking smarter.",
    hours: [
      { days: "Monday – Saturday", time: "10:00 – 21:00" },
      { days: "Sunday", time: "11:00 – 18:00" },
    ],
    mapLabel: "Map of the barbershop location",
    openInMaps: "Open in Google Maps",
  },
  cta: {
    title: "Your chair is waiting.",
    subtitle: "A message takes a second. We usually reply in five.",
    button: "Book on WhatsApp",
    note: "WhatsApp only — we're usually holding scissors.",
  },
  footer: {
    tagline: "Barbershop · Mar Mikhael, Beirut",
    follow: "Follow",
    rights: "© 2026 Blade & Cedar. All rights reserved.",
    concept: "Concept design by Mawqe3 Studio",
  },
  whatsapp: {
    aria: "Chat with us on WhatsApp",
  },
};

const ar: typeof en = {
  nav: {
    about: "من نحن",
    services: "الأسعار",
    gallery: "أعمالنا",
    barbers: "الفريق",
    reviews: "آراء الزبائن",
    contact: "موقعنا",
    book: "احجز",
    menuLabel: "القائمة الرئيسية",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    langLabel: "تغيير اللغة",
  },
  hero: {
    meta: "منذ ٢٠١٩ — المريخا، بيروت",
    title: "قصّة كما يجب.",
    subtitle:
      "تعى، اجلس. القهوة عالنار، الفايرز عالراديو، وما حدا رح يستعجلك عالكرسي.",
    primaryCta: "احجز عبر واتساب",
    secondaryCta: "الأسعار",
  },
  about: {
    title: "صالون، مش مصنع.",
    body: [
      "انفتح بليد آند سيدر سنة ٢٠١٩ بثلاث كراسي ومراية لكل واحد، وصاحب العمارة حسبنا مجانين لأننا حاطّين صالون بهالمكان. اليوم بييجي كل خميس تاني يتحلق عنا.",
      "الاسم؟ الشفر هو الشغل، والأرزة هي البلد. خبّينا الاثنين بالاسم وبس.",
      "كرم خد الكرسي يلي عالشباك، إيلي مزعوم عالمكينات الحلوة، وسامي جايب مناشفه من أول يوم — هيك صالون بهالشكل.",
    ],
    imageCaption: "الكرسي يلي عالشباك. تبع كرم.",
  },
  services: {
    title: "الأسعار",
    note: "كله بالدولار متل كل شي بلبنان. ويز أو كاش.",
    items: [
      { name: "قصّة كلاسيكية", desc: "مقصّ وماكينة، غسيل وتصفيف.", price: "$8" },
      { name: "قصّة تدريجية (فايد)", desc: "تدرّج محسوس مش مرسوم، وتشطيب بالموّس.", price: "$10" },
      { name: "تشذيب وتحديد اللحية", desc: "خطوط، زيت، ونصيحة صريحة عن الرقبة.", price: "$5" },
      { name: "قصّة + لحية", desc: "الاثنين بجلسة وحدة.", price: "$12" },
      { name: "حلاقة بالمنشفة الساخنة", desc: "موّس، تلات مناشف، عشرين دقيقة.", price: "$8" },
      { name: "قصّة أطفال", desc: "تحت ١٠ سنين. الصبر علينا، الولد عليك.", price: "$5" },
    ],
  },
  gallery: {
    title: "شغلنا الأخير",
    note: "ستّة من آخر مية قصّة.",
  },
  barbers: {
    title: "مين صاحب أي كرسي",
    items: [
      {
        name: "كرم حدّاد",
        role: "الكرسي يلي عالشباك",
        bio: "عشرين سنة ورا الكرسي. أول راس حلقه كان تبع ابن خته، بعمر الـ١٤ — ما كانت حلوة. تحسّن من وقتها.",
      },
      {
        name: "إليّ نصّار",
        role: "المكينات الحلوة",
        bio: "بيعمل فايد بيخلي الزبون اللي بعدك يلغي موعده بمكان تاني.",
      },
      {
        name: "سامي خوري",
        role: "المناشف الخاصة",
        bio: "حلاقة بالموّس من ٢٠١٢. جايب مناشفه الخاصة، ونحنا وقفنا نسأل ليش.",
      },
    ],
  },
  reviews: {
    title: "من فم الزبائن",
    items: [
      {
        quote:
          "دخلت قبل خمس دقايق من الغلق، وعملّي حلاقة المنشفة كاملة بلا أي نظرة استياء. جرّب هيك بغير مكان بالمريخا.",
        name: "طارق، من ٢٠٢١",
      },
      {
        quote:
          "كرم سمع شو بدّي. فعلياً سمع. أول حلّاق ببيروت ما قال «أنا أعرف أحسن».",
        name: "جاد، من ٢٠٢٣",
      },
      {
        quote: "أول قصّة لابني. سامي عطاه الكرسي كأنه سفينة فضائية. لحد اليوم عم يحكي فيها.",
        name: "رامي وابنه",
      },
    ],
  },
  location: {
    title: "موقعنا",
    addressLabel: "العنوان",
    address: "شارع ١٧، المريخا، بيروت",
    landmark: "طابق أرضي، جنب الصيدلية يلي عالشارع — بتسمع الراديو من عالطريق.",
    hoursLabel: "الساعات",
    walkIns: "بدون موعد منمشي، بس الحجز أذكى.",
    hours: [
      { days: "الاثنين – السبت", time: "١٠:٠٠ – ٢١:٠٠" },
      { days: "الأحد", time: "١١:٠٠ – ١٨:٠٠" },
    ],
    mapLabel: "خريطة موقع الصالون",
    openInMaps: "افتح في خرائط Google",
  },
  cta: {
    title: "كرسيك بانتظارك.",
    subtitle: "رسالة بتاخد ثانية. من رد عادةً خلال خمس.",
    button: "احجز عبر واتساب",
    note: "واتساب فقط — غالباً إيدينا عالشفر.",
  },
  footer: {
    tagline: "صالون حلاقة · المريخا، بيروت",
    follow: "تابعنا",
    rights: "© ٢٠٢٦ بليد آند سيدر. جميع الحقوق محفوظة.",
    concept: "تصميم مفاهيمي من Mawqe3 Studio",
  },
  whatsapp: {
    aria: "تواصل معنا عبر واتساب",
  },
};

export const translations: Record<Locale, typeof en> = { en, ar };
