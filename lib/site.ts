export interface ContactPerson {
  id: string;
  label: string;
  role: string;
  phoneDigits: string;
  phoneDisplay: string;
}

export interface HostelInfo {
  name: string;
  teluguName: string;
  tagline: string;
  subTagline: string;
  intro: string;
  city: string;
  address: string;
  landmark: string;
  phoneDigits: string;
  phoneDisplay: string;
  phoneSecondaryDigits: string;
  phoneSecondaryDisplay: string;
  whatsappDigits: string;
  whatsappDisplay: string;
  managementPhoneDigits: string;
  managementPhoneDisplay: string;
  wardenPhoneDigits: string;
  wardenPhoneDisplay: string;
  contacts: ContactPerson[];
  email: string;
  instagram: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleMapsShareUrl: string;
  googleMapsEmbedUrl: string;
  visitingHours: string;
}

export interface FloorBlock {
  id: string;
  floorLabel: string;
  blockName: string;
  floorNumber: string;
  acType: "Non-AC" | "Unlimited AC";
  isAC: boolean;
  totalRooms: number;
  roomRange: string;
  roomList: string[];
  sharing: string;
  priceNote: string;
  tagline: string;
}

export interface RoomOption {
  id: string;
  name: string;
  tagAngle: number;
  beds: number;
  monthlyPrice: number;
  monthlyPriceDisplay: string;
  billingPeriod?: string;
  deposit: number;
  depositDisplay: string;
  ac: boolean;
  acTypeLabel?: string;
  blocks?: string;
  popular?: boolean;
  features: string[];
  dimensions: string;
  description: string;
}

export interface Amenity {
  id: string;
  title: string;
  detail: string;
  beforeHighlight?: string;
  highlight?: string;
  afterHighlight?: string;
}

export interface MealSlot {
  name: string;
  time: string;
  menu: string;
}

export interface DayMessMenu {
  dayName: string;
  shortDay: string;
  dayIndex: number;
  meals: MealSlot[];
}

export interface GalleryTile {
  id: string;
  title: string;
  caption: string;
  image?: string;
  accentBg: string;
}

export interface HouseRule {
  id: string;
  title: string;
  rule: string;
  beforeHighlight?: string;
  highlight?: string;
  afterHighlight?: string;
}

export interface WhyChoosePoint {
  id: string;
  icon: string;
  title: string;
  beforeHighlight: string;
  highlight: string;
  afterHighlight: string;
}

export interface SiteContent {
  hostel: HostelInfo;
  floors: FloorBlock[];
  navLinks: { label: string; href: string }[];
  rooms: RoomOption[];
  amenities: Amenity[];
  messSchedule: DayMessMenu[];
  gallery: GalleryTile[];
  rules: HouseRule[];
  whyChooseUs: WhyChoosePoint[];
}

