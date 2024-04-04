import { z } from "zod"

export const UserSchema = z.object({
    name:
    z
    .string().min(2, {message:"Ім'я не може бути коротше ніж дві літери"}),
    email:
    z.string().email().trim().toLowerCase(),

})

export type User = z.infer<typeof UserSchema>