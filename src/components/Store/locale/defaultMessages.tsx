interface Messages {
  [key: string]: (string | JSX.Element)[] | undefined | any
}

const defaultMessages: Messages = {  
  locale: {
    ru: ["ru", "ru"],
    en: ["en", "en"],
  },
}


export default defaultMessages