n = int(input())
arr0,arr1 = list(map(int,input().split())),list(map(int,input().split()))
arr0.sort(reverse=True)
arr1.sort()
#print(n,arr0,arr1)
ans = 0
for i in range(n):
    ans += arr0[i]-arr1[i] if arr0[i] > arr1[i] else 0
print(ans)
#print(n,arr0,arr1)