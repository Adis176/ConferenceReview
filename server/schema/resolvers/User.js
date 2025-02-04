import {sampleUsers, Users} from "../../models/User.js";
import bcrypt from 'bcrypt';
const saltRounds = 10;

async function hashPassword(text){
    const hash = await bcrypt.hash(text, saltRounds);
    return hash;
}

export const userResolver = {
    Query: {    
        fetchProfile: async (_, { email }, { prisma }) => {
            console.log("Email: ", email);
            const user = await prisma.user.findUnique({
              where: { email }
            });
            if(!user) {
                throw new Error("User doesn't exist !");
            }
            return user;
        }
    },
    Mutation: {
        createUser: async (_, { data }, { prisma }) => {
            // console.log("Server begin-1: ", prisma);
            if (!prisma) {
                throw new Error('Database connection not available');
            }
            console.log('Incoming data:', data);
              
            try {
                const hashedPassword = await hashPassword(data.password);
                const user = await prisma.user.create({
                  data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: hashedPassword,
                    gender: data.gender,
                    role: data.role, 
                    institution: data.institution
                  }
                });
                console.log('Created user:', user);
                return {
                    ...user,
                    userId: user.id  // This maps Prisma's 'id' to GraphQL's 'userId'
                };
            } 
            catch (error) {
                console.error('Database error:', error);
                throw error;
            }
        },
        loginUser: async (_, { email, password }, { prisma }) => {
            try {
                if (!prisma) {
                    throw new Error('Database connection not available');
                }
                console.log('login data: ', email, password);
                const newHash = hashPassword(password);
                const user = await prisma.user.findUnique({
                    where: { email, newHash}
                });
            
                if(!user) {
                    throw new Error("Email or password incorrect");
                }
                return user;
            }
            catch(error) {
                return {
                    message: error,
                }
            }
        }
        
    }
};