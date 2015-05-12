var bio = {
		"name":     "Paul Michalski",
		"role":     "Web Developer",
		"contacts": {
		"mobile":   "408-691-1679",
		"email":    "pmichalski@gmail.com",
		"github":   "johndoe",
		"twitter":  "@paulhmichalski.",
		"location":  "Los Angeles"},
		"welcomeMessage": "Welcome to my page.",
		"skills": ["PeopleSoft 9.0","HTML", "Java", "Python"],
		"biopic":    "images/fry.jpg"};
		
var education = {
	"schools": [{
		"name": "Principia College",
		"city": "Elsah, IL",
		"degree": "CS",
		"majors" : ["CS"],
		"dates" : 2007,
		"url": "http://www.principiacollege.edu/"}],
	"onlineCourses": [
	{
		"title": "Java 1",
		"school": "UCLA Extension",
		"dates_attended": "Nov 1st, 2014",
		"url": ""
	},{
		"title": "Java 2",
		"school": "UCLA Extension",
		"dates_attended": "Jan 1st, 2015",
		"url": ""
	}
	]
};

var work =  {
	"jobs": [{
		"employer": "BCL Technologies",
		"title": "Support Engineer",
		"location": "Santa Clara, CA",
		"dates": "February 2008 - January 2009",
		"description": "Performing training for users of SEC filing software, as well as performing phone support if the users happen to run into issues with the software"},	
	{
	"employer": "Kaiser Permanente",
		"title": "Developer Analyst",
		"location": "Pleasanton, CA",
		"dates": "Sept 2009 - March 23rd, 2014",
		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normadie.  Swiss mozzarella cheese slices feta fromage fraise airedale swiss cheesecake."
	}
]};

var project = {
	"projects": [{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normadie.  Swiss mozzarella cheese slices feta fromage fraise airedale swiss cheesecake.",
		"images": [
			"images/dog.jpg",
			"images/cat.jpg"
			]
	}]
};

var displayBio = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", "images/images.jpg");
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#header").append(formattedSkill);
	}  
}

var displayEducation = function()
{
		
	
    for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var major = "";
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		for (Major in education.schools[school].majors){
			major += education.schools[school].majors[Major] + " ";
		}
		var formattedMajor = HTMLschoolMajor.replace("%data%",major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
	
	for(Course in education.onlineCourses)
	{
		$("#education").append(HTMLonlineStart);
		$("onlineCourse-entry").append(HTMLonlineClasses);
		
		formattedClassName = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
		formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
		formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates_attended);
		formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
	}
}

var displayWork = function()
{

	
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedDescription);
	}
}

var displayProjects = function()
{	
	for (item in project.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",project.projects[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in project.projects[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",project.projects[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
}

var displayFooter = function()
{
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
}



displayBio();
displayEducation();
displayWork();
displayProjects();
displayFooter();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
