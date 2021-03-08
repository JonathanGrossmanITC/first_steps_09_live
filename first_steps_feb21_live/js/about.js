const snacks = ["peanut butter", "bananas", "chocolate"];

for (let i = 0; i < snacks.length; i++) {
  // This part is the code that runs each time it loops through
  console.log(i, snacks[i]);
}

const string = "This is a string.";

for (let i = 0; i < string.length; i++) {
  if (string[i] === "s") {
    console.log(i, string[i]);
  } else if (string[i] == "g") {
    console.log("gee whiz");
  }
}

const playerName = "Lebron";
const x = 5;

if (playerName === "LeBron" && x === 5) {
  console.log(playerName);
} else {
  console.log("Something else");
}

// if (playerName === "LeBron" || x === 5) {
//   console.log(playerName);
// } else {
//   console.log("Something else");
// }

// const myLimit = 10;
// const x = 8;
// if (x + 3 > myLimit) {
//   // do something
// }

(() => {
  console.log("hello");
  const yourFunction = () => {};
})();

const returnFavoriteNumber = (favoriteNumber) => {
  return "Your favorite number is " + favoriteNumber.toString();
};

function returnHerFunction() {
  // This is the older syntax, but still okay to use
  console.log("Cool");
  return "Her function";
}

returnHerFunction();

// Printing the function definition
// console.log(returnFavoriteNumber);

// Printing function return value
console.log(returnFavoriteNumber(2));

// Other function calls of the same function
// returnFavoriteNumber(5);
// returnFavoriteNumber(7);

// Saving function return value
// const myString = returnFavoriteNumber(2);
// console.log(myString);

const greetUser = (username) => {
  console.log("Welcome to ITC, " + username);
};

// greetUser("Rafael");
// greetUser("Prime Minister Netanyahu");
// greetUser();
const rafaelArray = ["steak", "schnitzel", "lasagna", "peanut butter"];

// Live code task 2
const buildSentence = (foodArray) => {
  let intro = "When I'm really hungry, I like to eat ";
  for (let i = 0; i < foodArray.length; i++) {
    if (i !== foodArray.length - 1) {
      intro = intro + foodArray[i] + ", ";
    } else if (i === foodArray.length - 1) {
      intro = intro + "or " + foodArray[i] + ".";
    }
  }

  const sentenceHTML = document.getElementById("sentence");
  console.log(sentenceHTML.textContent);
  sentenceHTML.textContent = intro;
  // return intro;
};

buildSentence(rafaelArray);

// const sentence = buildSentence(rafaelArray);
// console.log(sentence);

// Fetch examples
const URL = "https://dog.ceo/api/breeds/image/random";
// const URL = "https://api.github.com/users/jonathangrossmanitc";

console.log("above the fetch");
fetch(URL).then((response) => {
  console.log("i'm handling the promise");
  response.json().then((data) => {
    console.log("i'm handling the json promise");
    if (data["status"] === "success") {
      const dogPhoto = document.getElementById("dogPhoto");
      // console.log(dogPhoto);
      dogPhoto.src = data["message"];
      // console.log(data["message"]);
      const loader = document.getElementById("loader");
      // console.log(loader);
      // loader.classList.add("not-loading");
      loader.classList.remove("loading");
    }
    // console.log(data);
  });
});
console.log("below the fetch");

// const jgGithub = {
//   login: "JonathanGrossmanITC",
//   id: 61012548,
//   node_id: "MDQ6VXNlcjYxMDEyNTQ4",
//   avatar_url: "https://avatars.githubusercontent.com/u/61012548?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/JonathanGrossmanITC",
//   html_url: "https://github.com/JonathanGrossmanITC",
//   followers_url: "https://api.github.com/users/JonathanGrossmanITC/followers",
//   following_url:
//     "https://api.github.com/users/JonathanGrossmanITC/following{/other_user}",
//   gists_url: "https://api.github.com/users/JonathanGrossmanITC/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/JonathanGrossmanITC/starred{/owner}{/repo}",
//   subscriptions_url:
//     "https://api.github.com/users/JonathanGrossmanITC/subscriptions",
//   organizations_url: "https://api.github.com/users/JonathanGrossmanITC/orgs",
//   repos_url: "https://api.github.com/users/JonathanGrossmanITC/repos",
//   events_url:
//     "https://api.github.com/users/JonathanGrossmanITC/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/JonathanGrossmanITC/received_events",
//   type: "User",
//   site_admin: false,
//   name: null,
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 22,
//   public_gists: 0,
//   followers: 2,
//   following: 0,
//   created_at: "2020-02-13T12:34:09Z",
//   updated_at: "2021-03-08T10:56:10Z",
// };

// console.log(jgGithub["login"]);
// console.log(jgGithub["avatar_url"]);

const breedList = {
  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    australian: ["shepherd"],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    buhund: ["norwegian"],
    bulldog: ["boston", "english", "french"],
    bullterrier: ["staffordshire"],
    cairn: [],
    cattledog: ["australian"],
    chihuahua: [],
    chow: [],
    clumber: [],
    cockapoo: [],
    collie: ["border"],
    coonhound: [],
    corgi: ["cardigan"],
    cotondetulear: [],
    dachshund: [],
    dalmatian: [],
    dane: ["great"],
    deerhound: ["scottish"],
    dhole: [],
    dingo: [],
    doberman: [],
    elkhound: ["norwegian"],
    entlebucher: [],
    eskimo: [],
    finnish: ["lapphund"],
    frise: ["bichon"],
    germanshepherd: [],
    greyhound: ["italian"],
    groenendael: [],
    havanese: [],
    hound: [
      "afghan",
      "basset",
      "blood",
      "english",
      "ibizan",
      "plott",
      "walker",
    ],
    husky: [],
    keeshond: [],
    kelpie: [],
    komondor: [],
    kuvasz: [],
    labrador: [],
    leonberg: [],
    lhasa: [],
    malamute: [],
    malinois: [],
    maltese: [],
    mastiff: ["bull", "english", "tibetan"],
    mexicanhairless: [],
    mix: [],
    mountain: ["bernese", "swiss"],
    newfoundland: [],
    otterhound: [],
    ovcharka: ["caucasian"],
    papillon: [],
    pekinese: [],
    pembroke: [],
    pinscher: ["miniature"],
    pitbull: [],
    pointer: ["german", "germanlonghair"],
    pomeranian: [],
    poodle: ["miniature", "standard", "toy"],
    pug: [],
    puggle: [],
    pyrenees: [],
    redbone: [],
    retriever: ["chesapeake", "curly", "flatcoated", "golden"],
    ridgeback: ["rhodesian"],
    rottweiler: [],
    saluki: [],
    samoyed: [],
    schipperke: [],
    schnauzer: ["giant", "miniature"],
    setter: ["english", "gordon", "irish"],
    sheepdog: ["english", "shetland"],
    shiba: [],
    shihtzu: [],
    spaniel: [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh",
    ],
    springer: ["english"],
    stbernard: [],
    terrier: [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire",
    ],
    vizsla: [],
    waterdog: ["spanish"],
    weimaraner: [],
    whippet: [],
    wolfhound: ["irish"],
  },
  status: "success",
};
