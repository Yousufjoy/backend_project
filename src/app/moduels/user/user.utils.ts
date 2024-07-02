// import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
// import { User } from './user.model';

// // Define a type for the student
// type Student = {
//   id: string;
// };

// const findLastStudentId = async (): Promise<string | undefined> => {
//   const lastStudent = await User.findOne(
//     {
//       role: 'student',
//     },
//     {
//       id: 1,
//       _id: 0,
//     },
//   )
//     .sort({
//       createdAt: -1,
//     })
//     .lean<Student>(); // Ensure lean returns a typed object

//   return lastStudent?.id ? lastStudent.id : undefined;
// };

// export const generateStudentId = async (payload: TAcademicSemester): Promise<string> => {
//   let currentId = (0).toString(); // 0000 by default

//   const lastStudentId = await findLastStudentId();

//   const lastStudentSemesterCode = lastStudentId?.substring(4, 6); // 01
//   const lastStudentYear = lastStudentId?.substring(0, 4); // 2030
//   const currentSemesterCode = payload.code;
//   const currentYear = payload.year;

//   if (
//     lastStudentId &&
//     lastStudentSemesterCode === currentSemesterCode &&
//     lastStudentYear === currentYear
//   ) {
//     currentId = lastStudentId.substring(6); // 0001
//   }

//   let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
//   incrementId = `${currentYear}${currentSemesterCode}${incrementId}`;

//   return incrementId;
// };
