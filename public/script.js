const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");


let formStepsNum = 0;

function validate(formStepsNum){
  var nppm = document.forms.RegForm.nppm.value;
  var ls = document.forms.RegForm.ls.value;

  var objective = document.forms.RegForm.objective.value;

  var amount = document.forms.RegForm.amount.value;

  var guarantor = document.forms.RegForm.guarantor.value;

  var experience = document.forms.RegForm.experience.value;

  var maritalStatus = document.forms.RegForm.maritalStatus.value;

  var existingLoan = document.forms.RegForm.existingLoan.value;

  var age = document.forms.RegForm.age.value;

  var ca_balance = document.forms.RegForm.ca_balance.value;

  var sa_balance = document.forms.RegForm.sa_balance.value;

  var pi = document.forms.RegForm.pi.value;

  var workab = document.forms.RegForm.workab.value;

  var phn = document.forms.RegForm.phn.value;

  var tenure = document.forms.RegForm.tenure.value;
  var prop = document.forms.RegForm.prop.value;
  var jobType = document.forms.RegForm.jobType.value;

  var houset = document.forms.RegForm.houset.value;
  var noe = document.forms.RegForm.noe.value;




  if(nppm == ""){
    window.alert("Please enter number of Maintainers.");
                    name.focus();
                    return false;
  }
  if(ls == "Choose"){
    window.alert("Please select loan status.");
                    name.focus();
                    return false;
  }
  if(objective == "Choose"){
    window.alert("Please select your objective.");
                    name.focus();
                    return false;
  }
  
  
  if(amount == ""){
    window.alert("Please enter Amount.");
                    name.focus();
                    return false;
  }

//  if(formSteps == 1){
//   if(guarantor == "Choose"){
//     window.alert("Please enter your name properly.");
//                     name.focus();
//                     return false;
//   }
//   if(experience == "Choose"){
//     window.alert("Please enter your name properly.");
//                     name.focus();
//                     return false;
//   }
//   if(maritalStatus == "Choose"){
//     window.alert("Please enter your name properly.");
//                     name.focus();
//                     return false;
//   }
//   if(existingLoan == ""){
//     window.alert("Please enter your name properly.");
//                     name.focus();
//                     return false;
//   }
// }
  // if(ca_balance == "Choose"){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(sa_balance == "Choose"){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(pi == ""){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(workab == "Choose"){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(phn == ""){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(tenure == ""){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(prop == "Choose"){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(jobType == "Choose"){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }
  // if(houset == "Choose"){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }

  // if(noe == ""){
  //   window.alert("Please enter your name properly.");
  //                   name.focus();
  //                   return false;
  // }

}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    validate(formStepsNum);

      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    
    
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");

  }

function updateProgressbar() {

  
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
