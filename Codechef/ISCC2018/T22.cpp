#include <iostream>
using namespace std;
#define size 105
bool isPrime[size];
int arr[size];
int n;
int min(int a, int b)
{
    return a < b ? a : b;
}
void makePrime()
{
    for (int i = 0; i < size; i++)
        isPrime[i] = true;
    isPrime[1] = isPrime[0] = false;
    isPrime[2] = isPrime[3] = true;
    for (int i = 2; i < size; i++)
    {
        if (isPrime[i])
        {
            for (int j = i; j < size; j += i)
                isPrime[j] = false;
            isPrime[i] = true;
        }
    }
}
void print()
{
    for (int i = 1; i < size; i++)
    {
        if (isPrime[i])
            cout << i << " ";
    }
    cout << endl;
}
int foo()
{
    bool flag = true;
    int ans = 10003;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == 1)
            flag = false;
    }
    //cout << "first stage" << endl;
    if (flag)
        return -1;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] != 1)
        {
            if (isPrime[arr[i]])
                ans = min(ans, arr[i]);
        }
    }
    //cout << "second stage" << endl;
    if (ans == 10003)
        return -1;
    return ans;
}
int main()
{
    //freopen("in.txt", "r", stdin);
    //freopen("out.txt", "w", stdout);
    int t;
    scanf("%d", &t);
    makePrime();
    //print();
    while (t--)
    {
        scanf("%d", &n);
        for (int i = 0; i < n; i++)
            scanf("%d", &arr[i]);
        int ans = foo();
        printf("%d\n", ans);
    }
}
