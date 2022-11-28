const lfc = {
    about: "<h2>about Us </h2> <p>Live Fact Checker is a website that checks facts and exposes Fake Twitter Account / Propaganda and misleading people. we are trying to give everyone accurate and pure content </p> <p>some Fake Twitter Account are spreading false information with fake profile. we expose them with evidences and find truth.</p> <p>exposing terrorists and traitors is the main goal of this website</p>",
};

const data = [
    {
        index: 0,
        title: "None",
        description: "None Description",
        time: 1,
    },
    {
        index: 1,
        title: "Fake Twitter Account Promoting Love Jihad",
        description: "<h2> Fake Twitter Account Promoting Love Jihad</h2><p>Fake Twitter Account Promoting Love Jihad By tweeting, she tweeted that can she marry a muslim boy , her tweet is for get attention and increase followers </p> twitter account <a href='https://twitter.com/mahiRajput_'>@MahiRajput_</a> is a fake account using someone's photo from pinterest and promoting Love Jihad </p> <img src='./media/img/twitter/fakeProfiles/case1/id report.png' height='250px' width='auto' alt='@MahiRajput_ Fake Profile that is promoting Love Jihad' style='margin:30px'> </div>",
        time: 10,
    },
    {
        index: 2,
        title: "Nothing",
        description: "none",
        time: 1,
    }
];

const load = (data) => {
    document.querySelector(".section").innerHTML = data;
}

let index = 0;
let time = 1000;
let maxIndex = 3;


const next = () => {
    if (index < maxIndex) {
        index++;
        if (data[index]) {
            load(data[index]["description"])
        }
    }
}
next();
const prev = () => {
    if (index > 0) {
        index--;
        if (data[index]) {
            load(data[index]["description"])
        }
    }
}
