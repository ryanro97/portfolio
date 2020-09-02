import Layout from '../components/Layout';
import Resume from '../components/Resume';
import {
  EducationSVG,
  ExperienceSVG,
  SkillsSVG,
} from '../svgs';

const resume = {
  Education: {
    key: "Education",
    icon: <EducationSVG />,
    data: [
      {
        date: "2015-2020 (Class of 2019 + PEY)",
        title: "University of Toronto, HBSc",
        subtitle: "Computer Science Specialist",
        content: "Core Courses: Algorithm Design & Analysis, Data Structures & Analysis, Introduction to Machine Learning, Introduction to Image Understanding, Introduction to Artificial Intelligence, The Business of Software, Engineering Large Software Systems, Operating Systems, Programming on the Web, Introduction to Databases, The Design of Interactive Computational Media, Capstone Design Project, Research Opportunities Program\n\nSupplementary Courses: Introduction to Software Engineering, Software Design, Software Tools and Systems Programming, Principles of Programming Languages, Introduction to Computer Science, Introduction to the Theory of Computation, Probability with Computer Applications, Mathematical Expression and Reasoning for Computer Science, Computer Organization, Introduction to Computer Programming, Computers and Society\n\nAdditional Courses: Linear Algebra I, Calculus I, Introductory Economics, Human Viruses, The Art of Drug Discovery, Basic Human Nutrition, Introductory Psychology, Physics of Everyday Life, Geographic Information and Mapping I, Stars and Galaxies, The Sun and Its Neighbours, Modern Symbolic Logic, Latin & Greek in Scientific Terminology",
      },
    ],
  },
  Experience: {
    key: "Experience",
    icon: <ExperienceSVG />,
    data: [
      {
        date: "September - December 2019 (4 months)",
        title: "Teaching Assistant",
        subtitle: "University of Toronto",
        content: "• Taught in-depth and hands-on tutorials on topics such as React and JavaScript\n• Guided course web application projects which involved front-end, back-end, and deployment\n• Graded/invigilated assessments for the third-year course",
      },
      {
        date: "August 2018 - August 2019 (1 year 1 month, full-time internship)",
        title: "Full Stack Developer",
        subtitle: "Venngage",
        content: "• Completely rewrote the second most used widget of the WYSIWIG editor\n• Implemented automatic branding of templates based on logo and brand colours, which reduced time to complete infographics for business users\n• Created rule-based automatic generation of complete templates based on user inputted text, completely removing the design process for users with insufficient time or skills",
      },
      {
        date: "May - August 2016 (4 months)",
        title: "Undergraduate Researcher",
        subtitle: "University of Toronto",
        content: "• Designed and implemented an educational video game in C# using the Unity Engine\n• Performed research studies on secondary school students on engagement and educational retainment for learning through video games",
      },
    ],
  },
  Skills: {
    key: "Skills",
    icon: <SkillsSVG />,
    data: [
      {
        date: "",
        title: "Programming Languages",
        subtitle: "",
        content: "Bash • C • C# • Java • JavaScript • PHP • Python • SQL • TypeScript • Verilog",
      },
      {
        date: "",
        title: "Tools & Libraries",
        subtitle: "",
        content: "ArcMap • CodeIgniter • Docker • Docker Compose • Express.js • Firebase • Gatsby.js • Git • GitHub Pages • Heroku • HTML5/CSS3 • Jupyter Notebook • Laravel • LaTeX • Material-UI • Netlify • Next.js • NumPy • OpenCV • PyTorch • React • React Native • Redux • scikit-learn • styled-components • Unity • Vercel",
      },
      {
        date: "",
        title: "Spoken Languages",
        subtitle: "",
        content: "English, Korean, French",
      },
    ],
  },
};

const ResumePage = () => (
  <Layout
    title="Résumé | Ryan Ro"
    description="My education, experience, and skills."
  >
    <Resume resume={resume} />
  </Layout>
);

export default ResumePage;
