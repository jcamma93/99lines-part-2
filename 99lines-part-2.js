document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");

    button.addEventListener("click", function () {

        let friends = ["Zach", "Ed", "Mike", "Andrew", "Tony"];



        for (var f = 0; f < friends.length; f++) {
            const div = document.createElement("div");
            const heading = document.createElement("h3");


            document.body.appendChild(div);
            div.className = "friend";
            div.innerHTML = "<h3 class='name'>" + friends[f].toUpperCase() + "</h3>";


            for (let i = 99; i > 0; i--) {
                if (i > 2) {
                    const p = document.createElement("p");
                    p.innerHTML = i + " lines of code in the file, " + i + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.";
                    div.appendChild(p);
                }


                if (i === 1) {
                    const p = document.createElement("p");
                    p.innerHTML = i + " line of code in the file, " + i + " line of code; " + friends[f] + " strikes one out, clears it all out, no more lines of code in the file.";
                    div.appendChild(p);
                }
                if (i === 2) {
                    const p = document.createElement("p")
                    p.innerHTML = i + "  lines of code in the file, " + i + " lines of code; " + friends[f] + " strikes one out, clears it all out, 1 more line of code in the file.";
                    div.appendChild(p);
                }

            };
        };



    });
});