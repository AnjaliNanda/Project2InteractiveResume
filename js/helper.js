
//bio  
var HTMLheaderName = "<h1 class='titleName'>%data%</h1>";
var HTMLheaderRole = "<h6 class='subtitleRole'>%data%</h6>";

var HTMLbioPicbg = "<img src='%data%' class='img-circle img-responsive mypic desktop center-block'/>";
var HTMLbioPicsm ="<img src='%data%' class='img-responsive mypic mobile center-block'/>";

var HTMLWelcomeMsg1 = "<h1 class='fontHello'>%data%</h1>";
var HTMLWelcomeMsg2 = "<h4 class='fontAbtMe'>%data%</h4>";

var HTMLimgRed = "<a href='#resume'> <img src='%data%' class='img-padding img-circle img-responsive' alt='Resume' /></a>";
var HTMLimgBlue = "<a href='#education1'><img src='%data%' class='img-padding img-circle img-responsive' alt='Work' /></a>";
var HTMLimgOrange = "<a href='#Skills'><img src='%data%' class='img-padding img-circle img-responsive' alt='Skills' /></a>";
var HTMLWelcomeMsg3 ="<br><p>%data%</p>";

//Skills Panel
var HTMLskillsStart = "<h3 class='panel-title'>Skills at a Glance:</h3>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";


//work
var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<div class='subtitle'>%data%</div>";
var HTMLworkTitle = "<div class='title'> %data%</div>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p>%data%</p><br>";

//projects
var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#' class='title'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p>%data%</p>";
var HTMLprojectImage = "<img src='%data%' alt='projectimg' />";

//education - school
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<div class='title'>%data%</div>";
var HTMLschoolDegree = "<div class='subtitle'> %data%</div>";
var HTMLschoolDates = "<div class='date-text'>%data%</div><br>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em>Major: %data%</em><br>";

//education - online courses
var HTMLonlineCourse = "<h3 class='panel-title'>Online Courses</h3>";
var HTMLonlineTitle = "<div class='title'>%data%</div>";
var HTMLonlineSchool = "<div class='subtitle'>%data%</div>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<a href='#' class='urlformat'>%data%</a><br>";


var googleMap = "<div id='map'></div>";

//footer Contacts
var HTMLemailid = "<i class='glyphicon glyphicon-envelope'></i><h4>Contact:</h4><h6>%data%</h6>";
var HTMLmobile = "<i class='glyphicon glyphicon-phone-alt'></i><h4>Call:</h4><h6>%data%</h6>";
var HTMLfollowme = "<i class='glyphicon glyphicon-plus-sign'></i><h6>Follow me:</h6>";
var HTMLlinkedin = "<a href='%data%' target='_blank'><img src='https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png' class='followlogo' alt='mylinkedin'/></a>"
var HTMLgithub = "<a href='%data%' target='_blank'><img src='images/GitHub.png' alt='mygithub'/></a>";
var HTMLcopyright = "<i class='glyphicon glyphicon-copyright-mark'></i><h6>2014 Anjali Nanda</h6>"

/*var internationalizeButton = "<button>Internationalize</button>";

The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
})*/

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
});
/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);
    locations.push(bio.location);
    
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

 
  function createMapMarker(placeData, text) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: name 
        });

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,marker);
        console.log(marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);
      for (place in locations) {
        var request = {
          query: locations[place],
        };
        service.textSearch(request, function(results, status){
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0])
          }
        });
      }
    }
  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);
};

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
map.fitBounds(mapBounds);
});

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Desc',      'h',                'v',        'Skills'],
    ['HTML',         2004,              5,      'Technology'],
    ['Lego Robotics',         2005,              10.5,      'Technology'],
    ['Javascript',   2014,             7.5,      'Technology'],
    ['Mentoring',    2005,              8,      'Interpersonal Skills'],
    ['Jquery',    2013,              9.5,         'Technology'],
    ['Req.Gathering',    2010,              7,       'Interpersonal Skills'],
    ['HTML',    2008,              10,      'Technology'],
    ['Git',    2014,              5,      'Technology'],
    ['CSS',    2010,               9,      'Technology'],
    ['Animation',    2009,              4,      'Program Management'],
    ['C# & .Net', 2013,           7,    'Technology'  ],
    ['CSS',   2014,     13,    'Technology'],
    ['Self Motivated', 2012, 12, 'Interpersonal Skills'],
    ['Team Oriented',  2010, 12, 'Interpersonal Skills'],
    ['Critical Thinking', 2011, 9.5, 'Interpersonal Skills'],
    ['Image Editing', 2007, 7, 'Technology'],
    ['Adobe Flash', 2009, 6.5, 'Technology'],
    ['Database', 2008, 5, 'Technology'],
    ['MS Office', 2006, 6.5, 'Technology'],
    ['HTML5', 2013, 13, 'Technology'],
    ['MSSQL', 2006,4,'Technology'], 
    ['Detail Oriented', 2014, 9.5,'Interpersonal Skills'],
  ]);

  var options = {
    legend: { position: 'bottom', alignment:'in' },
    sizeAxis: { minValue: 20, maxSize: 25},
    title: '',
    hAxis: {
      title: '',
      viewWindow: { min: 2004},
    },
    vAxis: {
      title: 'Beginner--->Advanced',
      textPosition:'none',
      gridlines:{color: 'white'},
      ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    },
    colors:['#D2004e','#fee202','f07400','pink'],
    hAxis:{
      format:'####',
      gridlines:{color:'white'},
      ticks: [2003,2004,2006,2008,2010,2012,2014,2015],
    },
    bubble: {
      opacity:0.8,
      size:10,
      textStyle: {
        auraColor: 'none',
        fontSize: 8,
      }
    }
  };
  var chart = new google.visualization.BubbleChart(document.getElementById('noAura'));
  chart.draw(data, options);
};
