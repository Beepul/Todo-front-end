export const todoapi = "http://localhost:8000";

// user
export const loginapi = `${todoapi}/auth/login`;
export const signapi =  `${todoapi}/auth`;

// contact
export const contactapi = `${todoapi}/about`;

// todo
export const createapi = `${todoapi}/todo/`;
export const deleteapi = (id,data) => `${todoapi}/todo/${id}`;
export const updateapi = (id,data) => `${todoapi}/todo/${id}`;
export const fetchapi = `${todoapi}/todo`;