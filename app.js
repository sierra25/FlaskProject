//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');



        var d;
        //Gets and loads content from json file.
        fetch('/static/movies.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) { //This function is where we would handle the JSON data
                appendData(data, 0); // calls appendData method
                d = data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        var per_page = 5; // limits the number of pages
        var j = 0;

        function latest()
        {
            document.getElementById("movies").innerHTML = "";
            var lat = d.sort(function(obj1, obj2) {
            // Descending: newest to oldest
                return obj2.year - obj1.year;
            });
            d = lat;
            appendData(lat, 0);
        }

        function nextpage()
        {
            document.getElementById("movies").innerHTML="";
            j = j + 1;
            var a = j * per_page;
            appendData(d, a);
        }

        function previouspage()
        {
            document.getElementById("movies").innerHTML="";
            if(j > 0)
            {
                j = j - 1;
            }
            var a = j * per_page;
            appendData(d, a);
        }
// add items to the end of the list
        function appendData(data, b) {
            var mainContainer = document.getElementById("movies");
            for (var i = b; i < b + per_page; i++) {
                var div1 = document.createElement("div");
                div1.className = "card bg-dark text-white";
                var div2 = document.createElement("div");
                div2.className = "card-body";
                var h4 = document.createElement("h4");
                h4.className = "card-title";
                var p = document.createElement("p");
                p.className = "card-text";
                var br = document.createElement("br");
                h4.innerHTML = data[i].title;
                p.innerHTML = 'Year: ' + data[i].year + '; Cast: ' + data[i].cast + '; Genres: ' + data[i].genres;
                mainContainer.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(h4);
                div2.appendChild(p);
                mainContainer.appendChild(br);
            }
        }
   














//Monitors the event that the button is clicked and has a function to handle ethat situation
buttonElement.onclick = function(event){
    event.preventDefault();// Will prevent any action that the browser automatically does for you, like reloading the page after pressing a submit button. Normally when you are inside of a form the browser is kind and decides to send the information you put inside the input field to a server and this causes the page to reload.


    const value = inputElement.value;// Will get the information that I put inside of teh input field
    console.log('Value: ', value); // will print the input valu eto the console
    console.log("Hello world, this button has been clicked!!!");
}
