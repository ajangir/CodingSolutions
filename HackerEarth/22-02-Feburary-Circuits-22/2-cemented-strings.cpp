#include <bits/stdc++.h>
using namespace std;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    
    int t;
    cin>>t;
    while(t--)
    {
        int n;cin>>n;
        string s;cin>>s;
        int total_ans = 0;
        for(int i=0;i<26;i++)
        {
            int count = 0;
            string temp = "";
            for(int j=0;j<s.length();j++)
            {
                if(s[j] == 'a'+i)
                {
                    total_ans += j+1-count;
                    count ++;
                }
                else temp += s[j];
            }
            s = temp;
            if(s.empty())break;
        }
        cout<<total_ans<<"\n";
    }
    
}