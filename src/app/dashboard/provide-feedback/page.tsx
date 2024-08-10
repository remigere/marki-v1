'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProvideFeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('0');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 500);

    try {
      const response = await fetch('/api/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '1bf0412e-326e-4be4-af3c-3b92fe210253',
          feedback,
          rating,
        }),
      });

      if (response.ok) {
        // Feedback submitted successfully
        setFeedback('');
        setRating('0');
        setTimeout(() => {
          router.push('/'); // Redirect to the home page after a delay
        }, 2000);
      } else {
        // Handle error
        console.error('Error submitting feedback:', await response.json());
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {submitted ? (
        <div style={{ textAlign: 'center', fontSize: '24px', color: '#333', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Thank you for your feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontSize: '18px', fontWeight: '500' }}>How was your experience?</label>
            <div style={{ display: 'flex', gap: '5px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star.toString())}
                  style={{
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: star <= parseInt(rating) ? '#FFD700' : '#ccc',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Describe your experience here"
              required
              style={{
                width: '100%',
                height: '150px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#FF0000',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Send Feedback
          </button>
        </form>
      )}
    </div>
  );
}