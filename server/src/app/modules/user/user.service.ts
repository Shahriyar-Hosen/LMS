import { IUser } from "./user.interface";

const createStudent = async (): Promise<IUser | null> => {
  // generate student id
  const newUserAllData = null;

  return newUserAllData;
};

const createFaculty = async (): Promise<IUser | null> => {
  const newUserAllData = null;

  return newUserAllData;
};
const createAdmin = async (): Promise<IUser | null> => {
  const newUserAllData = null;
  return newUserAllData;
};

export const UserService = {
  createStudent,
  createFaculty,
  createAdmin,
};
