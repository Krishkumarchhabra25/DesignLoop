import CancelIcon from '@/components/svgImageComponents/CancelIcon';
import React, { forwardRef, useEffect, useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

interface FormInputProps extends TextInputProps {
  label?: string | React.ReactNode;
  error?: string;
  onClear?: () => void;
  leftIcon?: React.ReactNode;
}

const FormInput = forwardRef<RNTextInput, FormInputProps>(({
  label,
  value,
  error,
  onClear,
  onChangeText,
  leftIcon,
  ...props
}, ref) => {
  const [showClear, setShowClear] = useState(false);
  const [internalValue, setInternalValue] = useState(value ?? '');

  useEffect(() => {
    setInternalValue(value ?? '');
    setShowClear(!!value);
  }, [value]);

  const handleTextChange = (text: string) => {
    setInternalValue(text);
    setShowClear(text.length > 0);
    onChangeText?.(text);
  };

  const handleClear = () => {
    setInternalValue('');
    setShowClear(false);
    onChangeText?.('');
    onClear?.();
  };

  return (
    <View style={{ marginBottom: 16 }}>
      {label && (
        <View style={styles.labelContainer}>
          {typeof label === 'string' ? (
            <Text style={styles.label}>{label}</Text>
          ) : (
            label
          )}
        </View>
      )}

      <View style={styles.inputWrapper}>
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}

        <TextInput
          ref={ref}
          style={[
            styles.input,
            error ? styles.inputError : styles.inputDefault,
            leftIcon ? styles.inputWithLeftIcon : null,
          ]}
          value={internalValue}
          onChangeText={handleTextChange}
          {...props}
        />

        {showClear && (
          <TouchableOpacity onPress={handleClear} style={styles.clearBtn}>
            <CancelIcon />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#000',
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: 52,
    paddingHorizontal: 14,
    paddingRight: 40,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    color: '#111',
  },
  inputWithLeftIcon: {
    paddingLeft: 40,
  },
  inputDefault: {
    borderWidth: 1,
    borderColor: '#6F8DE7',
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#ff4d4d',
  },
  leftIconContainer: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  clearBtn: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  error: {
    color: '#ff4d4d',
    fontSize: 12,
    marginTop: 4,
  },
});
