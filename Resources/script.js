var aboutObserver = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){
		document.querySelectorAll("nav i").forEach((e)=>{
			e.classList.remove("focus")
		})
		document.querySelectorAll("nav i")[0].classList.add("focus")
	}else{		
		document.querySelectorAll("nav i")[0].classList.remove("focus")
	}
}, { threshold: [0] });
var skillsObserver = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){
		document.querySelectorAll("nav i").forEach((e)=>{
			e.classList.remove("focus")
		})
		document.querySelectorAll("nav i")[1].classList.add("focus")
	}else{		
		document.querySelectorAll("nav i")[1].classList.remove("focus")
	}
}, { threshold: [0] });
var projectObserver = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){
		document.querySelectorAll("nav i").forEach((e)=>{
			e.classList.remove("focus")
		})
		document.querySelectorAll("nav i")[2].classList.add("focus")
	}else{		
		document.querySelectorAll("nav i")[2].classList.remove("focus")	
	}
		
}, { threshold: [0] });
var educationObserver = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){
		document.querySelectorAll("nav i").forEach((e)=>{
			e.classList.remove("focus")
		})
		document.querySelectorAll("nav i")[3].classList.add("focus")
	}else{		
		document.querySelectorAll("nav i")[3].classList.remove("focus")
	}
}, { threshold: [0] });

aboutObserver.observe(document.querySelector("#about"));
skillsObserver.observe(document.querySelector("#skills"));
projectObserver.observe(document.querySelector("#projects"));
educationObserver.observe(document.querySelector("#education"));


let skills = [
	["rust.svg","Rust","A Super-Efficient, Blazingly Fast Alternative to C"],
	["js.svg","JavaScript","World's Most Popular Programming Language"],
	["python.svg","Python","A General Purpose Programming Language"],
	["nodejs.svg","NodeJS","Javascript but for Servers"],
	["html5.svg","HTML5","Standard Markup Language for the Web"],
	["css3.svg","CSS3","Styling Language for the Web"],
	["vue.svg","VueJS","A Front-End Javascript Application that Simplifies Reactive Web Apps"],
	["react.svg","ReactJS","A VueJS alternative"],
	["tailwind.svg","TailWindCSS","CSS Framework that simplifies the general process of styling"],
	["sass.svg","SASS","CSS but with super powers ;]"],
	["p5js.svg","P5.js","A Popular Canvas Manipulation Library in Javascript"],
	["jquery.svg","jQuery","Javascript library that helps in DOM manipulation"],
	["express.svg","Express.js","A NodeJS Library that Helps Me Create Web Servers Quickly"],
	["docker.svg","Docker","A Software Standardisation Tool"],
	["mongodb.svg","MongoDB","World's Most Popular NoSQL Database"],
	["git.svg","Git","Code Version Control Manager"],
	["github.svg","GitHub","An Internet Based Hosting System meant for Git Users"]
]

for(let i=0;i<skills.length;i++){
	document.getElementById("skills-list").innerHTML += `<div class="gallery-cell">
	<img src="skillicon/${skills[i][0]}" width="100"> 
 	<h3>${skills[i][1]}</h3>
  	<small>${skills[i][2]}</small>
 </div>`
}

let skillurls = [
	"https://img.shields.io/badge/-HTML5-grey?logo=html5&style=for-the-badge",
	"https://img.shields.io/badge/-CSS3-grey?logo=css3&style=for-the-badge",
	"https://img.shields.io/badge/-Javascript-grey?logo=javascript&style=for-the-badge",
	"https://img.shields.io/badge/-Rust-grey?logo=rust&style=for-the-badge",
	"https://img.shields.io/badge/-React-grey?logo=react&style=for-the-badge",
	"https://img.shields.io/badge/-NodeJS-grey?logo=node.js&style=for-the-badge",
	"https://img.shields.io/badge/-Express-grey?logo=express&style=for-the-badge",
	"https://img.shields.io/badge/-jQuery-grey?logo=jQuery&style=for-the-badge",
	"https://img.shields.io/badge/-Tailwind-grey?logo=tailwindcss&style=for-the-badge",
	"https://img.shields.io/badge/-SASS-grey?logo=sass&style=for-the-badge",
	"https://img.shields.io/badge/-P5.js-grey?logo=p5.js&style=for-the-badge",
	"https://img.shields.io/badge/-Python-grey?logo=python&style=for-the-badge",
	"https://img.shields.io/badge/-Git-grey?logo=git&style=for-the-badge",
	"https://img.shields.io/badge/-Github-grey?logo=github&style=for-the-badge",	
	"https://img.shields.io/badge/-MongoDB-grey?logo=mongodb&style=for-the-badge",
	"https://img.shields.io/badge/-Mongoose-grey?logo=mongoose&style=for-the-badge",
	"https://img.shields.io/badge/-Docker-grey?logo=docker&style=for-the-badge",
	"https://img.shields.io/badge/-VueJS-grey?logo=vue.js&style=for-the-badge"
]

