const textFile = 'Familie: Hvad er navnet på den uddannelse Peter studerer? datamatiker, IT-supporter, datalogi (datalogi)\n'+
    'Familie: hvilken farve har Marian og Pouls bil? (brun/chokoladefarvet)\n'+
    'Familie: hvor mange oldebørn har oldemor “Anna”? (17)\n'+
    'Familie: hvor mange tipoldebørn har oldemor “Anna”? (6)\n'+
    'Familie: hvor gammel er Ruth´s 3. ældste barn yngste datter? (27)\n'+
    'Familie: Hvad hed Brithas hund med sorte pletter? (Dafnie)\n'+
    'Familie: Hvornår er Bedstefar bageren født? 1871, 1873, 1875 (1873)\n'+
    'Familie: Hvad var Bedstefar Bagerens kones ungpigenavn? (Martha Holt)\n'+
    'Familie: Hvad hed Oldemor Anna til mellemnavn? (Theodora)\n'+
    'Familie: Hvor mange af deltagerne i Bulbjerg persuit arbejder i en børnehave/vuggestue? (4)\n'+
    'Familie: Hvornår døde Bedstefar i Sejlings kone? 1917, 1918, 1919 (1919)\n'+
    'Familie: Hvor mange brødre havde Bedstefar Bageren? 1, 2, 3 (2)\n'+
    'Familie: Hvor mange deltagere denne weekend er bosiddende i Randers? (8)\n'+
    'Familie: Hvem i familien er født på Bedstefar i Sejlings fødselsdag? (Camilla)\n'+
    'Familie: Hvornår havde Bedstefar Bageren fødselsdag? (2. Oktober)\n'+
    'Familie: Hvad betalte Bedstefar i Sejling hver af sine 7 søskende for huset i Sejling? 50 kr,  500kr,  5000kr (50kr)\n'+
    'Familie: Hvornår døde Bedstefar Bagerens kone? 1943, 1945, 1947 (1945)\n'+
    'Familie: Hvem i familien har fødselsdag samme dag? (Marian og Sigurd)\n'+
    'Familie: Hvor mange af hele vores familie bor i Galten? (14)\n'+
    'Familie: Hvem kan fejre sit 40 års jubilæum på sit job i 2017? (Poul)\n'+
    'Familie: Hvor mange år er Liss børnebørn ialt? (114)\n'+
    'Familie: Hvor mange år har Peter og Charlotte været kærester? (5)\n'+
    'Familie: Hvad er Jespers akademiske titel? Cand.mag, Cand.oecon, Ingeniør, Cand.polyt (Cand. polyt)\n'+
    'Familie: Hvor mange deltagere i dette spil er offentlige ansatte? (9 Camilla, Rene, Morten, Sofie, Jette, Janne, Carsten, Marian, Jesper)\n'+
    'Familie: Hvor gammel var oldemor Anna da hun døde? (92 år)\n'+
    'Familie: Hvornår er oldemor Anna født? (1907 d. 25. oktober)\n'+
    'Familie: Bestemor bageren er født Martha Holt. Hvorfor hed hun Holt? (Kongens følge gjorde holdt hvor de boede)\n'+
    'Familie: Hvor dage var der imellem Anna og Axel´s fødselsdag? (1)\n'+
    'Familie: Hvor gammel blev oldefar Axel? (69 - død i 1973 d. 23. februar)\n'+
    'Familie: Hvilket år blev oldefar Axel født? (1903)\n'+
    'Familie: Hvor mange i vores familie bor ikke i Jylland? (4)\n'+
    'Familie: hvor mange /svigerbørn, der ikke er direkte efterkommere, deltager i dag i Bulbjerg? (10 = sofie, charlotte, alan, kaj, britha, knud, erling, jørgen, alexander, rene)\n'+
    'Familie: Hvad hedder den kæde Pia arbejder for? (Kitchn)\n'+
    'Familie: Hvor gammel er, og hvem er, det ældste af oldemor Annas oldebørn? (Allan 38 - født d. 7. jan. 1979)\n'+
    'Familie: Hvad hedder Ulrik og Katja til mellemnavn? (Dremstrup)\n'+
    'Familie: Hvad hedder moster Ruth til mellemnavn? (Birgit)\n'+
    'Familie: Liss, har fødselsdag i dag (tillykke!) men hvor gammel bliver hun? (84)\n'+
    'Familie: Morten et fint mellemnavn, men hvem er han fået navnet efter? (Oldefar i Sejlings kone, som hed Maren Lihn)\n'+
    'Familie: Fra hvilket land er Alexanders forfædre? (Tyskland)\n'+
    'Familie: Finn har haft et langt arbejdsliv, men hvor mange år fejrede han til sit jubilæum? (50)\n'+
    'Familie: Hvor mange aktive petanque spillere er der her i Bulbjerg i dag? (3)\n'+
    'Familie: Hvad hedder det firma, som Ulrik er ansat hos? (99)\n'+
    'Bulbjerg: Hvad er adressen på Bulbjerghjemmet? (Senåvej 25, 7741 Frøstrup)\n'+
    'Bulbjerg: Hvor mange sengepladser er der på Bulbjerghjemmet? 49, 52, 56 (56)\n'+
    'Bulbjerg: Skal man selv sørge for snerydning, hvis det skulle blive nødvendigt? (nej)\n'+
    'Bulbjerg: Hvad hedder udlejeren af Bulbjerghjemmet? (Frank Koldsgaard)\n'+
    'Bulbjerg: Hvad har Bulbjerghjemmet tidligere været anvendt til og hvad var navnet? (Kæret gammel skole)\n'+
    'Bulbjerg: Hvor mange personer er spisesalen på Bulbjerghjemmet berammet til? (70)\n'+
    'Bulbjerg: Nævn mindst 3 personer, der var på vinderholdet i Bulbjerg i 2016? (Rene, Carsten, Jette, Poul)\n'+
    'Bulbjerg: Hvor langt er der fra Bulbjerghjemmet til Bulbjerg på parkeringspladsen? (99)\n'+
    'Bulbjerg: Hvor mange m2 er der tilhørende Bulbjerghjemmet? (99)\n'+
    'Bulbjerg: Er der 5, flere eller færre gryder under det store komfur i køkkenet? (99)\n'+
    'Bulbjerg: Hvor langt er der til nærmeste isbutik? (99)\n'+
    'Bulbjerg: Hvor mange gafler er der i skuffen? (99)\n'+
    'Bulbjerg: Bulbjerg er en høj kalkstensknude. Hvor høj er den? 36 meter, 47 meter, 52 meter (47)\n'+
    'Bulbjerg: Hvor høj var Skareklit? 9 meter, 12 meter, 16 meter (16)\n'+
    'Bulbjerg: I hvilket år væltede Skareklit? 1978, 1982, 1986 (1978)\n'+
    'Bulbjerg: Hvor mange par af mågefuglen Riden yngler på klippeafsatserne på Bulbjerg? 300, 500, 800 (500)\n'+
    'Bulbjerg: Mågefuglen Riden yngler på Bulbjerg, men også en mere sjælden fugl yngler her. Hvad hedder den? (Mallemuk)\n'+
    'Bulbjerg: Hvilket år var første gang vi var i Bulbjerg? (1997)\n'+
    'Bulbjerg: Hvem sørger for indkøb af øl? (Knud)\n'+
    'Bulbjerg: Hvem henter (normalvis) rundstykker? (Knud)\n'+
    'Bulbjerg: Hvor mange brusere (til bad) er der på Bulbjerghjemmet? (4)\n'+
    'Samfund: Hvad hedder Danmarks udenrigsminister? (Anders Samuelsen)\n'+
    'Samfund: Hvor mange ministre er der i regeringen? 17, 20, 22 (22)\n'+
    'Samfund: Hvad kalder Danmarks uddannelses- og forskningsminister sig selv? (fremtids minister)\n'+
    'Samfund: Hvad hedder næstformanden i Venstre? (Kristian Jensen)\n'+
    'Samfund: Hvad er forkortelsen af den siddende regering? (V-LA-K)\n'+
    'Samfund: Hvor mange % af ministre er kvinder? 37, 41, 50 (41)\n'+
    'Samfund: Hvad var gennemsnitsalderen i folketinget ved valget  18. juni 2015? 40, 44, 45 (45)\n'+
    'Samfund: Hvor mange partier er repræsenteret i folketinget? (9)\n'+
    'Samfund: Hvor mange medlemmer er der i Folketinget? (179)\n'+
    'Samfund: Hvad hedder den nuværende danske undervisningsminister? Merete Riisager, Sophie Løhde, Mette Bock (Merete Risager)\n'+
    'Samfund: Hvor mange folketingsmedlemmer har Venstre? 32, 34, 36 (34)\n'+
    'Samfund: Hvor gammel var yngste medlem af folketinget efter valget 2015? 21, 22, 23 (21 Tilde Bork)\n'+
    'Samfund: Hvornår fik kvinder stemmeret til Folketinget i Danmark? (1915)\n'+
    'Samfund: Danmark blev officielt en del af anden verdenskrig, da landet blev besat af tyske tropper. Hvornår skete det? (9. april 1940)\n'+
    'Samfund: Vikingekongen Harald Blåtand, rejste Jellingstenen og proklamerede, at nu var Danmark blevet et kristent land. Hvornår rejste Harald Blåtand Jellingstenen? ca. omkring år 1050, ca. omkring år 876, ca. omkring år 965 (965)\n'+
    'Samfund: Hvad hedder domkirken i Aarhus? Budolfi Kirke, Sankt Knuds Kirke, Sct. Clemens Kirke (Sct. Clemens Kirke)\n'+
    'Samfund: Hvem var konge i Danmark i 1964? Kong Frederik den 9., Kong Frederik den 10., Kong Christian den 10 (Kong Frederik den 9.)\n'+
    'Samfund: I hvilken kirke ligger Valdemar den Store begravet? Roskilde Domkirke, Vor Frue Kirke i København, Sankt Bendts Kirke i Ringsted? (Sankt Bendts Kirke i Ringsted)\n'+
    'Samfund: Hvilket år åbnede Storebæltsforbindelsen for togtrafik? (1997)\n'+
    'Samfund: Hvor mange Rundkirker er der i Danmark? (7)\n'+
    'Samfund: Hvor mange Domkirker er der i Danmark? (10)\n'+
    'Samfund: Hvad er det fulde navn på den person, der blev præsident i Frankrig i 2017? (Emmanuel Macron)\n'+
    'Samfund: Hvad er den årlige apanage til det danske kongehus? 86 mill, 92 mill, 106 mill (106 mill)\n'+
    'Samfund: På hvilken dansk ø tækker man, som det eneste sted i verden, tage med tang? (Læsø)\n'+
    'Samfund: Hvad er det officielle sprog i Bolivia? (Spansk)\n'+
    'Samfund: I hvilket land produceres uret Casio? (Japan)\n'+
    'Samfund: Hvornår åbnede den første netbank i Danmark? (1998)\n'+
    'Samfund: I hvilket år voksende Danmark til 5 mio indbyggere? 71/72, 81/82, 91/92 (71/72)\n'+
    'Sport og fritid: Hvilken af disse byer har aldrig afholdt sommer ol? st. Louis, Stockholm, Antwerpen, Lissabon, Amsterdam (Lissabon)\n'+
    'Sport og fritid: Hvilken fodboldspiller lyder tilnavnet “spice boy”? (David Beckham)\n'+
    'Sport og fritid: Hvilket sportstøjsfirma har taget sit navn efter den græske sejrsgudinde? (Nike)\n'+
    'Sport og fritid: Hvilket nr. er Caroline Wozniacki på verdensranglisten? (10)\n'+
    'Sport og fritid: Hvor mange spillere er der på banen i Ishockey? 5, 6, 7 (6)\n'+
    'Sport og fritid: Hvor stor er en håndboldbane? 15-30m, 20-40m, 30-60m (20-40)\n'+
    'Sport og fritid: Hvor mange hold spiller i Superligaen? (14)\n'+
    'Sport og fritid: Hvor mange medaljer fik Danmark ved Ol 2016? 13, 14, 15 (15)\n'+
    'Sport og fritid: Hvor mange kilo er kuglen til kuglestød for mænd? 7.26, 8.26, 9.26? (7,26)\n'+
    'Sport og fritid: Hvad er diameteren på en tennisbold? 4,5 cm, 5,5 cm, 6,5 cm (6,5 cm)\n'+
    'Sport og fritid: Lille henrivende Inge Sørensen vandt bronze ved Ol i 1936. Hvor gammel var hun? 12 år, 13 år, 14 år (12 år)\n'+
    'Sport og fritid: Hvilket superligahold spiller i dueblå spillerdragt på hjemmebane? (Randers FC)\n'+
    'Sport og fritid: Hvilket land stiller sprinteren Usain Bolt op for? (Jamaica)\n'+
    'Sport og fritid: Hvilken klub spille Allan Simonsen for, da han i 1977 blev kåret til europas bedste fodboldspiller? (Borussia Mönchengladbach)\n'+
    'Sport og fritid: Hvilken sportsgren huskes Ayub Kalule for? (Boksning)\n'+
    'Sport og fritid: Hvor hurtig er verdens hurtigste mand? (99)\n'+
    'Sport og fritid: Hvem har rekorden i 100m løb for mænd? (Usain Bolt)\n'+
    'Sport og fritid: Fik Danmark flere, færre eller lige mange medaljer til OL i 2016 ift. 2012? (99)\n'+
    'Sport og fritid: Hvilket landshold kaldes også Three Lions? (England)\n'+
    'Sport og fritid: Hvem blev topscorer ved VM i fodbold i 2006 i Tyskland? Ronaldo, Lionel Messi, Miroslav Klose (Miroslav Klose)\n'+
    'Sport og fritid: Inden for hvilken sportsgren finder man disciplinerne Military og Voltigering? Ridning, Fægtning, Skydning (Ridning)\n'+
    'Sport og fritid: Hvilke farver er der i flaget, som fortæller en kører i Formel 1, at han har mekaniske problemer? (Sort og orange)\n'+
    'Sport og fritid: For hvilken gang vandt racerkøreren Tom Kristensen Le Mans i 2013? (9)\n'+
    'Sport og fritid: Dronning Margrethe og Prinsgemalen Henrik åbnede i oktober 2013 en fælles udstilling på et dansk museum. Hvilket museum? (Aros)\n'+
    'Sport og fritid: Danmarks Akvarium i Charlottenlund lukkede i år 2012 og genåbnede året efter i Kastrup Havn. Under hvilket nye navn? (Den Blå Planet)\n'+
    'Sport og fritid: Hvilken stilart er den spanske kunstmaler, Salvador Dalí, kendt for? (Surrealisme)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder det band Kim Larsen synger sammen med? (Kjukken)\n'+
    'Underholdning og børnespørgsmål: Hvad er størst, Jorden, Månen eller Solen? (Solen)\n'+
    'Underholdning og børnespørgsmål: Hvor gammel er Sanne Salomonsen? (61 år)\n'+
    'Underholdning og børnespørgsmål: Hvilken marmelade findes der i midten af isen kæmpe Eskimo? appelsin, honning, solbærmarmelade (solbærmarmelade)\n'+
    'Underholdning og børnespørgsmål: Hvor lang er 1 meter, 1000 cm, 100 cm, 10 cm? (100 cm)\n'+
    'Underholdning og børnespørgsmål: Hvilken kendt sangerinden døde d. 4. maj 2017? (Katy Bødker)\n'+
    'Underholdning og børnespørgsmål: Hvad betyder det når en mand har en måne? Han har en rund mund, Han er halvskaldet, Han har en stor næse (Han er halvskaldet)\n'+
    'Underholdning og børnespørgsmål: Hvem vandt X-faktor i 2016? (Embrace)\n'+
    'Underholdning og børnespørgsmål: Hvad betyder udtrykket "der er ugler i mosen"? At man er skør i bolden, At der er sjov og ballade, At der er noget galt (At der er noget galt)\n'+
    'Underholdning og børnespørgsmål: Hvor mange femkroner kan man veksle fem tyvekroner til? 20, 10, 5 (20)\n'+
    'Underholdning og børnespørgsmål: Hvad er verdens største nulevende dyr? Elefant, Giraf, Blåhval (Blåhval)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder Emil fra Lønnebergs lillesøster? (Ida)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder en ands unger? (ællinger)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder Rasmus Klumps bedste ven? (Pingo)\n'+
    'Underholdning og børnespørgsmål: Hvad er katten Garfields yndlingsmad? (Lasagne)\n'+
    'Underholdning og børnespørgsmål: Nævn tre dyr, der er grønne eller gule? (Krokodille, frø, græshoppe, tiger, løve, giraf, kylling)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder helten, der kan kravle på murene ligesom en edderkop? (Spiderman)\n'+
    'Underholdning og børnespørgsmål: Hvad spiller man, når man bruger en fjerbold? (Badminton)\n'+
    'Underholdning og børnespørgsmål: Hvem forhekser Tornerose, så hun sover i 100 år? (Den onde fe)\n'+
    'Underholdning og børnespørgsmål: Nævn navnene på fire prinsesser (det må både være virkelige prinsesser og eventyrprinsesser)? (Askepot, Snehvide, Belle, Tornerose, Mary, Marie, Kate)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder den 3. største by i Danmark? (Odense)\n'+
    'Underholdning og børnespørgsmål: Hvilket solonummer udgav George Michael som sit første? (Careless Whisper)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder julemandens rensdyr? (99)\n'+
    'Underholdning og børnespørgsmål: Hvor mange afsnit er det i matador serien? (24)\n'+
    'Underholdning og børnespørgsmål: Hvad er den meste viste danske film i danske biografer nogensinde? (99)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder den mest populære plade i 1900 tallet? (Midt om natten med Kim Larsen)\n'+
    'Underholdning og børnespørgsmål: Hvad hedder den mest populære sang i 1900 tallet? ( Kvinde min med Kim Larsen)\n'+
    'Underholdning og børnespørgsmål: Hvem kan kaste længst med et fodbold. En fra hvert hold deltager? (x)\n'+
    'Underholdning og børnespørgsmål: AKTIV Hvem kan hoppe flest gange på ét ben.  En fra hvert hold deltager? (x)\n'+
    'Underholdning og børnespørgsmål: AKTIV Hvem tror I kan komme tættest på et minut. En fra hvert hold deltager? (x)\n'+
    'Joker: Hvor mange ringe er der i Audis logo? (fire)\n'+
    'Joker: Hvor mange af stakbrættets felter skal benyttes hvis man i stedet vil spille dam på brættet? (32)\n'+
    'Joker: Hvad spiser man hvis man indtager en rugbrødsmad belagt med leverpostej, saltkød, sky og løgringe? (dyrlægens natmad)\n'+
    'Joker: Hvilken bilproducent kendes for modeller som Accent, Matrix og Sante Fe? (Hyundai)\n'+
    'Joker: Hvilken lufthavn er man på vej til hvis der står LHR på bagagemærket? (Heathrow)\n'+
    'Joker: I hvilken film må både et egern og en ko lade livet for Arnes kugler? (Blinkende Lygter)\n'+
    'Joker: Hvad hedder de tre trin i hierarkiet hos honningbien? (Dronning, arbejder og drone)\n'+
    'Joker: Hvilket krydderi regnes som verdens dyreste? (Safran)\n'+
    'Joker: Hvor mange IC3-togsæt ejer DSB? 56, 76, 96 (96)\n'+
    'Joker: Hvad er Boysenbær? brombær-stikkelsbær, Hindbær-jordbær, Brombær-hindbær (En krydsning af Brombær og Hindbær)\n'+
    'Joker: Hvad hedder Bondemanden Frank Erichsen til mellemnavn? (Ladegaard)\n'+
    'Joker: Hvad hedder Bondemandens kæreste? Josefine, Karina, Theresa (Theresa)\n'+
    'Joker: Hvad er Danmarks Nationalfugl? (Knopsvanen valgt i 1984)\n'+
    'Joker: Hvilken farve har en Perlehyacint? (blå)\n'+
    'Joker: Hvor mange tv blev der solgt i Danmark i 2016? (99)\n'+
    'Joker: Nævn x bilmærker fra Tyskland? (99)\n'+
    'Joker: Nævn x bilmærker fra Frankrig? (99)\n'+
    'Joker: Nævn x bilmærker fra Italien? (99)\n'+
    'Joker: x bilmærker fra Schweiz? (99)\n'+
    'Joker: x bilmærker fra England? (99)\n'+
    'Joker: x bilmærker fra USA? (99)\n'+
    'Joker: hurtig er den hurtigste vej-godkendte bil i verden? 10 km/t, 100 km/t, 1000 km/t (99)\n'+
    'Joker: er den foretrukne type ketchup i Nordjylland? Beauvais, Heinz (Beauvais)\n'+
    'Joker: meget vand indeholder en kartoffel? 10-20%, 40-50%, 70-80% (70-80%)\n'+
    'Joker: Hvor mange kg kartofler spiser hver dansker i gennemsnit om året? 40 kg, 60 kg, 80 kg (40 kg)\n'+
    'Joker: mange genstande alkohol købte hver dansker i gennemsnit per uge i 2015? 3, 7, 10 (10)\n'+
    'Joker: mange liter ren alkohol købte hver dansker i gennemsnit i 2015? 5, 8, 10 (8)\n'+
    'Joker: Hvad er den mest populære øl i Danmark ifølge tal fra 2015? (Tuborg)\n'+
    'Joker: er det mest populære drengenavn i 2016? William, Frederik, Noah (Noah)\n'+
    'Joker: er det mest populære pigenavn i 2016? Ida, Sofia, Freja (Sofia)\n'+
    'Joker: hed den virus der ramte flere danske virksomheder i Maj 2017? WanaCry, RansomWare, Cryptolocker (WanaCry)\n'+
    'Joker: I hvilket år skete månelandingen? (20. juli 1969)\n'+
    'Joker: Skulpturen, Den Lille havfrue, er lavet billedhuggeren Edvard Eriksen. Hvem brugte han som model? (Sin kone)';

