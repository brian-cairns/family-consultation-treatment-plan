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
    console.log(newForm.treatmentPlanDuration)
    })

let threeMonth = document.querySelector('input#threeMonth')
threeMonth.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.treatmentPlanDuration)
})
    
let background = document.getElementById('background')
background.addEventListener('change', (e) => {
    newForm.background = e.target.value;
    console.log(newForm.background)
    })

let familyGoals = document.querySelector('input#familyGoals')
familyGoals.addEventListener('change', (e) => {
    newForm.familyGoals = e.target.value;
    console.log(newForm.familyGoals)
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

class FamilyGoal extends Goal {
	constructor (goalName, strengths, needs, objectives, interventions, responsiblePersonTimeline, progress, notes, familyGoal) {
	super(goalName, strengths, needs, objectives, interventions, responsiblePersonTimeline, progress, notes)
	this.familyGoal = familyGoal
	}
}
		

async function getCurrentGoal () {
  console.log('current goals being captured')
   let goal = new FamilyGoal
   goal.objectives = []
   goal.responsiblePersonTimeline = []
    console.log(goal)
    goal.familyGoal = document.getElementById('familyGoals')
    goal.goalName = document.getElementById('goalName').value
    goal.strengths = document.querySelector('input#strengths').value;
    goal.needs = document.querySelector('input#needs').value;
    goal.interventions = document.getElementById('interventions').value;
    goal.notes = document.getElementById('notes').value;
    goal.objectives[0] = document.getElementById('goal1').value;
    goal.objectives[1] = document.getElementById('goal2').value;
    goal.objectives[2] = document.getElementById('goal3').value;
    goal.responsiblePersonTimeline[0] = document.getElementById('responsiblePersonTimeline1').value
    goal.responsiblePersonTimeline[1] = document.getElementById('responsiblePersonTimeline2').value
    goal.responsiblePersonTimeline[2] = document.getElementById('responsiblePersonTimeline3').value
    if(document.getElementById('responsiblePersonTimeline1').checked) {goal.progress = 'achieved'}
    if(document.getElementById('responsiblePersonTimeline3').checked) {goal.progress = 'on-going'}
    if(document.getElementById('responsiblePersonTimeline2').checked) {goal.progress = 'discontinued'}
    return goal
  }


 document.getElementById('submitCurrentGoal').addEventListener("click", async (event) => {
  console.log('getting current goal')  
  let currentGoal = getCurrentGoal()
  console.log(currentGoal);
  newForm.goals.push(currentGoal)
  showInternalError('Goal successfully submitted')
  submitted++   
})
    

document.getElementById('createNewGoal').addEventListener("click", async (event) => {
    if (submitted <= additional) {
        showInternalError('You need to save a goal before proceeding to the next')
        return
    }
    additional++
    showInternalError("Successfully Added")
    clearGoals()
    return
})

function showInternalError(e) {
    document.getElementById('submitError2').style.display = 'block'
    return document.getElementById('submitError2').innerHTML = e
}

function clearGoals() {
    console.log('clearining goals')
    document.getElementById('goalName').value = '';
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
    document.getElembetById('familyGoals').value = ''
}

/*
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
 */

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


let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'

document.getElementById('submit').addEventListener("click", async (event) => {
    //familyTreatmentPlan = document.getElementById('agreeFamilyTreatmentPlan').checked ? "agree" : "disagree"
    //let copy = await copyOfPlan()
    familyResponse = await getFamilyResponse()
    //newForm.staffMemberName = document.getElementById('staffName').value;
    //newForm.CEO = document.getElementById('CEOName').value
    //newForm.familyTreatmentPlan = familyTreatmentPlan;
  //  newForm.autismSupportTreatmentPlan = autismSupportTreatmentPlan;
  //  newForm.copyOfPlan = copy
      newForm.familyResponse = familyResponse;
  //  newForm.date = document.getElementById('date').value
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
    sendNotification(id, newForm.clientName,'family', 'not urgent');
    sendNotification(id, newForm.staffName, 'family', 'not urgent');
    sendNotification(id, 'admin', 'family', 'not urgent')	
  } else {
    showError(data.error)
  }
	
async function sendNotification(id, recipient, type, priority) {
  let message = `You have a new <br/><a href=phoenix-freedom-foundation-backend.webflow.io/completed-forms/iiss-session-note?id=${id}>Family Treatment Plan</a>`
  console.log(message)
  const url = 'https://pffm.azurewebsites.net/notices'
  let notification = {
    'name': recipient,
    'notice': message,
    'type': type,
    'priority': priority
  }
  const header = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
  }
  
  fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(notification)
  })
    .then(() => console.log('notice sent'))
    .catch(console.error)
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
