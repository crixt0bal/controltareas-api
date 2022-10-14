import bcrypt from "bcrypt";

export const encriptar = async (contrasena) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(contrasena, salt);
    console.log(hashPassword)
    return hashPassword;
    
  } catch (error) {
    console.log(error);
  }
};

export const comparar = async (contrasena, hashPassword) => {
  try {
    return await bcrypt.compare(contrasena, hashPassword);
  } catch (error) {
    console.log(error)
  }
};