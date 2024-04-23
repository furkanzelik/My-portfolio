import brush from '../assets/images/brush.png';
import backend from '../assets/images/backend.png';
import ai from '../assets/images/Ai-icon3.png';
import game from '../assets/images/game-icon.png';
import tools from '../assets/images/tools.png';
import softskills from '../assets/images/soft-skill.png';
import ganzenParty from  '../assets/images/ganzenparty.png';
import fullstack from '../assets/images/aoe.png';
import rottertouille from '../assets/images/rottertouille.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: brush,
        skills: [
            {skill: "HTML5", percentage: "90%"},
            {skill: "CCS", percentage: "80%"},
            {skill: "JavaScript", percentage: "80%"},
            {skill: "React.js", percentage: "70%"},
        ],
    },

    {
        title: "Backend",
        icon: backend,
        skills: [
            {skill: "Node.js", percentage: "70%"},
            {skill: "Express.js", percentage: "70%"},
            {skill: "Laravel", percentage: "40%"},
            {skill: "MySQL", percentage: "50%"},
        ],
    },
    {
        title: "AI Development",
        icon: ai,
        skills: [
            {skill: "LLM", percentage: "70%"},
            {skill: "Prompt Engineering", percentage: "70%"},
            {skill: "KNN", percentage: "60%"},
            {skill: "NN", percentage: "40%"},
        ],
    },

    {
        title: "Games & development",
        icon: game,
        skills: [
            {skill: "Unity", percentage: "60%"},
            {skill: "C#", percentage: "60%"},
            {skill: "JavaScript", percentage: "80%"},
            {skill: "C++", percentage: "30%"},
            {skill: "Unreal", percentage: "30%"},
        ],
    },

    {
        title: "Tools",
        icon: tools,
        skills: [
            {skill: "Git & Github", percentage: "90%"},
            {skill: "Visual Studio", percentage: "70%"},
            {skill: "PhpStorm", percentage: "80%"},
            {skill: "Unity", percentage: "60%"},
        ],
    },

    {
        title: "Soft Skills",
        icon: softskills,
        skills: [
            {skill: "Problem solving", percentage: "80%"},
            {skill: "Time management", percentage: "70%"},
            {skill: "Collaborate", percentage: "90%"},
            {skill: "Critical thinking", percentage: "60%"},
        ],
    },
];

export const PROJECTS = [


        {
        title: "Goose Party",
        date: "School Project",
        description: ["This is a game that my team and I created for a school assignment. " +
        "We were given the theme of Kralingse Plas, and based on that, we made a mini-party game with 5" +
        " different games in it. "],
            img: ganzenParty
        },

            {
        title: "Fullstack Website",
        date: "Side Project",
        description: ["I've developed a full-stack website using the MERN stack. " +
        "I crafted the API from scratch and seamlessly integrated it with the frontend. " +
        "By selecting the Age Of Empires theme, I added a personal touch to the project."],
                img: fullstack
            },


    {
        title: "Rottertouille",
        date: "School Project ",
        description: ["Rottertouille is a Mobile application made for people living in Rotterdam with a low income so they can cook cheap meals. " +
        "This app is made with React Native and in my first Mobile Application experience."],
        img: rottertouille
    },

    ]