import { isValidPhoneNumber } from "libphonenumber-js";
import { regexForName, regexForEmail, regexForPhone } from "../utils/regex";

export const Validate = (form) => {
  let err = {};

  if (!form.full_name.trim()) {
    err.full_name = "Name is required";
  } else if (!regexForName.test(form.full_name)) {
    err.full_name = "Name is not valid";
  }

  if (!form.password.trim()) {
    err.password = "Password is required";
  } else if (form.password.length < 8) {
    err.password = "Password at least 8 characters";
  }

  if (!form.confirm_password.trim()) {
    err.confirm_password = "Confirm passowrd is required";
  } else if (form.password !== form.confirm_password) {
    err.confirm_password = "Password and confirm passowrd does not match";
  }

  return err;
};

export const LoginValidate = (form) => {
  let err = {};

  if (!form.email.trim()) {
    err.email = "Email or phone number is required";
  }

  // else if (!regexForEmail.test(form.email)) {
  //     err.email = "Email is not valid"
  // }

  if (!form.password.trim()) {
    err.password = "Password is required";
  }

  return err;
};

export const ProfileValidate = (form) => {
  let err = {};

  if (!form.full_name.trim()) {
    err.full_name = "Name is required";
  } else if (!regexForName.test(form.full_name)) {
    err.full_name = "Name is not valid";
  }

  if (!form.email.trim()) {
    err.email = "Email is required";
  } else if (!regexForEmail.test(form.email)) {
    err.email = "Email is not valid";
  }

  if (!form.phone_number.trim()) {
    err.phone_number = "Phone number is required";
  }

  if (!form.dob.trim()) {
    err.dob = "Date of Birth is required";
  } else if (form.phone_number.length < 11 || form.phone_number.length > 11) {
    err.phone_number = "Phone number will be 11 digit";
  }

  return err;
};

// Business profile validation

export const BusinessPValidate = (form) => {
  let err = {};

  if (!form.company_name.trim()) {
    err.cncompany_nameame = "Company name is required";
  }

  if (!form.trade_license_number.trim()) {
    err.trade_license_number = "Trade license is required";
  }

  if (!form.company_address.trim()) {
    err.company_address = "Company address is required";
  }

  if (!form.business_email.trim()) {
    err.business_email = "Business email is required";
  } else if (!regexForEmail.test(form.business_email)) {
    err.business_email = "Email is not valid";
  }

  // if (!form.location.trim()) {
  //     err.location = "Location is required"
  // }

  if (!form.hotline.trim()) {
    err.hotline = "Hotline number is required";
  } else if (form.hotline.length < 11 || form.hotline.length > 11) {
    err.hotline = "Hotline number will be 11 digit";
  }

  if (!form.bank_account.trim()) {
    err.bank_account = "Bank account is required";
  }

  // if (form.c_logo === '') {
  //     err.c_logo = "Company logo is required"
  // }

  if (!form.emergency_contact.trim()) {
    err.emergency_contact = "Emergency contact is required";
  }

  return err;
};

// fotgot password checking

export const ForgotPasswordChecking = (form) => {
  let err = {};

  if (!form.password.trim()) {
    err.password = "Password is required";
  } else if (form.password.length < 8) {
    err.password = "Password at least 8 characters";
  }

  if (!form.confirm_password.trim()) {
    err.confirm_password = "Confirm passowrd is required";
  } else if (form.password !== form.confirm_password) {
    err.confirm_password = "Password and confirm passowrd does not match";
  }

  return err;
};

// for booking
export const BookingValid = (form) => {
  let err = {};

  if (!form.prefix.trim()) {
    err.prefix = "Title is required";
  }

  if (!form.gender.trim()) {
    err.gender = "Gender is required";
  }

  if (!form.fname.trim()) {
    err.fname = "Firstname is required";
  } else if (!regexForName.test(form.fname)) {
    err.fname = "First Name is not valid";
  }

  if (!form.lname.trim()) {
    err.lname = "Last Name is required";
  } else if (!regexForName.test(form.lname)) {
    err.lname = "Lastname is not valid";
  }

  if (!form.dob.trim()) {
    err.dob = "Date of Birth is required";
  }

  if (!form.issued_country.trim()) {
    err.issued_country = "Nationality is required";
  }

  if (!form.email.trim()) {
    err.email = "Email is required";
  } else if (!regexForEmail.test(form.email)) {
    err.email = "Email is not valid";
  }

  if (!typeof Number(form.phone_number)) {
    err.phone_number = "Phone number is not valid";
  }

  if (isValidPhoneNumber(form.full_phone().toString(), "BD") !== true) {
    err.full_phone = "Phone number is not valid";
  }

  if (!form.phone_number.trim()) {
    err.phone_number = "Phone number is required";
  }

  // else if (form.phone_number.length < 11 || form.phone_number.length > 11) {
  //     err.phone_number = "Phone number will be 11 digit"
  // }

  if (!form.phncode.trim()) {
    err.phncode = "Required";
  }

  if (!form.passport_no.trim()) {
    err.passport_no = "Passport number is required";
  }

  if (!form.pp_expire_date.trim()) {
    err.pp_expire_date = "Passport expire date is required";
  }

  return err;
};
