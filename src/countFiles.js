import {promises as fsPromises, writeFileSync} from "fs"

var dir = './src/pages'
const files =  await fsPromises.readdir(dir)
const num = files.length


writeFileSync("src/amountOfPages.json", JSON.stringify({amount: num}))