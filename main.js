const tagList = document.querySelector(".tagList");
const inp = document.querySelector(".inp");
var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Канада",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "Франция",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Германия",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Италия",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Швеция",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",

    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
tagList.addEventListener("click", deleteTag);

inp.addEventListener("keypress", (event) => {
    if (event.key === "," && inp.value != "") {
        createTag();
        event.preventDefault();
        clearList();
    }
});

inp.addEventListener("input", function () {
    clearList();
    if (inp.value) {
        let res = findMatch(inp.value, countries);
        createList(res);
    }
});

function createTag() {
    let tag = document.createElement("div");
    tag.classList.add("tag");
    let text = document.createElement("div");
    text.innerHTML = inp.value;
    tag.append(text);
    let del = document.createElement("div");
    del.classList.add("delete");
    del.innerHTML = '&#x2716';
    tag.append(del);
    tagList.append(tag);
    inp.value = "";
}


function deleteTag(event) {
    if (event.target.classList.value === "delete") {
        let tag = event.target.parentElement;
        tagList.removeChild(tag);
    }
}


function findMatch(str, arr) {
    return arr.filter(
        (word) => word.slice(0, str.length).toLowerCase() === str.toLowerCase()
    );
}

function createList(arr) {
    if (arr.length) {
        let list = document.createElement("ul");
        list.classList.add("itemList");
        document.body.append(list);
        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement("li");
            li.classList.add("item");
            li.innerHTML = arr[i];
            list.append(li);
        }

        var n = -1;
        const ARROW_DOWN = 40;
        const ARROW_UP = 38;
        const ENTER = 13;
        inp.addEventListener("keydown", function (event) {
            let listItem = Array.from(document.querySelectorAll(".item"));
            if (event.keyCode === ARROW_DOWN) {
                n++;
                if (n >= listItem.length) {
                    n = 0;
                }
                changeSelectedElement(listItem, n)
            }
            if (event.keyCode === ARROW_UP) {
                n--;
                if (n < 0) {
                    n = listItem.length - 1;
                }
                changeSelectedElement(listItem, n)
            }
            if (event.keyCode === ENTER) {
                if (listItem[n]) {
                    inp.value = listItem[n].innerHTML;
                }
                clearList();
                inp.focus();
                n = -1;
            }
        });
    }
}

function changeSelectedElement(list, n) {
    let sel = document.querySelector('.selected');
    if (sel) {
        document.querySelector('.selected').classList.remove("selected")
    }
    if (list[n])
        list[n].classList.add("selected");
}

function clearList() {
    let list = document.querySelector(".itemList");
    if (list) {
        document.querySelector("body").removeChild(list);
    }
}
