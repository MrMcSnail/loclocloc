function updateRemoteStudents(students) {
  const updatedStudents = students.map((student) => {
    const updatedStudentObj = {...student};
    if (!updatedStudentObj.location) {
      updatedStudentObj.location = 'remote';
    }
    return updatedStudentObj;
  });

  return updatedStudents;
}

module.exports = {updateRemoteStudents};
