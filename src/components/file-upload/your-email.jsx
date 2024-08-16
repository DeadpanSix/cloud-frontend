export function YourEmail() {
  return (
    <section>
      <label id='l-your-email'>Your email:</label>
      <input type='email' id='your-email' pattern='.+@example\.com' size={parseInt('30')} required />
    </section>
  )
}

export default YourEmail
