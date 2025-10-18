let dataContacts = [
  {
    id: 1,
    name: "Yoga Prasetyo",
    nickname: "Yoga",
    email: "yoga.prasetyo@example.com",
    phone: "081434567890",
    socialMedia: {
      instagram: "@yogaprasetyo",
      linkedin: "yogaprasetyo",
      twitter: "@yogacyber",
    },
    relationship: "Colleague",
    notes: "Worked together on backend security project",
    group: "Work",
    tags: ["developer", "jakarta", "backend"],
    isFavorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://borneotech.id",
  },
  {
    id: 2,
    name: "Siti Ramadhani",
    nickname: "Siti",
    email: "siti.ramadhani@example.com",
    phone: "081345678901",
    socialMedia: {
      instagram: "@siti.design",
      linkedin: "sitiramadhani",
      twitter: "@sitirama",
    },
    relationship: "Friend",
    notes: "UI designer from college",
    group: "Design",
    tags: ["uiux", "bandung", "creative"],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://kreatifstudio.id",
  },
  {
    id: 3,
    name: "Budi Santoso",
    nickname: "Budi",
    email: "budi.santoso@example.com",
    phone: "081356789012",
    socialMedia: {
      instagram: "@budisantoso.dev",
      linkedin: "budisantoso",
      twitter: "@budiscode",
    },
    relationship: "Client",
    notes: "Maintains legacy systems",
    group: "Tech",
    tags: ["legacy", "surabaya", "backend"],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://inovasidigital.id",
  },
  {
    id: 4,
    name: "Rina Kartika",
    nickname: "Rina",
    email: "rina.kartika@example.com",
    phone: "081367890123",
    socialMedia: {
      instagram: "@rinakartika",
      linkedin: "rinakartika",
      twitter: "@rinafrontend",
    },
    relationship: "Colleague",
    notes: "Frontend specialist",
    group: "Work",
    tags: ["frontend", "yogyakarta", "react"],
    isFavorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://jogjaweb.id",
  },
  {
    id: 5,
    name: "Dedi Pratama",
    nickname: "Dedi",
    email: "dedi.pratama@example.com",
    phone: "081378901234",
    socialMedia: {
      instagram: "@dedipratama",
      linkedin: "dedipratama",
      twitter: "@dedidevops",
    },
    relationship: "Partner",
    notes: "DevOps consultant",
    group: "Infrastructure",
    tags: ["devops", "medan", "cloud"],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://solusicerdas.id",
  },
  {
    id: 6,
    name: "Lestari Wulandari",
    nickname: "Tari",
    email: "lestari.w@example.com",
    phone: "081389012345",
    socialMedia: {
      instagram: "@lestari.ai",
      linkedin: "lestariwulandari",
      twitter: "@tariwulan",
    },
    relationship: "Mentor",
    notes: "AI researcher and speaker",
    group: "Academia",
    tags: ["ai", "semarang", "research"],
    isFavorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://digitalkreatif.co.id",
  },
  {
    id: 7,
    name: "Andi Wijaya",
    nickname: "Andi",
    email: "andi.wijaya@example.com",
    phone: "081390123456",
    socialMedia: {
      instagram: "@andiwijaya",
      linkedin: "andiwijaya",
      twitter: "@andi_fullstack",
    },
    relationship: "Colleague",
    notes: "Fullstack developer with React and Node",
    group: "Work",
    tags: ["fullstack", "makassar", "nodejs"],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://makassartech.id",
  },
  {
    id: 9,
    name: "Hendra Saputra",
    nickname: "Hendra",
    email: "hendra.saputra@example.com",
    phone: "081412345678",
    socialMedia: {
      instagram: "@hendra.mobile",
      linkedin: "hendrasaputra",
      twitter: "@hendrasoft",
    },
    relationship: "Colleague",
    notes: "Mobile developer for Android and iOS",
    group: "Work",
    tags: ["mobile", "denpasar", "flutter"],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://balitech.id",
  },
  {
    id: 10,
    name: "Nadia Permata",
    nickname: "Nadia",
    email: "nadia.permata@example.com",
    phone: "081423456789",
    socialMedia: {
      instagram: "@nadia.data",
      linkedin: "nadiapermata",
      twitter: "@nadia_analytics",
    },
    relationship: "Friend",
    notes: "Data analyst with strong Python skills",
    group: "Analytics",
    tags: ["data", "malang", "python"],
    isFavorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://malangkreatif.co.id",
  },
  {
    id: 11,
    name: "Rizky Maulana",
    nickname: "Rizky",
    email: "rizky.maulana@example.com",
    phone: "081434567891",
    socialMedia: {
      instagram: "@rizkymaulana",
      linkedin: "rizkymaulana",
      twitter: "@rizkycode",
    },
    relationship: "Client",
    notes: "Freelance developer for blockchain projects",
    group: "Blockchain",
    tags: ["blockchain", "samarinda", "solidity"],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: "",
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
    websiteUrl: "https://cryptonusantara.id",
  },
];

