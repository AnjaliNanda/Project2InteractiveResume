var bio = {	
			"name": "Anjali Nanda",
		    "role": "Front-End Web Developer",
		    "contacts": {
		        "mobile": "518-253-4742",
		        "email": "anjalisubrat@gmail.com",
		        "github": "AnjaliNanda",
		        "location": "Houston,TX",
		        "location_text": "Currently lives here"
		    },
		    "location": "Niskayuna, New York",
		    "location_text": "Lived here for 2 yrs",
		    "WelcomeMsg1": "Hello,",
		    "WelcomeMsg2":"a bit about me",
		    "WelcomeMsg3": "Anjali Nanda is a front-end developer who creates impeccable HTML5/CSS3 web pages for companies and start-ups. An accomplished Information Technology professional with expertise in applying diverse range of technologies, both as an individual contributor and as an IT instructor. Strong technical skills, effective communicator, detailed oriented individual with proven track record of delivering and leading individuals.",
		    "skills": [
		        "HTML5",
		        "CSS",
		        "JavaScript - JSON",
		        "jquery",
		        "Version Control-GitHub",
		        "Bootstrap-Framework",
		        "Adobe Photoshop",
		        "Adobe Illustrator",
		        "Adobe Flash",
		        "MS Office - MS PPT, MS XL",
		        "Visual Studio - Asp.Net",
		        "C#",
		        "Databases- MS Access, MSSQL",
		    ],

		    "bioPicbg": ["images/MypicN.png"],
		    "bioPicsm": ["images/MypicSm11.png"],
		    "imgNavRed": ["images/yellowbx.png"],
		    "imgNavBlue": ["images/brownbx.png"],
		    "imgNavOrange": ["images/yellowbx2.png"],
		 	"linkedinlink" : "http://www.linkedin.com/pub/anjali-nanda/7/293/903",
		 	"githublink": "https://github.com/AnjaliNanda/anjalinanda.github.com",		    

		    display: function(){
		    	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		    	$("#header1").prepend(formattedRole);
		    	var formattedName = HTMLheaderName.replace("%data%", bio.name);
		    	$("#header1").prepend(formattedName);
		    	var formattedBioPic = HTMLbioPicbg.replace("%data%", bio.bioPicbg);
		    	$("#biopic").append(formattedBioPic);
		    	var formattedBioPic = HTMLbioPicsm.replace("%data%", bio.bioPicsm);
		    	$("#biopic").append(formattedBioPic);
		    	
		    	var formattedWelcomeMsg1 = HTMLWelcomeMsg1.replace("%data%", bio.WelcomeMsg1);
		    	$("#WelcomeMsg1").append(formattedWelcomeMsg1);
		    	var formattedWelcomeMsg2 = HTMLWelcomeMsg2.replace("%data%", bio.WelcomeMsg2);
		    	$("#WelcomeMsg2").append(formattedWelcomeMsg2);
		    	
		    	var formattedimgRed = HTMLimgRed.replace("%data%", bio.imgNavRed);
		    	$("#imgRed").append(formattedimgRed);
		    	var formattedimgBlue = HTMLimgBlue.replace("%data%", bio.imgNavBlue);
		    	$("#imgBlue").append(formattedimgBlue);
		    	var formattedimgOrange = HTMLimgOrange.replace("%data%", bio.imgNavOrange);
		    	$("#imgOrange").append(formattedimgOrange);

		    	var formattedWelcomeMsg3 = HTMLWelcomeMsg3.replace("%data%", bio.WelcomeMsg3);
		    	$("#WelcomeMsg3").append(formattedWelcomeMsg3);

		    	if(bio.skills.length>0) {
		    	$("#skillsstart").append(HTMLskillsStart);
		    		for (var i in bio.skills) {
	        			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	        			$("#skills").append(formattedSkill);
	        		}
	        	}

	        	var formattedEmailid = HTMLemailid.replace("%data%", bio.contacts.email);
		    	$("#emailid").append(formattedEmailid);
		    	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		    	$("#mobile").append(formattedMobile);
		    	
		    	$("#followMe").append(HTMLfollowme);
		    	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.linkedinlink);
		    	$("#linkedin").append(formattedLinkedin);
		    	var formattedGithub = HTMLgithub.replace("%data%", bio.githublink);
		    	$("#github").append(formattedGithub);

		    	$("#copyright").append(HTMLcopyright);

	        },
};

bio.display();

var education= {

	"schools": [
		{
			"name":"JRN University",
			 "city": "Rajasthan, India",
			 "degree": "Masters of Science (M.S)",
			 "major": ["Computer Science"],
			 "years": "2 years Full-Time Program",
			 "location":"Udaipur, Rajasthan, India",
			 "location_text": "Earned my M.Sc.-Masters in Computer Science degree here"
		},
		{
			"name":"Rajasthan University",
			 "city": "Rajasthan, India",
			 "degree": "Bachelors of Arts (B.A.)",
			 "major": ["Mathematics","English Literature"],
			 "years": "3 years Full-Time Program",
			 "location":"Jaipur, Rajasthan, India",
			 "location_text": "Born here "
		},
		{
			"name":"IGNOU University",
			 "city": "New Delhi, India",
			 "degree": "Bachelors of Education (B.Ed.)",
			 "major": ["Computers","English Literature",],
			 "years": "2 years Part-Time Program",
			 "location":"New Delhi, India",
			 "location_text": "Earned my Bachelors of Education degree here"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Intro To HTML & CSS",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud304"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud804"
		}
	],
	
	schooldisplay: function() {
		$("#education").append(HTMLschoolStart);
	    
	    for (var i in education.schools) {
	       var formatName = HTMLschoolName.replace("%data%",education.schools[i].name);
	       $(".education-entry:last").append(formatName);
	       var formatCity = HTMLschoolLocation.replace("%data%",education.schools[i].city);
	       $(".education-entry:last").append(formatCity);
	       var formatDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
	       $(".education-entry:last").append(formatDegree);
	       var formatMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
	       $(".education-entry:last").append(formatMajor);
	       var formatYears = HTMLschoolDates.replace("%data%",education.schools[i].years);
	       $(".education-entry:last").append(formatYears);
	    }
	},

	onlineCoursesdisplay: function() {
		$("#onlineCourseStart").append(HTMLonlineCourse);
		
	    for(var j in education.onlineCourses) {
	       var formatTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
	       $("#onlineCourses").append(formatTitle);
	       var formatSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
	       $("#onlineCourses").append(formatSchool);
	       var formatDate = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
	       $("#onlineCourses").append(formatDate);
	       var formatURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
	       $("#onlineCourses").append(formatURL);
	    }
	},
};

