import profilePhoto from '../src/assets/images/profile.png'; // Hapus 'src/' dari path
import porto1 from '../src/assets/images/porto1.png'; // Hapus 'src/' dari path
import porto2 from '../src/assets/images/porto2.png'; // Hapus 'src/' dari path

const logotext = "JOHN JULIUS";
const meta = {
    title: "John Julius",
    description: "I’m John Julius - Web Developer",
};

const introdata = {
    title: "I’m John Julius",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "Web Developer",
    },
    description: "I am a student from Duta Wacana Christian University with majoring in Informatics Engineering. I have strongly interested in web development especially for front - end developer and API development.I have the ambition to develop my skills and grow professionally to contribute positively to the work environment, therefore I always do my best in every task I take.",
    your_img_url: profilePhoto, // Menggunakan gambar yang diimpor,
};

const dataabout = {
    title: "About my self",
    aboutme: "I am a student from Duta Wacana Christian University with majoring in Informatics Engineering. I have strongly interested in web development especially for front - end developer and API development.I have the ambition to develop my skills and grow professionally to contribute positively to the work environment, therefore I always do my best in every task I take.",
};
const worktimeline = [
{
    jobtitle: "Freelance Back-end Developer",
    where: "Yogyakarta",
    date: "Nov 2023 - Dec 2023",
},
{
    jobtitle: "Software Developer at Yayasan SATUNAMA Yogyakarta",
    where: "Yogyakarta",
    date: "Aug 2021 - Jan 2022",
},
];

const skills = [{
    name: "PHP",
    value: 90,
},
{
    name: "Laravel",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "Hard Skills",
    description: "Programming (HTML, CSS, PHP, JavaScript), Framework (Laravel, BoostrapCSS, ReactJs, TailwindCSS), Database (PostgreSQL, MySQL), Software (Postman, Figma).",
},
{
    title: "Soft Skills",
    description: "Creative thinking, Critical thinking, Collaboration and teamwork, Communication, Adaptability.",
},
{
    title: "Certification",
    description: " IT Specialist HTML and CSS - Pearson (2024).",
},
];

const dataportfolio = [{
    img: porto1,
    description: "Developed a training system website using PHP 8.0 and Laravel Framework 10, implementing the MVC paradigm and built the training system's database using PostgreSQL as part of a 2-person team.",
    link: "#",
},
{
    img: porto2,
    description: "Developed back-end services using PHP 8.1 and the Laravel Framework 10 by implementing the MVC paradigm and developed 4 back-end features by implementing the Scrum methodology.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "john.julius@ti.ukdw.ac.id",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "xuov zans kmnn ppvp",
    YOUR_TEMPLATE_ID: "template_zyfao4d",
    YOUR_PUBLIC_KEY: "6rYwONUA3R4g6daLl",
};

const socialprofils = {
    github: "https://github.com/71190496?tab=repositories",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/john-julius-pattikaihatu-604168237/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};