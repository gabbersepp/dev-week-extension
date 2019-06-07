import { ITalk } from './TypeDefinitions';

// quick and dirty hack

function groupBy(items: any, selector: any) {
    const retVal: any = {};
    items.forEach((item: any) => {
        const key = selector(item);
        retVal[key] = retVal[key] || [];
        retVal[key].push(item);
    });
    return retVal;
}

function getTime(str: any) {
    const regex: any = /([0-9]{1,2}):([0-9]{2}) .*/;
    const matches: any = str.match(regex);
    return [matches[1], matches[2]];
}

export function getData(): {[key: string]: ITalk[]} {
    var elements: any = document.getElementsByClassName("o-card__table");´
    //console.log(elements);
    elements = [...elements];
    
    var data: any = elements.map((e: any) => {
        const fromText = e.querySelectorAll(".a-time__time-value")[0].innerText;
        const toText = e.querySelectorAll(".a-time__time-value")[1].innerText;
    
        return {
            date: e.querySelector(".a-time__date").innerText,
            from: getTime(fromText),
            to: getTime(toText),
            title: e.querySelector(".o-card__title").innerText
        }
    });
    
    const grouped: any = groupBy(data, (x: any) => x.date);
    
    Object.keys(grouped).forEach(key => {
        const array: any = grouped[key];
        grouped[key] = array.sort((x: any) => x.from[0]);
    });

    return grouped;
}

