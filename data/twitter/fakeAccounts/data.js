const lfc = {

    about: "<h2>About US </h2> <p>Live Fact Checker website created in efforts  to provide accurate information and expose Anti indian people and their propaganda  / Agenda. </p> <p>we shows Fake Twitter accounts / misleading people's tweet with trying to give correct information over that false info.  </p> <p> Misleading and misinfo spreading twitter / Facebook and social media accounts will be published on our news website with evidence and we will provide link about that post did by user deliberately or not that misleading people by false information, sometimes we might not provide link or link might be not reached to the correct destination due to delete post by user, in case we will also provide screenshot so you can see</p><p>if you find and social account that is spreading false news / propaganda against hinduism or abusing hindus then you can send us that information through email. it is <a href='mailto:livefactchecker@protonmail.com'>Livefactckecher@protonmail.com</a> </p> ",

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
        title: "Fake Twitter Promoting Love Jihad",
        description: "<h2>Fake Twitter Account Promoting Love Jihad</h2> <img src='./media/img/twitter/fakeProfiles/case1/id report.png' height='auto' width='90%' alt='@MahiRajput_ Fake Profile that is promoting Love Jihad'><p> a Twitter Account <a href='https://twitter.com/mahirajput_'> @MahiRajput_</a>is considered a Fake account in our investigation as it is using fake photos of someone that we found on pinterest. this twitter account tweeted in which she asked that she could marry a muslim boy. through that tweet she is promoting love jihad and blacking name of Rajput clan.<p><img src='./media/img/twitter/fakeProfiles/case1/crime.png' height='auto' width='90%' alt='this fake account's tweet that created controversy' /> </p> she might not be a real account, her profile photos and cover photos are someone's taken from pinterest</p><p>here is a proof. we found similar photos through google lense and taken screenshot to show you </p> <p> <img src='./media/img/twitter/fakeProfiles/case1/fake_2.png' height='auto' width='90%' alt='fake twitter account using someone's picture'> </p> <p> <img src='./media/img/twitter/fakeProfiles/case1/fake_3.png' alt='fake account' height='auto' width='90%'></p> ",
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
