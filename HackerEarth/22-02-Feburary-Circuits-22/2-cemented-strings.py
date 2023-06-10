t = int(input())
for _ in range(t):
    n = int(input())
    s = input()
    #print(len(s))
    total_ans = 0
    for i in range(26):
        count = 0
        for j in range(len(s)):
            if chr(ord('a')+i) == s[j]:
                total_ans += j+1-count
                count += 1
        s = s.replace(chr(ord('a')+i),'')
        if not s:
            break
    print(total_ans)