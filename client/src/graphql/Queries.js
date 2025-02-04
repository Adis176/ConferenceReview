import { gql } from "@apollo/client";

const FETCH_PROFILE = gql`
  query fetchProfile($email: String!) {
    fetchProfile(email: $email) {
      firstName
      lastName
      email
      institution
      gender
      role
    }
  }
`;

// const GET_USERS_BY_AGE = gql`
//   query GetUsersByAge($age: Int!) {
//     someone(age: $age) {
//       id
//       name
//       age
//     }
//   }
// `;

export { FETCH_PROFILE };