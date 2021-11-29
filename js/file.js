/* Show Search Words */

let searchBox = document.querySelector("header .search-box");
let audioBox = document.querySelector("header .audio-box");
let appsBox = document.querySelector("header .boxes");
let settingBox = document.querySelector("header .settings");
let appList = document.querySelector(".apps-setting");
let bulletSettings = document.querySelector(".bullet-setting");

let allSettings = [searchBox, audioBox, appsBox, settingBox];
let allChildren = [
    document.querySelector("header .search-box .search-word"),
    document.querySelector("header .audio-box .audio-word"),
    document.querySelector("header .boxes .apps"),
    document.querySelector("header .settings .setting-box")
];

allSettings.forEach((oneSetting, index) => {
    oneSetting.addEventListener("mouseover", (e) => {
        let message = allChildren[index];
        message.classList.add("show")
    });
})
allSettings.forEach((oneSetting, index) => {
    oneSetting.addEventListener("mouseout", (e) => {
        let message = allChildren[index];
        message.classList.remove("show")
    });
})

// Show Settings Div

appsBox.onclick = function() {
    appList.classList.toggle("open");
    bulletSettings.classList.remove("open")
}
settingBox.onclick = function() {
    bulletSettings.classList.toggle("open");
    appList.classList.remove("open")
}

// End Settings Div

/* End Search Words */

/* Change Theme Color */

let colorsList = document.querySelectorAll(".color-setting p");
let localMainColor = localStorage.getItem("local-main");
let localAsideColor = localStorage.getItem("local-aside");
let localHeadColor = localStorage.getItem("local-head");
let localBoxesColor = localStorage.getItem("local-boxes");
let localTextColor = localStorage.getItem("local-text");
let localActiveColor = localStorage.getItem("local-active");

colorsList.forEach((oneColor) => {
    oneColor.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main--color", e.target.dataset.main);
        document.documentElement.style.setProperty("--aside--color", e.target.dataset.aside);
        document.documentElement.style.setProperty("--head--color", e.target.dataset.head);
        document.documentElement.style.setProperty("--boxes--color", e.target.dataset.boxes);
        document.documentElement.style.setProperty("--text--color", e.target.dataset.text);
        document.documentElement.style.setProperty("--active--color", e.target.dataset.active);
        localStorage.setItem("local-main", e.target.dataset.main);
        localStorage.setItem("local-aside", e.target.dataset.aside);
        localStorage.setItem("local-head", e.target.dataset.head);
        localStorage.setItem("local-boxes", e.target.dataset.boxes);
        localStorage.setItem("local-text", e.target.dataset.text);
        localStorage.setItem("local-active", e.target.dataset.active);
    })
})

// Set local storage

if (localMainColor !== null) {
    document.documentElement.style.setProperty("--main--color", localMainColor);
    document.documentElement.style.setProperty("--aside--color", localAsideColor);
    document.documentElement.style.setProperty("--head--color", localHeadColor);
    document.documentElement.style.setProperty("--boxes--color", localBoxesColor);
    document.documentElement.style.setProperty("--text--color", localTextColor);
    document.documentElement.style.setProperty("--active--color", localActiveColor);
}

/* End Theme Color */

/* Swipe Right and left */

let rightButton = document.querySelector(".head-bottom .swipe-right");
let leftButton  = document.querySelector(".head-bottom .swipe-left");
let middleBoxes = document.querySelector(".head-bottom .mid-boxes");
let clickableBoxes = document.querySelectorAll(".head-bottom .mid-boxes .clickable-box");

function swipeRight() {
    rightButton.addEventListener("click", (e) => {
        middleBoxes.style.width = "981.92px";
        middleBoxes.style.margin = "0 0 0 40px";
        leftButton.style.display = "block"
        middleBoxes.scrollBy(100, 0)
    })
}
swipeRight();

function swipeLeft() {
    leftButton.addEventListener("click", (e) => {
        middleBoxes.scrollBy(-100, 0);
    })
}
swipeLeft();

/* End Swipe Right and left */

/* Change the active style */

clickableBoxes.forEach((oneBox) => {
    oneBox.addEventListener("click", (e) => {
        clickableBoxes.forEach((element) => {
            element.classList.remove("active")
        })
        e.target.parentElement.classList.add("active")
    })
})

/* End changing the active style */

/* Get Api From Youtube */

let apiKey = "AIzaSyBwzVzm1OJQzVLGLfyLI-mjnNrAkeX4sFM";
let channelURL = "https://www.googleapis.com/youtube/v3/channels";
let videoURL = "https://www.googleapis.com/youtube/v3/videos";

// Channels Settings

