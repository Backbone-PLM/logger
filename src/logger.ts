import { PinoLogger } from './pino-logger'
import { StdLogger } from './std-logger'

export interface Meta {
    [index: string]: any
}
export interface Logger {
    info (message: string, meta?: Meta): void
    debug (message: string, meta?: Meta): void
    warn (message: string, meta?: Meta): void
    error (message: string, meta?: Meta): void
    fatal (message: string, meta?: Meta): void
}

let logger: Logger = new StdLogger()

if (!process.env.STD_LOGGER) {
    logger = new PinoLogger()
    logger.info('Using console logger')
}

export default logger
