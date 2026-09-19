import React from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const STREAM_URL = 'https://mickierays.on-air.fm';
const WHATSAPP_NUMBER = '256751085833';

export default function HomeScreen() {
  const openRadio = async () => {
    try {
      await Linking.openURL(STREAM_URL);
    } catch {
      Alert.alert('Star Wave Radio', 'Unable to open the live radio stream.');
    }
  };

  const openWhatsApp = async () => {
    const message = encodeURIComponent(
      'Hello Star Wave Radio 104.4 FM, I would like to make a song request.'
    );

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('WhatsApp', 'Unable to open WhatsApp.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>★</Text>

          <View>
            <Text style={styles.stationName}>STAR WAVE RADIO</Text>
            <Text style={styles.frequency}>104.4 FM</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.liveBadge}>● LIVE ON AIR</Text>

          <Text style={styles.title}>
            Your Sound.
            {'\n'}
            Your Wave.
          </Text>

          <Text style={styles.subtitle}>
            Listen to Star Wave Radio 104.4 FM live from Mubende.
          </Text>

          <TouchableOpacity style={styles.listenButton} onPress={openRadio}>
            <Text style={styles.listenIcon}>▶</Text>
            <Text style={styles.listenText}>LISTEN LIVE</Text>
          </TouchableOpacity>

          <Text style={styles.listeners}>
            Currently listening to Star Wave Radio
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TODAY ON STAR WAVE</Text>

          <View style={styles.card}>
            <Text style={styles.time}>10:00 PM — 12:00 AM</Text>
            <Text style={styles.program}>Night Vibes</Text>
            <Text style={styles.host}>With Mickie Rays Official</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QUICK LINKS</Text>

          <TouchableOpacity style={styles.linkCard} onPress={openWhatsApp}>
            <Text style={styles.linkIcon}>☏</Text>
            <View style={styles.linkTextBox}>
              <Text style={styles.linkTitle}>Song Requests</Text>
              <Text style={styles.linkSubtitle}>
                Send your request on WhatsApp
              </Text>
      </
