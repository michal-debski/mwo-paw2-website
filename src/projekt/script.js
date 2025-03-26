function showGallery(city) {
    const gallery = document.getElementById("gallery");

    const images = {
        "nowy-jork": [
            {src: "city/nowy-jork1.jpg", description: "Statua Wolności"},
            {src: "city/nowy-jork2.jpg", description: "Manhattan"},
            {src: "city/nowy-jork3.jpg", description: "Central Park"},
            {src: "city/nowy-jork4.jpg", description: "Most Brooklyński"},
            {src: "city/nowy-jork5.jpg", description: "Wall Street"},
            {src: "city/nowy-jork6.jpg", description: "Time Square"},
            {src: "city/nowy-jork7.jpg", description: "Top of The Rock"},
            {src: "city/nowy-jork8.jpg", description: "Muzeum Historii Naturalnej"},
            {src: "city/nowy-jork9.jpg", description: "Broadway"}
        ],
        "los-angeles": [
            {src: "city/los-angeles1.jpg", description: "Disneyland"},
            {src: "city/los-angeles2.jpg", description: "Santa Monica Pier"},
            {src: "city/los-angeles3.jpg", description: "Rodeo Drive"},
            {src: "city/los-angeles4.jpg", description: "Obserwatorium Griffitha"},
            {src: "city/los-angeles5.jpg", description: "Beverly Hills"},
            {src: "city/los-angeles6.jpg", description: "Hollywood Boulevard"},
            {src: "city/los-angeles7.jpg", description: "Venice Beach"},
            {src: "city/los-angeles8.jpg", description: "Znak Hollywood"},
            {src: "city/los-angeles9.jpg", description: "Universal Studios"},
        ],
        "chicago": [
            {src: "city/chicago1.jpg", description: "Lincoln Park"},
            {src: "city/chicago2.jpg", description: "Magnificent Mile"},
            {src: "city/chicago3.jpg", description: "Navy Pier"},
            {src: "city/chicago4.jpg", description: "Stare miasto"},
            {src: "city/chicago5.jpg", description: "Początek Route 66"},
            {src: "city/chicago6.jpg", description: "Riverwalk"},
            {src: "city/chicago7.jpg", description: "Pedway"},
            {src: "city/chicago8.jpg", description: "Willis Tower"},
            {src: "city/chicago9.jpg", description: "Tribune Tower i Wrigley Building"}
        ]
    };

    if (images[city]) {
        gallery.innerHTML = "";

        images[city].forEach(imgObj => {
            let container = document.createElement("div");
            container.style.textAlign = "center";

            let img = document.createElement("img");
            img.src = imgObj.src;
            img.alt = imgObj.description;

            let caption = document.createElement("p");
            caption.textContent = imgObj.description;

            container.appendChild(img);
            container.appendChild(caption);
            gallery.appendChild(container);
        });
    }else {
        console.error("Brak danych dla miasta:", city);
    }
}
