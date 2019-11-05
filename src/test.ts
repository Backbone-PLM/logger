import logger from './logger'

// @ts-ignore
process.exit = () => logger.info('Process exit was called, inceptiony')

logger.debug('Debugging', {})
logger.info('info\'n', {})
logger.warn('warning', {})
logger.error('error!', {})
logger.fatal('k bye', {})