import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';
import {
  findNodeHandle,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native';
import * as yup from 'yup';

import FormInput from '@/components/common/FormInput';
import EditIcon from '@/components/svgImageComponents/EditIcon';
import useAccountProgress from '@/hooks/useAccountProgress';
import styles from '@/styles/AccountSetup/PersonalInfo.styles';
import { AuthStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Calendar } from 'lucide-react-native';


const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  tagline: yup.string().required('Tagline is required'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date of Birth is required'),
});

const genderOptions = ['Male', 'Female', 'Other'];

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'PersonalInfo'>;



const PersonalInfoScreen = () => {
  
  const navigation = useNavigation<NavigationProp>();
  const [image, setImage] = useState<string | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const [genderDropdownTop, setGenderDropdownTop] = useState(0);

const genderInputRef = useRef<View>(null);
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      tagline: '',
      gender: '',
      dateOfBirth: '',
    },
  });

  const gender = watch('gender');
  const dob = watch('dateOfBirth');
  const { updateStep } = useAccountProgress();

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

  
 const onSubmit = (data: any) => {
    console.log('Form Data:', { ...data, image });
    updateStep(2);
    navigation.navigate('DesignNiche'); // navigating without params
  };

  const openGenderDropdown = () => {
    const handle = findNodeHandle(genderInputRef.current);
    if (handle) {
      UIManager.measure(handle, (_x, _y, _w, h, _px, py) => {
        setGenderDropdownTop(py + h);
        setGenderDropdownVisible(true);
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.wrapper}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.heading}>Account Setup</Text>
            <Text style={styles.subheading}>Step 1 of 2 : Personal Info</Text>

            {/* Stepper */}
            <View style={styles.progressWrapper}>
              <View style={styles.stepRow}>
                <LinearGradient colors={['#698CFF', '#9B84DF']} style={styles.stepCircle}>
                  <Text style={styles.activeStepText}>1</Text>
                </LinearGradient>
                <View style={[styles.progressLine, styles.progressLineFilled]} />
                <View style={styles.stepCircle}>
                  <Text style={styles.stepText}>2</Text>
                </View>
              </View>
            </View>

            {/* Avatar */}
            <TouchableOpacity onPress={onPickImage} style={styles.avatarWrapper}>
              {image ? (
                <Image source={{ uri: image }} style={styles.avatar} />
              ) : (
                <View style={styles.placeholderAvatar}>
                  <Text style={styles.avatarText}>Add Photo</Text>
                </View>
              )}
              <View style={styles.editIconContainer}>
                <EditIcon />
              </View>
            </TouchableOpacity>

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
          </ScrollView>

          {/* Bottom Button */}
          <View style={styles.fixedButtonContainer}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
              <LinearGradient
                colors={['#698CFF', '#9B84DF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientButton}
              >
                <Text style={styles.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Gender Dropdown Absolute */}
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
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
