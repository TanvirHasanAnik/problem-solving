import {z} from 'zod'
import {fromZodError} from 'zod-validation-error'

const UserSchema = z.object({
    username: z.string().max(10),
    age: z.number().gt(0),
    isProgrammer: z.boolean().default(false),
    gender: z.union([z.literal('male'),z.literal('female')]).optional(),
    marital_status: z.enum(["married","unmarried"])
})

type User = z.infer<typeof UserSchema>

const user = {
    username: "hello",
    age: 25,
    isProgrammer: true,
    gender: "female",
    marital_status: "married"
}

console.log(UserSchema.parse(user))