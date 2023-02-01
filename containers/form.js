
const { json } = require('body-parser');
const express = require('express');
const qs = require('qs');
const axios = require('axios');

exports.home = (req, res) =>
{  
    res.sendFile('public/Home.html', { root: '.' })
} 
exports.form = (req, res) =>
{  
    res.sendFile('public/register.html', { root: '.' })
} 

exports.approved = (req, res) =>
{  
    res.sendFile('public/approved.html', { root: '.' })
} 
exports.napproved = (req, res) =>
{  
    res.sendFile('public/napproved.html', { root: '.' })
} 




exports.formprocess = async(req, res) =>
{  
   console.log(req.body);


const data = {
    
    NPPM:req.body.nppm,
    LoanStatus:req.body.ls,
    Objective:req.body.objective,
    Amount:req.body.amount,
    Guarantee:req.body.guarantor,
    Experience: req.body.experience,
    M_Status:req.body.maritalStatus,
    ExistingLoan:req.body.existingLoan,
    Age:req.body.age,
    CA_Balance:req.body.ca_balance,
    SA_Balance:req.body.sa_balance,
    PI_Balance:req.body.pi,
    WorkAB:req.body.workab,
    PhNum:req.body.phn,
    Tenure:req.body.tenure,
    prop:req.body.prop,
    JobTyp:req.body.jobType,
    HouseT:req.body.houset,
    NOE:req.body.noe,


}
console.log(data);
 const obj = await axios.post("https://mlapi-yigp.onrender.com/predict" ,JSON.stringify(data),
 {
    headers: {
    'Content-Type': 'application/json'
    }
}
).then(res => {
    return res.data
})

console.log(obj)
if(obj === "approved"){
    res.sendFile('public/approved.html', { root: '.' });

}
else{
    res.sendFile('public/napproved.html', { root: '.' })
    ;

}

}  

