import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		host_dev: '127.0.0.1',
		port_dev: '3306',
		user_dev: 'root',
		password_dev: 'Wingsfan7!',
		database_dev: 'cis566',

		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'Wingsfan7',
		database: 'cis566',
	},
	reactStrictMode: true,
};

export default nextConfig;
