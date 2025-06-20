// Shared data source for batch information
export interface Student {
  id: number;
  rollId: string;
  name: string;
  gender: 'Male' | 'Female';
  email?: string;
  phone?: string;
  bloodGroup?: string;
  homeDistrict?: string;
}

export interface Batch {
  id: number;
  batchNo: number;
  name: string;
  session: string;
  totalStudents: number;
  maleStudents: number;
  femaleStudents: number;
  graduationYear: number;
  advisor: string;
  students: Student[];
}

// Generate random students for each batch
const generateStudents = (batchNo: number, totalStudents: number, maleCount: number): Student[] => {
  const students: Student[] = [];
  const maleNames = [
    'Mohammad', 'Ahmed', 'Rahim', 'Karim', 'Sohel', 'Jahid', 'Rakib', 'Hasan', 'Mehedi', 'Saiful',
    'Arif', 'Masud', 'Imran', 'Nasir', 'Omar', 'Jamal', 'Kamrul', 'Rafiq', 'Shafiq', 'Monir'
  ];
  
  const femaleNames = [
    'Fatima', 'Aisha', 'Nusrat', 'Tahmina', 'Sabina', 'Nasrin', 'Farzana', 'Salma', 'Roksana', 'Sadia',
    'Nadia', 'Rabeya', 'Sharmin', 'Farida', 'Shahana', 'Tania', 'Maliha', 'Sumaiya', 'Ishrat', 'Momena'
  ];
  
  const lastNames = [
    'Islam', 'Ahmed', 'Hossain', 'Rahman', 'Akter', 'Begum', 'Khan', 'Chowdhury', 'Miah', 'Sheikh',
    'Ali', 'Uddin', 'Khatun', 'Jahan', 'Sultana', 'Sarkar', 'Alam', 'Mahmud', 'Haque', 'Siddique'
  ];
  
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const districts = [
    'Noakhali', 'Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur',
    'Comilla', 'Feni', 'Cox\'s Bazar', 'Lakshmipur', 'Chandpur', 'Brahmanbaria', 'Narsingdi',
    'Gazipur', 'Mymensingh', 'Jamalpur', 'Tangail', 'Kishoreganj'
  ];
  
  // Create male students
  for (let i = 0; i < maleCount; i++) {
    const firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const rollNumber = (i + 1).toString().padStart(2, '0');
    
    students.push({
      id: i + 1,
      rollId: `NSTU-STAT-${batchNo}-${rollNumber}`,
      name: `${firstName} ${lastName}`,
      gender: 'Male',
      email: `${firstName.toLowerCase()}.${batchNo}@student.nstu.edu.bd`,
      phone: `+88018${Math.floor(10000000 + Math.random() * 90000000)}`,
      bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      homeDistrict: districts[Math.floor(Math.random() * districts.length)]
    });
  }
  
  // Create female students
  for (let i = 0; i < (totalStudents - maleCount); i++) {
    const firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const rollNumber = (i + maleCount + 1).toString().padStart(2, '0');
    
    students.push({
      id: i + maleCount + 1,
      rollId: `NSTU-STAT-${batchNo}-${rollNumber}`,
      name: `${firstName} ${lastName}`,
      gender: 'Female',
      email: `${firstName.toLowerCase()}.${batchNo}@student.nstu.edu.bd`,
      phone: `+88017${Math.floor(10000000 + Math.random() * 90000000)}`,
      bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      homeDistrict: districts[Math.floor(Math.random() * districts.length)]
    });
  }
  
  // Sort by roll ID
  return students.sort((a, b) => a.rollId.localeCompare(b.rollId));
};

