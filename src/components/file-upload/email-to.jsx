export function EmailTo() {
  return (
    <section>
      <label id='l-email-to'>Email to:</label>
      <input type='email' id='email-to' pattern='.+@example\.com' size={parseInt('30')} required />
    </section>
  )
}

export default EmailTo
