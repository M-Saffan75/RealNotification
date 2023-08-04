import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import notifee from '@notifee/react-native';

const NotificationHere = () => {

    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
            channelId,
            smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
              id: 'default',
            },
          },
        });
      }

return (
   <>
    <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    </View>
   </>
)
}

export default NotificationHere

const styles = StyleSheet.create({})