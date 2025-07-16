import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from "@/styles/_mainstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Ionicons name="arrow-back" size={25} color="white" />
          <Image source={require('../assets/images/logo.png')} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Sign in to your</Text>
          <Text style={styles.titleText}>Account</Text>
        </View>

        {/* Subtitle */}
        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>Enter your email and password to sign in.</Text>
        </View>

        {/* Form Group - simplified to fit style constraints */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Sign in with Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Buttons - reuse existing buttons for simplicity */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={styles.buttonSecondaryText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={styles.buttonSecondaryText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Join Now text */}
        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>Don't have an account?</Text>
          <Text style={styles.titleText}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
