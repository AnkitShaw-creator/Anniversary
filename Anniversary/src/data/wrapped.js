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
        description: "Karon pucchka holo tor indhon aar amar o"
    },
    {
        id: "mostVisitedPlace",
        title: "Most Visited Place",
        value: "Kakur Dokaan",
        description: "Tea, sutta aar hangout"
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
    {
        id: "best2AMconvo",
        title: "Best 2 AM conversation",
        value: "Protom call",
        description: "Karon tar por jaa holo sob e itihash"
    },
    {
        id: "bestdateplanner",
        title: "Best Date Planner",
        value: "You",
        description: "Also the person who always says “dekha jaak.”"
    },
    {
        id: "best",
        title: "Chef-e-khaas",
        value: "You",
        description: "Looking forward to eating everything that you can cook"
    },
    {
        id: "mostlikelytosaykichuhoyni",
        title: "Most Likely to Say “Kichhu hoyni” When Something Definitely Happened.",
        value: "You",
        description: "Karon kichu toh hoy e naa."
    },
    {
        id: "mostannoyingperson",
        title: "Most Annoying person",
        value: "Obviously, Me",
        description: "No doubt about this"
    },
    {
        id: "maincharacter",
        title: "Main Character of My life",
        value: "You",
        description: "No doubt about this either"
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
        value: "31 - August - 2025",
        description: "Jeram Mein hoon Na film e Sharukh first time Sushmita Sen ke dekhe react korechilo, amio orom hoe geychilam. " +
            "Toke dekhe joto ta aubaak hoe chilam toto tae bhoy te chilam je bhul kichu bolle tui kelabi amay. "
    },
    {
        id: "date4",
        title: "Premer Jor",
        value: "2 - September - 2025",
        description: "Ajker dine protom bar tor office er por dekha korechilam amra. "
            + "Toke ami nijer lal scooty ta dekhanor jonno nie esechilam."
            + "Raate jokhon bristi hocchilo toh tor bhijhte icche korchilo, ami mana korlam aar bollam je tor shorir kharab hole ami prem ta kar sathe korbe, tui bolli tor sathe e. "
            + "Ami abar lojja peye geychilam."
    },
    {
        id: "date5",
        title: "Ektu Nom-Nom",
        value: "3 - September - 2025",
        description: "Abar dekha holo, prothom bar amra eke onno ke khaiechilam. "
            +"Seidin gautam's e bose paser couple er jhogra dekhe tui bolecchilis je us in few months, bhul kichu bolishni tui tokhon XD. "
            +"But amra oder theke better jaegae achi."
    },
    
    {
        id: "date5",
        title: "The Post-meet wala meet",
        value: "4 - September - 2025",
        description: "Ager din dekha kore mon naa bhorar karone abar aedin e dekha holo. "
            + "Tui prothom bar amay amar barir kapore dekhechilish, tate amar bishal lojja lagchilo, but then tor haant dhorar por sob santo hoe geychilo."
            + "I vividly remember that time."
    },
    {
        id: "date6",
        title: "Shopping Wopping ",
        value: "7 - September - 2025",
        description: "Pujor aar wardrob update er jonno shopping e geychilam amra aar tor onnek mana korar por ami toke tor chobi tolar jonno manie neachilam " +
            "Sob kichu te amra helmet tai harie phelechilam."
    },
    {
        id: "date7",
        title: "Pilot",
        value: "12 - September - 2025",
        description: "Amader moddhe first jhamela hoe"
    },
    {
        id: "date8",
        title: "Ami Office er nicchi aschi",
        value: "13 - September - 2025",
        description: "Seidin amar poristhi, puro a soldier er moton chilo, toke haranor bhoy ta eto e beshi chilo je onno kichu e aar bhabte parchilam naa."
            +"Raate amra Saiyara dekhechilam"
    },
    {
        id: "date9",
        title: "Amio ready biyer jonno",
        value: "14 - September - 2025",
        description: "Seidin ta mone ache, onnek bristi porchilo and amader tater mela te jawar plan chilo. Tui amay maa er jonno ekta saree kinie deachilis. "

    },
    {
        id: "date10",
        title: "Social Anxiety Ted talk",
        value: "16 - September - 2025",
        description: "Amra social anxiety nea kotha bolchilam and tui amay bojhachilis how to over come it."
            + "Tar sathe aetao bolechilis je toke offend korle max tui amay jharbi and bojhabi and that at the end of the day I am yours and that you are not going anywhere."
    },
    {
        id: "date11",
        title: "I need to talk to you",
        value: "18 - September - 2025",
        description: "Tor mukh theke ae kotha ta sune e amar khela ses hoe jae, sedin o same e hoechilo. "
            + "But that day turned out to be different. We kissed for the first time."
    },
    {
        id: "date12",
        title: "Ekta Good news",
        value: "21 - September - 2025",
        description: "Ajke Mahalaya chilo and bikele amder Aiyan er sathe dekha korar plan. "
            + "Good news ta chilo je amra Ashtomi te night out korte pari."
            + "Ajke Ami toke kole tule bhujlam tui weightless puro."
    },
    {
        id: "date13",
        title: "Pujo Ghora suru",
        value: "25 - September - 2025",
        description: "Ajke theke amader pujo ghora start holo dea tana ashtomi obdi hobe beypaar ta. "
            + "Tor sathe first pujo amar, bhabhle e kemon ekta mone projapoti naach korte lage. P.S: Toke mota korte chaina ami."
            + " And Tor sokale uthe black coffee er request pura puri kabul hae."
    },
    {
        id: "date14",
        title: "The Post-meet wala meet",
        value: "28 - September - 2025",
        description: "Amar bondhu der sathe tor first dekh. Baki ta aar bolchi naa."
    },
    {
        id: "date15",
        title: "The Post-meet wala meet",
        value: "29 - September - 2025",
        description: "Ajke Saptami, sokale sopno dekhe chilam je tor sathe naach korchi saptami bikele er gaan e XD."
    },
    {
        id: "date16",
        title: "The Post-meet wala meet",
        value: "30 - September - 2025",
        description: "Protom anjali amader sathe. Sokale ragie deachilam toke late kore, but the day tured out to be one of the best day that I have with you."
    
    },
    {
        id: "date17",
        title: "Chaa aar chini",
        value: "2025",
        description: "Tor ajke office er party chilo Kali pujor jonno. Amra kakar dokaan e masala chai ta kheychilam tokhon tui bolechilis je tui amay nijer haant er chaa banie khawabi ekdin. "
            + "Sedin ta ekhono asheni. " +"Taar sathe tui kaka ke chaa er recipe o bojhachilis. XD"
    },
    {
        id: "date18",
        title: "Pre-trip hussle",
        value: "24 - October - 2025",
        description: "Ajker por din amra ekta choto trip korbo to Mandarmani. Ajker dine jaa kando karkhana hoechilo se karone tor mood o chotke geychilo. "
            + "I was worried je plans ta jodi naa hoe then ki hobe. Turns out, sob thik e holo and trip ta memorable o hoeche."
    },
    {
        id: "date19",
        title: "Trip suru...",
        value: "25 - October - 2025",
        description: "Kaal sara raat ami ghumoini trip er jonno anxiety hocchilo je ami jaa korte jaachi tor kharab lagbe naa toh."
            + "Sokale bus e uthe tor ghaar e matha rekhe jaa ghumola, I can still remember that time."
    },
    {
        id: "date20",
        title: "D-day",
        value: "26 - October - 2025",
        description: "Trip ta darun e kaatche, mojaa asche khub. Tor sathe somoy kata parchi aar ki chai. Bhoye ta bikel er chilo jokhon toke surprise ta debo. "
            + "Jokhon Sovik er sathe jhamela ta holo amar sei karone e aro chaap lagchilo je bikele kichu bhul naa hoe. "
            + "Sob bhoy chole geylo jokhon tui YES bolli."
    },
    {
        id: "date21",
        title: "The Post-meet wala meet",
        value: "5 - September - 2025",
        description: "The day it all started. It still feels like yesterday that we started talking. " +
            "I will always remember what you said that day."
    },
    {
        id: "date22",
        title: "Charmandar",
        value: "25 - Decmeber - 2025",
        description: "Prothom Christmas eksathe. Park street er seidin er lighting ta orom e chilo jeram tor amar jibon e ashar por amar jibon er hoechilo. "
            + " You were slayyyyyying in that outfit."
    },
    {
        id: "date23",
        title: "New year Eve",
        value: "31 - December - 2025",
        description: "Bochor er ses e amra eksather. Just like we promised. "
    },
    {
        id: "date24",
        title: "Its new year baby!!!",
        value: "1 - January - 2026",
        description: "Tor sathe makeout kore toke lipstick ta chorie deachilam (sorry for that). "
            + "Bari pherar somoy jhamela o holo, dea tui bolli je aebaar sara bochor tui amar opor chelabi. "
            + "Seta ig jhamela naa holeo hoto emnie :)" + " Tor ajke khawar capacity dekhe amai onnek impress hoechilam ngl."
    },
    {
        id: "date25",
        title: "Holud tai Whole-day",
        value: "23 - January - 2026",
        description: "Saraswati Pujo aaj. Ami jokhon bari te tor chobi dekhabo, ajker tor chobi ta tate obosshoi thakbe. "
            + "Amar toh icche korchilo tor sathe sei din e biye koreni."
    },
    {
        id: "date26",
        title: "Prawn Cocktail",
        value: "14 - February - 2026",
        description: "Valentine day prothom baar manalam and I am glad it was with you. Toke ajker din je gift ta deachilam seta kokhono nijer theke alada koris naa.  "
    },
    {
        id: "date27",
        title: "Uposh",
        value: "15 - February - 2026",
        description: "Mahashiv Ratri te tor sathe bhootnath gea ekta odbhut anondo peyechilam. Seidin jani tor sathe ekta kharab jinish o hoechilo je tui amay bari te ese bolli. "
            + "Ektu kharab laglo that I was not good enough to stop it from happening. Kintu I promise future e orom aar hote debo naa. "
            + "Also asha korchi porer bochor amra abar sathe jabo Bhootnath."
    },
    {
        id: "date28",
        title: "Chicken Kosha",
        value: "20 - February - 2026",
        description: "Tor recipe follow kore ajke ami chicken kosha baniechilam. Tui bikele olpo e kheli and bolli tor jeram bhallage thik orom e hoeche. "
            + "Toke abar ami banie khawabo"
    },
    {
        id: "date29",
        title: "Rokto laal tai Laal Selam",
        value: "22 - February - 2026",
        description: "Rokto dite gea tui unconsious hoe geychilis almost. Amar heart ta berie mukhe chole esechilo ngl."
    },
    {
        id: "date30",
        title: "Rong change",
        value: "2 - March - 2026",
        description: "Holir age e amra holi celebrate kore nilam. Glad that you were the first jake ami rong lagalam. "
    },
    {
        id: "date31",
        title: "Paglu Dance",
        value: "5 - March - 2026",
        description: "Toke ami naach kore video pathie chilam like you requested."
    },
    {
        id: "date32",
        title: "Roll Date",
        value: "21 - March - 2026",
        description: "Office er burntout feel korar karone toke roll date e nea geychilam Bagbazar ghat e. Idea ta tor e chilo though :)"
    },
    {
        id: "date33",
        title: "Paglu Dance",
        value: "22 - March - 2026",
        description: "Sokal sokal Dhurandar dekhte geychilam amra. Seidin er highlight hocche amader kochuri khawa ta. "
    },
    {
        id: "date34",
        title: "Vinci Dibosh",
        value: "4 - April - 2026",
        description: "Ager din tor office e drawing korar icche dekhe amra ajker dine Maidan e geychilam. Tui ager jonmo te Picasso e chilis fs. "
            + "I was happy to see you happy after going through so much at office. Tor naach er video ta sara jibon ami store kore rakhbo as a leverage. "
            + "Also notun hair style e toke manachilo besh. "
    },
    {
        id: "date35",
        title: "Dada aar Boudi",
        value: "15 - April - 2026",
        description: "Nobo boshor celebrate korte tui amay barrackpur nea geychilis. Seidin e amar tor jonmodin er questionnaire er ideas gulo hit korlo. "
            + "No doubt barrackpur style biriyani is better than Kolkata style biriyani."
            + "Also, tui amay ekta kurti gift korechilis. "
    },
    {
        id: "date36",
        title: "Kena kata",
        value: "3 - May - 2026",
        description: "Amar jonmodin er ager shopping korte geychilam karon tor juto chire geychilo aar tor office porar jono aar kono juto chilo naa. "
            + "Sedin tui amay half pant kine deachilis aar ami toke ekta one piece dress. Sei dress e dekhar icche ekhono amar ache."
    },
    {
        id: "date37",
        title: "Amar Jonmodin",
        value: "12 - May - 2026",
        description: "Thanks for celebrating my birthday and making it special. Thanks for everything that you have done for me and doing for me."
    },
    {
        id: "date38",
        title: "Bhul",
        value: "31 - May - 2026",
        description: "Amar dara ekta bhul hoe geychilo je karone tui amar sathe puro ta din kotha bolishni. Tor raag bhangar jono uthbosh kore dekhiechilam"
    },
    {
        id: "date39",
        title: "Pizza party",
        value: "1 - June - 2026",
        description: "Toke birthday treat dewar jonno amra newtown e pizza khete geychilam. I was shocked and mesmerised jokhon tui ekta gota pizza khete perechilis. Toke seidin khub chumu khete icche korchilo amar. "
    },
    {
        id: "date40",
        title: "Pizza party",
        value: "9 - June - 2026",
        description: "Ajke tor shawbun khawar icche korchilo, kintu amader late howar karone khawa holo naa, tai shawarma kheye firlam."
            + "Ajke toke ami amar office dekhiechilam."
    },
    {
        id: "date41",
        title: "Paglu Dance",
        value: "4 - July - 2026",
        description: "Toke Shawbun khawate nea geychilam, Finally. Tor mon o kharab chilo since tor birthday asche kaache."
    },
    {
        id: "date42",
        title: "Tor Pre birthday treat",
        value: "9 - July - 2026",
        description: "Tor jonmodin er treat, tor jonmodin celebrate korar age e pey geylam "
    },
    {
        id: "date43",
        title: "Tor Jonmodin",
        value: "10 - July - 2026",
        description: "Tor jonno onnek kichu plan kore rekhechilam. Ajker din tar jonno, asha korchi je you liked my surprise. Got more things planned for next year."
    },
    {
        id: "date44",
        title: "Off we go...",
        value: "24 - July - 2026",
        description: "Finally the long anticipated trekking adventure starts. Eto maasher planning and plotting sob ajker din er jonno e. "
            + "Train e boshe finally ae realisation ta holo je AMRA ghurte jaachi."
            + "Er porer kichu din amra sathe thakbo, yayyyy"
    },
    {
        id: "date45",
        title: "Kal subah ki coffee pahado par",
        value: "26 - July - 2026",
        description: "The dialog just got real, with a little twist, Govindghat pouchate pouchate obosta kharab hoe geychilo and raat o. "
            + "Both are exausted and ghum dorkar as kaal abar trek e berote hobe."
    },
    {
        id: "date46",
        title: "Chalo VoF",
        value: "27 - July - 2026",
        description: "It was a tough day for you, trek er first din and tor periods start hoe geylo. "
            + "Nevertheless, tor energy tao high ache(A big salute to you). Sokal uthe e tui duto notun bondhu banie nili. "
            + "Ghangaria pouche tor sathe je Pahado wali maggie setar taste bole bojhano jabe naa, aar ekbaar khete hobe"
    },
    {
        id: "date47",
        title: "Dil Garden Garden hogya",
        value: "28 - July - 2026",
        description: "If \"Karm karne jata hun aur kaand ho jata hae\" was a day. "
            +"Tor chobi tulte tulte phone phele diechilam and tor phone er tempared glass o bhenge diechilam."
    },
    {
        id: "date48",
        title: "Prosaad nahi toh Bhog e sahi",
        value: "29 - July - 2026",
        description: "Bhramakamal dekhete toh peylam naa kintu jaa experience korlam seta priceless chilo. "
            + "Trek theke phire khub tired hoe geychilam, amra dibbi boke jaachilam. "
            + "Asha korchi massage ta bhalo legechilo. "
    },
    {
        id: "date49",
        title: "Off we go...",
        value: "30 - July - 2026",
        description: "Abar trek back korte hobe to Govindaghat, but tui aar ami du jon e tired. "
            + "Maajh raste toke ragieo deachilam. But everything changed when we got back. "
            + "Strangely, tor energy ekhono high age. "
            + "Also we were able to strike off another thing from your bucketlist"
    },
    {
        id: "date50",
        title: "Pherar din",
        value: "31 - July - 2026",
        description: "Ae kichu din je eksathe katalam, taarpor aar barir pherar icche korchilo naa, kintu eto je tired chilam je aar ghora jaachilo naa. "
            + "Nabar pothe tor shorir kharab hoegeychilo because thik thak ghum hoeni, taar por o tui Haridwar pouche changa hoe geychilis. "
            + "Trip ses aar kalesh chalu XD, haridwar er jhamelao kore nie chobi o tulie nilam"
    },
    {
        id: "date51",
        title: "Ghar wapis",
        value: "2 - August - 2026",
        description: "Sadly trip puro puri ses aar amader bari aste holo. It was a sad day :`)"
    },
    
    {
        id: "date52",
        title: "Pilot Part two",
        value: "18 - August - 2026",
        description: "Exactly ajker din e ekbochor age amader alap hoechilo. It was a special day, kintu tar ager din ami toke trigger diechilam dea amader dekha holo naa aaj. "
    },
    {
        id: "date53",
        title: "Event ke baad wala main event",
        value: "22 - August - 2026",
        description: "Tor colleague der sathe ajke amra khete beriechilam. Although it was a long day for you, somehow and like always you looked pretty and mesmerising. "
    },
    {
        id: "date54",
        title: "Laal selam",
        value: "5 - September - 2026",
        description: "Winkle twinkle dekhe amader aandolon korar icche abar jegechilo. Seta ekhono ache."
    },
    {
        id: "date55",
        title: "Tor bhai Ganu bhai",
        value: "14 - September - 2026",
        description: "Ajke tui prothom baar Ganesh pujo korechilis aar bari te Ganu Da ke enechilis. Kintu office'r jhamelar karone tui ektu tension eo chilis. "
            + "Good that bikele amra berolam and baki der sathe kotha bole tor mon ta ektu relaxed holo. "
            + "Kintu tor pet had other plans XD"
    },
    {
        id: "date56",
        title: "Letters",
        value: "29 - September - 2026",
        description: "Tor ae month er periods start hoechilo so I bought chocolate cake for you, only to find out that you had a surprise for me. "
            + "Tor theke chocolate cake aar letter ta receive korar por I was in cloud 9. "
            + "Although taar age tor matha gorom korie deachilam ami abar. "
    },
    {
        id: "date57",
        title: "Moh-tone",
        value: "30 - August - 2026",
        description: "Onnek din dhore je icche ta chilo toke mutton banie khawanor, seta ami ajke korte perechilam. "
            + "Though toke bolechilam je ami banie khawabo, ami korte parini beshi kichu, maa e most of the kaaj korechilo. "
    },
    {
        id: "date58",
        title: "Mowd Sowd",
        value: "3 - October - 2026",
        description: "Trip theke ferar por ek naa ek jinish lege e chilo, je karone tui thik thak relax korte parchilis naa. "
            + "Ajker din ta oeta ektu thik korte perechilo. "
    },
    {
        id: "date59",
        title: "Dada ektu side ta mere dao toh",
        value: "5 - October - 2026",
        description: "Ajke e castle ta amra dekhechi seta kena hobe, nahole bhut howar por setae gea bash korbo, whatever happens first. "
            + "Sobar pujor shopping korar por tumi nijer pujor shopping e koroni, ajker din ta tomar. "
    },
    {
        id: "date60",
        title: "Jine ke hae 6 din...",
        value: "15 - October - 2026",
        description: "Amader second pujo suru. Ae pujo te onnek uncertainity chilo, ghurte parbo ki naa. Ki hobe ke jane. "
            + "Kintu Maa had other plans."
            + "Ajke tor onnek kosto hoechilo, plus taar opore amar bhul er karone tor chotti o chire geychilo."
    },
    {
        id: "date61",
        title: "Saptomi part 1",
        value: "17 - October - 2026",
        description: "Bristir karone amra thik kore ghurte parlam naa, kintu jaa ghurlam mojaa esechilo. "
            + "Tor finally pujo pujo feel ta chole esechilo."
    },
    {
        id: "date62",
        title: "Saptami part 2",
        value: "18 - October - 2026",
        description: "Tor sathe biye korar full planning er sathe ami borjatri nea tor parae dhuklam. "
            + "TOr chobi thik thak kore naa tulte parar karone ektu sad chilam."
            + "But tor look ta was MASHALLAH!!!"
    },
    {
        id: "date63",
        title: "Phir Ashtomi mein back",
        value: "19 - October - 2026",
        description: "Ajker din tae beypaar ache." + "Ek toh tum esehi itni hot, upar se saree wala look. "
            + "Nijer praan ta kikore je bachie bari phirechi ki bolbo. "
            + "Pujo ekdike aar amar chokh sudu tor dike. "
            + "Mowd pawa holo naa tao din ta besh bhalo katlo. "
    },
    {
        id: "date64",
        title: "Nobomi Blues",
        value: "20 - October - 2026",
        description: "Ajker tor dewa jama ta porlam aar tui amar dewa kurti ta. " + "Ager din gulo te eto e tired chilam je beshi kothao jawa holo naa. "
            + "Magar Aap itni hot dikho or mein chobi naa lun esa tore e hota hae..."
    },
    {
        id: "date65",
        title: "OT Day",
        value: "23 - October - 2026",
        description: "Chesta korchilam je toke kichu ta holeo comfort dite pari, asha korchi korte perechilam."
    },
    {
        id: "date66",
        title: "1 Year",
        value: "26 - October - 2026",
        description: "And here we are again." + "One year together. " + " One year full of memories and zero regrets."
    },

]