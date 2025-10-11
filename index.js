const dataContacts = [
  {
    id: 1,
    name: "Yoga Prasetyo",
    nickname: "Yoga",
    email: "yoga.prasetyo@example.com",
    phone: "081434567890",
    socialMedia: {
      instagram: "@yogaprasetyo",
      linkedin: "linkedin.com/in/yogaprasetyo",
      twitter: "@yogacyber",
    },
    relationship: "Colleague",
    notes: "Worked together on backend security project",
    group: "Work",
    tags: ["developer", "jakarta", "backend"],
    isFavorite: true,
    createdAt: "2025-10-11T09:00:00Z",
    updatedAt: "2025-10-11T10:30:00Z",
    address: {
      street: "Jl. Merdeka No. 10",
      rt: "005",
      rw: "003",
      subdistrict: "Cempaka Putih",
      district: "Menteng",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      postalCode: "10510",
      country: "Indonesia",
    },
    birthday: "1990-10-11",
    company: "Borneo Tech",
    jobTitle: "Cybersecurity Analyst",
    website: "https://borneotech.id",
  },
  {
    id: 2,
    name: "Siti Ramadhani",
    nickname: "Siti",
    email: "siti.ramadhani@example.com",
    phone: "081345678901",
    socialMedia: {
      instagram: "@siti.design",
      linkedin: "linkedin.com/in/sitiramadhani",
      twitter: "@sitirama",
    },
    relationship: "Friend",
    notes: "UI designer from college",
    group: "Design",
    tags: ["uiux", "bandung", "creative"],
    isFavorite: false,
    createdAt: "2025-09-20T08:15:00Z",
    updatedAt: "2025-10-01T14:00:00Z",
    address: {
      street: "Jl. Braga No. 22",
      rt: "002",
      rw: "001",
      subdistrict: "Braga",
      district: "Sumur Bandung",
      city: "Bandung",
      province: "Jawa Barat",
      postalCode: "40111",
      country: "Indonesia",
    },
    birthday: "1992-04-05",
    company: "Kreatif Studio",
    jobTitle: "UI/UX Designer",
    website: "https://kreatifstudio.id",
  },
  {
    id: 3,
    name: "Budi Santoso",
    nickname: "Budi",
    email: "budi.santoso@example.com",
    phone: "081356789012",
    socialMedia: {
      instagram: "@budisantoso.dev",
      linkedin: "linkedin.com/in/budisantoso",
      twitter: "@budiscode",
    },
    relationship: "Client",
    notes: "Maintains legacy systems",
    group: "Tech",
    tags: ["legacy", "surabaya", "backend"],
    isFavorite: false,
    createdAt: "2025-08-15T10:00:00Z",
    updatedAt: "2025-09-10T11:30:00Z",
    address: {
      street: "Jl. Pemuda No. 5",
      rt: "004",
      rw: "002",
      subdistrict: "Genteng",
      district: "Genteng",
      city: "Surabaya",
      province: "Jawa Timur",
      postalCode: "60275",
      country: "Indonesia",
    },
    birthday: "1988-07-19",
    company: "Inovasi Digital",
    jobTitle: "Backend Developer",
    website: "https://inovasidigital.id",
  },
  {
    id: 4,
    name: "Rina Kartika",
    nickname: "Rina",
    email: "rina.kartika@example.com",
    phone: "081367890123",
    socialMedia: {
      instagram: "@rinakartika",
      linkedin: "linkedin.com/in/rinakartika",
      twitter: "@rinafrontend",
    },
    relationship: "Colleague",
    notes: "Frontend specialist",
    group: "Work",
    tags: ["frontend", "yogyakarta", "react"],
    isFavorite: true,
    createdAt: "2025-07-10T09:45:00Z",
    updatedAt: "2025-09-01T13:20:00Z",
    address: {
      street: "Jl. Malioboro No. 8",
      rt: "006",
      rw: "004",
      subdistrict: "Sosrowijayan",
      district: "Gedong Tengen",
      city: "Yogyakarta",
      province: "DI Yogyakarta",
      postalCode: "55271",
      country: "Indonesia",
    },
    birthday: "1993-03-22",
    company: "Jogja Web",
    jobTitle: "Frontend Developer",
    website: "https://jogjaweb.id",
  },
  {
    id: 5,
    name: "Dedi Pratama",
    nickname: "Dedi",
    email: "dedi.pratama@example.com",
    phone: "081378901234",
    socialMedia: {
      instagram: "@dedipratama",
      linkedin: "linkedin.com/in/dedipratama",
      twitter: "@dedidevops",
    },
    relationship: "Partner",
    notes: "DevOps consultant",
    group: "Infrastructure",
    tags: ["devops", "medan", "cloud"],
    isFavorite: false,
    createdAt: "2025-06-01T08:00:00Z",
    updatedAt: "2025-08-20T09:30:00Z",
    address: {
      street: "Jl. Gatot Subroto No. 3",
      rt: "003",
      rw: "001",
      subdistrict: "Petisah Tengah",
      district: "Medan Petisah",
      city: "Medan",
      province: "Sumatera Utara",
      postalCode: "20111",
      country: "Indonesia",
    },
    birthday: "1987-09-05",
    company: "Solusi Cerdas",
    jobTitle: "DevOps Engineer",
    website: "https://solusicerdas.id",
  },
  {
    id: 6,
    name: "Lestari Wulandari",
    nickname: "Tari",
    email: "lestari.w@example.com",
    phone: "081389012345",
    socialMedia: {
      instagram: "@lestari.ai",
      linkedin: "linkedin.com/in/lestariwulandari",
      twitter: "@tariwulan",
    },
    relationship: "Mentor",
    notes: "AI researcher and speaker",
    group: "Academia",
    tags: ["ai", "semarang", "research"],
    isFavorite: true,
    createdAt: "2025-05-12T07:30:00Z",
    updatedAt: "2025-09-15T12:00:00Z",
    address: {
      street: "Jl. Pandanaran No. 15",
      rt: "001",
      rw: "002",
      subdistrict: "Mugassari",
      district: "Semarang Selatan",
      city: "Semarang",
      province: "Jawa Tengah",
      postalCode: "50249",
      country: "Indonesia",
    },
    birthday: "1993-02-14",
    company: "Digital Kreatif",
    jobTitle: "AI Researcher",
    website: "https://digitalkreatif.co.id",
  },
  {
    id: 7,
    name: "Andi Wijaya",
    nickname: "Andi",
    email: "andi.wijaya@example.com",
    phone: "081390123456",
    socialMedia: {
      instagram: "@andiwijaya",
      linkedin: "linkedin.com/in/andiwijaya",
      twitter: "@andi_fullstack",
    },
    relationship: "Colleague",
    notes: "Fullstack developer with React and Node",
    group: "Work",
    tags: ["fullstack", "makassar", "nodejs"],
    isFavorite: false,
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-08-01T11:00:00Z",
    address: {
      street: "Jl. Ahmad Yani No. 9",
      rt: "007",
      rw: "005",
      subdistrict: "Maricaya",
      district: "Makassar",
      city: "Makassar",
      province: "Sulawesi Selatan",
      postalCode: "90123",
      country: "Indonesia",
    },
    birthday: "1991-06-22",
    company: "Makassar Tech",
    jobTitle: "Fullstack Developer",
    website: "https://makassartech.id",
  },
  {
    id: 9,
    name: "Hendra Saputra",
    nickname: "Hendra",
    email: "hendra.saputra@example.com",
    phone: "081412345678",
    socialMedia: {
      instagram: "@hendra.mobile",
      linkedin: "linkedin.com/in/hendrasaputra",
      twitter: "@hendrasoft",
    },
    relationship: "Colleague",
    notes: "Mobile developer for Android and iOS",
    group: "Work",
    tags: ["mobile", "denpasar", "flutter"],
    isFavorite: false,
    createdAt: "2025-03-15T09:00:00Z",
    updatedAt: "2025-09-10T10:00:00Z",
    address: {
      street: "Jl. Teuku Umar No. 6",
      rt: "002",
      rw: "001",
      subdistrict: "Padangsambian",
      district: "Denpasar Barat",
      city: "Denpasar",
      province: "Bali",
      postalCode: "80117",
      country: "Indonesia",
    },
    birthday: "1989-08-18",
    company: "Bali Tech",
    jobTitle: "Mobile Developer",
    website: "https://balitech.id",
  },
  {
    id: 10,
    name: "Nadia Permata",
    nickname: "Nadia",
    email: "nadia.permata@example.com",
    phone: "081423456789",
    socialMedia: {
      instagram: "@nadia.data",
      linkedin: "linkedin.com/in/nadiapermata",
      twitter: "@nadia_analytics",
    },
    relationship: "Friend",
    notes: "Data analyst with strong Python skills",
    group: "Analytics",
    tags: ["data", "malang", "python"],
    isFavorite: true,
    createdAt: "2025-02-10T08:30:00Z",
    updatedAt: "2025-09-25T09:45:00Z",
    address: {
      street: "Jl. Hasanuddin No. 4",
      rt: "003",
      rw: "002",
      subdistrict: "Klojen",
      district: "Klojen",
      city: "Malang",
      province: "Jawa Timur",
      postalCode: "65111",
      country: "Indonesia",
    },
    birthday: "1996-04-09",
    company: "Malang Kreatif",
    jobTitle: "Data Analyst",
    website: "https://malangkreatif.co.id",
  },
  {
    id: 11,
    name: "Rizky Maulana",
    nickname: "Rizky",
    email: "rizky.maulana@example.com",
    phone: "081434567891",
    socialMedia: {
      instagram: "@rizkymaulana",
      linkedin: "linkedin.com/in/rizkymaulana",
      twitter: "@rizkycode",
    },
    relationship: "Client",
    notes: "Freelance developer for blockchain projects",
    group: "Blockchain",
    tags: ["blockchain", "samarinda", "solidity"],
    isFavorite: false,
    createdAt: "2025-01-05T07:00:00Z",
    updatedAt: "2025-09-30T11:15:00Z",
    address: {
      street: "Jl. Pangeran Antasari No. 12",
      rt: "006",
      rw: "003",
      subdistrict: "Sungai Pinang",
      district: "Sungai Pinang",
      city: "Samarinda",
      province: "Kalimantan Timur",
      postalCode: "75117",
      country: "Indonesia",
    },
    birthday: "1995-12-15",
    company: "Crypto Nusantara",
    jobTitle: "Blockchain Developer",
    website: "https://cryptonusantara.id",
  },
];

