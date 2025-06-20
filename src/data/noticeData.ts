// Shared data source for notices
export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  type: 'text' | 'image';
  imageUrl?: string;
  link?: string;
  isImportant?: boolean;
}

// Single source of truth for all notice data
const noticeData: Notice[] = [
  {
    id: 1,
    title: "Admission Test Results for 9th Batch",
    date: "2024-05-15",
    content: "The results of the admission test for the 9th batch of the Department of Statistics have been published. Students can check their results on the university website or the department notice board.",
    type: "text",
    isImportant: true
  },
  {
    id: 2,
    title: "Class Schedule for Spring 2024 Semester",
    date: "2024-04-28",
    content: "The class schedule for the Spring 2024 semester has been published. Classes will begin on May 2, 2024. Students are requested to check the schedule and attend classes accordingly.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80",
    isImportant: true
  },
  {
    id: 3,
    title: "Workshop on Data Science and Machine Learning",
    date: "2024-04-20",
    content: "The Department of Statistics is organizing a workshop on Data Science and Machine Learning from May 10-12, 2024. Interested students can register by filling out the form available at the department office.",
    type: "text"
  },
  {
    id: 4,
    title: "Final Examination Schedule for Fall 2023",
    date: "2024-04-15",
    content: "The final examination schedule for the Fall 2023 semester has been published. Examinations will begin on April 25, 2024. Students are advised to prepare accordingly.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Seminar on Statistical Analysis in Research",
    date: "2024-04-10",
    content: "A seminar on 'Statistical Analysis in Research' will be held on April 20, 2024, at the university auditorium. All students and faculty members are invited to attend.",
    type: "text"
  },
  {
    id: 6,
    title: "Job Opportunity at Bangladesh Bureau of Statistics",
    date: "2024-04-05",
    content: "The Bangladesh Bureau of Statistics (BBS) is hiring statisticians. Interested graduates can apply through the BBS website before April 30, 2024.",
    type: "text",
    link: "https://bbs.gov.bd/careers"
  },
  {
    id: 7,
    title: "Department Picnic 2024",
    date: "2024-03-28",
    content: "The annual department picnic will be held on May 5, 2024, at Cox's Bazar. Students interested in participating should register by April 15, 2024.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Research Grant Opportunity for Faculty Members",
    date: "2024-03-20",
    content: "The University Research Center is offering research grants for faculty members. Interested faculty members can submit their research proposals by April 30, 2024.",
    type: "text"
  },
  {
    id: 9,
    title: "Revised Academic Calendar for 2024",
    date: "2024-03-15",
    content: "The university has published the revised academic calendar for 2024. Students and faculty members are requested to take note of the changes.",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    isImportant: true
  },
  {
    id: 10,
    title: "Guest Lecture by Prof. Dr. Md. Abdul Hakim",
    date: "2024-03-10",
    content: "Prof. Dr. Md. Abdul Hakim from the University of Dhaka will deliver a guest lecture on 'Advanced Time Series Analysis' on March 25, 2024, at the department seminar room.",
    type: "text"
  }
];

export default noticeData;

// Helper function to get all notices
export const getAllNotices = (): Notice[] => {
  return noticeData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Helper function to get important notices
export const getImportantNotices = (): Notice[] => {
  return noticeData
    .filter(notice => notice.isImportant)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Helper function to get a notice by ID
export const getNoticeById = (id: number): Notice | null => {
  return noticeData.find(notice => notice.id === id) || null;
};

// Helper function to get recent notices (last 5)
export const getRecentNotices = (count: number = 5): Notice[] => {
  return getAllNotices().slice(0, count);
};