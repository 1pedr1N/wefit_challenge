import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/App';
import NoFoundScreen from '../screens/NoFoundScreen';
import Cart from '../screens/Cart';
import OrderFineshed from '../screens/OrderFineshed';
import LoadingScreen from '../screens/LoadingState';

const ProtectedRoute = ({ element: Component, ...rest }: {
  element: React.ComponentType<unknown>;



}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <Component {...rest} />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<ProtectedRoute element={Cart as React.ComponentType<unknown>} />} />
      <Route path="/orderFineshed" element={<ProtectedRoute element={OrderFineshed as React.ComponentType<unknown>} />} />
      <Route path="*" element={<NoFoundScreen />} />
    </Routes>
  );
};

export default App;
