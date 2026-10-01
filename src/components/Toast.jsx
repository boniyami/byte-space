import React from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;

  return (
    <div className={`toast-notification toast-${toast.type} active`}>
      <span className="toast-icon">✓</span>
      <span className="toast-message">{toast.message}</span>
    </div>
  );
}
