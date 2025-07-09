import FormInput from '@/components/common/FormInput';
import { styles } from '@/styles/profile/EditProfile.styles'; // ✅ correct path
import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Calendar } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome'; // ✅ CORRECT

import {
  findNodeHandle,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import * as yup from 'yup';

const genderOptions = ['Male', 'Female', 'Other'];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  tagline: yup.string().required('Tagline is required'),
  summary: yup.string().max(200, 'Max 200 characters'),
  location: yup.string().required('Location is required'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date of Birth is required'),
  instagram: yup.string().url('Invalid Instagram URL').nullable(),
  facebook: yup.string().url('Invalid Facebook URL').nullable(),
  linkedin: yup.string().url('Invalid LinkedIn URL').nullable(),
  twitter:  yup.string().url('Invalid Twitter URL').nullable(),
});

const socialIcons: Record<string, string> = {
  instagram: 'instagram',
  facebook: 'facebook-square',
  linkedin: 'linkedin-square',
  twitter: 'twitter',
};

const EditProfileScreen = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const [genderDropdownTop, setGenderDropdownTop] = useState(0);
  const genderInputRef = useRef<View>(null);
  const [image, setImage] = useState<string | null>(null);



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


  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      tagline: '',
      summary: '',
      location: '',
      gender: '',
      dateOfBirth: '',
      instagram: '',
      facebook: '',
      linkedin: '',
      twitter: '',
    },
  });

  const gender = watch('gender');
  const dob = watch('dateOfBirth');

  const openGenderDropdown = () => {
    const handle = findNodeHandle(genderInputRef.current);
    if (handle) {
      UIManager.measure(handle, (_x, _y, _w, h, _px, py) => {
        setGenderDropdownTop(py + h);
        setGenderDropdownVisible(true);
      });
    }
  };

  const onSubmit = (data: any) => {
    console.log('Final Form Data:', data);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
              {/* Avatar */}
      <TouchableOpacity onPress={onPickImage} style={styles.avatarWrapper}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : (
          <View style={styles.placeholderAvatar}>
            <Text style={styles.avatarText}>Add Photo</Text>
          </View>
        )}
      </TouchableOpacity>
<View  style={styles.BasicInfo}>
  <View>
  <Text  style={styles.basictext}>Basic Info</Text>
</View>

        {/* Name */}
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <FormInput
              label="Name"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.name?.message}
              onClear={() => resetField('name')}
              placeholder="Enter your name"
            />
          )}
        />

        {/* Tagline */}
        <Controller
          control={control}
          name="tagline"
          render={({ field }) => (
            <FormInput
              label="Tagline"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.tagline?.message}
              onClear={() => resetField('tagline')}
              placeholder="Enter your tagline"
            />
          )}
        />

        {/* Summary */}
<Controller
    control={control}
    name="summary"
    render={({ field }) => (
      <FormInput
        label="Profile Summary (max 200 characters)"
        value={field.value}
        onChangeText={field.onChange}
        error={errors.summary?.message}
        onClear={() => resetField('summary')}
        multiline
        numberOfLines={4}
        placeholder="Tell something about yourself"
      />
    )}
  />

        {/* Location */}
        <Controller
          control={control}
          name="location"
          render={({ field }) => (
            <FormInput
              label="Location"
              value={field.value}
              onChangeText={field.onChange}
              error={errors.location?.message}
              onClear={() => resetField('location')}
              placeholder="City, Country"
            />
          )}
        />

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <TouchableOpacity
          ref={genderInputRef}
          style={styles.dropdownInput}
          onPress={openGenderDropdown}
        >
          <Text style={{ color: gender ? '#000' : '#999' }}>
            {gender || 'Select Gender'}
          </Text>
        </TouchableOpacity>
        {errors.gender && <Text style={styles.error}>{errors.gender.message}</Text>}

        {/* Gender Dropdown */}
      {/* Gender Dropdown Overlay (OUTSIDE ScrollView) */}
      {genderDropdownVisible && (
        <TouchableOpacity
          style={styles.dropdownOverlayTouchable}
          activeOpacity={1}
          onPress={() => setGenderDropdownVisible(false)}
        >
          <View style={[styles.dropdownFloatingAbsolute, { top: genderDropdownTop }]}>
            {genderOptions.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setValue('gender', option);
                  setGenderDropdownVisible(false);
                }}
                style={styles.dropdownOption}
              >
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      )}

        {/* Date of Birth */}
        <Text style={styles.label}>Date Of Birth</Text>
        <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
          <Text style={{ color: dob ? '#000' : '#999' }}>
            {dob || 'Select your D.O.B'}
          </Text>
          <Calendar size={18} color="#888" />
        </TouchableOpacity>
        {errors.dateOfBirth && <Text style={styles.error}>{errors.dateOfBirth.message}</Text>}

        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            maximumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setValue('dateOfBirth', selectedDate.toISOString().split('T')[0]);
              }
            }}
          />
        )}

</View> 
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Social Links</Text>

{(['linkedin', 'facebook', 'twitter', 'instagram'] as const).map((name) => (
  <Controller
    key={name}
    control={control}
    name={name}
    render={({ field }) => (
      <FormInput
        label={
          <View style={styles.labelWithIcon}>
            <Icon name={socialIcons[name]} size={16} color="#444" style={styles.labelIcon} />
            <Text style={styles.labelText}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Text>
          </View>
        }
        value={field.value ?? ''}
        onChangeText={field.onChange}
        error={errors[name]?.message}
        onClear={() => resetField(name)}
        placeholder={`Enter ${name} link`}
      />
    )}
  />
))}

</View>





        {/* Submit Button */}
       
<TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.saveButton}>
  <Text style={styles.saveButtonText}>Save Changes</Text>
</TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