// Single source of truth for all batch data
const batchData: Batch[] = [
  { 
    id: 1, 
    batchNo: 1, 
    name: "1st Batch", 
    session: "2016-2017", 
    totalStudents: 50, 
    maleStudents: 30, 
    femaleStudents: 20, 
    graduationYear: 2020, 
    advisor: "Md Shohel Rana",
    students: generateStudents(1, 50, 30)
  },
  { 
    id: 2, 
    batchNo: 2, 
    name: "2nd Batch", 
    session: "2017-2018", 
    totalStudents: 55, 
    maleStudents: 32, 
    femaleStudents: 23, 
    graduationYear: 2021, 
    advisor: "Najma Begum",
    students: generateStudents(2, 55, 32)
  },
  { 
    id: 3, 
    batchNo: 3, 
    name: "3rd Batch", 
    session: "2018-2019", 
    totalStudents: 60, 
    maleStudents: 35, 
    femaleStudents: 25, 
    graduationYear: 2022, 
    advisor: "Mimma Tabassum",
    students: generateStudents(3, 60, 35)
  },
  { 
    id: 4, 
    batchNo: 4, 
    name: "4th Batch", 
    session: "2019-2020", 
    totalStudents: 58, 
    maleStudents: 33, 
    femaleStudents: 25, 
    graduationYear: 2023, 
    advisor: "Md. Mamun Miah",
    students: generateStudents(4, 58, 33)
  },
  { 
    id: 5, 
    batchNo: 5, 
    name: "5th Batch", 
    session: "2020-2021", 
    totalStudents: 62, 
    maleStudents: 36, 
    femaleStudents: 26, 
    graduationYear: 2024, 
    advisor: "Mohammad Omar Faruk",
    students: generateStudents(5, 62, 36)
  },
  { 
    id: 6, 
    batchNo: 6, 
    name: "6th Batch", 
    session: "2021-2022", 
    totalStudents: 65, 
    maleStudents: 38, 
    femaleStudents: 27, 
    graduationYear: 2025, 
    advisor: "Md. Iftakhar Parvej",
    students: generateStudents(6, 65, 38)
  },
  { 
    id: 7, 
    batchNo: 7, 
    name: "7th Batch", 
    session: "2022-2023", 
    totalStudents: 42, 
    maleStudents: 18, 
    femaleStudents: 24, 
    graduationYear: 2026, 
    advisor: "Md. Rasel Hossain",
    students: [
        { id: 1, rollId: "BKH2215012F", name: "Sadia nijhu", gender: "Female", email: "sadia1517@student.nstu.edu.bd", phone: "1311810308", bloodGroup: "O+", homeDistrict: "Chittagong" },
        { id: 2, rollId: "ASH2215033M", name: "Mohammad Ali", gender: "Male", email: "www.ali01706222971@gmail.com", phone: "1706222971", bloodGroup: "B+", homeDistrict: "Joypurhat" },
        { id: 3, rollId: "ASH2215001M", name: "Omar Faruk", gender: "Male", email: "omarfaruk189330@gmail", phone: "1837520575", bloodGroup: "B+", homeDistrict: "Noakhali" },
        { id: 4, rollId: "MUH2215055M", name: "Yeamin Majumder", gender: "Male", email: "yeamin1517@student.nstu.edu.bd", phone: "+8801408-487590", bloodGroup: "O+", homeDistrict: "Chandpur" },
        { id: 5, rollId: "BFH2215017F", name: "Mariya Khan Mila", gender: "Female", email: "mila1517@student.nstu.edu.bd", phone: "1317287726", bloodGroup: "O-", homeDistrict: "Islam/Narsingdi" },
        { id: 6, rollId: "MUH2215018M", name: "Tanjil hassan", gender: "Male", email: "tanjil1517@student.nstu.edu.bd", phone: "1648096927", bloodGroup: "O-", homeDistrict: "Noakhali" },
        { id: 7, rollId: "BKH2115042F", name: "Monisha Das", gender: "Female", email: "monisha.krishna2001@gmail.com", phone: "1518965297", bloodGroup: "AB+", homeDistrict: "Chattogram" },
        { id: 8, rollId: "MUH2215034M", name: "Badhon babu", gender: "Male", email: "badhonbabu6969@gmail.com", phone: "1610815511", bloodGroup: "O+", homeDistrict: "Rangpur" },
        { id: 9, rollId: "ASH2115016M", name: "Md.Shawkat Hossain", gender: "Male", email: "shawkat1517@student.nstu.edu.bd", phone: "1575305259", bloodGroup: "O+", homeDistrict: "Dhaka" },
        { id: 10, rollId: "MUH2215021M", name: "Md Jahirul Islam", gender: "Male", email: "jahirjibon45@gmail.com", phone: "1928806908", bloodGroup: "O+", homeDistrict: "Shariatpur" },
        { id: 11, rollId: "BFH2215051F", name: "Puspita Banik", gender: "Female", email: "puspita1517@student.nstu.edu.bd", phone: "1999176249", bloodGroup: "A+", homeDistrict: "Chattogram" },
        { id: 12, rollId: "ASH2215046M", name: "Fahim Takrim", gender: "Male", email: "fahim133244@gmail.com", phone: "1980107980", bloodGroup: "A+", homeDistrict: "Gazipur" },
        { id: 13, rollId: "MUH2215044M", name: "Shamsuddin", gender: "Male", email: "mshamsuddin213@gmail.com", phone: "1568196138", bloodGroup: "AB+", homeDistrict: "Chandpur" },
        { id: 14, rollId: "BBH2215004F", name: "Ummey Habiba", gender: "Female", email: "habiba1517@student.nstu.edu.bd", phone: "1776378919", bloodGroup: "O+", homeDistrict: "Noakhali" },
        { id: 15, rollId: "ASH2215025M", name: "Maksudhr Rahman Joy", gender: "Male", email: "joy1517@student.nstu.edu.bd", phone: "1843810805", bloodGroup: "B+", homeDistrict: "Kishoreganj" },
        { id: 16, rollId: "MUH2215040M", name: "Raisul Islam Rafi", gender: "Male", email: "rafihowlader39@gmail.com", phone: "1821994682", bloodGroup: "B+", homeDistrict: "Luxmipur" },
        { id: 17, rollId: "BKH2215032F", name: "Surayea Afrin Tithi", gender: "Female", email: "chhayabithi03@gmail.com", phone: "0", bloodGroup: "O+", homeDistrict: "Kushtia" },
        { id: 18, rollId: "MUH2215015M", name: "Abdullah Al Saeid", gender: "Male", email: "abdullahalsaeid27963@gmail.com", phone: "1571484528", bloodGroup: "A-", homeDistrict: "Feni" },
        { id: 19, rollId: "BFH2215045F", name: "Mst. Mahsuma Khatun", gender: "Female", email: "mstmahsumakhatun@gmail.com", phone: "1560034461", bloodGroup: "O+", homeDistrict: "Dinajpur" },
        { id: 20, rollId: "MUH2215052M", name: "MD MIZANUR RAHMAN", gender: "Male", email: "mizanpk418@gmail.com", phone: "1791836078", bloodGroup: "A+", homeDistrict: "Naogaon" },
        { id: 21, rollId: "BBH2215039F", name: "Mst.Faujia Tahsin", gender: "Female", email: "faujiatahsin8@gmail.com", phone: "1937118788", bloodGroup: "B+", homeDistrict: "Chandpur" },
        { id: 22, rollId: "BKH2215014F", name: "Jasia Sultana Smrity", gender: "Female", email: "jasiasmrity2103@gmail.com", phone: "1863130768", bloodGroup: "B+", homeDistrict: "Narsingdi" },
        { id: 23, rollId: "BKH2215024F", name: "Umme Nazma", gender: "Female", email: "nazma1517@student.nstu.edu.bd", phone: "1888295990", bloodGroup: "O+", homeDistrict: "Chittagong" },
        { id: 24, rollId: "ASH2215002M", name: "Ismail Hossen Nayem", gender: "Male", email: "ismailhossainnayem@gmail.com", phone: "1765850723", bloodGroup: "B+", homeDistrict: "sonaimuri,noakhali" },
        { id: 25, rollId: "BFH2215038F", name: "KAMRUN NAHAR MIM", gender: "Female", email: "nahar1517@student.nstu.edu.bd", phone: "1824923559", bloodGroup: "O+", homeDistrict: "noakhali" },
        { id: 26, rollId: "BKH2215009F", name: "Rinki Mahapatra", gender: "Female", email: "rinki1517@student.nstu.bd", phone: "0", bloodGroup: "B+", homeDistrict: "Habiganj" },
        { id: 27, rollId: "BKH2215037F", name: "Nahida Akter", gender: "Female", email: "Nahidabinteshahid@gmail.com", phone: "1824338363", bloodGroup: "B+", homeDistrict: "Feni" },
        { id: 28, rollId: "BFH2215027F", name: "Fatema tuz johora", gender: "Female", email: "fatema1517@student.nstu.edu.bd", phone: "1887417094", bloodGroup: "A+", homeDistrict: "Feni" },
        { id: 29, rollId: "MUH2215013M", name: "Sarowar jahan", gender: "Male", email: "sjtonmoy803@gmail.com", phone: "1881042872", bloodGroup: "B+", homeDistrict: "Noakhali" },
        { id: 30, rollId: "BFH2215005F", name: "Tanmim Sultana", gender: "Female", email: "tanmimsultana54@gmail", phone: "", bloodGroup: "AB+", homeDistrict: "Brahmanbaria" },
        { id: 31, rollId: "BFH2215051F", name: "Puspita Banik", gender: "Female", email: "puspitabanik2020@gmail.com", phone: "", bloodGroup: "A+", homeDistrict: "Chattogram" },
        { id: 32, rollId: "BKH2215043F", name: "Sumaya akter soma", gender: "Female", email: "aktersoma129@gmail", phone: "1310185315", bloodGroup: "O+", homeDistrict: "Thakurgaon" },
        { id: 33, rollId: "MUH2215008M", name: "Jahirul Islam", gender: "Male", email: "sadid4954@gmail.com", phone: "1759719082", bloodGroup: "O+", homeDistrict: "Dhaka" },
        { id: 34, rollId: "BFH2215019F", name: "Nusrat Ara Masfia", gender: "Female", email: "masfia1517@student.nstu.edu.bd", phone: "1871199886", bloodGroup: "A+", homeDistrict: "Noakhali" },
        { id: 35, rollId: "BFH2215047F", name: "Sharmin Sayed Amee", gender: "Female", email: "sharminsayed548@gmail.com", phone: "83299", bloodGroup: "O+", homeDistrict: "Cox's Bazar" },
        { id: 36, rollId: "Muh2215053m", name: "Md Iftekhar Mahamud Rifat", gender: "Male", email: "Mahamudrifat2019@gmail.com", phone: "1783372434", bloodGroup: "O-", homeDistrict: "Kushtia" },
        { id: 37, rollId: "BFH2215026F", name: "Suraiya Begum", gender: "Female", email: "pinkyjid45@gmail.com", phone: "1973825513", bloodGroup: "A+", homeDistrict: "Feni" },
        { id: 38, rollId: "BFH2215035F", name: "Annie Mohajan", gender: "Female", email: "annie.mohazan9999@gmail.com", phone: "1871694552", bloodGroup: "A+", homeDistrict: "Chittagong" },
        { id: 39, rollId: "BBH2215050F", name: "Sanjida Akter", gender: "Female", email: "sanjiter0@gmail", phone: "", bloodGroup: "B+", homeDistrict: "Comilla" },
        { id: 40, rollId: "BKH2215036F", name: "Zannatul Adon Kona", gender: "Female", email: "kona1517@student.nstu.bd", phone: "", bloodGroup: "A+", homeDistrict: "Cumilla" },
        { id: 41, rollId: "ASH2215010M", name: "Meharaz Azam", gender: "Male", email: "meharaz1517@student.nstu.edu.bd", phone: "1890307958", bloodGroup: "AB+", homeDistrict: "Noakhali" },
        { id: 42, rollId: "BBH2215041F", name: "Sabrina Momotaj", gender: "Female", email: "sabrinamomtaj35@gmail.com", phone: "", bloodGroup: "A+", homeDistrict: "Noakhali" }
    ]
  },
  { 
    id: 8, 
    batchNo: 8, 
    name: "8th Batch", 
    session: "2023-2024", 
    totalStudents: 15, 
    maleStudents: 4, 
    femaleStudents: 11, 
    graduationYear: 2027, 
    advisor: "Tahmina Akter",
    students: [
      { id: 1, rollId: "BFH2315025F", name: "Fatema Islam shoshi", gender: "Female", email: "fatemaislam4489@gmail.com", phone: "17", bloodGroup: "O+", homeDistrict: "Tangail" },
      { id: 2, rollId: "BFH2315026F", name: "Sumaiya Akther Soha", gender: "Female", email: "soha1518@student.nstu.edu.bd", phone: "1533038738", bloodGroup: "A+", homeDistrict: "Cox's Bazar" },
      { id: 3, rollId: "BFH2315008F", name: "Tahamida Islam", gender: "Female", email: "tahamida1518@student.nstu.edu.bd", phone: "1847089847", bloodGroup: "B+", homeDistrict: "Dhaka" },
      { id: 4, rollId: "ASH2315024M", name: "Rupok", gender: "Male", email: "rupok56918@gmail.com", phone: "1728407950", bloodGroup: "B+", homeDistrict: "Mymensingh" },
      { id: 5, rollId: "BFH2315042F", name: "Umma Jamila Samia", gender: "Female", email: "jamila1518@student.nstu.edu.bd", phone: "1308732952", bloodGroup: "A+", homeDistrict: "Chandpur" },
      { id: 6, rollId: "BFH2315055F", name: "Mithi", gender: "Female", email: "samiratulmithi2002@gmail.com", phone: "1682143860", bloodGroup: "A+", homeDistrict: "Feni" },
      { id: 7, rollId: "BKH2315004F", name: "Puja Dey", gender: "Female", email: "Puja1412@gmail.com", phone: "", bloodGroup: "A+", homeDistrict: "Cox'sBazar" },
      { id: 8, rollId: "MUH2315003M", name: "MD.Abdullah Al Tanvir", gender: "Male", email: "tanvir1240student.nstu@gmail.com", phone: "1810618188", bloodGroup: "O+", homeDistrict: "Noakhali" },
      { id: 9, rollId: "BFH2315038F", name: "Sumyea Jannath Sajute", gender: "Female", email: "sumyea1518@student.nstu.edu.bd", phone: "Ok", bloodGroup: "O+", homeDistrict: "Chattogram" },
      { id: 10, rollId: "ASH2315043M", name: "Ashikur rahman", gender: "Male", email: "ashikurrhrn909@gmail.com", phone: "1814376057", bloodGroup: "O+", homeDistrict: "Noakhali" },
      { id: 11, rollId: "MUH2315015M", name: "Pritom Chowdhury", gender: "Male", email: "pritomchy775@gmail.com", phone: "1868819319", bloodGroup: "A+", homeDistrict: "Chattogram" },
      { id: 12, rollId: "BBH2315027F", name: "Tanha Mim", gender: "Female", email: "tanha1518@student.nstu.edu.bd", phone: "1330214037", bloodGroup: "A+", homeDistrict: "Cumilla" },
      { id: 13, rollId: "BFH2315051F", name: "Pamme Mazumder", gender: "Female", email: "mazumderpamme@gmail.com", phone: "1311822564", bloodGroup: "B+", homeDistrict: "Chandpur" },
      { id: 14, rollId: "BKH2315040F", name: "Jesmin Akter Sima", gender: "Female", email: "jesminaktersima3@gmail.com", phone: "1825954347", bloodGroup: "O+", homeDistrict: "Munshiganj" },
      { id: 15, rollId: "BFH2315013F", name: "Kazi Asmaul Hosna Isha", gender: "Female", email: "isha1518@student.nstu.edu.bd", phone: "", bloodGroup: "AB+", homeDistrict: "Feni" }
    ]
  },
  { 
    id: 9, 
    batchNo: 9, 
    name: "9th Batch", 
    session: "2024-2025", 
    totalStudents: 43, 
    maleStudents: 22, 
    femaleStudents: 21, 
    graduationYear: 2028, 
    advisor: "Shohel Mahmud",
    students: [
      { id: 1, rollId: "MUH2315047M", name: "Muhammad Shahidul Alam", gender: "Male", email: "shahidul1518@student.nstu.edu.bd", phone: "1879465775", bloodGroup: "A-", homeDistrict: "Chittagong" },
      { id: 2, rollId: "ASH2415006M", name: "Sayem Ibn Rashid", gender: "Male", email: "sayemrashid442@gmail.com", phone: "1305995569", bloodGroup: "O+", homeDistrict: "Noakhali" },
      { id: 3, rollId: "BFH2315022F", name: "Sadia Khan Rouna", gender: "Female", email: "sadiarouna4102@gmail.com", phone: "1601454077", bloodGroup: "AB+", homeDistrict: "Brahmanbaria" },
      { id: 4, rollId: "BKH2415012F", name: "Tahasina Tabia", gender: "Female", email: "Udinborhan07@gmail.com", phone: "01874-846963", bloodGroup: "B+", homeDistrict: "Feni" },
      { id: 5, rollId: "MUH2415040M", name: "Md Siam Ahmed Sunny", gender: "Male", email: "siamahmedsunny557@gmail.com", phone: "1787857844", bloodGroup: "A+", homeDistrict: "Brahmanbaria" },
      { id: 6, rollId: "MUH2415041M", name: "Md Jaber", gender: "Male", email: "mdjaberk190@gmail.com", phone: "1736779077", bloodGroup: "B+", homeDistrict: "Bhola" },
      { id: 7, rollId: "MUH2415035M", name: "Mehedi Hasan", gender: "Male", email: "mehedi181186@gmail.com", phone: "1762556234", bloodGroup: "B+", homeDistrict: "Feni" },
      { id: 8, rollId: "ASH2415037M", name: "Md shakil", gender: "Male", email: "Shakilrahaman1519@student.nstu.edu.bd", phone: "1823363706", bloodGroup: "AB+", homeDistrict: "Bhola" },
      { id: 9, rollId: "BKH2415009F", name: "Israt jahan Bithi", gender: "Female", email: "Isratbithi39@gmail.Com", phone: "1814466070", bloodGroup: "B+", homeDistrict: "Chandpur" },
      { id: 10, rollId: "ASH2415058M", name: "Md Tanzirul Alam Khondoker", gender: "Male", email: "Tanjeerkhondoker4961@gmail.com", phone: "1886397639", bloodGroup: "B+", homeDistrict: "Feni" },
      { id: 11, rollId: "BBH2415042F", name: "Tisha Moni", gender: "Female", email: "owrintisha@gmail.com", phone: "1753615464", bloodGroup: "A+", homeDistrict: "Savar,Dhaka" },
      { id: 12, rollId: "BBH2415010", name: "Atika Akter", gender: "Female", email: "atikabutterfly303@gmail.com", phone: "1602317145", bloodGroup: "O+", homeDistrict: "Brahmon Baria" },
      { id: 13, rollId: "MUH2415003M", name: "MD ITTEHAD HOSSAIN", gender: "Male", email: "parvinnkh4@gmail.com", phone: "1602819859", bloodGroup: "O+", homeDistrict: "Feni" },
      { id: 14, rollId: "MUH2415038M", name: "Ashraful Hoque Tushar", gender: "Male", email: "ashrafultushar1357@gmail.com", phone: "1688172728", bloodGroup: "A+", homeDistrict: "Feni" },
      { id: 15, rollId: "BFH2415011F", name: "Jannatul Israt Haque", gender: "Female", email: "isratshuchi13@gmail.com", phone: "1975727614", bloodGroup: "O+", homeDistrict: "Brahmanbaria" },
      { id: 16, rollId: "BKH2415017F", name: "Ferdouci binty hafiz", gender: "Female", email: "No", phone: "No", bloodGroup: "O+", homeDistrict: "Patuakhali" },
      { id: 17, rollId: "MUH2415057M", name: "Nur Mohammad", gender: "Male", email: "fahimbe61@gmai.com", phone: "1560033883", bloodGroup: "B+", homeDistrict: "Noakhali" },
      { id: 18, rollId: "BKH2415048F", name: "Mahfuza Rahman Mishuk", gender: "Female", email: "mahfuzamishuk28@gmail.com", phone: "...", bloodGroup: "A+", homeDistrict: "Dhaka" },
      { id: 19, rollId: "ASH2415033M", name: "সাহাদাত হোসেন শান্ত", gender: "Male", email: "Sahadat989061@gmail.com", phone: "1301261118", bloodGroup: "A+", homeDistrict: "Narsingdi" },
      { id: 20, rollId: "ASH2415024M", name: "Nur Alam", gender: "Male", email: "mdnuralammdnuralam@gmail.com", phone: "1824094354", bloodGroup: "AB+", homeDistrict: "Noakhali" },
      { id: 21, rollId: "BKH2415020F", name: "Rebeka Sultana", gender: "Female", email: "rebresbeka2022@gmail.com", phone: "...", bloodGroup: "B+", homeDistrict: "Noakhali" },
      { id: 22, rollId: "BBH2415047F", name: "Nusifa Siddika Onne", gender: "Female", email: "nusifasiddika@gmail.com", phone: "...................", bloodGroup: "A+", homeDistrict: "Chatkhil, Noakhali" },
      { id: 23, rollId: "MUH2415019M", name: "Rudra Nandy", gender: "Male", email: "rudranandy704@gmail.com", phone: "1842287704", bloodGroup: "O+", homeDistrict: "Chattogram" },
      { id: 24, rollId: "BFH2415045F", name: "Marzahan Sultana Takwa", gender: "Female", email: "marzahansultanatakwa@gmail.com", phone: "1771155037", bloodGroup: "O+", homeDistrict: "Noakhali" },
      { id: 25, rollId: "ASH2415032M", name: "Md Mustafizur Rahman Rishad", gender: "Male", email: "mrrishad3457@gmail.com", phone: "1743378295", bloodGroup: "O+", homeDistrict: "Mymensingh" },
      { id: 26, rollId: "BKH2415031F", name: "Adrita Alam", gender: "Female", email: "alamadrita321@gmail.com", phone: "...", bloodGroup: "A+", homeDistrict: "Chandpur" },
      { id: 27, rollId: "BKH2315045F", name: "Sadia Akther Ananya", gender: "Female", email: "sadiaananya37@gmail.com", phone: "1814238100", bloodGroup: "B+", homeDistrict: "Chittagong" },
      { id: 28, rollId: "BKH2415053F", name: "Nusrat Jahan Mim", gender: "Female", email: "nusratmim6999@gmail.com", phone: ".............", bloodGroup: "B+", homeDistrict: "Chandpur" },
      { id: 29, rollId: "ASH2415030M", name: "ANAYET HOSSAIN", gender: "Male", email: "anayettfhcow@gmail.com", phone: "1874665979", bloodGroup: "A+", homeDistrict: "Noakhali" },
      { id: 30, rollId: "BFH2415002F", name: "Nusrat Afrin Sifat", gender: "Female", email: "nusratatfrin1519@", phone: "...............", bloodGroup: "B+", homeDistrict: "Mirsarai, Chattogram" },
      { id: 31, rollId: "MUH2415008M", name: "Md Rakibul Islam", gender: "Male", email: "rakibul00765@gmail.com", phone: "1743142283", bloodGroup: "A+", homeDistrict: "Dinajpur" },
      { id: 32, rollId: "BBH2415039F", name: "Jannatul Adnin", gender: "Female", email: "nazmanipa2020@gmail.com", phone: "...", bloodGroup: "O+", homeDistrict: "Lakshmipur" },
      { id: 33, rollId: "BBH2415039F", name: "Nujhat Tabassum", gender: "Female", email: "Tahia01010@gmail.com", phone: "...", bloodGroup: "A+", homeDistrict: "Feni" },
      { id: 34, rollId: "ASH2415022M", name: "Iqbal Hasan Mahmud", gender: "Male", email: "istudent147@gmail.com", phone: "1814103601", bloodGroup: "AB+", homeDistrict: "Noakhali" },
      { id: 35, rollId: "BFH2415018F", name: "Faria Mostafa Nowshin", gender: "Female", email: "farianowshin23@gmail.com", phone: "...", bloodGroup: "A+", homeDistrict: "Cox's Bazar" },
      { id: 36, rollId: "ASH2415049M", name: "FARHAN WASIF ARNOB", gender: "Male", email: "farhanwasifarnob@gmail.com", phone: "1861975398", bloodGroup: "A+", homeDistrict: "Muslim / Noakhali" },
      { id: 37, rollId: "BFH2415050F", name: "Mos Fatima Yeasmin Shakhi", gender: "Female", email: "shakhi4780@gmail.com", phone: "...", bloodGroup: "O+", homeDistrict: "Chittagong" },
      { id: 38, rollId: "BBH2415007F", name: "Sadia Yeasmin", gender: "Female", email: "Sadiabristy394@gmail.com", phone: "...", bloodGroup: "O+", homeDistrict: "Comilla" },
      { id: 39, rollId: "MUH2415043M", name: "Miraz Hasan Shihab", gender: "Male", email: "mirazhasan595@gmail.com", phone: "1778457890", bloodGroup: "AB+", homeDistrict: "Lakshmipur" },
      { id: 40, rollId: "ASH2415028M", name: "Md Majharul Islam Robin", gender: "Male", email: "robinnahin124@gmail.com", phone: "1897118923", bloodGroup: "B+", homeDistrict: "Lakshmipur" },
      { id: 41, rollId: "ASH2415026M", name: "Tasdik Hasan", gender: "Male", email: "tasdik9552@gmail.com", phone: "1978625625", bloodGroup: "O+", homeDistrict: "Noakhali" },
      { id: 42, rollId: "BFH2415021F", name: "Nusrat Jahan swarna", gender: "Female", email: "nusrratswarna823@gmail.com", phone: "...............", bloodGroup: "A+", homeDistrict: "Feni" },
      { id: 43, rollId: "ASH2315017M", name: "Md Rafi", gender: "Male", email: "rafi114146@gmail.com", phone: "1608599387", bloodGroup: "A+", homeDistrict: "Chattogram" },
    ]
  }
];

export default batchData;

// Helper function to get all batches
export const getAllBatches = (): Batch[] => {
  return batchData;
};

// Helper function to get a batch by ID
export const getBatchById = (id: number): Batch | null => {
  return batchData.find(batch => batch.id === id) || null;
};

// Helper function to get a batch by batch number
export const getBatchByNumber = (batchNo: number): Batch | null => {
  return batchData.find(batch => batch.batchNo === batchNo) || null;
};