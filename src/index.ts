import { md5 } from './helpers.js'

export function md5Crypt(textPassword: string): string {
	return md5(textPassword)
}

export function verifyMD5(textPassword: string, md5Password: string | string[]): boolean {
	let isValid = false
	const md5Passwords = typeof md5Password === 'string' ? [md5Password] : md5Password
	for (const cryptPasswd of md5Passwords) {
		const hashType = cryptPasswd.match(/\{([^}]+)\}/)
		if (hashType && hashType[1] === 'MD5') {
			const hashedPassword = md5Crypt(textPassword)
			if (hashedPassword === cryptPasswd)
				isValid = true
		}
	}
	return isValid
}
