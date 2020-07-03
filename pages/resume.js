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
        content: "Taught tutorials, guided course projects, and graded/invigilated assessments for the third year undergraduate course, Programming on the Web, under instructor Mark Kazakevich.",
      },
      {
        date: "August 2018 - August 2019 (1 year 1 month, full-time internship)",
        title: "Full Stack Developer",
        subtitle: "Venngage",
        content: "Developed features for a WYSIWIG editor in JavaScript, TypeScript, PHP, and SQL, using multiple libraries such as React and Laravel. Projects regarded auto-generation, branding, and text widgets.",
      },
      {
        date: "May - August 2016 (4 months)",
        title: "Undergraduate Researcher",
        subtitle: "University of Toronto",
        content: "In a team of two, designed and implemented an educational video game using the Unity game engine. Conducted research on the corellation of educational retainment and video game enjoyment. Research done under Professor Steve Engels.",
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
        content: "ArcMap • Docker • Docker Compose • Express.js • Firebase • Gatsby.js • Git • GitHub Pages • HTML5/CSS3 • Jupyter Notebook • LaTeX • Netlify • Next.js • PyTorch • React • React Native • Redux • styled-components • ZEIT Now",
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
