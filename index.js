let calccgpa = (n) => {
    let tcredit = 0;
    let tgpoint = 0;
    let cgpa = 0;
    let cg=0;
    for (i = 0; i < n; i ++) {
        let cid = "cre" + i;
        let gid = "gra" + i;
        let credit = parseFloat(document.getElementById(cid).value)
        let gradepoint = parseFloat(document.getElementById(gid).value)
        cg+=credit*gradepoint
        console.log(`credit =  ${credit}`);
        console.log(`gradepoint =  ${gradepoint}`);
        console.log(`cg =  ${cg}`);
        tcredit += credit;
        tgpoint += gradepoint;
    }
    cgpa=cg/tcredit
    console.log(`cgpa =  ${cgpa}`);
    document.getElementById('res').innerHTML = 'CGPA = '+cgpa;
}
let selectSem=(sem)=>{

    if(sem==1){
        location.href=('./s1.html')
    }else{
        location.href=('./s2.html')
    }
}
