let contentTable = document.querySelector(".contentTable");

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
        topic: ["MID TERM TEST/ MID TERM BREAK", "./week7/test.html"]
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


