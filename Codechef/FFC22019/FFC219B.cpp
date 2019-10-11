#include <iostream>
using namespace std;
#define P 1000000007
#define N 100007
long long int data[N];
void foo()
{
    data[0] = 0;
    long long int a1=1,a2=2,a3=3,a4=4;
    for(int i=1;i<N;i++)
    {
        data[i] = (((a1*a4)%P)*((a2*a3)%P))%P;
        a1++;a2++;a3++;a4++;
    }
    for(int i=1;i<N;i++)
    {
        data[i] += data[i-1];
        data[i] %= P;
    }
}
int main() 
{
    int t;
    cin>>t;
    foo();
    while(t--)
    {
        int l,r;
        cin>>l>>r;
        int ans = data[r]-data[l-1];
        ans  = (P+ans)%P;
        cout<<ans<<endl;
    }
	return 0;
}
