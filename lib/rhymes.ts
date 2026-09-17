export type Rhyme = {
  id: string
  title: string
  origin: string
  flag: string
  price: number
  cover: string
  blurb: string
  firstLine: string
}

export const rhymes: Rhyme[] = [
  {
    id: "twinkle-star",
    title: "Twinkle, Twinkle, Little Star",
    origin: "England",
    flag: "🇬🇧",
    price: 0.03,
    cover: "/rhymes/twinkle-star.png",
    blurb: "The beloved lullaby about a wondering child gazing up at a shining star in the night sky.",
    firstLine: "Twinkle, twinkle, little star, how I wonder what you are.",
  },
  {
    id: "frere-jacques",
    title: "Frère Jacques",
    origin: "France",
    flag: "🇫🇷",
    price: 0.05,
    cover: "/rhymes/frere-jacques.png",
    blurb: "A gentle round about a sleepy friar being nudged awake to ring the morning bells.",
    firstLine: "Frère Jacques, Frère Jacques, dormez-vous?",
  },
  {
    id: "los-pollitos",
    title: "Los Pollitos",
    origin: "Spain & Latin America",
    flag: "🇪🇸",
    price: 0.07,
    cover: "/rhymes/los-pollitos.png",
    blurb: "Little chicks cheep for warmth and food as their mother hen watches over them.",
    firstLine: "Los pollitos dicen pío, pío, pío.",
  },
  {
    id: "alle-meine-entchen",
    title: "Alle meine Entchen",
    origin: "Germany",
    flag: "🇩🇪",
    price: 0.09,
    cover: "/rhymes/alle-meine-entchen.png",
    blurb: "A cheerful tune following a row of ducklings paddling across the pond.",
    firstLine: "Alle meine Entchen schwimmen auf dem See.",
  },
  {
    id: "kagome",
    title: "Kagome Kagome",
    origin: "Japan",
    flag: "🇯🇵",
    price: 0.12,
    cover: "/rhymes/kagome.png",
    blurb: "A traditional circle game rhyme where children guess who stands behind them.",
    firstLine: "Kagome kagome, kago no naka no tori wa.",
  },
  {
    id: "machli",
    title: "Machli Jal Ki Rani Hai",
    origin: "India",
    flag: "🇮🇳",
    price: 0.15,
    cover: "/rhymes/machli.png",
    blurb: "A playful rhyme celebrating the queen fish who lives happily in the water.",
    firstLine: "Machli jal ki rani hai, jeevan uska paani hai.",
  },
]

export type LanguageCode = "en" | "es" | "fr" | "de" | "ja" | "hi"

export type Language = {
  code: LanguageCode
  label: string
  region: string
  flag: string
}

