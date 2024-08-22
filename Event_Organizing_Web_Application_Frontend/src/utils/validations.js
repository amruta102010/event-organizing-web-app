
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};


export const validatePassword = (password) => {
  return password.length >= 6;
};


export const validateMobileNumber = (mobileNumber) => {
  const re = /^\+91\d{10}$/;
  return re.test(mobileNumber);
};

  