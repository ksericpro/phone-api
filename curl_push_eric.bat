curl -H "Authorization: key=AAAAkXXcN8g:APA91bEgrbFSotQbGEssGUQoEHa9jcbrWLaVL5OjqSNeduY2-kMmSc9sgwEkZ1XpZRDAhUokovrSGb5OARhdLCOOZ2926soVaMSEcYWg-42TNVepb9-yHfRyVGou0joE7IsbYyBjl17r"^
 -H "Content-Type: application/json"^
 -X POST^
 -d "{\"registration_ids\":[\"APA91bHkcUvXwBzHPMHXjDtnXXSIUK2Iqxrz5uqJT7nor2uUAsp6JCCvF6ugRt6Jofr_RfgGTFnqzJrBJ1kkPW3rbAvqs9qoGeI9HqmzHwJ43zgc43TYvAHHHVbttxQIVqey6PdcsAJD\"], \"data\":{\"gcm.notification.title\": \"Help!\", \"gcm.notification.body\":\"I am Eric\"}, \"priority\": \"high\" }"^
 https://android.googleapis.com/gcm/send