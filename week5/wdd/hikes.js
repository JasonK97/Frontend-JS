const imgBasePath = "//byui-cit.github.io/cit261/examples/";

export function showHikeList(hikeList) {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
}

export function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}

export function renderOneHike(hike) {
    const item = document.createElement("li");

    item.innerHTML = ` <a href="description.html">${hike.name}</a>
            <div class="grid">
                <div class="stuff"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
                <div class="stuff">
                    <div class="dist">
                        <h3>Distance</h3>
                         <p>${hike.distance}</p>
                    </div>
                    <div class="diff">
                         <h3>Difficulty</h3>
                         <p>${hike.difficulty}</p>
                    </div>
            </div>
        </div>`;

    return item;
}

export function renderDescription(hike) {
    const item = document.createElement("li");

    item.innerHTML = `<div>
                        <h3>Description</h3>
                        <p>${hike.description}</p>
                    </div>
                    <div>
                        <h3>Directions</h3>
                        <p>${hike.directions}</p>
                    </div>`;

    return item;
}