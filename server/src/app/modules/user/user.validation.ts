import { z } from "zod";

const createStudentZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
  }),
});

const createFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
  }),
});

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createStudentZodSchema,
  createFacultyZodSchema,
  createAdminZodSchema,
};
