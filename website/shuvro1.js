// images (FTP images folder)
let movies = [
  "images/movie1.jpg",
  "images/movie2.jpg",
  "images/movie3.jpg",
  "images/movie4.jpg",
  "images/movie5.jpg"
];

// Banner auto change
let banner = document.getElementById("banner");
let index = 0;

function changeBanner() {
  banner.style.backgroundImage = `url('${movies[index]}')`;
  index = (index + 1) % movies.length;
}

changeBanner();
setInterval(changeBanner, 5000);

// Load posters
let row = document.getElementById("movieRow");

movies.forEach(img => {
  let image = document.createElement("img");
  image.src = img;
  image.classList.add("poster");
  row.appendChild(image);
});