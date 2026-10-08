let contentTable = document.querySelector(".contentTable");
let links = document.querySelectorAll("a");
const tableOfContent = [

    {
        topic: ["Introduction to Science", "./week1/week1.html"],
        subtopics :[
            "Meaning and branches of science", 
            "Importance of science", 
            "Career opportunities in science",
            "Scientific methods"
        ],
        quiz: ["Quiz", "./week1/quiz.html"]
    },
    {
        topic: ["Human Development", "./week2/week2.html"],
        subtopics :[
            "Puberty and adolescence",
            "Physical, emotional, and social changes",
            "Personal hygiene",
            "Menstruation and menstrual hygiene",
            "Myths and facts about puberty"
        ],
        quiz: ["Quiz", "./week2/quiz.html"]
    },
    {
        topic: ["Family Health (Cleanliness)", "./week3/week3.html"],
        subtopics :[
            "Meaning of health",
            "Maintaining good health",
            "Personal cleanliness",
            "Cleaning the home",
            "Advantages of personal hygiene",
            "Causes of poor hygiene"
        ],
        quiz: ["Quiz", "./week3/quiz.html"]
    },
    {
        topic: ["Family Health (Sanitation)", "./week4/week4.html"],
        subtopics :[
            "Meaning of environmental sanitation",
            "Waste, refuse, sewage",
            "Methods of waste disposal",
            "Compost making"
        ],
        quiz: ["Quiz", "./week4/quiz.html"]
    },
    {
        topic: ["Family Health (Nutrition)", "./week5/week5.html"],
        subtopics :[
            "Definition of nutrition",
            "Functions of food",
            "Types and classification of food",
            "Roughages",
            "Balanced diet",
            "Malnutrition and deficiency diseases"
        ],
        quiz: ["Quiz", "./week5/quiz.html"]
    },
    {
        topic: ["Drug and Substance Abuse", "./week6/week6.html"],
        subtopics :[
            "Meaning and uses of drugs",
            "Drug abuse and substance abuse",
            "Effects of drug abuse"
        ],
        quiz: ["Quiz", "./week6/quiz.html"]
    },
    {
        topic: ["MID TERM TEST/ MID TERM BREAK", "./week7/week7.html"],
        quiz: ["Test", "./week7/test.html"]
    },
    {
        topic: ["Reproductive System", "./week8/week8.html"],
        subtopics :[
            "Meaning of reproduction",
            "Male and female reproductive organs and functions",
            "Human sex cells (sperm and ovum)",
            "Care of the reproductive system"
        ],
        quiz: ["Quiz", "./week8/quiz.html"]
    },
    {
        topic: ["Environmental Pollution", "./week9/week9.html"],
        subtopics :[
            "Meaning of pollution",
            "Air pollution: causes, consequences, control",
            "Soil pollution: effects and control",
            "Water pollution: causes, effects, control",
            "Water purification"
        ],
        quiz: ["Quiz", "./week9/quiz.html"]
    },
    {
        topic: ["Revision", "./week10/revision.html"]
    },
    {
        topic: ["Examination", "./week11/exam.html"]
    }
]

if (contentTable !== null){

    let rowsForHead = document.createElement("tr");
    let thForWeeks = document.createElement("th");
    let thForTopic = document.createElement("th");

    thForWeeks.textContent = "Weeks";
    thForTopic.textContent = "Topics";

    rowsForHead.appendChild(thForWeeks);
    rowsForHead.appendChild(thForTopic);

    contentTable.appendChild(rowsForHead);

    for (let i = 0; i < tableOfContent.length; i++){
        let tr = document.createElement("tr");

        let td1 = document.createElement("th");
        let td2 = document.createElement("td");

        let aTopic = document.createElement("a");

        td1.textContent = `WEEK ${i + 1}`;
        tr.appendChild(td1);

        aTopic.textContent = tableOfContent[i].topic[0];
        aTopic.href = tableOfContent[i].topic[1];
        td2.appendChild(aTopic);

        let ul = document.createElement("ul");

        let aQuiz = document.createElement("a")
        if ("quiz" in tableOfContent[i]){
            aQuiz.textContent  = tableOfContent[i].quiz[0];
            aQuiz.href  = tableOfContent[i].quiz[1]
        }

        if ("subtopics" in tableOfContent [i]){
            for (let j in tableOfContent[i].subtopics){
                let li = document.createElement("li");
                li.textContent = tableOfContent[i].subtopics[j];
                ul.appendChild(li);
            }
        }

        td2.appendChild(ul);
        td2.appendChild(aQuiz);

        tr.appendChild(td2);

        contentTable.appendChild(tr);

    }
}

links.forEach(
    link=>{
        if(link.href === window.location.href){
            link.style.backgroundColor = "rgb(166, 220, 200)";
            link.style.color = "black";
        }
    }
);

