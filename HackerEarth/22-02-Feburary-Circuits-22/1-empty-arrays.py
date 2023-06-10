n = int(input())
arr0 = list(map(int,input().split()))
arr1 = list(map(int,input().split()))
ans = 0
while True:
    if not arr0:
        break
    if(arr0[0] == arr1[0]):
        arr0 = arr0[1:]
        arr1 = arr1[1:]
    else:
        arr0 = arr0[1:]+arr0[:1]
    ans += 1
    #print(arr0,arr1)
print(ans)
