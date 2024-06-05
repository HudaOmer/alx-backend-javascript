export default function updateStudentGradeByCity(list, city, grades) {
  if (!Array.isArray(list) || !Array.isArray(grades)) {
    return [];
  }

  const newlist = list.filter((student) => student.location === city)
    .map((student) => {
    const item2 = grades.find((student2) => student.id === student2.studentId);
   
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });
  
  return newlist;
}
