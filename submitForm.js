let submit = document.getElementById('submit')
console.log(submit)
const formName = 'familyTreatmentPlan'
console.log('form: ' + formName)
let newForm = {}
let submitted = 0
let additional = 0
newForm.goals = [];


let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  document.getElementById('showClientName').innerHTML = newForm.clientName;
  //document.getElementById('showClientName1').innerHTML = newForm.clientName;
  })
  
let address = document.querySelector('input#address')
address.addEventListener('change', (e) => {
	newForm.address = e.target.value;
  console.log(newForm.address);
})

let city = document.querySelector('input#city')
city.addEventListener('change', (e) => {
	newForm.city = e.target.value;
  console.log(newForm.city);
})

let state = document.querySelector('input#state')
state.addEventListener('change', (e) => {
	newForm.state = e.target.value;
  console.log(newForm.state);
})

let zip = document.querySelector('input#zip')
zip.addEventListener('change', (e) => {
	newForm.zip = e.target.value;
  console.log(newForm.zip);
})

let start = document.querySelector('input#start')
start.addEventListener('change', (e) => {
	newForm.start = e.target.value;
  console.log(newForm.start);
})

let end = document.querySelector('input#end')
end.addEventListener('change', (e) => {
	newForm.end = e.target.value;
  console.log(newForm.end);
})

let intakeDate = document.querySelector('input#intakeDate')
intakeDate.addEventListener('change', (e) => {
	newForm.intakeDate = e.target.value;
  console.log(newForm.sixMonthReview);
})

let phone = document.querySelector('input#phone')
phone.addEventListener('change', (e) => {
	newForm.phone = e.target.value;
  console.log(newForm.phone);
})

let email = document.querySelector('input#email')
email.addEventListener('change', (e) => {
	newForm.email = e.target.value;
  console.log(newForm.email);
})

let dob = document.querySelector('input#dob')
dob.addEventListener('change', (e) => {
	newForm.dob = e.target.value;
  console.log(newForm.dob);
  document.getElementById('showClientDOB').innerHTML = newForm.dob;
  //document.getElementById('showClientDOB1').innerHTML = newForm.dob;
})

let familyTrainerName = document.querySelector('input#familyTrainerName')
familyTrainerName.addEventListener('change', (e) => {
	newForm.familyTrainerName = e.target.value;
  console.log(newForm.familyTrainerName);
})

let threeMonthReview = document.querySelector('input#threeMonthReview')
threeMonthReview.addEventListener('change', (e) => {
	newForm.threeMonthReview = e.target.value;
  console.log(newForm.threeMonthReview);
})

let annual = document.querySelector('input#annual')
annual.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.annual)
    })

let threeMonth = document.querySelector('input#threeMonth')
threeMonth.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.threeMonth)
})
    
let background = document.getElementById('background')
background.addEventListener('change', (e) => {
    newForm.background = e.target.value;
    console.log(newForm.background)
    })

class Goal {
    constructor(goalName, strengths, needs, objectives, interventions, responsiblePersonTimeline, progress, notes) {
        this.goalName = goalName;
        this.strengths = strengths;
        this.needs = needs;
        this.objectives = objectives;
        this.interventions = interventions;
        this.responsiblePersonTimeline = responsiblePersonTimeline;
        this.progress = progress
        this.notes = notes
    }
}

async function getCurrentGoal(goal) {
    goal.goalName = document.getElementById('goalName').value
    goal.strengths = document.getElementById('strengths').value;
    goal.needs = document.getElementById('needs').value;
    goal.objectives = await getObjectives
    goal.interventions = document.getElementById('interventions').value;
    goal.responsiblePersonTimeline = await getResponsiblePersonTimeline;
    goal.progress = await getProgress
    goal.notes = document.getElementById('notes').value;
}

 getObjectives = new Promise((res) => {
    let objectives = []
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`goal${i}`) == '') {
            i = 4;
            return objectives
        } else {objectives.push(document.getElementById(`goal${i}`).value)}
    }
    res(objectives)
})

 getResponsiblePersonTimeline = new Promise ((res) => {
    let responsiblePersonTimeline = []
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`responsiblePersonTimeline${i}`) == '') {
            i = 4;
            return responsiblePersonTimeline
        } else {responsiblePersonTimeline.push(document.getElementById(`responsiblePersonTimeline${i}`).value)}
    }
    res(responsiblePersonTimeline)
})

 getProgress = new Promise ((res) => {
    let progress = ''
    if (document.getElementById('achieved').checked) { progress = 'achieved' }
    if (document.getElementById('discontinued').checked) { progress = 'discontinued' } else { progress = 'on-going' }
    res(progress)
})

