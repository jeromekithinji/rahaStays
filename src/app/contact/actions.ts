'use server'

import {
	sendCorporateEnquiry,
	sendGeneralEnquiry,
	type ContactFormResult,
} from '@/lib/contact-email'

export async function submitGeneralEnquiry (
	formData: FormData,
): Promise<ContactFormResult> {
	return sendGeneralEnquiry(formData)
}

export async function submitCorporateEnquiry (
	formData: FormData,
): Promise<ContactFormResult> {
	return sendCorporateEnquiry(formData)
}
