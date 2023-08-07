import * as Yup from "yup";

export const RegistrationValidation = Yup.object({
     username: Yup.string().min(2).required("Username required"),
     email: Yup.string().email("Invalid email").required("Email is required"),
     password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required")
          .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
               "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          ),
     copassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
});

export const LoginValidation = Yup.object({
     email: Yup.string().email("Invalid email").required("Email is required"),
     password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required")
          .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
               "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          ),
});