export const languages: Language[] = [
  { code: "en", label: "English", region: "United States", flag: "🇺🇸" },
  { code: "es", label: "Español", region: "España", flag: "🇪🇸" },
  { code: "fr", label: "Français", region: "France", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", region: "Deutschland", flag: "🇩🇪" },
  { code: "ja", label: "日本語", region: "日本", flag: "🇯🇵" },
  { code: "hi", label: "हिन्दी", region: "भारत", flag: "🇮🇳" },
]

type Strings = {
  brand: string
  navCollection: string
  heroKicker: string
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  featured: string
  from: string
  origin: string
  buyNow: string
  back: string
  checkout: string
  orderSummary: string
  cardName: string
  cardNumber: string
  expiry: string
  cvc: string
  email: string
  payNow: string
  total: string
  success: string
  successNote: string
  playAnother: string
}

export const translations: Record<LanguageCode, Strings> = {
  en: {
    brand: "RhymeWorld",
    navCollection: "Collection",
    heroKicker: "Nursery rhymes from every corner of the world",
    heroTitle: "Little songs, big wonder.",
    heroSubtitle: "Collect timeless nursery rhymes from across the globe, starting at just $0.03.",
    heroCta: "Explore the collection",
    featured: "Featured rhymes",
    from: "from",
    origin: "Origin",
    buyNow: "Buy now",
    back: "Back",
    checkout: "Checkout",
    orderSummary: "Order summary",
    cardName: "Name on card",
    cardNumber: "Card number",
    expiry: "Expiry",
    cvc: "CVC",
    email: "Email address",
    payNow: "Pay now",
    total: "Total",
    success: "Payment complete!",
    successNote: "Your rhyme is ready to sing. Thank you for collecting with us.",
    playAnother: "Browse more rhymes",
  },
  es: {
    brand: "RhymeWorld",
    navCollection: "Colección",
    heroKicker: "Canciones infantiles de todos los rincones del mundo",
    heroTitle: "Canciones pequeñas, gran asombro.",
    heroSubtitle: "Colecciona canciones infantiles atemporales de todo el mundo, desde solo $0.03.",
    heroCta: "Explorar la colección",
    featured: "Canciones destacadas",
    from: "desde",
    origin: "Origen",
    buyNow: "Comprar ahora",
    back: "Atrás",
    checkout: "Pago",
    orderSummary: "Resumen del pedido",
    cardName: "Nombre en la tarjeta",
    cardNumber: "Número de tarjeta",
    expiry: "Vencimiento",
    cvc: "CVC",
    email: "Correo electrónico",
    payNow: "Pagar ahora",
    total: "Total",
    success: "¡Pago completado!",
    successNote: "Tu canción está lista para cantar. Gracias por coleccionar con nosotros.",
    playAnother: "Ver más canciones",
  },
  fr: {
    brand: "RhymeWorld",
    navCollection: "Collection",
    heroKicker: "Comptines des quatre coins du monde",
    heroTitle: "Petites chansons, grand émerveillement.",
    heroSubtitle: "Collectionnez des comptines intemporelles du monde entier, à partir de 0,03 $.",
    heroCta: "Explorer la collection",
    featured: "Comptines en vedette",
    from: "à partir de",
    origin: "Origine",
    buyNow: "Acheter",
    back: "Retour",
    checkout: "Paiement",
    orderSummary: "Récapitulatif",
    cardName: "Nom sur la carte",
    cardNumber: "Numéro de carte",
    expiry: "Expiration",
    cvc: "CVC",
    email: "Adresse e-mail",
    payNow: "Payer",
    total: "Total",
    success: "Paiement terminé !",
    successNote: "Votre comptine est prête à être chantée. Merci de collectionner avec nous.",
    playAnother: "Voir plus de comptines",
  },
  de: {
    brand: "RhymeWorld",
    navCollection: "Sammlung",
    heroKicker: "Kinderreime aus aller Welt",
    heroTitle: "Kleine Lieder, großes Staunen.",
    heroSubtitle: "Sammle zeitlose Kinderreime aus aller Welt, schon ab 0,03 $.",
    heroCta: "Sammlung entdecken",
    featured: "Ausgewählte Reime",
    from: "ab",
    origin: "Herkunft",
    buyNow: "Jetzt kaufen",
    back: "Zurück",
    checkout: "Kasse",
    orderSummary: "Bestellübersicht",
    cardName: "Name auf der Karte",
    cardNumber: "Kartennummer",
    expiry: "Ablauf",
    cvc: "CVC",
    email: "E-Mail-Adresse",
    payNow: "Jetzt bezahlen",
    total: "Gesamt",
    success: "Zahlung abgeschlossen!",
    successNote: "Dein Reim ist bereit zum Singen. Danke, dass du mit uns sammelst.",
    playAnother: "Mehr Reime ansehen",
  },
  ja: {
    brand: "RhymeWorld",
    navCollection: "コレクション",
    heroKicker: "世界中のわらべ歌",
    heroTitle: "小さな歌、大きな驚き。",
    heroSubtitle: "世界中の時代を超えたわらべ歌を、たった$0.03から集めましょう。",
    heroCta: "コレクションを見る",
    featured: "おすすめのうた",
    from: "から",
    origin: "産地",
    buyNow: "今すぐ購入",
    back: "戻る",
    checkout: "お支払い",
    orderSummary: "注文の概要",
    cardName: "カード名義",
    cardNumber: "カード番号",
    expiry: "有効期限",
    cvc: "CVC",
    email: "メールアドレス",
    payNow: "支払う",
    total: "合計",
    success: "お支払い完了！",
    successNote: "うたの準備ができました。集めていただきありがとうございます。",
    playAnother: "もっと見る",
  },
  hi: {
    brand: "RhymeWorld",
    navCollection: "संग्रह",
    heroKicker: "दुनिया भर की बाल कविताएँ",
    heroTitle: "छोटे गीत, बड़ा आश्चर्य।",
    heroSubtitle: "दुनिया भर की कालातीत बाल कविताएँ केवल $0.03 से एकत्र करें।",
    heroCta: "संग्रह देखें",
    featured: "चुनिंदा कविताएँ",
    from: "से",
    origin: "उद्गम",
    buyNow: "अभी खरीदें",
    back: "वापस",
    checkout: "भुगतान",
    orderSummary: "ऑर्डर सारांश",
    cardName: "कार्ड पर नाम",
    cardNumber: "कार्ड नंबर",
    expiry: "समाप्ति",
    cvc: "CVC",
    email: "ईमेल पता",
    payNow: "अभी भुगतान करें",
    total: "कुल",
    success: "भुगतान पूर्ण!",
    successNote: "आपकी कविता गाने के लिए तैयार है। हमारे साथ संग्रह करने के लिए धन्यवाद।",
    playAnother: "और कविताएँ देखें",
  },
}
