import prisma from "../db"
import { comparePasswords, createJWT, hashPassword } from "../modules/auth"

// handlers have a request and a response
// all db queries are always async
// most dbs are servers too so you're not only talking to disc, you are talking to a network that is talking to a disc
// if you have service db you're talking to network that's talking to a network, that's talking to a disc.

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password)
    }
  })

  const token = createJWT(user)
  res.json({ token })
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  const isValid = await comparePasswords(req.body.password, user.password)

  if(!isValid) {
    res.status(401)
    res.json({message: "nope"})
    return
  }

  const token = createJWT(user)
  res.json({ token })
}