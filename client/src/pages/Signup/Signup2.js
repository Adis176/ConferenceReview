import { CREATE_USER } from "../../graphql/Mutations.js";
import { client } from "../../index.js";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Select, MenuItem, InputLabel } from "@mui/material";
import MyButton from "../../components/Button/Button";
import { StyledInput } from "../../components/Input/Input";
import FormControl from "@mui/material/FormControl";

export default function Signup2() {
  const genderChoices = ["Male", "Female", "non-disclosed"];
  const fields = [
    {
      name: 'firstName',
      label: "first-name",
      placeholder: "Enter first-name only"
    },
    {
      name: 'lastName',
      label: "last-name",
      placeholder: "Enter last-name only"
    },
    {
      name: 'email',
      label: "email",
      placeholder: "Enter your institution email"
    },
    {
      name: 'institution',
      label: "institution",
      placeholder: "Enter institution associated with"
    },
    {
      name: 'password',
      label: "password",
      placeholder: "Enter password",
      type: "password"
    }
  ];

  // Generate initial values properly
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    password: '',
    gender: '',
    role: 'admin'
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup
      .string()
      .required('First name is required'),
    lastName: Yup
      .string()
      .required('Last name is required'),
    email: Yup
      .string()
      .required('Email is required')
      .email('Input must be of a valid email form'),
    institution: Yup
      .string()
      .required('Institution is required'),
    password: Yup
      .string()
      .required('Password is required')
      .min(8, 'Min length of password should be eight')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number'),
    gender: Yup
      .string()
      .required('Gender is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_USER,
        variables: { data: values }
      });
      console.log("Success: ", data);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[60%] h-[40em] p-16 m-auto mt-10 bg-slate-100 shadow-xl border-gray-400 border-[0.05em] rounded-2xl">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange, isSubmitting }) => (
          <Form className="w-full">
            {fields.map((field, index) => (
              <div key={index}>
                <StyledInput
                  placeholder={field.placeholder}
                  label={field.label}
                  value={values[field.name]}
                  name={field.name}
                  onChange={handleChange}
                  type={field.type || "text"}
                  size="medium"
                  className="!mt-6"
                />
                {errors[field.name] && touched[field.name] && (
                  <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <FormControl fullWidth className="!mt-10">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                {genderChoices.map((choice, index) => (
                  <MenuItem value={choice} key={index}>
                    {choice}
                  </MenuItem>
                ))}
              </Select>
              {errors.gender && touched.gender && (
                <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
              )}
            </FormControl>

            <MyButton
              type="submit"
              variant="contained"
              size="medium"
              className="!mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing up...' : 'Sign-Up'}
            </MyButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}