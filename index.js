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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1990, 10, 11),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1992, 4, 5),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1988, 7, 19),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1993, 3, 22),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1987, 9, 5),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1993, 2, 14),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1991, 6, 22),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1989, 8, 18),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1996, 4, 9),
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
    birthday: new Date(1995, 12, 15),
    company: "Crypto Nusantara",
    jobTitle: "Blockchain Developer",
    websiteUrl: "https://cryptonusantara.id",
  },
];

function renderContacts(contacts) {
  const appElement = document.getElementById("contactList");

  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("q");

  const queryElement = document.getElementById("q");
  queryElement.value = query;

  const filteredContacts = query ? searchContacts(contacts, query) : contacts;

  appElement.innerHTML = `<ul id="contacts" class="space-y-4">
    ${filteredContacts.map((contact) => renderContact(contact)).join("")}
  </ul>`;
}

function renderContact(contact) {
  return `<li class="p-4 flex items-center justify-between hover:bg-gray-50 transition">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl mr-4">AS</div>
              <div>
                <p class="font-semibold text-gray-900">${contact.name ?? "-"}</p>
                <p class="text-sm text-gray-600">${contact.email ?? "-"}</p>
                <p class="text-sm text-gray-500">${contact.phone ?? "-"}</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <button class="text-gray-400 hover:text-blue-500" title="Edit">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"></path>
                </svg>
              </button>
              <button class="text-gray-400 hover:text-red-500" title="Hapus" onclick="deleteContact(dataContacts, ${contact.id})">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </li>`;
}
function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(keyword.toLowerCase()));
  return foundContacts;
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  dataContacts = updatedContacts;

  renderContacts(updatedContacts);
}

function addContact(contacts, { name = null, email = null, phone = null }) {
  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
  const newContact = {
    id: newId,
    name,
    phone,
    email,
  };

  const updatedContacts = [...contacts, newContact];
  dataContacts = updatedContacts;

  renderContacts(updatedContacts);
}

const addContactFormElement = document.getElementById("add-contact-form");
addContactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addContactFormElement);

  const newContactData = {
    name: formData.get("name").toString(),
    phone: formData.get("phone").toString(),
    email: formData.get("email").toString(),
  };

  addContact(dataContacts, newContactData);
});

renderContacts(dataContacts);
