def LCIS(arr1, n, arr2, m):
    table = [0] * m
    for i in range(n):
        current = 0
        for j in range(m):
            if (arr1[i] == arr2[j]):
                if (current + 1 > table[j]):
                    table[j] = current + 1
            if (arr1[i] > arr2[j]):
                if (table[j] > current):
                    current = table[j]
    result = 0
    for i in range(m):
        if (table[i] > result):
            result = table[i]
    print(table)
    return result
n,m = map(int,input().split())
a,b = list(map(int,input().split())),list(map(int,input().split()))
st = {}
for i in range(n):
    if a[i] not in st:
        st[a[i]]=i
    else:
        st[a[i]] = i
print(st)
temp_len = 0;maxLen = 0
for i in range (m):
    if b[i] in st:
        temp_len += 1
    else:
        maxLen = max(maxLen,temp_len)
        temp_len = 0
    print(b[i],temp_len,maxLen)
print(n,m,a,b)
if __name__ == "__main__":
	
	arr2 = [1,2,1,4]
	arr1 = [1,4,1,1,4]

	n = len(arr1)
	m = len(arr2)

	print("Length of LCIS is",LCIS(arr1, n, arr2, m))
