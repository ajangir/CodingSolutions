from queue import Queue
# Write your code here
t = int(input())
visited = []
cost = []
max_val = 999999999
def isvalid(i,j,n):
    return True if (i>=0 and j >= 0 and i < n and j < n) else False

for _ in range(t):
    n = int(input())
    visited = [[False for _ in range(n)] for _ in range(n)]
    cost = [[max_val for _ in range(n)]for _ in range(n)]
    d = []
    q = Queue()
    #print('qs',list(q.queue),visited)
    for i in range(n):
        st = input()
        #print(st,len(st))
        for j in range(n):
                if st[j] == '^':
                    visited[i][j] = True
                    cost[i][j] = 0
                    q.put([i,j])
                if st[j] == '#':
                    visited[i][j] = True
                if st[j] == '*':
                    d.extend([i,j])
                #print('qs',i,j,list(q.queue),st[j])
    '''print(dest)
    for i in range(n):
        print(cost[i],visited[i])'''
    while not q.empty():
        var = q.get()
        x,y,dx,dy = var[0],var[1],[-1,0,0,1],[0,-1,1,0]
        for i in range(len(dx)):
            n_x,n_y = x+dx[i],y+dy[i]
            if isvalid(n_x,n_y,n) and (not visited[n_x][n_y]) and (cost[n_x][n_y] > 1 + cost[x][y]):
                q.put([n_x,n_y])
                visited[n_x][n_y] = True
                cost[n_x][n_y] = 1 + cost[x][y]
        #print('q',list(q.queue))
        #for i in range(n):
            #print(cost[i],visited[i])    
    '''for i in range(n):
        print(cost[i],visited[i])
    print(d)'''
    if cost[d[0]][d[1]] != max_val and cost[d[2]][d[3]] != max_val:
        print('Yes');print(max(cost[d[0]][d[1]],cost[d[2]][d[3]]))
    else:
        print("No")