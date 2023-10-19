import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import jwtDecode from "jwt-decode";
const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload;
};

/* const decodeToken = (token: string) => {
  return jwtDecode(token);
}; */

const verifyToken = (token: string, secret: Secret): JwtPayload | null => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    return null;
  }
};

export const jwtHelpers = {
  decodeToken,
  verifyToken,
};