document.getElementById('submitCurrentGoal').addEventListener("click", async (event) => {
    goal = new Goal;
    goal = await getCurrentGoal(goal)
    newForm.goals.push(goal)
    submitted++
    document.getElementById('submitError').style.display='none'
})

document.getElementById('createNewGoal').addEventListener("click", async (event) => {
    if (submitted <= additional) {
        showError('You need to save a goal before proceeding to the next')
        return
    }
    additional++
    showError("Successfully Added")
    clearGoals()
    return
})

function showError(e) {
    document.getElementById('responseMessage').style.display = 'block'
    return document.getElementById('responseMessage') = e
}

function clearGoals() {
    document.getElementById('mainGoal').value = '';
    document.getElementById('strengths').value = '';
    document.getElementById('needs').value = '';
    for (let i = 1; i < 4; i++) {
        document.getElementById(`goal${i}`).value = ''
        document.getElementById(`responsiblePersonTimeline${i}`).value = ''
    }
    document.getElementById('interventions').value = ''
    document.getElementById('achieved').checked = false;
    document.getElementById('ongoing').checked = false;
    document.getElementById('discontinued').checked = false;
    document.getElementById('notes').value = ''
}

async function copyOfPlan() {
  let response = new Promise((res, rej) => {
    let checkbox = ''
    if (document.getElementById('acceptReceiveCopy').checked) { checkbox = 'accept' }
    if (document.getElementById('hardCopyReceiveCopy').checked) { checkbox = 'hard copy' }
    if (document.getElementById('electronicReceiveCopy').checked) { checkbox = 'electronic' }
    if (document.getElementById('electronicReceiveCopy').checked) { checkbox = 'disagree' }
    checkbox != '' ? res(checkbox): rej(showError('receipt of plan mus be checked'))
  
  })
  return response
}

async function getFamilyResponse() {
  let response = new Promise((res, rej) => {
    let familyResponse = {}
    familyResponse.progress = document.getElementById('responseProgress').value;
    familyResponse.teachingPlan = document.getElementById('teachingPlan').value;
    familyResponse.timeline = document.getElementById('timeline').value;
    if (document.getElementById('achievedFamily').checked) { familyResponse.review = 'achieved' }
    if (document.getElementById('discontinuedFamily')) { familyResponse.review = 'discontinued' }
    else { familyResponse.review = 'ongoing' }
    familyResponse.notes = document.getElementById('notesFamily').value
    familyResponse != {} ? res(familyResponse): rej(showError('Family acknowledgement required'))
  })
  return response
}

document.getElementById('submit').addEventListener("click", async (event) => {
    familyTreatmentPlan = document.getElementById('agreeFamilyTreatmentPlan').checked ? "agree" : "disagree"
    let copyOfPlan = await copyOfPlan()
    familyResponse = await getFamilyResponse()
    newForm.caregiverName = document.getElementById('caregiverName2').value;
    newForm.staffMemberName = document.getElementById('staffName').value;
    newForm.CEO = document.getElementById('CEOName').value
    newForm.familyTreatmentPlan = familyTreatmentPlan;
    newForm.autismSupportTreatmentPlan = autismSupportTreatmentPlan;
    newForm.copyOfPlan = copyOfPlan;
    newForm.familyResponse = familyResponse;
    newForm.date = document.getElementById('date').value
    submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}
