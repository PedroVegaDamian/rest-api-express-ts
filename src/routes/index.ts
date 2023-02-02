import { Router } from 'express'
import { readdirSync, readFileSync } from 'fs'

export const router = Router()

const PATH_ROUTER = `${__dirname}`

const cleanFileName = (fileName: string) => fileName.split('.').shift()

readdirSync(PATH_ROUTER).filter(fileName => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then(moduleRouter => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})
