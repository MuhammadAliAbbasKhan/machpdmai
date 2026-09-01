import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('machpdmai_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [subscription, setSubscription] = useState(() => {
    const saved = localStorage.getItem('machpdmai_sub');
    return saved ? JSON.parse(saved) : { is_active: false, plan: 'Free Tier' };
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: 'Professional Predictive AI', price: 150 });
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('machpdmai_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('machpdmai_user');
    }
  }, [user]);

  useEffect(() => {
    if (subscription) {
      localStorage.setItem('machpdmai_sub', JSON.stringify(subscription));
    }
  }, [subscription]);

  const login = (userData) => {
    setUser(userData);
    if (userData.is_paid) {
      setSubscription({ is_active: true, plan: userData.active_plan || 'Professional Predictive AI' });
    }
  };

  const logout = () => {
    setUser(null);
    setSubscription({ is_active: false, plan: 'Free Tier' });
    localStorage.removeItem('machpdmai_user');
    localStorage.removeItem('machpdmai_sub');
  };

  const activateSubscription = (planName, amount) => {
    const newSub = {
      is_active: true,
      plan: planName,
      amount: amount,
      paid_at: new Date().toISOString()
    };
    setSubscription(newSub);
    if (user) {
      setUser((prev) => ({ ...prev, is_paid: true, active_plan: planName }));
    }
  };

  const openAuth = (mode = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const openCheckout = (planName = 'Professional Predictive AI', price = 150) => {
    setSelectedPlan({ name: planName, price });
    setCheckoutModalOpen(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        subscription,
        login,
        logout,
        activateSubscription,
        authModalOpen,
        setAuthModalOpen,
        authMode,
        openAuth,
        checkoutModalOpen,
        setCheckoutModalOpen,
        selectedPlan,
        openCheckout,
        demoModalOpen,
        setDemoModalOpen,
        quizModalOpen,
        setQuizModalOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
