const tagList = document.querySelector(".tagList");
const inputElement = document.querySelector(".tag-input");
const countries = [
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
const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;
const BACKSPACE = 8;

tagList.addEventListener("click", deleteTag);

inputElement.addEventListener("keydown", (event) => {
    if (event.key === ',' && inputElement.value != "") {
        createTag();
        event.preventDefault();
        clearList();
    }
    if (event.keyCode === BACKSPACE && inputElement.value === "") {
        let tags = document.querySelectorAll('.tag');
        if (tags.length) {
            tagList.removeChild(tags[tags.length - 1]);
        }
    }
});

inputElement.addEventListener("input", function () {
    clearList();
    if (inputElement.value) {
        let res = findMatch(inputElement.value, countries);
        createList(res);
    }
});

function createTag() {
    let tag = document.createElement('div');
    let deleteButton = document.createElement('span');

    tag.className = 'tag';
    tag.innerText = inputElement.value;

    deleteButton.className = 'delete';
    deleteButton.innerHTML = '&times;';
    deleteButton.setAttribute('role', 'button');
    tag.append(deleteButton);
    tagList.append(tag);

    inputElement.value = "";

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
        list.className = 'itemList';
        document.body.append(list);

        let fragment = document.createDocumentFragment();
        arr.forEach(function (el) {
            let li = document.createElement('li');
            li.className = 'item';
            li.textContent = el;
            fragment.append(li)
        })

        list.append(fragment)

        let n = -1;
        inputElement.addEventListener("keydown", function (event) {
            let listItem = document.querySelectorAll(".item");
            switch (event.keyCode) {
                case ARROW_DOWN:
                    n++;
                    if (n >= listItem.length) {
                        n = 0;
                    };
                    changeSelectedElement(listItem, n);
                    break;
                case ARROW_UP:
                    n--;
                    if (n < 0) {
                        n = listItem.length - 1;
                    };
                    changeSelectedElement(listItem, n);
                    break;
                case ENTER:
                    if (listItem[n]) {
                        inputElement.value = listItem[n].innerHTML;
                    };
                    clearList();
                    inputElement.focus();
                    n = -1;
                    break;
                default:
                    break;
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
