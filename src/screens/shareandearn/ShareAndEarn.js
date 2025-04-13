import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {
  GiftsGiftIcon,
  LoudSpeakerIcon,
  StarsStarIcon,
  UserIcon,
} from '../../constants/ImagesAndIcons';

const ShareAndEarn = ({visible, onClose}) => {
  const translateY = useRef(new Animated.Value(300)).current;
  const translateYAnimationObject = {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  };
  const translateYAnimationObject2 = {
    toValue: 300,
    duration: 300,
    useNativeDriver: true,
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, translateYAnimationObject).start();
    } else {
      Animated.timing(translateY, translateYAnimationObject2).start(() =>
        onClose(),
      );
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{translateY}]}]}>
            <View>
              <View style={styles.topImageContainer}>
                <Image style={styles.topFixedImage} source={GiftsGiftIcon} />
              </View>
              <View style={styles.referHeadlinesTextContainer}>
                <Text style={styles.referHeadlineText}>
                  Refer friends & Earn 500
                </Text>
                <Text>
                  Get started with 10 free referrals! Earn 50 for every friend
                  you invite.
                </Text>
                <Text style={styles.howInviteWorkText}>How invites work</Text>
              </View>
              <View style={styles.referIconsInstructionsTextContainer}>
                <View style={styles.referIconsContainer}>
                  <Image style={styles.referIcon} source={LoudSpeakerIcon} />
                  <Image style={styles.referIcon} source={UserIcon} />
                  <Image style={styles.referIcon} source={StarsStarIcon} />
                </View>
                <View style={styles.referInstructionsTextContainer}>
                  <Text>
                    Invite your friends to study on SmartOnlineExam App
                  </Text>
                  <Text>Friend signs up using your invite link/code</Text>
                  <Text>You both get 50 as SmartOnlineExam Money</Text>
                </View>
              </View>
              <View style={styles.shareCopyCodeButtonsContainer}>
                <Text style={styles.shareYourCodeText}>Share your Code</Text>
                <View style={styles.referCodeAndCopyCodeButtonContainer}>
                  <Text style={styles.referCode}>VIN2001</Text>
                  <Pressable style={styles.copyCodeButton}>
                    <Text style={styles.copyCodeButtonText}>Copy Code</Text>
                  </Pressable>
                </View>
                <View style={styles.shareCodeButtonsContainer}>
                  <Pressable style={styles.whatsappShareButton}>
                    <Text style={styles.whatsappShareButtonText}>Whatsapp</Text>
                  </Pressable>
                  <Pressable style={styles.shareCodeButton}>
                    <Text style={styles.shareCodeButtonText}>Share Code</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.referralCountEarnedMoneyInfoContainer}>
                <Text style={styles.shareYourCodeText}>Your Referrals</Text>
                <View style={styles.totalReferralsEarnedMoneyButtonsContainer}>
                  <Pressable style={styles.totalReferralsCountButton}>
                    <Text style={styles.totalReferralCount}>7</Text>
                    <Text style={styles.totalReferralsText}>
                      Total referrals
                    </Text>
                  </Pressable>
                  <Pressable style={styles.totalEMoneyEarnedCountButton}>
                    <Text style={styles.totalEMoneyEarnedCount}>350</Text>
                    <Text style={styles.totalEMoneyEarnedText}>
                      E-money earned
                    </Text>
                  </Pressable>
                </View>
              </View>
              <Pressable style={styles.referNowButton}>
                <Text style={styles.referNowButtonText}>Refer Now</Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  topImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d1e0ff',
    position: 'absolute',
    top: -70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  topFixedImage: {
    width: 60,
    height: 60,
  },
  referHeadlineText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  referHeadlinesTextContainer: {
    marginTop: 50,
  },
  howInviteWorkText: {
    color: 'black',
    fontWeight: 'bold',
  },
  referIconsInstructionsTextContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  referIconsContainer: {
    gap: 4,
  },
  referInstructionsTextContainer: {
    gap: 7,
  },
  referIcon: {
    width: 22,
    height: 22,
  },
  shareCopyCodeButtonsContainer: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 4,
    marginTop: 10,
    borderRadius: 8,
  },
  shareYourCodeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  referCodeAndCopyCodeButtonContainer: {
    backgroundColor: '#d1e0ff',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  referCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  copyCodeButton: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 4,
  },
  copyCodeButtonText: {
    color: 'white',
  },
  shareCodeButtonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whatsappShareButton: {
    width: '48%',
    backgroundColor: 'black',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whatsappShareButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  shareCodeButton: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  shareCodeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  referralCountEarnedMoneyInfoContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    elevation: 4,
    borderRadius: 8,
  },
  totalReferralsEarnedMoneyButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  totalEMoneyEarnedCountButton: {
    width: '48%',
    height: 80,
    padding: 10,
    borderColor: '#dcc84d',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 8,
  },
  totalReferralsCountButton: {
    width: '48%',
    height: 80,
    padding: 10,
    borderRadius: 8,
    borderColor: '#1AFF00FF',
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  totalReferralCount: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  totalReferralsText: {
    fontWeight: 'bold',
  },
  totalEMoneyEarnedCount: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  totalEMoneyEarnedText: {
    fontWeight: 'bold',
  },
  referNowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 4,
    marginTop: 10,
    padding: 10,
  },
  referNowButtonText: {
    color: 'white',
  },
});

export default ShareAndEarn;
