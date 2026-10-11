const bubbleColors = [
    "#FF6B8A",
    "#E879A6",
    "#A78BFA",
    "#8B5CF6",
    "#60A5FA",
    "#2DD4BF",
    "#6EE7B7",
    "#FACC15",
    "#FB923C",
    "#FB7185",
    "#C084FC", // Soft violet
    "#38BDF8", // Sky blue
    "#F472B6", // Bright pink
    "#A3E635", // Lime green
];
const shuffledColors =  [...bubbleColors].sort(() => Math.random() - 0.5);
    // bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

export const wrappedStats = [
    {
        id: "days",
        label: "Days Together",
        value: 365,
        bubbleColor: shuffledColors[0],
        description: "And somehow you still haven't blocked me."

    },
    {
        id: "annoyed",
        label: "Days I annoyed you",
        value: 365,
        bubbleColor: shuffledColors[1],
        description: "Damn, I pissed you off a lottttt this year. :)"
    },
    {
        id: "dates",
        label: "Dates",
        value: 52,
        bubbleColor: shuffledColors[2],
        description: "Date is just a day in calendar, but with you, every day is a date."
    },
    {
        id: "hugs",
        label: "Hugs",
        value: 360,
        bubbleColor: shuffledColors[3],
        description: "This is the stats without counting the ones that I gave you while sleeping."
    },
    {
        id: "kiss",
        label: "Kisses",
        value: 300,
        bubbleColor: shuffledColors[4],
        description: "65 less coz you didn't let me kiss."
    },
    {
        id: "fights",
        label: "Kalesh",
        value: 13,
        bubbleColor: shuffledColors[5],
        description: "I know it was my fault."
    },
    {
        id: "trips",
        label: "Trips",
        value: 2,
        bubbleColor: shuffledColors[6],
        description: "Not counting the ones jeta amra sopno te ghurechi"
    },
    {
        id: "shopping",
        label: "Shopping Trips",
        value: 8,
        bubbleColor: shuffledColors[7],
        description: "Tui amar personal fashion designer"
    },
    {
        id: "Food outings",
        label: "Food Outings",
        value: 23,
        bubbleColor: shuffledColors[8],
        description: "Nom Nom partner for a reason."
    },
    {
        id: "movie dates",
        label: "Movie Dates",
        value: 4,
        bubbleColor: shuffledColors[9],
        description: "Popcorn, coke aar tui, sorted!"
    },
    {
        id: "movie nights",
        label: "Movie Nights",
        value: 22,
        bubbleColor: shuffledColors[10],
        description: "NOt gonna lie, you have a great taste in movies."
    },
    {
        id: "songs",
        label: "Songs shared",
        value: 35,
        bubbleColor: shuffledColors[11],
        description: "NOt gonna lie, you have a great taste in movies."
    },
    {
        id: "notalkdays",
        label: "Days we didn't talk",
        value: 9,
        bubbleColor: shuffledColors[12],
        description: "Full we don't talk anymore scene. P.S: I am glad number ta kom."
    },
    {
        id: "gifts",
        label: "Gifts",
        value: "",
        bubbleColor: shuffledColors[13],
        description: "Kichu jinish er hiseb rakte nae."
    },
    

]
export const wrappedAwards = [
    {
        id: "wordsbyme",
        title: "Most used word by me",
        value: "Please kotha bol naa",
        description: "Protek jhamele"
    },
    {
        id: "wordsbyyou",
        title: "Most used word by you",
        value: "Chodash Naa",
        description: "Thanks bole e bolle e bolish"
    },
    {
        id: "mostSharedMeal",
        title: "Most Shared Meal",
        value: "Pucchka",
        description: "Kyuki tumhe pucchka khana bahut pasand hai, aur mujhe bhi."
    },
    {
        id: "mostVisitedPlace",
        title: "Most Visited Place",
        value: "Kakur Dokaan",
        description: "Tea sutta aar hangout"
    },
    {
        id: "mostHatedPlace",
        title: "Most Hated Place",
        value: "Laketown er park",
        description: "All because of 1 incident"
    },
    {
        id: "mostLovedBand",
        title: "Most Loved Band",
        value: "Chandrabindoo",
        description: "Era e amader Bhrohma"
    },
    {
        id: "mostLovedMovie",
        title: "Most Loved Movie",
        value: "Ghore O Baire, Bibaho Dairies",
        description: "Dekhe onnek kichu sikhechis"
    },
    {
        id: "favouritethingtodoyou",
        title: "Your Favourite Thing to do with me",
        value: "Roast kora",
        description: "Tor roast e amar din shuru hoe, ar sesh hoe."
    },
    {
        id: "favouritethingtodome",
        title: "My Favourite Thing to do with You",
        value: "Irritate kora",
        description: "Toke irritate na korle amar din puro hoe naa :)"
    },

]

export const wrappedDates = [
    {
        id: "date1",
        title: "Pilot",
        value: "18 - August - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. "+ 
            "I will always remember what you said that day."
    },
    {
        id: "date2",
        title: "What is your mobile number?",
        value: "24 - August - 2025",
        description: "That day we started talking on whatsapp. And seidin e raate tui amay bolechilis je amra jae sathe khai ses amay korte hobe..." +
            "I think we can rule that out."
    },
    {
        id: "date3",
        title: "The Meet",
        value: "2 - September - 2025",
        description: "Jeram Mein hoon Na film e Sharukh first time Sushmita Sen ke dekhe react korechilo, amio orom hoe geychilam. " +
            "Toke dekhe joto ta aubaak hoe chilam toto tae bhoy te chilam je bhul kichu bolle tui kelabi amay. "
    },
    {
        id: "date4",
        title: "The Post-meet wala meet",
        value: "3 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date5",
        title: "The Post-meet wala meet",
        value: "4 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date6",
        title: "The Post-meet wala meet",
        value: "5 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date7",
        title: "Pilot",
        value: "18 - August - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date8",
        title: "What is your mobile number?",
        value: "24 - August - 2025",
        description: "That day we started talking on whatsapp. And seidin e raate tui amay bolechilis je amra jae sathe khai ses amay korte hobe..." +
            "I think we can rule that out."
    },
    {
        id: "date9",
        title: "The Meet",
        value: "2 - September - 2025",
        description: "Jeram Mein hoon Na film e Sharukh first time Sushmita Sen ke dekhe react korechilo, amio orom hoe geychilam. " +
            "Toke dekhe joto ta aubaak hoe chilam toto tae bhoy te chilam je bhul kichu bolle tui kelabi amay. "
    },
    {
        id: "date10",
        title: "The Post-meet wala meet",
        value: "3 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date11",
        title: "The Post-meet wala meet",
        value: "4 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date12",
        title: "The Post-meet wala meet",
        value: "5 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
]