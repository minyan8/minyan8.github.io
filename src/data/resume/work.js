/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Huawei Noah\'s Ark Lab',
    position: 'Research Intern',
    url: 'https://noahlab.com.hk/#/home',
    startDate: '2024-05',
    summary: ' ',
    highlights: [
      'Conducted research on 3D reconstruction utilizing 3D Gaussian Splatting, with applications in 3D object removal and 3D editing.',
      'Captured various real-world scenes and applied Structure from Motion (SfM) and 3D Gaussian Splatting techniques to reconstruct these scenes, creating academic datasets for research purposes.',
      'Developed image processing algorithms using Python and OpenCV.',
    ],
  },
];

export default work;
