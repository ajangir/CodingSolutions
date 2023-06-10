import re
# file open all access.0-5.log
with open('inputs/access.5.log','r') as file:
    contents = file.readlines()
all_data = []
for i in contents:
    all_data.append(re.split('" - [ ]',i))
print(all_data)
# parse all data into ip,user,date,request,error code - suberror, user agent
# add all deprecated user agents in set
# add all bot ip range with comparison function string
# tokenize requests for >100 404 = 404 attack(code 1)
# same with 403 401 and 503 = Protected resourse attack (code 2)
# 503 504 502 = DOS Attack(code 3)
# parallel access from multiple ips from bots = Bot request attack (code 4)
# Invalid user-agent attack (code 5)
# output all data to txt file