import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, BookOpen } from 'lucide-react';

interface LibraryBook {
  id: number;
  title: string;
  author: string;
  copies: number;
  category: string;
  publishYear: number;
}

const books: LibraryBook[] = [
  { id: 1, title: "Introduction to Statistical Learning", author: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani", copies: 5, category: "Machine Learning", publishYear: 2013 },
  { id: 2, title: "Statistical Inference", author: "George Casella, Roger L. Berger", copies: 8, category: "Statistical Theory", publishYear: 2001 },
  { id: 3, title: "Applied Regression Analysis", author: "Norman R. Draper, Harry Smith", copies: 3, category: "Regression", publishYear: 1998 },
  { id: 4, title: "Bayesian Data Analysis", author: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson", copies: 4, category: "Bayesian Statistics", publishYear: 2013 },
  { id: 5, title: "Time Series Analysis", author: "James D. Hamilton", copies: 6, category: "Time Series", publishYear: 1994 },
  { id: 6, title: "Categorical Data Analysis", author: "Alan Agresti", copies: 5, category: "Categorical Data", publishYear: 2012 },
  { id: 7, title: "Nonparametric Statistical Methods", author: "Myles Hollander, Douglas A. Wolfe", copies: 3, category: "Nonparametric Statistics", publishYear: 1999 },
  { id: 8, title: "Sampling: Design and Analysis", author: "Sharon L. Lohr", copies: 7, category: "Sampling", publishYear: 2009 },
  { id: 9, title: "Multivariate Analysis", author: "K. V. Mardia, J. T. Kent, J. M. Bibby", copies: 4, category: "Multivariate Statistics", publishYear: 1979 },
  { id: 10, title: "Experimental Design", author: "Douglas C. Montgomery", copies: 6, category: "Design of Experiments", publishYear: 2012 },
  { id: 11, title: "Statistical Methods for Research Workers", author: "R. A. Fisher", copies: 2, category: "Research Methods", publishYear: 1925 },
  { id: 12, title: "Probability and Statistics for Engineering and the Sciences", author: "Jay L. Devore", copies: 10, category: "Engineering Statistics", publishYear: 2015 },
  { id: 13, title: "An Introduction to Statistical Methods and Data Analysis", author: "R. Lyman Ott, Michael Longnecker", copies: 5, category: "Data Analysis", publishYear: 2010 },
  { id: 14, title: "Biostatistics: A Foundation for Analysis in the Health Sciences", author: "Wayne W. Daniel, Chad L. Cross", copies: 8, category: "Biostatistics", publishYear: 2018 },
  { id: 15, title: "Statistical Methods in Medical Research", author: "P. Armitage, G. Berry, J. N. S. Matthews", copies: 3, category: "Medical Statistics", publishYear: 2001 }
];

const SeminarLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => 
        book.title.toLowerCase().includes(term.toLowerCase()) || 
        book.author.toLowerCase().includes(term.toLowerCase()) ||
        book.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-4">Seminar Library</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our department maintains a comprehensive collection of statistical literature to support teaching and research activities.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, author or category..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </motion.div>

        {/* Library Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Book className="w-10 h-10 text-teal-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">{books.length}</h3>
              <p className="text-gray-600">Unique Titles</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <BookOpen className="w-10 h-10 text-teal-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">{books.reduce((acc, book) => acc + book.copies, 0)}</h3>
              <p className="text-gray-600">Total Copies</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-4">
              <span className="text-lg font-bold">#</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{new Set(books.map(book => book.category)).size}</h3>
              <p className="text-gray-600">Categories</p>
            </div>
          </div>
        </motion.div>

        {/* Books Table */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copies</th>
                </tr>
              </thead>
              <motion.tbody 
                className="bg-white divide-y divide-gray-200"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredBooks.map((book) => (
                  <motion.tr 
                    key={book.id}
                    variants={item}
                    whileHover={{ backgroundColor: "#f9fafb", transition: { duration: 0.2 } }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{book.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{book.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                        {book.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {book.publishYear}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{book.copies}</div>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SeminarLibrary;