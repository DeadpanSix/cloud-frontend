import SendButton from "./send-button"
import EmailTo from "./email-to"
import SendMessage from "./send-message"
import SendTitle from "./send-title"
import SendFile from "./send-file"
import YourEmail from "./your-email"
// have to import all smaller components
export function FileUploadFields() {
  return (
    <section>
      <EmailTo />
      <YourEmail />
      <SendTitle />
      <SendMessage />
      <SendFile />
      <SendButton />
    </section>
  )
}

export default FileUploadFields