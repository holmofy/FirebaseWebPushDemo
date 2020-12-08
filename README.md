# FirebaseWebPushDemo
Google Firebase Web Push Demo

```curl
curl -X POST -H "Authorization: key=AAAApNVY3i8:APA91bHZHgMRLxCkHFvph6UW9VsUabeWcoeC7hwHziIj3NqqvhKOWzF5rCkXJ1MwMuG6zaSQzAPJfEzS7-hkOtyVzAzz7YLOmVraOamilyuLjEtVpM16pGVrMPY_eogU1IFqdnrY96zF" \
   -H "Content-Type: application/json" \
   -d '{
  "notification": {
        "title": "FCM Message",
        "body": "This is an FCM Message",
        "icon": "http://ae01.alicdn.com/images/eng/wholesale/icon/aliexpress.ico",
  },
  "to": "c6CTSaTtsveSBOd_a2FANn:APA91bG-3qLs-mUJwdqDxwk--jF3JNV9z98qOfGLnkg2jbynp6ik2bn7bxHKKqTclFh9SSRQDnDoWgjrCLuJm41VdiYwCnwpBD3UJKWkhcxspWayOoLg11wTUovVgbCBTu9gO3ASISm3"
}' https://fcm.googleapis.com/fcm/send
```
