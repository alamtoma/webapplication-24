const studentName ="Fatema" 


const Fatema = {
    name: studentName,
    birthYear:1992,
    isNew:false,
    role:"student"
}
const students = [
    {
        name:'Trude',
        birthYear:1991,
        isNew:true,
        role:'admin'
     },{
     name: 'ALi',
     birthYear: 1998,
     isNew: true,
     role: 'superadmin'
     },
     {
        name: 'simon',
        birthYear: 2001,
        isNew: true,
        role: 'student'
        },

]; 
//function getStudentAboveBirthYear()
const getStudentAboveBirthYear = (students = [], birthYear) =>{
    return students.filter((student) => student.birthYear > birthYear)

}
const studentsaAbove = getStudentAboveBirtYear(undefined, 1991)
const transformStudents = students.map(student => ({
    ...student,
    age: new Date().getFullYear() - student.birthYear

}))

const studentWithAge = transformStudents(students)
const findStudent = (students, name) =>{
    return students.dind(student => student.name.toLowerCase() === name.toLowerCase())
}
const studentFound = findStudent(students, 'Fatema')

const roles = ['admin', 'superadmin']
const hasAccess = (roles, student) =>{
    return students.filter(student => {
        return roles.includes(student.role)
    })
}
const adminRoles = hasAccess(['admin'], students) 
const studentRoles = hasAcess(['student'], students)
const adminOrSuperAdmins = hasAccess(['admin', 'superadmin'], students)