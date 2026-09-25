import { Resend } from 'resend'

import { ENQUIRY_SUBJECTS, PREFERRED_LOCATIONS } from '@/data/contact'
import {
	BUDGET_RANGES,
	CONTACT_METHODS,
	HAS_PROPERTY_OPTIONS,
	OWNER_ROLES,
	PROPERTY_STATUS_OPTIONS,
	PROPERTY_TYPES,
	SUPPORT_OPTIONS,
	TIMELINE_OPTIONS,
} from '@/data/property-enquiry'

export type ContactFormResult =
	| { ok: true }
	| { ok: false; error: string }

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'bookings@rahalink.com'
const FROM_EMAIL =
	process.env.CONTACT_FROM_EMAIL ?? 'Raha Stays <onboarding@resend.dev>'

function getString (formData: FormData, key: string) {
	const value = formData.get(key)
	return typeof value === 'string' ? value.trim() : ''
}

function getStrings (formData: FormData, key: string) {
	return formData
		.getAll(key)
		.filter((value): value is string => typeof value === 'string')
		.map((value) => value.trim())
		.filter(Boolean)
}

function labelFor (
	options: { value: string; label: string }[],
	value: string,
) {
	return options.find((option) => option.value === value)?.label ?? value
}

function labelsFor (
	options: { value: string; label: string }[],
	values: string[],
) {
	return values.map((value) => labelFor(options, value)).join(', ')
}

function formatLines (lines: [string, string][]) {
	return lines
		.filter(([, value]) => Boolean(value))
		.map(([label, value]) => `${label}: ${value}`)
		.join('\n')
}

async function sendEmail ({
	subject,
	replyTo,
	body,
}: {
	subject: string
	replyTo: string
	body: string
}): Promise<ContactFormResult> {
	const apiKey = process.env.RESEND_API_KEY

	if (!apiKey) {
		return {
			ok: false,
			error: 'Email is not configured yet. Please try WhatsApp or email us directly.',
		}
	}

	const resend = new Resend(apiKey)
	const { error } = await resend.emails.send({
		from: FROM_EMAIL,
		to: [TO_EMAIL],
		replyTo,
		subject,
		text: body,
	})

	if (error) {
		return {
			ok: false,
			error: 'Something went wrong sending your message. Please try again.',
		}
	}

	return { ok: true }
}

export async function sendGeneralEnquiry (
	formData: FormData,
): Promise<ContactFormResult> {
	const fullName = getString(formData, 'fullName')
	const email = getString(formData, 'email')
	const phone = getString(formData, 'phone')
	const subjectValue = getString(formData, 'subject')
	const message = getString(formData, 'message')

	if (!fullName || !email || !subjectValue || !message) {
		return { ok: false, error: 'Please complete all required fields.' }
	}

	const subjectLabel = labelFor(ENQUIRY_SUBJECTS, subjectValue)
	const body = formatLines([
		['Form', 'General Enquiry'],
		['Name', fullName],
		['Email', email],
		['Phone / WhatsApp', phone],
		['Subject', subjectLabel],
		['Message', message],
	])

	return sendEmail({
		subject: `General Enquiry — ${subjectLabel}`,
		replyTo: email,
		body,
	})
}

export async function sendCorporateEnquiry (
	formData: FormData,
): Promise<ContactFormResult> {
	const companyName = getString(formData, 'companyName')
	const contactPerson = getString(formData, 'contactPerson')
	const email = getString(formData, 'email')
	const telephone = getString(formData, 'telephone')
	const guests = getString(formData, 'guests')
	const preferredLocation = getString(formData, 'preferredLocation')
	const expectedArrival = getString(formData, 'expectedArrival')
	const duration = getString(formData, 'duration')
	const apartments = getString(formData, 'apartments')
	const requirements = getString(formData, 'requirements')

	if (!companyName || !contactPerson || !email) {
		return { ok: false, error: 'Please complete all required fields.' }
	}

	const locationLabel = preferredLocation
		? labelFor(PREFERRED_LOCATIONS, preferredLocation)
		: ''

	const body = formatLines([
		['Form', 'Corporate Accommodation Enquiry'],
		['Company', companyName],
		['Contact Person', contactPerson],
		['Email', email],
		['Telephone', telephone],
		['Number of Guests', guests],
		['Preferred Location', locationLabel],
		['Expected Arrival', expectedArrival],
		['Duration', duration],
		['Apartments Required', apartments],
		['Additional Requirements', requirements],
	])

	return sendEmail({
		subject: `Corporate Enquiry — ${companyName}`,
		replyTo: email,
		body,
	})
}

export async function sendPropertyEnquiry (
	formData: FormData,
): Promise<ContactFormResult> {
	const fullName = getString(formData, 'fullName')
	const email = getString(formData, 'email')
	const phone = getString(formData, 'phone')
	const basedIn = getString(formData, 'basedIn')
	const ownerRole = getString(formData, 'ownerRole')
	const support = getStrings(formData, 'support')
	const hasProperty = getString(formData, 'hasProperty')
	const location = getString(formData, 'location')
	const propertyType = getString(formData, 'propertyType')
	const bedrooms = getString(formData, 'bedrooms')
	const propertyStatus = getString(formData, 'propertyStatus')
	const timeline = getString(formData, 'timeline')
	const goals = getString(formData, 'goals')
	const budget = getString(formData, 'budget')
	const rentalIncome = getString(formData, 'rentalIncome')
	const contactMethod = getString(formData, 'contactMethod')
	const preferredTime = getString(formData, 'preferredTime')
	const consent = getString(formData, 'consent')

	if (
		!fullName ||
		!email ||
		!phone ||
		support.length === 0 ||
		!propertyStatus ||
		!location ||
		!timeline ||
		consent !== 'yes'
	) {
		return { ok: false, error: 'Please complete all required fields.' }
	}

	const body = formatLines([
		['Form', 'Property Management Enquiry'],
		['Full name', fullName],
		['Email', email],
		['Phone / WhatsApp', phone],
		['Based in', basedIn],
		[
			'Owner / Investor / Representative',
			labelFor(OWNER_ROLES, ownerRole),
		],
		['Support needed', labelsFor(SUPPORT_OPTIONS, support)],
		[
			'Already have a property',
			labelFor(HAS_PROPERTY_OPTIONS, hasProperty),
		],
		['Property location', location],
		['Property type', labelFor(PROPERTY_TYPES, propertyType)],
		['Bedrooms or units', bedrooms],
		[
			'Current status',
			labelFor(PROPERTY_STATUS_OPTIONS, propertyStatus),
		],
		['Timeline', labelFor(TIMELINE_OPTIONS, timeline)],
		['Goals', goals],
		['Budget', labelFor(BUDGET_RANGES, budget)],
		['Currently earning rental income', rentalIncome],
		[
			'Preferred contact method',
			labelFor(CONTACT_METHODS, contactMethod),
		],
		['Preferred contact time', preferredTime],
		['Consent', 'Yes'],
	])

	return sendEmail({
		subject: `Property Management Enquiry — ${fullName}`,
		replyTo: email,
		body,
	})
}
