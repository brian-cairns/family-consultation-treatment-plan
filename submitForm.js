let submit = document.getElementById('submitToFile')
console.log(submit)
const formName = 'familyTreatmentPlan'
console.log('form: ' + formName)
let newForm = {}
newForm.goals = [];

for (let i = 1; i < 3; i++) {
  document.getElementById(`addGoal${i}`).style.display = 'none'
  document.getElementById(`goalBlock${i + 1}`).style.display = 'none' 
}

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  document.getElementById('showClientName').innerHTML = newForm.clientName;
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

let end = document.querySelector('input#end')
end.addEventListener('change', (e) => {
	newForm.end = e.target.value;
  console.log(newForm.end);
})

let start = document.querySelector('input#start')
start.addEventListener('change', (e) => {
	newForm.start = e.target.value;
  console.log(newForm.start);
})

let intakeDate = document.querySelector('input#intakeDate')
intakeDate.addEventListener('change', (e) => {
	newForm.intakeDate = e.target.value;
  console.log(newForm.intakeDate);
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
  document.getElementById('clientDobFlag').innerHTML = newForm.dob;
  
})

let familyTrainerName = document.querySelector('input#familyTrainerName')
familyTrainerName.addEventListener('change', (e) => {
	newForm.familyTrainerName = e.target.value;
  console.log(newForm.familyTrainerName);
})

let sixMonthReview = document.querySelector('input#sixMonthReview')
sixMonthReview.addEventListener('change', (e) => {
	newForm.sixMonthReview = e.target.value;
  console.log(newForm.threeMonthReview);
})

let annual = document.querySelector('input#annual')
annual.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.treatmentPlanDuration)
    })

let sixMonth = document.querySelector('input#sixMonth')
sixMonth.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.treatmentPlanDuration)
})
    
let background = document.getElementById('backgroundClient')
background.addEventListener('change', (e) => {
    newForm.background = e.target.value;
    console.log(newForm.background)
    })

class Goal {
    constructor(goalName, objectives, intervention, strategies, responsible, progress, completed) {
      this.goalName = goalName;
      this.objectives = objectives;
      this.intervention = intervention;
      this.responsible = responsible;
      this.strategies = strategies;
      this.progress = progress;
      this.completed = completed
    }
}

let completionCriteria = []
let goalButtons = []

for (let i = 0; i < 8; i++) {
  completionCriteria[i] = document.querySelector(`input#criteriaEntry${i + 1}`)
  completionCriteria[i].value = ' '
  completionCriteria[i].addEventListener('change', (e) => {
    document.getElementById(`criteria${i+1}`).innerText = e.target.value
  })
}

for (let i = 1; i < 4; i++) {
  goalButtons[i] = document.getElementById(`saveGoal${i}`)
  goalButtons[i].addEventListener('click', () => {
    let goal = new Goal()
    goal.goalName = document.getElementById(`familyGoal${i}`)
    goal.intervention = document.getElementById(`interventions${i}`)
    goal.strategies = document.getElementById(`strategies${i}`)
    goal.responsible = document.getElementById(`responsible${i}`)
    goal.progress = getProgress(i)
    goal.objective = getObjectives((i-1)*3)
    goal.completed = getCompleted((i-1)*3)
    newForm.goals.push(goal)
    if (i < 3) { document.getElementById(`addGoal${i}`).style.display ='block' }
  })
}


function getCompleted(j) {
  let completed = []
  for (let i=j; i < j + 3; i++) {
  	let c = document.getElementById(`goalCriteria${i+1}`)
    console.log(i, c.checked)
    if (c.checked) {completed.push(`criteria${i+1}`)}
  }
  return completed
}

function getObjectives(j) {
  let objectives = []
  for (let i = j; i < j + 3; i++) {
    objectives.push(completionCriteria[i])
  }
  return objectives
}

function getProgress(i) {
  let achieved = document.getElementById(`achieved${i}`).checked
  let discontinued = document.getElementById(`discontinued${i}`).checked
  let ongoing = document.getElementById(`ongoing${i}`).checked
  let completionCheck = true
  let progress = 'none'
    if (achieved) {
      progress = 'achieved'
    } else {
      if (discontinued) {
        progress = 'discontinued'
      } else {progress = 'ongoing' }
  }
  console.log('progress ==>', progress)
  return progress
}

let addGoal1 = document.getElementById('addGoal1')
addGoal1.addEventListener('click', () => {
  document.getElementById('goalBlock2').style.display = 'block'
})

let addGoal2 = document.getElementById('addGoal2')
addGoal1.addEventListener('click', () => {
  document.getElementById('goalBlock3').style.display = 'block'
})

let summary = document.getElementById('summary')
summary.addEventListener('change', (e) => {
  newForm.summary = e.target.value
})

let familyTreatmentPlanYes = document.getElementById('agreeFamilyTreatmentPlan')
let familyTreatmentPlanNo = document.getElementById('disagreeFamilyTreatmentPlan') 
let IISSYes = document.getElementById('agreeFamilyTreatmentPlan-2')
let IISSNo = document.getElementById('disagreeFamilyTreatmentPlan-2')
let copyAccept = document.getElementById('acceptReceiveCopy')
let hardCopyAccept = document.getElementById('hardCopyReceiveCopy')
let eCopyAccept = document.getElementById('electronicReceiveCopy')
let copyReject = document.getElementById('disagreeReceiveCopy')

familyTreatmentPlanYes.addEventListener('change', () => {
 familyTreatmentPlanYes.checked ? newForm.familyTreatmentPlan = 'agree' : newForm.familyTreatmentPlan = 'disagree'
})

familyTreatmentPlanNo.addEventListener('change', () => {
  familyTreatmentPlanNo.checked ? newForm.familyTreatmentPlan = 'disagree' : newForm.familyTreatmentPlan = 'agree'
})

IISSYes.addEventListener('change', () => {
  IISSYes.checked ? newForm.IISS = 'agree' : newForm.IISS = 'disagree'
})

IISSNo.addEventListener('change', () => {
  IISSNo.checked ? newForm.IISS = 'disagree' : newForm.IISS = 'agree'
})

copyAccept.addEventListener('change', () => {
  copyAccept.checked ? newForm.treatmentCopy = 'accepted' : newForm.treatmentCopy = 'null'
})

hardCopyAccept.addEventListener('change', () => {
  hardCopyAccept.checked ? newForm.treatmentCopy = 'hard copy accepted' : newForm.treatmentCopy = 'null'
})

eCopyAccept.addEventListener('change', () => {
  eCopyAccept.checked ? newForm.treatmentCopy = 'electronic accepted' : newForm.treatmentCopy = 'null'
})

copyReject.addEventListener('change', () => {
  copyReject.checked ? newForm.treatmentCopy = 'rejected' : newForm.treatmentCopy = 'null'
})

let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'
submit.addEventListener("click", () => {
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
    .then(response => response.json())
    .then(data => respond(data)) 
    .catch((err) => showError(err))
}

function respond(data) {
  let id = data.key
  if (id) {
    showSuccess(id) 
  } else {
    showError(data.error)
  }
}

function showSuccess(id) {
  document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
  printForm.style.display = 'inline';
  printForm.addEventListener('click', (e) => {
  location.href = `https://phoenix-freedom-foundation-backend.webflow.io/completed-forms/family-consultation-treatment-plan?id=${id}`
  })
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}