const week1Quiz = [
    {
        question: "What is science?",
        options: [
            "The systematic study of the natural world",
            "The study of money",
            "The study of politics",
            "The study of language"
        ],
        answer: "The systematic study of the natural world"
    },

    {
        question: "What does the word science come from?",
        options: [
            "Scientia",
            "Scienta",
            "Science",
            "Scientifica"
        ],
        answer: "Scientia"
    },

    {
        question: "What does the Latin word 'scientia' mean?",
        options: [
            "Knowledge",
            "Nature",
            "Experiment",
            "Life"
        ],
        answer: "Knowledge"
    },

    {
        question: "Which branch of science studies living things?",
        options: [
            "Biology",
            "Physics",
            "Chemistry",
            "Geology"
        ],
        answer: "Biology"
    },

    {
        question: "Which branch of science studies matter, its composition and properties?",
        options: [
            "Chemistry",
            "Biology",
            "Astronomy",
            "Botany"
        ],
        answer: "Chemistry"
    },

    {
        question: "Which branch of science deals mainly with matter and energy?",
        options: [
            "Physics",
            "Biology",
            "Botany",
            "Geology"
        ],
        answer: "Physics"
    },

    {
        question: "Which branch of science studies plants?",
        options: [
            "Botany",
            "Zoology",
            "Geology",
            "Meteorology"
        ],
        answer: "Botany"
    },

    {
        question: "Which branch of science studies animals?",
        options: [
            "Zoology",
            "Botany",
            "Astronomy",
            "Chemistry"
        ],
        answer: "Zoology"
    },

    {
        question: "Which branch of science studies rocks and the Earth?",
        options: [
            "Geology",
            "Biology",
            "Physics",
            "Meteorology"
        ],
        answer: "Geology"
    },

    {
        question: "Which branch of science studies the weather and atmosphere?",
        options: [
            "Meteorology",
            "Geology",
            "Botany",
            "Zoology"
        ],
        answer: "Meteorology"
    },

    {
        question: "Which branch of science studies objects in space?",
        options: [
            "Astronomy",
            "Agriculture",
            "Geology",
            "Microbiology"
        ],
        answer: "Astronomy"
    },

    {
        question: "Which branch of science deals with microorganisms?",
        options: [
            "Microbiology",
            "Botany",
            "Astronomy",
            "Physics"
        ],
        answer: "Microbiology"
    },

    {
        question: "Which field of science is concerned with farming and food production?",
        options: [
            "Agriculture",
            "Astronomy",
            "Physics",
            "Geology"
        ],
        answer: "Agriculture"
    },

    {
        question: "Which field deals with computers and computing?",
        options: [
            "Computer Science",
            "Biology",
            "Meteorology",
            "Geology"
        ],
        answer: "Computer Science"
    },

    {
        question: "Which of these is an importance of science?",
        options: [
            "Improving health",
            "Increasing ignorance",
            "Causing laziness",
            "Preventing communication"
        ],
        answer: "Improving health"
    },

    {
        question: "How does science help in food production?",
        options: [
            "It improves farming methods",
            "It stops farming",
            "It prevents the growth of crops",
            "It destroys all farm animals"
        ],
        answer: "It improves farming methods"
    },

    {
        question: "Which of these is an area where science helps humans communicate?",
        options: [
            "Communication technology",
            "Sleeping",
            "Eating",
            "Walking"
        ],
        answer: "Communication technology"
    },

    {
        question: "Which of these is a career in science?",
        options: [
            "Medical Doctor",
            "Street Trader",
            "Bus Passenger",
            "Shop Customer"
        ],
        answer: "Medical Doctor"
    },

    {
        question: "Who diagnoses and treats sick people?",
        options: [
            "Medical Doctor",
            "Geologist",
            "Meteorologist",
            "Astronomer"
        ],
        answer: "Medical Doctor"
    },

    {
        question: "Who is trained to care for sick and injured people?",
        options: [
            "Nurse",
            "Geologist",
            "Pilot",
            "Chemist"
        ],
        answer: "Nurse"
    },

    {
        question: "Who prepares and dispenses medicines?",
        options: [
            "Pharmacist",
            "Pilot",
            "Engineer",
            "Geologist"
        ],
        answer: "Pharmacist"
    },

    {
        question: "Who studies and works with rocks and the Earth?",
        options: [
            "Geologist",
            "Nurse",
            "Dentist",
            "Pharmacist"
        ],
        answer: "Geologist"
    },

    {
        question: "Who studies weather conditions?",
        options: [
            "Meteorologist",
            "Dentist",
            "Veterinary Doctor",
            "Pharmacist"
        ],
        answer: "Meteorologist"
    },

    {
        question: "Who treats animals when they are sick?",
        options: [
            "Veterinary Doctor",
            "Medical Doctor",
            "Pharmacist",
            "Dentist"
        ],
        answer: "Veterinary Doctor"
    },

    {
        question: "Who studies and develops medicines and chemicals?",
        options: [
            "Chemist",
            "Pilot",
            "Nurse",
            "Geologist"
        ],
        answer: "Chemist"
    },

    {
        question: "Who designs and builds machines, structures or systems?",
        options: [
            "Engineer",
            "Pharmacist",
            "Meteorologist",
            "Nurse"
        ],
        answer: "Engineer"
    },

    {
        question: "What is the first major step in the scientific method?",
        options: [
            "Observation or identification of a problem",
            "Writing the conclusion",
            "Reporting the results",
            "Ignoring the problem"
        ],
        answer: "Observation or identification of a problem"
    },

    {
        question: "What is a hypothesis?",
        options: [
            "A testable guess",
            "A final answer",
            "A scientific instrument",
            "A type of disease"
        ],
        answer: "A testable guess"
    },

    {
        question: "What is an experiment?",
        options: [
            "A fair test carried out to investigate an idea",
            "A random guess",
            "A final conclusion",
            "A scientific career"
        ],
        answer: "A fair test carried out to investigate an idea"
    },

    {
        question: "Why is an experiment carried out?",
        options: [
            "To test a hypothesis",
            "To avoid collecting data",
            "To prove every guess is correct",
            "To stop observation"
        ],
        answer: "To test a hypothesis"
    },

    {
        question: "What is data?",
        options: [
            "Information collected during an investigation",
            "A scientific career",
            "A type of laboratory",
            "A guess about the future"
        ],
        answer: "Information collected during an investigation"
    },

    {
        question: "What should scientists do with data collected during an experiment?",
        options: [
            "Record and analyse it",
            "Destroy it",
            "Ignore it",
            "Hide it"
        ],
        answer: "Record and analyse it"
    },

    {
        question: "What is a conclusion?",
        options: [
            "The final answer based on the results",
            "The first observation",
            "A testable guess",
            "A scientific instrument"
        ],
        answer: "The final answer based on the results"
    },

    {
        question: "What is a variable?",
        options: [
            "Anything that can change in an investigation",
            "A type of scientist",
            "A scientific career",
            "A fixed result"
        ],
        answer: "Anything that can change in an investigation"
    },

    {
        question: "Which of these is part of the scientific method?",
        options: [
            "Observation",
            "Guessing without testing",
            "Ignoring results",
            "Hiding information"
        ],
        answer: "Observation"
    },

    {
        question: "Why do scientists report their findings?",
        options: [
            "To communicate their results to others",
            "To hide their experiments",
            "To prevent others from learning",
            "To destroy their data"
        ],
        answer: "To communicate their results to others"
    },

    {
        question: "A student observes that bread grows mould faster in a warm, damp place. What is the student investigating?",
        options: [
            "Conditions that affect mould growth",
            "The colour of bread",
            "The price of bread",
            "The weight of a table"
        ],
        answer: "Conditions that affect mould growth"
    },

    {
        question: "Which condition helps mould grow on bread?",
        options: [
            "Moisture and warmth",
            "Extreme dryness",
            "Freezing only",
            "Complete absence of air"
        ],
        answer: "Moisture and warmth"
    },

    {
        question: "Which of these is NOT a branch of science?",
        options: [
            "Football",
            "Biology",
            "Chemistry",
            "Physics"
        ],
        answer: "Football"
    },

    {
        question: "Which branch of science is useful in understanding diseases and living organisms?",
        options: [
            "Biology",
            "Astronomy",
            "Geology",
            "Physics"
        ],
        answer: "Biology"
    },

    {
        question: "Which of these can science help to provide?",
        options: [
            "Better healthcare",
            "More diseases",
            "Less knowledge",
            "Poor communication"
        ],
        answer: "Better healthcare"
    },

    {
        question: "Which field can help protect the environment?",
        options: [
            "Environmental Science",
            "Fashion",
            "Music",
            "Drama"
        ],
        answer: "Environmental Science"
    },

    {
        question: "Who can develop computer programs as a science-related career?",
        options: [
            "Computer Scientist or Programmer",
            "Veterinary Doctor",
            "Dentist",
            "Meteorologist"
        ],
        answer: "Computer Scientist or Programmer"
    },

    {
        question: "Which career studies the atmosphere and weather?",
        options: [
            "Meteorologist",
            "Pharmacist",
            "Dentist",
            "Veterinary Doctor"
        ],
        answer: "Meteorologist"
    },

    {
        question: "Which of these is a benefit of science in transportation?",
        options: [
            "Improved means of transport",
            "Stopping all movement",
            "Preventing travel",
            "Destroying vehicles"
        ],
        answer: "Improved means of transport"
    },

    {
        question: "Which of these is a benefit of science in energy production?",
        options: [
            "Providing useful sources of energy",
            "Stopping electricity",
            "Preventing energy use",
            "Destroying power stations"
        ],
        answer: "Providing useful sources of energy"
    },

    {
        question: "What should a scientist do after analysing experimental results?",
        options: [
            "Draw a conclusion",
            "Start guessing randomly",
            "Destroy the results",
            "Ignore the experiment"
        ],
        answer: "Draw a conclusion"
    },

    {
        question: "Which of these shows good scientific practice?",
        options: [
            "Making observations and testing ideas",
            "Accepting every guess as true",
            "Ignoring evidence",
            "Changing results to fit an answer"
        ],
        answer: "Making observations and testing ideas"
    },

    {
        question: "Which statement about science is correct?",
        options: [
            "Science helps us understand the natural world",
            "Science is only about computers",
            "Science is only about medicine",
            "Science is based only on guessing"
        ],
        answer: "Science helps us understand the natural world"
    },

    {
        question: "Why is science important to society?",
        options: [
            "It helps solve problems and improve human life",
            "It prevents technological development",
            "It stops people from learning",
            "It makes all problems worse"
        ],
        answer: "It helps solve problems and improve human life"
    }
];
const week2Quiz = [
    {
        question: "What is puberty?",
        options: [
            "The period when a child's body changes into an adult body",
            "The period when a person stops growing",
            "The period when a person becomes old",
            "The period when a baby is born"
        ],
        answer: "The period when a child's body changes into an adult body"
    },
    {
        question: "What causes the changes that occur during puberty?",
        options: [
            "Hormones",
            "Food",
            "Exercise",
            "Sleep"
        ],
        answer: "Hormones"
    },
    {
        question: "What is adolescence?",
        options: [
            "The stage between childhood and adulthood",
            "The stage between adulthood and old age",
            "The stage when a baby is born",
            "The stage when a person stops growing"
        ],
        answer: "The stage between childhood and adulthood"
    },
    {
        question: "What is the usual age range for adolescence?",
        options: [
            "10–19 years",
            "1–5 years",
            "20–30 years",
            "30–40 years"
        ],
        answer: "10–19 years"
    },
    {
        question: "Which statement correctly describes puberty and adolescence?",
        options: [
            "Puberty is mainly physical, while adolescence includes physical, emotional and social development",
            "Puberty and adolescence are completely unrelated",
            "Adolescence is only a physical change",
            "Puberty occurs only after adulthood"
        ],
        answer: "Puberty is mainly physical, while adolescence includes physical, emotional and social development"
    },
    {
        question: "What are hormones?",
        options: [
            "Chemical messengers in the body",
            "Types of food",
            "Bones in the body",
            "Types of blood cells"
        ],
        answer: "Chemical messengers in the body"
    },
    {
        question: "Which organ produces oestrogen in girls?",
        options: [
            "Ovaries",
            "Testes",
            "Lungs",
            "Kidneys"
        ],
        answer: "Ovaries"
    },
    {
        question: "Which hormone is mainly produced by the testes in boys?",
        options: [
            "Testosterone",
            "Oestrogen",
            "Insulin",
            "Adrenaline"
        ],
        answer: "Testosterone"
    },
    {
        question: "At what age does puberty usually begin in girls according to the notes?",
        options: [
            "8–13 years",
            "2–5 years",
            "15–20 years",
            "20–25 years"
        ],
        answer: "8–13 years"
    },
    {
        question: "At what age does puberty usually begin in boys according to the notes?",
        options: [
            "9–14 years",
            "2–6 years",
            "15–20 years",
            "20–25 years"
        ],
        answer: "9–14 years"
    },
    {
        question: "Which of these is a physical change that occurs in both boys and girls during puberty?",
        options: [
            "Growth in height",
            "Menstruation",
            "Beard growth",
            "Voice becoming very deep"
        ],
        answer: "Growth in height"
    },
    {
        question: "What happens to body hair during puberty?",
        options: [
            "Hair grows in the armpit and pubic areas",
            "All body hair disappears",
            "Hair stops growing completely",
            "Only hair on the head grows"
        ],
        answer: "Hair grows in the armpit and pubic areas"
    },
    {
        question: "Why may body odour increase during puberty?",
        options: [
            "Sweating increases",
            "Bones become weaker",
            "The heart stops working properly",
            "The lungs become smaller"
        ],
        answer: "Sweating increases"
    },
    {
        question: "What skin changes may occur during puberty?",
        options: [
            "Oily skin and acne",
            "The skin always becomes completely dry",
            "The skin stops producing oil",
            "The skin becomes permanently white"
        ],
        answer: "Oily skin and acne"
    },
    {
        question: "What may happen to appetite during puberty?",
        options: [
            "It may increase",
            "It always disappears",
            "It stops completely",
            "It never changes"
        ],
        answer: "It may increase"
    },
    {
        question: "Which is a physical change that commonly occurs in boys during puberty?",
        options: [
            "The voice becomes deeper",
            "Menstruation begins",
            "The hips become wider",
            "Breasts develop"
        ],
        answer: "The voice becomes deeper"
    },
    {
        question: "Which facial hair may develop in boys during puberty?",
        options: [
            "Beard and moustache",
            "Eyebrow hair only",
            "Eyelash hair",
            "No facial hair"
        ],
        answer: "Beard and moustache"
    },
    {
        question: "What happens to the shoulders of many boys during puberty?",
        options: [
            "They become broader",
            "They become shorter",
            "They disappear",
            "They become narrower in every case"
        ],
        answer: "They become broader"
    },
    {
        question: "What happens to the muscles of boys during puberty?",
        options: [
            "They may become more developed",
            "They completely disappear",
            "They stop working",
            "They turn into bones"
        ],
        answer: "They may become more developed"
    },
    {
        question: "What are wet dreams?",
        options: [
            "A normal change that may occur in boys during puberty",
            "A serious disease",
            "A type of infection",
            "A problem caused by poor hygiene"
        ],
        answer: "A normal change that may occur in boys during puberty"
    },
    {
        question: "Which physical change commonly occurs in girls during puberty?",
        options: [
            "Breast development",
            "Beard growth",
            "Voice becoming very deep",
            "Testes enlargement"
        ],
        answer: "Breast development"
    },
    {
        question: "What happens to the hips of girls during puberty?",
        options: [
            "They may become wider",
            "They disappear",
            "They become completely flat",
            "They stop developing"
        ],
        answer: "They may become wider"
    },
    {
        question: "What is menstruation?",
        options: [
            "The monthly discharge of blood and tissue from the uterus through the vagina",
            "The growth of hair on the head",
            "The development of muscles",
            "The production of sweat"
        ],
        answer: "The monthly discharge of blood and tissue from the uterus through the vagina"
    },
    {
        question: "What is menarche?",
        options: [
            "A girl's first menstruation",
            "A boy's first wet dream",
            "The growth of facial hair",
            "The end of puberty"
        ],
        answer: "A girl's first menstruation"
    },
    {
        question: "What is the average length of the menstrual cycle?",
        options: [
            "28 days",
            "7 days",
            "14 days",
            "60 days"
        ],
        answer: "28 days"
    },
    {
        question: "What is the usual range of the menstrual cycle mentioned in the notes?",
        options: [
            "21–35 days",
            "1–5 days",
            "40–50 days",
            "60–70 days"
        ],
        answer: "21–35 days"
    },
    {
        question: "How long does menstrual bleeding usually last?",
        options: [
            "3–7 days",
            "1 hour",
            "10–20 days",
            "30 days"
        ],
        answer: "3–7 days"
    },
    {
        question: "Around which day does ovulation usually occur in a 28-day cycle?",
        options: [
            "Around day 14",
            "Around day 1",
            "Around day 28",
            "Around day 30"
        ],
        answer: "Around day 14"
    },
    {
        question: "What happens if the egg is not fertilised?",
        options: [
            "The lining of the uterus breaks down and leaves as blood",
            "The egg becomes a baby immediately",
            "The uterus disappears",
            "The ovaries stop working permanently"
        ],
        answer: "The lining of the uterus breaks down and leaves as blood"
    },
    {
        question: "Which of these can be a sign of menstruation?",
        options: [
            "Cramps",
            "Broken bones",
            "Loss of eyesight",
            "Permanent fever"
        ],
        answer: "Cramps"
    },
    {
        question: "Which other physical symptom may occur during menstruation?",
        options: [
            "Back pain",
            "Broken teeth",
            "Loss of hair completely",
            "Permanent deafness"
        ],
        answer: "Back pain"
    },
    {
        question: "Which emotional change is common during adolescence?",
        options: [
            "Mood swings",
            "Permanent happiness",
            "Complete loss of emotions",
            "No feelings at all"
        ],
        answer: "Mood swings"
    },
    {
        question: "Why may adolescents become self-conscious?",
        options: [
            "Their bodies and emotions are changing",
            "They stop growing",
            "They stop having friends",
            "Their bones disappear"
        ],
        answer: "Their bodies and emotions are changing"
    },
    {
        question: "What may adolescents begin to experience during puberty?",
        options: [
            "Attraction to others",
            "Loss of all emotions",
            "Permanent sickness",
            "Loss of appetite forever"
        ],
        answer: "Attraction to others"
    },
    {
        question: "What may adolescents want more of as they grow?",
        options: [
            "Privacy and independence",
            "Less responsibility forever",
            "More dependence in every situation",
            "No personal decisions"
        ],
        answer: "Privacy and independence"
    },
    {
        question: "What should an adolescent do when feeling confused, anxious or stressed?",
        options: [
            "Talk to a trusted parent, guardian, teacher or counsellor",
            "Keep everything secret",
            "Use drugs",
            "Avoid everyone"
        ],
        answer: "Talk to a trusted parent, guardian, teacher or counsellor"
    },
    {
        question: "Which of these can help an adolescent cope with emotional changes?",
        options: [
            "Adequate sleep and exercise",
            "Drug abuse",
            "Avoiding all adults",
            "Skipping meals"
        ],
        answer: "Adequate sleep and exercise"
    },
    {
        question: "What is one social change that may occur during adolescence?",
        options: [
            "More friendships and peer influence",
            "No interest in friends",
            "Complete isolation",
            "Loss of communication"
        ],
        answer: "More friendships and peer influence"
    },
    {
        question: "What is peer pressure?",
        options: [
            "Influence from friends or people of the same age group",
            "Pressure from the weather",
            "Pressure from parents only",
            "Pressure from food"
        ],
        answer: "Influence from friends or people of the same age group"
    },
    {
        question: "Which is an example of bad peer pressure?",
        options: [
            "Taking drugs because friends encourage you",
            "Studying with good friends",
            "Playing sports",
            "Listening to a teacher"
        ],
        answer: "Taking drugs because friends encourage you"
    },
    {
        question: "What should a young person do when pressured to do something wrong?",
        options: [
            "Say no and seek guidance",
            "Join immediately",
            "Hide it from everyone",
            "Copy the group"
        ],
        answer: "Say no and seek guidance"
    },
    {
        question: "How often should a person bathe during puberty according to the notes?",
        options: [
            "At least twice daily",
            "Once a month",
            "Once a week",
            "Only when dirty"
        ],
        answer: "At least twice daily"
    },
    {
        question: "Which parts of the body should be washed carefully during puberty?",
        options: [
            "The armpits and private parts",
            "Only the hands",
            "Only the feet",
            "Only the face"
        ],
        answer: "The armpits and private parts"
    },
    {
        question: "How often should underwear be changed?",
        options: [
            "Daily",
            "Once a month",
            "Once a week",
            "Only when torn"
        ],
        answer: "Daily"
    },
    {
        question: "How often should the face be washed during puberty?",
        options: [
            "Twice daily",
            "Once a month",
            "Once a week",
            "Never"
        ],
        answer: "Twice daily"
    },
    {
        question: "What should a person avoid doing to pimples?",
        options: [
            "Squeezing them",
            "Washing the face",
            "Keeping the skin clean",
            "Using clean water"
        ],
        answer: "Squeezing them"
    },
    {
        question: "How often should teeth be brushed?",
        options: [
            "Twice daily",
            "Once a month",
            "Once a week",
            "Only when there is pain"
        ],
        answer: "Twice daily"
    },
    {
        question: "How often should a menstrual pad generally be changed?",
        options: [
            "Every 4–6 hours",
            "Once every two days",
            "Once a week",
            "Only when it is completely full"
        ],
        answer: "Every 4–6 hours"
    },
    {
        question: "Which direction should be used when cleaning after menstruation or using the toilet?",
        options: [
            "Front to back",
            "Back to front",
            "Side to side only",
            "There is no recommended direction"
        ],
        answer: "Front to back"
    },
    {
        question: "What should be done with used menstrual pads?",
        options: [
            "Wrap them and dispose of them in a dustbin",
            "Flush them down the toilet",
            "Throw them into a river",
            "Leave them on the floor"
        ],
        answer: "Wrap them and dispose of them in a dustbin"
    }
];
const week3Quiz = [
    {
        question: "According to WHO, what is health?",
        options: [
            "A state of complete physical, mental and social well-being",
            "The absence of hunger only",
            "The ability to work every day",
            "The absence of physical pain only"
        ],
        answer: "A state of complete physical, mental and social well-being"
    },
    {
        question: "What does physical health mean?",
        options: [
            "The body works well and is free from disease",
            "Being able to make many friends",
            "Being able to solve difficult problems",
            "Being wealthy"
        ],
        answer: "The body works well and is free from disease"
    },
    {
        question: "What does mental health involve?",
        options: [
            "Sound, calm and clear thinking",
            "Having a large house",
            "Having many friends",
            "Having strong muscles only"
        ],
        answer: "Sound, calm and clear thinking"
    },
    {
        question: "What does social health involve?",
        options: [
            "Getting along well with family, friends and the community",
            "Having no physical activity",
            "Eating only fruits",
            "Sleeping all day"
        ],
        answer: "Getting along well with family, friends and the community"
    },
    {
        question: "Which of these helps to maintain good health?",
        options: [
            "Eating a balanced diet",
            "Skipping meals regularly",
            "Avoiding exercise",
            "Drinking unsafe water"
        ],
        answer: "Eating a balanced diet"
    },
    {
        question: "How many glasses of clean, safe water are recommended daily in the notes?",
        options: [
            "6–8 glasses",
            "1 glass",
            "15–20 glasses",
            "30 glasses"
        ],
        answer: "6–8 glasses"
    },
    {
        question: "How many hours of sleep are recommended for adolescents?",
        options: [
            "8–10 hours",
            "1–2 hours",
            "3–4 hours",
            "15–20 hours"
        ],
        answer: "8–10 hours"
    },
    {
        question: "Why is regular exercise important?",
        options: [
            "It helps maintain good health and fitness",
            "It causes disease",
            "It replaces the need for food",
            "It prevents sleep"
        ],
        answer: "It helps maintain good health and fitness"
    },
    {
        question: "Which of these should be avoided to maintain good health?",
        options: [
            "Alcohol, tobacco and hard drugs",
            "Clean water",
            "Exercise",
            "Balanced meals"
        ],
        answer: "Alcohol, tobacco and hard drugs"
    },
    {
        question: "What should a person do when sick instead of self-medicating?",
        options: [
            "Seek treatment at a hospital or clinic",
            "Ignore the illness",
            "Take any available drug",
            "Ask friends for leftover medicine"
        ],
        answer: "Seek treatment at a hospital or clinic"
    },
    {
        question: "What is personal hygiene?",
        options: [
            "Keeping the body clean and caring for it to prevent disease",
            "Keeping only the house clean",
            "Wearing expensive clothes",
            "Eating large amounts of food"
        ],
        answer: "Keeping the body clean and caring for it to prevent disease"
    },
    {
        question: "How often should a person bathe according to the notes?",
        options: [
            "Twice daily",
            "Once a week",
            "Once a month",
            "Only when sick"
        ],
        answer: "Twice daily"
    },
    {
        question: "What should be used to dry the body after bathing?",
        options: [
            "A clean towel",
            "Dirty clothing",
            "A dusty cloth",
            "Newspaper"
        ],
        answer: "A clean towel"
    },
    {
        question: "How should hair be cared for?",
        options: [
            "Wash it regularly and comb it daily",
            "Never wash it",
            "Share combs with everyone",
            "Keep it dirty"
        ],
        answer: "Wash it regularly and comb it daily"
    },
    {
        question: "Why should combs and brushes not be shared?",
        options: [
            "To help prevent the spread of infections",
            "Because they are expensive",
            "Because they make hair grow faster",
            "Because they are only for adults"
        ],
        answer: "To help prevent the spread of infections"
    },
    {
        question: "How often should teeth be brushed?",
        options: [
            "Twice daily",
            "Once a month",
            "Once a week",
            "Only when they hurt"
        ],
        answer: "Twice daily"
    },
    {
        question: "Which practice helps care for the teeth?",
        options: [
            "Flossing",
            "Eating more sugar",
            "Never brushing",
            "Using dirty water"
        ],
        answer: "Flossing"
    },
    {
        question: "How often should a person visit the dentist according to the notes?",
        options: [
            "Twice yearly",
            "Once every ten years",
            "Every month",
            "Only after losing all teeth"
        ],
        answer: "Twice yearly"
    },
    {
        question: "How should fingernails be kept?",
        options: [
            "Short and clean",
            "Long and dirty",
            "Covered with mud",
            "Unwashed"
        ],
        answer: "Short and clean"
    },
    {
        question: "Which habit should be avoided because it can affect nail hygiene?",
        options: [
            "Biting the nails",
            "Cutting the nails",
            "Washing the hands",
            "Keeping nails short"
        ],
        answer: "Biting the nails"
    },
    {
        question: "When should hands be washed?",
        options: [
            "Before eating and after using the toilet",
            "Only before sleeping",
            "Only in the morning",
            "Only when visitors come"
        ],
        answer: "Before eating and after using the toilet"
    },
    {
        question: "What should be used when washing hands?",
        options: [
            "Soap and running water",
            "Only dust",
            "Oil and sand",
            "Perfume only"
        ],
        answer: "Soap and running water"
    },
    {
        question: "How long should hands be scrubbed during proper handwashing?",
        options: [
            "At least 20 seconds",
            "1 second",
            "2 seconds",
            "1 minute exactly"
        ],
        answer: "At least 20 seconds"
    },
    {
        question: "Which part of the hands should be cleaned during handwashing?",
        options: [
            "Palms, backs, between fingers, thumbs and fingertips",
            "Only the palms",
            "Only the fingertips",
            "Only the thumbs"
        ],
        answer: "Palms, backs, between fingers, thumbs and fingertips"
    },
    {
        question: "How should the eyes be cared for?",
        options: [
            "Avoid touching them with dirty hands",
            "Rub them with dirty hands",
            "Share eye drops",
            "Clean them with sharp objects"
        ],
        answer: "Avoid touching them with dirty hands"
    },
    {
        question: "Which practice is unsafe for the ears?",
        options: [
            "Putting pins or matchsticks inside them",
            "Cleaning the outer part",
            "Keeping them clean",
            "Keeping them dry"
        ],
        answer: "Putting pins or matchsticks inside them"
    },
    {
        question: "Which part of the ears should normally be cleaned?",
        options: [
            "The outer part",
            "Deep inside the ear",
            "The eardrum",
            "The inner ear"
        ],
        answer: "The outer part"
    },
    {
        question: "Why should feet be washed and dried properly?",
        options: [
            "To maintain cleanliness and prevent problems between the toes",
            "To make the feet bigger",
            "To change their colour",
            "To stop the feet from growing"
        ],
        answer: "To maintain cleanliness and prevent problems between the toes"
    },
    {
        question: "How should underwear be kept?",
        options: [
            "Clean and changed daily",
            "Dirty and unchanged",
            "Shared with others",
            "Wet at all times"
        ],
        answer: "Clean and changed daily"
    },
    {
        question: "What should a person use when sneezing?",
        options: [
            "A clean handkerchief or tissue",
            "Their bare hands only",
            "Dirty clothing",
            "The floor"
        ],
        answer: "A clean handkerchief or tissue"
    },
    {
        question: "What is one important part of keeping a home clean?",
        options: [
            "Sweeping and mopping regularly",
            "Leaving refuse on the floor",
            "Allowing stagnant water to remain",
            "Leaving food uncovered"
        ],
        answer: "Sweeping and mopping regularly"
    },
    {
        question: "How should dishes be handled after use?",
        options: [
            "They should be washed immediately",
            "They should be left for several days",
            "They should be thrown outside",
            "They should be kept under the bed"
        ],
        answer: "They should be washed immediately"
    },
    {
        question: "How should food be stored at home?",
        options: [
            "Covered and safely stored",
            "Uncovered on the floor",
            "Beside refuse",
            "Outside in stagnant water"
        ],
        answer: "Covered and safely stored"
    },
    {
        question: "How should toilets and bathrooms be cleaned?",
        options: [
            "With suitable disinfectant",
            "With mud",
            "By leaving them dirty",
            "With refuse"
        ],
        answer: "With suitable disinfectant"
    },
    {
        question: "What should be done with bedding and towels?",
        options: [
            "Wash them regularly and air them properly",
            "Never wash them",
            "Share dirty ones",
            "Keep them wet"
        ],
        answer: "Wash them regularly and air them properly"
    },
    {
        question: "Why should windows be opened sometimes?",
        options: [
            "To allow fresh air and sunlight into the home",
            "To bring in refuse",
            "To allow pests inside",
            "To increase bad smells"
        ],
        answer: "To allow fresh air and sunlight into the home"
    },
    {
        question: "How should household refuse be handled?",
        options: [
            "Put it in a covered bin and empty it regularly",
            "Throw it into the street",
            "Put it into rivers",
            "Leave it uncovered"
        ],
        answer: "Put it in a covered bin and empty it regularly"
    },
    {
        question: "Which of these can be a pest found around dirty surroundings?",
        options: [
            "Cockroaches",
            "Butterflies",
            "Dolphins",
            "Eagles"
        ],
        answer: "Cockroaches"
    },
    {
        question: "Why should stagnant water around the home be removed?",
        options: [
            "It can provide breeding places for mosquitoes",
            "It makes the house stronger",
            "It improves drinking water",
            "It prevents pests"
        ],
        answer: "It can provide breeding places for mosquitoes"
    },
    {
        question: "Which of these is a material used for cleaning the home?",
        options: [
            "Broom",
            "Television",
            "School uniform",
            "Mobile phone"
        ],
        answer: "Broom"
    },
    {
        question: "Which disease can poor hygiene contribute to?",
        options: [
            "Cholera",
            "Broken bone",
            "Colour blindness",
            "Deafness"
        ],
        answer: "Cholera"
    },
    {
        question: "Which disease can be associated with poor personal hygiene?",
        options: [
            "Scabies",
            "Asthma only",
            "Broken arm",
            "Short sight"
        ],
        answer: "Scabies"
    },
    {
        question: "How can good hygiene help prevent disease?",
        options: [
            "It helps prevent the spread of germs",
            "It increases the number of germs",
            "It makes food poisonous",
            "It stops the body from growing"
        ],
        answer: "It helps prevent the spread of germs"
    },
    {
        question: "How can good personal hygiene affect a person's appearance?",
        options: [
            "It improves appearance and confidence",
            "It always makes the person sick",
            "It causes body odour",
            "It makes clothes dirty"
        ],
        answer: "It improves appearance and confidence"
    },
    {
        question: "How can good hygiene help with treatment costs?",
        options: [
            "It can help save money by preventing some diseases",
            "It always increases hospital bills",
            "It makes diseases more expensive",
            "It prevents people from working"
        ],
        answer: "It can help save money by preventing some diseases"
    },
    {
        question: "Which of these can cause poor hygiene?",
        options: [
            "Lack of clean water",
            "Regular bathing",
            "Good waste disposal",
            "Clean surroundings"
        ],
        answer: "Lack of clean water"
    },
    {
        question: "Which social condition can contribute to poor hygiene?",
        options: [
            "Overcrowding",
            "Good housing",
            "Clean toilets",
            "Adequate water supply"
        ],
        answer: "Overcrowding"
    },
    {
        question: "Which of these is another cause of poor hygiene?",
        options: [
            "Poor waste disposal",
            "Regular handwashing",
            "Clean clothing",
            "Proper sanitation"
        ],
        answer: "Poor waste disposal"
    },
    {
        question: "Which disease can result from poor hygiene and contaminated surroundings?",
        options: [
            "Typhoid",
            "Broken leg",
            "Colour blindness",
            "Hearing loss"
        ],
        answer: "Typhoid"
    },
    {
        question: "What is one major benefit of keeping the home and body clean?",
        options: [
            "Prevention of diseases and spread of germs",
            "Increase in harmful germs",
            "More stagnant water",
            "More pests"
        ],
        answer: "Prevention of diseases and spread of germs"
    }
];
const week4Quiz = [
    {
        question: "What is environmental sanitation?",
        options: [
            "Keeping the home, school, market, streets and water sources clean",
            "Keeping only the body clean",
            "Planting flowers in the home",
            "Cleaning only the classroom"
        ],
        answer: "Keeping the home, school, market, streets and water sources clean"
    },
    {
        question: "What is one major importance of environmental sanitation?",
        options: [
            "It helps prevent diseases",
            "It increases pollution",
            "It causes flooding",
            "It increases pests"
        ],
        answer: "It helps prevent diseases"
    },
    {
        question: "Which disease can be prevented through good environmental sanitation?",
        options: [
            "Cholera",
            "Broken bone",
            "Colour blindness",
            "Deafness"
        ],
        answer: "Cholera"
    },
    {
        question: "What can blocked drains cause?",
        options: [
            "Flooding",
            "Clean water",
            "Better sanitation",
            "Less pollution"
        ],
        answer: "Flooding"
    },
    {
        question: "Which activity helps maintain environmental sanitation?",
        options: [
            "Clearing gutters",
            "Dumping refuse in rivers",
            "Open defecation",
            "Leaving stagnant water"
        ],
        answer: "Clearing gutters"
    },
    {
        question: "What should be done to stagnant water?",
        options: [
            "Drain it",
            "Leave it standing",
            "Drink it",
            "Use it to store food"
        ],
        answer: "Drain it"
    },
    {
        question: "What is waste?",
        options: [
            "An unwanted or useless material that is thrown away",
            "Clean drinking water",
            "Fresh food",
            "A useful medicine"
        ],
        answer: "An unwanted or useless material that is thrown away"
    },
    {
        question: "What is refuse?",
        options: [
            "Solid waste from homes, schools, markets and offices",
            "Liquid waste only",
            "Clean drinking water",
            "Fresh air"
        ],
        answer: "Solid waste from homes, schools, markets and offices"
    },
    {
        question: "Which of these is an example of refuse?",
        options: [
            "Paper",
            "Clean air",
            "Sunlight",
            "Rainwater"
        ],
        answer: "Paper"
    },
    {
        question: "What is sewage?",
        options: [
            "Liquid waste containing human waste and wastewater",
            "Solid food waste only",
            "Clean drinking water",
            "Dry leaves only"
        ],
        answer: "Liquid waste containing human waste and wastewater"
    },
    {
        question: "Which type of waste is produced by industries?",
        options: [
            "Industrial waste",
            "Agricultural waste",
            "Household food",
            "Biodegradable waste only"
        ],
        answer: "Industrial waste"
    },
    {
        question: "Which is an example of agricultural waste?",
        options: [
            "Animal dung",
            "Syringes",
            "Plastic bottles",
            "Used batteries"
        ],
        answer: "Animal dung"
    },
    {
        question: "Which type of waste includes syringes and bandages?",
        options: [
            "Hospital clinical waste",
            "Agricultural waste",
            "Household waste",
            "Biodegradable waste"
        ],
        answer: "Hospital clinical waste"
    },
    {
        question: "Which of these is biodegradable?",
        options: [
            "Food waste",
            "Glass",
            "Plastic",
            "Metal"
        ],
        answer: "Food waste"
    },
    {
        question: "Which of these is non-biodegradable?",
        options: [
            "Plastic",
            "Leaves",
            "Food",
            "Animal dung"
        ],
        answer: "Plastic"
    },
    {
        question: "What does dumping mean in waste disposal?",
        options: [
            "Throwing waste away in a particular place",
            "Turning waste into manure",
            "Using an item again",
            "Separating waste"
        ],
        answer: "Throwing waste away in a particular place"
    },
    {
        question: "What is one disadvantage of improper dumping?",
        options: [
            "It can cause bad smells and attract flies and rats",
            "It produces clean water",
            "It improves the environment",
            "It prevents pollution"
        ],
        answer: "It can cause bad smells and attract flies and rats"
    },
    {
        question: "What is incineration?",
        options: [
            "Burning waste",
            "Burying waste",
            "Reusing waste",
            "Turning waste into water"
        ],
        answer: "Burning waste"
    },
    {
        question: "What is one advantage of burning waste?",
        options: [
            "It reduces the volume of waste",
            "It always produces clean air",
            "It increases waste",
            "It prevents all pollution"
        ],
        answer: "It reduces the volume of waste"
    },
    {
        question: "Why can burning some waste be harmful?",
        options: [
            "It can produce harmful smoke and gases",
            "It produces clean drinking water",
            "It prevents all diseases",
            "It produces food"
        ],
        answer: "It can produce harmful smoke and gases"
    },
    {
        question: "What is a landfill?",
        options: [
            "A place where waste is buried and covered with soil",
            "A place where food is cooked",
            "A place where water is purified",
            "A place where crops are planted"
        ],
        answer: "A place where waste is buried and covered with soil"
    },
    {
        question: "What is one disadvantage of landfilling?",
        options: [
            "It can contaminate groundwater",
            "It always produces fresh water",
            "It requires no space",
            "It produces food"
        ],
        answer: "It can contaminate groundwater"
    },
    {
        question: "What is composting?",
        options: [
            "Allowing biodegradable waste to decay into manure",
            "Burning plastic",
            "Burying glass",
            "Throwing waste into rivers"
        ],
        answer: "Allowing biodegradable waste to decay into manure"
    },
    {
        question: "What is recycling?",
        options: [
            "Processing used materials into new products",
            "Throwing waste on the street",
            "Burning every type of waste",
            "Leaving waste in gutters"
        ],
        answer: "Processing used materials into new products"
    },
    {
        question: "What is reusing?",
        options: [
            "Using an item again",
            "Destroying an item immediately",
            "Burning all waste",
            "Throwing an item into a river"
        ],
        answer: "Using an item again"
    },
    {
        question: "Which method can be used to dispose of sewage?",
        options: [
            "Pit latrine",
            "Open street",
            "River dumping",
            "Bush dumping"
        ],
        answer: "Pit latrine"
    },
    {
        question: "What is a septic tank?",
        options: [
            "An underground tank where bacteria break down sewage",
            "A tank used to store drinking water only",
            "A container for dry food",
            "A tank used to burn refuse"
        ],
        answer: "An underground tank where bacteria break down sewage"
    },
    {
        question: "What is a treatment plant used for?",
        options: [
            "Treating sewage before it is released",
            "Storing clothes",
            "Cooking food",
            "Growing crops"
        ],
        answer: "Treating sewage before it is released"
    },
    {
        question: "Which of these is an unhealthy method of defecation?",
        options: [
            "Using the bush",
            "Using a proper toilet",
            "Using a treated sewage system",
            "Using a clean pit latrine"
        ],
        answer: "Using the bush"
    },
    {
        question: "Which of these should be used for good refuse disposal?",
        options: [
            "Covered bins",
            "Open gutters",
            "Rivers",
            "Roads"
        ],
        answer: "Covered bins"
    },
    {
        question: "What is compost mainly made from?",
        options: [
            "Biodegradable plant and animal waste",
            "Plastic and glass",
            "Metal and rubber",
            "Bottles and tins"
        ],
        answer: "Biodegradable plant and animal waste"
    },
    {
        question: "Which is a green material used in composting?",
        options: [
            "Fresh grass",
            "Dry leaves",
            "Sawdust",
            "Cardboard"
        ],
        answer: "Fresh grass"
    },
    {
        question: "Which is a brown material used in composting?",
        options: [
            "Dry leaves",
            "Fresh grass",
            "Vegetable peels",
            "Fresh animal manure"
        ],
        answer: "Dry leaves"
    },
    {
        question: "Why is water added to compost?",
        options: [
            "To keep the compost moist",
            "To make it completely flooded",
            "To prevent decay",
            "To kill all microorganisms"
        ],
        answer: "To keep the compost moist"
    },
    {
        question: "How should compost moisture be maintained?",
        options: [
            "Moist but not wet",
            "Completely dry",
            "Completely flooded",
            "Frozen"
        ],
        answer: "Moist but not wet"
    },
    {
        question: "Why should compost be turned regularly?",
        options: [
            "To allow air into the compost",
            "To remove all water",
            "To stop decomposition",
            "To make it completely dry"
        ],
        answer: "To allow air into the compost"
    },
    {
        question: "How often should compost be turned according to the notes?",
        options: [
            "Every 2 weeks",
            "Every hour",
            "Once a year",
            "Every 6 months"
        ],
        answer: "Every 2 weeks"
    },
    {
        question: "How long can compost take to become dark brown and crumbly?",
        options: [
            "6–12 weeks",
            "1 day",
            "1 hour",
            "2 years"
        ],
        answer: "6–12 weeks"
    },
    {
        question: "Which of these should NOT be put into a compost heap?",
        options: [
            "Plastic",
            "Vegetable peels",
            "Fresh grass",
            "Dry leaves"
        ],
        answer: "Plastic"
    },
    {
        question: "Which of these should NOT be added to compost?",
        options: [
            "Glass",
            "Fruit remains",
            "Animal manure",
            "Dry leaves"
        ],
        answer: "Glass"
    },
    {
        question: "What is one benefit of compost?",
        options: [
            "It improves soil fertility",
            "It makes soil poisonous",
            "It increases plastic waste",
            "It prevents plants from growing"
        ],
        answer: "It improves soil fertility"
    },
    {
        question: "How can compost help the environment?",
        options: [
            "It reduces the amount of refuse",
            "It increases plastic pollution",
            "It produces more sewage",
            "It increases littering"
        ],
        answer: "It reduces the amount of refuse"
    },
    {
        question: "Which waste disposal method can save natural resources?",
        options: [
            "Recycling",
            "Open dumping",
            "Littering",
            "Open defecation"
        ],
        answer: "Recycling"
    },
    {
        question: "Why should waste be separated before disposal?",
        options: [
            "Different types of waste can be handled appropriately",
            "To increase pollution",
            "To make gutters blocked",
            "To attract pests"
        ],
        answer: "Different types of waste can be handled appropriately"
    },
    {
        question: "What can poor waste disposal attract?",
        options: [
            "Flies and rats",
            "Clean water",
            "Fresh air",
            "Healthy crops"
        ],
        answer: "Flies and rats"
    },
    {
        question: "Which activity helps prevent mosquito breeding?",
        options: [
            "Removing stagnant water",
            "Leaving water in containers",
            "Blocking gutters",
            "Dumping refuse around the house"
        ],
        answer: "Removing stagnant water"
    },
    {
        question: "What is one purpose of proper environmental sanitation?",
        options: [
            "To protect water sources from pollution",
            "To increase disease",
            "To encourage open defecation",
            "To attract pests"
        ],
        answer: "To protect water sources from pollution"
    },
    {
        question: "Which of these is an example of non-biodegradable waste?",
        options: [
            "Glass",
            "Leaves",
            "Food scraps",
            "Animal dung"
        ],
        answer: "Glass"
    },
    {
        question: "Which of these is an example of biodegradable waste?",
        options: [
            "Leaves",
            "Rubber",
            "Glass",
            "Metal"
        ],
        answer: "Leaves"
    },
    {
        question: "What is the best description of a clean environment?",
        options: [
            "An environment free from dirt, waste and disease-causing organisms",
            "An environment full of refuse",
            "An environment with blocked gutters",
            "An environment with stagnant water"
        ],
        answer: "An environment free from dirt, waste and disease-causing organisms"
    }
];
const week5Quiz = [
    {
        question: "What is nutrition?",
        options: [
            "The process by which living things take in and use food",
            "The process of breathing only",
            "The process of sleeping",
            "The process of removing waste only"
        ],
        answer: "The process by which living things take in and use food"
    },
    {
        question: "What is food?",
        options: [
            "A substance eaten or drunk that provides the body with what it needs",
            "Only water",
            "Only fruits",
            "Any substance that causes sickness"
        ],
        answer: "A substance eaten or drunk that provides the body with what it needs"
    },
    {
        question: "What are nutrients?",
        options: [
            "Useful substances found in food",
            "Diseases found in the body",
            "Types of medicines",
            "Waste products"
        ],
        answer: "Useful substances found in food"
    },
    {
        question: "Which of these is a class of food nutrients?",
        options: [
            "Carbohydrates",
            "Dirt",
            "Smoke",
            "Dust"
        ],
        answer: "Carbohydrates"
    },
    {
        question: "Which nutrient is mainly needed for growth and repair of body tissues?",
        options: [
            "Protein",
            "Water",
            "Roughage",
            "Vitamin C"
        ],
        answer: "Protein"
    },
    {
        question: "Which of these is a good source of protein?",
        options: [
            "Beans",
            "Sugar",
            "Water",
            "Salt"
        ],
        answer: "Beans"
    },
    {
        question: "What is one major function of carbohydrates?",
        options: [
            "Providing energy",
            "Forming hair only",
            "Preventing all diseases",
            "Producing bones only"
        ],
        answer: "Providing energy"
    },
    {
        question: "Which of these is a source of carbohydrates?",
        options: [
            "Yam",
            "Fish",
            "Egg",
            "Meat"
        ],
        answer: "Yam"
    },
    {
        question: "Which nutrient provides more energy than carbohydrates?",
        options: [
            "Fats and oils",
            "Vitamins",
            "Minerals",
            "Water"
        ],
        answer: "Fats and oils"
    },
    {
        question: "Which of these is a source of fats and oils?",
        options: [
            "Palm oil",
            "Orange",
            "Water",
            "Lettuce"
        ],
        answer: "Palm oil"
    },
    {
        question: "What is one function of vitamins?",
        options: [
            "They help protect the body and keep it working properly",
            "They provide all the body's water",
            "They replace bones",
            "They cause diseases"
        ],
        answer: "They help protect the body and keep it working properly"
    },
    {
        question: "Which of these is a good source of vitamins?",
        options: [
            "Fruits",
            "Plastic",
            "Sand",
            "Petrol"
        ],
        answer: "Fruits"
    },
    {
        question: "What is one function of mineral salts?",
        options: [
            "They help form bones and teeth",
            "They cause infections",
            "They replace oxygen",
            "They prevent digestion"
        ],
        answer: "They help form bones and teeth"
    },
    {
        question: "Which of these is a source of mineral salts?",
        options: [
            "Milk",
            "Sugar",
            "Soft drink",
            "Petrol"
        ],
        answer: "Milk"
    },
    {
        question: "Which nutrient helps dissolve nutrients and remove waste from the body?",
        options: [
            "Water",
            "Protein",
            "Fat",
            "Roughage"
        ],
        answer: "Water"
    },
    {
        question: "Which nutrient helps prevent constipation?",
        options: [
            "Roughage",
            "Fat",
            "Sugar",
            "Oil"
        ],
        answer: "Roughage"
    },
    {
        question: "What is roughage?",
        options: [
            "Plant material that the body cannot digest",
            "A type of vitamin",
            "A type of mineral",
            "Animal fat"
        ],
        answer: "Plant material that the body cannot digest"
    },
    {
        question: "Which food is a good source of roughage?",
        options: [
            "Vegetables",
            "Butter",
            "Oil",
            "Meat"
        ],
        answer: "Vegetables"
    },
    {
        question: "Which vitamin is important for good eyesight?",
        options: [
            "Vitamin A",
            "Vitamin C",
            "Vitamin K",
            "Vitamin D"
        ],
        answer: "Vitamin A"
    },
    {
        question: "What disease can result from vitamin A deficiency?",
        options: [
            "Night blindness",
            "Scurvy",
            "Rickets",
            "Goitre"
        ],
        answer: "Night blindness"
    },
    {
        question: "Which food is a source of vitamin A?",
        options: [
            "Carrot",
            "Rice",
            "Bread",
            "Salt"
        ],
        answer: "Carrot"
    },
    {
        question: "Which vitamin is associated with healthy nerves and energy production?",
        options: [
            "Vitamin B",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        answer: "Vitamin B"
    },
    {
        question: "What disease can result from vitamin B deficiency?",
        options: [
            "Beriberi",
            "Scurvy",
            "Rickets",
            "Goitre"
        ],
        answer: "Beriberi"
    },
    {
        question: "Which food is a source of vitamin B?",
        options: [
            "Whole grains",
            "Plastic",
            "Petrol",
            "Salt water"
        ],
        answer: "Whole grains"
    },
    {
        question: "Which vitamin helps maintain healthy skin and gums?",
        options: [
            "Vitamin C",
            "Vitamin A",
            "Vitamin D",
            "Vitamin K"
        ],
        answer: "Vitamin C"
    },
    {
        question: "What disease can result from vitamin C deficiency?",
        options: [
            "Scurvy",
            "Beriberi",
            "Rickets",
            "Anaemia"
        ],
        answer: "Scurvy"
    },
    {
        question: "Which of these is a good source of vitamin C?",
        options: [
            "Orange",
            "Butter",
            "Rice",
            "Meat"
        ],
        answer: "Orange"
    },
    {
        question: "Which vitamin helps maintain strong bones and teeth?",
        options: [
            "Vitamin D",
            "Vitamin C",
            "Vitamin B",
            "Vitamin K"
        ],
        answer: "Vitamin D"
    },
    {
        question: "What disease can result from vitamin D deficiency?",
        options: [
            "Rickets",
            "Scurvy",
            "Goitre",
            "Beriberi"
        ],
        answer: "Rickets"
    },
    {
        question: "Which is a source of vitamin D?",
        options: [
            "Sunlight",
            "Sugar",
            "Salt",
            "Rice"
        ],
        answer: "Sunlight"
    },
    {
        question: "What is the main function of vitamin K mentioned in the notes?",
        options: [
            "Blood clotting",
            "Night vision",
            "Energy production",
            "Growth of hair"
        ],
        answer: "Blood clotting"
    },
    {
        question: "What can happen when there is a deficiency of vitamin K?",
        options: [
            "Excessive bleeding",
            "Night blindness",
            "Goitre",
            "Rickets"
        ],
        answer: "Excessive bleeding"
    },
    {
        question: "Which mineral is important for strong bones and teeth?",
        options: [
            "Calcium",
            "Iron",
            "Iodine",
            "Sodium"
        ],
        answer: "Calcium"
    },
    {
        question: "What can calcium deficiency cause?",
        options: [
            "Weak bones and rickets",
            "Scurvy",
            "Goitre",
            "Night blindness"
        ],
        answer: "Weak bones and rickets"
    },
    {
        question: "Which mineral is important for making red blood cells?",
        options: [
            "Iron",
            "Calcium",
            "Iodine",
            "Vitamin C"
        ],
        answer: "Iron"
    },
    {
        question: "What disease can result from iron deficiency?",
        options: [
            "Anaemia",
            "Rickets",
            "Scurvy",
            "Goitre"
        ],
        answer: "Anaemia"
    },
    {
        question: "Which food is a good source of iron?",
        options: [
            "Liver",
            "Sugar",
            "Soft drink",
            "Butter"
        ],
        answer: "Liver"
    },
    {
        question: "Which mineral is important for proper thyroid function?",
        options: [
            "Iodine",
            "Iron",
            "Calcium",
            "Vitamin C"
        ],
        answer: "Iodine"
    },
    {
        question: "What disease can result from iodine deficiency?",
        options: [
            "Goitre",
            "Anaemia",
            "Scurvy",
            "Beriberi"
        ],
        answer: "Goitre"
    },
    {
        question: "Which food is a good source of iodine?",
        options: [
            "Iodised salt",
            "Yam",
            "Bread",
            "Orange"
        ],
        answer: "Iodised salt"
    },
    {
        question: "What is a balanced diet?",
        options: [
            "A diet containing all seven classes of nutrients in the right amounts",
            "A diet containing only protein",
            "A diet containing only fruits",
            "A diet containing only carbohydrates"
        ],
        answer: "A diet containing all seven classes of nutrients in the right amounts"
    },
    {
        question: "Which factor can affect a person's nutritional needs?",
        options: [
            "Age",
            "Favourite colour",
            "Name",
            "Height of a building"
        ],
        answer: "Age"
    },
    {
        question: "Which of these is an example of a balanced meal?",
        options: [
            "Rice, vegetable stew, fish, oil, water and fruit",
            "Only sugar",
            "Only rice",
            "Only water"
        ],
        answer: "Rice, vegetable stew, fish, oil, water and fruit"
    },
    {
        question: "What is malnutrition?",
        options: [
            "Having too little, too much or the wrong type of food over time",
            "Eating a balanced diet",
            "Drinking clean water",
            "Eating fruits regularly"
        ],
        answer: "Having too little, too much or the wrong type of food over time"
    },
    {
        question: "What is kwashiorkor mainly caused by?",
        options: [
            "Protein deficiency",
            "Vitamin C excess",
            "Too much water",
            "Iodine excess"
        ],
        answer: "Protein deficiency"
    },
    {
        question: "Which is a sign of kwashiorkor?",
        options: [
            "Swollen belly and feet",
            "Excellent muscle growth",
            "Strong bones",
            "Perfect night vision"
        ],
        answer: "Swollen belly and feet"
    },
    {
        question: "What is marasmus mainly caused by?",
        options: [
            "A shortage of protein and energy",
            "Too much vitamin C",
            "Too much calcium",
            "Too much water"
        ],
        answer: "A shortage of protein and energy"
    },
    {
        question: "Which is a common feature of marasmus?",
        options: [
            "Very thin body with wasted muscles",
            "Swollen feet only",
            "Swollen neck",
            "Strong muscles"
        ],
        answer: "Very thin body with wasted muscles"
    },
    {
        question: "Which deficiency causes scurvy?",
        options: [
            "Vitamin C deficiency",
            "Vitamin D deficiency",
            "Iron deficiency",
            "Iodine deficiency"
        ],
        answer: "Vitamin C deficiency"
    },
    {
        question: "Which deficiency causes anaemia?",
        options: [
            "Iron deficiency",
            "Vitamin A deficiency",
            "Iodine deficiency",
            "Vitamin K deficiency"
        ],
        answer: "Iron deficiency"
    },
    {
        question: "What can cause obesity?",
        options: [
            "Excess intake of fat and carbohydrates",
            "Drinking clean water",
            "Eating vegetables",
            "Getting enough sleep"
        ],
        answer: "Excess intake of fat and carbohydrates"
    }
];
const week6Quiz = [
    {
        question: "What is a drug?",
        options: [
            "A chemical substance that changes the body or mind when taken",
            "A type of food",
            "A type of exercise",
            "A type of clothing"
        ],
        answer: "A chemical substance that changes the body or mind when taken"
    },
    {
        question: "What are medicines?",
        options: [
            "Drugs used to treat, cure or prevent diseases",
            "Drugs used only for entertainment",
            "Foods used to increase body weight",
            "Chemicals used only for cleaning"
        ],
        answer: "Drugs used to treat, cure or prevent diseases"
    },
    {
        question: "Which of these is a proper use of medicine?",
        options: [
            "Taking the correct dose at the correct time",
            "Taking more than prescribed",
            "Sharing medicine with friends",
            "Using expired medicine"
        ],
        answer: "Taking the correct dose at the correct time"
    },
    {
        question: "Who can prescribe medicine for a patient?",
        options: [
            "A doctor",
            "A classmate",
            "A stranger",
            "A neighbour"
        ],
        answer: "A doctor"
    },
    {
        question: "What should a person do with a prescribed course of medicine?",
        options: [
            "Complete the course as directed",
            "Stop immediately when feeling slightly better",
            "Give the remaining medicine to a friend",
            "Double the dose"
        ],
        answer: "Complete the course as directed"
    },
    {
        question: "Why should the expiry date of medicine be checked?",
        options: [
            "To make sure the medicine is still safe to use",
            "To make the medicine taste better",
            "To increase its price",
            "To change its colour"
        ],
        answer: "To make sure the medicine is still safe to use"
    },
    {
        question: "Where should medicines be stored?",
        options: [
            "In a cool, dry place away from children",
            "In direct sunlight",
            "On the floor",
            "In dirty water"
        ],
        answer: "In a cool, dry place away from children"
    },
    {
        question: "Why should medicines not be shared?",
        options: [
            "Different people may need different medicines or doses",
            "Medicine can never help anyone",
            "All medicines are poisonous",
            "Medicine should only be used once"
        ],
        answer: "Different people may need different medicines or doses"
    },
    {
        question: "Where should medicines preferably be obtained?",
        options: [
            "A registered pharmacy",
            "A roadside stranger",
            "An unknown online seller",
            "A friend’s house"
        ],
        answer: "A registered pharmacy"
    },
    {
        question: "What is drug abuse?",
        options: [
            "Using a drug without medical need or using it in the wrong way or amount",
            "Using medicine exactly as prescribed",
            "Taking a vaccine correctly",
            "Using antiseptic on a wound"
        ],
        answer: "Using a drug without medical need or using it in the wrong way or amount"
    },
    {
        question: "What is substance abuse?",
        options: [
            "The harmful or wrong use of a substance",
            "The correct use of prescribed medicine",
            "Eating a balanced diet",
            "Drinking clean water"
        ],
        answer: "The harmful or wrong use of a substance"
    },
    {
        question: "Which of these is an example of a stimulant?",
        options: [
            "Cocaine",
            "Alcohol",
            "Heroin",
            "Glue"
        ],
        answer: "Cocaine"
    },
    {
        question: "Which of these is a stimulant?",
        options: [
            "Amphetamines",
            "Alcohol",
            "Diazepam",
            "Heroin"
        ],
        answer: "Amphetamines"
    },
    {
        question: "Which of these is a depressant?",
        options: [
            "Alcohol",
            "Cocaine",
            "Amphetamines",
            "LSD"
        ],
        answer: "Alcohol"
    },
    {
        question: "Which of these is another example of a depressant?",
        options: [
            "Sleeping pills such as diazepam",
            "Cocaine",
            "LSD",
            "Caffeine"
        ],
        answer: "Sleeping pills such as diazepam"
    },
    {
        question: "Which of these is an opioid or narcotic?",
        options: [
            "Heroin",
            "Caffeine",
            "LSD",
            "Tobacco"
        ],
        answer: "Heroin"
    },
    {
        question: "Which of these is another opioid that can be misused?",
        options: [
            "Tramadol",
            "Vitamin C",
            "Iodised salt",
            "Water"
        ],
        answer: "Tramadol"
    },
    {
        question: "Which of these is a hallucinogen?",
        options: [
            "LSD",
            "Paracetamol",
            "Antiseptic",
            "Vitamin B"
        ],
        answer: "LSD"
    },
    {
        question: "Which substance is commonly associated with tobacco use?",
        options: [
            "Cigarettes",
            "Milk",
            "Orange juice",
            "Water"
        ],
        answer: "Cigarettes"
    },
    {
        question: "Which of these is an inhalant that can be abused?",
        options: [
            "Glue",
            "Rice",
            "Milk",
            "Fruit"
        ],
        answer: "Glue"
    },
    {
        question: "Which of these can be a reason why young people abuse drugs?",
        options: [
            "Peer pressure",
            "Good hygiene",
            "Balanced diet",
            "Regular exercise"
        ],
        answer: "Peer pressure"
    },
    {
        question: "Why might curiosity lead someone to drug abuse?",
        options: [
            "They may want to try a substance without understanding its dangers",
            "They understand all the dangers",
            "They want to improve hygiene",
            "They want to eat healthier"
        ],
        answer: "They may want to try a substance without understanding its dangers"
    },
    {
        question: "Which emotional condition can contribute to substance abuse?",
        options: [
            "Stress",
            "Good health",
            "Happiness only",
            "Cleanliness"
        ],
        answer: "Stress"
    },
    {
        question: "Which family situation can contribute to drug abuse?",
        options: [
            "Lack of parental care",
            "Good parental guidance",
            "Strong family support",
            "Good communication"
        ],
        answer: "Lack of parental care"
    },
    {
        question: "Which economic condition may contribute to substance abuse?",
        options: [
            "Poverty and unemployment",
            "Good employment",
            "Financial stability",
            "Good education"
        ],
        answer: "Poverty and unemployment"
    },
    {
        question: "What is one reason some people misuse drugs because of availability?",
        options: [
            "The substances are easily accessible",
            "The substances are impossible to find",
            "The substances are always illegal",
            "The substances are always expensive"
        ],
        answer: "The substances are easily accessible"
    },
    {
        question: "Which of these may be a sign of drug abuse?",
        options: [
            "Red eyes and drowsiness",
            "Excellent hygiene",
            "Improved concentration in every case",
            "Always being energetic"
        ],
        answer: "Red eyes and drowsiness"
    },
    {
        question: "How can drug abuse affect school performance?",
        options: [
            "It can lead to poor academic performance",
            "It always improves grades",
            "It makes students learn faster",
            "It guarantees graduation"
        ],
        answer: "It can lead to poor academic performance"
    },
    {
        question: "Which behaviour may indicate drug abuse?",
        options: [
            "Secrecy and association with bad friends",
            "Regular studying",
            "Good hygiene",
            "Respect for parents"
        ],
        answer: "Secrecy and association with bad friends"
    },
    {
        question: "Why might a person steal or lie when abusing drugs?",
        options: [
            "They may need money to obtain the substance",
            "They want to improve their grades",
            "They want to stay healthy",
            "They want to help their family"
        ],
        answer: "They may need money to obtain the substance"
    },
    {
        question: "Which organ can be damaged by drug abuse?",
        options: [
            "The liver",
            "The hair",
            "The fingernails only",
            "The skin only"
        ],
        answer: "The liver"
    },
    {
        question: "Which organ can be damaged by substance abuse?",
        options: [
            "The lungs",
            "The teeth only",
            "The hair only",
            "The fingernails"
        ],
        answer: "The lungs"
    },
    {
        question: "What can drug abuse do to the heart?",
        options: [
            "It can damage the heart",
            "It always makes the heart stronger",
            "It stops the heart from beating normally in every case",
            "It has no possible effect"
        ],
        answer: "It can damage the heart"
    },
    {
        question: "What is addiction?",
        options: [
            "A condition in which a person becomes dependent on a substance",
            "A type of exercise",
            "A healthy eating habit",
            "A method of treating wounds"
        ],
        answer: "A condition in which a person becomes dependent on a substance"
    },
    {
        question: "What can happen after taking an excessive amount of a drug?",
        options: [
            "Overdose, coma or death",
            "Better health",
            "Stronger immunity",
            "Improved eyesight"
        ],
        answer: "Overdose, coma or death"
    },
    {
        question: "How can drug abuse affect education?",
        options: [
            "It can cause school dropout",
            "It guarantees success",
            "It always improves attendance",
            "It improves every student's grades"
        ],
        answer: "It can cause school dropout"
    },
    {
        question: "Which behaviour can result from drug abuse?",
        options: [
            "Violence and aggression",
            "Always being peaceful",
            "Improved self-control",
            "Better decision-making"
        ],
        answer: "Violence and aggression"
    },
    {
        question: "How can drug abuse affect a person's self-control?",
        options: [
            "It can cause loss of self-control",
            "It always improves self-control",
            "It has no possible effect",
            "It guarantees good behaviour"
        ],
        answer: "It can cause loss of self-control"
    },
    {
        question: "Which social problem can be associated with drug abuse?",
        options: [
            "Crime",
            "Better sanitation",
            "Improved education",
            "Good health"
        ],
        answer: "Crime"
    },
    {
        question: "How can substance abuse affect families?",
        options: [
            "It can cause broken homes and financial problems",
            "It always makes families richer",
            "It improves family relationships",
            "It prevents all arguments"
        ],
        answer: "It can cause broken homes and financial problems"
    },
    {
        question: "How can drug abuse contribute to accidents?",
        options: [
            "It can affect a person's judgement and behaviour",
            "It always improves concentration",
            "It makes people more careful",
            "It prevents tiredness"
        ],
        answer: "It can affect a person's judgement and behaviour"
    },
    {
        question: "Which is a good way to prevent drug abuse?",
        options: [
            "Choosing good friends",
            "Following bad peer pressure",
            "Experimenting with drugs",
            "Keeping drug abuse secret"
        ],
        answer: "Choosing good friends"
    },
    {
        question: "What should a young person do when pressured to use drugs?",
        options: [
            "Say no",
            "Accept immediately",
            "Try the drug once",
            "Encourage others to use it"
        ],
        answer: "Say no"
    },
    {
        question: "Which activity can help prevent drug abuse?",
        options: [
            "Sports and hobbies",
            "Drug experimentation",
            "Crime",
            "Truancy"
        ],
        answer: "Sports and hobbies"
    },
    {
        question: "Who can provide guidance to someone at risk of drug abuse?",
        options: [
            "A parent, teacher, counsellor or doctor",
            "Only a drug dealer",
            "Only a stranger",
            "Nobody"
        ],
        answer: "A parent, teacher, counsellor or doctor"
    },
    {
        question: "What organisation is mentioned in the notes in relation to drug laws and prevention?",
        options: [
            "NDLEA",
            "WHO only",
            "NIMASA",
            "INEC"
        ],
        answer: "NDLEA"
    },
    {
        question: "What is one important part of treating drug abuse?",
        options: [
            "Counselling and rehabilitation",
            "Rejection",
            "Punishment only",
            "Ignoring the person"
        ],
        answer: "Counselling and rehabilitation"
    },
    {
        question: "How should people treat someone recovering from drug abuse?",
        options: [
            "With care and support",
            "With rejection",
            "By encouraging drug use",
            "By isolating the person completely"
        ],
        answer: "With care and support"
    },
    {
        question: "Which of these is an effect of substance abuse on health?",
        options: [
            "Weak immunity",
            "Stronger immunity in every case",
            "Perfect health",
            "Permanent protection from disease"
        ],
        answer: "Weak immunity"
    },
    {
        question: "How can sharing needles increase the risk of HIV/AIDS?",
        options: [
            "It can spread infected blood between people",
            "It makes the blood cleaner",
            "It prevents infections",
            "It strengthens the immune system"
        ],
        answer: "It can spread infected blood between people"
    },
    {
        question: "What is the safest approach to using medicine?",
        options: [
            "Use it as directed by a qualified health professional",
            "Take any amount you want",
            "Share it with friends",
            "Use it after its expiry date"
        ],
        answer: "Use it as directed by a qualified health professional"
    }
];
const week7Quiz = [
    {
        question: "What is science?",
        options: [
            "The systematic study of the natural world",
            "The study of money",
            "The study of politics",
            "The study of language"
        ],
        answer: "The systematic study of the natural world"
    },
    {
        question: "Which branch of science studies living things?",
        options: [
            "Biology",
            "Physics",
            "Geology",
            "Astronomy"
        ],
        answer: "Biology"
    },
    {
        question: "Which branch of science studies matter and its changes?",
        options: [
            "Chemistry",
            "Biology",
            "Agriculture",
            "Astronomy"
        ],
        answer: "Chemistry"
    },
    {
        question: "Which branch of science studies light, sound, heat, electricity and motion?",
        options: [
            "Physics",
            "Botany",
            "Zoology",
            "Geology"
        ],
        answer: "Physics"
    },
    {
        question: "What is a hypothesis?",
        options: [
            "A testable guess",
            "A final answer",
            "A type of experiment",
            "A scientific instrument"
        ],
        answer: "A testable guess"
    },
    {
        question: "What is an experiment?",
        options: [
            "A fair test of an idea or hypothesis",
            "A guess about a problem",
            "A final report",
            "A scientific career"
        ],
        answer: "A fair test of an idea or hypothesis"
    },
    {
        question: "What is a variable?",
        options: [
            "Anything that can change in an investigation",
            "A fixed answer",
            "A type of scientist",
            "A scientific branch"
        ],
        answer: "Anything that can change in an investigation"
    },
    {
        question: "Which hormone is mainly produced by the testes?",
        options: [
            "Testosterone",
            "Oestrogen",
            "Vitamin C",
            "Insulin"
        ],
        answer: "Testosterone"
    },
    {
        question: "Which hormone is produced by the ovaries?",
        options: [
            "Oestrogen",
            "Testosterone",
            "Adrenaline",
            "Insulin"
        ],
        answer: "Oestrogen"
    },
    {
        question: "What is adolescence?",
        options: [
            "The stage between childhood and adulthood",
            "The stage between adulthood and old age",
            "The stage of infancy",
            "The stage after old age"
        ],
        answer: "The stage between childhood and adulthood"
    },
    {
        question: "Which of these is a physical change common to both boys and girls during puberty?",
        options: [
            "Growth in height",
            "Beard growth",
            "Menstruation",
            "Deep voice"
        ],
        answer: "Growth in height"
    },
    {
        question: "What is menstruation?",
        options: [
            "The monthly discharge of blood and tissue from the uterus",
            "The production of sperm",
            "The growth of facial hair",
            "The release of sweat"
        ],
        answer: "The monthly discharge of blood and tissue from the uterus"
    },
    {
        question: "What is menarche?",
        options: [
            "A girl's first menstruation",
            "A boy's first wet dream",
            "The end of puberty",
            "The start of old age"
        ],
        answer: "A girl's first menstruation"
    },
    {
        question: "What does WHO describe health as?",
        options: [
            "Complete physical, mental and social well-being",
            "The absence of physical pain only",
            "Being physically strong",
            "Being free from hunger"
        ],
        answer: "Complete physical, mental and social well-being"
    },
    {
        question: "What is personal hygiene?",
        options: [
            "Keeping the body clean and caring for it to prevent disease",
            "Keeping only the house clean",
            "Wearing expensive clothes",
            "Eating large meals"
        ],
        answer: "Keeping the body clean and caring for it to prevent disease"
    },
    {
        question: "How long should hands be scrubbed during proper handwashing?",
        options: [
            "At least 20 seconds",
            "1 second",
            "5 seconds",
            "2 minutes"
        ],
        answer: "At least 20 seconds"
    },
    {
        question: "Which of these should NOT be put inside the ears?",
        options: [
            "Pins and matchsticks",
            "Clean water",
            "A clean towel",
            "Nothing"
        ],
        answer: "Pins and matchsticks"
    },
    {
        question: "Which disease can poor hygiene contribute to?",
        options: [
            "Cholera",
            "Broken arm",
            "Colour blindness",
            "Deafness"
        ],
        answer: "Cholera"
    },
    {
        question: "What is environmental sanitation?",
        options: [
            "Keeping the environment clean and free from waste and disease organisms",
            "Keeping only the body clean",
            "Planting flowers",
            "Cleaning only classrooms"
        ],
        answer: "Keeping the environment clean and free from waste and disease organisms"
    },
    {
        question: "What is refuse?",
        options: [
            "Solid waste from homes, schools, markets and offices",
            "Liquid waste only",
            "Clean water",
            "Fresh air"
        ],
        answer: "Solid waste from homes, schools, markets and offices"
    },
    {
        question: "What is sewage?",
        options: [
            "Liquid waste containing human waste and wastewater",
            "Dry leaves",
            "Plastic bottles",
            "Paper waste"
        ],
        answer: "Liquid waste containing human waste and wastewater"
    },
    {
        question: "Which of these is biodegradable?",
        options: [
            "Food waste",
            "Glass",
            "Plastic",
            "Metal"
        ],
        answer: "Food waste"
    },
    {
        question: "Which of these is non-biodegradable?",
        options: [
            "Plastic",
            "Leaves",
            "Food scraps",
            "Animal dung"
        ],
        answer: "Plastic"
    },
    {
        question: "What is recycling?",
        options: [
            "Processing used materials into new products",
            "Throwing waste into rivers",
            "Burning every type of waste",
            "Leaving refuse on the street"
        ],
        answer: "Processing used materials into new products"
    },
    {
        question: "What is composting?",
        options: [
            "Allowing biodegradable waste to decay into manure",
            "Burning plastic",
            "Burying glass",
            "Throwing waste into gutters"
        ],
        answer: "Allowing biodegradable waste to decay into manure"
    },
    {
        question: "What is nutrition?",
        options: [
            "The process by which living things take in and use food",
            "The process of breathing",
            "The process of sleeping",
            "The process of removing waste"
        ],
        answer: "The process by which living things take in and use food"
    },
    {
        question: "Which nutrient is mainly responsible for growth and repair?",
        options: [
            "Protein",
            "Water",
            "Roughage",
            "Vitamin C"
        ],
        answer: "Protein"
    },
    {
        question: "Which nutrient is a major source of energy?",
        options: [
            "Carbohydrates",
            "Vitamins",
            "Minerals",
            "Water"
        ],
        answer: "Carbohydrates"
    },
    {
        question: "Which nutrient provides more energy than carbohydrates?",
        options: [
            "Fats and oils",
            "Vitamins",
            "Minerals",
            "Water"
        ],
        answer: "Fats and oils"
    },
    {
        question: "What is roughage?",
        options: [
            "Plant material that the body cannot digest",
            "A type of vitamin",
            "Animal fat",
            "A type of mineral"
        ],
        answer: "Plant material that the body cannot digest"
    },
    {
        question: "Which vitamin is important for good eyesight?",
        options: [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        answer: "Vitamin A"
    },
    {
        question: "Which deficiency can cause scurvy?",
        options: [
            "Vitamin C deficiency",
            "Vitamin A deficiency",
            "Iron deficiency",
            "Iodine deficiency"
        ],
        answer: "Vitamin C deficiency"
    },
    {
        question: "Which mineral is needed for making red blood cells?",
        options: [
            "Iron",
            "Calcium",
            "Iodine",
            "Vitamin C"
        ],
        answer: "Iron"
    },
    {
        question: "What disease can result from iron deficiency?",
        options: [
            "Anaemia",
            "Rickets",
            "Scurvy",
            "Goitre"
        ],
        answer: "Anaemia"
    },
    {
        question: "What is a balanced diet?",
        options: [
            "A diet containing all seven classes of nutrients in the right amounts",
            "A diet containing only protein",
            "A diet containing only fruits",
            "A diet containing only carbohydrates"
        ],
        answer: "A diet containing all seven classes of nutrients in the right amounts"
    },
    {
        question: "What is malnutrition?",
        options: [
            "Having too little, too much or the wrong type of food over time",
            "Eating a balanced diet",
            "Drinking enough water",
            "Eating fruits every day"
        ],
        answer: "Having too little, too much or the wrong type of food over time"
    },
    {
        question: "What is a drug?",
        options: [
            "A chemical substance that changes the body or mind when taken",
            "A type of food",
            "A type of exercise",
            "A type of clothing"
        ],
        answer: "A chemical substance that changes the body or mind when taken"
    },
    {
        question: "What is drug abuse?",
        options: [
            "Using a drug without medical need or using it wrongly",
            "Taking medicine as prescribed",
            "Taking vaccines correctly",
            "Using antiseptic on a wound"
        ],
        answer: "Using a drug without medical need or using it wrongly"
    },
    {
        question: "Which of these is a stimulant?",
        options: [
            "Cocaine",
            "Alcohol",
            "Heroin",
            "Diazepam"
        ],
        answer: "Cocaine"
    },
    {
        question: "Which of these is a depressant?",
        options: [
            "Alcohol",
            "Cocaine",
            "LSD",
            "Amphetamines"
        ],
        answer: "Alcohol"
    },
    {
        question: "Which of these is an opioid?",
        options: [
            "Heroin",
            "Caffeine",
            "LSD",
            "Tobacco"
        ],
        answer: "Heroin"
    },
    {
        question: "Which of these can contribute to drug abuse?",
        options: [
            "Peer pressure",
            "Good hygiene",
            "Balanced diet",
            "Regular exercise"
        ],
        answer: "Peer pressure"
    },
    {
        question: "Which of these may be a sign of drug abuse?",
        options: [
            "Red eyes and drowsiness",
            "Excellent hygiene",
            "Improved school performance",
            "Always being energetic"
        ],
        answer: "Red eyes and drowsiness"
    },
    {
        question: "Which organ can be damaged by drug abuse?",
        options: [
            "The liver",
            "The hair",
            "The fingernails",
            "The eyelashes"
        ],
        answer: "The liver"
    },
    {
        question: "What can excessive drug use cause?",
        options: [
            "Overdose, coma or death",
            "Perfect health",
            "Stronger immunity",
            "Improved eyesight"
        ],
        answer: "Overdose, coma or death"
    },
    {
        question: "Which is a good way to prevent drug abuse?",
        options: [
            "Choosing good friends",
            "Following bad peer pressure",
            "Experimenting with drugs",
            "Keeping drug abuse secret"
        ],
        answer: "Choosing good friends"
    },
    {
        question: "What should someone do when pressured to use drugs?",
        options: [
            "Say no",
            "Accept immediately",
            "Try it once",
            "Encourage others to use it"
        ],
        answer: "Say no"
    },
    {
        question: "Which activity can help prevent drug abuse?",
        options: [
            "Sports and hobbies",
            "Drug experimentation",
            "Crime",
            "Truancy"
        ],
        answer: "Sports and hobbies"
    },
    {
        question: "Who can help someone experiencing drug abuse?",
        options: [
            "A parent, teacher, counsellor or doctor",
            "A drug dealer",
            "A stranger",
            "Nobody"
        ],
        answer: "A parent, teacher, counsellor or doctor"
    },
    {
        question: "What organisation is mentioned in the notes for drug prevention and laws?",
        options: [
            "NDLEA",
            "NIMASA",
            "INEC",
            "FRSC"
        ],
        answer: "NDLEA"
    },
    {
        question: "Which approach is important in treating drug abuse?",
        options: [
            "Counselling, rehabilitation and medical care",
            "Rejection",
            "Ignoring the person",
            "Encouraging drug use"
        ],
        answer: "Counselling, rehabilitation and medical care"
    }
];
const week8Quiz = [
    {
        question: "What is reproduction?",
        options: [
            "The process by which living things produce young ones",
            "The process of breathing",
            "The process of eating",
            "The process of removing waste"
        ],
        answer: "The process by which living things produce young ones"
    },
    {
        question: "Why is reproduction important?",
        options: [
            "It ensures the continuation of a species",
            "It prevents growth",
            "It causes diseases",
            "It stops organisms from developing"
        ],
        answer: "It ensures the continuation of a species"
    },
    {
        question: "What type of reproduction occurs in humans?",
        options: [
            "Sexual reproduction",
            "Asexual reproduction",
            "Vegetative reproduction",
            "Binary fission"
        ],
        answer: "Sexual reproduction"
    },
    {
        question: "What two cells join during human fertilisation?",
        options: [
            "Sperm and ovum",
            "Blood and water",
            "Skin and muscle",
            "Bone and tissue"
        ],
        answer: "Sperm and ovum"
    },
    {
        question: "What is formed when a sperm and ovum join?",
        options: [
            "A zygote",
            "A tissue",
            "A hormone",
            "A muscle"
        ],
        answer: "A zygote"
    },
    {
        question: "Which organ produces sperm in males?",
        options: [
            "Testes",
            "Penis",
            "Urethra",
            "Prostate"
        ],
        answer: "Testes"
    },
    {
        question: "Which hormone is produced by the testes?",
        options: [
            "Testosterone",
            "Oestrogen",
            "Insulin",
            "Vitamin C"
        ],
        answer: "Testosterone"
    },
    {
        question: "What is the function of the scrotum?",
        options: [
            "It holds the testes outside the body",
            "It produces urine",
            "It produces eggs",
            "It stores food"
        ],
        answer: "It holds the testes outside the body"
    },
    {
        question: "Why are the testes held outside the main body cavity?",
        options: [
            "To maintain a cooler temperature suitable for sperm production",
            "To make urine",
            "To produce hormones only",
            "To protect the lungs"
        ],
        answer: "To maintain a cooler temperature suitable for sperm production"
    },
    {
        question: "Where are sperm stored and matured?",
        options: [
            "Epididymis",
            "Urethra",
            "Penis",
            "Scrotum"
        ],
        answer: "Epididymis"
    },
    {
        question: "What is the function of the sperm duct?",
        options: [
            "It carries sperm towards the urethra",
            "It produces sperm",
            "It produces urine",
            "It stores the ovum"
        ],
        answer: "It carries sperm towards the urethra"
    },
    {
        question: "What is semen?",
        options: [
            "A mixture of sperm and fluids from reproductive glands",
            "Only urine",
            "Only blood",
            "A type of hormone"
        ],
        answer: "A mixture of sperm and fluids from reproductive glands"
    },
    {
        question: "What is the function of the urethra in males?",
        options: [
            "It carries urine and semen out of the body",
            "It produces sperm",
            "It produces eggs",
            "It stores sperm permanently"
        ],
        answer: "It carries urine and semen out of the body"
    },
    {
        question: "Can urine and semen pass through the male urethra at the same time?",
        options: [
            "No",
            "Yes",
            "Only during sleep",
            "Only during exercise"
        ],
        answer: "No"
    },
    {
        question: "What is the main reproductive function of the penis?",
        options: [
            "It delivers semen into the female reproductive tract",
            "It produces eggs",
            "It stores the uterus",
            "It produces blood"
        ],
        answer: "It delivers semen into the female reproductive tract"
    },
    {
        question: "Which organs produce eggs in females?",
        options: [
            "Ovaries",
            "Uterus",
            "Vagina",
            "Cervix"
        ],
        answer: "Ovaries"
    },
    {
        question: "Which hormones are produced by the ovaries?",
        options: [
            "Oestrogen and progesterone",
            "Testosterone and insulin",
            "Vitamin C and vitamin D",
            "Adrenaline and insulin"
        ],
        answer: "Oestrogen and progesterone"
    },
    {
        question: "What is the function of the fallopian tubes?",
        options: [
            "They carry the egg from the ovary towards the uterus",
            "They produce sperm",
            "They produce urine",
            "They store the baby after birth"
        ],
        answer: "They carry the egg from the ovary towards the uterus"
    },
    {
        question: "Where does fertilisation usually occur?",
        options: [
            "Fallopian tube",
            "Uterus",
            "Vagina",
            "Cervix"
        ],
        answer: "Fallopian tube"
    },
    {
        question: "What is the uterus also called?",
        options: [
            "Womb",
            "Ovary",
            "Vagina",
            "Scrotum"
        ],
        answer: "Womb"
    },
    {
        question: "What happens in the uterus during pregnancy?",
        options: [
            "The developing baby grows there",
            "Sperm are produced there",
            "Eggs are produced there",
            "Urine is stored there"
        ],
        answer: "The developing baby grows there"
    },
    {
        question: "What is the cervix?",
        options: [
            "The narrow neck or opening of the uterus",
            "The organ that produces sperm",
            "The organ that produces eggs",
            "The external reproductive organ"
        ],
        answer: "The narrow neck or opening of the uterus"
    },
    {
        question: "Which is the birth canal?",
        options: [
            "Vagina",
            "Ovary",
            "Fallopian tube",
            "Uterus"
        ],
        answer: "Vagina"
    },
    {
        question: "Which structure receives sperm during sexual intercourse?",
        options: [
            "Vagina",
            "Ovary",
            "Uterus only",
            "Fallopian tube"
        ],
        answer: "Vagina"
    },
    {
        question: "What are gametes?",
        options: [
            "Special reproductive cells containing half the genetic information",
            "Types of bones",
            "Types of muscles",
            "Digestive organs"
        ],
        answer: "Special reproductive cells containing half the genetic information"
    },
    {
        question: "Which male gamete is produced by the testes?",
        options: [
            "Sperm",
            "Ovum",
            "Zygote",
            "Embryo"
        ],
        answer: "Sperm"
    },
    {
        question: "Which female gamete is produced by the ovaries?",
        options: [
            "Ovum",
            "Sperm",
            "Zygote",
            "Embryo"
        ],
        answer: "Ovum"
    },
    {
        question: "Which part of the sperm contains the nucleus?",
        options: [
            "Head",
            "Tail",
            "Middle piece",
            "Scrotum"
        ],
        answer: "Head"
    },
    {
        question: "What is the function of the sperm tail?",
        options: [
            "It helps the sperm swim",
            "It produces hormones",
            "It stores food",
            "It produces urine"
        ],
        answer: "It helps the sperm swim"
    },
    {
        question: "What is found in the middle part of the sperm to provide energy?",
        options: [
            "Mitochondria",
            "Bones",
            "Blood",
            "Water"
        ],
        answer: "Mitochondria"
    },
    {
        question: "How is the ovum different from the sperm?",
        options: [
            "The ovum is larger and cannot move by itself",
            "The ovum is smaller and has a tail",
            "The ovum is produced by the testes",
            "The ovum can swim using a tail"
        ],
        answer: "The ovum is larger and cannot move by itself"
    },
    {
        question: "How many eggs are usually released each month?",
        options: [
            "One",
            "Hundreds",
            "Thousands",
            "None"
        ],
        answer: "One"
    },
    {
        question: "Where does fertilisation usually take place?",
        options: [
            "In the fallopian tube",
            "In the vagina",
            "In the cervix",
            "In the ovary"
        ],
        answer: "In the fallopian tube"
    },
    {
        question: "What happens when the nuclei of the sperm and ovum join?",
        options: [
            "A zygote is formed",
            "The sperm disappears without effect",
            "A new ovum is formed",
            "Menstruation begins"
        ],
        answer: "A zygote is formed"
    },
    {
        question: "What does the zygote do after fertilisation?",
        options: [
            "It divides and develops into an embryo",
            "It becomes a sperm",
            "It becomes an ovum",
            "It leaves the body immediately"
        ],
        answer: "It divides and develops into an embryo"
    },
    {
        question: "Where does the embryo attach?",
        options: [
            "The lining of the uterus",
            "The scrotum",
            "The penis",
            "The ovary"
        ],
        answer: "The lining of the uterus"
    },
    {
        question: "What does the developing embryo eventually become?",
        options: [
            "A foetus",
            "A sperm",
            "An ovum",
            "A hormone"
        ],
        answer: "A foetus"
    },
    {
        question: "What structure helps nourish the developing baby?",
        options: [
            "Placenta",
            "Scrotum",
            "Penis",
            "Cervix only"
        ],
        answer: "Placenta"
    },
    {
        question: "What connects the developing baby to the placenta?",
        options: [
            "Umbilical cord",
            "Fallopian tube",
            "Urethra",
            "Sperm duct"
        ],
        answer: "Umbilical cord"
    },
    {
        question: "Approximately how long does human pregnancy last?",
        options: [
            "About 9 months",
            "About 2 months",
            "About 3 weeks",
            "About 2 years"
        ],
        answer: "About 9 months"
    },
    {
        question: "About how many weeks does a normal pregnancy last?",
        options: [
            "40 weeks",
            "10 weeks",
            "20 weeks",
            "60 weeks"
        ],
        answer: "40 weeks"
    },
    {
        question: "How are identical twins formed?",
        options: [
            "One fertilised egg splits into two",
            "Two eggs are fertilised by one sperm",
            "Two unfertilised eggs develop",
            "One sperm becomes two eggs"
        ],
        answer: "One fertilised egg splits into two"
    },
    {
        question: "How are fraternal twins formed?",
        options: [
            "Two eggs are fertilised by two sperm",
            "One fertilised egg splits into two",
            "One egg produces two sperm",
            "One sperm fertilises two eggs at the same time"
        ],
        answer: "Two eggs are fertilised by two sperm"
    },
    {
        question: "Which practice helps maintain reproductive health?",
        options: [
            "Keeping the private areas clean and dry",
            "Using harsh chemicals inside the vagina",
            "Sharing underwear",
            "Ignoring unusual pain"
        ],
        answer: "Keeping the private areas clean and dry"
    },
    {
        question: "How often should clean underwear generally be worn?",
        options: [
            "Daily",
            "Once a month",
            "Once a week",
            "Only when it becomes torn"
        ],
        answer: "Daily"
    },
    {
        question: "What should girls avoid putting inside the vagina?",
        options: [
            "Harsh substances and perfumed products",
            "Clean underwear",
            "Water externally",
            "Nothing"
        ],
        answer: "Harsh substances and perfumed products"
    },
    {
        question: "What should someone do if they experience unusual pain, itching, sores or discharge?",
        options: [
            "Seek medical attention",
            "Ignore it",
            "Use any available drug",
            "Hide it from everyone"
        ],
        answer: "Seek medical attention"
    },
    {
        question: "Which practice can reduce the risk of STIs and unwanted pregnancy?",
        options: [
            "Avoiding unprotected sex",
            "Having multiple sexual partners",
            "Sharing needles",
            "Ignoring symptoms"
        ],
        answer: "Avoiding unprotected sex"
    },
    {
        question: "What should a person do if they experience inappropriate touching?",
        options: [
            "Report it to a trusted adult",
            "Keep it secret",
            "Blame themselves",
            "Ignore it completely"
        ],
        answer: "Report it to a trusted adult"
    },
    {
        question: "What is one recommended way for boys to care for the reproductive organs?",
        options: [
            "Gently wash under the foreskin if uncircumcised",
            "Never wash the area",
            "Use harsh chemicals",
            "Ignore pain or swelling"
        ],
        answer: "Gently wash under the foreskin if uncircumcised"
    },
    {
        question: "What is one recommended practice for girls during menstruation?",
        options: [
            "Maintain good menstrual hygiene",
            "Use perfumed products inside the vagina",
            "Avoid changing pads",
            "Ignore unusual symptoms"
        ],
        answer: "Maintain good menstrual hygiene"
    }
];
const week9Quiz = [
    {
        question: "What is pollution?",
        options: [
            "The addition of harmful substances to the environment",
            "The process of cleaning the environment",
            "The planting of trees",
            "The production of food"
        ],
        answer: "The addition of harmful substances to the environment"
    },
    {
        question: "What is a pollutant?",
        options: [
            "A substance that causes pollution",
            "A substance that cleans water",
            "A type of plant",
            "A type of animal"
        ],
        answer: "A substance that causes pollution"
    },
    {
        question: "Which of these is a type of pollution?",
        options: [
            "Air pollution",
            "Food digestion",
            "Photosynthesis",
            "Reproduction"
        ],
        answer: "Air pollution"
    },
    {
        question: "Which of these is another type of pollution?",
        options: [
            "Water pollution",
            "Blood circulation",
            "Respiration",
            "Growth"
        ],
        answer: "Water pollution"
    },
    {
        question: "What is soil pollution?",
        options: [
            "The contamination of soil by harmful substances",
            "The planting of crops",
            "The watering of plants",
            "The natural formation of soil"
        ],
        answer: "The contamination of soil by harmful substances"
    },
    {
        question: "Which of these can cause air pollution?",
        options: [
            "Smoke from vehicles and generators",
            "Planting trees",
            "Using clean water",
            "Recycling materials"
        ],
        answer: "Smoke from vehicles and generators"
    },
    {
        question: "Which activity can release harmful smoke into the air?",
        options: [
            "Burning refuse",
            "Recycling bottles",
            "Planting trees",
            "Sweeping the compound"
        ],
        answer: "Burning refuse"
    },
    {
        question: "Which gas can be produced by poorly maintained generators and vehicles?",
        options: [
            "Carbon monoxide",
            "Oxygen",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: "Carbon monoxide"
    },
    {
        question: "Which of these can cause air pollution in industrial areas?",
        options: [
            "Factory emissions",
            "Clean water",
            "Compost",
            "Fresh vegetables"
        ],
        answer: "Factory emissions"
    },
    {
        question: "How can cigarette smoking contribute to air pollution?",
        options: [
            "It releases smoke and harmful substances into the air",
            "It cleans the air",
            "It produces oxygen",
            "It removes dust"
        ],
        answer: "It releases smoke and harmful substances into the air"
    },
    {
        question: "Which of these can cause air pollution during construction?",
        options: [
            "Dust",
            "Clean water",
            "Compost",
            "Fresh air"
        ],
        answer: "Dust"
    },
    {
        question: "Which of these is an effect of air pollution?",
        options: [
            "Respiratory problems",
            "Improved eyesight",
            "Stronger bones",
            "Better digestion"
        ],
        answer: "Respiratory problems"
    },
    {
        question: "Which respiratory problem can be caused or worsened by air pollution?",
        options: [
            "Asthma",
            "Scurvy",
            "Rickets",
            "Goitre"
        ],
        answer: "Asthma"
    },
    {
        question: "How can air pollution affect the eyes?",
        options: [
            "It can cause eye irritation",
            "It makes the eyes stronger",
            "It improves night vision",
            "It prevents tears"
        ],
        answer: "It can cause eye irritation"
    },
    {
        question: "Which gases can contribute to acid rain?",
        options: [
            "Sulphur dioxide and nitrogen oxides",
            "Oxygen and hydrogen",
            "Nitrogen and oxygen only",
            "Water vapour and oxygen"
        ],
        answer: "Sulphur dioxide and nitrogen oxides"
    },
    {
        question: "What is one effect of acid rain?",
        options: [
            "It can damage crops and buildings",
            "It improves soil everywhere",
            "It cleans rivers",
            "It increases oxygen"
        ],
        answer: "It can damage crops and buildings"
    },
    {
        question: "What is global warming?",
        options: [
            "An increase in the Earth's average temperature",
            "A decrease in rainfall only",
            "The cooling of the Earth",
            "The freezing of rivers"
        ],
        answer: "An increase in the Earth's average temperature"
    },
    {
        question: "Which gas is an important greenhouse gas that contributes to global warming?",
        options: [
            "Carbon dioxide",
            "Oxygen",
            "Helium",
            "Hydrogen"
        ],
        answer: "Carbon dioxide"
    },
    {
        question: "How can air pollution affect visibility?",
        options: [
            "It can cause haze and smog",
            "It makes the air perfectly clear",
            "It removes all dust",
            "It increases sunlight"
        ],
        answer: "It can cause haze and smog"
    },
    {
        question: "Which of these can help control air pollution?",
        options: [
            "Planting more trees",
            "Burning more refuse",
            "Increasing smoking",
            "Allowing vehicles to release more smoke"
        ],
        answer: "Planting more trees"
    },
    {
        question: "Which energy source can help reduce air pollution?",
        options: [
            "Solar energy",
            "Burning refuse",
            "Charcoal burning",
            "Bush burning"
        ],
        answer: "Solar energy"
    },
    {
        question: "Where should a generator be operated?",
        options: [
            "Outside in a well-ventilated area",
            "Inside a closed bedroom",
            "Inside a closed car",
            "Inside a bathroom"
        ],
        answer: "Outside in a well-ventilated area"
    },
    {
        question: "Why should a generator not be used in a closed room?",
        options: [
            "It can cause dangerous carbon monoxide poisoning",
            "It produces too much oxygen",
            "It makes the room cold",
            "It removes all water"
        ],
        answer: "It can cause dangerous carbon monoxide poisoning"
    },
    {
        question: "Which of these can cause soil pollution?",
        options: [
            "Improper disposal of plastics and refuse",
            "Planting trees",
            "Composting properly",
            "Using clean water"
        ],
        answer: "Improper disposal of plastics and refuse"
    },
    {
        question: "How can oil spills pollute soil?",
        options: [
            "They contaminate the soil and reduce its quality",
            "They make the soil cleaner",
            "They increase soil organisms",
            "They produce fresh water"
        ],
        answer: "They contaminate the soil and reduce its quality"
    },
    {
        question: "What can excessive use of pesticides do to soil?",
        options: [
            "It can pollute the soil",
            "It always improves soil quality",
            "It removes all pollutants",
            "It produces clean water"
        ],
        answer: "It can pollute the soil"
    },
    {
        question: "What is one effect of soil pollution?",
        options: [
            "Reduced soil fertility",
            "Improved crop growth",
            "Cleaner groundwater",
            "More soil organisms"
        ],
        answer: "Reduced soil fertility"
    },
    {
        question: "How can soil pollution affect crops?",
        options: [
            "It can reduce crop growth and yield",
            "It always increases crop yield",
            "It makes every crop grow faster",
            "It prevents all diseases"
        ],
        answer: "It can reduce crop growth and yield"
    },
    {
        question: "Which method can help control soil pollution?",
        options: [
            "Proper waste disposal and recycling",
            "Dumping plastics everywhere",
            "Open defecation",
            "Dumping chemicals on soil"
        ],
        answer: "Proper waste disposal and recycling"
    },
    {
        question: "What is water pollution?",
        options: [
            "The contamination of water by harmful substances",
            "The process of boiling water",
            "The collection of rainwater",
            "The storage of clean water"
        ],
        answer: "The contamination of water by harmful substances"
    },
    {
        question: "Which of these can cause water pollution?",
        options: [
            "Dumping refuse into rivers",
            "Protecting water sources",
            "Boiling drinking water",
            "Using clean containers"
        ],
        answer: "Dumping refuse into rivers"
    },
    {
        question: "How can untreated sewage pollute water?",
        options: [
            "It introduces waste and harmful organisms into water",
            "It makes water safe to drink",
            "It removes germs",
            "It increases water quality"
        ],
        answer: "It introduces waste and harmful organisms into water"
    },
    {
        question: "Which agricultural activity can cause water pollution?",
        options: [
            "Fertilizer and pesticide runoff",
            "Planting trees",
            "Composting correctly",
            "Using clean water"
        ],
        answer: "Fertilizer and pesticide runoff"
    },
    {
        question: "Which disease can result from polluted water?",
        options: [
            "Cholera",
            "Rickets",
            "Night blindness",
            "Scurvy"
        ],
        answer: "Cholera"
    },
    {
        question: "Which other disease can be spread through polluted water?",
        options: [
            "Typhoid",
            "Goitre",
            "Beriberi",
            "Anaemia"
        ],
        answer: "Typhoid"
    },
    {
        question: "How can water pollution affect aquatic animals?",
        options: [
            "It can cause them to die",
            "It always makes them healthier",
            "It gives them more oxygen",
            "It prevents all diseases"
        ],
        answer: "It can cause them to die"
    },
    {
        question: "What can oil spills do to water bodies?",
        options: [
            "Pollute the water and harm aquatic life",
            "Make the water safe to drink",
            "Increase drinking water supply",
            "Remove all germs"
        ],
        answer: "Pollute the water and harm aquatic life"
    },
    {
        question: "Which practice helps prevent water pollution?",
        options: [
            "Treating sewage before releasing it",
            "Dumping waste into rivers",
            "Defecating in rivers",
            "Pouring chemicals into streams"
        ],
        answer: "Treating sewage before releasing it"
    },
    {
        question: "What is water purification?",
        options: [
            "Making water clean and safe by removing harmful substances",
            "Adding dirt to water",
            "Making water salty",
            "Adding refuse to water"
        ],
        answer: "Making water clean and safe by removing harmful substances"
    },
    {
        question: "Which of these is a source of water?",
        options: [
            "Rain",
            "Plastic",
            "Smoke",
            "Oil"
        ],
        answer: "Rain"
    },
    {
        question: "Which of these should safe drinking water be?",
        options: [
            "Free from harmful germs and chemicals",
            "Full of refuse",
            "Full of sewage",
            "Smelly and coloured"
        ],
        answer: "Free from harmful germs and chemicals"
    },
    {
        question: "Which method of water purification involves heating water strongly?",
        options: [
            "Boiling",
            "Filtration",
            "Sedimentation",
            "Aeration"
        ],
        answer: "Boiling"
    },
    {
        question: "How long should water be vigorously boiled according to the lesson?",
        options: [
            "At least 10 minutes",
            "10 seconds",
            "30 seconds",
            "1 minute"
        ],
        answer: "At least 10 minutes"
    },
    {
        question: "What is one limitation of boiling water?",
        options: [
            "It does not remove harmful chemicals",
            "It cannot kill germs",
            "It always adds dirt",
            "It makes water poisonous"
        ],
        answer: "It does not remove harmful chemicals"
    },
    {
        question: "What does filtration mainly remove from water?",
        options: [
            "Dirt and suspended particles",
            "All dissolved chemicals",
            "All salts",
            "All harmful gases"
        ],
        answer: "Dirt and suspended particles"
    },
    {
        question: "What happens during sedimentation?",
        options: [
            "Heavy particles settle at the bottom",
            "Water is turned into steam",
            "All germs are immediately killed",
            "Water becomes salty"
        ],
        answer: "Heavy particles settle at the bottom"
    },
    {
        question: "What chemical is commonly used to disinfect water?",
        options: [
            "Chlorine",
            "Oil",
            "Petrol",
            "Kerosene"
        ],
        answer: "Chlorine"
    },
    {
        question: "What is the purpose of alum in water treatment?",
        options: [
            "It helps particles stick together and settle",
            "It adds dirt to water",
            "It makes water oily",
            "It produces smoke"
        ],
        answer: "It helps particles stick together and settle"
    },
    {
        question: "What does distillation involve?",
        options: [
            "Boiling water and collecting the cooled steam",
            "Adding refuse to water",
            "Freezing dirty water only",
            "Filtering through a cloth only"
        ],
        answer: "Boiling water and collecting the cooled steam"
    },
    {
        question: "What does SODIS use to help disinfect water?",
        options: [
            "Sunlight",
            "Petrol",
            "Oil",
            "Smoke"
        ],
        answer: "Sunlight"
    },
    {
        question: "How long should clear plastic bottles of water generally be exposed to direct sunlight in SODIS?",
        options: [
            "About 6 hours",
            "About 10 seconds",
            "About 1 minute",
            "About 1 year"
        ],
        answer: "About 6 hours"
    },
    {
        question: "What is aeration used for in water treatment?",
        options: [
            "It can remove unpleasant smells and add oxygen",
            "It adds sewage to water",
            "It makes water poisonous",
            "It adds plastics to water"
        ],
        answer: "It can remove unpleasant smells and add oxygen"
    },
    {
        question: "Which process comes after sedimentation in a typical municipal water treatment process?",
        options: [
            "Filtration",
            "Open defecation",
            "Oil spilling",
            "Dumping"
        ],
        answer: "Filtration"
    }
];
const week10Quiz = [
    {
        question: "What is science?",
        options: [
            "The systematic study of the natural world",
            "The study of money",
            "The study of politics",
            "The study of language"
        ],
        answer: "The systematic study of the natural world"
    },
    {
        question: "Which branch of science studies living things?",
        options: [
            "Biology",
            "Physics",
            "Geology",
            "Chemistry"
        ],
        answer: "Biology"
    },
    {
        question: "Which branch of science studies matter and its properties?",
        options: [
            "Chemistry",
            "Astronomy",
            "Biology",
            "Meteorology"
        ],
        answer: "Chemistry"
    },
    {
        question: "Which branch studies forces, energy, light and motion?",
        options: [
            "Physics",
            "Botany",
            "Zoology",
            "Agriculture"
        ],
        answer: "Physics"
    },
    {
        question: "What is a hypothesis?",
        options: [
            "A testable guess",
            "A final result",
            "A type of experiment",
            "A scientific instrument"
        ],
        answer: "A testable guess"
    },
    {
        question: "What is puberty?",
        options: [
            "The period when a child's body changes toward adulthood",
            "The period when a person stops growing",
            "A type of disease",
            "A type of exercise"
        ],
        answer: "The period when a child's body changes toward adulthood"
    },
    {
        question: "What causes the physical changes that occur during puberty?",
        options: [
            "Hormones",
            "Water",
            "Exercise only",
            "Food only"
        ],
        answer: "Hormones"
    },
    {
        question: "Which hormone is mainly produced by the testes?",
        options: [
            "Testosterone",
            "Oestrogen",
            "Insulin",
            "Vitamin C"
        ],
        answer: "Testosterone"
    },
    {
        question: "Which hormone is mainly produced by the ovaries?",
        options: [
            "Oestrogen",
            "Testosterone",
            "Adrenaline",
            "Insulin"
        ],
        answer: "Oestrogen"
    },
    {
        question: "Which is a physical change common during puberty?",
        options: [
            "Growth of armpit and pubic hair",
            "Loss of all body hair",
            "Permanent loss of appetite",
            "Stopping growth completely"
        ],
        answer: "Growth of armpit and pubic hair"
    },
    {
        question: "What is menstruation?",
        options: [
            "The monthly discharge of blood and tissue from the uterus",
            "The production of sperm",
            "The release of urine",
            "The growth of bones"
        ],
        answer: "The monthly discharge of blood and tissue from the uterus"
    },
    {
        question: "What is personal hygiene?",
        options: [
            "Keeping the body clean and caring for it to prevent disease",
            "Taking medicine every day",
            "Eating only fruits",
            "Sleeping all day"
        ],
        answer: "Keeping the body clean and caring for it to prevent disease"
    },
    {
        question: "How long should hands generally be scrubbed during proper handwashing?",
        options: [
            "At least 20 seconds",
            "1 second",
            "2 minutes exactly",
            "5 seconds"
        ],
        answer: "At least 20 seconds"
    },
    {
        question: "Which of these is an advantage of good personal hygiene?",
        options: [
            "It helps prevent the spread of germs",
            "It causes disease",
            "It increases body odour",
            "It causes tooth decay"
        ],
        answer: "It helps prevent the spread of germs"
    },
    {
        question: "Which disease can be associated with poor hygiene?",
        options: [
            "Cholera",
            "Rickets",
            "Night blindness",
            "Goitre"
        ],
        answer: "Cholera"
    },
    {
        question: "What is environmental sanitation?",
        options: [
            "Keeping the environment clean and free from waste and disease organisms",
            "Keeping only the bedroom clean",
            "Planting crops only",
            "Taking medicine"
        ],
        answer: "Keeping the environment clean and free from waste and disease organisms"
    },
    {
        question: "Which of these is solid waste?",
        options: [
            "Paper and food remains",
            "Urine",
            "Bath water",
            "Sewage"
        ],
        answer: "Paper and food remains"
    },
    {
        question: "What is sewage?",
        options: [
            "Liquid waste from homes and other sources",
            "Dry leaves",
            "Plastic bottles",
            "Paper waste"
        ],
        answer: "Liquid waste from homes and other sources"
    },
    {
        question: "Which waste is biodegradable?",
        options: [
            "Food remains",
            "Glass",
            "Plastic",
            "Metal"
        ],
        answer: "Food remains"
    },
    {
        question: "What is recycling?",
        options: [
            "Processing used materials into new products",
            "Burning all waste",
            "Dumping waste in rivers",
            "Throwing everything away"
        ],
        answer: "Processing used materials into new products"
    },
    {
        question: "What is compost?",
        options: [
            "Dark, rich material formed from decayed organic waste",
            "Plastic waste",
            "Liquid sewage",
            "Industrial smoke"
        ],
        answer: "Dark, rich material formed from decayed organic waste"
    },
    {
        question: "Which of these can be used in a compost heap?",
        options: [
            "Dry leaves",
            "Plastic bottles",
            "Glass",
            "Metal cans"
        ],
        answer: "Dry leaves"
    },
    {
        question: "What is nutrition?",
        options: [
            "The process of taking and using food for growth, energy and health",
            "The process of breathing",
            "The process of sleeping",
            "The process of removing waste only"
        ],
        answer: "The process of taking and using food for growth, energy and health"
    },
    {
        question: "Which nutrient mainly helps growth and repair of body tissues?",
        options: [
            "Protein",
            "Water",
            "Roughage",
            "Carbohydrate"
        ],
        answer: "Protein"
    },
    {
        question: "Which nutrient is the body's main source of energy?",
        options: [
            "Carbohydrates",
            "Vitamins",
            "Minerals",
            "Water"
        ],
        answer: "Carbohydrates"
    },
    {
        question: "Which nutrient helps prevent constipation?",
        options: [
            "Roughage",
            "Fat",
            "Protein",
            "Vitamin D"
        ],
        answer: "Roughage"
    },
    {
        question: "Which vitamin is important for good eyesight?",
        options: [
            "Vitamin A",
            "Vitamin C",
            "Vitamin K",
            "Vitamin D"
        ],
        answer: "Vitamin A"
    },
    {
        question: "Deficiency of which vitamin causes scurvy?",
        options: [
            "Vitamin C",
            "Vitamin A",
            "Vitamin D",
            "Vitamin K"
        ],
        answer: "Vitamin C"
    },
    {
        question: "Which mineral is needed for the formation of red blood cells?",
        options: [
            "Iron",
            "Iodine",
            "Calcium",
            "Sodium"
        ],
        answer: "Iron"
    },
    {
        question: "What is a balanced diet?",
        options: [
            "A diet containing all nutrients in the right amounts",
            "A diet containing only carbohydrates",
            "A diet containing only fruits",
            "A diet containing no fats"
        ],
        answer: "A diet containing all nutrients in the right amounts"
    },
    {
        question: "What is drug abuse?",
        options: [
            "Using a drug wrongly or without medical need",
            "Taking prescribed medicine correctly",
            "Visiting a hospital",
            "Eating a balanced diet"
        ],
        answer: "Using a drug wrongly or without medical need"
    },
    {
        question: "Which of these is a stimulant?",
        options: [
            "Cocaine",
            "Alcohol",
            "Diazepam",
            "Heroin"
        ],
        answer: "Cocaine"
    },
    {
        question: "Which of these is a depressant?",
        options: [
            "Alcohol",
            "Cocaine",
            "Amphetamine",
            "Excess caffeine"
        ],
        answer: "Alcohol"
    },
    {
        question: "Which of these can contribute to drug abuse among young people?",
        options: [
            "Peer pressure",
            "Good parental guidance",
            "Healthy hobbies",
            "Drug education"
        ],
        answer: "Peer pressure"
    },
    {
        question: "Which is an effect of substance abuse?",
        options: [
            "Addiction",
            "Improved health",
            "Better school performance",
            "Stronger immunity"
        ],
        answer: "Addiction"
    },
    {
        question: "What is reproduction?",
        options: [
            "The process by which living things produce young ones",
            "The process of digestion",
            "The process of breathing",
            "The process of sweating"
        ],
        answer: "The process by which living things produce young ones"
    },
    {
        question: "Which organs produce sperm?",
        options: [
            "Testes",
            "Ovaries",
            "Uterus",
            "Kidneys"
        ],
        answer: "Testes"
    },
    {
        question: "Which organs produce ova?",
        options: [
            "Ovaries",
            "Testes",
            "Uterus",
            "Cervix"
        ],
        answer: "Ovaries"
    },
    {
        question: "Where does fertilisation usually occur?",
        options: [
            "Fallopian tube",
            "Uterus",
            "Vagina",
            "Cervix"
        ],
        answer: "Fallopian tube"
    },
    {
        question: "What is formed when sperm and ovum join?",
        options: [
            "Zygote",
            "Foetus",
            "Embryo",
            "Placenta"
        ],
        answer: "Zygote"
    },
    {
        question: "What is pollution?",
        options: [
            "The addition of harmful substances to the environment",
            "The cleaning of the environment",
            "The planting of trees",
            "The purification of water"
        ],
        answer: "The addition of harmful substances to the environment"
    },
    {
        question: "Which of these is a major cause of air pollution?",
        options: [
            "Vehicle and generator smoke",
            "Tree planting",
            "Recycling",
            "Composting"
        ],
        answer: "Vehicle and generator smoke"
    },
    {
        question: "Which of these can cause soil pollution?",
        options: [
            "Oil spills",
            "Planting crops",
            "Composting",
            "Tree planting"
        ],
        answer: "Oil spills"
    },
    {
        question: "Which disease can result from polluted water?",
        options: [
            "Typhoid",
            "Rickets",
            "Scurvy",
            "Goitre"
        ],
        answer: "Typhoid"
    },
    {
        question: "Which method of water purification involves heating water?",
        options: [
            "Boiling",
            "Filtration",
            "Sedimentation",
            "Aeration"
        ],
        answer: "Boiling"
    },
    {
        question: "What does filtration remove from water?",
        options: [
            "Dirt and suspended particles",
            "All dissolved chemicals",
            "All salts",
            "All gases"
        ],
        answer: "Dirt and suspended particles"
    },
    {
        question: "Which chemical is commonly used to disinfect water?",
        options: [
            "Chlorine",
            "Petrol",
            "Kerosene",
            "Oil"
        ],
        answer: "Chlorine"
    },
    {
        question: "Which of these helps control air pollution?",
        options: [
            "Planting trees",
            "Burning plastics",
            "Open burning",
            "Smoking"
        ],
        answer: "Planting trees"
    },
    {
        question: "Which of these is an effect of water pollution?",
        options: [
            "Death of aquatic organisms",
            "Cleaner rivers",
            "More drinking water",
            "Improved fish health"
        ],
        answer: "Death of aquatic organisms"
    },
    {
        question: "Which practice helps maintain reproductive health?",
        options: [
            "Keeping reproductive organs clean",
            "Using harsh chemicals",
            "Ignoring pain",
            "Sharing underwear"
        ],
        answer: "Keeping reproductive organs clean"
    },
    {
        question: "What should a person do when experiencing unusual reproductive pain or discharge?",
        options: [
            "Seek medical attention",
            "Ignore it",
            "Hide it",
            "Use any drug without advice"
        ],
        answer: "Seek medical attention"
    },
    {
        question: "Which action can help prevent substance abuse?",
        options: [
            "Choosing good friends and saying no to harmful substances",
            "Following bad peer pressure",
            "Experimenting with drugs",
            "Sharing medicines"
        ],
        answer: "Choosing good friends and saying no to harmful substances"
    }
];
const week11Quiz = [
    {
        question: "What is science?",
        options: [
            "The systematic study of the natural world",
            "The study of money",
            "The study of politics",
            "The study of language"
        ],
        answer: "The systematic study of the natural world"
    },
    {
        question: "Which branch of science studies living things?",
        options: [
            "Biology",
            "Physics",
            "Chemistry",
            "Geology"
        ],
        answer: "Biology"
    },
    {
        question: "What is the first step in the scientific method?",
        options: [
            "Observation or identifying a problem",
            "Conclusion",
            "Reporting",
            "Experiment"
        ],
        answer: "Observation or identifying a problem"
    },
    {
        question: "What is a hypothesis?",
        options: [
            "A testable guess",
            "A final answer",
            "A scientific instrument",
            "A type of disease"
        ],
        answer: "A testable guess"
    },
    {
        question: "Which of these is a benefit of science?",
        options: [
            "Improved healthcare",
            "Increased disease",
            "Poor communication",
            "Environmental destruction"
        ],
        answer: "Improved healthcare"
    },
    {
        question: "What is puberty?",
        options: [
            "The period when the body changes from childhood towards adulthood",
            "A disease affecting children",
            "The period when growth stops",
            "A type of exercise"
        ],
        answer: "The period when the body changes from adulthood to childhood"
    },
    {
        question: "What causes many of the changes during puberty?",
        options: [
            "Hormones",
            "Dust",
            "Water",
            "Exercise only"
        ],
        answer: "Hormones"
    },
    {
        question: "Which hormone is mainly produced by the testes?",
        options: [
            "Testosterone",
            "Oestrogen",
            "Insulin",
            "Vitamin C"
        ],
        answer: "Testosterone"
    },
    {
        question: "Which hormone is produced by the ovaries?",
        options: [
            "Oestrogen",
            "Testosterone",
            "Insulin",
            "Adrenaline"
        ],
        answer: "Oestrogen"
    },
    {
        question: "What is menstruation?",
        options: [
            "The monthly discharge of blood and tissue from the uterus",
            "The production of sperm",
            "The release of urine",
            "The formation of bones"
        ],
        answer: "The monthly discharge of blood and tissue from the uterus"
    },
    {
        question: "What is personal hygiene?",
        options: [
            "Keeping the body clean and caring for it to prevent disease",
            "Taking medicine every day",
            "Eating only vegetables",
            "Sleeping throughout the day"
        ],
        answer: "Keeping the body clean and caring for it to prevent disease"
    },
    {
        question: "How long should hands be scrubbed during proper handwashing?",
        options: [
            "At least 20 seconds",
            "2 seconds",
            "5 seconds",
            "1 second"
        ],
        answer: "At least 20 seconds"
    },
    {
        question: "Which of these can result from poor personal hygiene?",
        options: [
            "Cholera",
            "Rickets",
            "Goitre",
            "Night blindness"
        ],
        answer: "Cholera"
    },
    {
        question: "Why should fingernails be kept short and clean?",
        options: [
            "To reduce the spread of germs",
            "To increase body temperature",
            "To make the nails grow faster",
            "To improve eyesight"
        ],
        answer: "To reduce the spread of germs"
    },
    {
        question: "What is environmental sanitation?",
        options: [
            "Keeping the environment clean and free from waste and disease organisms",
            "Keeping only the bedroom clean",
            "Planting flowers only",
            "Taking medicine regularly"
        ],
        answer: "Keeping the environment clean and free from waste and disease organisms"
    },
    {
        question: "Which of these is refuse?",
        options: [
            "Paper, bottles and food remains",
            "Urine only",
            "Blood only",
            "Clean water"
        ],
        answer: "Paper, bottles and food remains"
    },
    {
        question: "What is sewage?",
        options: [
            "Liquid waste from homes and other sources",
            "Dry leaves",
            "Plastic bottles",
            "Paper waste"
        ],
        answer: "Liquid waste from homes and other sources"
    },
    {
        question: "Which waste is biodegradable?",
        options: [
            "Food remains",
            "Plastic",
            "Glass",
            "Metal"
        ],
        answer: "Food remains"
    },
    {
        question: "What is recycling?",
        options: [
            "Processing used materials into new products",
            "Burning all waste",
            "Dumping waste into rivers",
            "Throwing everything away"
        ],
        answer: "Processing used materials into new products"
    },
    {
        question: "What is compost?",
        options: [
            "Dark, rich material produced from decayed organic waste",
            "Plastic waste",
            "Industrial smoke",
            "Liquid sewage"
        ],
        answer: "Dark, rich material produced from decayed organic waste"
    },
    {
        question: "What is nutrition?",
        options: [
            "The process of taking and using food for growth, energy and health",
            "The process of breathing",
            "The process of sleeping",
            "The process of removing waste"
        ],
        answer: "The process of taking and using food for growth, energy and health"
    },
    {
        question: "Which nutrient is mainly responsible for growth and repair?",
        options: [
            "Protein",
            "Carbohydrate",
            "Water",
            "Roughage"
        ],
        answer: "Protein"
    },
    {
        question: "Which nutrient mainly supplies energy?",
        options: [
            "Carbohydrates",
            "Vitamins",
            "Minerals",
            "Water"
        ],
        answer: "Carbohydrates"
    },
    {
        question: "Which nutrient helps prevent constipation?",
        options: [
            "Roughage",
            "Fat",
            "Protein",
            "Vitamin D"
        ],
        answer: "Roughage"
    },
    {
        question: "Which vitamin is important for good eyesight?",
        options: [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        answer: "Vitamin A"
    },
    {
        question: "Deficiency of vitamin C causes what disease?",
        options: [
            "Scurvy",
            "Rickets",
            "Goitre",
            "Beriberi"
        ],
        answer: "Scurvy"
    },
    {
        question: "Which mineral is important for healthy red blood cells?",
        options: [
            "Iron",
            "Iodine",
            "Calcium",
            "Water"
        ],
        answer: "Iron"
    },
    {
        question: "What is a balanced diet?",
        options: [
            "A diet containing all nutrients in the right amounts",
            "A diet containing only protein",
            "A diet containing only carbohydrates",
            "A diet containing no fat"
        ],
        answer: "A diet containing all nutrients in the right amounts"
    },
    {
        question: "What is malnutrition?",
        options: [
            "Poor health caused by too little, too much or an improper balance of food",
            "Eating a balanced diet",
            "Drinking clean water",
            "Regular exercise"
        ],
        answer: "Poor health caused by too little, too much or an improper balance of food"
    },
    {
        question: "What is drug abuse?",
        options: [
            "Using drugs wrongly or without medical need",
            "Taking prescribed medicine correctly",
            "Visiting a doctor",
            "Eating healthy food"
        ],
        answer: "Using drugs wrongly or without medical need"
    },
    {
        question: "Which of these is a stimulant?",
        options: [
            "Cocaine",
            "Alcohol",
            "Diazepam",
            "Heroin"
        ],
        answer: "Cocaine"
    },
    {
        question: "Which of these is a depressant?",
        options: [
            "Alcohol",
            "Cocaine",
            "Amphetamine",
            "Excess caffeine"
        ],
        answer: "Alcohol"
    },
    {
        question: "Which is a possible reason for drug abuse?",
        options: [
            "Peer pressure",
            "Good parental guidance",
            "Drug education",
            "Healthy hobbies"
        ],
        answer: "Peer pressure"
    },
    {
        question: "Which is an effect of drug abuse?",
        options: [
            "Addiction",
            "Improved school performance",
            "Stronger immunity",
            "Better health"
        ],
        answer: "Addiction"
    },
    {
        question: "What is reproduction?",
        options: [
            "The process by which living things produce young ones",
            "The process of breathing",
            "The process of digestion",
            "The process of sweating"
        ],
        answer: "The process by which living things produce young ones"
    },
    {
        question: "Which organs produce sperm?",
        options: [
            "Testes",
            "Ovaries",
            "Uterus",
            "Kidneys"
        ],
        answer: "Testes"
    },
    {
        question: "Which organs produce ova?",
        options: [
            "Ovaries",
            "Testes",
            "Uterus",
            "Cervix"
        ],
        answer: "Ovaries"
    },
    {
        question: "Where does fertilisation usually occur?",
        options: [
            "Fallopian tube",
            "Uterus",
            "Vagina",
            "Cervix"
        ],
        answer: "Fallopian tube"
    },
    {
        question: "What is formed when a sperm joins an ovum?",
        options: [
            "Zygote",
            "Foetus",
            "Placenta",
            "Hormone"
        ],
        answer: "Zygote"
    },
    {
        question: "What is pollution?",
        options: [
            "The addition of harmful substances to the environment",
            "The cleaning of the environment",
            "The planting of trees",
            "The purification of water"
        ],
        answer: "The addition of harmful substances to the environment"
    },
    {
        question: "Which of these can cause air pollution?",
        options: [
            "Vehicle and generator smoke",
            "Tree planting",
            "Recycling",
            "Composting"
        ],
        answer: "Vehicle and generator smoke"
    },
    {
        question: "Which of these can cause soil pollution?",
        options: [
            "Oil spills",
            "Planting trees",
            "Composting",
            "Proper recycling"
        ],
        answer: "Oil spills"
    },
    {
        question: "Which disease can result from polluted water?",
        options: [
            "Cholera",
            "Rickets",
            "Scurvy",
            "Goitre"
        ],
        answer: "Cholera"
    },
    {
        question: "Which method of water purification involves heating water?",
        options: [
            "Boiling",
            "Filtration",
            "Sedimentation",
            "Aeration"
        ],
        answer: "Boiling"
    },
    {
        question: "Which substance is commonly used to disinfect water?",
        options: [
            "Chlorine",
            "Petrol",
            "Kerosene",
            "Oil"
        ],
        answer: "Chlorine"
    },
    {
        question: "What does filtration mainly remove from water?",
        options: [
            "Dirt and suspended particles",
            "All dissolved chemicals",
            "All salts",
            "All gases"
        ],
        answer: "Dirt and suspended particles"
    },
    {
        question: "Which practice helps prevent water pollution?",
        options: [
            "Treating sewage before releasing it",
            "Dumping refuse into rivers",
            "Open defecation",
            "Pouring chemicals into streams"
        ],
        answer: "Treating sewage before releasing it"
    },
    {
        question: "Which practice helps reduce air pollution?",
        options: [
            "Planting trees",
            "Burning plastics",
            "Burning refuse",
            "Increasing vehicle smoke"
        ],
        answer: "Planting trees"
    },
    {
        question: "Which practice helps maintain reproductive health?",
        options: [
            "Keeping the reproductive organs clean",
            "Using harsh chemicals",
            "Ignoring pain",
            "Sharing underwear"
        ],
        answer: "Keeping the reproductive organs clean"
    },
    {
        question: "What should someone do if they notice unusual reproductive pain or discharge?",
        options: [
            "Seek medical attention",
            "Ignore it",
            "Hide it",
            "Use any drug without advice"
        ],
        answer: "Seek medical attention"
    },
    {
        question: "Which action can help prevent substance abuse?",
        options: [
            "Saying no to harmful substances",
            "Following bad peer pressure",
            "Experimenting with drugs",
            "Sharing medicines"
        ],
        answer: "Saying no to harmful substances"
    }
];



let week = document.querySelector(".week");



let form = document.createElement("form");
form.method = "get";
form.action = "progress.html";


let submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";



let populateQuiz = (quiz, quizContent)=>{


    
    for (let i = 0; i < quizContent.length; i++){
        let fieldSet = document.createElement("fieldSet");
        let legend = document.createElement("legend");
        legend.textContent = `Question ${i + 1}`;
        let div = document.createElement("div");
        div.textContent = quizContent[i].question;

        fieldSet.appendChild(legend)

        fieldSet.appendChild(div);
        
        quizContent[i].options.forEach(option=>{
            let label = document.createElement("label");
            label.textContent = option

            let inputRadio = document.createElement("input");
            inputRadio.type = "radio";
            inputRadio.name = quizContent[i].question;
            inputRadio.value = option;

            label.prepend(inputRadio);
            
            fieldSet.appendChild(label);
        });
        form.appendChild(fieldSet);
        
    }
    submitButton.className = `${quiz.id}`;
    submitButton.name = "button"
    form.appendChild(submitButton);

    quiz.appendChild(form)



}



let getInputValue = (week, classname)=>{
    let formData = new FormData(form)
    let correct = 0;
    for(let i = 0; i < week.length; i++){
        if (formData.get(week[i].question) === week[i].answer){
            correct++;
        }
    }
    localStorage.setItem(classname, JSON.stringify(correct));


}

if (week !== null){
    let week1 = document.querySelector("#week1");
    if (week1 !== null){
        let button = document.querySelector("input[type='submit']");
        populateQuiz(week1, week1Quiz);
        submitButton.addEventListener("click", () =>{getInputValue(week1Quiz, week1.id)});
    };
    let week2 = document.querySelector("#week2");
    if (week2 !== null){
        populateQuiz(week2, week2Quiz)
    };
    let week3 = document.querySelector("#week3");
        if (week3 !== null){
            populateQuiz(week3, week3Quiz)
        };
    let week4 = document.querySelector("#week4");
        if (week4 !== null){
            populateQuiz(week4, week4Quiz)
        };
    let week5 = document.querySelector("#week5");
        if (week5 !== null){
            populateQuiz(week5, week5Quiz)
        };
    let week6 = document.querySelector("#week6");
        if (week6 !== null){
            populateQuiz(week6, week6Quiz)
        };
    let week7 = document.querySelector("#week7");
        if (week7 !== null){
            populateQuiz(week7, week7Quiz)
        };
    let week8 = document.querySelector("#week8");
        if (week8 !== null){
            populateQuiz(week8, week8Quiz)
        };
    let week9 = document.querySelector("#week9");
        if (week9 !== null){
            populateQuiz(week9, week9Quiz)
        };
    let week10 = document.querySelector("#week10");
        if (week10 !== null){
            populateQuiz(week10, week10Quiz)
        };
    let week11 = document.querySelector("#week11");
        if (week11 !== null){
            populateQuiz(week11, week11Quiz)
        };


};

