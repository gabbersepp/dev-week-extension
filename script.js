function groupBy(items, selector) {
    var retVal = {};
    items.forEach(item => {
        var key = selector(item);
        retVal[key] = retVal[key] || [];
        retVal[key].push(item);
    });
    return retVal;
}

function getTime(str) {
    const regex = /([0-9]{1,2}):([0-9]{2}) .*/;
    const matches = str.match(regex);
    return [matches[1], matches[2]];
}

var elements = document.getElementsByClassName("o-card__table");
elements = [...elements];

var data = elements.map(e => {
    const fromText = e.querySelectorAll(".a-time__time-value")[0].innerText;
    const toText = e.querySelectorAll(".a-time__time-value")[1].innerText;

    return {
        date: e.querySelector(".a-time__date").innerText,
        from: getTime(fromText),
        to: getTime(toText)
    }
});

var grouped = groupBy(data, x => x.date);

Object.keys(grouped).forEach(key => {
    var array = grouped[key];
    grouped[key] = array.sort(x => x.from[0]);
})

var container = document.createElement("div");
container.id = "jb-container";

document.body.appendChild(container);

Object.keys(grouped).map(key => {
    const dayContainer = document.createElement("div");
    dayContainer.id = "day-" + key;
    container.appendChild(dayContainer);
    
})