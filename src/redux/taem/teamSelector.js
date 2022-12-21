const emploeeName = state => state.team.name;
const emploeePhotoURL = state => state.team.avater;
const emploeeEmail = state => state.team.email;
const emploeeNumber = state => state.team.role;
const emploeeComment = state => state.team.comment;
const emploeeRate = state => state.team.rate;
const emploeeSixS = state => state.team.sixS;
const emploeeId = state => state.team.id;
const emploeeAllData = state => state.team.employee;

const emploeeError = state => state.team.error;
const emploeeLoading = state => state.team.loading;

export {
  emploeeName,
  emploeePhotoURL,
  emploeeEmail,
  emploeeNumber,
  emploeeComment,
  emploeeRate,
  emploeeSixS,
  emploeeId,
  emploeeError,
  emploeeLoading,
  emploeeAllData,
};
