#include <bits/stdc++.h>

using namespace std;


int getMaxFreqDeviation(string s) 
{
    int n = s.size(),ans=0;
    for(char i='a';i<='z';i++)
    {
        for(char j='a';j<='z';j++)
        {
            if(i==j)continue;
            int x=0,y=0;
            bool flag = false;
            for(char c:s)
            {
                if(c == i)x++;
                if(c == j)y++;
                if(y > 0)
                {
                    ans=max(ans,x-y);
                }
                else
                {
                    if(flag)ans=max(ans,x-1);
                }
                if(y > x)x=0,y=0,flag=true;
            }
        }
    }
    return ans;
}
int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    int result = getMaxFreqDeviation(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
