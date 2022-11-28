export const sectionIndex = [
    {
        index: 0,
        title: "Welcome",
        source: null,
        time: 1,
    },
    {
        index: 1,
        title: "Fake Twitter Acccount Promoting Love Jihad",
        source: "",
        time: 3,
    }
];


export let index = 0;
export let time = 1000; // in millisecond
export let maximumIndex = 100;


export const next = () => {
    if (index < maximumIndex) {
        index++;
    }
}
export const prev = () => {
    if (index != 0 && index > 0) {
        index--;
    }
}

export const load = (data) => {
    document.querySelector(element).innerHTML = data;
}

export const indexing = () => {

    setTimeout(() => {
        if (index < maximumIndex) { next(); }
        else { index = 0; }

    }, sectionIndex[index]["time"]);

}