export function SendMessage() {
  return (
    <section>
      <label id='l-send-message' >Mensaje:</label>
      <input type='text' id='send-message' size={parseInt('50')} required />
    </section>
  )
}

export default SendMessage
