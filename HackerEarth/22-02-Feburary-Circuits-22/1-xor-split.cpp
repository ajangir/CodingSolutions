#include <bits/stdc++.h>
using namespace std;
int count_set_bit(long long int n)
{
    int count = 0;
    while(n > 0)
    {
        n &= (n-1);
        count ++;
    }
    return count;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    int t;cin>>t;
    while(t--)
    {
        long long int n;cin>>n;
        int cnt_bit = count_set_bit(n);
        if(cnt_bit == 0 || cnt_bit == 1)
        {
            cout<<0<<"\n";
        }
        else cout<<1<<"\n";
    }

}