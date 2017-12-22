// Countries
var  state= new Array("Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha (Orissa)","Punjab","Chandigardh","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh");
// States
var city = new Array();
city[0] = "";
city[1] = "Hyderabad| Visakhapatnam |Vijayawada| Warangal |Guntur |Nellore| Rajahmundry| Kurnool| Tirupati |Kakinada |Kadapa| Anantapur| Nizamabad |Karimnagar |Khammam| Ramagundam| Eluru |Vizianagaram| Proddatur| Nandyal| Mahbubnagar |Ongole| Adoni| Madanapalle| Chittoor|";
city[2] = "Aalo|Anini|Basar|Boleng|Bomdila|Changlang|Daporijo|Deomali|Dirang  |Hawai  |Itanagar|Jairampur|Khonsa  |Koloriang|Longding|Miao|Naharlagun |Namsai |Pasighat|Roing|Rupa|Sagalee|Seppa  |Tawang |Tezu|Yingkiong|Ziro|";

city[3] = "Guwahati|Silchar|Dibrugarh|Jorhat|Nagaon|Tinsukia|Tezpur|";

city[4] = "Araria |Arwal  |Aurangabad |Banka  |Begusarai  |Bhagalpur  |Bhojpur    |Buxar  |Darbhanga  |Gaya   |Gopalganj  |Jamui  |Jehanabad  |Kaimur |Katihar    |Khagaria   |Kishanganj |Lakhisarai |Madhepura  |Madhubani  |Munger |Muzaffarpur|Nalanda    |Nawada |Pashchim Champaran|Patna   |Purba Champaran |Purnia    |Rohtas |Saharsa|Samastipur |Saran  |Sheikhpura |Sheohar    |Sitamarhi|Siwan    |Supaul|Vaishali|";

city[5] = "Raipur|Bilaspur|Bastar|Jashpur|Durg|Koriya|Mahasamund|Dantewada|Dhamtari|Janjgir-Champa|Kanker|Kawardha|Korba|Raigarh|Rajnandgaon|Surguja|";

city[6] = "Delhi|";

city[7] = "Bicholim   |Canacona   |Cuncolim   |Curchorem  |Mapusa |Margao |Mormugao   |PanajiCapital |Pernem  |Ponda  |Quepem |Sanguem    |Sanquelim|Valpoi|";

city[8] = "Ahmedabad|Somnath|Dwarka|Sasangir|Surat|Bhuj|Gandhinagar|Junagadh|Bhavnagar|Vadodara|Patan|Rajkot|Bharuch|Gondal|Jamnagar|Little Rann of Kutch|Lothal|Mandvi|Modhera|Palitana|Porbandar|Uteliya|Veraval|Champaner and Pavagadh|Zainabad|";

city[9] = "Faridabad  |Gurgaon    |Panipat    |Ambala |Yamunanagar    |Rohtak |Hisar  |Karnal |Sonipat    |Panchkula  |Bhiwani    |Sirsa  |Bahadurgarh|Jind|Thanesar|Kaithal|Rewari|Palwal|";

