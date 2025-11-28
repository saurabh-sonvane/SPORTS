
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Message sent successfully!',
        data,
      };
    } else {
      return {
        success: false,
        message: data.message || 'Failed to send message',
      };
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please try again.',
      error,
    };
  }
};
