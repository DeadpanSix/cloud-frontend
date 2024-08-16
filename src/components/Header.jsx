import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/file-upload" class={url == '/file-upload' && 'active'}>
					{/* condition to change url end and change status to active url */}
					File upload
					{/* name of the nav bar link */}
				</a>
			</nav>
		</header>
	);
}
