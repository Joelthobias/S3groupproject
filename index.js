let calccgpa = () => {
    let tcredit = 0;
    let tgpoint = 0;
    let cgpa = 0;
    for (i = 0; i < 10; i ++) {
        let cid = "cre" + i;
        let gid = "gra" + i;
        let credit = parseInt(document.getElementById(cid).value)
        let gradepoint = parseInt(document.getElementById(gid).value)
        console.log(`credit =  ${cid}`);
        cgpa += (credit * gradepoint)
        tcredit += credit;
        tgpoint += gradepoint;
    }
    document.getElementById('res').value = cgpa;
}
