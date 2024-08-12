const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Programming/Applications'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Programming/Applications'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Programming/Applications'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Programming/Applications'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'CUDA',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'Tensorflow',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: 'Seaborn',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: ' Matplotlib',
    competency: 5,
    category: ['Programming Frameworks'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Programming Frameworks'],
  },
  {
    title: 'Machine Learning',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Deep Learning',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Natural Language Processing',
    competency: 3,
    category: ['Technologies'],
  },
  {
    title: 'LLM',
    competency: 3,
    category: ['Technologies'],
  },
  {
    title: 'Computer Vision',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Technologies'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Technologies'],
  },
  {
    title: 'Mandarin',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'French',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Hindu',
    competency: 1,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