export const siteContent: SiteContent = {
  hostel: {
    name: "RaagaNest Boys Hostel",
    teluguName: "రాగా నెస్ట్ BOYS HOSTEL",
    tagline: "A comfortable stay for a better tomorrow",
    subTagline: "Safe • Secure • Affordable hostel living for Vishnu College students",
    intro:
      "Modern AC and Non-AC student accommodation situated right next to Vishnu College South Gate. Wholesome Andhra home-style meals, dedicated study environment, 24/7 security, high-speed Wi-Fi, and complete power backup.",
    city: "Bhimavaram",
    address:
      "Near South Gate Engineering, Vishnu College, Kovvada, Bhimavaram, Andhra Pradesh 534202",
    landmark: "Directly opposite Vishnu College South Gate Entrance",
    phoneDigits: "916300751897",
    phoneDisplay: "+91 63007 51897",
    phoneSecondaryDigits: "919010698831",
    phoneSecondaryDisplay: "+91 90106 98831",
    whatsappDigits: "916300751897",
    whatsappDisplay: "+91 63007 51897",
    managementPhoneDigits: "916300751897",
    managementPhoneDisplay: "+91 63007 51897",
    wardenPhoneDigits: "919010698831",
    wardenPhoneDisplay: "+91 90106 98831",
    contacts: [
      {
        id: "management",
        label: "Management / Admissions",
        role: "Admissions, Bookings & Fee Inquiries",
        phoneDigits: "916300751897",
        phoneDisplay: "+91 63007 51897",
      },
      {
        id: "warden",
        label: "Warden Desk",
        role: "Campus Visits, Room Inspection & Daily Support",
        phoneDigits: "919010698831",
        phoneDisplay: "+91 90106 98831",
      },
    ],
    email: "raaganesthostel@gmail.com",
    instagram: "@raaganest",
    instagramUrl: "https://www.instagram.com/raaganest?xtok=dGdyZjd1bHl6ODE4",
    googleMapsUrl: "https://maps.google.com/?cid=958866160897614651",
    googleMapsShareUrl: "https://share.google/lKeGicLZw4rUJczl1",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Vijay+Aditya+boys+hostel+Kovvada&t=&z=16&ie=UTF8&iwloc=&output=embed",
    visitingHours: "10:00 AM to 6:00 PM (Daily)",
  },

  floors: [
    {
      id: "ground-floor-a",
      floorLabel: "Ground Floor",
      blockName: "A Block",
      floorNumber: "0",
      acType: "Non-AC",
      isAC: false,
      totalRooms: 12,
      roomRange: "A1 to A12",
      roomList: ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12"],
      sharing: "5 Sharing",
      priceNote: "₹85,000 / year",
      tagline: "Effortless ground floor access, natural cross breeze, zero stairs required",
    },
    {
      id: "first-floor-b",
      floorLabel: "1st Floor",
      blockName: "B Block",
      floorNumber: "1",
      acType: "Non-AC",
      isAC: false,
      totalRooms: 12,
      roomRange: "B1 to B12",
      roomList: ["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12"],
      sharing: "5 Sharing",
      priceNote: "₹85,000 / year",
      tagline: "Bright first floor rooms with open courtyard ventilation",
    },
    {
      id: "second-floor-c",
      floorLabel: "2nd Floor",
      blockName: "C Block",
      floorNumber: "2",
      acType: "Unlimited AC",
      isAC: true,
      totalRooms: 12,
      roomRange: "C1 to C12",
      roomList: ["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12"],
      sharing: "5 Sharing",
      priceNote: "₹1,00,000 / yr (Unlimited) or ₹85,000 + AC Bill",
      tagline: "Inverter AC comfort, passenger lift access, and peaceful study atmosphere",
    },
    {
      id: "third-floor-d",
      floorLabel: "3rd Floor",
      blockName: "D Block",
      floorNumber: "3",
      acType: "Unlimited AC",
      isAC: true,
      totalRooms: 12,
      roomRange: "D1 to D12",
      roomList: ["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12"],
      sharing: "5 Sharing",
      priceNote: "₹1,00,000 / yr (Unlimited) or ₹85,000 + AC Bill",
      tagline: "Top floor panoramic view, quiet exam prep environment, and inverter AC",
    },
  ],

  navLinks: [
    { label: "Rooms & Floors", href: "#rooms" },
    { label: "Facilities", href: "#facilities" },
    { label: "Mess menu", href: "#mess-menu" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
  ],

  rooms: [
    {
      id: "unlimited-ac-5-sharing",
      name: "Unlimited AC Room",
      tagAngle: -3,
      beds: 5,
      monthlyPrice: 100000,
      monthlyPriceDisplay: "₹1,00,000",
      billingPeriod: "/ year",
      deposit: 5000,
      depositDisplay: "1 Lakh / Academic Year",
      ac: true,
      acTypeLabel: "Unlimited AC",
      blocks: "C & D Block (Rooms C1–C12, D1–D12)",
      popular: true,
      dimensions: "24 ft × 16 ft",
      description:
        "Located on 2nd Floor (C Block) & 3rd Floor (D Block). 5 sharing setup with complete peace of mind: run the inverter split AC round the clock with zero additional electricity charges all year.",
      features: [
        "5 sharing spacious layout with 5 separate sturdy cots & mattresses",
        "Unlimited Inverter Split AC (zero electricity sub-meter bills)",
        "5 individual study tables, chairs & independent lockable wardrobes",
        "Attached western washroom with 24/7 solar hot water & shower",
        "Full Andhra homely mess (Breakfast, Lunch, Snacks, Dinner) included",
        "High-speed fiber Wi-Fi + daily housekeeping & sanitization",
      ],
    },
    {
      id: "limited-ac-5-sharing",
      name: "Limited AC Room",
      tagAngle: 4,
      beds: 5,
      monthlyPrice: 85000,
      monthlyPriceDisplay: "₹85,000",
      billingPeriod: "/ year + AC bill",
      deposit: 5000,
      depositDisplay: "₹85,000 + Room Meter Usage",
      ac: true,
      acTypeLabel: "Limited / Metered AC",
      blocks: "C & D Block (Rooms C1–C12, D1–D12)",
      popular: false,
      dimensions: "24 ft × 16 ft",
      description:
        "Located on 2nd Floor (C Block) & 3rd Floor (D Block). Ideal for students who want AC availability on hot days, paying only for the exact electricity units their room consumes on a dedicated digital sub-meter.",
      features: [
        "5 sharing spacious room with 5 individual beds & fresh linens",
        "Inverter Split AC connected to a room-dedicated sub-meter",
        "₹85,000 base fee includes accommodation + full 4-time Andhra mess",
        "5 personal study workstations with laptop charging ports",
        "Attached western toilet with geyser facility & 24/7 water supply",
        "Passenger elevator access to 2nd & 3rd floors",
      ],
    },
    {
      id: "non-ac-5-sharing",
      name: "Non-AC Room",
      tagAngle: -1,
      beds: 5,
      monthlyPrice: 85000,
      monthlyPriceDisplay: "₹85,000",
      billingPeriod: "/ year",
      deposit: 5000,
      depositDisplay: "₹85,000 All-Inclusive / Year",
      ac: false,
      acTypeLabel: "Non-AC Budget",
      blocks: "A & B Block (Rooms A1–A12, B1–B12)",
      popular: false,
      dimensions: "24 ft × 16 ft",
      description:
        "Located on Ground Floor (A Block: A1–A12) & 1st Floor (B Block: B1–B12). Natural airflow, dual high-speed ceiling fans, quick ground/first-floor access, and complete student amenities.",
      features: [
        "5 sharing room with 5 durable single cots & dust-free mattresses",
        "Dual high-speed ceiling fans & large exterior windows for ventilation",
        "5 steel wardrobes with independent personal keys",
        "Attached western washroom with 24/7 hot water supply",
        "Full daily mess included: 3 wholesome meals + evening tea & snacks",
        "Convenient ground & first floor access — no waiting for lifts",
      ],
    },
  ],

  amenities: [
    {
      id: "homely-food",
      title: "Nutritious Andhra Mess",
      beforeHighlight: "3 delicious meals every day with special ",
      highlight: "Sunday Biryani",
      afterHighlight: " and authentic home-style taste.",
      detail: "3 delicious meals every day with special Sunday Biryani and authentic home-style taste.",
    },
    {
      id: "walkable-distance",
      title: "Opposite Vishnu Gate",
      beforeHighlight: "Located directly opposite South Gate — just a ",
      highlight: "1 minute walk",
      afterHighlight: " to college with zero travel time.",
      detail: "Located directly opposite South Gate — just a 1 minute walk to college with zero travel time.",
    },
    {
      id: "lift-generator",
      title: "Lift & Power Backup",
      beforeHighlight: "Passenger elevator to all floors and auto ",
      highlight: "power generator",
      afterHighlight: " so power cuts never interrupt your study.",
      detail: "Passenger elevator to all floors and auto power generator so power cuts never interrupt your study.",
    },
    {
      id: "high-speed-wifi",
      title: "High-Speed Wi-Fi",
      beforeHighlight: "Fast, unlimited ",
      highlight: "fiber internet",
      afterHighlight: " in all rooms for assignments, coding, and online classes.",
      detail: "Fast, unlimited fiber internet in all rooms for assignments, coding, and online classes.",
    },
    {
      id: "ro-water-hot-water",
      title: "RO Drinking & Hot Water",
      beforeHighlight: "24/7 pure chilled ",
      highlight: "RO drinking water",
      afterHighlight: " on each floor, plus hot water geysers in all washrooms.",
      detail: "24/7 pure chilled RO drinking water on each floor, plus hot water geysers in all washrooms.",
    },
    {
      id: "laundry-washing",
      title: "Free Washing Machines",
      beforeHighlight: "Free automatic ",
      highlight: "washing machines",
      afterHighlight: " for all students with a breezy clothes-drying terrace.",
      detail: "Free automatic washing machines for all students with a breezy clothes-drying terrace.",
    },
    {
      id: "security-cctv",
      title: "24/7 CCTV & Security",
      beforeHighlight: "Safe environment with ",
      highlight: "32 CCTV cameras",
      afterHighlight: " and resident warden available day and night.",
      detail: "Safe environment with 32 CCTV cameras and resident warden available day and night.",
    },
    {
      id: "study-atmosphere",
      title: "Quiet Study Atmosphere",
      beforeHighlight: "Strict quiet hours after 10:30 PM with your own ",
      highlight: "personal study desk",
      afterHighlight: " and lockable wardrobe.",
      detail: "Strict quiet hours after 10:30 PM with your own personal study desk and lockable wardrobe.",
    },
  ],

  messSchedule: [
    {
      dayName: "Sunday",
      shortDay: "Sun",
      dayIndex: 0,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Upma" },
        { name: "Afternoon", time: "12:30 PM – 2:30 PM", menu: "Basmati Biryani, Chicken Curry, Veg Curry & Sweet" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Curry, Sambar, Pickle, Curd" },
      ],
    },
    {
      dayName: "Monday",
      shortDay: "Mon",
      dayIndex: 1,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Idly" },
        { name: "Afternoon", time: "12:30 PM – 2:15 PM", menu: "Lemon Rice, Curry, Fry, Dal, Rasam, Curd" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Egg Curry, Veg Curry, Sambar, Pickle, Curd" },
      ],
    },
    {
      dayName: "Tuesday",
      shortDay: "Tue",
      dayIndex: 2,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Bonda" },
        { name: "Afternoon", time: "12:30 PM – 2:15 PM", menu: "Curry, Fry, Dal, Rasam, Curd" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Curry, Sambar, Chips, Pickle, Curd" },
      ],
    },
    {
      dayName: "Wednesday",
      shortDay: "Wed",
      dayIndex: 3,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Dosa" },
        { name: "Afternoon", time: "12:30 PM – 2:15 PM", menu: "Curry, Fry, Dal, Rasam, Curd" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Veg Biryani, Chicken Curry, Veg Curry, Sambar, Curd" },
      ],
    },
    {
      dayName: "Thursday",
      shortDay: "Thu",
      dayIndex: 4,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Sambar Idly" },
        { name: "Afternoon", time: "12:30 PM – 2:15 PM", menu: "Curry, Fry, Dal, Rasam, Curd" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Fried Rice (Veg / Non Veg) (or) Egg Bajji, Curd" },
      ],
    },
    {
      dayName: "Friday",
      shortDay: "Fri",
      dayIndex: 5,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Puri" },
        { name: "Afternoon", time: "12:30 PM – 2:15 PM", menu: "Curry, Fry, Dal, Rasam, Curd" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Curry, Sambar, Pickle, Chips, Curd" },
      ],
    },
    {
      dayName: "Saturday",
      shortDay: "Sat",
      dayIndex: 6,
      meals: [
        { name: "Morning", time: "7:30 AM – 9:00 AM", menu: "Uttapam (or) Gari" },
        { name: "Afternoon", time: "12:30 PM – 2:15 PM", menu: "Curry, Fry, Dal, Rasam, Curd" },
        { name: "Evening", time: "7:30 PM – 9:30 PM", menu: "Chapathi, Curd Rice" },
      ],
    },
  ],

  gallery: [
    {
      id: "elevation-exterior",
      title: "Modern Multi-Story Elevation",
      caption: "Contemporary architectural facade with individual ventilated room balconies",
      image: "/photos/elevation-exterior.jpg",
      accentBg: "#0b0c13",
    },
    {
      id: "spacious-ac-room",
      title: "Spacious AC Room & Balcony",
      caption: "Premium marble flooring, Inverter Split AC, sliding glass door & built-in storage",
      image: "/photos/spacious-ac-room.jpg",
      accentBg: "#08090d",
    },
    {
      id: "furnished-beds",
      title: "Furnished Student Living",
      caption: "Individual beds with dust-free mattresses, bright exterior window, ceiling fan & lockable wardrobes",
      image: "/photos/furnished-beds.jpg",
      accentBg: "#0b0c13",
    },
    {
      id: "attached-washroom",
      title: "Attached Western Washroom",
      caption: "Modern tiled bathroom with instant geyser hot water facility & overhead shower",
      image: "/photos/attached-washroom.jpg",
      accentBg: "#08090d",
    },
  ],

  rules: [
    {
      id: "gate-timings",
      title: "Gate Closes at 9:30 PM",
      beforeHighlight: "Main hostel gate closes at ",
      highlight: "9:30 PM daily",
      afterHighlight: " for student safety. Late entry requires informing the warden in advance.",
      rule: "Main hostel gate closes at 9:30 PM daily for student safety. Late entry requires informing the warden in advance.",
    },
    {
      id: "quiet-hours",
      title: "Quiet Study Hours",
      beforeHighlight: "Maintain silence after 10:30 PM. No loud music or shouting so everyone can ",
      highlight: "sleep & study peacefully",
      afterHighlight: ".",
      rule: "Maintain silence after 10:30 PM. No loud music or shouting so everyone can sleep & study peacefully.",
    },
    {
      id: "ragging-free",
      title: "100% Anti-Ragging Campus",
      beforeHighlight: "Zero tolerance for ragging. We maintain a friendly, supportive brotherhood with ",
      highlight: "strict anti-ragging",
      afterHighlight: " safety for all juniors.",
      rule: "Zero tolerance for ragging. We maintain a friendly, supportive brotherhood with strict anti-ragging safety for all juniors.",
    },
    {
      id: "visitors-policy",
      title: "Parents & Visitors",
      beforeHighlight: "Parents and guardians are always welcome between 10:00 AM to 6:00 PM in the ",
      highlight: "visitor lounge",
      afterHighlight: ".",
      rule: "Parents and guardians are always welcome between 10:00 AM to 6:00 PM in the visitor lounge.",
    },
    {
      id: "prohibited-substances",
      title: "Clean & Healthy Campus",
      beforeHighlight: "Smoking, alcohol, and any harmful substances are ",
      highlight: "strictly prohibited",
      afterHighlight: " on hostel premises.",
      rule: "Smoking, alcohol, and any harmful substances are strictly prohibited on hostel premises.",
    },
    {
      id: "electrical-appliances",
      title: "Electrical Safety",
      beforeHighlight: "No high-watt heating coils or stoves. Always turn off lights, fans, and ACs to ",
      highlight: "save electricity",
      afterHighlight: " when leaving your room.",
      rule: "No high-watt heating coils or stoves. Always turn off lights, fans, and ACs to save electricity when leaving your room.",
    },
    {
      id: "cleanliness",
      title: "Daily Cleanliness",
      beforeHighlight: "Housekeeping cleans rooms daily. Keep your personal cots, desks, and attached washrooms ",
      highlight: "neat and hygienic",
      afterHighlight: ".",
      rule: "Housekeeping cleans rooms daily. Keep your personal cots, desks, and attached washrooms neat and hygienic.",
    },
    {
      id: "fee-schedule",
      title: "Transparent Annual Fee",
      beforeHighlight: "Annual hostel and mess fees are settled simply via UPI or bank transfer with ",
      highlight: "official payment receipts",
      afterHighlight: ".",
      rule: "Annual hostel and mess fees are settled simply via UPI or bank transfer with official payment receipts.",
    },
  ],

  whyChooseUs: [
    {
      id: "wifi-247",
      icon: "📶",
      title: "24/7 Full High-Speed Wi-Fi",
      beforeHighlight: "Full high-speed ",
      highlight: "Wi-Fi available 24/7",
      afterHighlight: " in all rooms, corridors, and dining halls.",
    },
    {
      id: "mobile-network",
      icon: "⚡",
      title: "Strong Mobile Connectivity",
      beforeHighlight: "Strong mobile ",
      highlight: "network connectivity across all rooms",
      afterHighlight: " with zero signal drops.",
    },
    {
      id: "largest-rooms",
      icon: "📐",
      title: "Largest Rooms Available",
      beforeHighlight: "Spacious and breezy layout featuring the ",
      highlight: "largest rooms among all hostels",
      afterHighlight: " near Vishnu College South Gate.",
    },
    {
      id: "clean-modern-interior",
      icon: "🎨",
      title: "Clean Modern Interior",
      beforeHighlight: "Freshly painted walls and a ",
      highlight: "clean modern interior",
      afterHighlight: " that feels bright and welcoming.",
    },
    {
      id: "upgraded-rooms",
      icon: "✨",
      title: "Fully Upgraded Rooms",
      beforeHighlight: "Fully upgraded rooms with ",
      highlight: "improved layout and facilities",
      afterHighlight: " for optimal student living.",
    },
    {
      id: "neat-hygiene",
      icon: "🧹",
      title: "Neat & Regular Hygiene",
      beforeHighlight: "Neat and hygienic environment ",
      highlight: "maintained regularly",
      afterHighlight: " through daily housekeeping.",
    },
    {
      id: "lighting-ventilation",
      icon: "☀️",
      title: "Lighting & Ventilation",
      beforeHighlight: "Improved lighting and excellent ",
      highlight: "ventilation for a pleasant atmosphere",
      afterHighlight: " and cool breeze.",
    },
    {
      id: "safe-water-sanitation",
      icon: "🚰",
      title: "Safe Water & Sanitation",
      beforeHighlight: "Safe mineral ",
      highlight: "drinking water and proper sanitation",
      afterHighlight: " with attached western washrooms.",
    },
    {
      id: "secure-premises",
      icon: "🛡️",
      title: "Secure Campus Premises",
      beforeHighlight: "Secure premises with ",
      highlight: "proper safety measures",
      afterHighlight: " including 32 CCTV cameras & warden.",
    },
    {
      id: "peaceful-surroundings",
      icon: "🌿",
      title: "Peaceful Surroundings",
      beforeHighlight: "Peaceful surroundings ",
      highlight: "ideal for studying and relaxing",
      afterHighlight: " with zero traffic disturbance.",
    },
  ],
};

