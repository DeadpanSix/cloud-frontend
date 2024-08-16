export function SendFile() {
  // an in-component singular function that handles the small component needs
  function handleFileChange(event) {
		const file = event.target.files[0]
		console.log(file)
	}
  
  return (
    <section>
			<input type='file' id='file' onChange={handleFileChange} required />
    </section>
  )
}

export default SendFile
