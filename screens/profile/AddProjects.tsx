import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import FormInput from '@/components/common/FormInput';
import styles from '@/styles/profile/AddProjects';
import { Ionicons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { Calendar } from 'lucide-react-native';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  summary: yup.string().required('Summary is required').max(100, 'Max 100 characters allowed'),
  description: yup.string().required('Description is required'),
  startedIn: yup.string().required('Start date is required'),
  completedIn: yup.string().required('Completed date is required'),
  projectUrl: yup.string().required('Project URL is required'),
});

const AddProjects = () => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      summary: '',
      description: '',
      startedIn: '',
      completedIn: '',
      projectUrl: '',
    },
  });

  const onPickImage = async () => {
    const gallery = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    if (!gallery.granted || !camera.granted) {
      alert('Camera and gallery permissions are required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

const onPickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ],
      copyToCacheDirectory: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const file = result.assets[0];
      setFileName(file.name);
    }
  };


  const onSubmit = (data: any) => {
    console.log({ ...data, currentlyWorking, image, fileName });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Cover Image */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Project Cover Image</Text>
          {image ? (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.imagePreview} />
              <TouchableOpacity style={styles.imageCloseIcon} onPress={() => setImage(null)}>
                <Ionicons name="close-circle" size={22} color="#ff4d4f" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.imageUploadBox} onPress={onPickImage}>
              <Ionicons name="image-outline" size={40} color="#4F46E5" />
              <Text style={styles.imageUploadText}>
                Click to pick & attach Project Cover image{'\n'}
                <Text style={{ color: '#999' }}>image should be in 16:9 ratio</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Title */}
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <FormInput
              label="Title"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.title?.message}
              onClear={() => resetField('title')}
              placeholder="Finsecure Case Study"
            />
          )}
        />

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
                  placeholder="Brief project summary."
                />
                <Text style={styles.charCount}>{field.value.length}/100</Text>
                {errors.summary && <Text style={styles.error}>{errors.summary.message}</Text>}
              </View>
            )}
          />
        </View>

        {/* Started In */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Started In</Text>
          <Controller
            control={control}
            name="startedIn"
            render={({ field }) => (
              <>
                <TouchableOpacity style={styles.dateInput} onPress={() => setShowStartDatePicker(true)}>
                  <Text style={{ color: field.value ? '#000' : '#999' }}>{field.value || 'Select date'}</Text>
                  <Calendar size={18} color="#888" />
                </TouchableOpacity>
                {showStartDatePicker && (
                  <DateTimePicker
                    value={field.value ? new Date(field.value) : new Date()}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={(event, selectedDate) => {
                      setShowStartDatePicker(false);
                      if (selectedDate) {
                        const formatted = selectedDate.toISOString().split('T')[0];
                        field.onChange(formatted);
                      }
                    }}
                  />
                )}
                {errors.startedIn && <Text style={styles.error}>{errors.startedIn.message}</Text>}
              </>
            )}
          />
        </View>

        {/* Currently working */}
        <View style={[styles.checkboxContainer, styles.fieldContainer]}>
          <Checkbox value={currentlyWorking} onValueChange={setCurrentlyWorking} color={currentlyWorking ? '#4f46e5' : undefined} style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Currently working here</Text>
        </View>

        {/* Completed In */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Completed In</Text>
          <Controller
            control={control}
            name="completedIn"
            render={({ field }) => (
              <>
                <TouchableOpacity style={styles.dateInput} onPress={() => setShowEndDatePicker(true)}>
                  <Text style={{ color: field.value ? '#000' : '#999' }}>{field.value || 'Select date'}</Text>
                  <Calendar size={18} color="#888" />
                </TouchableOpacity>
                {showEndDatePicker && (
                  <DateTimePicker
                    value={field.value ? new Date(field.value) : new Date()}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={(event, selectedDate) => {
                      setShowEndDatePicker(false);
                      if (selectedDate) {
                        const formatted = selectedDate.toISOString().split('T')[0];
                        field.onChange(formatted);
                      }
                    }}
                  />
                )}
                {errors.completedIn && <Text style={styles.error}>{errors.completedIn.message}</Text>}
              </>
            )}
          />
        </View>

        {/* File Attach */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>File Attach (DOC/PDF)</Text>
          {fileName ? (
            <View style={styles.fileWrapper}>
              <Text style={styles.fileName}>{fileName}</Text>
              <TouchableOpacity onPress={() => setFileName(null)}>
                <Ionicons name="close-circle-outline" size={22} color="#ff4d4f" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.fileAttachButton} onPress={onPickFile}>
              <Ionicons name="add-circle-outline" size={20} color="#4F46E5" />
              <Text style={styles.fileAttachText}>Attach File</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Project URL */}
        <Controller
          control={control}
          name="projectUrl"
          render={({ field }) => (
            <FormInput
              label="Project URL"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.projectUrl?.message}
              onClear={() => resetField('projectUrl')}
              placeholder="https://example.com"
            />
          )}
        />

        {/* Save */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddProjects;
