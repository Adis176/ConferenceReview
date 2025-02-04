const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const ACCESS_TOKEN_EXPIRY = '15m';  
const REFRESH_TOKEN_EXPIRY = '7d';  

const COOKIE_OPTIONS = {
  httpOnly: true,           
  secure: true,            
  sameSite: 'strict',     
  maxAge: 7 * 24 * 60 * 60 * 1000  
};

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      tokenVersion: user.tokenVersion
    },
    JWT_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
};

const verifyToken = (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
};
  
module.exports = {
    COOKIE_OPTIONS,
    generateAccessToken,
    generateRefreshToken,
    verifyToken
};