let categories = [];
let questions = [];
let answers = [];
let alreadyRead = false;
let answeredQuestions = [];
export function readTextFile() {
    if (alreadyRead) {
        return [questions, answers];
    }
    let questionArr = textFile.split('\n');

    for (let i = 0; i < questionArr.length; i++) {
        let category = questionArr[i].split(':')[0];
        let found = -1;
        for (let j = 0; j < categories.length; j++) {
            if (categories[j] === category) {
                found = j;
                break;

            }
        }
        if (found === -1) {
            categories.push(category);
        }
    }

    questions = new Array(categories.length);
    answers = new Array(categories.length);

    for (let i = 0; i < questions.length; i++) {
        questions[i] = [];
        answers[i] = [];
    }

    for (let i = 0; i < questionArr.length; i++) {
        let splitted = questionArr[i].split(':');
        let category = splitted[0];
        let qAndA = splitted[1];
        let splitted2 = qAndA.split('(');
        let question = splitted2[0].split(')')[0];
        let answer = splitted2[1].split(')')[0];

        for (let j = 0; j < categories.length; j++) {
            if (categories[j] === category) {
                questions[j].push(question);
                answers[j].push(answer);
                break;
            }
        }
    }
    alreadyRead = true;
    for (let i = 0; i < categories.length; i++) {
        answeredQuestions.push([]);
    }
    return [questions, answers];
}

