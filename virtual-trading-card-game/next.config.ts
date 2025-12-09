import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		host_dev: '127.0.0.1',
		port_dev: '3306',
		user_dev: 'root',
		password_dev: 'root!',
		database_dev: 'cis566',

		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'root',
		database: 'cis566',
	},
	reactStrictMode: true,
};

export default nextConfig;
