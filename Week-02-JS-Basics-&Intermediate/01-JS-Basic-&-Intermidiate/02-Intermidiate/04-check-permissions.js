/*
  Question: Check for permissions from roles
  Input: roles = { admin: ["read","write"], user: ["read"], staff: ["write"] }, checkRole = "user", action = "write"
  Output: false
*/

// solution
const roles = {
  admin: ["read", "write"],
  user: ["read"],
  staff: ["write"],
};

const checkRole = "user";
const action = "write";

const permissions = roles[checkRole];

const hasPermission = permissions.includes(action);

console.log(hasPermission);