const newDatacontacts = {
  name: "Taufik Hidayat",
  nickname: "Taufik",
  email: "taufik.hidayat@example.com",
  phone: "081456789012",
  address: {
    street: "Jl. Slamet Riyadi No. 9",
    rt: "004",
    rw: "002",
    subdistrict: "Purwodiningratan",
    district: "Jebres",
    city: "Solo",
    province: "Jawa Tengah",
    postalCode: "57126",
    country: "Indonesia",
  },
  birthday: "1992-08-10",
  company: "Solo Devs",
  jobTitle: "Frontend Engineer",
  website: "https://solodevs.id",
  socialMedia: {
    instagram: "@taufikhidayat",
    linkedin: "linkedin.com/in/taufikhidayat",
    twitter: "@taufikfe",
  },
  relationship: "Colleague",
  notes: "React specialist",
  group: "Work",
  tags: ["react", "solo", "frontend"],
  isFavorite: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const updateDataContactOnId3 = {
  email: "budi.santoso123@yahoo.com",
  phone: "081999888777",
  jobTitle: "Senior Backend Developer",
  tags: ["backend", "surabaya", "legacy", "senior"],
  isFavorite: true,
};

function displayContacts(contacts) {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`👤 ${contact.name} | 📧 ${contact.email} | 📱 ${contact.phone}`);
  }
}

