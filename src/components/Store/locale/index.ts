import defaultMessages from './defaultMessages'
import arrayToLocale from './arrayToLocale'
import flatten from '../../../utils/flatten'


const messages = arrayToLocale(flatten(defaultMessages))

type objectWithContextType = {
  context: {
    messages: any,
    locale: string
  }
}

const getMessage = (
  _this: objectWithContextType,
  id: string,
): string =>
    messages[_this.context.locale][id] || "#no message found#"

const getMessageAllLocales = (
  _this: objectWithContextType,
  id: string,
): string[] =>
    [
      messages["ru"][id] || "#no message found#",
      messages["en"][id] || "#no message found#"
    ]


export {
  messages,
  getMessage,
  getMessageAllLocales,
}