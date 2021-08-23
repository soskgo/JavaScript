// Optional Chaining

//bad code
function displayJobTitel(preson) {
    if(person.job && person.job.title){ // person object의 job이 있고, job의 title이 있다면 title 출력 
        console.log(person.job.title)
    }
}

// good code
function displayJobTitel(preson) {
    if(person.job?.title){ // job이 있다면 그안에 title이 있는지 없는지 검사, job이 없다면 false 반환
        console.log(person.job.title)
    }
}

// optional chaining + nullish coalescing
function displayJobTitel(preson) {
    const title = person.job?.title ?? 'No Job Yet'
    console.log(title)
}