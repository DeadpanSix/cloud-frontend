import FileUploadFields from '../../components/file-upload/file-upload-fields'
// have to import all smaller components
export function FileUpload() {
	// name of the component to be exported
	return (
		<section> {/* all has to be inside one main section */}
			<section> {/* this section to be deleted */}
				<h1>file-upload: Not Found</h1>
				<p>It's gone :(</p>
				<h2>¡HA-HA! joking</h2>
			</section>

			<FileUploadFields />
		</section>
	)
}
