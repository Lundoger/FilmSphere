const nextConfig = {
	images: {
		unoptimized: true,
		domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net', 'themoviedb.org'],
	},
	env: {
		API_KEY: process.env.API_KEY,
	},
	reactStrictMode: true,
}

export default nextConfig