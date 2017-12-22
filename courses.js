// Countries
var branch_arr = new Array("Pure Science", "Engineering","Medical", "Business and Management","Hospitality and Tourism","Media and Journalism","Design","Education","Law");

// States
var course = new Array();
course[0] = "";
course[1] = "Astronomy|Physics|Chemistry|Biology|Mathematics|Life Science|Earth Science|Physical Geography|Food and Nutrition|";
course[2] = "Mechanical|Computer Science|Information Technology|Electrical| Electronics and Communication|Electrical and Electronics | Civil|Aeronautical|Aerospace|Mechatonics|Chemical|Petroleum|Instrumenation and Control| Biotechnology| Information and Communication| Agricultural|Metallurgical|Textile|Marine|Nano Technology|";
course[3] = "Anatomy|Dentistry|Nursing|Pharmacy|Psychology|Endocrinology|Radiology|Ophthalmology|Ayurveda|Physiotherapy|Homeopathy|Otolaryngology ear, nose and throat|Urology|";
course[4] = "Business Management|Accounting|Economics|Finance|E-Commerce|Human Resource Management|Office Administration|Marketing|Quality Management|Transportation and Logistics|Retail";
course[5] = "Travel and Tourism|Hospitality|Hotel Management|Catering|Leisure Management|Chef|";
course[6] = "Anthropology|Film & Television| Human Geography |International Development |International relations| Journalism| Library Studies |Linguistics |Media Photography |Politics |Public Administration |Social Sciences |Social Work|Writer and Poet";
course[7] = "Architecture|Built Environment |Construction |Maintenance Services| Property Management |Surveying";
course[8] = "Specialised Teaching |Teacher Training / PGCE|Child Education|Career Advice |Childhood Education |Coaching Education |Learning Education Management| Education Research |Educational Psychology";
course[9] = "Civil Law |Criminal Law |International Law |Legal Advice |Legal Studies| Public Law";

function populateCourse(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select Course', '');
    stateElement.selectedIndex = 0;

    var state_arr = course[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateBranch(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select Branch', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < branch_arr.length; i++) {
        countryElement.options[countryElement.length] = new Option(branch_arr[i], branch_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateCourse(countryElementId, stateElementId);
        };
    }
}