curl -H "Authorization: key=AAAAkXXcN8g:APA91bEgrbFSotQbGEssGUQoEHa9jcbrWLaVL5OjqSNeduY2-kMmSc9sgwEkZ1XpZRDAhUokovrSGb5OARhdLCOOZ2926soVaMSEcYWg-42TNVepb9-yHfRyVGou0joE7IsbYyBjl17r"^
 -H "Content-Type: application/json"^
 -X POST^
 -d "{\"registration_ids\":[\"APA91bF46CDoqrxz5jLQmtbhX9jiMMYAFOoHjjrquOFAPlkGjUUsIpRUjbKrbGsX5-QIm_9OmQRNzZ5Hec7_ljVJWuoQCiJoJhgas0xs62bt-NQZCjjGtd59uTXH9ck7_ZfjxAq-erRj\"], \"data\":{\"gcm.notification.title\": \"Help!\", \"gcm.notification.body\":\"I am Eric\"}, \"priority\": \"high\" }"^
 https://android.googleapis.com/gcm/send