city[10] = "Shimla|Kufri|Kullu Manali|Rohtang Pass|Dharamshala|Dalhousie|Khajjiar|Chail|Kasauli|Lahaul and Spiti|Solan|Palampur|Chamba|Kangra Valley|Hamirpur|Kinnaur|Mandi|Nahan|Nalagarh|Parwanoo|Pathankot|Pragpur|Una|Manali|Kullu|Spiti|";
city[11] = "Jammu|Srinagar|Leh Ladakh|Gulmarg|Sonamarg|Pahalgam|";
city[12] = "Jamshedpur    |Dhanbad    |Ranchi |Bokaro Steel City|Deoghar  |Phusro |Hazaribagh |Giridih    |Ramgarh    |Medininagar|Chirkunda|";
city[13] = "Bagalkot  |Bangalore|Bangalore|Belgaum    |Bellary    |Bidar  |Bijapur    |Chamarajanagar |Chikkaballapura (Chikballapur)|Chikmagalur (Chikkamagaluru)|Chitradurga    |Dakshina Kannada|Davanagere    |Dharwad    |Gadag  |Gulbarga   |Hassan |Haveri |Kodagu |Kolar  |Koppal |Mandya |Mysore |Raichur    |Ramanagara |Shimoga    |Tumkur |Udupi  |Uttara Kannada|Yadgir  |Karnataka|";
city[14] = "Alleppey|Kochi|Kovalam|Kumarakom|Munnar|Periyar|Thiruvananthapuram|Wayanad|Idukki|Bhoothathankettu|Cape Comorin|Aranmula|Bekal|Chennamangalam|Chinnar|Anakkayam|Dharmadam Island|Edakkal|Ernakulam|Guruvayur|Kadalundi|Kannur|Kasargod|Kodanad|Kollam|Kottayam|Kozhikode|Kuthiramalika|Malampuzha|Malappuram|Neyyar Dam|Ochira|Pakshipathalam|Palakkad|Palaruvi|Pamba|Pandalam|Kodungalloor|Pathiramanal|Payyambalam Beach|Peppara|Ponmudi|Pookot Lake|Ranipuram|Sabrimala|Thalassery|Thangasseri|Thekkady|Thurineli|Thrissur|Tirur|Valapattanam|Valiyaparamba|Varkala|Veli|Vembanad Lake|Mararikulam|Akkulam|Agasthyakoodam|";
city[15] = "Bandhavgarh|Bhopal|Gwalior|Kanha|Khajuraho|Ujjain|Sanchi|Amarkantak|Baihar|Bhedaghat|Burhanpur|Chanderi|Dhar|Indore|Jabalpur|Maheshwar|Mandu|Omkareshwar|Orchha|Pachmarhi|Pench|Shivpuri|Sonagir|Bhojpur|Chitrakoot|Bhimbetka|";
city[16] = "Mumbai |Pune  |Nagpur     |Thane   |Nashik |Pimpri-Chinchwad|Aurangabad |Solapur |Kalyan-Dombivali|Vasai-Virar |Navi Mumbai|Amravati |Mira-Bhayandar|Akola |Bhiwandi-Nizampur |Dhule |Jalgaon |Nanded-Waghala |Kolhapur|Latur |Panvel |Ulhasnagar |Sangli-Miraj & Kupwad|Malegaon |Ahmednagar |Ichalkaranji |Chandrapur |Parbhani |Ambernath |";
city[17] = "Bishnupur |Chandel    |Churachandpur|Imphal |Senapati |Tamenglong |Thoubal    |Ukhrul |Manipur|";
city[18] = "East Garo Hills|East Khasi Hills|Jaintia Hills|Ribhoi |South Garo Hills|West Garo Hills   |West Khasi Hills|";
city[19] = "Aizawl|Champhai|Kolasib   |Lawngtlai  |Lunglei    |Mamit  |Saiha  |Serchhip|";
city[20] = "Dimapur   |Kiphire    |Kohima |Longleng   |Mokokchung |Mon    |Peren  |Phek   |Tuensang|Wokha |Zunheboto  |Nagaland   |";
city[21] = "Bhubaneswar   |Cuttack    |Rourkela   |Brahmapur|Sambalpur|Puri   |Balasore|Bhadrak   |Baripada   |Jharsuguda|Jeypore |Dhenkanal  |Barbil|Angul|Jajpur|";
city[22] = "Ludhiana|Amritsar|Jalandhar|Patiala   |Bathinda   |Hoshiarpur |Mohali |Batala |Pathankot|Moga |Abohar |Malerkotla |Khanna |Phagwara   |Muktasar   |Barnala    |Rajpura    |Firozpur|Kapurthala    |Sunam|";
city[23] = "Chandigardh|";
city[24] = "Jaipur    |Jodhpur    |Kota   |Bikaner    |Ajmer  |Udaipur|Bhilwara   |Alwar  |Bharatpur|Sikar    |Sri Ganganagar|pali    |chittorgarh    |Tonk   |Kishangarh|Beawar  |Hanumangarh    |dholpur    |Gangapur|Sawai Madhopur|churu  |Jhunjhunu|";
city[25] = "Gangtok|Pelling|Lachung|Lachen|Namchi|Ravangla|";
city[26] = "Hyderabad |Warangal|Nizamabad|Khammam |Karimnagar |Ramagundam |Mahbubnagar    |Nalgonda   |Adilabad   |Siddipet   |Miryalaguda    |Suryapet   |";
city[27] = "Agartala  |Dharmanagar    |Udaipur    |Kailasahar |Bishalgarh |Teliamura  |Khowai |Belonia    |";
city[28] = "Kanpur    |Lucknow    |Ghaziabad|Agra |Varanasi|Meerut    |Allahabad|Bareilly|Aligarh |Moradabad  |Saharanpur |Gorakhpur  |Faizabad   |Firozabad|Jhansi   |Muzaffarnagar|Mathura  |Budaun |Rampur |Shahjahanpur   |Farrukhabad-cum-Fategarh|Maunath |Hapur    |Noida  |Etawah |Mirzapur-cum-Vindhyachal|Bulandshahr   |Sambhal    |Amroha |Hardoi |Fatehpur   |Raebareli|Orai |Sitapur    |Bahraich   |Modinagar|Unnao    |Jaunpur    |Lakhimpur|Hathras  |Banda  |Pilibhit   |Mughalsarai    |Barabanki  |Khurja |Gonda  |Mainpuri   |Lalitpur   |Etah   |Deoria |Ujhani |Ghazipur   |Sultanpur  |Azamgarh   |Bijnor |Sahaswan   |Basti  |Chandausi  |Akbarpur|Ballia    |Tanda  |Greater Noida|Shikohabad   |Shamli|Khair|Kasganj|";


function populateCity(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select city', '');
    stateElement.selectedIndex = 0;

    var state_arr = city[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateState(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select Branch', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < state.length; i++) {
        countryElement.options[countryElement.length] = new Option(state[i], state[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateCity(countryElementId, stateElementId);
        };
    }
}