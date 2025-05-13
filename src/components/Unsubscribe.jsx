import { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5055';

export default function Unsubscribe() {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.delete(`${API}/quiz/users/unsubscribe`, {
        data: formData
      });

      setMessage('User unsubscribed successfully.');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || 'Unsubscribe failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="unsubscribe-wrapper">
      <h2>Unsubscribe</h2>
      <form onSubmit={handleUnsubscribe}>
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Unsubscribing…' : 'Unsubscribe'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
