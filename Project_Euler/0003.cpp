//Answer: 6857
//Problem Name: Largest prime factor
#include <iostream>
#include <cmath>
using namespace std;
long long int q = 600851475143;
long long int largestPrimeFactor(long long int n)
{
    long long int ans = -1;
    while(n%2 == 0)
    {
        ans = 2;
        n /= 2;
    }
    for(int i=3;i<=sqrt(n);i+=2)
    {
        while(n%i == 0)
        {
            ans = i;
            n = n/i;
        }
    }
    if(n > 2)ans = n;
    return n;
}
int main()
{
    int ans = largestPrimeFactor(q);
    cout<<ans<<endl;
}