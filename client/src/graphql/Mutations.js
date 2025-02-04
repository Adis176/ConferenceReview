import { gql } from "@apollo/client";


const CREATE_USER = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data){
        userId
        firstName
        lastName
        email
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      firstName
      lastName
      email
      role
      institution
    }
  }
`;  

const LOGOUT_MUTATION = gql`
  mutation logoutUser {
    logoutUser {
      firstName
      lastName
      email
      role
    }
  }
`;


const GET_ME_QUERY = gql`
  mutation getCurrUser {
    getCurrUser {
      email
    }
  }
`;

export { CREATE_USER, LOGIN_MUTATION, LOGOUT_MUTATION, GET_ME_QUERY };