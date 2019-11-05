import { Meta, Logger } from "./logger";

function logIt (level: string, message: string, meta? :Meta) {
    if (meta) {
        (console as any)[level](message, meta)
    } else {
        (console as any)[level](message)
    }
}

export class StdLogger implements Logger {
    info (message: string, meta?: Meta) {
        logIt('info', message, meta)
    }

    debug (message: string, meta?: Meta) {
        logIt('debug', message, meta)
    }

    warn (message: string, meta?: Meta) {
        logIt('warn', message, meta)
    }

    error (message: string, meta?: Meta) {
        logIt('error', message, meta)
    }

    fatal (message: string, meta?: Meta) {
        logIt('error', message, meta)
        process.exit(1)
    }
}