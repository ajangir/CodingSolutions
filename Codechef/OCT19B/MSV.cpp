#include <iostream>
#include <vector>
#include <map>
using namespace std;

map<int,int> data;
int foo(int n)
{
    int ans = data[n];
    for(int i=1;i*i<=n;i++)
    {
        if(n%i == 0)
        {
            if(n/i == i)data[i]++;
            else
            {
                data[i]++;
                data[n/i]++;
            }
        }
    }
    return ans;
}
int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin>>n;
	    vector<int> array(n);
	    for(int i=0;i<n;i++)cin>>array[i];
	    int ans = 0;
	    data.clear();
	    for(int i=0;i<n;i++)
	    {
	        int count = foo(array[i]);
	        ans = ans > count ? ans : count;
	    }
	    cout<<ans<<endl;
	}
	return 0;
}
