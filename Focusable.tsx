import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Focusable = ({ children, onPress, backgroundColor }) => {
  const [isFocused, setIsFocused] = useState(false);

  const setFocus = (type) => {
    console.log(`Focus = ${type}`);
    setIsFocused(type);
  };

  return (
    <TouchableOpacity
      style={{ backgroundColor: isFocused ? 'red' : backgroundColor }}
      onPress={onPress}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Focusable;