education.schooldisplay();
education.onlineCoursesdisplay();

var work= {
		 display: function() {

	    for (var i in work.jobs) {
	      $("#workExperience").append(HTMLworkStart);

	      var formatJobtitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	       $(".work-entry:last").append(formatJobtitle);
	      var formatEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	       $(".work-entry:last").append(formatEmployer);
	      var formatLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
	       $(".work-entry:last").append(formatLocation);
	      var formatDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
	       $(".work-entry:last").append(formatDates);
	      var formatDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
	       $(".work-entry:last").append(formatDescription);     
	    }
	  },
	  
	"jobs": [
		{
			"employer": "OYC",
			"title": "Web Developer",
			"location": "Houston, TX, USA",
			"dates": "September 2014 - Present",
			"description": "Website development - HTML5, CSS3, Javascript -JSON, Bootstrap, Google APIs Visual Studio- Asp.Net"
		},
		{
			"employer": "Job Consultancy",
			"title": "Web Developer",
			"location": "India",
			"dates": "April 2014 - September2014",
			"description": "Website development - HTML5, CSS3, Javascript, Visual Studio- Asp.Net, C#"
		},
		{
			"employer": "Sterling Developers/Canadian International School",
			"title": "IT Instructor",
			"location": "Bangalore,Karnataka, India",
			"dates": "January 2007 - July 2010",
			"description": "Managed classroom with learners from diverse learning needs. Program planning & budgeting. Integration of main subjects with IT technology. Technologies used - HTML, CSS, Adobe Photoshop, Adobe Flash, Adobe Illustrator"
		},
		{
			"employer": "Bangalore International School",
			"title": "IT Instructor",
			"location": "Bangalore, Karnataka, India",
			"dates": "January 2005 - January 2007",
			"description": "Proposal writing; Documenting & Communicating with senior leadership. Presentation at International Conferences. Technologies used - HTML, Adobe Photoshop, MS Office Suite, Lego Robotics"
		}
	]
};

work.display();
$("#mapDiv").append(googleMap);

var project= {
		display: function(){
			for (var i=0; i<project.projects.length; i++) {
      			$("#projects").append(HTMLprojectStart);

		      var formatTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
		      $(".project-entry:last").append(formatTitle);
		      var formatDates = HTMLprojectDates.replace("%data%",project.projects[i].dates);
		      $(".project-entry:last").append(formatDates);
		      var formatDescription = HTMLprojectDescription.replace("%data%",project.projects[i].description);
		      $(".project-entry:last").append(formatDescription);

		     if(project.projects[i].images.length>0){
		      	for (var image in project.projects[i].images){
		      		var formattedImage = HTMLprojectImage.replace("%data%",project.projects[i].images[image]);
		      		$(".project-entry:last").append(formattedImage);
		      	}
		      }
		    }
		},

		"projects": [
		    {
		      "title" : "<a href='https://github.com/AnjaliNanda/Project1' target='_blank'>Portfolio Mockup to HTML</a>",
		      "dates" : "October 2014",
		      "images" : ["images/project1.png","images/project1A.png","images/project1C.png"],
		      "description" : "Udacity Project 1 - HTML/CSS Mockup"
		    },
		    {
		      "title" : "<a href='http://anjalinanda.github.io/' target='_blank'>Interactive Resume</a>",
		      "dates" : "November 2014",
		      "description" : "Udacity Project 2 - Javascript My Resume",
		      "images" : ["images/Project2.png"]
		    },
		    {
		      "title" : "Classic Arcade Game Clone",
		      "dates" : "December 2014",
		      "description" : "Udacity Project 3 - Object Oriented Javascript",
		      "images" : ["images/Project2.png"]
		    },
		    {
		      "title" : "Website Optimisation",
		      "dates" : "January 2015",
		      "description" : "Udacity Project 4 - Website Optimisation",
		      "images" : ["images/Project2.png"]
		    },
		    {
		      "title" : "Neighbourhood Map",
		      "dates" : "February 2015",
		      "description" : "Udacity Project 5 - Javascript Design Patterns",
		      "images" : ["images/Project2.png"]
		    },
		    {
		      "title" : "Project 6",
		      "dates" : "March 2015",
		      "description" : "Udacity Project 6",
		      "images" : ["images/Project2.png"]
		    },
		    {
		      "title" : "Project 7",
		      "dates" : "April 2015",
		      "description" : "Udacity Project 7",
		      "images" : ["images/Project2.png"]
		    }
		]
	};

	project.display();