function pushContact(newContact) {
  const lastId = dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id : 0;
  newContact.id = lastId + 1;

  const requiredFields = ["name", "email", "phone"];
  for (const field of requiredFields) {
    if (!newContact[field]) {
      console.warn(`Missing required field: ${field}`);
      return;
    }
  }

  dataContacts.push(newContact);
  console.log(`✅ Contact "${newContact.name}" added successfully.`);
}

function editContact(id, updatedFields) {
  const index = dataContacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    console.warn(`❌ Contact with ID ${id} not found.`);
    return;
  }

  dataContacts[index] = {
    ...dataContacts[index],
    ...updatedFields,
    updatedAt: new Date().toISOString(),
  };

  console.log(`✅ Contact "${dataContacts[index].name}" updated successfully.`);
}

function removeContact(id) {
  const index = dataContacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    console.warn(`❌ Contact with ID ${id} not found.`);
    return;
  }

  const removed = dataContacts.splice(index, 1)[0]; // remove and capture the deleted contact
  console.log(`🗑️ Contact "${removed.name}" removed successfully.`);
}

console.log(dataContacts);
displayContacts(dataContacts);
console.log("-------------------------------------------------------------------------------------------------------");

pushContact(newDatacontacts);
displayContacts(dataContacts);
console.log(dataContacts);
console.log("-------------------------------------------------------------------------------------------------------");

// 3, Budi Santoso
editContact(3, updateDataContactOnId3);
displayContacts(dataContacts);
console.log(dataContacts);
console.log("-------------------------------------------------------------------------------------------------------");

// 5, Dedi Pratama
removeContact(5);
displayContacts(dataContacts);
console.log(dataContacts);
console.log("-------------------------------------------------------------------------------------------------------");
