import bcrypt from 'bcrypt'

const hashPassword = async (password: string, saltRounds: number) => {
	try {
		const hash = await bcrypt.hash(password, saltRounds)
		return hash
	} catch (error) {
		return error
	}
}

export default hashPassword;

