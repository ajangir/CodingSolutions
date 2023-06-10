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
        int n,ans=0;
        cin>>n;
        vector<int> cap(n);
        map<int,vector<int> > mp;
        for(int i=0;i<n;i++)
        {
            cin>>cap[i];
        }
        for(int i=0;i<n-1;i++)
        {
            int x,y;
            cin>>x>>y;
            mp[x-1].push_back(y-1);
            mp[y-1].push_back(x-1);
        }
        for(int i=0;i<n;i++)
        {
            queue<int> qe;int len = 0;
            vector<bool> visited(n,false);
            qe.push(i);
            while(!qe.empty())
            {
                int x = qe.front();qe.pop();len++;
                visited[x] = true;
                for(auto j:mp[x])
                {
                    if(!visited[j] && cap[j] < cap[x])qe.push(j);
                }
            }
            ans = max(ans,len);
        }
        cout<<"Case #"<<t<<": "<<ans<<endl;
    }
}