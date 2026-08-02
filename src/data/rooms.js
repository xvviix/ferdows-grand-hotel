/**
 * Room & Suite catalogue.
 *
 * Each room carries localized copy (en/fa), one or more images, and the
 * dimensions used for the detail page. `rate` is expressed in Iranian Rial
 * (IRR) and formatted at render time. Prices are illustrative placeholders.
 */

export const rooms = [
  {
    slug: "deluxe-mountain-view",
    images: ["room-a.jpg", "room-d.jpg", "view.jpg"],
    size: 42,
    capacity: 2,
    bed: "king",
    view: "view-alborz",
    rate: 42000000,
    featured: true,
    en: {
      name: "Deluxe — Mountain View",
      blurb: "A serene room facing the Alborz range, with a deep marble bathroom.",
      desc: "Wake to the Alborz in a room of walnut, linen and soft morning light. A deep soaking tub, silk drapes and a writing desk make it a quiet base in the city.",
    },
    fa: {
      name: "دلوکس — چشم‌انداز کوه",
      blurb: "اتاقی آرام رو به رشته‌کوه البرز، با حمام مرمری عمیق.",
      desc: "با صدا و نور صبحگاهی البرز بیدار شوید، در اتاقی از گردو، کتان و نوری نرم. وانِ عمیق، پرده‌های ابریشمی و میز تحریر، آن را به پایگاهی آرام در شهر بدل می‌کند.",
    },
  },
  {
    slug: "executive-suite",
    images: ["room-b.jpg", "room-f.jpg", "lobby.jpg"],
    size: 68,
    capacity: 3,
    bed: "kingPlus",
    rate: 68000000,
    featured: true,
    en: {
      name: "Executive Suite",
      blurb: "A gracious two-room suite with a private lounge and garden outlook.",
      desc: "A separate lounge, a study corner and a sleeping chamber open to the courtyard garden. Ideal for extended stays and unhurried mornings.",
    },
    fa: {
      name: "سوئیت اجرایی",
      blurb: "سوئیتی دواتاقه با پذیرایی خصوصی و چشم‌انداز باغ.",
      desc: "پذیرایی جداگانه، گوشه مطالعه و اتاق خوابی رو به باغچه. مناسب اقامت‌های طولانی‌تر و صبح‌های بی‌عجله.",
    },
  },
  {
    slug: "premier-terrace",
    images: ["room-c.jpg", "room-a.jpg", "garden.jpg"],
    size: 52,
    capacity: 2,
    bed: "king",
    rate: 54000000,
    featured: true,
    en: {
      name: "Premier — Private Terrace",
      blurb: "A corner room with a private terrace over the jasmine garden.",
      desc: "A corner room with floor-to-ceiling glass that opens onto a private terrace above the jasmine and pomegranate garden. Evening tea here is essential.",
    },
    fa: {
      name: "پریمیر — تراس خصوصی",
      blurb: "اتاق گوشه‌ای با تراس خصوصی رو به باغ یاس.",
      desc: "اتاق گوشه‌ای با پنجره‌های سراسری که به تراسی خصوصی بالای باغ یاس و انار باز می‌شود. چای غروب اینجا ضروری است.",
    },
  },
  {
    slug: "garden-suite",
    images: ["room-d.jpg", "room-b.jpg", "architecture.jpg"],
    size: 74,
    capacity: 3,
    bed: "kingPlus",
    rate: 79000000,
    featured: false,
    en: {
      name: "Garden Suite",
      blurb: "A ground-floor suite with direct access to the courtyard garden.",
      desc: "Set among the pomegranate trees, this suite opens directly onto the garden. A private patio, a spa-style bathroom and the sound of the fountain.",
    },
    fa: {
      name: "سوئیت باغ",
      blurb: "سوئیت طبقه همکف با دسترسی مستقیم به باغچه.",
      desc: "این سوئیت در میان درختان انار، مستقیم به باغ باز می‌شود. تراس خصوصی، حمام سبک اسپا و آوای فواره.",
    },
  },
  {
    slug: "royal-penthouse",
    images: ["room-e.jpg", "room-c.jpg", "view.jpg"],
    size: 130,
    capacity: 4,
    bed: "kingPlus",
    rate: 145000000,
    featured: true,
    en: {
      name: "Royal Penthouse",
      blurb: "The crowning residence, spanning the full top floor with two terraces.",
      desc: "Occupying the entire top floor, with two wraparound terraces, a dining salon for eight, and panoramas from the Alborz to the Milad Tower.",
    },
    fa: {
      name: "پنت‌هاوس سلطنتی",
      blurb: "اقامتگاه اصلی، در سراسر طبقه آخر با دو تراس.",
      desc: "سراسر طبقه آخر را در بر می‌گیرد؛ دو تراس دورانی، سالن غذاخوری هشت‌نفره و چشم‌اندازی از البرز تا برج میلاد.",
    },
  },
  {
    slug: "presidential-suite",
    images: ["room-f.jpg", "room-e.jpg", "exterior.jpg"],
    size: 210,
    capacity: 6,
    bed: "kingPlus",
    rate: 210000000,
    featured: false,
    en: {
      name: "Presidential Suite",
      blurb: "A palace-scale residence with a private chef's kitchen and salon.",
      desc: "The house's most storied key — a grand salon, private dining, a chef's kitchen, two bedrooms and a dedicated butler. Reserved for the most celebrated arrivals.",
    },
    fa: {
      name: "سوئیت ریاست‌جمهوری",
      blurb: "اقامتگاهی در مقیاس کاخ با آشپزخانه و سالن خصوصی.",
      desc: "پرآوازه‌ترین کلید این خانه — سالنی بزرگ، غذاخوری خصوصی، آشپزخانه اختصاصی، دو اتاق خواب و باتلر ویژه. برای باشکوه‌ترین ورودها.",
    },
  },
];

export const getRoom = (slug) => rooms.find((r) => r.slug === slug);

export const views = {
  viewAlborz: { en: "Alborz Mountain", fa: "رشته‌کوه البرز" },
  garden: { en: "Courtyard garden", fa: "باغچه" },
  city: { en: "City skyline", fa: "خط آسمان شهر" },
};
