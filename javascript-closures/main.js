function graduate(credential) {
  return function (fullName) {
    return credential + ' ' + fullName;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Isaac Hsu');
lawSchool('Isaac Hsu');
