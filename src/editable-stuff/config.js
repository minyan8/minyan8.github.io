// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yan",
  middleName: "",
  lastName: "Min",
  message: "Machine Learning Engineer/Researcher | Software Developer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/minyan8",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yan-m-081945248/",
    },
    {
      image: "fa-google",
      url: "https://scholar.google.com/citations?user=8bSWUAgAAAAJ&hl=en",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 375,
  message:
    "Hi, I'm Yan Min. I recently completed a thesis-based Master's degree in Electrical and Computer Engineering at McMaster University, under the supervision of Dr. Jun Chen. I have completed several internships in AI and software engineering, and I also have publications and patents. I am currently seeking roles as a Machine Learning Engineer or Researcher. Feel free to reach out if you think I would be a good fit for your team!",
  // resume: "",
};

const jobs = {
  show: true,
  heading: "Work Experience",
  data: [
    {
      title: "Machine Learning Researcher",
      company: "Huawei Canada",
      date: "May 2024 – Dec 2024",
      location: "Markham, ON",
      description: [
        "Conducted literature review and research on 3D Gaussian Splatting for 3D reconstruction and editing.",
        "Captured and reconstructed various real-world scenes by applying Structure from Motion (SfM) and 3D Gaussian Splatting, successfully creating an academic dataset for further research in the field of 3D Computer Vision.",
        "Co-author of a paper accepted by CVPR 2025 and contributor to a US patent.",
      ],
    },
    {
      title: "Software Engineer",
      company: "MLOptic Corp.",
      date: "Apr. 2023 – Jul. 2023",
      location: "Nanjing, China",
      description: [
        "Led the development of advanced computer vision features for optic machines using C++/Qt, integrating OpenCV for robust image analysis to significantly enhance processing performance.",
        "Accelerated lens correspondence detection by optimizing CUDA and OpenCV code.",
        "Improved device performance by 40% and enhanced deployment reliability at Meta.",
      ],
    },
  ],
};


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "minyan8", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["imagine", "RainHistoNet"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// Publication SECTION
// Publication SECTION
const publication = {
  show: true,
  heading: "Publications",
  message:
    "Here are some of my selected research publications and articles, highlighting my work in machine learning, computer vision, and artificial intelligence.",
  items: [
    { 
      img: require("../assets/img/pub1.png"), 
      title: "Towards Scale-Aware Low-Light Enhancement via Structure-Guided Transformer Design", 
      description: "We propose SG-LLIE, a multi-scale CNN-Transformer hybrid framework for Low-Light Image Enhancement (LLIE), guided by robust structure priors instead of relying on semantic features or illumination maps. Our method introduces a Structure-Guided Transformer Block (SGTB) to effectively enhance extremely low-light images and achieves state-of-the-art results across several LLIE benchmarks, ranking second in the NTIRE 2025 Challenge.",
      link: "https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/papers/Dong_Towards_Scale-Aware_Low-Light_Enhancement_via_Structure-Guided_Transformer_Design_CVPRW_2025_paper.pdf"
    },
    { 
      img: require("../assets/img/pub2.png"), 
      title: "IMFine: 3D Inpainting via Geometry-guided Multi-view Refinement", 
      description: "We present a novel 3D inpainting approach that handles both front-facing and unconstrained scenes by combining geometric priors, multi-view refinement with test-time adaptation, and a new mask detection technique. Our method delivers consistent visual quality and coherent geometry, significantly outperforming existing methods on a newly introduced, diverse benchmark.",
      link: "https://openaccess.thecvf.com/content/CVPR2025/papers/Shi_IMFine_3D_Inpainting_via_Geometry-guided_Multi-view_Refinement_CVPR_2025_paper.pdf"
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "C/C++", value: 100 },
    { name: "CUDA", value: 100 },
    { name: "Java", value: 100 },
    { name: "R", value: 100 },
    { name: "Bash", value: 100 },
    { name: "SQL", value: 100 },
    { name: "JavaScript", value: 100 },
    { name: "HTML", value: 100 },
    { name: "CSS", value: 100 },
    { name: "Assembly", value: 100 },
    { name: "PyTorch", value: 100 },
    { name: "TensorFlow", value: 100 },
    { name: "OpenCV", value: 100 },
    { name: "Numpy", value: 100 },
    { name: "Scikit-learn", value: 100 },
    { name: "React", value: 100 },
    { name: "Node.js", value: 100 },
    { name: "Next.js", value: 100 },
    { name: "Angular", value: 100 },
    { name: "Git", value: 100 },
    { name: "Linux", value: 100 },
    { name: "Docker", value: 100 },
    { name: "AWS", value: 100 },
    { name: "Azure", value: 100 },
  ],
  softSkills: [
    { name: "Model Training", value: 100 },
    { name: "Evaluation", value: 100 },
    { name: "Optimization", value: 100 },
    { name: "Data Pipelines", value: 100 },
    { name: "Experiment Tracking", value: 100 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Machine Learning Engineer/Software Developer opportunities. Please email me at",
  email: "ryanm.sde@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      role: "B.Eng. in Automation, Nanjing University",
      companylogo: require("../assets/img/nju.png"),
      date: "Sep 2018 – Jun 2022",
    },
    {
      role: "M.A.Sc. in Electrical and Computer Engineering, McMaster University (GPA: 4.0/4.0)", 
      companylogo: require("../assets/img/mac.png"),
      date: "Sep 2023 – Apr 2025",
    },
  ],
};


// // Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, jobs, publication };
