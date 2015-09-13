/* Data objects */

var myContact = {
	mobile : "07281923",
	email : "blabla@bla.bla",
	github : "https://www.github.com/nhimkova",
	twitter : "nhimkova",
	location : "London"
};

var myFirstSchool = {
	name : "University of Awesome",
	location : "Budapest",
	degree : "Bacherlor",
	majors : "Economics, Finance",
	dates : 2011,
	url : "http://www.uoa.com"
};

var mySecondSchool = {
	name : "University of Amazing",
	location : "Amsterdam",
	degree : "Masters",
	majors : "Accounting, Finance",
	dates : 2014,
	url : "http://www.uoaa.com"
};

var myFirtsOnlineCourse = {
	title : "Introduction to HTML/CSS",
	school : "Udemy",
	date : 2015,
	url : "www.udemy.com"
};

var mySecondOnlineCourse = {
	title : "How to use Git",
	school : "Udacity",
	date : 2015,
	url : "www.udacity.com"
};

var myFirstJob = {
	employer : "Finance Company Plc",
	title : "Intern",
	location : "Budapest",
	dates : "2011 - 2012",
	description : "I learnt how to deal with money."
};

var mySecondJob = {
	employer : "Second Company",
	title : "Analyst",
	location : "Berlin",
	dates : "2013 - 2014",
	description : "This one was a very interesting job."
};

var myFirstProject = {
	title : "Build a portfolio website with Udemy",
	dates : "2014 - 2015",
	description : "Here is a very short description. This project was quite interesting, I learnt HTML and CSS, responsiveness...",
	images : ["images/apple.jpg", "images/apple.jpg"]
};

var mySecondProject = {
	title : "Sound recorder app",
	dates : "2014 - 2015",
	description : "This project was based on an Udemy course, where we had to use Swift to build an app.",
	images : ["images/apple.jpg", "images/apple.jpg"]
};

var bio = {
	name : "Nhim Kova",
	role : "Front End Ninja",
	contacts : myContact,
	welcomeMessage : "Hello World!",
	skills : ["HTML", "CSS", "JS", "Git"],
	biopic : "images/fry.jpg",
	display : function(){
		var fHeaderName = HTMLheaderName.replace("%data%", bio.name); 
		var fHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(fHeaderRole);
		$("#header").prepend(fHeaderName);
		var contactKeys = Object.keys(bio.contacts);
		for (var item in contactKeys) {
			var fContactGeneric= HTMLcontactGeneric.replace("%contact%",contactKeys[item]).replace("%data%",bio.contacts[contactKeys[item]]);
			$("#topContacts").append(fContactGeneric);
		}
		var fBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(fBioPic);
		$("#header").append(fWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (var item in bio.skills) {
			var fSkills = HTMLskills.replace("%data%", bio.skills[item]);
			$("#skills").append(fSkills);
		}
	}
};

var education = {
	schools : [myFirstSchool, mySecondSchool],
	onlineCourses : [myFirtsOnlineCourse, mySecondOnlineCourse],
	display : function(){
		$("#education").append(HTMLschoolStart);
		for (var item in education.schools) {
			var fSchoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
			var fSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
			var fSchoolDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
			var fSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
			var fSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors);

			$(".education-entry").append(fSchoolName);
			$(".education-entry").append(fSchoolDegree);
			$(".education-entry").append(fSchoolDates);
			$(".education-entry").append(fSchoolLocation);
			$(".education-entry").append(fSchoolMajor);
		}

		$(".education-entry").append(HTMLonlineClasses);
		for (var item in education.onlineCourses) {
			var fOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
			var fOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
			var fOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].date);
			var fOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);

			$(".education-entry").append(fOnlineTitle);
			$(".education-entry").append(fOnlineSchool);
			$(".education-entry").append(fOnlineDates);
			$(".education-entry").append(fOnlineURL);
		}
	}
};

var work = {
	jobs : [myFirstJob, mySecondJob],
	display : function(){
		$("#workExperience").append(HTMLworkStart);
		for (var item in work.jobs){
			var fworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
			var fworkTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
			var fworkDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
			var fworkLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
			var fworkDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
			
			$(".work-entry").append(fworkEmployer);		
			$(".work-entry").append(fworkTitle);
			$(".work-entry").append(fworkDates);
			$(".work-entry").append(fworkLocation);
			$(".work-entry").append(fworkDescription);
		}
	}
};

var projects = {
	projects : [myFirstProject, mySecondProject],
	display : function() {
		$("#projects").append(HTMLprojectStart);
		for (var item in projects.projects) {
			var fProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
			var fProjectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
			var fProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
			$(".project-entry").append(fProjectTitle);
			$(".project-entry").append(fProjectDates);
			$(".project-entry").append(fProjectDescription);
			
			var temp = projects.projects[item].images;
			for (var item2 in temp) {
				var fProjectImage = HTMLprojectImage.replace("%data%", temp[item2]);
				$(".project-entry").append(fProjectImage);
			}		
		}
	}
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);








