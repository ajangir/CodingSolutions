#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n,p;
	    cin>>n>>p;
	    vector<int> array(n);
	    for(int i=0;i<n;i++)cin>>array[i];
	    sort(array.begin(),array.end());
	    int ans = 0;
	    for(int i=0;i<n;i++)
	    {
	        p -= array[i];
	        if(p > 0)ans++;
	        else break;
	    }
	    cout<<ans<<endl;
	}
	return 0;
}
