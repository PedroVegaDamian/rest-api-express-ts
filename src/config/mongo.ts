import 'dotenv/config'
import { connect, set } from 'mongoose'

export const dbConnect = async (): Promise<void> => {
  try {
    set('strictQuery', false)
    await connect(<string>process.env.DB_URI)
    console.log('DB connected!')
  } catch (error) {
    console.error(error)
  }
}
