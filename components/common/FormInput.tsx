import CancelIcon from '@/components/svgImageComponents/CancelIcon';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from 'react-native';

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  onClear?: ()=>void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  error,
  onClear,
  onChangeText,
  ...props
}) => {
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
  };

  return (
    <View style={{ marginBottom: 16 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.input,
            error ? styles.inputError : styles.inputDefault,
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
};

export default FormInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 6,
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
  inputDefault: {
    borderWidth: 1,
    borderColor: '#6F8DE7',
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#ff4d4d',
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
