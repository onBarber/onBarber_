import server from './app'
import { config } from './config'

const serverPort = config.serverPort

server.listen(serverPort || 3333, () => {
  console.log(`Server online, running in port ${serverPort}`)
})