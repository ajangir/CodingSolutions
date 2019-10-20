#include <iostream>
#include <vector>
using namespace std;
int min(int a,int b)
{
    return a < b ? a : b;
}
int main() 
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<int> a(n);
        for(int i=0;i<n;i++)cin>>a[i];
        int ans = 1;
        for(int i=1;i<n;i++)
        {
            bool flag = true;
            if(i-1 >= 0)flag &= a[i]<a[i-1];
            if(i-2 >= 0)flag &= a[i]<a[i-2];
            if(i-3 >= 0)flag &= a[i]<a[i-3];
            if(i-4 >= 0)flag &= a[i]<a[i-4];
            if(i-5 >= 0)flag &= a[i]<a[i-5];
            if(flag)ans++;
        }
        cout<<ans<<endl;
    }
	return 0;
}
