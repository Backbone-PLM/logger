import * as pino from 'pino'

interface Meta {
    [index: string]: any
}

class PinoLogger {
    private logger = pino()

    constructor () {
        // this.logger.level = LogLevelToPino[logLevel]
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

export default new PinoLogger()
