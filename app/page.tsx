import { ArrowUpRight, Download, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const linkedin = "https://www.linkedin.com/in/wilson-tunggala/";
const github = "https://github.com/WilsonTunggala1";
const cv = "/Wilson_Pranajaya_Tunggala_CV.pdf";
const skills = [
  ["Programming", "Python, SQL, R, PySpark, JavaScript, HTML, CSS, C (basic)"],
  ["Data engineering", "Apache Spark, Spark Structured Streaming, Redpanda, ETL/ELT, data pipelines, data lakes, Parquet, event streaming"],
  ["Databases", "PostgreSQL, Redis, Amazon S3"],
  ["Machine learning", "Scikit-learn, PyTorch, TensorFlow, XGBoost, LightGBM, CatBoost, CNN, computer vision, NLP, feature engineering, statistical analysis"],
  ["Cloud & MLOps", "AWS SageMaker, Amazon EC2, Docker, MLflow, FastAPI, model deployment, Git, GitHub"],
  ["Analytics & visualization", "Pandas, NumPy, Matplotlib, Seaborn, Streamlit, Power BI, Microsoft Excel"],
  ["Soft skills", "Analytical thinking, problem solving, leadership, communication, teamwork, adaptability"],
  ["Languages", "Indonesian (native), English (professional working proficiency)"],
];

export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navbar/>
    <main id="main" className="container">
      <section id="home" tabIndex={-1} className="intro">
        <p className="intro-label">Data Science undergraduate · BINUS University</p>
        <h1>Wilson Pranajaya<br/>Tunggala</h1>
        <p className="intro-description">Data Science student with an interest in data engineering, machine learning, and cloud deployment. Research & Development Activist at the BINUS Data Science Club.</p>
        <div className="intro-links">
          <a href="#contact" className="primary-link">Contact me <Mail size={14}/></a>
          <a href={cv} download>Résumé <Download size={14}/></a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a>
        </div>
      </section>

      <section id="about" tabIndex={-1} className="resume-section">
        <SectionHeading title="About"/>
        <div className="about-layout"><div>
          <p>I’m a Data Science undergraduate at Bina Nusantara University in Jakarta, with a GPA of 3.81/4.00. My academic and independent projects cover streaming data pipelines, predictive models, and deployment through APIs and cloud services.</p>
          <p>At the Data Science Club, I conduct deep learning research and model experimentation. I co-authored an IEEE-published paper on CNN architectures for multi-crop leaf disease classification.</p>
        </div><dl className="personal-details">
          <div><dt>Location</dt><dd>Jakarta, Indonesia</dd></div>
          <div><dt>Education</dt><dd>BINUS University, Data Science</dd></div>
          <div><dt>Languages</dt><dd>Indonesian, English</dd></div>
        </dl></div>
      </section>

      <section id="education" tabIndex={-1} className="resume-section">
        <SectionHeading title="Education"/>
        <div className="resume-entry"><p className="entry-date">2024 – Present</p><div><h3>Bina Nusantara University</h3><p>Bachelor of Science in Data Science</p><p className="muted">Jakarta, Indonesia · GPA: 3.81 / 4.00</p></div></div>
      </section>

      <section id="experience" tabIndex={-1} className="resume-section">
        <SectionHeading title="Experience & research"/>
        <div className="resume-entry"><p className="entry-date">2024 – Present</p><div>
          <h3>Research & Development Activist</h3>
          <p className="entry-organization">Data Science Club, Bina Nusantara University</p>
          <ul><li>Conducted research on CNNs for multi-crop plant leaf disease classification using merged image datasets.</li><li>Explored deep learning architectures through model experimentation, evaluation, and technical research.</li><li>Co-authored “CNN Architectures for Multi-Crop Leaf Disease Classification Using a Merged Dataset,” published with IEEE.</li></ul>
          <a className="inline-link" href="https://doi.org/10.1109/ITIS67966.2025.11308783" target="_blank" rel="noopener noreferrer">Read the publication <ArrowUpRight size={14}/></a>
        </div></div>
      </section>

      <section id="projects" tabIndex={-1} className="resume-section">
        <SectionHeading title="Projects" description="Academic and independent projects."/>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.repository} project={project}/>)}</div>
      </section>

      <section id="skills" tabIndex={-1} className="resume-section">
        <SectionHeading title="Skills"/>
        <dl className="skills-list">{skills.map(([name, items]) => <div key={name}><dt>{name}</dt><dd>{items}</dd></div>)}</dl>
      </section>

      <section id="certifications" tabIndex={-1} className="resume-section">
        <SectionHeading title="Certifications"/>
        <div className="certification"><div><h3>GCI World April 2026 — Certificate of Completion</h3><p>Matsuo-Iwasawa Laboratory, The University of Tokyo</p></div><span>August 2026</span></div>
        <div className="certification"><div><h3>Fundamentals of Deep Learning</h3><p>NVIDIA · Credential ID: 1tO0Ys3ITkGJkXM3sgBKrQ</p></div><span>March 2025</span></div>
      </section>

      <section id="contact" tabIndex={-1} className="resume-section">
        <SectionHeading title="Contact" description="For opportunities, research, or collaboration."/>
        <div className="contact-details"><a href="mailto:tunggalawilson@gmail.com">tunggalawilson@gmail.com</a><a href="tel:+6287814381854">+62 878 1438 1854</a><div><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href={github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a></div></div>
      </section>

      <section id="cv" tabIndex={-1} className="resume-section cv-section">
        <div><h2>Curriculum vitae</h2><p>Download my résumé as a PDF.</p></div>
        <div className="cv-links"><a href={cv} download>Download CV <Download size={14}/></a><a href={cv} target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight size={14}/></a></div>
      </section>
    </main>
    <footer className="container"><p>© {new Date().getFullYear()} Wilson Pranajaya Tunggala</p><a href="#home">Back to top ↑</a></footer>
  </>;
}
