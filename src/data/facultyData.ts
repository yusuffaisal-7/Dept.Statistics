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
      },
      {
        id: 'rana-2020-1',
        title: 'Probability Distribution Analysis of Rainfall Data in Coastal Areas of Bangladesh',
        journal: 'Environmental Statistics Journal',
        year: 2020,
        authors: 'Rana MS, Miah MM',
        doi: '10.1234/esj.2020.012',
        url: 'https://example.com/paper3'
      }
    ]
  },
  'najma-begum': {
    id: 'najma-begum',
    name: 'Najma Begum',
    designation: 'Assistant Professor',
    image: najmaBegum,
    education: [
      'PhD (Ongoing) - University of Dhaka',
      'MS (University of Dhaka)',
      'BSc (University of Dhaka)'
    ],
    email: 'najma.stat@nstu.edu.bd',
    phone: '+8801712345678',
    bloodGroup: 'B+',
    joiningDate: '2016-03-15',
    researchInterests: [
      'Biostatistics',
      'Statistical Inference',
      'Survival Analysis',
      'Clinical Trials',
      'Medical Research'
    ],
    publications: [
      {
        id: 'begum-2023-1',
        title: 'Survival Analysis of Cancer Patients in Rural Bangladesh',
        journal: 'Asian Journal of Medical Statistics',
        year: 2023,
        authors: 'Begum N, Rana MS, Akter T',
        doi: '10.1234/ajms.2023.002',
        url: 'https://example.com/paper4'
      },
      {
        id: 'begum-2022-1',
        title: 'Statistical Methods in Clinical Trials: A Comparative Study',
        journal: 'Clinical Research Journal',
        year: 2022,
        authors: 'Begum N, Tabassum M',
        doi: '10.1234/crj.2022.008',
        url: 'https://example.com/paper5'
      }
    ]
  },
  'mimma-tabassum': {
    id: 'mimma-tabassum',
    name: 'Mimma Tabassum',
    designation: 'Assistant Professor',
    image: mimmaTabassum,
    education: [
      'MS (University of Rajshahi)',
      'BSc (University of Rajshahi)'
    ],
    email: 'mimma.stat@nstu.edu.bd',
    phone: '+8801812345678',
    bloodGroup: 'A+',
    joiningDate: '2016-08-20',
    researchInterests: [
      'Data Mining',
      'Machine Learning',
      'Statistical Computing',
      'Big Data Analytics',
      'Pattern Recognition'
    ],
    publications: [
      {
        id: 'tabassum-2023-1',
        title: 'Machine Learning Approaches for Predicting Student Performance',
        journal: 'Educational Data Mining Journal',
        year: 2023,
        authors: 'Tabassum M, Mahmud S, Parvej MI',
        doi: '10.1234/edmj.2023.004',
        url: 'https://example.com/paper6'
      },
      {
        id: 'tabassum-2022-1',
        title: 'Clustering Algorithms for Big Data: A Comparative Analysis',
        journal: 'Journal of Big Data Analytics',
        year: 2022,
        authors: 'Tabassum M, Hossain MR',
        doi: '10.1234/jbda.2022.015',
        url: 'https://example.com/paper7'
      },
      {
        id: 'tabassum-2021-1',
        title: 'Pattern Recognition in Agricultural Data: A Case Study in Bangladesh',
        journal: 'Agricultural Statistics Journal',
        year: 2021,
        authors: 'Tabassum M, Rana MS, Begum N',
        doi: '10.1234/asj.2021.009',
        url: 'https://example.com/paper8'
      }
    ]
  },
  'md-mamun-miah': {
    id: 'md-mamun-miah',
    name: 'Md. Mamun Miah',
    designation: 'Assistant Professor',
    image: mamunMiah,
    education: [
      'PhD (Ongoing) - BUET',
      'MS (University of Dhaka)',
      'BSc (University of Dhaka)'
    ],
    email: 'mamun.stat@nstu.edu.bd',
    phone: '+8801912345678',
    bloodGroup: 'O+',
    joiningDate: '2017-01-10',
    researchInterests: [
      'Applied Statistics',
      'Experimental Design',
      'Quality Control',
      'Industrial Statistics',
      'Operations Research'
    ],
    publications: [
      {
        id: 'miah-2023-1',
        title: 'Quality Control Methods in Manufacturing Industries of Bangladesh',
        journal: 'Industrial Statistics Journal',
        year: 2023,
        authors: 'Miah MM, Faruk MO',
        doi: '10.1234/isj.2023.007',
        url: 'https://example.com/paper9'
      },
      {
        id: 'miah-2022-1',
        title: 'Experimental Design for Optimizing Agricultural Yield',
        journal: 'Journal of Agricultural Research',
        year: 2022,
        authors: 'Miah MM, Rana MS, Yeasmin M',
        doi: '10.1234/jar.2022.011',
        url: 'https://example.com/paper10'
      }
    ]
  },
  'mohammad-omar-faruk': {
    id: 'mohammad-omar-faruk',
    name: 'Mohammad Omar Faruk',
    designation: 'Assistant Professor',
    image: omarFaruk,
    education: [
      'MS (University of Chittagong)',
      'BSc (University of Chittagong)'
    ],
    email: 'omar.stat@nstu.edu.bd',
    phone: '+8801612345678',
    bloodGroup: 'AB+',
    joiningDate: '2017-06-15',
    researchInterests: [
      'Time Series Analysis',
      'Forecasting Methods',
      'Financial Statistics',
      'Risk Analysis',
      'Econometrics'
    ],
    publications: [
      {
        id:  'faruk-2023-1',
        title: 'Forecasting Stock Market Trends Using ARIMA Models',
        journal: 'Financial Statistics Review',
        year: 2023,
        authors: 'Faruk MO, Parvej MI',
        doi: '10.1234/fsr.2023.003',
        url: 'https://example.com/paper11'
      },
      {
        id: 'faruk-2022-1',
        title: 'Time Series Analysis of Climate Data in Bangladesh',
        journal: 'Environmental Statistics Journal',
        year: 2022,
        authors: 'Faruk MO, Rana MS, Hossain S',
        doi: '10.1234/esj.2022.014',
        url: 'https://example.com/paper12'
      }
    ]
  },
  'md-iftakhar-parvej': {
    id: 'md-iftakhar-parvej',
    name: 'Md. Iftakhar Parvej',
    designation: 'Assistant Professor',
    image: iftekharParvej,
    education: [
      'MS (University of Dhaka)',
      'BSc (University of Dhaka)'
    ],
    email: 'iftakhar.stat@nstu.edu.bd',
    phone: '+8801512345678',
    bloodGroup: 'B+',
    joiningDate: '2018-02-20',
    researchInterests: [
      'Bayesian Statistics',
      'Statistical Learning',
      'Data Science',
      'Computational Statistics',
      'Statistical Software Development'
    ],
    publications: [
      {
        id: 'parvej-2023-1',
        title: 'Bayesian Approaches to Small Area Estimation',
        journal: 'Journal of Statistical Computation',
        year: 2023,
        authors: 'Parvej MI, Mahmud S',
        doi: '10.1234/jsc.2023.006',
        url: 'https://example.com/paper13'
      },
      {
        id: 'parvej-2022-1',
        title: 'Statistical Learning Methods for Classification Problems',
        journal: 'Machine Learning and Statistics',
        year: 2022,
        authors: 'Parvej MI, Tabassum M, Faruk MO',
        doi: '10.1234/mls.2022.009',
        url: 'https://example.com/paper14'
      }
    ]
  },
  'md-rasel-hossain': {
    id: 'md-rasel-hossain',
    name: 'Md. Rasel Hossain',
    designation: 'Assistant Professor',
    image: placeholder,
    education: [
      'MS (SUST)',
      'BSc (SUST)'
    ],
    email: 'rasel.stat@nstu.edu.bd',
    phone: '+8801712345679',
    bloodGroup: 'A+',
    joiningDate: '2018-08-10',
    researchInterests: [
      'Multivariate Analysis',
      'Statistical Genetics',
      'Bioinformatics',
      'Population Statistics',
      'Environmental Statistics'
    ],
    publications: [
      {
        id: 'hossain-2023-1',
        title: 'Multivariate Analysis of Genetic Data in Bangladesh',
        journal: 'Genetic Statistics Journal',
        year: 2023,
        authors: 'Hossain MR, Akter T',
        doi: '10.1234/gsj.2023.008',
        url: 'https://example.com/paper15'
      },
      {
        id: 'hossain-2022-1',
        title: 'Statistical Methods in Bioinformatics: Current Trends',
        journal: 'Bioinformatics and Statistics',
        year: 2022,
        authors: 'Hossain MR, Tabassum M, Yeasmin M',
        doi: '10.1234/bas.2022.013',
        url: 'https://example.com/paper16'
      }
    ]
  },
  'tahmina-akter': {
    id: 'tahmina-akter',
    name: 'Tahmina Akter',
    designation: 'Lecturer',
    image: tahminaAkter,
    education: [
      'MS (University of Chittagong)',
      'BSc (University of Chittagong)'
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
    publications: [
      {
        id: 'akter-2023-1',
        title: 'Statistical Analysis of Public Health Data in Rural Bangladesh',
        journal: 'Public Health Statistics',
        year: 2023,
        authors: 'Akter T, Begum N',
        doi: '10.1234/phs.2023.005',
        url: 'https://example.com/paper17'
      },
      {
        id: 'akter-2022-1',
        title: 'Epidemiological Models for Disease Prediction',
        journal: 'Epidemiology Journal',
        year: 2022,
        authors: 'Akter T, Rana MS, Hossain MR',
        doi: '10.1234/ej.2022.010',
        url: 'https://example.com/paper18'
      }
    ]
  },
  'shohel-mahmud': {
    id: 'shohel-mahmud',
    name: 'Shohel Mahmud',
    designation: 'Assistant Professor',
    image: shohelMahmud,
    education: [
      'MS (BUET)',
      'BSc (BUET)'
    ],
    email: 'shohel.mahmud@nstu.edu.bd',
    phone: '+8801912345679',
    bloodGroup: 'B+',
    joiningDate: '2019-07-20',
    researchInterests: [
      'Statistical Computing',
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Big Data Analytics'
    ],
    publications: [
      {
        id: 'mahmud-2023-1',
        title: 'Deep Learning Approaches for Time Series Forecasting',
        journal: 'Journal of Machine Learning and Applications',
        year: 2023,
        authors: 'Mahmud S, Parvej MI, Tabassum M',
        doi: '10.1234/jmla.2023.007',
        url: 'https://example.com/paper19'
      },
      {
        id: 'mahmud-2022-1',
        title: 'Statistical Computing Methods for Big Data Analysis',
        journal: 'Computational Statistics Journal',
        year: 2022,
        authors: 'Mahmud S, Hossain S',
        doi: '10.1234/csj.2022.012',
        url: 'https://example.com/paper20'
      }
    ]
  },
  'sorif-hossain': {
    id: 'sorif-hossain',
    name: 'Sorif Hossain',
    designation: 'Lecturer',
    image: sorifHossain,
    education: [
      'MS (University of Dhaka)',
      'BSc (University of Dhaka)'
    ],
    email: 'sorif.stat@nstu.edu.bd',
    phone: '+8801612345679',
    bloodGroup: 'AB+',
    joiningDate: '2020-02-10',
    researchInterests: [
      'Sampling Theory',
      'Survey Methodology',
      'Official Statistics',
      'Social Statistics',
      'Demographic Analysis'
    ],
    publications: [
      {
        id: 'hossain-s-2023-1',
        title: 'Sampling Techniques for Social Surveys in Bangladesh',
        journal: 'Survey Methodology Journal',
        year: 2023,
        authors: 'Hossain S, Faruk MO',
        doi: '10.1234/smj.2023.009',
        url: 'https://example.com/paper21'
      },
      {
        id: 'hossain-s-2022-1',
        title: 'Demographic Analysis of Population Census Data',
        journal: 'Demographic Statistics',
        year: 2022,
        authors: 'Hossain S, Rana MS, Yeasmin M',
        doi: '10.1234/ds.2022.016',
        url: 'https://example.com/paper22'
      }
    ]
  },
  'monira-yeasmin': {
    id: 'monira-yeasmin',
    name: 'Monira Yeasmin',
    designation: 'Lecturer',
    image: placeholder,
    education: [
      'MS (University of Rajshahi)',
      'BSc (University of Rajshahi)'
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
    publications: [
      {
        id: 'yeasmin-2023-1',
        title: 'Statistical Quality Control in Manufacturing Industries',
        journal: 'Quality Control and Statistics',
        year: 2023,
        authors: 'Yeasmin M, Miah MM',
        doi: '10.1234/qcs.2023.011',
        url: 'https://example.com/paper23'
      },
      {
        id: 'yeasmin-2022-1',
        title: 'Reliability Analysis of Industrial Systems',
        journal: 'Reliability Engineering Journal',
        year: 2022,
        authors: 'Yeasmin M, Hossain MR, Hossain S',
        doi: '10.1234/rej.2022.018',
        url: 'https://example.com/paper24'
      }
    ]
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