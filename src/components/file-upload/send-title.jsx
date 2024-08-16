export function SendTitle() {
  return (
    <section>
      <label id='l-send-title' >Titulo:</label>
      <input type='text' id='send-title' size={parseInt('30')} required />
    </section>
  )
}

export default SendTitle
