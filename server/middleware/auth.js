const { verifyToken } = require('../config/jwt');

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.accessToken;
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.user = decoded;
  next();
};

const graphqlAuthContext = ({ req, res }) => {
  const token = req.cookies.accessToken;
  let user = null;

  if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
      user = decoded;
    }
  }

  return { user, req, res };
};

module.exports = {
  authMiddleware,
  graphqlAuthContext
};