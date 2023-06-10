t = int(input())
for _ in range(t):
    x,y,z = map(int,input().split())
    kk = int(input())
    ax,ay,az = list(map(int,input().split())),list(map(int,input().split())),list(map(int,input().split()))
    ans = []

    #print(x,y,z,kk,ax,ay,az)
    for i in range(x):
        for j in range(y):
            for k in range(z):
                ans.append(ax[i]+ay[j]+az[k])
    ans.sort(reverse=True)
    final_ans = 0
    #print(kk,ans)
    for i in range(kk):
        final_ans += ans[i]
    print(final_ans)