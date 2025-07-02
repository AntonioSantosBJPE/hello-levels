import translate from 'translate'
export type TranslateMessageApiProps = {
  message: string
}
export const translateMessageApi = async (params: TranslateMessageApiProps) => {
  const { message } = params
  try {
    const text = await translate(message, 'PT')

    return text
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.log(error)
    return message
  }
}
