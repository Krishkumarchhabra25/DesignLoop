import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import FormInput from '@/components/common/FormInput';
import styles from '@/styles/AboutTabStyles/AddExperienceStyles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Calendar } from 'lucide-react-native';
import * as yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker';


const schema = yup.object().shape({
  position: yup.string().required('Position is required'),
  organisation: yup.string().required('Organisation is required'),
  startedIn: yup.string().required('Start date is required'),
  summary: yup
    .string()
    .required('Summary is required')
    .max(100, 'Max 100 characters allowed'),
});

const EditExperience = () => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
 const [showDatePicker, setShowDatePicker] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      position: '',
      organisation: '',
      startedIn: '',
      summary: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log({ ...data, currentlyWorking });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Position */}
        <Controller
          control={control}
          name="position"
          render={({ field }) => (
            <FormInput
              label="Position"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.position?.message}
              onClear={() => resetField('position')}
              placeholder="UI/UX Designer"
            />
          )}
        />

        {/* Organisation */}
        <Controller
          control={control}
          name="organisation"
          render={({ field }) => (
            <FormInput
              label="Organisation"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.organisation?.message}
              onClear={() => resetField('organisation')}
              placeholder="Byecom Innovation"
            />
          )}
        />

        {/* Started In */}
<View style={styles.fieldContainer}>
  <Text style={styles.label}>Started In</Text>
  <Controller
    control={control}
    name="startedIn"
    render={({ field }) => (
      <>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={{ color: field.value ? '#000' : '#999' }}>
            {field.value || 'Select start date'}
          </Text>
          <Calendar size={18} color="#888" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={field.value ? new Date(field.value) : new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            maximumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                const formatted = selectedDate.toISOString().split('T')[0];
                field.onChange(formatted);
              }
            }}
          />
        )}

        {errors.startedIn && (
          <Text style={styles.error}>{errors.startedIn.message}</Text>
        )}
      </>
    )}
  />
</View>


        {/* Checkbox */}
<View style={[styles.checkboxContainer, styles.fieldContainer]}>
  <Checkbox
    value={currentlyWorking}
    onValueChange={setCurrentlyWorking}
    color={currentlyWorking ? '#4f46e5' : undefined}
    style={styles.checkbox}
  />
  <Text style={styles.checkboxLabel}>Currently working here</Text>
</View>


        {/* Summary */}
      <View style={styles.fieldContainer}>
  <Controller
    control={control}
    name="summary"
    render={({ field }) => (
      <View>
        <Text style={styles.label}>Summary (100 characters max)</Text>
        <TextInput
          style={styles.textArea}
          multiline
          maxLength={100}
          value={field.value}
          onChangeText={field.onChange}
          placeholder="i am sarthak ranjan hota with 3+ year of experience in design field."
        />
        <Text style={styles.charCount}>{field.value.length}/100</Text>
        {errors.summary && (
          <Text style={styles.error}>{errors.summary.message}</Text>
        )}
      </View>
    )}
  />
</View>


        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditExperience;
