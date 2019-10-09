#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

#define P 1000000007
#define N 2003
long long int fac[N];

void foo()
{
    fac[0] = 1;
    for(int i = 1;i<N;i++)
    {
        fac[i] = fac[i-1]*i%P;
    }
}
int power(int base,int p)
{
    if(p == 0 || base == 1)return 1;
    if(p == 1)return base;
    long long int temp = power(base,p/2);
    temp = temp*temp%P;
    if(p%2)return temp*base%P;
    return temp%P;
}
int modinverse(int x)
{
    return power(x,P-2);
}
int ncr(int n,int r)
{
	if(r > n)return 0;
	if(r == n)return 1;
    return ((long long int)modinverse(fac[n-r])*modinverse(fac[r])%P)*fac[n]%P;
}
int main()
{
    foo();
    int t;
    cin>>t;
    while(t--)
    {
        int n,k,p;
        cin>>n>>k>>p;
        vector<int> array(n);
        for(int i=0;i<n;i++)cin>>array[i];
        sort(array.begin(),array.end());
        long long int ans = 0;
        for(int i=0;i<n;i++)
        {
            int count = 0;
            for(int j=i+1;j<n;j++)
            {
               if(array[j]-array[i] <= p)
			   {
			   		count++;
			   }
            }
            ans += ((long long int)ncr(n-1-i,k-1)-ncr(n-1-i-count,k-1)+P)%P;
        }
        cout<<ans%P<<endl;
    }
    return 0;
}
