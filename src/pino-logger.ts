import * as pino from 'pino'
import { Meta, Logger } from './logger'

export class PinoLogger implements Logger {
    private logger = pino()

    constructor () {
    }

    info (message: string, meta?: Meta) {
        this.logger.info({ message, meta })
    }

    debug (message: string, meta?: Meta) {
        this.logger.debug({ message, meta })
    }

    warn (message: string, meta?: Meta) {
        this.logger.warn({ message, meta })
    }

    error (message: string, meta?: Meta) {
        this.logger.error({ message, meta })
    }

    fatal (message: string, meta?: Meta) {
        this.logger.fatal({ message, meta })
        process.exit(1)
    }
}
