let aCourse = {

};
aCourse.code = "WDD131";
aCourse.title = "Dynamic Web Fundamentals";
aCourse.credits = 2;
aCourse.sections = [];
aCourse.sections.push({section: "001", enrolled:95, instructor: "Ahmed Lawal Anthony"},{section: "002", enrolled:97, instructor: "Taiye Obi Osas"});


function setCourseInformation(aCourse){
  document.querySelector(".openAi").innerText =  `${aCourse.code}-${aCourse.title}`;
}
setCourseInformation(aCourse);

function renderSections(course){
  const tbody = document.querySelector("tbody");
  let rows = "";
  for (const section of course.sections){
    rows+=`<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`
  }
  tbody.innerHTML = rows;
}
renderSections(aCourse)