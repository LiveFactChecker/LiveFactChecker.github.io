const lfc = {

    about: "<h2>About US </h2> <p>Live Fact Checker website created in efforts  to provide accurate information and expose Anti indian people and their propaganda  / Agenda. </p> <p>we shows Fake Twitter accounts / misleading people's tweet with trying to give correct information over that false info.  </p> <p> Misleading and misinfo spreading twitter / Facebook and social media accounts will be published on our news website with evidence and we will provide link about that post did by user deliberately or not that misleading people by false information, sometimes we might not provide link or link might be not reached to the correct destination due to delete post by user, in case we will also provide screenshot so you can see</p><p>if you find and social account that is spreading false news / propaganda against hinduism or abusing hindus then you can send us that information through email. it is <a href='mailto:livefactchecker@protonmail.com'>@Livefactckecher@protonmail.com</a> </p> ",

    contact: "<h2>Contact US </h2> <p>if you want to send information to live fact checker news website then you should send us through email. an email address is <a href='mailto:livefactchecker@protonmail.com'>@Livefactckecher@protonmail.com </a>. send us inforamation there with attached screenshots or evidence so we can publish after review your information</p> <p>if you find any account is misusing its right on social media by spreading fake news / anti india movement / anti india tweet / posts / comments then please send us information with links and screenshots so we will publish after review </p> <p>follow us on Twitter <a href='https://twitter.com/livefactcheker'>@LiveFactCheker</a></p> <p>Website : <a href='https://livefactchecker.github.io'>https://livefactchecker.github.io</a></p>",

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
        description: "<h2> Fake Twitter Account Promoting Love Jihad</h2><p>Fake Twitter Account Promoting Love Jihad By tweeting, she tweeted that can she marry a muslim boy , her tweet is for get attention and increase followers </p> twitter account <a href='https://twitter.com/mahiRajput_'>@MahiRajput_</a> is a fake account using someone's photo from pinterest and promoting Love Jihad </p> <img src='./media/img/twitter/fakeProfiles/case1/id report.png' height='auto' width='90%' alt='@MahiRajput_ Fake Profile that is promoting Love Jihad'> <p>here is a screenshot of that tweet in she asked that she could marry a muslim boy. </p> <p> <img src='./media/img/twitter/fakeProfiles/case1/crime.png' height='auto' width='90%' alt='this fake account's tweet that created controversy'></p><p>this fake account had tweeted same for increase followers in 2021. this account is using someone's pictures in its profile and cover photo. we found that photos on pinterest through help of google lense</p> <p> <img src='./media/img/twitter/fakeProfiles/case1/fake_2.png' height='auto' width='90%' alt='fake twitter account using someone's picture'> </p> <p>this account is considered as a fake account for promoting Love Jihad. most of tweets she retweets and write less word </p> <p>tipusultan party's member's tweet is retweeted by her mean you can understand that she might be abdul behind curtain </p> <p> <img src='./media/img/twitter/fakeProfiles/case1/fake_3.png' alt='fake account' height='auto' width='90%'> </div>",
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
