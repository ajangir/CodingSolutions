def count_set_bit(n):
    count = 0
    while(n):
        n &= (n-1)
        count += 1
    return count
t = int(input())
while t > 0:
    n = int(input())
    if count_set_bit(n) in [0,1]:
        print(0)
    else:
        print(1)
    t-=1
