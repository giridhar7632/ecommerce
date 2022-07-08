import Head from 'next/head'

const makeTitle = (title, name) => {
	if (title.toLowerCase() === name.toLowerCase()) {
		return title
	} else return `${title} | ${name}`
}

const Meta = ({
	title = 'Headphones Store',
	name = 'Store',
	description = 'A place for music accessories',
	image = '',
	url = process.env.NEXT_APP_BASE_URL,
	children,
}) => (
	<Head>
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />

		<meta name='robots' content='index, follow' />
		<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
		<meta name='language' content='English' />
		<meta key='og_locale' property='og:locale' content='en_US' />
		<meta key='og_type' property='og:type' content='website' />
		<meta key='og_site' property='og:site_name' content={name} />
		<title key='title'>{makeTitle(title, name)}</title>
		<meta key='og_title' property='og:title' content={makeTitle(title, name)} />
		<meta
			key='tw_title'
			name='twitter:title'
			content={makeTitle(title, name)}
		/>
		{description && (
			<>
				<meta key='desc' name='description' content={description} />
				<meta key='og_desc' property='og:description' content={description} />
				<meta key='tw_desc' name='twitter:description' content={description} />
			</>
		)}

		{image && (
			<>
				<meta key='og_img' property='og:image' content={image} />
				<meta key='tw_card' name='twitter:card' content='summary_large_image' />
				<meta key='tw_img' name='twitter:image' content={image} />
			</>
		)}
		<meta key='theme_color' name='theme-color' content={'#ee5253'} />

		<meta key='tile_color' name='msapplication-TileColor' content={'#ee5253'} />
		<link
			key='safari_icon'
			rel='mask-icon'
			href={`${url}/safari-pinned-tab.png`}
			color={'#ee5253'}
		/>
		<link
			key='apple_icon'
			rel='apple-touch-icon'
			sizes='180x180'
			href={`${url}/apple-touch-icon.png`}
		/>
		<link
			key='favicon_32'
			rel='icon'
			type='image/png'
			sizes='32x32'
			href={`${url}/favicon-32x32.png`}
		/>
		<link
			key='favicon_16'
			rel='icon'
			type='image/png'
			sizes='16x16'
			href={`${url}/favicon-16x16.png`}
		/>
		<link key='manifest' rel='manifest' href={`${url}/site.webmanifest`} />
		{children}
	</Head>
)

export default Meta
