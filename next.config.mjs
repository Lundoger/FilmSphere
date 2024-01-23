const nextConfig = {
	images: {
		unoptimized: true,
		domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net', 'themoviedb.org'],
	},
	env: {
		NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
	},
	reactStrictMode: true,
}

export default nextConfig