const newContactData = {
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
  websiteUrl: "https://solodevs.id",
  socialMedia: {
    instagram: "@taufikhidayat",
    linkedin: "taufikhidayat",
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

const newContactDataOnId3 = {
  email: "budi.santoso123@yahoo.com",
  phone: "081999888777",
  jobTitle: "Senior Backend Developer",
  tags: ["backend", "surabaya", "legacy", "senior"],
  isFavorite: true,
};

const newContactDataOnId4 = {
  email: "rina-kartika456@yahoo.com",
  phone: "081122223333",
  jobTitle: "Senior Frontend Developer",
  tags: ["frontEnd", "Solo", "legacy", "senior"],
  isFavorite: false,
};

function displayContacts(contacts) {
  console.log(`Display Contacts:`);
  contacts.forEach((contacts) => renderContact(contacts));
}

function renderContact(contact) {
  console.log(`👤 ${contact.name} | 📧 ${contact.email} | 📱 ${contact.phone}`);
}

function addContact(contacts, newContact) {
  const newId = dataContacts[dataContacts.length - 1].id + 1;
  newContact.id = newId;

  const updatedContacts = [...contacts, newContact];
  dataContacts = updatedContacts;

  console.log(`✅ Contact "${newContact.name}" added successfully.`);
}

function editContact2(id, updatedFields) {
  const index = dataContacts.findIndex((contact) => contact.id === id);

  dataContacts[index] = {
    ...dataContacts[index],
    ...updatedFields,
    updatedAt: new Date().toISOString(),
  };

  console.log(`✅ Contact "${dataContacts[index].name}" edited successfully.`);
}

function editContact(id, contacts, updatedFields) {
  const newDataContacts = contacts.filter((contact) => contact.id !== id);
  const selectEditedContact = dataContacts.find((contact) => contact.id === id);

  const editedContact = {
    ...selectEditedContact,
    ...updatedFields,
  };
  const updatedContacts = [...newDataContacts, editedContact];
  dataContacts = updatedContacts;

  console.log(`✅ Contact "${selectEditedContact.name}" edited successfully.`);
}

function removeContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  const removedNameContact = contacts[id - 1].name;
  dataContacts = updatedContacts;
  console.log(`✅ Contact "${removedNameContact}" removed successfully.`);
}

function renderSeparatorLine() {
  console.log("-------------------------------------------------------------------------------------------------------");
}

displayContacts(dataContacts);
renderSeparatorLine();

addContact(dataContacts, newContactData);
displayContacts(dataContacts);
renderSeparatorLine();

// 3, Budi Santoso
editContact(3, dataContacts, newContactDataOnId3);
displayContacts(dataContacts);
renderSeparatorLine();

// 4, Rina Kartika
editContact2(4, newContactDataOnId4);
displayContacts(dataContacts);
renderSeparatorLine();

// 5, Dedi Pratama
removeContact(dataContacts, 5);
displayContacts(dataContacts);
renderSeparatorLine();
