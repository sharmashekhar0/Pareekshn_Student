import React, { useEffect, useState } from "react";
import leftBg from "../../assets/LoginScreen/leftBg.jpg";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { FaAngleDown } from "react-icons/fa6";
import gender from "../../assets/LoginScreen/gender.png";
import tablet from "../../assets/LoginScreen/Tablet.png";
import message from "../../assets/LoginScreen/message.png";
import date from "../../assets/LoginScreen/date.png";
import userProfile from "../../assets/LoginScreen/userProfile.png";
import viewHideIcon from "../../assets/LoginScreen/View_hide_light.png";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import registerStudent from "../../actions/LoginScreens/register";

function SignUp() {
	const indianStates = [
		{ value: "andhrapradesh", key: "Andhra Pradesh" },
		{ value: "arunachalpradesh", key: "Arunachal Pradesh" },
		{ value: "assam", key: "Assam" },
		{ value: "bihar", key: "Bihar" },
		{ value: "chhattisgarh", key: "Chhattisgarh" },
		{ value: "goa", key: "Goa" },
		{ value: "gujarat", key: "Gujarat" },
		{ value: "haryana", key: "Haryana" },
		{ value: "himachalpradesh", key: "Himachal Pradesh" },
		{ value: "jharkhand", key: "Jharkhand" },
		{ value: "karnataka", key: "Karnataka" },
		{ value: "kerala", key: "Kerala" },
		{ value: "madhyapradesh", key: "Madhya Pradesh" },
		{ value: "maharashtra", key: "Maharashtra" },
		{ value: "manipur", key: "Manipur" },
		{ value: "meghalaya", key: "Meghalaya" },
		{ value: "mizoram", key: "Mizoram" },
		{ value: "nagaland", key: "Nagaland" },
		{ value: "odisha", key: "Odisha" },
		{ value: "punjab", key: "Punjab" },
		{ value: "rajasthan", key: "Rajasthan" },
		{ value: "sikkim", key: "Sikkim" },
		{ value: "tamilnadu", key: "Tamil Nadu" },
		{ value: "telangana", key: "Telangana" },
		{ value: "tripura", key: "Tripura" },
		{ value: "uttarpradesh", key: "Uttar Pradesh" },
		{ value: "uttarakhand", key: "Uttarakhand" },
		{ value: "westbengal", key: "West Bengal" },
		{ value: "andamannicobarislands", key: "Andaman and Nicobar" },
	];

	const states = [
		{
			state: "andhrapradesh",
			districts: [
				"Anantapur",
				"Chittoor",
				"East Godavari",
				"Guntur",
				"Krishna",
				"Kurnool",
				"Nellore",
				"Prakasam",
				"Srikakulam",
				"Visakhapatnam",
				"Vizianagaram",
				"West Godavari",
				"YSR Kadapa",
			],
		},
		{
			state: "arunachalpradesh",
			districts: [
				"Tawang",
				"West Kameng",
				"East Kameng",
				"Papum Pare",
				"Kurung Kumey",
				"Kra Daadi",
				"Lower Subansiri",
				"Upper Subansiri",
				"West Siang",
				"East Siang",
				"Siang",
				"Upper Siang",
				"Lower Siang",
				"Lower Dibang Valley",
				"Dibang Valley",
				"Anjaw",
				"Lohit",
				"Namsai",
				"Changlang",
				"Tirap",
				"Longding",
			],
		},
		{
			state: "assam",
			districts: [
				"Baksa",
				"Barpeta",
				"Biswanath",
				"Bongaigaon",
				"Cachar",
				"Charaideo",
				"Chirang",
				"Darrang",
				"Dhemaji",
				"Dhubri",
				"Dibrugarh",
				"Goalpara",
				"Golaghat",
				"Hailakandi",
				"Hojai",
				"Jorhat",
				"Kamrup Metropolitan",
				"Kamrup",
				"Karbi Anglong",
				"Karimganj",
				"Kokrajhar",
				"Lakhimpur",
				"Majuli",
				"Morigaon",
				"Nagaon",
				"Nalbari",
				"Dima Hasao",
				"Sivasagar",
				"Sonitpur",
				"South Salmara-Mankachar",
				"Tinsukia",
				"Udalguri",
				"West Karbi Anglong",
			],
		},
		{
			state: "bihar",
			districts: [
				"Araria",
				"Arwal",
				"Aurangabad",
				"Banka",
				"Begusarai",
				"Bhagalpur",
				"Bhojpur",
				"Buxar",
				"Darbhanga",
				"East Champaran (Motihari)",
				"Gaya",
				"Gopalganj",
				"Jamui",
				"Jehanabad",
				"Kaimur (Bhabua)",
				"Katihar",
				"Khagaria",
				"Kishanganj",
				"Lakhisarai",
				"Madhepura",
				"Madhubani",
				"Munger (Monghyr)",
				"Muzaffarpur",
				"Nalanda",
				"Nawada",
				"Patna",
				"Purnia (Purnea)",
				"Rohtas",
				"Saharsa",
				"Samastipur",
				"Saran",
				"Sheikhpura",
				"Sheohar",
				"Sitamarhi",
				"Siwan",
				"Supaul",
				"Vaishali",
				"West Champaran",
			],
		},

		{
			state: "chhattisgarh",
			districts: [
				"Balod",
				"Baloda Bazar",
				"Balrampur",
				"Bastar",
				"Bemetara",
				"Bijapur",
				"Bilaspur",
				"Dantewada (South Bastar)",
				"Dhamtari",
				"Durg",
				"Gariyaband",
				"Janjgir-Champa",
				"Jashpur",
				"Kabirdham (Kawardha)",
				"Kanker (North Bastar)",
				"Kondagaon",
				"Korba",
				"Korea (Koriya)",
				"Mahasamund",
				"Mungeli",
				"Narayanpur",
				"Raigarh",
				"Raipur",
				"Rajnandgaon",
				"Sukma",
				"Surajpur  ",
				"Surguja",
			],
		},
		{
			state: "delhi",
			districts: [
				"Central Delhi",
				"East Delhi",
				"New Delhi",
				"North Delhi",
				"North East  Delhi",
				"North West  Delhi",
				"Shahdara",
				"South Delhi",
				"South East Delhi",
				"South West  Delhi",
				"West Delhi",
			],
		},
		{
			state: "goa",
			districts: ["North Goa", "South Goa"],
		},
		{
			state: "gujarat",
			districts: [
				"Ahmedabad",
				"Amreli",
				"Anand",
				"Aravalli",
				"Banaskantha (Palanpur)",
				"Bharuch",
				"Bhavnagar",
				"Botad",
				"Chhota Udepur",
				"Dahod",
				"Dangs (Ahwa)",
				"Devbhoomi Dwarka",
				"Gandhinagar",
				"Gir Somnath",
				"Jamnagar",
				"Junagadh",
				"Kachchh",
				"Kheda (Nadiad)",
				"Mahisagar",
				"Mehsana",
				"Morbi",
				"Narmada (Rajpipla)",
				"Navsari",
				"Panchmahal (Godhra)",
				"Patan",
				"Porbandar",
				"Rajkot",
				"Sabarkantha (Himmatnagar)",
				"Surat",
				"Surendranagar",
				"Tapi (Vyara)",
				"Vadodara",
				"Valsad",
			],
		},
		{
			state: "haryana",
			districts: [
				"Ambala",
				"Bhiwani",
				"Charkhi Dadri",
				"Faridabad",
				"Fatehabad",
				"Gurgaon",
				"Hisar",
				"Jhajjar",
				"Jind",
				"Kaithal",
				"Karnal",
				"Kurukshetra",
				"Mahendragarh",
				"Mewat",
				"Palwal",
				"Panchkula",
				"Panipat",
				"Rewari",
				"Rohtak",
				"Sirsa",
				"Sonipat",
				"Yamunanagar",
			],
		},
		{
			state: "himachalpradesh",
			districts: [
				"Bilaspur",
				"Chamba",
				"Hamirpur",
				"Kangra",
				"Kinnaur",
				"Kullu",
				"Lahaul &amp; Spiti",
				"Mandi",
				"Shimla",
				"Sirmaur (Sirmour)",
				"Solan",
				"Una",
			],
		},
		{
			state: "jammukashmir",
			districts: [
				"Anantnag",
				"Bandipore",
				"Baramulla",
				"Budgam",
				"Doda",
				"Ganderbal",
				"Jammu",
				"Kargil",
				"Kathua",
				"Kishtwar",
				"Kulgam",
				"Kupwara",
				"Leh",
				"Poonch",
				"Pulwama",
				"Rajouri",
				"Ramban",
				"Reasi",
				"Samba",
				"Shopian",
				"Srinagar",
				"Udhampur",
			],
		},
		{
			state: "jharkhand",
			districts: [
				"Bokaro",
				"Chatra",
				"Deoghar",
				"Dhanbad",
				"Dumka",
				"East Singhbhum",
				"Garhwa",
				"Giridih",
				"Godda",
				"Gumla",
				"Hazaribag",
				"Jamtara",
				"Khunti",
				"Koderma",
				"Latehar",
				"Lohardaga",
				"Pakur",
				"Palamu",
				"Ramgarh",
				"Ranchi",
				"Sahibganj",
				"Seraikela-Kharsawan",
				"Simdega",
				"West Singhbhum",
			],
		},
		{
			state: "karnataka",
			districts: [
				"Bagalkot",
				"Ballari (Bellary)",
				"Belagavi (Belgaum)",
				"Bengaluru (Bangalore) Rural",
				"Bengaluru (Bangalore) Urban",
				"Bidar",
				"Chamarajanagar",
				"Chikballapur",
				"Chikkamagaluru (Chikmagalur)",
				"Chitradurga",
				"Dakshina Kannada",
				"Davangere",
				"Dharwad",
				"Gadag",
				"Hassan",
				"Haveri",
				"Kalaburagi (Gulbarga)",
				"Kodagu",
				"Kolar",
				"Koppal",
				"Mandya",
				"Mysuru (Mysore)",
				"Raichur",
				"Ramanagara",
				"Shivamogga (Shimoga)",
				"Tumakuru (Tumkur)",
				"Udupi",
				"Uttara Kannada (Karwar)",
				"Vijayapura (Bijapur)",
				"Yadgir",
			],
		},
		{
			state: "kerala",
			districts: [
				"Alappuzha",
				"Ernakulam",
				"Idukki",
				"Kannur",
				"Kasaragod",
				"Kollam",
				"Kottayam",
				"Kozhikode",
				"Malappuram",
				"Palakkad",
				"Pathanamthitta",
				"Thiruvananthapuram",
				"Thrissur",
				"Wayanad",
			],
		},

		{
			state: "madhyapradesh",
			districts: [
				"Agar Malwa",
				"Alirajpur",
				"Anuppur",
				"Ashoknagar",
				"Balaghat",
				"Barwani",
				"Betul",
				"Bhind",
				"Bhopal",
				"Burhanpur",
				"Chhatarpur",
				"Chhindwara",
				"Damoh",
				"Datia",
				"Dewas",
				"Dhar",
				"Dindori",
				"Guna",
				"Gwalior",
				"Harda",
				"Hoshangabad",
				"Indore",
				"Jabalpur",
				"Jhabua",
				"Katni",
				"Khandwa",
				"Khargone",
				"Mandla",
				"Mandsaur",
				"Morena",
				"Narsinghpur",
				"Neemuch",
				"Panna",
				"Raisen",
				"Rajgarh",
				"Ratlam",
				"Rewa",
				"Sagar",
				"Satna",
				"Sehore",
				"Seoni",
				"Shahdol",
				"Shajapur",
				"Sheopur",
				"Shivpuri",
				"Sidhi",
				"Singrauli",
				"Tikamgarh",
				"Ujjain",
				"Umaria",
				"Vidisha",
			],
		},
		{
			state: "maharashtra",
			districts: [
				"Ahmednagar",
				"Akola",
				"Amravati",
				"Aurangabad",
				"Beed",
				"Bhandara",
				"Buldhana",
				"Chandrapur",
				"Dhule",
				"Gadchiroli",
				"Gondia",
				"Hingoli",
				"Jalgaon",
				"Jalna",
				"Kolhapur",
				"Latur",
				"Mumbai City",
				"Mumbai Suburban",
				"Nagpur",
				"Nanded",
				"Nandurbar",
				"Nashik",
				"Osmanabad",
				"Palghar",
				"Parbhani",
				"Pune",
				"Raigad",
				"Ratnagiri",
				"Sangli",
				"Satara",
				"Sindhudurg",
				"Solapur",
				"Thane",
				"Wardha",
				"Washim",
				"Yavatmal",
			],
		},
		{
			state: "manipur",
			districts: [
				"Bishnupur",
				"Chandel",
				"Churachandpur",
				"Imphal East",
				"Imphal West",
				"Jiribam",
				"Kakching",
				"Kamjong",
				"Kangpokpi",
				"Noney",
				"Pherzawl",
				"Senapati",
				"Tamenglong",
				"Tengnoupal",
				"Thoubal",
				"Ukhrul",
			],
		},
		{
			state: "meghalaya",
			districts: [
				"East Garo Hills",
				"East Jaintia Hills",
				"East Khasi Hills",
				"North Garo Hills",
				"Ri Bhoi",
				"South Garo Hills",
				"South West Garo Hills ",
				"South West Khasi Hills",
				"West Garo Hills",
				"West Jaintia Hills",
				"West Khasi Hills",
			],
		},
		{
			state: "mizoram",
			districts: [
				"Aizawl",
				"Champhai",
				"Kolasib",
				"Lawngtlai",
				"Lunglei",
				"Mamit",
				"Saiha",
				"Serchhip",
			],
		},
		{
			state: "nagaland",
			districts: [
				"Dimapur",
				"Kiphire",
				"Kohima",
				"Longleng",
				"Mokokchung",
				"Mon",
				"Peren",
				"Phek",
				"Tuensang",
				"Wokha",
				"Zunheboto",
			],
		},
		{
			state: "odisha",
			districts: [
				"Angul",
				"Balangir",
				"Balasore",
				"Bargarh",
				"Bhadrak",
				"Boudh",
				"Cuttack",
				"Deogarh",
				"Dhenkanal",
				"Gajapati",
				"Ganjam",
				"Jagatsinghapur",
				"Jajpur",
				"Jharsuguda",
				"Kalahandi",
				"Kandhamal",
				"Kendrapara",
				"Kendujhar (Keonjhar)",
				"Khordha",
				"Koraput",
				"Malkangiri",
				"Mayurbhanj",
				"Nabarangpur",
				"Nayagarh",
				"Nuapada",
				"Puri",
				"Rayagada",
				"Sambalpur",
				"Sonepur",
				"Sundargarh",
			],
		},

		{
			state: "punjab",
			districts: [
				"Amritsar",
				"Barnala",
				"Bathinda",
				"Faridkot",
				"Fatehgarh Sahib",
				"Fazilka",
				"Ferozepur",
				"Gurdaspur",
				"Hoshiarpur",
				"Jalandhar",
				"Kapurthala",
				"Ludhiana",
				"Mansa",
				"Moga",
				"Muktsar",
				"Nawanshahr (Shahid Bhagat Singh Nagar)",
				"Pathankot",
				"Patiala",
				"Rupnagar",
				"Sahibzada Ajit Singh Nagar (Mohali)",
				"Sangrur",
				"Tarn Taran",
			],
		},
		{
			state: "rajasthan",
			districts: [
				"Ajmer",
				"Alwar",
				"Banswara",
				"Baran",
				"Barmer",
				"Bharatpur",
				"Bhilwara",
				"Bikaner",
				"Bundi",
				"Chittorgarh",
				"Churu",
				"Dausa",
				"Dholpur",
				"Dungarpur",
				"Hanumangarh",
				"Jaipur",
				"Jaisalmer",
				"Jalore",
				"Jhalawar",
				"Jhunjhunu",
				"Jodhpur",
				"Karauli",
				"Kota",
				"Nagaur",
				"Pali",
				"Pratapgarh",
				"Rajsamand",
				"Sawai Madhopur",
				"Sikar",
				"Sirohi",
				"Sri Ganganagar",
				"Tonk",
				"Udaipur",
			],
		},
		{
			state: "sikkim",
			districts: [
				"East Sikkim",
				"North Sikkim",
				"South Sikkim",
				"West Sikkim",
			],
		},
		{
			state: "taminadu",
			districts: [
				"Ariyalur",
				"Chennai",
				"Coimbatore",
				"Cuddalore",
				"Dharmapuri",
				"Dindigul",
				"Erode",
				"Kanchipuram",
				"Kanyakumari",
				"Karur",
				"Krishnagiri",
				"Madurai",
				"Nagapattinam",
				"Namakkal",
				"Nilgiris",
				"Perambalur",
				"Pudukkottai",
				"Ramanathapuram",
				"Salem",
				"Sivaganga",
				"Thanjavur",
				"Theni",
				"Thoothukudi (Tuticorin)",
				"Tiruchirappalli",
				"Tirunelveli",
				"Tiruppur",
				"Tiruvallur",
				"Tiruvannamalai",
				"Tiruvarur",
				"Vellore",
				"Viluppuram",
				"Virudhunagar",
			],
		},
		{
			state: "telangana",
			districts: [
				"Adilabad",
				"Bhadradri Kothagudem",
				"Hyderabad",
				"Jagtial",
				"Jangaon",
				"Jayashankar Bhoopalpally",
				"Jogulamba Gadwal",
				"Kamareddy",
				"Karimnagar",
				"Khammam",
				"Komaram Bheem Asifabad",
				"Mahabubabad",
				"Mahabubnagar",
				"Mancherial",
				"Medak",
				"Medchal",
				"Nagarkurnool",
				"Nalgonda",
				"Nirmal",
				"Nizamabad",
				"Peddapalli",
				"Rajanna Sircilla",
				"Rangareddy",
				"Sangareddy",
				"Siddipet",
				"Suryapet",
				"Vikarabad",
				"Wanaparthy",
				"Warangal (Rural)",
				"Warangal (Urban)",
				"Yadadri Bhuvanagiri",
			],
		},
		{
			state: "tripura",
			districts: [
				"Dhalai",
				"Gomati",
				"Khowai",
				"North Tripura",
				"Sepahijala",
				"South Tripura",
				"Unakoti",
				"West Tripura",
			],
		},
		{
			state: "uttarakhand",
			districts: [
				"Almora",
				"Bageshwar",
				"Chamoli",
				"Champawat",
				"Dehradun",
				"Haridwar",
				"Nainital",
				"Pauri Garhwal",
				"Pithoragarh",
				"Rudraprayag",
				"Tehri Garhwal",
				"Udham Singh Nagar",
				"Uttarkashi",
			],
		},
		{
			state: "uttarpradesh",
			districts: [
				"Agra",
				"Aligarh",
				"Allahabad",
				"Ambedkar Nagar",
				"Amethi (Chatrapati Sahuji Mahraj Nagar)",
				"Amroha (J.P. Nagar)",
				"Auraiya",
				"Azamgarh",
				"Baghpat",
				"Bahraich",
				"Ballia",
				"Balrampur",
				"Banda",
				"Barabanki",
				"Bareilly",
				"Basti",
				"Bhadohi",
				"Bijnor",
				"Budaun",
				"Bulandshahr",
				"Chandauli",
				"Chitrakoot",
				"Deoria",
				"Etah",
				"Etawah",
				"Faizabad",
				"Farrukhabad",
				"Fatehpur",
				"Firozabad",
				"Gautam Buddha Nagar",
				"Ghaziabad",
				"Ghazipur",
				"Gonda",
				"Gorakhpur",
				"Hamirpur",
				"Hapur (Panchsheel Nagar)",
				"Hardoi",
				"Hathras",
				"Jalaun",
				"Jaunpur",
				"Jhansi",
				"Kannauj",
				"Kanpur Dehat",
				"Kanpur Nagar",
				"Kanshiram Nagar (Kasganj)",
				"Kaushambi",
				"Kushinagar (Padrauna)",
				"Lakhimpur - Kheri",
				"Lalitpur",
				"Lucknow",
				"Maharajganj",
				"Mahoba",
				"Mainpuri",
				"Mathura",
				"Mau",
				"Meerut",
				"Mirzapur",
				"Moradabad",
				"Muzaffarnagar",
				"Pilibhit",
				"Pratapgarh",
				"RaeBareli",
				"Rampur",
				"Saharanpur",
				"Sambhal (Bhim Nagar)",
				"Sant Kabir Nagar",
				"Shahjahanpur",
				"Shamali (Prabuddh Nagar)",
				"Shravasti",
				"Siddharth Nagar",
				"Sitapur",
				"Sonbhadra",
				"Sultanpur",
				"Unnao",
				"Varanasi",
			],
		},
		{
			state: "westbengal",
			districts: [
				"Alipurduar",
				"Bankura",
				"Birbhum",
				"Burdwan (Bardhaman)",
				"Cooch Behar",
				"Dakshin Dinajpur (South Dinajpur)",
				"Darjeeling",
				"Hooghly",
				"Howrah",
				"Jalpaiguri",
				"Kalimpong",
				"Kolkata",
				"Malda",
				"Murshidabad",
				"Nadia",
				"North 24 Parganas",
				"Paschim Medinipur (West Medinipur)",
				"Purba Medinipur (East Medinipur)",
				"Purulia",
				"South 24 Parganas",
				"Uttar Dinajpur (North Dinajpur)",
			],
		},
	];

	const { register, handleSubmit } = useForm();

	const registerStudentHandler = async (formData) => {
		try {
			console.log("Form Data :: ", formData);
			// const data = {
			// 	student_name: "Hugh Jackman2",
			// 	gender: "1",
			// 	id_hq: "2",
			// 	date_of_birth: "1995-10-21",
			// 	email_id: "hugh2@gmail.com",
			// 	mobile: "1232537462",
			// 	id_state: "12",
			// 	id_city: "234",
			// 	user_name: "hughjackman2",
			// 	password: "12345678",
			// // };
			// console.log("Data :: ", data);
			// await registerStudent(data);
		} catch (error) {
			console.log("Error while registering student :: ", error);
		}
	};

	const [selectedState, setSelectedState] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const [districtOptions, setDistrictOptions] = useState([]);

	const handleSelectState = (state) => {
		setSelectedState(state);
		// Reset district selection when changing state
		states?.map((stateName) => {
			if (state === stateName) {
				setDistrictOptions(stateName.districts);
			}
		});
		setSelectedDistrict("");
	};

	// Handle district selection
	const handleSelectDistrict = (district) => {
		setSelectedDistrict(district);
	};

	return (
		<form
			onSubmit={handleSubmit(registerStudentHandler)}
			className="min-h-screen relative w-full lg:w-1/2 flex justify-center items-center"
		>
			<div className="absolute inset-0 z-[-1] overflow-hidden min-h-screen">
				<img
					src={leftBg}
					alt=""
					className="w-full h-full absolute inset-0 object-fill"
				/>
			</div>
			<div className="bg-[#ffffff] h-[500px] w-3/4 lg:w-4/5 xl:w-2/3 overflow-y-scroll no-scrollbar rounded-3xl p-6 flex flex-col gap-4 relative z-10 pb-10">
				<div className="flex justify-between items-center">
					<img
						src={arrowLeft}
						alt=""
						className="bg-[#1C4481] w-6 h-6 rounded-full"
					/>
					<div className="flex flex-col items-end">
						<span className="font-semibold text-[#AFAFAF]">
							Create
						</span>
						<span className="font-semibold text-[#222222]">
							an Account
						</span>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("fullName", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={userProfile} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								FullName
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="gender_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) => handleSelectGender(e.target.value)}
							{...register("gender", { required: true })}
						>
							<option value="" disabled hidden>
								Please Select Gender
							</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="transgender">Transgender</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={gender} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Gender
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("dob", { required: true })}
						/>
						<div className="flex items-center justify-between absolute right-2 top-1/2 -translate-y-1/2">
							<img src={date} alt="" className="h-5 w-5" />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={date} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Date of Birth*
							</label>
						</div>
					</div>
				</div>

				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("email", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Email*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("mobile", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={tablet} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Contact Number*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("username", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={userProfile} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								User Name*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("password", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Password*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="qualification_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) =>
								handleSelectQualification(e.target.value)
							}
							{...register("qualification", { required: true })}
						>
							<option value="" disabled hidden>
								Select Your Qualification
							</option>
							<option value="highschool">10th</option>
							<option value="intermediate">12th</option>
							<option value="graduation">Graduation</option>
							<option value="postgraduation">
								Post Graduation
							</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Highest Qualification
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="state_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) =>
								handleSelectQualification(e.target.value)
							}
							{...register("state", { required: true })}
						>
							<option value="" disabled hidden>
								Select State
							</option>
							{indianStates?.map((state) => {
								return (
									<option
										key={state.key}
										onClick={handleSelectState(state.key)}
										value={state.value}
									>
										{state.key}
									</option>
								);
							})}
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								State
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="state_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) =>
								handleSelectQualification(e.target.value)
							}
							{...register("district")}
						>
							<option value="" disabled hidden>
								Select District
							</option>
							{districtOptions?.map((district) => (
								<option key={district} value={district}>
									{district}
								</option>
							))}
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								District
							</label>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<input type="checkbox" className="h-4 w-4 bg-[#cfcfcf]" />
					<span className="font-medium">
						I agree to the Terms & Conditions
					</span>
				</div>
				<div className="rounded-full w-full text-white bg-[#1C4481] flex items-center justify-center py-3">
					<button type="submit" className="w-full h-full">
						Register
					</button>
				</div>
			</div>
		</form>
	);
}

export default SignUp;
