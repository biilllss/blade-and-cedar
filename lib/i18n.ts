export type Locale = "en" | "ar";

/* All site copy lives here. `ar` is typed as `typeof en`, so TypeScript
   forces you to keep both languages in sync when you edit either one.
   NOTE: `en` is deliberately NOT `as const` — literal types would demand
   identical strings in both languages. Widened `string` types keep key
   parity enforced while allowing different copy per language. */

const en = {
  nav: {
    about: "About",
    services: "Services",
    gallery: "Gallery",
    barbers: "Barbers",
    reviews: "Reviews",
    contact: "Visit us",
    book: "Book now",
    menuLabel: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Switch language",
  },
  hero: {
    eyebrow: "Mar Mikhael · Beirut",
    title: "Sharp looks.",
    titleAccent: "Warm craft.",
    subtitle:
      "A premium barbershop in the heart of Beirut — classic technique, modern finish, and never a rushed chair.",
    primaryCta: "Book on WhatsApp",
    secondaryCta: "View services",
  },
  about: {
    eyebrow: "The shop",
    title: "Where craft meets cedar",
    body: [
      "Blade & Cedar started with a simple idea: Beirut deserves a barbershop that treats a haircut like a craft, not a chore.",
      "Named after the cedar that has watched over these mountains for centuries, we keep things sharp, warm and unhurried — one chair at a time.",
      "No double-booking, no rush. Just a proper cut and a proper welcome.",
    ],
  },
  services: {
    eyebrow: "Services & prices",
    title: "Straightforward pricing, no surprises",
    note: "All prices in USD · Walk-ins welcome, booking recommended",
    items: [
      { name: "Classic Haircut", desc: "Consultation, cut, wash & style", price: "$12" },
      { name: "Skin Fade", desc: "Sharp blend, razor-finished edges", price: "$15" },
      { name: "Beard Trim & Shape", desc: "Clean lines, beard oil finish", price: "$8" },
      { name: "Haircut + Beard", desc: "The full works, one sitting", price: "$18" },
      { name: "Hot Towel Shave", desc: "Traditional straight razor & hot towels", price: "$12" },
      { name: "Kids Cut", desc: "Under 10s, patient barbers", price: "$8" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Recent work",
  },
  barbers: {
    eyebrow: "Meet the barbers",
    title: "Three chairs, one obsession",
    items: [
      {
        name: "Karim Haddad",
        role: "Master Barber & Founder",
        bio: "Twenty years behind the chair. Old-school technique, new-school standards.",
      },
      {
        name: "Elie Nassar",
        role: "Fade Specialist",
        bio: "The sharpest blends in Mar Mikhael. Book early — his column fills up fast.",
      },
      {
        name: "Sami Khoury",
        role: "Beard & Shave Specialist",
        bio: "Straight-razor shaves and beards that behave all week.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What the regulars say",
    items: [
      {
        quote:
          "Best fade I've had in Beirut. Clean space, zero rushing, and Karim actually listens before he picks up the clippers.",
        name: "Tarek A.",
      },
      {
        quote:
          "Messaged on WhatsApp and I was in the chair twenty minutes later. The hot towel shave alone is worth the trip.",
        name: "Jad S.",
      },
      {
        quote:
          "Took my son for his first proper haircut. Patient, professional, and the result was genuinely sharp. We're regulars now.",
        name: "Rami K.",
      },
    ],
  },
  location: {
    eyebrow: "Find us",
    title: "In the heart of Mar Mikhael",
    addressLabel: "Address",
    address: "Street 17, Mar Mikhael, Beirut, Lebanon",
    hoursLabel: "Opening hours",
    walkIns: "Walk-ins welcome · Booking recommended",
    hours: [
      { days: "Monday – Saturday", time: "10:00 – 21:00" },
      { days: "Sunday", time: "11:00 – 18:00" },
    ],
    mapLabel: "Map of the barbershop location",
    openInMaps: "Open in Google Maps",
  },
  cta: {
    title: "Your chair is waiting.",
    subtitle:
      "Same-day slots go fast. Send one message and we'll confirm your appointment in minutes.",
    button: "Book on WhatsApp",
  },
  footer: {
    tagline: "Premium Barbershop · Beirut",
    follow: "Follow us",
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
    services: "خدماتنا",
    gallery: "أعمالنا",
    barbers: "فريقنا",
    reviews: "آراء الزبائن",
    contact: "موقعنا",
    book: "احجز الآن",
    menuLabel: "القائمة الرئيسية",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    langLabel: "تغيير اللغة",
  },
  hero: {
    eyebrow: "المريخا · بيروت",
    title: "أناقة حادّة.",
    titleAccent: "دفء لبناني.",
    subtitle:
      "صالون حلاقة راقٍ في قلب بيروت — حِرفة كلاسيكية، لمسة عصرية، ووقت لا يُستعجل.",
    primaryCta: "احجز عبر واتساب",
    secondaryCta: "تعرّف على خدماتنا",
  },
  about: {
    eyebrow: "عن الصالون",
    title: "حيث تلتقي الحِرفة بالأرزة",
    body: [
      "بدأت حكاية بليد أند سيدر من فكرة بسيطة: بيروت تستحق صالوناً يتعامل مع الحلاقة كحِرفة، لا كواجب.",
      "سمّينا الصالون على اسم الأرزة التي تحرس جبالنا منذ قرون، فبقينا أوفياء لروحها: دقّة في العمل، ودفء في الاستقبال.",
      "لا حجز مزدوج ولا استعجال — فقط قصّة كما يجب، وترحيب كما يجب.",
    ],
  },
  services: {
    eyebrow: "الخدمات والأسعار",
    title: "أسعار واضحة، بلا مفاجآت",
    note: "جميع الأسعار بالدولار الأمريكي · نستقبلكم بدون موعد، لكن ننصح بالحجز",
    items: [
      { name: "قصّة كلاسيكية", desc: "تشاور، قصّة، غسيل وتصفيف", price: "$12" },
      { name: "قصّة تدريجية (فايد)", desc: "تدرّج نظيف وتشطيب بالموّس", price: "$15" },
      { name: "تشذيب وتحديد اللحية", desc: "خطوط مرتّبة وتصفيف بزيت اللحية", price: "$8" },
      { name: "قصّة + لحية", desc: "الطقم الكامل بجلسة واحدة", price: "$18" },
      { name: "حلاقة بالمنشفة الساخنة", desc: "موّس تقليدي ومناشف ساخنة", price: "$12" },
      { name: "قصّة أطفال", desc: "للصغار حتى ١٠ سنوات، بكل صبر", price: "$8" },
    ],
  },
  gallery: {
    eyebrow: "معرض الصور",
    title: "من أعمالنا",
  },
  barbers: {
    eyebrow: "تعرّف على الفريق",
    title: "ثلاثة كراسي، وشغف واحد",
    items: [
      {
        name: "كرم حدّاد",
        role: "حلاّق أوّل ومؤسس",
        bio: "عشرون عاماً خلف الكرسي. تقنيات الكلاسيك بمعايير اليوم.",
      },
      {
        name: "إليّ نصّار",
        role: "مختص بالقصّات التدريجية",
        bio: "أنظف تدرّجات في المريخا. احجز مبكراً — مواعيده تمتلي بسرعة.",
      },
      {
        name: "سامي خوري",
        role: "مختص باللحية والحلاقة التقليدية",
        bio: "حلاقة بالموّس، ولحية تبقى مرتّبة طوال الأسبوع.",
      },
    ],
  },
  reviews: {
    eyebrow: "آراء الزبائن",
    title: "ماذا يقول روّادنا",
    items: [
      {
        quote:
          "أفضل قصّة تدريجية جرّبتها في بيروت. المكان نظيف، ولا أحد يستعجل، وكرم يسمع لطلبك قبل أن يرفع الماكينة.",
        name: "طارق ع.",
      },
      {
        quote:
          "أرسلت رسالة على واتساب وجلست على الكرسي بعد عشرين دقيقة. تجربة الحلاقة بالمنشفة الساخنة وحدها تستحق الزيارة.",
        name: "جاد س.",
      },
      {
        quote:
          "أخذت ابني لأول قصّة جدّية. صبر واحترافية، والنتيجة كانت ممتازة. صرنا من الزبائن الدائمين.",
        name: "رامي خ.",
      },
    ],
  },
  location: {
    eyebrow: "موقعنا",
    title: "في قلب المريخا",
    addressLabel: "العنوان",
    address: "شارع ١٧، المريخا، بيروت، لبنان",
    hoursLabel: "ساعات العمل",
    walkIns: "بدون موعد ممكن، لكن الحجز أفضل",
    hours: [
      { days: "الاثنين – السبت", time: "١٠:٠٠ – ٢١:٠٠" },
      { days: "الأحد", time: "١١:٠٠ – ١٨:٠٠" },
    ],
    mapLabel: "خريطة موقع الصالون",
    openInMaps: "افتح في خرائط Google",
  },
  cta: {
    title: "كرسيك بانتظارك.",
    subtitle:
      "المواعيد الأخيرة تُحجز بسرعة. أرسل رسالة واحدة ونؤكد لك موعدك خلال دقائق.",
    button: "احجز عبر واتساب",
  },
  footer: {
    tagline: "صالون حلاقة راقٍ · بيروت",
    follow: "تابعنا",
    rights: "© ٢٠٢٦ بليد أند سيدر. جميع الحقوق محفوظة.",
    concept: "تصميم مفاهيمي من Mawqe3 Studio",
  },
  whatsapp: {
    aria: "تواصل معنا عبر واتساب",
  },
};

export const translations: Record<Locale, typeof en> = { en, ar };
