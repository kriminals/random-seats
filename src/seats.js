/* Create random seats for students based on their catalog number */
function sittingPairs(numberOfStudents = 0) {
    const pairs = new Set();
    while (pairs.size !== numberOfStudents) {
        pairs.add(random(numberOfStudents))
    }
    return Array.from(pairs);
}

function sittingPairs2(numberOfStudents = 0) {
    const students = Number.isInteger(numberOfStudents) ? Array.from(Array(numberOfStudents).keys(), x => x + 1) : parseInt(numberOfStudents);
    const pairs = [];
    while (students.length > 0) {
        const rnd = random(students.length) - 1;
        pairs.push(students.splice(rnd, 1)[0]);
    }
    return pairs;
}

function random(x) {
    return Math.floor(Math.random() * x + 1);
}

//console.log(sittingPairs(5));
export { sittingPairs, sittingPairs2 };