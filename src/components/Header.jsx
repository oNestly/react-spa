function Header() {
	return (
	<header>
		<nav className="green darken-1">
			<div className="nav-wrapper">
				<a href="./" className="brand-logo">React SPA</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="https://github.com/oNestly/react-spa" target="_blank" rel='noreferrer'>Repo</a></li>
				</ul>
			</div>
		</nav>
	</header>
	)
	

}

export { Header }