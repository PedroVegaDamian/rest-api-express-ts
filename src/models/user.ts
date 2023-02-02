import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: 'Soy la descripción'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel = model('users', userSchema)
