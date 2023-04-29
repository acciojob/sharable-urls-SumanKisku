// your code here
const url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const button = document.querySelector("button");

button.addEventListener("click", (e)=> {
	e.preventDefault();
	url.textContent = `https://localhost:8080/`
	if(name.value && year.value) {
		url.textContent = `${url.textContent}?name=${name.value}&year=${year.value}`;
	} else if(name.value) {
		url.textContent = `${url.textContent}?name=${name.value}`;
	} else if(year.value) {
		url.textContent = `${url.textContent}?year=${year.value}`;
		
	}

})