export function getCategories() {
    readTextFile();
    return categories;
}

export function getRandomNumber(category) {
    let actualCategory = category;
    readTextFile();
    let counter = 0;
    if (answeredQuestions[actualCategory].length === questions[actualCategory].length) {
        console.log("NO QUESTIONS LEFT")
        return -1;
    }
    while (true) {
        counter++;
        let random = Math.floor((Math.random() * questions[actualCategory].length));
        if (answeredQuestions[actualCategory].indexOf(random) === -1) return random;


        if (answeredQuestions[actualCategory].length === questions[actualCategory].length) {
            console.log("no questions left")
            /*
             let largestDifference = -1;
             let largestCategory = -1;
             for(let i = 0; i<questions.length; i++) {
             let questionI = questions[i];
             let randomI = answeredQuestions[i];
             let difference = questionI.length - randomI.length;
             if(difference > largestDifference) {
             largestDifference = difference;
             largestCategory = i;
             }
             }
             actualCategory = largestCategory;
             if(largestDifference < 1) {
             console.log("ALL QUESTIONS USED");
             break;
             }
             else {
             console.log("new actual cat", actualCategory)
             }*/
        }
        if (counter > 500) {
            console.log("breaking")
            break;
        }
    }
}

export function setAnsweredQuestion(category, question) {
    let newAnswered = answeredQuestions;
    newAnswered[category].push(question);
    answeredQuestions = newAnswered;
}