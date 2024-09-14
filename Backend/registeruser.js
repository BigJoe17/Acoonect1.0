import axios from 'axios';

const users = [
 
//   {
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     major: "Electrical Engineering",
//     interests: ["Robotics", "Electronics", "Programming"],
//     password: "securePassword2",
//     semester: 2,
//     bio: "Lover of all things tech, especially robotics."
//   },
//   {
//     name: "Charlie Brown",
//     email: "charlie.brown@example.com",
//     major: "Mechanical Engineering",
//     interests: ["3D Printing", "Design", "Robotics"],
//     password: "securePassword3",
//     semester: 4,
//     bio: "Enjoys building and designing mechanical systems."
//   },
  {
    name: "Diana Prince",
    email: "diana.prince@example.com",
    major: "Information Technology",
    interests: ["Cybersecurity", "Networking", "Programming"],
    password: "securePassword4",
    semester: 1,
    bio: "Aspiring cybersecurity expert."
  },
  {
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    major: "Software Engineering",
    interests: ["Full Stack Development", "Web Apps", "Cloud Computing"],
    password: "securePassword5",
    semester: 3,
    bio: "Full stack developer with a love for web apps."
  },
  {
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    major: "Data Science",
    interests: ["Data Analysis", "Machine Learning", "Statistics"],
    password: "securePassword6",
    semester: 2,
    bio: "Data enthusiast and aspiring data scientist."
  },
  {
    name: "George Washington",
    email: "george.washington@example.com",
    major: "Information Systems",
    interests: ["Database Management", "IT Project Management", "Software Development"],
    password: "securePassword7",
    semester: 5,
    bio: "Tech-savvy and interested in project management."
  },
  {
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    major: "Bioinformatics",
    interests: ["Genomics", "Computational Biology", "Health Tech"],
    password: "securePassword8",
    semester: 4,
    bio: "Combining biology and technology for better healthcare."
  }
];

const registerUsers = async () => {
  for (const user of users) {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', user);
      console.log(`User registered: ${response.data.user.name}`);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error(`Error registering user: ${user.name}`, error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error(`No response received for user: ${user.name}`, error.request);
      } else {
        // Something went wrong in setting up the request
        console.error(`Error in registering user: ${user.name}`, error.message);
      }
    }
  }
};

registerUsers();
