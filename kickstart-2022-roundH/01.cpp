#include <bits/stdc++.h>
using namespace std;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    //freopen("01.in","r",stdin);
    int T;cin>>T;
    for(int t=1;t<=T;t++)
    {
        long long int l,n;cin>>l>>n;
        long long int sum = 0,ans=0;
        long long int x;char f_c='0',l_c;
        for(int i=0;i<n;i++)
        {
            char c;
            cin>>x>>c;
            if(f_c == '0')f_c = c;
            if(c == f_c)
            {
                //if(sum == 0 && l_c != c)ans--;
                sum +=x;
                ans += sum/l;
                sum %= l;
            }
            else
            {
                //if(sum == 0 && l_c != c)ans--;
                sum -= x;
                if(sum < 0)
                {
                    ans += abs(sum)/l;
                    sum = -1*(abs(sum)%l);
                }
                else
                {
                    ans += sum/l;
                    sum %= l;
                }
            }
            l_c = c;
            //cout<<ans<<" "<<sum<<endl;
        }
        cout<<"Case #"<<t<<": "<<ans<<endl;
    }
}