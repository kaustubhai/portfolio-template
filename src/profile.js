// Change your display name on tha landing display
const header = {
    name: "a Human",
}
const background = {
    // Options: Snow or Particle
    type: "Particle"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const about = {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Dapibus ultrices in iaculis nunc. Pretium nibh ipsum consequat nisl vel. Consequat ac felis donec et odio. Orci nulla pellentesque dignissim enim sit amet. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        value: 75
    },{
        name: "CSS3",
        value: 85
    },{
        name: "Javascript",
        value: 80
    },{
        name: "React",
        value: 75
    },{
        name: "Node",
        value: 85
    },{
        name: "Mongoose",
        value: 70
    },{
        name: "Adobe XD",
        value: 75
    },
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Project 1",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Project 2",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Project 3",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Project 4",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Project 5",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Project 6",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Miscellaneous 1",
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "Miscellaneous 2",
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Miscellaneous 3",
        url: "https://github.com/kaustubhai"
    },
]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const contact = {
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
    copyright: "Kaustubh Mishra",
    contactUrl: ''
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    resume: 'https://novoresume.com/'
}
// Dont change anything here
export { header, background, about, skillsBar, projects, miscellaneous, contact, social }