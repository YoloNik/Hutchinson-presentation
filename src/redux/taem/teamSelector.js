const employeeName = state => state.team.name;
const employeePhotoURL = state => state.team.avater;
const employeeEmail = state => state.team.email;
const employeeNumber = state => state.team.displayName;
const employeeComment = state => state.team.comment;
const employeeRate = state => state.team.rate;
const employeeSixS = state => state.team.sixS;
const employeeId = state => state.team.id;
const employeeAllData = state => state.team.employee;

const employeeError = state => state.team.error;
const employeeLoading = state => state.team.loading;

export {
  employeeName,
  employeePhotoURL,
  employeeEmail,
  employeeNumber,
  employeeComment,
  employeeRate,
  employeeSixS,
  employeeId,
  employeeError,
  employeeLoading,
  employeeAllData,
};
