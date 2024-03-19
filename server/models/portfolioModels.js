const mongoose = require("mongoose");
const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieUrl: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },

  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
  techstack: {
    type: String,
    required: true,
  },
});


const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
});


const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});


module.exports ={
    Intro:mongoose.model("Intro", introSchema),
    About:mongoose.model("About", aboutSchema),
    Experience:mongoose.model("Experience", experienceSchema),
    Courses:mongoose.model("Courses", coursesSchema),
    Projects: mongoose.model("Projects", projectSchema),
    ContactUs: mongoose.model("ContactUs", contactSchema)
};