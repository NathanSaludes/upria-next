[Account]
-  id														(int, auto-generated, auto-increment)
-  uuid													(string, unique)
-  user													([User])
-  photo													(string, url)
-  last_session										(date)
-  account_type										[enum, ['client','agent','admin']]
-  settings												([AccountSetting])
-  activity_logs										([SystemLog][])
<!-- agent-only fields -->
-  occupation											(string)
-  company												(string)
-  subscription_history								([Subscription][])
-  licenses												([License][])
-  notifications										([Notification][])
-  listings												([Property][])
-  received_inquiries								([Inquiry][])
-  groups												([Group][])
-  verified_agent_status							(boolean)

[User]
-  id														(int, auto-generated, auto-increment)
-  email													(string)
-  uuid													(string)
-  first_name											(string)
-  last_name											(string)
-  middle_name											(string)
-  suffix												(string)
-  birth_date											(date)
-  verified												(boolean)
-  pronoun												(string)
-  phone_number										(string)
-  nationality											(string)

[AccountSetting]
-  id														(int, auto-generated, auto-increment)
-  account												([Account])
-  time_format											(enum, [...?])
-  date_format											(enum, [...?])
-  theme													(enum, ['light','dark','system'])
-  ...

[Subscription]
-  id														(int, auto-generated, auto-increment)
-  user													([Account])
-  start_date											(date)
-  expiration_date									(date)
-  payment_method										(string)
-  status												(enum, ['active','expired','canceled','pending'])

[Inquiry]
-  id														(int, auto-generated, auto-increment)
-  sender												([Account])
-  receiver												([Account])
-  property												([Property])
-  inquiry_subject									(string)
-  inquiry_body										(string)

[Bookmark]
-  id														(int, auto-generated, auto-increment)
-  user													([Account])
-  property												([Property])

[Notification]
-  id														(int, auto-generated, auto-increment)
-  uuid													(string)
-  user													([Account])
-  title													(string)
-  message												(string)
-  read													(datetime)

[License]
-  id														(int, auto-generated, auto-increment)
-  license_uid											(string)
-  photo													(string, url)
-  user													([Account])

[Media]
-  id														(int, auto-generated, auto-increment)
-  type													(enum, ['image','video'])
-  url													(string, url)
-  uploaded_by											([Account])

[Group]
-  id														(int, auto-generated, auto-increment)
-  name													(string, unique)
-  description											(string)
-  members												([Account][])

[SystemLog]
-  id														(int, auto-generated, auto-increment)
-  timestamp											(datetime)
-  message												(string)
-  user_id												([Account])
-  additional_data									(json)
-  ip_address											(string, ip_address)
-  log_level											(enum, ['DEBUG','INFO','WARNING','ERROR'])