let channelsId = [
    "UC80PWRj_ZU8Zu0HSMNVwKWw",
    "UC29ju8bIPH5as8OGnQzwJyA",
    "UCcabW7890RKJzL968QWEykA",
    "UCLv7Gzc3VTO6ggFlXY0sOyw",
    "UCcabW7890RKJzL968QWEykA",
    "UC8butISFwT-Wl7EV0hUK0BQ",
    "UCqZQJ4600a9wIfMPbYc60OQ",
    "UCJyEBMU1xVP2be1-AoGS1BA",
    "UCJQJ4GjTiq5lmn8czf8oo0Q",
    "UC8butISFwT-Wl7EV0hUK0BQ",
    "UCSNkfKl4cU-55Nm-ovsvOHQ",
    "UCcabW7890RKJzL968QWEykA",
    "UCFbNIlppjAuEX4znoulh0Cw",
    "UCDCHcqyeQgJ-jVSd6VJkbCw",
    "UCoyaxd5LQSuP4ChkxK0pnZQ",
    "UC29ju8bIPH5as8OGnQzwJyA"
];
let oneChannel;

// Videos Settings

let videosId = [
    "QFaFIcGhPoM",
    "VfGW0Qiy2I0",
    "IFPedSR9wNU",
    "3_o0-zPRQqw",
    "Fa6Jq0Iue3U",
    "GZvSYJDk-us",
    "x3c1ih2NJEg",
    "5o8CwafCxnU",
    "mpQZVYPuDGU",
    "Uszj_k0DGsg",
    "6QAELgirvjs",
    "zsKs38dwPZk",
    "iiADhChRriM",
    "c5GAS_PMXDs",
    "SYsi5QuOJNE",
    "4sosXZsdy-s"
];
let oneVideo;

let logos = [];
let frames = [];
let titles = [];
let descriptions = [];

for (oneChannel in channelsId) {
    let channelOption = {
        part: "snippet",
        key: apiKey,
        id: channelsId[oneChannel],
        maxResults: 20
    };
    $.ajax({
        url: channelURL,
        async: false,
        cache: false,
        type: "GET",
        data: channelOption,
        success: (data, status) => {
            logos.push(data.items[0].snippet.thumbnails.high.url);
        },
        error: (xhr, status, err) => {
            console.log(xhr);
            console.log(status);
            console.log(err);
        }
    })
}
for (oneVideo in videosId) {
    let videoOptions = {
        part: "snippet",
        key: apiKey,
        id: videosId[oneVideo],
        maxResults: 20
    };
    $.ajax({
        url: videoURL,
        async: false,
        cache: false,
        type: "GET",
        data: videoOptions,
        success: (data, status) => {
            frames.push(data.items[0].snippet.thumbnails.high.url);
            titles.push(data.items[0].snippet.title.substring(0, 50));
            descriptions.push(data.items[0].snippet.channelTitle);
        },
        error: (xhr, status, err) => {
            console.log(xhr);
            console.log(status);
            console.log(err);
        }
    })
}

$(document).ready(() => {
    let logo = logos;
    let frame = frames;
    let title = titles;
    let description = descriptions;
    let x;
    for (x in logo, frame, title, description, videosId) {
        $(".videos").append(
            `<div class="video">
                <div class="frame">
                    <a href="https://www.youtube.com/watch?v=${videosId[x]}" target="_blank"><img src="${frame[x]}" alt="Video" width="100%" height="100%"/></a>
                </div>
                <div class="thumbnail flex">
                    <div class="logo">
                        <img src="${logo[x]}" alt="Logo"/>
                    </div>
                    <div class="writing">
                        <h5>${title[x]}</h5>
                        <p>${description[x]}</p>
                    </div>
                </div>
            </div>`
        )
    }
});

/* End Api From Youtube */

/* Hover on Aside List */

let asideList = document.querySelectorAll(".aside-main .one");

asideList.forEach((oneList) => {
    oneList.addEventListener("click", (e) => {
        asideList.forEach((element) => {
            element.classList.remove("active")
        })
        e.target.parentElement.classList.add("active")
    })
})

/* End Hover on Aside List */

/* Start Options For Media Query */

let channelsLogos = document.querySelectorAll(".group-three .one img");

channelsLogos.forEach((oneLogo) => {
    oneLogo.addEventListener("click", (e) => {
        window.open(e.target.className)
    })
})

if (window.innerWidth < 576) {
    function showSearchInput() {
        let searchButton = document.querySelector(".search-box");
        let searchInput = document.querySelector(".head-left input");
        let audioButton = document.querySelector(".audio-box");
        let topRightDiv = document.querySelector(".head-right")
        searchButton.addEventListener("click", (e) => {
            e.preventDefault();
            searchInput.style.display = "block";
            searchInput.style.width = "180px";
            audioButton.style.display = "none";
            topRightDiv.style.display = "none";
        })
    }
    showSearchInput();
}

/* End Options For Media Query */