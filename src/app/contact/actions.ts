'use server'

import {
	sendCorporateEnquiry,
	sendGeneralEnquiry,
	sendNewsletterSignup,
	sendPropertyEnquiry,
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

export async function submitPropertyEnquiry (
	formData: FormData,
): Promise<ContactFormResult> {
	return sendPropertyEnquiry(formData)
}

export async function submitNewsletterSignup (
	formData: FormData,
): Promise<ContactFormResult> {
	return sendNewsletterSignup(formData)
}
