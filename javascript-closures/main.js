function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const doc = medicalSchool('Isaac Hsu');
const law = lawSchool('Isaac Hsu');

console.log(doc);
console.log(law);
