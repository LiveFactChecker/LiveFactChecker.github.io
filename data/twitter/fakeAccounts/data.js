export const data = [
    {
        index: 0,
        source: "",
        time: 1,
    },
    {
        index: 1,
        title: "Fake Twitter Account Promoting Love Jihad",
        description: "<p>Fake Twitter Account Promoting Love Jihad By tweeting, she tweeted that can she marry a muslim boy , her tweet is for get attention and increase followers </p> twitter account <a href='https://twitter.com/mahiRajput_'>@MahiRajput_</a> is a fake account using someone's photo from pinterest and promoting Love Jihad <p>",
        time: 5,
    },
    {
        index: 2,
        title: "Nothing",
        description: "none",
        time: 4,
    }
];


export let play = true;

export let index = 0;

export let maxIndex = data.length;

export let time = 1000;

export const next = () => {
    if (index < maxIndex) {
        index++;
    }
}

export const prev = () => {
    if (index > 0) {
        index--;
    }
}


