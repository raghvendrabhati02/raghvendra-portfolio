import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // 1. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // 2. Build the formatted email body text as requested
    const emailBody = `Name:\n${name.trim()}\n\nEmail:\n${email.trim()}\n\nSubject:\n${subject.trim()}\n\nMessage:\n${message.trim()}\n\nSubmitted From:\nPortfolio Website`

    // 3. Send payload securely via FormSubmit endpoint
    const response = await fetch('https://formsubmit.co/ajax/raghuthakur0217@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: 'New Portfolio Contact Form Submission',
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: emailBody, // Contains the exact requested email body format
        _honey: '', // Honeypot spam protection
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Email carrier endpoint error:', errorText)
      return NextResponse.json({ error: 'Failed to deliver message' }, { status: 500 })
    }

    const data = await response.json()
    if (data.success !== 'true' && data.success !== true) {
      console.error('Email carrier returned unsuccessful:', data)
      return NextResponse.json({ error: 'Failed to deliver message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API route exception:', error)
    return NextResponse.json({ error: 'Internal server error occurred' }, { status: 500 })
  }
}
