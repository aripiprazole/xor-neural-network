import * as chalk from 'chalk'

export type Logger = {
  info: (...messages: any[]) => void
  error: (...messages: any[]) => void
  warn: (...messages: any[]) => void
}

function createLogger(name: string): Logger {
  return {
    info(...messages: any[]) {
      console.log(chalk.blue(`INFO - ${name}`), ...messages)
    },

    error(...messages: any[]) {
      console.error(chalk.red(`ERROR - ${name}`), ...messages)
    },

    warn(...messages: any[]) {
      console.warn(chalk.yellow(`WARN - ${name}`), ...messages)
    },
  }
}

export default createLogger