for(let i =0; i<skillurls.length;i++){
	document.getElementById("properlistskills").innerHTML += `<img src="${skillurls[i]}">&nbsp;`
}


let projects = [
	{
		pic:"https://res.cloudinary.com/practicaldev/image/fetch/s--p4fOYx3u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ob5wvhb2bbp2pobvzr7q.png",
		description:"A Chat application that supports many awesome features",
		link:"https://dolphinchat-client.liftoff-ka.repl.co",
		name:"DolphinChat"
	},
	{
		pic:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lyo5frg1txxm9j7104d7.png",
		description:"My old portfolio with many jokes :D",
		link:"https://liftoff-studios.github.io",
		name:"Portfolio Version 1"
	},
	{
		pic:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r8738kp4vv92ybw53nj6.png",
		description:"A Rust-Lang appreciation website",
		link:"https://www.khanacademy.org/computer-programming/rust-lang/5388308906557440",
		name:"Rust"
	},
	{
		pic:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/itkhj0capgvanbo5x1cp.png",
		description:"A website that gives an overview about AI",
		link:"https://liftoff-studios.github.io/artificial-intelligence/",
		name:"What is AI"
	},
	{
		pic:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h959j6qu6u9izv6ouj47.jpg",
		description:"A website about cycling",
		link:"https://liftoff-studios.github.io/Contest-Outdoor-s-Entry/",
		name:"Cycling Website"
	},
	{
		pic:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/26rbtmjkhvti2sse8y4p.png",
		description:"My entry to a hackathon ",
		link:"https://liftoff-studios.github.io/DiPS-Techsprint-Web-Dev-Challenge/",
		name:"Techsprint Challenge"
	},
	{
		pic:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s0z3jhqnkmztk9gywnin.png",
		description:"Portfolio Version 2",
		link:"https://Old-Portfolio-Copy.liftoff-ka.repl.co",
		name:"Portfolio Version 2 (Old)"
	}
];
for(let i =0; i<projects.length;i++){
	document.getElementById("project-pane").innerHTML += `
   		
	<div class="project-p" onclick="window.open('${projects[i].link}')">
 		<img src="./icons/project123.svg">
		<h3>${projects[i].name}</h3>
		
   		
	 	<div class="drop-down"></div>
 	</div> 
 `
}


let navCards = document.querySelectorAll(".project-p");
let d = document.querySelectorAll(".drop-down");
for (var i = 0; i< navCards.length; i++) {
  let drop = d[i];
  let nav = navCards[i]
  navCards[i].addEventListener("mouseover", function () {
    drop.style.height = "150vw";
    drop.style.width = "150vh";
    drop.style.transform = "translate(10%, 0%)";
    drop.style.transform = "rotate(60deg);"
	nav.style.color = "var(--primary)"
  });
  
  navCards[i].addEventListener("mouseout", function () {
    drop.style.height = "30px";
    drop.style.width = "30px";
    drop.style.transform = "translate(-10%, 0%)";
    drop.style.transform = "rotate(45deg)";
	nav.style.color = "var(--tertiary)"
  });
}

var r = document.querySelector(':root');
let primary = getComputedStyle(r).getPropertyValue("--primary")
let secondary = getComputedStyle(r).getPropertyValue("--secondary")
let light = !window.matchMedia("(prefers-color-scheme: dark)").matches;
function weather(){
	let icon = document.querySelector("#foo");
	
	if(light){
		document.getElementById("github").src="icons/github-mark-white.svg"
		document.querySelector("nav").style.boxShadow = "0px 0px 0px 2px black"
		navCards.forEach((e)=>{
			e.style.boxShadow = "0px 0px 0px 4px black"
		})
		r.style.setProperty('--primary',secondary);
		r.style.setProperty('--secondary',primary);
		icon.classList.add("fa-moon")
		icon.classList.remove("fa-sun")
		light = false;
	}
	else if(!light){
		document.getElementById("github").src="icons/github-mark.svg";
		document.querySelector("nav").style.boxShadow = "0px 0px 7px 4px lightgrey";
		navCards.forEach((e)=>{
			e.style.boxShadow = "0px 0px 4px 4px lightgrey"
		});
		r.style.setProperty('--primary',primary);
		r.style.setProperty('--secondary',secondary);
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
		light = true;
	}
}
weather()

console.clear();

console.log('%c Easter Eggs Be Fun!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
