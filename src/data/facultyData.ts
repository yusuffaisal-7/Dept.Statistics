// Shared data source for faculty information
import shohelrana from '../image/shohelrana.jpg';
import najmaBegum from '../image/Najma Begum.jpeg';
import mimmaTabassum from '../image/Mimma.jpeg';
import mamunMiah from '../image/Mamun mia.jpg';
import omarFaruk from '../image/omar faruk.jpg';
import iftekharParvej from '../image/Iftekhar Parvej.jpg';
// Note: No image for Md. Rasel Hossain, will use a placeholder
import tahminaAkter from '../image/Tahmina.jpg';
import shohelMahmud from '../image/Shohel Mahmud.jpg';
import sorifHossain from '../image/Sorif.jpg';
// Note: No image for Monira Yeasmin, will use a placeholder
import placeholder from '../image/blank-profile-picture-973460_1920.png';
import raselHossain from '../image/Rasel Sir.jpeg';

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi?: string;
  url?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  education?: string[];
  email?: string;
  phone?: string;
  bloodGroup?: string;
  joiningDate?: string;
  researchInterests?: string[];
  publications?: Publication[];
  about?: string;
}

// Single source of truth for all faculty data
const facultyData: Record<string, FacultyMember> = {
  'md-shohel-rana': {
    id: 'md-shohel-rana',
    name: 'Md Shohel Rana',
    designation: 'Associate Professor',
    image: shohelrana,
    education: [
      'MS (University of Chittagong)',
      'BSc (University of Chittagong)'
    ],
    email: 'shohel.stat@nstu.edu.bd',
    phone: '+8801818735018',
    bloodGroup: 'O+',
    joiningDate: '2015-12-27',
    researchInterests: [
      'Statistical Modeling',
      'Time Series Analysis',
      'Probability Distribution',
      'Econometrics',
      'Biostatistics'
    ],
    about: "Md Shohel Rana is an Associate Professor in the Department of Statistics. His research primarily focuses on Statistical Modeling, Time Series Analysis, Probability Distribution, Econometrics, and Biostatistics. He is dedicated to advancing statistical knowledge and mentoring students in their academic and research pursuits.",
    publications: [
      {
        id: 'rana-2022-1',
        title: 'Statistical Analysis of COVID-19 Data in Bangladesh',
        journal: 'Journal of Health Statistics',
        year: 2022,
        authors: 'Rana MS, Begum N, Tabassum M',
        doi: '10.1234/jhs.2022.001',
        url: 'https://example.com/paper1'
      },
      {
        id: 'rana-2021-1',
        title: 'Time Series Forecasting of Economic Indicators in South Asia',
        journal: 'International Journal of Statistics and Economics',
        year: 2021,
        authors: 'Rana MS, Faruk MO, Hossain MR',
        doi: '10.1234/ijse.2021.005',
        url: 'https://example.com/paper2'
      }
    ]
  },
  'najma-begum': {
    id: 'najma-begum',
    name: 'Dr. Najma Begum',
    designation: 'Assistant Professor',
    image: najmaBegum,
    education: [
      'PhD (Jahangirnagar University)',
      'MSc (Jahangirnagar University)',
      'BSc (Jahangirnagar University)'
    ],
    email: 'najma.stat@nstu.edu.bd',
    phone: '+8801721072339',
    bloodGroup: 'AB+',
    joiningDate: '2015-12-27',
    researchInterests: [
      'Statistical Inference',
      'Demography',
      'Biostatistics',
      'Modeling'
    ],
    about: "Najma Begum serves as an Assistant Professor in the Department of Statistics. Her academic and research interests include Statistical Inference, Demography, Biostatistics, and Modeling. She is committed to contributing to the field through her research and teaching.",
    publications: [
      {
        id: 'begum-2023-1',
        title: 'Survival Analysis of Cancer Patients in Rural Bangladesh',
        journal: 'Asian Journal of Medical Statistics',
        year: 2023,
        authors: 'Begum N, Rana MS, Akter T',
        doi: '10.1234/ajms.2023.002',
        url: 'https://example.com/paper4'
      }
    ]
  },
  'mimma-tabassum': {
    id: 'mimma-tabassum',
    name: 'Mimma Tabassum',
    designation: 'Assistant Professor',
    image: mimmaTabassum,
    education: [
      'B.Sc (Jahangirnagar University, Bangladesh)',
      'M.Sc (Jahangirnagar University, Bangladesh)'
    ],
    email: 'mimma.stat@nstu.edu.bd',
    phone: '+8801716383125',
    bloodGroup: 'O+',
    joiningDate: '2017-04-23',
    researchInterests: [
      'Regression Analysis',
      'Biostatistics',
      'Public Health',
      'General Statistics',
      'Estimation: Preliminary Test Approach to Shrinkage Estimator'
    ],
    about: "Mimma Tabassum is an Assistant Professor of Statistics, Noakhali Science and Technology University, Noakhali, Bangladesh. She completed her BSc (Honors) and MSc in Statistics from Jahangirnagar University. In 2017, she joined in the Department of Statistics as Lecturer. She promoted as an Assistant Professor in 2019. Besides teaching, Tabassum enjoys research activities. As a result, she has published several research articles in peer-reviewed journals. Tabassum is passionate about collaborative and multidisciplinary research.",
    publications: [
      {
        id: 'tabassum-2023-1',
        title: 'Machine Learning Approaches for Predicting Student Performance',
        journal: 'Educational Data Mining Journal',
        year: 2023,
        authors: 'Tabassum M, Mahmud S, Parvej MI',
        doi: '10.1234/edmj.2023.004',
        url: 'https://example.com/paper6'
      }
    ]
  },
  'md-mamun-miah': {
    id: 'md-mamun-miah',
    name: 'Md. Mamun Miah',
    designation: 'Assistant Professor',
    image: mamunMiah,
    email: 'mamunmiah.615@gmail.com',
    phone: '+8801798039406',
    bloodGroup: 'B+',
    joiningDate: '2017-11-20',
    researchInterests: [
      'Econometric Modelling with Time Series',
      'Biostatistics',
      'Probability Distribution and Statistical Inference'
    ],
    about: "Md. Mamun Miah is an Assistant Professor at the Department of Statistics. His work centers on Econometric Modelling with Time Series, Biostatistics, and Probability Distribution and Statistical Inference. He is passionate about applying statistical methods to solve real-world problems.",
    publications: []
  },
  'mohammad-omar-faruk': {
    id: 'mohammad-omar-faruk',
    name: 'Mohammad Omar Faruk',
    designation: 'Assistant Professor',
    image: omarFaruk,
    education: [
      'M.S. (University of Chittagong)',
      'B.Sc. (University of Chittagong)'
    ],
    email: 'omarfaruk.stat@nstu.edu.bd',
    phone: '+8801676879060',
    bloodGroup: 'A+',
    joiningDate: '2017-11-20',
    researchInterests: [
      'Biostatistics',
      'Demography',
      'Epidemiology',
      'Public Health',
      'Impact of Environmental Factors on Human Disease',
      'Renewable Energy Extraction Strategy from Biomass and Animal Residue through Statistical Approach',
      'Data Science, and Machine Learning'
    ],
    about: "I have completed my M.S. and B.Sc.(Honours) degree in Statistics from the University of Chittagong. I joined as a lecturer at the Department of Statistics in 2017 and currently working as an assistant professor in the same Department of Noakhali Science and Technology University. I am also acting as Assistant Director at the Department of Student Counselling and Guidance. I mainly focus on teaching, learning, and research activities through friendly teamwork with the development of new ideas, methods, and theories. I with my department trying to run with this competitive runway to teach and learn new knowledge and apply them in the real-world field. Creating new knowledge and inventing new statistical approaches is the pathway of my research.",
    publications: []
  },
  'md-iftakhar-parvej': {
    id: 'md-iftakhar-parvej',
    name: 'Md. Iftakhar Parvej',
    designation: 'Assistant Professor',
    image: iftekharParvej,
    education: [
      'B.sc (Jahangirnagar University)',
      'M.Sc (Jahangirnagar University)'
    ],
    email: 'iftakhar.stat@nstu.edu.bd',
    phone: '+8801719157546',
    bloodGroup: 'B+',
    joiningDate: '2018-12-03',
    researchInterests: [
      'Demography',
      'Multivariate Analysis',
      'Statistical Inference',
      'Public Health'
    ],
    about: "I am Md. Iftakhar Parvej serving as Assistant Professor in the Department of Statistics. I have completed my BSc and MSc from Jahangirnagar University.",
    publications: []
  },
  'md-rasel-hossain': {
    id: 'md-rasel-hossain',
    name: 'Md. Rasel Hossain',
    designation: 'Assistant Professor',
    image: raselHossain,
    education: [
      'MS (Islamic University)',
      'BSc (Islamic University)'
    ],
    email: 'rasel.stat@nstu.edu.bd',
    phone: '+8801750720209',
    bloodGroup: 'A+',
    joiningDate: '2018-08-10',
    researchInterests: [
      'Multivariate Analysis',
      'Statistical Genetics',
      'Bioinformatics',
      'Population Statistics',
      'Environmental Statistics'
    ],
    about: "Md. Rasel Hossain is an Assistant Professor in the Department of Statistics. His research focuses on Multivariate Analysis, Statistical Genetics, Bioinformatics, Population Statistics, and Environmental Statistics. He is committed to interdisciplinary research and teaching.",
    publications: []
  },
  'tahmina-akter': {
    id: 'tahmina-akter',
    name: 'Tahmina Akter',
    designation: 'Assistant Professor',
    image: tahminaAkter,
    education: [
      'MS (Jahangirnagar University)',
      'BSc (Jahangirnagar University)'
    ],
    email: 'tahmina.stat@nstu.edu.bd',
    phone: '+8801812345679',
    bloodGroup: 'O+',
    joiningDate: '2019-01-15',
    researchInterests: [
      'Biostatistics',
      'Public Health Statistics',
      'Epidemiology',
      'Clinical Data Analysis',
      'Health Research Methods'
    ],
    about: "Tahmina Akter is a Assistant Professor in the Department of Statistics. Her areas of interest include Biostatistics, Public Health Statistics, Epidemiology, Clinical Data Analysis, and Health Research Methods. She is passionate about using statistics to improve public health outcomes.",
    publications: []
  },
  'shohel-mahmud': {
    id: 'shohel-mahmud',
    name: 'Shohel Mahmud',
    designation: 'Assistant Professor',
    image: shohelMahmud,
    education: [
      'MS (Jahangirnagar University)',
      'BSc (Jahangirnagar University)'
    ],
    email: 'smahmud.stat@nstu.edu.bd',
    phone: '+8801933020140',
    bloodGroup: 'O+',
    researchInterests: [
      'Probability Distribution',
      'Hypothesis Testing',
      'Design of Experiment',
      'Time Series Analysis',
      'Epidemiology',
      'Biostatistics',
      'Survival Analysis',
      'Data Mining'
    ],
    about: "Shohel Mahmud is an Assistant Professor in the Department of Statistics. His research interests are diverse, covering Probability Distribution, Hypothesis Testing, Design of Experiment, Time Series Analysis, Epidemiology, Biostatistics, Survival Analysis, and Data Mining. He is dedicated to exploring complex data and contributing to statistical science.",
    publications: []
  },
  'sorif-hossain': {
    id: 'sorif-hossain',
    name: 'Sorif Hossain',
    designation: 'Lecturer',
    image: sorifHossain,
    education: [
      'MSc (University of Dhaka)',
      'BSc (University of Dhaka)'
    ],
    email: 'sorif.stat@nstu.edu.bd',
    bloodGroup: 'B+',
    joiningDate: '2022-01-24',
    researchInterests: [
      'Public health',
      'Epidemiology',
      'Biostatistics',
      'Health Economics',
      'Environmental health',
      'and Artificial Intelligence.'
    ],
    about: `It is always exciting for us at the department of statistics when we have new talent join the team! Having you on this platform is a great honor! Here's a big welcome to our new Lecturer Sorif Hossain. 
    He is working closely with the statistics department team for better quality, supervised by our senior lecturer and professor. He obtained Masters' and bachelor's degrees from the University of Dhaka, Bangladesh with a concentration in Applied Statistics. 
    He got the "Deans Award" and "Kazi Motahar Hossain Foundation Award" for his outstanding academic performance. He has around two years of professional experience with strong theoretical knowledge through his 5 years of academic accomplishments. 
    As an academician and practitioner, he has several types of research in the field of public health and environmental sciences and spoke at several international workshops and conferences (ISCB40, Belgium; SWCRTS, Queen Mary University of London; ISCB43, Newcastle University, UK). 
    He also worked as a reviewer for different publishers including Nature, SpringerNature, Dove Medical Press, BMJ Open, BMC Public Health, MOJ Public Health, Bentham Science, Frontiers in Public Health, and Mahidol University Press. 
    In January 2022, he started working as a lecturer at the department of statistics. Starting his professional career in 2018 as a statistician at Eusuf and Associates and then worked as a research assistant at MOMODA FOUNDATION in 2019. 
    He also worked as an officer (research and knowledge management) at DM WATCH, and afterward joined as a senior research assistant at James P Grant School of Public Health. Moreover, he also worked as a data scientist at Insightin Technology Bangladesh Limited. 
    He is also very proficient in machine learning, modeling, and missing data handling, and has a very strong background in statistical software like R, STATA, and SPSS. Furthermore, he also plans to work on the SQL database system, and python coding. 
    He always accepts the opportunity to improve his skills by adopting any advanced learning. His skills and talents will be a great addition to our statistics department. We are so excited to have him with us and look forward to working with him.`,
    publications: []
  },
  'monira-yeasmin': {
    id: 'monira-yeasmin',
    name: 'Monira Yeasmin',
    designation: 'Lecturer',
    image: placeholder,
    education: [
      'MS (University of Dhaka)',
      'BSc (University of Dhaka)'
    ],
    email: 'monira.stat@nstu.edu.bd',
    phone: '+8801512345679',
    bloodGroup: 'A+',
    joiningDate: '2020-08-15',
    researchInterests: [
      'Statistical Quality Control',
      'Industrial Statistics',
      'Process Optimization',
      'Reliability Analysis',
      'Design of Experiments'
    ],
    about: "Monira Yeasmin is a Lecturer in the Department of Statistics. Her research interests lie in Statistical Quality Control, Industrial Statistics, Process Optimization, Reliability Analysis, and Design of Experiments. She is focused on the practical application of statistics in industrial settings.",
    publications: []
  }
};

export default facultyData;

// Helper function to get all faculty members
export const getAllFacultyMembers = (): FacultyMember[] => {
  return Object.values(facultyData);
};

// Helper function to get a faculty member by ID
export const getFacultyMemberById = (id: string): FacultyMember | null => {
  return facultyData[id] || null;
};