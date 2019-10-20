#include <iostream>
using namespace std;
#define P 1000000007
#define length_fact_array 1000000
unsigned long long int fact[length_fact_array];
void make_fact_array()
{
    fact[0] = 1;
    for(int i=1;i<length_fact_array;i++)
    {
        fact[i] = (fact[i-1]*i)%P;
    }
}
unsigned long long int power(unsigned long long int base,unsigned long long int expo)
{
    if(expo == 0 || base == 1)return 1;
    if(expo == 1)return base;
    unsigned long long int temp = power(base,expo/2);
    temp = (temp*temp)%P;
    return expo%2 ? (temp*base)%P : temp;
}
unsigned long long int mod_inverse(unsigned long long int x)
{
    return power(x,P-2);
}
unsigned long long int ncr(int n,int r)
{
    if(r==0)return 1;
    return (fact[n]*(mod_inverse(fact[r])*mod_inverse(fact[n-r])%P))%P;
}
int main() {
	make_fact_array();
	int T;
	cin>>T;
	while(T--)
	{
	    int n,m,k;
	    unsigned long long int ans = 0;
	    cin>>n>>m>>k;
	    for(int i=k;i<=n;i++)
	    {
	        ans += ncr(n,i)*power(m-1,n-i)%P;
	        ans %= P;
	    }
	    cout<<ans<<endl;
	}
	return 0;
}
